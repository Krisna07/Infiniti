import React from "react";
import { FaPlay } from "react-icons/fa";
import Button from "./Button";
import "./Section.css";

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
        des: "A quick brown fox jump over the lazy dog",
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
  console.log(curosalItems);
  return (
    <div className="sectionContainer">
      <div className="announcements">
        <h2> The Waiting Ends Here</h2>

        <Button text={"Play Now"} icons={<FaPlay />} />
      </div>
      <div className="curosal-Conatiner">
        {curosalItems.map((item, x) => {
          console.log(item.rightSide);
          return (
            <div key={x} className="curosal-Items">
              <div className="imageContainer">
                <img src={item.image} alt={item.image} />
              </div>
              <div className="curosal-des">
                <h2>{item.rightSide.title}</h2>
                <h3>{item.rightSide.subHeading}</h3>
                <span>{item.rightSide.des}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
