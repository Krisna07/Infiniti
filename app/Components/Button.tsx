import { Fascinate } from "next/font/google";
import React from "react";
import "./Btn.css";
import { HiSearch } from "react-icons/hi";
interface props {
  text: String;
  onclickHandler: any;
  icons: any;
}
const Button = ({ text, icons, onclickHandler }: props) => {
  return (
    <button className="btnContainer" onClick={onclickHandler}>
      <span className="btnIcon">{icons}</span>
      <span className="btntext"> {text}</span>
    </button>
  );
};

export default Button;
