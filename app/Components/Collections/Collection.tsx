"use client";
import React, { useEffect, useState, useRef } from "react";
import "./Collection.css";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa";
import axios from "axios";
import Button from "../Button";
import Image from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  const [nfts, setNfts] = useState(null);

  const [chain, setChain] = useState("Ethereum");
  const [volume, setVolume] = useState(10);
  const loadMore = (num: any) => {
    setVolume(volume + num);
  };
  console.log(volume);
  const [owned, setowned] = useState();
  useEffect(() => {
    async function fetchNfts() {
      try {
        const options = {
          method: "GET",
          url: "https://api.nftport.xyz/v0/contracts/top",
          params: {
            page_size: volume < 10 ? 10 : volume,
            page_number: "1",
            period: "24h",
            order_by: "volume",
            chain: chain.toLowerCase(),
          },
          headers: {
            accept: "application/json",
            Authorization: "69ada8fb-1efe-417c-ac33-8868e1cea97d",
          },
        };

        const response = await axios(options);
        setNfts(response.data.contracts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNfts();
  }, [chain, volume]);
  const [select, setSelect] = useState(true);
  console.log(nfts);
  const [slider, setSlider] = useState(0);
  const [sliderWidth, setSliderWith] = useState();
  const collectionContainerRef = useRef(null);
  useEffect(() => {
    if (collectionContainerRef.current) {
      const containerWidth = collectionContainerRef.current.offsetWidth;
      const containerScrollWidth = containerRef.current.scrollWidth;
      return setSliderWith(containerWidth);
    }
  }, []);

  const slideLeft = () => {
    slider > 0 ? setSlider(slider - 1) : setSlider(0);
    console.log(slider * 100);
  };
  const slideRight = () => {
    slider > sliderWidth ? setSlider(sliderWidth) : setSlider(slider + 1);
    console.log(slider * 100);
  };

  return (
    <div className="sectionContainer">
      <div className="headingContainer" style={{ width: "100%" }}>
        <h2 className="collectionHeading">Collection List</h2>
        <div className="sortFilters">
          <div className="selectChain">
            <span className="selectedChain">
              {chain}

              <FaChevronDown
                onClick={() => setSelect(!select)}
                style={{
                  transform: `${!select ? "rotate(180deg)" : "rotate(0deg)"}`,
                  transition: "transform ease-in-out 200ms",
                }}
              />
            </span>
            <motion.ul
              key={"chain"}
              className="chainType"
              initial={{ y: "-50%", opacity: "0" }}
              animate={
                !select ? { y: 0, opacity: 1 } : { y: "-50%", opacity: "0" }
              }
              exit={{ y: "-50%", opacity: "0" }}
              transition={{ ease: "easeInOut" }}
              style={{ display: !select ? "block" : "none" }}
            >
              <li
                className="chainOption"
                onClick={(e: any) => {
                  setChain(e.target.innerHTML);
                  setSelect(!select);
                  setVolume(10);
                }}
                value="Etherium"
              >
                Ethereum
              </li>
              <li
                className="chainOption"
                value="Polygon"
                onClick={(e: any) => {
                  setChain(e.target.innerHTML);
                  setSelect(!select);
                  setVolume(10);
                }}
              >
                Polygon
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
      <ul className="collectionList">
        <div className="sliderControls">
          <FaChevronLeft
            onClick={slideLeft}
            style={slider == 0 ? { opacity: "0" } : { opacity: 1 }}
          />
          <FaChevronRight onClick={slideRight} />
        </div>
        <div
          className="collectionListContainer"
          style={{ left: `-${slider * 100}px` }}
          ref={collectionContainerRef}
        >
          {new Array(10).fill(1).map((item, key) => (
            <CollectionCard
              key={key}
              imageUrl={
                "(https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg)"
              }
              title={"A Rocket Box"}
              collectionCount={"45"}
            />
          ))}
        </div>
      </ul>
      <div className="loadingActions">
        <Button
          text={"Load more"}
          icons={<FaChevronDown />}
          onclickHandler={() => loadMore(10)}
        />
        <Button
          text={"Show Less"}
          icons={<FaChevronUp />}
          onclickHandler={() => loadMore(-10)}
        />
      </div>
    </div>
  );
};

export default Collection;
