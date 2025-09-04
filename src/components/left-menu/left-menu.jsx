import React, { useState } from "react";
import "./left-menu.scss";
import { NavLink } from "react-router-dom";
import loaders from "../../assets/loaders.json";

// Loaderlarni guruhlash
const menuData = Object.values(
  loaders.reduce((acc, loader) => {
    if (!acc[loader.id]) {
      acc[loader.id] = { id: loader.id, count: 0 };
    }
    acc[loader.id].count += 1;
    return acc;
  }, {})
);

// id ni "label" ga aylantirish helper
const formatLabel = (id) =>
  "The " + id.charAt(0).toUpperCase() + id.slice(1);

const LeftMenu = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className={`toggle-btn ${toggle ? "active" : ""}`}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="left-menu" className={toggle ? "active" : ""}>
        <ul>
          {menuData.map((menu, index) => (
            <li key={index}>
              <NavLink to={`/${menu.id}`}>
                <span>{formatLabel(menu.id)}</span>
                <span>{menu.count}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftMenu;
