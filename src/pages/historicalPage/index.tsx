// Libraries
import React from "react";
import { Formik } from "formik";
import { Audio } from "react-loader-spinner";
import moment from "moment";
// Component
import Btn from "../../component/btn";
import Calendar from "../../component/calendar";
import DropMenu from "../../component/dropMenu";
// Redux
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
import { useActions } from "../../redux/hooks/useActions";
// style
import "./style.scss";
import { currencyList } from "../../constantData/currencyList";

interface MyFormValues {
  date: Date;
  base?: typeof currencyList[0];
}

const HistoricalPage: React.FC = () => {
  const { loading, res } = useTypedSelector((state) => state.historicalPage);
  const { fetchHistorical } = useActions();

  const initialValues: MyFormValues = {
    date: new Date(),
    base: currencyList[0],
  };

  const resArr = res.rates ? Object.entries(res.rates) : [];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(v) => {
        let newDate = moment(v.date).format("YYYY-MM-DD");
        v.base?.code && fetchHistorical(newDate, v.base?.code);
      }}
    >
      {({ setFieldValue, handleSubmit, values }) => {
        return loading ? (
          <Audio
            height="80"
            width="80"
            color="black"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: "center" }}
          />
        ) : (
          <div className="historicalPage">
            <Calendar
              startDate={values.date}
              range={false}
              setStartDate={(v) => {
                setFieldValue("date", v);
              }}
            />
            <div className="historicalPage__dropBox">
              <DropMenu
                width="100%"
                title="Base Currency:"
                selectedValue={`${values.base?.symbol} ${values.base?.code} - ${values.base?.label}`}
                onChange={(value) => {
                  setFieldValue("base", value);
                }}
              />
              <div className="historicalPage__btn">
                <Btn onClick={handleSubmit} title="Check" />
              </div>
            </div>
            <div className="historicalPage__result">
              {resArr.map((item, index) => {
                return (
                  <span className="historicalPage__resultItems" key={index}>{`${
                    item[0]
                  }: ${(item[1] as number)?.toFixed?.(2)}`}</span>
                );
              })}
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default HistoricalPage;
