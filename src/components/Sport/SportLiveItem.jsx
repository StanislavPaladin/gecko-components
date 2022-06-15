import React from "react";
import { Link } from "react-router-dom";

import "../../scss/pages/Sport/sportLiveItem.scss";

const SportLiveItem = ({
  gradient,
  teamOne,
  teamTwo,
  country,
  league,
  currentTime,
}) => {
  return (
    <Link to="/sportBet" className="sportLiveItem">
      <div className="sportLiveItem-info">
        <div className="sportLiveItem-info-score">
          <div className="sportLiveItem-info-score-btn">live</div>
          <div className="sportLiveItem-info-score-match">0-0</div>
        </div>
        <div className="sportLiveItem-info-main">
          <div className="sportLiveItem-info-main-top">
            <div className="sportLiveItem-info-main-top-league">
              <img
                className="sportLiveItem-info-main-top-league-icon"
                src={require("../../assets/icons/ball.png")}
                alt="ball"
              />
              <span>
                {country} / {league}
              </span>
            </div>
            <div className="sportLiveItem-info-main-top-time">
              {currentTime}
              <img
                className="sportLiveItem-info-main-top-time-img"
                src={require("../../assets/icons/lightning.png")}
                alt=""
              />
            </div>
          </div>

          <div className="sportLiveItem-info-main-teams">
            <div className="sportLiveItem-info-main-teams-teamOne">
              <img
                className="sportLiveItem-info-main-teams-teamOne-logo"
                src={teamOne.img}
                alt="team-icon"
              />
              <div className="sportLiveItem-info-main-teams-teamOne-name">
                {teamOne.name}
                <span className="sportLiveItem-info-main-teams-teamOne-name-score">
                  {teamOne.goals}
                </span>
              </div>
            </div>
            <span className="sportLiveItem-info-main-teams-separator">vs</span>
            <div className="sportLiveItem-info-main-teams-teamTwo">
              <img
                className="sportLiveItem-info-main-teams-teamTwo-logo"
                src={teamTwo.img}
                alt="team-icon"
              />
              <div className="sportLiveItem-info-main-teams-teamTwo-name">
                {teamTwo.name}
                <span className="sportLiveItem-info-main-teams-teamTwo-name-score">
                  {teamTwo.goals}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sportLiveItem-ratings">
        <div className="sportLiveItem-ratings-gradient"></div>
        <div className="sportLiveItem-ratings-item">
          <div className="sportLiveItem-ratings-item-title">1x2</div>
          <div className="sportLiveItem-ratings-item-btns-wrapper">
            <div className="sportLiveItem-ratings-item-btn border-left">
              <div className="sportLiveItem-ratings-item-btn-title">1</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportLiveItem-ratings-item-btn ">
              <div className="sportLiveItem-ratings-item-btn-title">draw</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportLiveItem-ratings-item-btn border-right">
              <div className="sportLiveItem-ratings-item-btn-title">1</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
          </div>
        </div>
        <div className="sportLiveItem-ratings-item">
          <div className="sportLiveItem-ratings-item-title">Double chance</div>
          <div className="sportLiveItem-ratings-item-btns-wrapper">
            <div className="sportLiveItem-ratings-item-btn border-left">
              <div className="sportLiveItem-ratings-item-btn-title">1</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportLiveItem-ratings-item-btn ">
              <div className="sportLiveItem-ratings-item-btn-title">draw</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportLiveItem-ratings-item-btn border-right">
              <div className="sportLiveItem-ratings-item-btn-title">1</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
          </div>
        </div>
        <div className="sportLiveItem-ratings-item">
          <div className="sportLiveItem-ratings-item-btns-wrapper">
            <div className="sportLiveItem-ratings-item-btn border-left">
              <div className="sportLiveItem-ratings-item-btn-title">1</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportLiveItem-ratings-item-btn ">
              <div className="sportLiveItem-ratings-item-btn-title">draw</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportLiveItem-ratings-item-btn ">
              <div className="sportLiveItem-ratings-item-btn-title">draw</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportLiveItem-ratings-item-btn border-right">
              <div className="sportLiveItem-ratings-item-btn-title">1</div>
              <div className="sportLiveItem-ratings-item-btn-rating">1.52</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SportLiveItem;
