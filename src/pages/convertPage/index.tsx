import React, { useCallback, useState } from "react";
import clsx from "clsx";
import { Formik } from "formik";
import { Audio } from "react-loader-spinner";
import Btn from "../../component/btn";
import DropMenu from "../../component/dropMenu";
import InputText from "../../component/inputText";
import { useActions } from "../../redux/hooks/useActions";
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
import "./style.scss";
import ICONS from "../../assets/icons";
import { currencyList, ICurrencyList } from "../../constantData/currencyList";

interface FormValues {
  from?: ICurrencyList;
  to?: ICurrencyList;
  sum: string;
}

const ConvertPage: React.FC = () => {
  const { loading, res } = useTypedSelector((state) => state.convertPage);
  const { fetchConvert } = useActions();

  const [open, setOpen] = useState(false);

  const initialValues: FormValues = {
    from: currencyList[0],
    to: currencyList[1],
    sum: "1",
  };

  const submitHandler = useCallback((v: FormValues) => {
    v.from && v.to && v.sum && fetchConvert(v.from?.code, v.to?.code, v.sum);
  }, []);

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      {({ handleChange, setFieldValue, handleSubmit, values }) => {
        return loading ? (
          <Audio
            height="80"
            width="80"
            color="black"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: "center" }}
          />
        ) : (
          <div className="convertPage">
            <div>
              <InputText
                valueInput={values.sum}
                onChange={handleChange("sum")}
              />
              <DropMenu
                width="27.6%"
                title="From"
                selectedValue={`${values.from?.symbol} ${values.from?.code} - ${values.from?.label}`}
                onChange={(value) => {
                  setFieldValue("from", value);
                }}
              />
              <div
                onClick={() => {
                  setOpen((prev) => !prev);
                  setFieldValue("to", values.from);
                  setFieldValue("from", values.to);
                }}
                className={clsx(
                  "convertPage__swap",
                  open && "convertPage__swapOpen"
                )}
              >
                <ICONS.utils.swap />
              </div>
              <DropMenu
                width="27.6%"
                title="To"
                selectedValue={`${values.to?.symbol} ${values.to?.code} - ${values.to?.label}`}
                onChange={(value) => {
                  setFieldValue("to", value);
                }}
              />
            </div>
            <div className="convertPage__button">
              {"result" in res ? (
                <p>{` ${res.query?.amount} ${
                  res.query?.from
                } = ${res.result?.toFixed(3)} ${res.query?.to}`}</p>
              ) : (
                ""
              )}
              <Btn onClick={handleSubmit} title="Convert" />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ConvertPage;
