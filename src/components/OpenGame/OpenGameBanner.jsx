import React from "react";

import { ReactComponent as StarImage } from "../../assets/icons/star.svg";
import { ReactComponent as ChartImage } from "../../assets/icons/chart.svg";
import { ReactComponent as FullScreenImage } from "../../assets/icons/fullScreen.svg";

import "../../scss/pages/OpenGame/openGameBanner.scss";

const OpenGameBanner = () => {
  return (
    <div className="openGameBanner">
      <img
        className="openGameBanner-img"
        src={require("../../assets/banners/openGameBanner.png")}
        alt="bannerImg"
      />
      <div className="openGameBanner-content">
        <div className="openGameBanner-content-favorite">
          <StarImage />
          <span>184 Favorite</span>
        </div>
        <ChartImage className="openGameBanner-content-icon chartImage"/>
        <FullScreenImage className="openGameBanner-content-icon"/>
      </div>
    </div>
  );
};

export default OpenGameBanner;
