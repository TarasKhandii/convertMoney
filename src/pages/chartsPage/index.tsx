import React, { useCallback, useState } from "react";
import Btn from "../../component/btn";
import Calendar from "../../component/calendar";
import DropMenu from "../../component/dropMenu";
import "./style.scss";

const ChartsPage: React.FC = () => {
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
    <div className="chartsPage">
      <Calendar
        startDate={startDate[0]}
        setStartDate={handleSelectDate}
        endDate={startDate[1]}
      />
      <div className="chartsPage__dropBox">
        <DropMenu
          width="100%"
          title="Base Currency:"
          onCheck={dropMenuHandler}
        />
        <DropMenu
          width="100%"
          title="Current Currency:"
          onCheck={dropMenuHandler}
        />
        <div className="chartsPage__btn">
          <Btn title="Send" />
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
