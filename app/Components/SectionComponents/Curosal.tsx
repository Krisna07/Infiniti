"use client";
import React, { useState } from "react";
import { FaBackward, FaForward } from "react-icons/fa";
import Button from "../Button";

const Curosal = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8t5dHD-BcXAvHvA4XIm-cNXfPLO4MWt6gKKIQwgom--CtFW0HAB7C_lK7ZyAMXqwkBEg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXToaun0aqc1skOz3ZY6xX2RtgXlaep0JXnvkOnOmsK0oGHQFu0mpDhum6SJc2BY9Yfao&usqp=CAU",
  ];

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
        <img src={`${images[count]}`} alt="" width={"100%"} />
      </div>
      <div className="curosal-Controls">
        <Button icons={<FaForward />} text="Next" onclickHandler={addCount} />
        <Button icons={<FaBackward />} text="prev" onclickHandler={subCount} />
      </div>
    </div>
  );
};

export default Curosal;
