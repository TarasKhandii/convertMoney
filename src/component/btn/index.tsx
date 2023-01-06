import "./style.scss";

interface BtnProps {
  title: string;
}

const Btn: React.FC<BtnProps> = ({ title }) => {
  return <button className="btn">{title}</button>;
};
export default Btn;
