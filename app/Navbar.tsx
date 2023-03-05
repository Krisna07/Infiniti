"use client";
import React, { useRef, useState } from "react";

import { FaInfinity, FaPlay } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import Button from "./Components/Button";
import DynamicMenuItem from "./Components/DynamicMenuItem";
import FloatingNav from "./Components/FloatingNav";

import "./Navbar.css";

const Navbar = () => {
  const menuLists = [
    {
      menu: "Home",
      subMenu: [
        "Main Menu",
        "Metaverse",
        "Crypto Consultant",
        "Crypto blockchain ",
        "Crypto wallet",
        "Digital Artwork",
        "Pixel Artwork",
        "NFT Musician",
        "NFT Collection",
        "Pixel Artwork",
        "NFT Musician",
        "NFT Collection",
        "menu one",
      ],
    },
    {
      menu: "Collectors",
      subMenu: [
        "menu two",
        "menu two",
        "menu two",
        "menu two",
        "menu two",
        "menu two",
        "menu two",
        "menu two",
        "menu two",
        "menu two",
      ],
    },
    {
      menu: "NFT Marketplace",
      subMenu: [
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
      ],
    },
    {
      menu: "Features",
      subMenu: [
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
      ],
    },
    {
      menu: "Pages",
      subMenu: ["menu one", "menu one"],
    },
    {
      menu: "Help",
      subMenu: [
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
        "menu one",
      ],
    },
    {
      menu: "Purchases",
      subMenu: ["menu one", "menu one", "menu one"],
    },
  ];
  const [right, setRight] = useState();
  const setX = (x: any) => {
    setRight(x);
  };
  const ulRef = useRef(null);

  const [submenu, setSubmenu] = useState([]);
  const handleMenuItemClick = (event: any) => {
    const menuItem = event.target;
    const parentRect = ulRef.current.getBoundingClientRect();
    if (!parentRect) {
      return;
    }
    console.log(parentRect.height);
    const childRect = menuItem.getBoundingClientRect();
    const childCenter = childRect.width / 2;

    const childPos = {
      x: childRect.left - parentRect.left,
      y: childRect.top - parentRect.top,
    };
    setX(childPos.x + childCenter);
  };
  const [dynamicItems, setDynamicItems] = useState([]);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <FaInfinity className="applogo" />
      </div>
      <div
        className="menuContainer"
        onMouseOver={() => (!openSubmenu ? setOpenSubmenu(!openSubmenu) : "")}
        onMouseLeave={() => (openSubmenu ? setOpenSubmenu(!openSubmenu) : "")}
      >
        <ul className="menulistContainer" ref={ulRef}>
          {menuLists.map((items, x) => {
            return (
              <li
                className="menuList"
                key={x}
                onMouseOver={(e) => {
                  handleMenuItemClick(e);
                  // console.log(e);
                  setDynamicItems(items.subMenu);
                }}
              >
                <DynamicMenuItem menu={items} setX={setX} />
              </li>
            );
          })}
          <span
            className="triangleIcon"
            style={{
              transform: `rotate(-90deg)`,
              left: `${!right ? 19.5 : right - 8}px`,
              color: "white",
              display: `${!openSubmenu ? "none" : "block"}`,
            }}
          >
            <FaPlay />
          </span>
          <div
            className="floatingNavContainer"
            style={{
              left: `${!right ? 19.5 - 18 : right / 2 - 16}px`,
              display: `${!openSubmenu ? "none" : "flex"}`,
            }}
          >
            <FloatingNav submenu={dynamicItems} />
          </div>
        </ul>
      </div>
      <div className="userContainer">
        <Button text={"Sign In"} icons={<HiSearch />} />
      </div>
    </div>
  );
};

export default Navbar;
