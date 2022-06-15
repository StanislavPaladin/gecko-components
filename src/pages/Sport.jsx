import React from "react";
import SportBannerWrap from "../components/Sport/SportBannerWrap";
import SportLiveItem from "../components/Sport/SportLiveItem";

import { ReactComponent as FootballIcon } from "../assets/icons/sport/football.svg";
import { ReactComponent as BaseballIcon } from "../assets/icons/sport/baseball.svg";
import { ReactComponent as BasketballIcon } from "../assets/icons/sport/basketball.svg";
import { ReactComponent as CricketIcon } from "../assets/icons/sport/cricket.svg";
import { ReactComponent as HockeyIcon } from "../assets/icons/sport/hockey.svg";
import { ReactComponent as TennisIcon } from "../assets/icons/sport/tennis.svg";

import "../scss/pages/Sport/index.scss";

const RenderButtonsList = ({ buttonsList }) => {
  return (
    <div className="sport-buttonsList">
      {buttonsList.map(({ BtnIcon, text, active }) => {
        return (
          <div className={`sport-buttonsList-btn ${active ? "active" : ""}`}>
            <BtnIcon />
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

const RenderLiveItems = ({ items }) => {
  return (
    <>
      {new Array(items).fill(0).map((el) => {
        return (
          <SportLiveItem
            country={"France"}
            league={"Ligue 1"}
            teamOne={{
              name: "Real Betis Sevil",
              goals: 0,
              img: require("../assets/real.png"),
            }}
            teamTwo={{
              name: "Valencia CF",
              goals: 1,
              img: require("../assets/valencia.png"),
            }}
            currentTime={"78’ 2nd half"}
          />
        );
      })}
    </>
  );
};

const buttonsList = [
  { BtnIcon: FootballIcon, text: "Soccer", active: true },
  { BtnIcon: BasketballIcon, text: "Basketball" },
  { BtnIcon: TennisIcon, text: "Tennis" },
  { BtnIcon: CricketIcon, text: "Cricket" },
  { BtnIcon: HockeyIcon, text: "Ice Hockey" },
  { BtnIcon: BaseballIcon, text: "Baseball" },
];

const Sport = () => {
  return (
    <div className="container sport">
      <div className="sport">
        <SportBannerWrap />
        <div className="sport-title">
          <h2>Top Matches</h2>
        </div>
        <RenderButtonsList buttonsList={buttonsList} />
        <RenderLiveItems items={6} />
        <div className="sport-seeMore">
          <div className="sport-seeMore-wrap">
            <div className="live-wrap">
              <div className="live-btn">Live</div>
              <h2>All Live Matches</h2>
            </div>
            <button className="primary-btn">See more</button>
          </div>
        </div>
        <SportBannerWrap />
        <div className="sport-title">
          <h2>Upcoming Events</h2>
        </div>
        <RenderButtonsList buttonsList={buttonsList} />
        <RenderLiveItems items={4} />
      </div>
    </div>
  );
};

export default Sport;
