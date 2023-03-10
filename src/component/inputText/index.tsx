// Libraries
import { useCallback } from "react";
// Style
import "./style.scss";

interface InputProps {
  valueInput: string;
  onChange: (value: string) => void;
}

const InputText: React.FC<InputProps> = ({ onChange, valueInput }) => {
  const onChangeHandler = useCallback(
    (v: React.ChangeEvent<HTMLInputElement>) => {
      onChange(v.target.value);
    },
    [onChange]
  );
  return (
    <div className="inputBlock">
      <span>Amount</span>
      <input
        id="input"
        placeholder="Enter the amount"
        type="number"
        className="inputBlock__input"
        onChange={onChangeHandler}
        value={valueInput}
      />
    </div>
  );
};
export default InputText;
