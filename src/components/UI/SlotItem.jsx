import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as AlertImage } from "../../assets/icons/alert.svg";
import { ReactComponent as PlayImage } from "../../assets/icons/play.svg";

import "../../scss/components/slotItem.scss";

const SlotItem = ({ image, name, category }) => {
  return (
    <Link className="slotItem" to="/openGame">
      <div className="slotItem-image">
        <img className="slotItem-image-img" src={image} alt="slotItem" />
        <div className="fade">
          <PlayImage />
        </div>
      </div>
      <div className="slotItem-info">
        <div className="slotItem-info-head">
          <div className="name">{name}</div>
          <img src={require("../../assets/icons/alert.png")} />
        </div>
        <div className="slotItem-info-category">{category}</div>
      </div>
    </Link>
  );
};

export default SlotItem;
