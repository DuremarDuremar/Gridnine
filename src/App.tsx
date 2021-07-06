import React, { FC } from "react";

import data from "./data/flights.json";
import Options from "./components/options";
import Carts from "./components/carts";
import { Global, Content } from "./style/app_style";

const App: FC = () => {
  console.log(data);

  return (
    <>
      <Global />
      <Content>
        <Options />
        <Carts />
      </Content>
    </>
  );
};

export default App;
