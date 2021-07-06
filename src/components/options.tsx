import React, { FC } from "react";
import { Content, Sort, Filter, Price, Air } from "../style/options_style";

const Options: FC = () => {
  return (
    <Content>
      <Sort>
        <h2>Сортировать</h2>
        <label htmlFor="up">
          <input type="radio" name="sort" id="up" /> -{" "}
          <span>по возрастанию цены</span>
        </label>
        <label htmlFor="down">
          <input type="radio" name="sort" id="down" /> -{" "}
          <span>по убыванию цены</span>
        </label>
        <label htmlFor="time">
          <input type="radio" name="sort" id="time" /> -{" "}
          <span>по времени в пути</span>
        </label>
      </Sort>
      <Filter>
        <h2>Фильтровать</h2>
      </Filter>
      <Price>
        <h2>Цена</h2>
      </Price>
      <Air>
        <h2>Авиакомпании</h2>
      </Air>
    </Content>
  );
};

export default Options;
