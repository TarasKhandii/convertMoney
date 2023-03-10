import "./style.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CalendarProps {
  startDate?: Date | null;
  endDate?: Date | null;
  setStartDate: (v: [Date | null, Date | null]) => void;
  range?: boolean;
}
const Calendar: React.FC<CalendarProps> = ({
  startDate,
  setStartDate,
  endDate,
  range = true,
}) => {
  return (
    <div>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        inline
        selectsRange={range}
        onChange={setStartDate}
        maxDate={new Date()}
        showDisabledMonthNavigation
      />
    </div>
  );
};

export default Calendar;
