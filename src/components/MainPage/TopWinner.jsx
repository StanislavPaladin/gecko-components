import React from "react";

import { ReactComponent as GoldCupImage } from "../../assets/icons/goldCup.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrowRight.svg";

import "../../scss/pages/MainPage/topWinner.scss";

const TopWinner = () => {
  return (
    <div className={`topWinner`}>
      <div className="winner">
        <GoldCupImage className="cup" />
        <div className="topWinner">Top Winner</div>
        <img
          className="image"
          src={require("../../assets/winnerPhoto.png")}
          alt="winner"
        />
        <div className="name">Jaylon Saris</div>
      </div>
      <div className="prize">
        <div className="value">0.03487000</div>
        <div className="currency">ETH</div>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default TopWinner;
