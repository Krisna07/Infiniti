import React from "react";
interface collectionItems {
  imageUrl: String;
  title: String;
  collectionCount: String;
}

const CollectionCard = ({
  imageUrl,
  title,
  collectionCount,
}: collectionItems) => {
  return (
    <div className="CollectionCardDiv">
      <div className="collectionImage">
        <span
          className="collectionThumbnail"
          style={{
            backgroundImage: `url${imageUrl}`,
            borderBottomRightRadius: "4px",
          }}
        ></span>
        <span
          className="collectionThumbnail"
          style={{
            backgroundImage: `url${imageUrl}`,
            borderBottomLeftRadius: "4px",
          }}
        ></span>
        <span
          className="collectionThumbnail"
          style={{
            backgroundImage: `url${imageUrl}`,
            borderTopRightRadius: "4px",
          }}
        ></span>
        <span
          className="collectionThumbnail"
          style={{
            backgroundImage: `url${imageUrl}`,
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
    </div>
  );
};

export default CollectionCard;
