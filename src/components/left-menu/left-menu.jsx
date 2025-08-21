import React from "react";
import "./left-menu.scss";
import { NavLink } from "react-router-dom";
const menus = [
  { to: "/classic", label: "The Classic", count: 2 },
  { to: "/dots", label: "The Dots", count: 2 },
  { to: "/bars", label: "The Bars", count: 20 },
  { to: "/dots-vs-bars", label: "The Dots Vs Bars", count: 20 },
  { to: "/spinner", label: "The Spinner", count: 20 },
  { to: "/shapes", label: "The Shapes", count: 20 },
  { to: "/polygons", label: "The Polygons", count: 20 },
  { to: "/3d", label: "The 3D", count: 20 },
  { to: "/progress", label: "The Progress", count: 20 },
  { to: "/wobbling", label: "The Wobbling", count: 20 },
  { to: "/infinity", label: "The Infinity", count: 20 },
  { to: "/zig-zag", label: "The Zig-Zag", count: 20 },
  { to: "/wavy", label: "The Wavy", count: 20 },
  { to: "/mechanic", label: "The Mechanic", count: 20 },
  { to: "/filling", label: "The Filling", count: 20 },
  { to: "/bouncing", label: "The Bouncing", count: 20 },
  { to: "/glowing", label: "The Glowing", count: 20 },
  { to: "/rolling", label: "The Rolling", count: 20 },
  { to: "/flipping", label: "The Flipping", count: 20 },
  { to: "/continuous", label: "The Continuous", count: 20 },
  { to: "/pulsing", label: "The Pulsing", count: 20 },
  { to: "/arcade", label: "The Arcade", count: 20 },
  { to: "/hypnotic", label: "The Hypnotic", count: 20 },
  { to: "/square", label: "The Square", count: 20 },
  { to: "/circle", label: "The Circle", count: 20 },
  { to: "/square-vs-circle", label: "The Square Vs Circle", count: 20 },
  { to: "/colorful", label: "The Colorful", count: 20 },
  { to: "/nature", label: "The Nature", count: 20 },
  { to: "/time", label: "The Time", count: 20 },
  { to: "/hungry", label: "The Hungry", count: 20 },
  { to: "/shuriken", label: "The Shuriken", count: 20 },
  { to: "/dancers", label: "The Dancers", count: 20 },
  { to: "/moving", label: "The Moving", count: 20 },
  { to: "/eyes", label: "The Eyes", count: 20 },
  { to: "/line", label: "The Line", count: 20 },
  { to: "/thin", label: "The Thin", count: 20 },
  { to: "/cur", label: "The Cut", count: 20 },
  { to: "/clones", label: "The Clones", count: 20 },
  { to: "/arrow", label: "The Arrow", count: 20 },
  { to: "/blob", label: "The Blob", count: 20 },
  { to: "/maze", label: "The Maze", count: 20 },
  { to: "/factory", label: "The Factory", count: 20 },
];


const LeftMenu = () => {
  return (
    <div id="left-menu">
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>
            <NavLink to={menu.to}>
              <span>{menu.label}</span>
              {menu.count && <span>{menu.count}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
