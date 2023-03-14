import React from "react";
import { FaFire } from "react-icons/fa";
interface nftProps {
  cardIcon: any;
  nftData: any;
}

export const Nftcard = ({ cardIcon }: nftProps) => {
  return (
    <div className="nftcardContainer">
      <div className="nftImageContainer">
        <div className="cardicon"> {cardIcon}</div>
      </div>
      <div className="nftDes">
        <div className="nftname"></div>
        <div className="nftprice"></div>
      </div>
    </div>
  );
};
