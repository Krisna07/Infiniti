import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";

interface CollectionItems {
  imageUrl: string;
  title: string;
  collectionCount: string;
}

const CollectionCard = ({
  imageUrl,
  title,
  collectionCount,
}: CollectionItems) => {
  const [browserBtn, showBrowseBtn] = useState(false);

  return (
    <div
      className="CollectionCardDiv"
      onMouseOver={() => showBrowseBtn(true)}
      onMouseLeave={() => showBrowseBtn(false)}
    >
      <div className="collectionImage">
        <span
          className="collectionThumbnail"
          style={{
            backgroundImage: `url(${imageUrl})`,
            borderBottomRightRadius: "4px",
          }}
        ></span>
        <span
          className="collectionThumbnail"
          style={{
            backgroundImage: `url(${imageUrl})`,
            borderBottomLeftRadius: "4px",
          }}
        ></span>
        <span
          className="collectionThumbnail"
          style={{
            backgroundImage: `url(${imageUrl})`,
            borderTopRightRadius: "4px",
          }}
        ></span>
        <span
          className="collectionThumbnail"
          style={{
            backgroundImage: `url(${imageUrl})`,
            borderTopLeftRadius: "4px",
          }}
        ></span>
      </div>
      <div className="divider">
        <div className="collectionProfile"></div>
      </div>
      <div className="collectionDes">
        <span className="collectionTitle">{title}</span>
        <span className="collectionCount">{collectionCount}</span>
      </div>

      <AnimatePresence>
        <motion.span
          className="browse_btn"
          initial={{ y: "-100%", opacity: 0 }}
          animate={
            browserBtn ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }
          }
          exit={{ y: "-100%", opacity: 0 }}
        >
          <Button text={"Browse"} icons={<BsStars />} />
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default CollectionCard;
