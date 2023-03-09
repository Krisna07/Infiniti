"use client";
import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaPlay,
} from "react-icons/fa";
import Button from "./Button";
import "./Section.css";
import { AnimatePresence, motion } from "framer-motion";

const Section = () => {
  const curosalItems = [
    {
      image:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg ",
      rightSide: {
        title: "The Warrior",

        subHeading: "A specific collection",
        button: <Button icons={<FaChevronDown />} text={"Read more"} />,
        des: "A quick brown fox jump over the lazy dog. This dog then made up his mind to jump over that lousy fox in no time. Lorem do thsera is a thiq useuak dhunrrba  quisquam eos voluptatum minima quos explicabo bbuagr akjcbhema hbs",
      },
    },
    {
      image:
        "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
      rightSide: {
        title: "The Zone",

        subHeading: "A lunch to the space",
        button: <Button icons={<FaChevronDown />} text={"Read more"} />,
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ut distinctio itaque, id praesentium provident vero quisquam eos voluptatum minima quos explicabo veniam corrupti! Deserunt voluptatum voluptate impedit reiciendis odit?",
      },
    },
    {
      image:
        "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
      rightSide: {
        title: "The Atlantis",

        subHeading: "Lorem us toe",
        button: <Button icons={<FaChevronDown />} text={"Read more"} />,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ipsum minima. Quidem, sequi! Impedit omnis iusto, laudantium molestias dolores qui!",
      },
    },
  ];
  // console.log(curosalItems);

  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(false);

  const sliderControl = (control) => {
    const newSlide =
      (slide + control + curosalItems.length) % curosalItems.length;
    setSlide(newSlide);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      sliderControl(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [slide]);

  useEffect(() => {
    const heading = document.querySelector(".curosal-des-heading");
    heading.classList.add("slide-in");

    return () => {
      heading.classList.remove("slide-in");
    };
  }, [slide]);

  return (
    <div className="sectionContainer">
      <div className="announcements">
        <h2> The Waiting Ends Here</h2>

        <Button text={"Play Now"} icons={<FaPlay />} />
      </div>
      <div className="curosal-Conatiner">
        <div className="curosal">
          <div className="curosal-Items">
            <AnimatePresence wait>
              <div className="imageContainer">
                <motion.img
                  key={curosalItems[slide].image}
                  initial={{ x: "-100%", opacity: 0, rotate: "45deg" }}
                  animate={{ x: 0, opacity: 1, rotate: "0" }}
                  // exit={{ x: "-100%", opacity: "0", rotate: "-45deg" }}
                  transition={{ duration: 0.5, type: "spring" }}
                  src={curosalItems[slide].image}
                  alt={curosalItems[slide].image}
                  width={"100%"}
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>

              <div className="curosal-des">
                <motion.h2
                  className="curosal-des-heading"
                  key={curosalItems[slide].rightSide.title}
                  initial={{ x: "40%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {curosalItems[slide].rightSide.title}
                </motion.h2>
                <motion.h3
                  key={curosalItems[slide].rightSide.subHeading}
                  initial={{ y: "-50%" }}
                  animate={{ y: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {curosalItems[slide].rightSide.subHeading}
                </motion.h3>
                <span>{curosalItems[slide].rightSide.des}</span>
                <span>{curosalItems[slide].rightSide.button}</span>
              </div>
            </AnimatePresence>
          </div>
          <div className="curosalControls">
            <Button
              icons={<FaArrowLeft />}
              onclickHandler={() => {
                sliderControl(-1);
                setDirection(!direction);
              }}
            />
            <Button
              icons={<FaArrowRight />}
              onclickHandler={() => sliderControl(+1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
