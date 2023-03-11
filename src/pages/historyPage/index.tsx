import React from "react";
import "./style.scss";
import EmptyBox from "../../assets/image/emptyBox.png";
import {
  getUserHistory,
  ILocalStorage,
  removeUserHistory,
} from "../../utils/localStorage";
import Btn from "../../component/btn";
import moment from "moment";

const HistoryPage: React.FC = () => {
  const userHistory = getUserHistory();

  function reloadPage() {
    document.location.reload();
  }

  return userHistory.length ? (
    <div className="historyPage">
      <div className="historyPage__historyBlock">
        {userHistory.map((item: ILocalStorage, index: number) => {
          return (
            <p key={index}>
              {`${moment(item.date).format("MMMM Do YYYY")} ${
                item.query.amount
              } ${item.query.to} To ${item.query.from} = 
            ${item.result.toFixed(3)}`}
            </p>
          );
        })}
      </div>
      <div className="historyPage__btn">
        <Btn
          onClick={() => {
            removeUserHistory();
            reloadPage();
          }}
          title="Clear History"
        />
      </div>
    </div>
  ) : (
    <div className="historyPage__empty">
      <h1>History is empty</h1>
      <img src={EmptyBox} alt="emptyBox" />
    </div>
  );
};
export default HistoryPage;
