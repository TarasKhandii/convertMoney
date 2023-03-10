import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import Links from "../constantData/navlinks";
import NavRouters from "../router";

const Navigation: React.FC = () => {
  return (
    <div className="navigationBlock">
      <div className="navigationBlock__header">
        {Links.map((item, index) => {
          return (
            <NavLink
              className="navigationBlock__link"
              key={index}
              to={item.link}
            >
              {item.svg}
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <NavRouters />
    </div>
  );
};
export default Navigation;
