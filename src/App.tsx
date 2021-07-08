import React, { FC, useState, useEffect } from "react";
import Options from "./components/options";
import Carts from "./components/carts";
import Server from "./data/axios";
import { Global, Content } from "./style/app_style";

export type IForm = {
  sort: string;
  filter: string[] | null[];
  priceA: number | null;
  priceB: number | null;
  air: string[] | null[];
};

const dataServer = new Server();

const App: FC = () => {
  const [items, setItems] = useState<any>(null);
  const [airItems, setairItems] = useState<string[] | null>(null);
  const [form, setForm] = useState<IForm>({
    air: [],
    filter: [],
    priceA: NaN,
    priceB: NaN,
    sort: "1",
  });

  // console.log(form);

  useEffect(() => {
    dataServer.getServer().then((data: any) => {
      setItems(data.result);
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

  // const airItems = items
  //   ? [
  //       ...Array.from(
  //         new Set<string>(
  //           items.flights.map((item: any) => item.flight.carrier.caption)
  //         ).values()
  //       ),
  //     ]
  //   : null;

  return (
    <>
      <Global />
      <Content>
        <Options airItems={airItems} setForm={setForm} />
        <Carts items={items} form={form} />
      </Content>
    </>
  );
};

export default App;
