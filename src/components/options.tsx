import React, { FC } from "react";
import { useDebouncedCallback } from "use-debounce";

import Spinner from "./spinner";
import { IForm } from "../app";
import {
  Content,
  Sort,
  Filter,
  Price,
  Air,
  AirItem,
} from "../style/options_style";

interface IProps {
  airItems: string[] | null;
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
  form: IForm;
  setNumeric: React.Dispatch<React.SetStateAction<number>>;
}

const Options: FC<IProps> = ({ airItems, setForm, form }) => {
  const debouncedA = useDebouncedCallback((priceA) => {
    if (priceA) {
      setForm({ ...form, priceA: priceA });
    } else {
      setForm({ ...form, priceA: 0 });
    }
  }, 1000);

  const debouncedB = useDebouncedCallback((priceB) => {
    if (priceB) {
      setForm({ ...form, priceB: priceB });
    } else {
      setForm({ ...form, priceB: Infinity });
    }
  }, 1000);

  // console.log("form", form);
  // console.log("watch", watch());

  const airFilter = (name: string) => {
    form.air.includes(name)
      ? setForm({
          ...form,
          air: [...form.air.filter((item) => item !== name)],
        })
      : setForm({ ...form, air: [...form.air, name] });
  };

  const filterFilter = (opt: string) => {
    form.filter.includes(opt)
      ? setForm({
          ...form,
          filter: [...form.filter.filter((item) => item !== opt)],
        })
      : setForm({ ...form, filter: [...form.filter, opt] });
  };

  if (airItems) {
    return (
      <Content>
        <Sort>
          <h2>Сортировать</h2>
          <label htmlFor="up">
            <input
              type="radio"
              id="up"
              value="1"
              onClick={() => setForm({ ...form, sort: "1" })}
              name="sort"
              defaultChecked
            />{" "}
            - <span>по возрастанию цены</span>
          </label>
          <label htmlFor="down">
            <input
              type="radio"
              id="down"
              value="2"
              onClick={() => setForm({ ...form, sort: "2" })}
              name="sort"
            />{" "}
            - <span>по убыванию цены</span>
          </label>
          <label htmlFor="time">
            <input
              type="radio"
              id="time"
              value="3"
              onClick={() => setForm({ ...form, sort: "3" })}
              name="sort"
            />{" "}
            - <span>по времени в пути</span>
          </label>
        </Sort>
        <Filter>
          <h2>Фильтровать</h2>
          <label htmlFor="true">
            <input
              type="checkbox"
              id="true"
              value="1"
              onClick={() => filterFilter("1")}
            />{" "}
            - <span>1 пересадка</span>
          </label>
          <label htmlFor="false">
            <input
              type="checkbox"
              id="false"
              value="2"
              onClick={() => {
                filterFilter("2");
              }}
            />{" "}
            - <span>без пересадок</span>
          </label>
        </Filter>
        <Price>
          <h2>Цена</h2>
          <label htmlFor="priceA">
            <p>от</p>{" "}
            <input
              type="number"
              id="priceA"
              onChange={(e) => debouncedA(Number(e.target.value))}
            />
          </label>

          <label htmlFor="priceB">
            <p>до</p>{" "}
            <input
              type="number"
              id="priceB"
              onChange={(e) => debouncedB(Number(e.target.value))}
            />
          </label>
        </Price>
        <Air>
          <h2>Авиакомпании</h2>
          {airItems?.map((item, index) => {
            return (
              <label key={index} htmlFor={item}>
                <input
                  type="checkbox"
                  value={item}
                  id={item}
                  onClick={() => airFilter(item)}
                />{" "}
                - <AirItem>{item}</AirItem>
              </label>
            );
          })}
        </Air>
      </Content>
    );
  } else {
    return <Spinner />;
  }
};

export default Options;
