import React, { FC, useState, useEffect } from "react";
import _sortby from "lodash.sortby";
import _chunk from "lodash.chunk";
import _map from "lodash.map";

import {
  Content,
  Cards,
  Card,
  Title,
  Button,
  Info,
  Logo,
  Time,
  Transfer,
  Sity,
  More,
} from "../style/carts_style";
import { IForm } from "../app";
import { air } from "../assets/svg";

interface IProps {
  items: any;
  form: IForm;
}

const Carts: FC<IProps> = ({ items, form }) => {
  const [cards, setCards] = useState<any | null>(null);
  const [numeric, setNumeric] = useState<number>(2);

  console.log(form.sort);

  const getTimeFromMins = (mins: number) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч " + minutes + "мин";
  };

  useEffect(() => {
    if (items) {
      let res = items.flights.map((item: any) => {
        return item.flight;
      });

      if (form.sort === "1") {
        res = _sortby(res, [
          function (item) {
            return Number(item.price.passengerPrices[0].total.amount);
          },
        ]);
      } else if (form.sort === "2") {
        res = _sortby(res, [
          function (item) {
            return Number(item.price.passengerPrices[0].total.amount);
          },
        ]).reverse();
      }

      setCards(res.slice(0, numeric));
    }
  }, [items, numeric, form]);

  console.log(cards);

  if (cards) {
    return (
      <Content>
        <Cards>
          {cards.map((item: any, index: number) => {
            let date = (d: string) => {
              const res = [new Date(d)].toString().split("G");

              return res[0]
                .replace(/Tue/gi, "ср")
                .replace(/Aug/gi, "авг.")
                .replace(/Wed/gi, "чт")
                .replace(/Thu/gi, "пят")
                .slice(0, -4)
                .split("2020");
            };

            const info = (n: boolean) => {
              let segment =
                item.legs[`${n ? 0 : 1}`].segments.length > 1 ? 1 : 0;

              return (
                <Info>
                  <Sity>
                    <span>
                      {
                        item.legs[`${n ? 0 : 1}`].segments[0].departureCity
                          .caption
                      }
                      ,{" "}
                      {
                        item.legs[`${n ? 0 : 1}`].segments[0].departureAirport
                          .caption
                      }
                      <strong>
                        {" "}
                        (
                        {
                          item.legs[`${n ? 0 : 1}`].segments[0].departureAirport
                            .uid
                        }
                        )
                      </strong>
                    </span>
                    <i className="fas fa-long-arrow-alt-right"></i>{" "}
                    <span>
                      {
                        item.legs[`${n ? 0 : 1}`].segments[segment].arrivalCity
                          .caption
                      }
                      ,{" "}
                      {
                        item.legs[`${n ? 0 : 1}`].segments[segment]
                          .arrivalAirport.caption
                      }
                      <strong>
                        {" "}
                        (
                        {
                          item.legs[`${n ? 0 : 1}`].segments[segment]
                            .arrivalAirport.uid
                        }
                        )
                      </strong>
                    </span>
                  </Sity>
                  <Time>
                    <span>
                      {
                        date(
                          item.legs[`${n ? 0 : 1}`].segments[0].departureDate
                        )[1]
                      }
                      <strong>
                        {date(
                          item.legs[`${n ? 0 : 1}`].segments[0].departureDate
                        )[0]
                          .split(" ")
                          .reverse()
                          .join(" ")}
                      </strong>
                    </span>{" "}
                    <span>
                      {" "}
                      <i className="far fa-clock"></i>{" "}
                      {getTimeFromMins(item.legs[`${n ? 0 : 1}`].duration)}
                    </span>{" "}
                    <span>
                      <strong>
                        {date(
                          item.legs[`${n ? 0 : 1}`].segments[segment]
                            .arrivalDate
                        )[0]
                          .split(" ")
                          .reverse()
                          .join(" ")}
                      </strong>
                      {
                        date(
                          item.legs[`${n ? 0 : 1}`].segments[segment]
                            .arrivalDate
                        )[1]
                      }
                    </span>
                  </Time>
                  <Transfer>
                    <span></span>
                    {segment ? <h4>1 пересадка</h4> : null}
                    <span></span>
                  </Transfer>
                  <h3>
                    Рейс выполняет:{" "}
                    {item.legs[`${n ? 0 : 1}`].segments[0].airline.caption}
                  </h3>
                </Info>
              );
            };

            return (
              <Card key={index}>
                <Title>
                  <Logo>{air}</Logo>
                  <div>
                    <h5>
                      {parseInt(item.price.passengerPrices[0].total.amount)}{" "}
                      &#8381;
                    </h5>
                    <p>Стоимость для одного взрослого пассажира</p>
                  </div>
                </Title>
                {info(true)}
                {info(false)}
                <Button>Выбрать</Button>
              </Card>
            );
          })}
        </Cards>
        <More onClick={() => setNumeric((prev) => prev + 2)}>Показать еще</More>
      </Content>
    );
  } else {
    return <p>44</p>;
  }
};

export default Carts;
