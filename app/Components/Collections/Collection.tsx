"use client";
import React, { useEffect, useState } from "react";
import "./Collection.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
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

  return (
    <div className="sectionContainer">
      <div className="headingContainer" style={{ width: "100%" }}>
        <h2 className="collectionHeading">Collection List</h2>
        <div className="sortFilters">
          <div className="selectChain">
            <span className="selectedChain">
              {chain}
              <FaChevronDown onClick={() => setSelect(!select)} />
            </span>
            <motion.ul
              key={"chain"}
              className="chainType"
              initial={{ y: select ? "-100%" : "" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ ease: "easeInOut" }}
              style={{ display: !select ? "" : "none" }}
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
        <CollectionCard
          imageUrl={
            "(https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg)"
          }
          title={"A Rocket Box"}
          collectionCount={"45"}
        />
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
