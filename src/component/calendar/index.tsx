import "./style.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CalendarProps {
  startDate?: Date | null;
  endDate?: Date | null;
  setStartDate: (v: [Date | null, Date | null]) => void;
}
const Calendar: React.FC<CalendarProps> = ({
  startDate,
  setStartDate,
  endDate,
}) => {
  return (
    <div>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        inline
        selectsRange
        onChange={setStartDate}
      />
    </div>
  );
};

export default Calendar;
