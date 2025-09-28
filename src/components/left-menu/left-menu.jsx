import React, { useState, useEffect } from "react";
import "./left-menu.scss";
import { NavLink } from "react-router-dom";
import PageLoader from "../loaders/loaders";

const API_BASE = "https://impulsee.pythonanywhere.com/api"; // Django API manzilingiz

const formatLabel = (id) =>
  "The " + id.charAt(0).toUpperCase() + id.slice(1);

const LeftMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIds = async () => {
      try {
        const res = await fetch(`${API_BASE}/loaders/`);
        if (!res.ok) {
          throw new Error("Failed to fetch loaders");
        }
        const data = await res.json();

        // API'dan kelgan loaderlar ichidan id bo'yicha guruhlash va count olish
        const grouped = data.reduce((acc, loader) => {
          if (!acc[loader.id]) {
            acc[loader.id] = { id: loader.id, count: 0 };
          }
          acc[loader.id].count += 1;
          return acc;
        }, {});

        // objectlar arrayga o'tkazish
        setMenuData(Object.values(grouped));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIds();
  }, []);


  const handleToggle = () => {
    setToggle(!toggle);
  };

  if (loading) return <PageLoader />;
  if (error) return <p>Error: {error}</p>;

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
                <span className="count">{menu.count}</span> {/* bu yerda count */}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftMenu;
