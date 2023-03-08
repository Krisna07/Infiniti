"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import Button from "./Button";
import "./Section.css";
import { AnimatePresence, motion } from "framer-motion";

const Section = () => {
  const curosalItems = [
    {
      image:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      rightSide: {
        title: "The Warrior",

        subHeading: "A specific collection",
        des: "A quick brown fox jump over the lazy dog. This dog then made up his mind to jump over that lousy fox in no time.",
      },
    },
    {
      image:
        "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
      rightSide: {
        title: "The Zone",

        subHeading: "A specific collection",
        des: "In this example, the curosal-des-animate class is added to the curosal-des element when the slide state changes. This class applies a transition property to the opacity CSS property, which causes the text element to fade in and out smoothly. The setTimeout function is used to remove the class after 1 second, which triggers the animation when the des text changes.",
      },
    },
    {
      image:
        "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
      rightSide: {
        title: "The Atlantis",

        subHeading: "A specific collection",
        des: "A quick brown fox jump over the lazy dog",
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
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.5 }}
                  src={curosalItems[slide].image}
                  alt={curosalItems[slide].image}
                  width={"100%"}
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
            </AnimatePresence>

            <div className="curosal-des">
              <AnimatePresence wait>
                <motion.h2
                  className="curosal-des-heading"
                  key={curosalItems[slide].rightSide.title}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 1 }}
                >
                  {curosalItems[slide].rightSide.title}
                </motion.h2>
                <h3>{curosalItems[slide].rightSide.subHeading}</h3>
                <span>{curosalItems[slide].rightSide.des}</span>
              </AnimatePresence>
            </div>
          </div>
          <div className="curosalControls">
            <FaArrowLeft
              onClick={() => {
                sliderControl(-1);
                setDirection(!direction);
              }}
            />
            <FaArrowRight onClick={() => sliderControl(+1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
