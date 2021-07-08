import React, { FC } from "react";
import { useForm } from "react-hook-form";

import Spinner from "./spinner";
import { IForm, defaultForm } from "../app";
import {
  Content,
  Sort,
  Filter,
  Price,
  Air,
  AirItem,
  Buttons,
} from "../style/options_style";

interface IProps {
  airItems: string[] | null;
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
  form: IForm;
}

const Options: FC<IProps> = ({ airItems, setForm, form }) => {
  const { register, handleSubmit, watch, reset } = useForm<IForm>();

  console.log(form);
  console.log(watch());

  if (airItems) {
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

          <Buttons>
            <button onClick={handleSubmit(() => setForm(defaultForm))}>
              <i
                className="fas fa-times"
                onClick={() => reset(defaultForm)}
              ></i>
            </button>
            <button type="submit">
              <i className="fas fa-check"></i>
            </button>
          </Buttons>

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
          {airItems?.map((item, index) => {
            return (
              <label key={index} htmlFor={item}>
                <input
                  type="checkbox"
                  {...register("air")}
                  value={item}
                  id={item}
                />{" "}
                - <AirItem>{item}</AirItem>
              </label>
            );
          })}
        </Air>
      </Content>
    );
  } else {
    return <Spinner />;
  }
};

export default Options;
