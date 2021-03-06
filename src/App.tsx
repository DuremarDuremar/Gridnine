import React, { FC, useState, useEffect } from "react";
import _sortby from "lodash.sortby";
import { animateScroll as scroll } from "react-scroll";

import Options from "./components/options";
import Carts from "./components/carts";
import Server from "./data/axios";
import { Global, Content, Up } from "./style/app_style";

export type IForm = {
  sort: string;
  filter: string[];
  priceA: number;
  priceB: number;
  air: string[];
};

export const defaultForm = {
  air: [],
  filter: [],
  priceA: NaN,
  priceB: NaN,
  sort: "1",
};

const dataServer = new Server();

const App: FC = () => {
  const [items, setItems] = useState<any>(null);
  const [airItems, setairItems] = useState<string[] | null>(null);
  const [arrayFilter, setArrayFilter] = useState<any>(null); // для фасетной фильтрации
  const [filterAir, setFilterAir] = useState<string[] | null>(null);
  const [form, setForm] = useState<IForm>(defaultForm);
  const [cards, setCards] = useState<any | null>(null);
  const [numeric, setNumeric] = useState<number>(2);

  useEffect(() => {
    dataServer.getServer().then((data: any) => {
      setTimeout(() => {
        setItems(data.result);
      }, 500);
    });
  }, []);

  useEffect(() => {
    if (items) {
      setairItems([
        ...Array.from(
          new Set<string>(
            items.flights.map((item: any) => item.flight.carrier.caption)
          ).values()
        ),
      ]);
    }
  }, [items]);

  useEffect(() => {
    if (items) {
      let res = items.flights.map((item: any) => {
        return item.flight;
      });
      ////////////////////////////////////////////sort
      form.sort === "1"
        ? (res = _sortby(res, [
            function (item) {
              return Number(item.price.passengerPrices[0].total.amount);
            },
          ]))
        : form.sort === "2"
        ? (res = _sortby(res, [
            function (item) {
              return Number(item.price.passengerPrices[0].total.amount);
            },
          ]).reverse())
        : (res = _sortby(res, [
            function (item) {
              return item.legs[0].duration + item.legs[1].duration;
            },
          ]));
      ////////////////////////////////////////////////filter
      if (form.filter.length > 0) {
        res = res.filter((item: any) => {
          let sum = item.legs[0].segments.length + item.legs[1].segments.length;

          if (
            [...form.filter].includes("1") &&
            ![...form.filter].includes("2")
          ) {
            return sum > 2 && sum < 4 ? item : null;
          } else if (
            [...form.filter].includes("2") &&
            ![...form.filter].includes("1")
          ) {
            return sum < 3 && sum < 4 ? item : null;
          } else {
            return sum < 4 ? item : null;
          }
        });
      }

      ///////////////////////////////////air

      if (form.priceA || form.priceB) {
        res = res.filter((item: any) => {
          return Number(item.price.total.amount) < (form.priceB || Infinity) &&
            Number(item.price.total.amount) > (form.priceA || 0)
            ? item
            : null;
        });
      }

      setArrayFilter(res); // фасетная фильтрация
      /////////////////////////////////////////price

      if (form.air.length > 0) {
        res = res.filter((item: any) => {
          return [...form.air].includes(item.carrier.caption) ? item : null;
        });
      }

      ////////////////////////////////

      setCards(res);
    }
  }, [items, numeric, form]);

  useEffect(() => {
    if (airItems) {
      let res = airItems.filter((item) => {
        return [
          ...arrayFilter.map((item: any) => item.carrier.caption),
        ].includes(item)
          ? item
          : null;
      });
      setFilterAir(res);
    }
  }, [arrayFilter, airItems]);
  //////////////фасетная фильтрация

  return (
    <>
      <Global />
      <Content>
        <Options
          airItems={filterAir || airItems}
          setForm={setForm}
          form={form}
          setNumeric={setNumeric}
        />
        <Carts
          cards={cards ? cards.slice(0, numeric) : cards}
          setNumeric={setNumeric}
          numeric={numeric}
        />
        {numeric > 4 && (
          <Up
            onClick={() => {
              scroll.scrollToTop();
              setTimeout(() => setNumeric(2), 1500);
            }}
            className="far fa-arrow-alt-circle-up fa-4x"
          />
        )}
      </Content>
    </>
  );
};

export default App;
