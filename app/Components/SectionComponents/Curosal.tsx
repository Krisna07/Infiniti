"use client";
import React, { useState } from "react";
import { FaBackward, FaForward } from "react-icons/fa";
import Button from "../Button";

const Curosal = () => {
  const [count, setCount] = useState(0);
  if (count > 2 || count < 0) {
    return setCount(0);
  }
  const curosal = (item: Number) =>
    setTimeout(() => {
      setCount(count + 1);
    }, item);

  curosal(2000);
  const addCount = () => {
    return setCount(count + 1);
  };
  const subCount = () => {
    return setCount(count - 1);
  };
  console.log(count);
  return (
    <div className="curosal-container">
      <div className="curosal-item">
        <img src={`${images[count]}`} alt="888" width={"100%"} />
      </div>
      <div className="curosal-Controls">
        <Button icons={<FaBackward />} text="prev" onclickHandler={subCount} />

        <Button icons={<FaForward />} text="Next" onclickHandler={addCount} />
      </div>
    </div>
  );
};

export default Curosal;
