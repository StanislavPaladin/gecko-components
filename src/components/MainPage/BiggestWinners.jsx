import React from "react";
import TopWinner from "./TopWinner";

import "../../scss/pages/MainPage/biggestWinners.scss";

const BiggestWinners = () => {
  return (
    <div className="biggestWinners">
      <div className="biggestWinners-content-wrap">
        <div className="biggestWinners-content">
          <div className="biggestWinners-content-info">
            <h2>Gerko Games Winners</h2>
            <p>Winner of the day - 18.05.22</p>
            <button className="playnow-btn">Play now</button>
          </div>
          <div className="biggestWinners-content-table">
            <TopWinner/>
            <TopWinner/>
            <TopWinner/>
          </div>
        </div>
        <img className="biggestWinners-content-wrap-image" src={require("../../assets/banners/winners.png")} alt="winnersImg"/>
      </div>
    </div>
  );
};

export default BiggestWinners;
