import React, { FC, useState, useEffect } from "react";
import Options from "./components/options";
import Carts from "./components/carts";
import Server from "./data/axios";
import { Global, Content } from "./style/app_style";

const dataServer = new Server();

const App: FC = () => {
  const [items, setItems] = useState<any>(null);

  useEffect(() => {
    dataServer.getServer().then((data: any) => {
      setItems(data.result);
    });
  }, []);

  return (
    <>
      <Global />
      <Content>
        <Options items={items} />
        <Carts />
      </Content>
    </>
  );
};

export default App;
