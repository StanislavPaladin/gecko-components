import React from "react";
import { Link } from "react-router-dom";

import "../../scss/pages/Sport/sportBanner.scss";

const SportBanner = ({
  gradient,
  teamOne,
  teamTwo,
  country,
  league,
  currentTime,
  boosted,
  mobile,
}) => {
  return (
    <Link to="/sportBet" className={`sportBanner ${mobile ? "mobile" : ""}`}>
      {boosted ? (
        <div
          className={
            gradient ? `sportBanner-left gradient` : `sportBanner-left`
          }
        >
          <div className="sportBanner-left-title">
            {teamOne} - {teamTwo}
          </div>
          <div className="sportBanner-left-btn">🚀BOOSTED ODDS</div>
        </div>
      ) : (
        <div
          className={
            gradient ? "sportBanner-right gradient" : "sportBanner-right"
          }
        >
          <div className="sportBanner-right-info">
            <div className="sportBanner-right-info-league">
              <img
                className="sportBanner-right-info-league-icon"
                src={require("../../assets/icons/ball.png")}
                alt="ball"
              />
              <span>
                {country}/{league}
              </span>
            </div>
            <div className="sportBanner-right-info-live">
              <span>{currentTime}</span>
              <div className="sportBanner-right-info-live-btn">live</div>
            </div>
          </div>
          <div className="sportBanner-right-teams">
            <div className="sportBanner-right-teams-teamOne">
              <img
                className="sportBanner-right-teams-teamOne-img"
                src={teamOne.img}
                alt="team-logo"
              />
              <span className="sportBanner-right-teams-name">
                {teamOne.name}
              </span>
            </div>
            <div className="sportBanner-right-teams-score">
              {teamOne.goals}:{teamTwo.goals}
            </div>
            <div className="sportBanner-right-teams-teamTwo">
              <img
                className="sportBanner-right-teams-teamTwo-img"
                src={teamTwo.img}
                alt="team-logo"
              />
              <span className="sportBanner-right-teams-name">
                {teamTwo.name}
              </span>
            </div>
          </div>
          <div className="sportBanner-right-ratings">
            <div className="sportBanner-right-ratings-item">
              <span>1</span>
              <span>25,0</span>
            </div>
            <div className="sportBanner-right-ratings-item">
              <span>Draw</span>
              <span>4.7</span>
            </div>
            <div className="sportBanner-right-ratings-item">
              <span>2</span>
              <span>1,25</span>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};

export default SportBanner;
