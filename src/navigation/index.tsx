import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

import NavRouters from "../router";
import NavLinks from "../constantData/navigationLinks";

const Navigation: React.FC = () => {
  return (
    <div className="navigationBlock">
      <div className="navigationBlock__header">
        {NavLinks.map((item, index) => {
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
