import React, { useCallback, useMemo } from "react";
import { Formik } from "formik";
import { Audio } from "react-loader-spinner";
import moment from "moment";
import Btn from "../../component/btn";
import Calendar from "../../component/calendar";
import DropMenu from "../../component/dropMenu";
import { useActions } from "../../redux/hooks/useActions";
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
import "./style.scss";
import { currencyList, ICurrencyList } from "../../constantData/currencyList";
import { generatorString } from "../../utils/generatorString";

interface FormValues {
  startDate: Date;
  endDate?: Date;
  base: ICurrencyList;
  symbols: ICurrencyList;
}

const ComparisonPage: React.FC = () => {
  const { loading, res } = useTypedSelector((state) => state.comparisonCharts);
  const { fetchComparisonCharts } = useActions();

  const initialValues: FormValues = {
    startDate: new Date(),
    endDate: new Date(),
    base: currencyList[0],
    symbols: currencyList[1],
  };

  const newArr = useMemo(() => {
    const resArr = res.rates ? Object.entries(res.rates) : [];
    return resArr;
  }, [res]);

  const submitHandler = useCallback((v: FormValues) => {
    let startDate = moment(v.startDate).format("YYYY-MM-DD");
    let endDate = moment(v.endDate).format("YYYY-MM-DD");
    fetchComparisonCharts(startDate, endDate, v.base.code, v.symbols.code);
  }, []);

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
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
          <div className="comparisonPage">
            <Calendar
              startDate={values.startDate}
              endDate={values.endDate}
              setStartDate={(v) => {
                setFieldValue("startDate", v[0]);
                setFieldValue("endDate", v[1]);
              }}
            />
            <div className="comparisonPage__dropBox">
              <DropMenu
                width="100%"
                title="Base Currency:"
                selectedValue={generatorString(
                  values.base.code,
                  values.base.label,
                  values.base.symbol
                )}
                onChange={(value) => {
                  setFieldValue("base", value);
                }}
              />
              <DropMenu
                width="100%"
                title="Current Currency:"
                selectedValue={generatorString(
                  values.symbols.code,
                  values.symbols.label,
                  values.symbols.symbol
                )}
                onChange={(value) => {
                  setFieldValue("symbols", value);
                }}
              />
              <div className="comparisonPage__btn">
                <Btn onClick={handleSubmit} title="Send" />
              </div>
            </div>
            <div className="comparisonPage__result">
              {newArr.map((item, index) => {
                return (
                  <span className="comparisonPage__resultItems" key={index}>{`${
                    item[0]
                  }: ${Object.values(item[1] as Object)}`}</span>
                );
              })}
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ComparisonPage;
