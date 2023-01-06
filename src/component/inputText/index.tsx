import "./style.scss";

const InputText: React.FC = () => {
  return (
    <div className="inputBlock">
      <span>Amount</span>
      <input
        id="input"
        placeholder="$ 1.00"
        type="number"
        className="inputBlock__input"
      />
    </div>
  );
};
export default InputText;
