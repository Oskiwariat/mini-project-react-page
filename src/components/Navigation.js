import React from "react";

import "../styles/Navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  const list = [
    { name: "Homepage", path: "/", exact: true, class: "homepage" },
    { name: "About Us", path: "/aboutus", class: "aboutus" },
    { name: "Join Us", path: "/joinus", class: "joinus" },
    { name: "Contact", path: "/contact", class: "contact" },
    { name: "Donate", path: "/donate", class: "donate" },
  ];

  const handleClick = () => {
    window.scroll(0, 1050);
  };

  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink
        onClick={handleClick}
        className={item.class}
        to={item.path}
        exact={item.exact && item.exact}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="navigation">
        <ul>{menu}</ul>
      </nav>
    </>
  );
};

export default Navigation;
