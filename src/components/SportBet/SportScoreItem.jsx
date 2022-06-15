import React from "react";
import TeamItem from "./TeamItem";

import "../../scss/pages/SportBet/sportScoreItem.scss";

const SportScoreItem = ({ country, league }) => {
  return (
    <div className="sportScoreItem">
      <div className="sportScoreItem-league">
        <img
          className="sportScoreItem-league-icon"
          src={require("../../assets/icons/ball-gray.png")}
          alt="ball"
        />
        <span>
          {country} / {league}
        </span>
      </div>
      <div className="sportScoreItem-wrapper">
        <div className="sportScoreItem-info">
          <div className="sportScoreItem-info-date">7’ 1st half</div>
          <div className="sportScoreItem-info-btn">live</div>
        </div>
        <div className="sportScoreItem-match">
          <TeamItem
            team={{
              name: "Real Betis Sevil",
              goals: 0,
              redCards: 1,
              yellowCards: 1,
              corners: 3,
            }}
            align={"flex-start"}
          />
          <div className="sportScoreItem-match-score">
            <div className="sportScoreItem-match-score-numbers">0:1</div>
            <span className="sportScoreItem-match-score-date">Today</span>
          </div>
          <TeamItem
            team={{
              name: "Real Betis Sevil",
              goals: 0,
              redCards: 1,
              yellowCards: 1,
              corners: 3,
            }}
            align={"flex-end"}
          />
        </div>
      </div>
    </div>
  );
};

export default SportScoreItem;
