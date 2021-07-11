import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";

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

  // const [priceA, setpriceA] = useState<number | null>(null);
  // const [priceB, setpriceB] = useState<number | null>(null);

  const debouncedA = useDebouncedCallback((priceA) => {
    if (priceA) {
      setForm({ ...form, priceA: priceA });
    } else {
      setForm({ ...form, priceA: 0 });
    }
  }, 1000);

  const debouncedB = useDebouncedCallback((priceB) => {
    if (priceB) {
      setForm({ ...form, priceB: priceB });
    } else {
      setForm({ ...form, priceB: Infinity });
    }
  }, 1000);

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
          <label htmlFor="up">
            <input
              type="radio"
              {...register("sort")}
              id="up"
              value="1"
              onClick={() => setForm({ ...form, sort: "1" })}
              defaultChecked
            />{" "}
            - <span>по возрастанию цены</span>
          </label>
          <label htmlFor="down">
            <input
              type="radio"
              {...register("sort")}
              id="down"
              value="2"
              onClick={() => setForm({ ...form, sort: "2" })}
            />{" "}
            - <span>по убыванию цены</span>
          </label>
          <label htmlFor="time">
            <input
              type="radio"
              {...register("sort")}
              id="time"
              value="3"
              onClick={() => setForm({ ...form, sort: "3" })}
            />{" "}
            - <span>по времени в пути</span>
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
              onClick={() => filterFilter("1")}
            />{" "}
            - <span>1 пересадка</span>
          </label>
          <label htmlFor="false">
            <input
              type="checkbox"
              {...register("filter")}
              id="false"
              value="2"
              onClick={() => {
                filterFilter("2");
              }}
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
            onChange={(e) => debouncedA(Number(e.target.value))}
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
            onChange={(e) => debouncedB(Number(e.target.value))}
          />
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
                  onClick={() => airFilter(item)}
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
