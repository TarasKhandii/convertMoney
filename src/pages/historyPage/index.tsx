import React from "react";
import "./style.scss";
import EmptyBox from "../../assets/image/emptyBox.png";

const HistoryPage: React.FC = () => {
  return (
    <div className="historyPage">
      <h1>History is empty</h1>
      <img src={EmptyBox} alt="emptyBox" />
    </div>
  );
};
export default HistoryPage;
