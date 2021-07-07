import React, { FC, useState, useEffect } from "react";
import _sortby from "lodash.sortby";
import _map from "lodash.map";

import { Content, Card, Title, Button, Info } from "../style/carts_style";
import { IForm } from "../app";

interface IProps {
  items: any;
  form: IForm;
}

const Carts: FC<IProps> = ({ items, form }) => {
  const [cards, setCards] = useState<any | null>(null);

  // console.log(form);

  useEffect(() => {
    if (items) {
      const res = items.flights.map((item: any) => {
        console.log(items);

        return item.flight;
      });

      setCards(res);
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
        {cards.map((item: any, index: number) => {
          return (
            <Card key={index}>
              <Title>{item.price.passengerPrices[0].total.amount}</Title>
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
