import React from "react";
import { FaFire } from "react-icons/fa";
import { Nftcard } from "./Nftcard";

const TopSelling = () => {
  return (
    <div className="topSellingNfts">
      <Nftcard cardIcon={<FaFire />} />
    </div>
  );
};

export default TopSelling;
