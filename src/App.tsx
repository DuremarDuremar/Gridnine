import React, { FC, useState, useEffect } from "react";
import Options from "./components/options";
import Carts from "./components/carts";
import Server from "./data/axios";
import { Global, Content } from "./style/app_style";

export type IForm = {
  sort: string;
  filter: string;
  priceA: number | null;
  priceB: number | null;
  air: string;
};

const dataServer = new Server();

const App: FC = () => {
  const [items, setItems] = useState<any>(null);
  const [form, setForm] = useState<IForm | null>(null);

  useEffect(() => {
    dataServer.getServer().then((data: any) => {
      setItems(data.result);
    });
  }, []);

  return (
    <>
      <Global />
      <Content>
        <Options items={items} form={form} setForm={setForm} />
        <Carts />
      </Content>
    </>
  );
};

export default App;
