import React, { FC, useState, useEffect } from "react";
import _sortby from "lodash.sortby";
import _chunk from "lodash.chunk";
import _map from "lodash.map";

import { Content, Card, Title, Button, Info, Logo } from "../style/carts_style";
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

  useEffect(() => {
    if (items) {
      const res = items.flights.map((item: any) => {
        return item.flight;
      });

      setCards(_chunk(res, 12));
    }
  }, [items]);

  // console.log(cards);

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
              <Info>1</Info>
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
