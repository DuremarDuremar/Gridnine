import React, { FC } from "react";
import { Content, Sort, Filter, Price, Air } from "../style/options_style";

interface IProps {
  items: any;
}

const Options: FC<IProps> = ({ items }) => {
  const air = items
    ? [
        ...Array.from(
          new Set<string>(
            items.flights.map((item: any) => item.flight.carrier.caption)
          ).values()
        ),
      ]
    : null;

  // const air = () => {
  //   if (items) {
  //     const comp = items.flights.map((item: any) => {
  //       return item.flight.carrier.caption;
  //     });
  //     return [...Array.from([new Set(comp)])];
  //   } else {
  //     return null;
  //   }
  // };
  if (air) {
    console.log(air);
  }

  return (
    <Content>
      <Sort>
        <h2>Сортировать</h2>
        <label htmlFor="up">
          <input type="radio" name="sort" id="up" value="1" defaultChecked /> -{" "}
          <span>по возрастанию цены</span>
        </label>
        <label htmlFor="down">
          <input type="radio" name="sort" id="down" value="2" /> -{" "}
          <span>по убыванию цены</span>
        </label>
        <label htmlFor="time">
          <input type="radio" name="sort" id="time" value="3" /> -{" "}
          <span>по времени в пути</span>
        </label>
      </Sort>
      <Filter>
        <h2>Фильтровать</h2>
        <label htmlFor="true">
          <input type="checkbox" id="true" /> - <span>1 пересадка</span>
        </label>
        <label htmlFor="false">
          <input type="checkbox" id="false" /> - <span>без пересадок</span>
        </label>
      </Filter>
      <Price>
        <h2>Цена</h2>
        <label htmlFor="after">
          <span>От </span>
          <input type="number" id="after" />
        </label>
        <br />
        <label htmlFor="before">
          <span>До </span>
          <input type="number" id="before" />
        </label>
      </Price>
      <Air>
        <h2>Авиакомпании</h2>
        {items &&
          air?.map((item, index) => {
            return (
              <label key={index} htmlFor={item}>
                <input type="checkbox" value={item} id={item} /> -{" "}
                <span>{item}</span>
              </label>
            );
          })}
      </Air>
    </Content>
  );
};

export default Options;
