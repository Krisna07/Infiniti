import { Fascinate } from "next/font/google";
import React from "react";
import "./Btn.css";
import { HiSearch } from "react-icons/hi";
interface props {
  text: String;
  icons: any;
}
const Button = ({ text, icons }: props) => {
  return (
    <button className="btnContainer">
      <span className="btnIcon">{icons}</span>
      <span className="btntext"> {text}</span>
    </button>
  );
};

export default Button;
