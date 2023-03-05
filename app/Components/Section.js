import React from "react";
import { FaPlay } from "react-icons/fa";
import Button from "./Button";
import "./Section.css";

const Section = () => {
  return (
    <div className="sectionContainer">
      <div className="leftSide">
        <div className="announcements">
          <h2> The Waiting Ends Here</h2>

          <Button text={"Play Now"} icons={<FaPlay />} />
        </div>
        <div className="curosal-Conatiner">
          <div className="imageConatiner">
            <img
              src="https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-1536x1065.jpg"
              alt="image1"
              width={"100%"}
            />
          </div>
        </div>
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default Section;
