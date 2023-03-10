// Libraries
import React from "react";
import { Formik } from "formik";
import { Audio } from "react-loader-spinner";
import moment from "moment";
// Component
import Btn from "../../component/btn";
import Calendar from "../../component/calendar";
import Charts from "../../component/charts";
import DropMenu from "../../component/dropMenu";
// Redux
import { useActions } from "../../redux/hooks/useActions";
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
// Constant
import { currencyList } from "../../constantData/currencyList";
// Style
import "./style.scss";
import { Value } from "sass";

interface MyFormValues {
  startDate: Date;
  endDate?: Date;
  base: typeof currencyList[0];
  symbols: typeof currencyList[1];
}
const ChartsPage: React.FC = () => {
  const { loading, res } = useTypedSelector((state) => state.comparisonCharts);
  const { fetchComparisonCharts } = useActions();

  const initialValues: MyFormValues = {
    startDate: new Date(),
    endDate: new Date(),
    base: currencyList[0],
    symbols: currencyList[1],
  };

  const resArr = res.rates ? Object.entries(res.rates) : [];

  const chartsData = resArr.reduce(
    (acum, item) => {
      const legend = Object.keys(item[1])[0];

      const newData = {
        date: item[0],
        value: item[1][legend],
      };

      return { data: [...acum.data, newData], legend: legend };
    },
    {
      data: [] as Array<{ date: string; value: number }>,
      legend: "",
    }
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(v) => {
        let startDate = moment(v.startDate).format("YYYY-MM-DD");
        let endDate = moment(v.endDate).format("YYYY-MM-DD");
        fetchComparisonCharts(startDate, endDate, v.base.code, v.symbols.code);
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
          <div className="chartsPage">
            <Calendar
              startDate={values.startDate}
              endDate={values.endDate}
              setStartDate={(v) => {
                setFieldValue("startDate", v[0]);
                setFieldValue("endDate", v[1]);
              }}
            />
            <div className="chartsPage__dropBox">
              <DropMenu
                width="100%"
                title="Base Currency:"
                selectedValue={`${values.base?.symbol} ${values.base?.code} - ${values.base?.label}`}
                onChange={(value) => {
                  setFieldValue("base", value);
                }}
              />
              <DropMenu
                width="100%"
                title="Current Currency:"
                selectedValue={`${values.symbols?.symbol} ${values.symbols?.code} - ${values.symbols?.label}`}
                onChange={(value) => {
                  setFieldValue("symbols", value);
                }}
              />
              <div className="chartsPage__btn">
                <Btn onClick={handleSubmit} title="Send" />
              </div>
            </div>
            <div>{"success" in res ? <Charts data={chartsData} /> : ""}</div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ChartsPage;
