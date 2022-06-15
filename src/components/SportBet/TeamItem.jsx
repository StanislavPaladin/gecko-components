import React from "react";

import "../../scss/pages/SportBet/sportScoreItem.scss";

const TeamItem = ({ align, team, Image }) => {
  return (
    <div
      className={
        align === "flex-end"
          ? "sportScoreItem-match-team flex-end"
          : "sportScoreItem-match-team flex-start"
      }
    >
      <div className="sportScoreItem-match-team-logo">
        <img src={require("../../assets/icons/chelsea.png")} className="sportScoreItem-match-team-logo-img" alt="team-logo" />
      </div>
      <div className="sportScoreItem-match-team-name">{team.name}</div>
      <div className="sportScoreItem-match-team-cards">
        <div className="sportScoreItem-match-team-cards-red">
          <img
            src={require("../../assets/icons/redCard.png")}
            alt="red-cards"
          />
          <span>{team.redCards}</span>
        </div>
        <div className="sportScoreItem-match-team-cards-yellow">
          <img
            src={require("../../assets/icons/yellowCard.png")}
            alt="yellow-card"
          />
          <span></span>
          {team.yellowCards}
        </div>
        <div className="sportScoreItem-match-team-cards-corners">
          <img src={require("../../assets/icons/corner.png")} alt="corners" />
          <span></span>
          {team.corners}
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
