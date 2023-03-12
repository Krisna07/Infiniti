import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import Button from "../Button";
import "./CollectionList.css";
interface list {
  handleList: any;
}
const CollectionList = ({ handleList }: list) => {
  const CollectionItems = new Array(10).fill(1);
  return (
    <div className="collectionList">
      {CollectionItems.map((items, x) => (
        <div className="nfts" key={x}></div>
      ))}
      <Button
        text={"Hide"}
        icons={<FaEyeSlash />}
        onclickHandler={handleList}
      />
    </div>
  );
};

export default CollectionList;
