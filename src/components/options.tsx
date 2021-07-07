import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { IForm } from "../app";
import { Content, Sort, Filter, Price, Air } from "../style/options_style";

interface IProps {
  items: any;
  form: IForm;
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
}

const Options: FC<IProps> = ({ items, form, setForm }) => {
  const { register, watch, handleSubmit } = useForm<IForm>();

  const air = items
    ? [
        ...Array.from(
          new Set<string>(
            items.flights.map((item: any) => item.flight.carrier.caption)
          ).values()
        ),
      ]
    : null;

  if (items) {
    return (
      <Content onSubmit={handleSubmit((data) => setForm(data))}>
        <Sort>
          <h2>Сортировать</h2>
          <label htmlFor="up">
            <input
              type="radio"
              {...register("sort")}
              id="up"
              value="1"
              defaultChecked
            />{" "}
            - <span>по возрастанию цены</span>
          </label>
          <label htmlFor="down">
            <input type="radio" {...register("sort")} id="down" value="2" /> -{" "}
            <span>по убыванию цены</span>
          </label>
          <label htmlFor="time">
            <input type="radio" {...register("sort")} id="time" value="3" /> -{" "}
            <span>по времени в пути</span>
          </label>
        </Sort>
        <Filter>
          <h2>Фильтровать</h2>
          <label htmlFor="true">
            <input
              type="checkbox"
              {...register("filter")}
              id="true"
              value="1"
            />{" "}
            - <span>1 пересадка</span>
          </label>
          <label htmlFor="false">
            <input
              type="checkbox"
              {...register("filter")}
              id="false"
              value="2"
            />{" "}
            - <span>без пересадок</span>
          </label>
        </Filter>
        <Price>
          <h2>Цена</h2>
          <label htmlFor="priceA">
            <span>От </span>
            <input
              type="number"
              {...register("priceA", { valueAsNumber: true })}
              id="priceA"
            />
          </label>
          <br />
          <label htmlFor="priceB">
            <span>До </span>
            <input
              type="number"
              {...register("priceB", { valueAsNumber: true })}
              id="priceB"
            />
          </label>
        </Price>
        <Air>
          <h2>Авиакомпании</h2>
          {air?.map((item, index) => {
            return (
              <label key={index} htmlFor={item}>
                <input
                  type="checkbox"
                  {...register("air")}
                  value={item}
                  id={item}
                />{" "}
                - <span>{item}</span>
              </label>
            );
          })}
        </Air>
        <input type="submit" />
      </Content>
    );
  } else {
    return <p>44</p>;
  }
};

export default Options;
