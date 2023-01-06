import clsx from "clsx";
import { useCallback, useState } from "react";
import ICONS from "../../assets/icons";
import { currencyList } from "../../constantData/currencyList";
import "./style.scss";

let newCurrencyList = currencyList.map((item) => {
  let newItem = `${item.symbol} ${item.code} - ${item.label}`;
  return newItem;
});

interface DropMenuProps {
  title: string;
  width: string;
  onCheck: (item: string) => void;
}

const DropMenu: React.FC<DropMenuProps> = ({ title, width, onCheck }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(newCurrencyList[0]);

  const openDropMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const setValueFunc = useCallback(
    (item: string) => () => {
      setValue(item);
      onCheck(item);
      setOpen(false);
    },
    []
  );

  return (
    <div
      style={{ width: width }}
      className={clsx("dropMenu", open && "dropMenuOpen")}
    >
      <span>{title}</span>
      <div>
        <ul>
          {newCurrencyList.map((item, index) => {
            return (
              <li onClick={setValueFunc(item)} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <input type="text" placeholder={value} />
        <button onClick={openDropMenu} type="button">
          <ICONS.utils.arrow />
        </button>
      </div>
    </div>
  );
};
export default DropMenu;
