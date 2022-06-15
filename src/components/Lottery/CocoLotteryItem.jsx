import React from "react";

import { ReactComponent as BonusTicketIcon } from "../../assets/icons/bonusTicket.svg";

import "../../scss/pages/Lottery/cocoLotteryItem.scss";

const CocoLotteryItem = ({ matches, prize, ticket, active }) => {
  return (
    <div className={`cocoLotteryItem ${active ? "active" : ""}`}>
      <div className={`matches ${matches.jackpot ? "jackpot" : ""}`}>
        {matches.text}
      </div>
      <img
        src={require("../../assets/cocoLottery.png")}
        className="cocoImg"
        alt="coco"
      />

      {ticket ? (
        <div className="tickets">
          <div className="ticket">
            <BonusTicketIcon />
            <p>+1 ticket</p>
          </div>
        </div>
      ) : (
        <div className={`prize-wrap ${prize.value.length == 0 ? "empty" : ""}`}>
          <div className={`prize ${prize.active ? "active" : ""}`}>
          {prize.value}
        </div>
        </div>
      )}
    </div>
  );
};

export default CocoLotteryItem;
