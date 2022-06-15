import React from "react";

import { ReactComponent as ArrowLeftImage } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRightImage } from "../../assets/icons/arrowRight.svg";

import { ReactComponent as ProvidersIcon } from "../../assets/icons/providers.svg";

import "../../scss/pages/MainPage/gameProviders.scss";

const GameProviders = () => {
  return (
    <div className="gameProviders">
      <div className="gameProviders-header">
        <ProvidersIcon/>
        <h2>Providers</h2>
        <ArrowLeftImage className="gameProviders-header-arrow left" />
        <ArrowRightImage className="gameProviders-header-arrow right" />
      </div>
      <div className="gameProviders-content">
        <div className="provider">
          <img src={require("../../assets/providers/boongo.png")}/>
        </div>
        <div className="provider">
          <img src={require("../../assets/providers/evolution.png")}/>
        </div>
        <div className="provider">
          <img src={require("../../assets/providers/platipus.png")}/>
        </div>
        <div className="provider">
          <img src={require("../../assets/providers/pragmatic.png")}/>
        </div>
        <div className="provider">
          <img src={require("../../assets/providers/spinomenal.png")}/>
        </div>
        <div className="provider">
          <img src={require("../../assets/providers/yggdrasil.png")}/>
        </div>
      </div>
    </div>
  );
};

export default GameProviders;
