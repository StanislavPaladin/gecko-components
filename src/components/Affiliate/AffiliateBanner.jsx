import React from "react";
import "../../scss/pages/Affiliate/affiliateBanner.scss";

const AffiliateBanner = () => {
  return (
    <div className="wrap">
      <div className="affiliateBanner">
        <div className="affiliateBanner-content">
          <h2>Affiliate</h2>
          <p>COMMISSION READY EVERYDAY 100$ JUST A REFERRAL AWAY</p>
          <div className="primary-btn">Create Referral Code Now</div>
        </div>
        <img className="hero" src={require("../../assets/banners/affiliateHero.png")} />
      </div>
    </div>
  );
};

export default AffiliateBanner;
