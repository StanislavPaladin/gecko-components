import React from "react";
import BetItem from "./BetItem";

import { ReactComponent as ArrowLeftImage } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRightImage } from "../../assets/icons/arrowRight.svg";

import "../../scss/pages/MainPage/betsBlock.scss";

const BetsBlock = () => {
  return (
    <div className="betsBlock">
      <div className="betsBlock-header">
        <div className="nav">
          <div className="nav-btn">Battles</div>
          <div className="nav-btn active">My bets</div>
          <div className="nav-btn">All bets</div>
          <div className="nav-btn">Big wins</div>
        </div>
        <ArrowLeftImage className="gameProviders-header-arrow left" />
        <ArrowRightImage className="gameProviders-header-arrow right" />
      </div>
      <div className="betsBlock-content">
        <div className="betsBlock-content-titles">
          <div className="title">Game</div>
          <div className="title">Time</div>
          <div className="title">Player</div>
          <div className="title">Amount Bets</div>
          <div className="title">Multiplier</div>
          <div className="title">Payout</div>
        </div>
        {
          new Array(7).fill(0).map((el, i) => {
            return (
              <BetItem isOdd={i % 2}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default BetsBlock;
