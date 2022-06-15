import React from "react";
import { ReactComponent as GameLogo } from "../../assets/icons/dota.svg";

import "../../scss/pages/SportSearch/sportBetItem.scss";

const SportBetItem = () => {
  return (
    <div className="sportBetItem">
      <div className="sportBetItem-date">
        <div className="sportBetItem-date-day">Today</div>
        <div className="sportBetItem-date-time">23:00</div>
      </div>

      <div className="sportBetItem-info">
        <div className="sportBetItem-info-league">
          <div className="sportBetItem-info-league-logo">
            <GameLogo />
          </div>
          <div className="sportBetItem-info-league-name">
            ESL Dota2 / ESL One Stockholm
          </div>
        </div>
        <div className="sportBetItem-info-teams">
          <div className="sportBetItem-info-teams-item">
            <div className="sportBetItem-info-teams-item-logo">
              <GameLogo />
            </div>
            <div className="sportBetItem-info-teams-item-name">
              Thunder Awaken
            </div>
          </div>
          <div className="sportBetItem-info-teams-separator">vs</div>
          <div className="sportBetItem-info-teams-item">
            <div className="sportBetItem-info-teams-item-logo">
              <GameLogo />
            </div>
            <div className="sportBetItem-info-teams-item-name">Mind Games</div>
          </div>
        </div>
      </div>
      <div className="sportBetItem-gradient"></div>
      <div className="sportBetItem-ratings">
        <div className="sportBetItem-ratings-item">
          <div className="sportBetItem-ratings-item-title">1x2</div>
          <div className="sportBetItem-ratings-item-btns-wrapper">
            <div className="sportBetItem-ratings-item-btn border-left">
              <div className="sportBetItem-ratings-item-btn-title">1</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportBetItem-ratings-item-btn ">
              <div className="sportBetItem-ratings-item-btn-title">draw</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportBetItem-ratings-item-btn border-right">
              <div className="sportBetItem-ratings-item-btn-title">1</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
          </div>
        </div>
        <div className="sportBetItem-ratings-item">
          <div className="sportBetItem-ratings-item-title">Double chance</div>
          <div className="sportBetItem-ratings-item-btns-wrapper">
            <div className="sportBetItem-ratings-item-btn border-left">
              <div className="sportBetItem-ratings-item-btn-title">1</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportBetItem-ratings-item-btn ">
              <div className="sportBetItem-ratings-item-btn-title">draw</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportBetItem-ratings-item-btn border-right">
              <div className="sportBetItem-ratings-item-btn-title">1</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
          </div>
        </div>
        <div className="sportBetItem-ratings-item">
          <div className="sportBetItem-ratings-item-btns-wrapper">
            <div className="sportBetItem-ratings-item-btn border-left">
              <div className="sportBetItem-ratings-item-btn-title">1</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportBetItem-ratings-item-btn ">
              <div className="sportBetItem-ratings-item-btn-title">draw</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportBetItem-ratings-item-btn ">
              <div className="sportBetItem-ratings-item-btn-title">draw</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
            <div className="sportBetItem-ratings-item-btn border-right">
              <div className="sportBetItem-ratings-item-btn-title">1</div>
              <div className="sportBetItem-ratings-item-btn-rating">1.52</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportBetItem;
