import React, { FC, useState, useEffect } from "react";
import _sortby from "lodash.sortby";
import _chunk from "lodash.chunk";
import _map from "lodash.map";

import {
  Content,
  Card,
  Title,
  Button,
  Info,
  Logo,
  Top,
  Bottom,
  Time,
  Transfer,
  Sity,
} from "../style/carts_style";
import { IForm } from "../app";
import { air } from "../assets/svg";

interface IProps {
  items: any;
  form: IForm;
}

const Carts: FC<IProps> = ({ items, form }) => {
  const [cards, setCards] = useState<any | null>(null);
  const [pag, setPag] = useState<number>(0);

  // console.log(form);

  const getTimeFromMins = (mins: number) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч " + minutes + "мин";
  };

  useEffect(() => {
    if (items) {
      const res = items.flights.map((item: any) => {
        return item.flight;
      });

      setCards(_chunk(res, 6));
    }
  }, [items]);

  console.log(cards);

  if (items) {
    // console.log("bestPrices", items.bestPrices.ONE_CONNECTION.bestFlights);
    // console.log("flights", items.flights);
    // const res = items.flights.map((item: any) => {
    //   return item.flight.price.passengerPrices[0].feeAndTaxes;
    // });
    // console.log(res);
    // console.log(sortby(res, ["amount"]));
  }

  if (cards) {
    return (
      <Content>
        {cards[pag].map((item: any, index: number) => {
          let date = (d: string) => {
            const res = [new Date(d)].toString().split("G");
            return res[0].slice(0, -4).split("2020");
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
              <Info>
                <Top>
                  <Sity>
                    <span>
                      {item.legs[0].segments[0].departureCity.caption},{" "}
                      {item.legs[0].segments[0].departureAirport.caption}
                      <strong>
                        {" "}
                        ({item.legs[0].segments[0].departureAirport.uid})
                      </strong>
                    </span>
                    <i className="fas fa-long-arrow-alt-right"></i>{" "}
                    <span>
                      {item.legs[0].segments[1].arrivalCity.caption},{" "}
                      {item.legs[0].segments[1].arrivalAirport.caption}
                      <strong>
                        {" "}
                        ({item.legs[0].segments[1].arrivalAirport.uid})
                      </strong>
                    </span>
                  </Sity>
                  <Time>
                    <span>
                      {date(item.legs[0].segments[0].departureDate)[1]}
                      <strong>
                        {date(item.legs[0].segments[0].departureDate)[0]
                          .split(" ")
                          .reverse()
                          .join(" ")}
                      </strong>
                    </span>{" "}
                    <span>
                      {" "}
                      <i className="far fa-clock"></i>{" "}
                      {getTimeFromMins(item.legs[0].duration)}
                    </span>{" "}
                    <span>
                      <strong>
                        {date(item.legs[0].segments[1].arrivalDate)[0]
                          .split(" ")
                          .reverse()
                          .join(" ")}
                      </strong>
                      {date(item.legs[0].segments[1].arrivalDate)[1]}
                    </span>
                  </Time>
                  <Transfer>
                    <span></span>
                    <h4>1 пересадка</h4>
                    <span></span>
                  </Transfer>
                  <h3>Рейс выполняет</h3>
                </Top>
                <Bottom></Bottom>
              </Info>
              <Button>2</Button>
            </Card>
          );
        })}
      </Content>
    );
  } else {
    return <p>44</p>;
  }
};

export default Carts;
