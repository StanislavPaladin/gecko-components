import React from "react";
import PromotionBannerItem from "./PromotionBannerItem";

import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrowRight.svg";

import "../../scss/pages/Promotion/promotionBanner.scss";

const PromotionBanner = () => {
  return (
    <div className="promotionBanner">
      <div className="col">
        <h1>GREAT BONUS<br/> FOR EVERY DEPOSIT</h1>
        <p className="unlock-speed">
          BCD UNLOCK SPEED <span>+5%</span>
        </p>
        <p className="available">Available for all players</p>
        <p className="date">Before 24.05.2022</p>
        <div className="details">
          Details <ArrowRightIcon />
        </div>
      </div>
      <div className="col">
        <div className="promotion-banners">
        <PromotionBannerItem color="blue" />
        <PromotionBannerItem color="purple" />
        <PromotionBannerItem color="yellow" />
        <PromotionBannerItem color="pink" />
        </div>
        <div className="promotionBanner-mobile">
          <div className="info-wrap">
            <p className="available">Available for all players</p>
            <p className="date">Before 24.05.2022</p>
          </div>
          <div className="details">
            Details <ArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
