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
  setNumeric: React.Dispatch<React.SetStateAction<number>>;
}

const Options: FC<IProps> = ({ airItems, setForm, form, setNumeric }) => {
  const { register, handleSubmit, reset } = useForm<IForm>({
    defaultValues: form,
  });

  // console.log("form", form);
  // console.log("watch", watch());

  const airFilter = (name: string) => {
    form.air.includes(name)
      ? setForm({
          ...form,
          air: [...form.air.filter((item) => item !== name)],
        })
      : setForm({ ...form, air: [...form.air, name] });
  };

  const filterFilter = (opt: string) => {
    form.filter.includes(opt)
      ? setForm({
          ...form,
          filter: [...form.filter.filter((item) => item !== opt)],
        })
      : setForm({ ...form, filter: [...form.filter, opt] });
  };

  if (airItems) {
    return (
      <Content onSubmit={handleSubmit((data: IForm) => setForm(data))}>
        <Sort>
          <h2>Сортировать</h2>
          <label htmlFor="up" onClick={() => setForm({ ...form, sort: "1" })}>
            <input
              type="radio"
              {...register("sort")}
              id="up"
              value="1"
              defaultChecked
            />{" "}
            - <span>по возрастанию цены</span>
          </label>
          <label htmlFor="down" onClick={() => setForm({ ...form, sort: "2" })}>
            <input type="radio" {...register("sort")} id="down" value="2" /> -{" "}
            <span>по убыванию цены</span>
          </label>
          <label htmlFor="time" onClick={() => setForm({ ...form, sort: "3" })}>
            <input type="radio" {...register("sort")} id="time" value="3" /> -{" "}
            <span>по времени в пути1</span>
          </label>
        </Sort>
        <Filter>
          <h2>Фильтровать</h2>
          <label htmlFor="true" onClick={() => filterFilter("1")}>
            <input
              type="checkbox"
              {...register("filter")}
              id="true"
              value="1"
            />{" "}
            - <span>1 пересадка</span>
          </label>
          <label
            htmlFor="false"
            onClick={() => {
              filterFilter("2");
            }}
          >
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

          <input
            type="number"
            {...register("priceA", { valueAsNumber: true })}
            id="priceA"
            placeholder="от"
          />

          <Buttons>
            <button onClick={handleSubmit(() => setForm(defaultForm))}>
              <i
                className="fas fa-times"
                onClick={() => {
                  reset({ ...form, priceA: NaN, priceB: NaN });
                  setNumeric(2);
                }}
              ></i>
            </button>
            <button type="submit">
              <i className="fas fa-check"></i>
            </button>
          </Buttons>

          <input
            type="number"
            {...register("priceB", { valueAsNumber: true })}
            id="priceB"
            placeholder="до"
          />
        </Price>
        <Air>
          <h2>Авиакомпании</h2>
          {airItems?.map((item, index) => {
            return (
              <label key={index} htmlFor={item} onClick={() => airFilter(item)}>
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
