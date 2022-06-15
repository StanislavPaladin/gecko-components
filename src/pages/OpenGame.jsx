import React from "react";
import OpenGameBanner from "../components/OpenGame/OpenGameBanner";
import BetsBlock from "../components/UI/BetsBlock";
import RouteUIComponent from "../components/UI/RouteUIComponent";

import { ReactComponent as DiamondBlueImage } from "../assets/icons/diamondBlue.svg";
import { ReactComponent as PlayImage } from "../assets/icons/play.svg"

import "../scss/pages/OpenGame/index.scss";

const OpenGame = () => {
  return (
    <div className="container">
      <div className="openGame">
        <RouteUIComponent routeItems={"Slots/Wolf Fang Winter Storm"} />
        <OpenGameBanner />
        <BetsBlock />
        <div className="openGame-other">
          <div className="openGame-other-head">
            <img src={require("../assets/icons/diamond1.png")} className="icon"/>
            <h2>Other games</h2>
          </div>
          <div className="openGame-other-content">
            {new Array(5).fill(0).map((item, i) => {
              return (
                <div to="/openGame" className="openGame-other-content-item">
                <img
                  src={require(`../assets/gamesList${Math.ceil(
                    Math.random() * 5
                  )}.png`)}
                  alt="game"
                />
                <div className="fade">
                  <PlayImage />
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenGame;
