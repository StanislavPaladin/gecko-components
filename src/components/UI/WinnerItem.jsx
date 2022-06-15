import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PlayImage } from "../../assets/icons/play.svg";
import "../../scss/components/winnerItem.scss";

const WinnerItem = ({ image, nick, price, category }) => {
  return (
    <Link to="/openGame" className="winnerItem">
      <div className="winnerItem-image">
        <img src={image} alt="winnerItem" />
        <div className="fade">
          <PlayImage />
        </div>
      </div>
      <div className="winnerItem-info">
        <div className="winnerItem-info-nick">{nick}</div>
        <div className="winnerItem-info-price">
          Won: <span className="price">{price}</span>
        </div>
        <div className="winnerItem-info-category">{category}</div>
      </div>
    </Link>
  );
};

export default WinnerItem;
