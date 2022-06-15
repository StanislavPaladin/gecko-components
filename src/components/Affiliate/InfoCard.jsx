import React from "react";
import "../../scss/pages/Affiliate/infoCard.scss";

const InfoCard = ({ title, textList }) => {
  return (
    <div className="infoCard">
      <div className="infoCard-wrap">
        <div className="infoCard-wrap-head">
          <div className="title">{title}</div>
        </div>
        <div className="infoCard-wrap-body">
          {textList.map((text) => {
            return <p className="infoCard-wrap-body-text">{text}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
