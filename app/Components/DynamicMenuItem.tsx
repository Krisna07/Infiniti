"use client";
import React, { useState } from "react";

interface menuList {
  menu: {
    menu: String;
    subMenu: String[];
  };
  setX: any;
}
const DynamicMenuItem = ({ menu, setX }: menuList) => {
  return <span style={{ width: "fit-content" }}>{menu.menu}</span>;
};

export default DynamicMenuItem;
