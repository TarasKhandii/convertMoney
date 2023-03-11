import clsx from "clsx";
import { useCallback, useState, MouseEvent } from "react";
import { currencyList } from "../../constantData/currencyList";
import ICONS from "../../assets/icons";
import "./style.scss";

interface DropMenuProps {
  title: string;
  width: string;
  onChange?: (value: typeof currencyList[0]) => void;
  selectedValue?: string;
}

const DropMenu: React.FC<DropMenuProps> = ({
  title,
  width,
  onChange,
  selectedValue,
}) => {
  const [open, setOpen] = useState(false);

  const openDropMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const setValueFunc = useCallback(
    (item: typeof currencyList[0]) => (e: MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();
      setOpen(false);
      onChange?.(item);
    },
    []
  );

  return (
    <div
      style={{ width: width }}
      className={clsx("dropMenu", open && "dropMenuOpen")}
    >
      <span>{title}</span>
      <div onClick={openDropMenu}>
        <ul>
          {currencyList.map((item, index) => {
            return (
              <li onClick={setValueFunc(item)} key={index}>
                {`${item.symbol} ${item.code} - ${item.label}`}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Select a currency"
          value={selectedValue}
          onChange={(v) => {
            console.log(v.target.value);
          }}
        />
        <button type="button">
          <ICONS.utils.arrow />
        </button>
      </div>
    </div>
  );
};

export default DropMenu;
