import React from "react";
import "./FloatingNav.css";

interface submenu {
  submenu: String[];
}
const FloatingNav = ({ submenu }: submenu) => {
  return (
    <ul className="floatingNav">
      {submenu.map((items, x) => (
        <li key={x} className="floatingItems">
          {items}
        </li>
      ))}
    </ul>
  );
};

export default FloatingNav;
