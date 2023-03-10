import "./style.scss";

interface BtnProps {
  title: string;
  onClick?: () => void;
}

const Btn: React.FC<BtnProps> = ({ title, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className="btn">
      {title}
    </button>
  );
};
export default Btn;
