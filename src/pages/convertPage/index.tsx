import React, { useEffect } from "react";
import { Audio } from "react-loader-spinner";
import ICONS from "../../assets/icons";
import Btn from "../../component/btn";
import DropMenu from "../../component/dropMenu";
import InputText from "../../component/inputText";
import { useActions } from "../../redux/hooks/useActions";
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
import "./style.scss";

const ConvertPage: React.FC = () => {
  const { loading, res } = useTypedSelector((state) => state.convertPage);
  const { fetchConvert } = useActions();
  function dropMenuHandler(item: string) {
    console.log(item);
  }
  useEffect(() => {
    fetchConvert("USD", "EUR", 100);
    console.log("1");
  }, []);

  return loading ? (
    <Audio
      height="80"
      width="80"
      // radius="9"
      color="black"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: "center" }}
    />
  ) : (
    <div className="convertPage">
      <div>
        <InputText />
        <DropMenu width="27.6%" title="To" onCheck={dropMenuHandler} />
        <div className="convertPage__swap">
          <ICONS.utils.swap />
        </div>
        <DropMenu width="27.6%" title="From" onCheck={dropMenuHandler} />
      </div>
      <div className="convertPage__button">
        <p>{` ${res.query?.amount} ${res.query?.from} = ${res.result?.toFixed(
          3
        )} ${res.query?.to}`}</p>
        <Btn title="Convert" />
      </div>
    </div>
  );
};

export default ConvertPage;
