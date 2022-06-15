import React from "react";
import TextWithImage from "./TextWithImage";
import CryptoItem from "./CryptoItem";

import { ReactComponent as DiceImage } from "../../assets/icons/dice.svg";

import TeetherSrc from "../../assets/icons/Tether.png";
import BitcoinSrc from "../../assets/icons/Bitcoin.png";

import "../../scss/components/betItem.scss";

const BetItem = ({ active, isOdd }) => {
  return (
    <div className={`betItem ${isOdd ? "active" : ""}`}>
      <div className="betItem-dice item">
        <TextWithImage text="Dice" Image={DiceImage} />
      </div>
      <div className="betItem-time item">18:44:03</div>
      <div className="betItem-player item">
        <img src={require("../../assets/winnerPhoto.png")} alt="user" />
        <span>Wilson Curtis</span>
      </div>
      <div className="betItem-amountBets item">
        <CryptoItem image={TeetherSrc} price="0.3453456" />
      </div>
      <div className={`betItem-multiplier item ${active ? "active" : ""}`}>
        <div className="wrap">x34.20</div>
      </div>
      <div className="betItem-payout item">
        <CryptoItem image={BitcoinSrc} price="0.34567523" />
      </div>
    </div>
  );
};

export default BetItem;
