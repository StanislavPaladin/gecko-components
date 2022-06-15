import React from "react";

import "../../scss/pages/Promotion/promotionBannerItem.scss";

const PromotionBannerItem = ({color}) => {
  return (
    <div className="promotionBannerItem">
      <div className={`promotionBannerItem-wrapper ${color}`}>
        <div className="promotionBannerItem-coin">
          <div className="promotionBannerItem-coin-wrapper"></div>
        </div>
        <div className="promotionBannerItem-info">
          <div className="promotionBannerItem-info-title">UP to 180% BONUS</div>
          <div className="promotionBannerItem-info-text">first deposit</div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBannerItem;
