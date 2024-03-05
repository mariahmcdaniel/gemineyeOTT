"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import "./style.css";

const MENU_LIST = [
  { text: "Login", href: "/login" },
  { text: "Home", href: "/" },
  { text: "Shop", href: "/shop"},
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
      <nav className={`nav`}>
        {/* <Link href={"/"}>
        <img className="navLogo" src="images/logo300.png" alt="Gemineye of the Tiger Logo" />
        </Link> */}
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <li
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default Navbar;