import React, { useCallback, useState } from "react";
import Btn from "../../component/btn";
import Calendar from "../../component/calendar";
import DropMenu from "../../component/dropMenu";
import "./style.scss";

const HistoricalPage: React.FC = () => {
  const [startDate, setStartDate] = useState<Array<Date | null>>([
    new Date(),
    new Date(),
  ]);
  const handleSelectDate = useCallback(
    (startDate: [Date | null, Date | null]) => {
      setStartDate(startDate);
    },
    []
  );

  function dropMenuHandler(item: string) {
    console.log(item);
    console.log("1");
  }
  return (
    <div className="historicalPage">
      <Calendar
        startDate={startDate[0]}
        setStartDate={handleSelectDate}
        endDate={startDate[1]}
      />
      <div className="historicalPage__dropBox">
        <DropMenu
          width="100%"
          title="Base Currency:"
          onCheck={dropMenuHandler}
        />
        <div className="historicalPage__btn">
          <Btn title="Check" />
        </div>
      </div>
    </div>
  );
};
export default HistoricalPage;
