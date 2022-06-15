import React from "react";

import { ReactComponent as StarIcon } from "../../assets/icons/yellowStar.svg";
import { ReactComponent as BitcoinIcon } from "../../assets/icons/bitcoinBig.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrowRight.svg";

import "../../scss/pages/Affiliate/rewardBlock.scss";

const RewardBlock = () => {
  return (
    <div className="rewardBlock">
      <h2 className="rewardBlock-h2 affiliatePage-h2">
        Affiliate reward system
      </h2>
      <p className="rewardBlock-text infoCard-wrap-body-text">
        DEFI.GAME sets up a reward of 100 USD for each referral you invite in
        addition to commission. Click "Create Referral Code Now" and set sail on
        a new chapter on your journey of wealth immediately!
      </p>
      <div className="rewardBlock-arrow"></div>
      <div className="rewardBlock-btn">
        <StarIcon />
        <span className="btn-text">Affiliate rewards</span>
        <StarIcon />
      </div>
      <img
        src={require("../../assets/affiliateLines.png")}
        alt="lines"
        className="rewardBlock-lines"
      />

      <div className="items-wrap">
        <div className="item-wrap">
          <img
            src={require("../../assets/affiliateLine.png")}
            alt="lines"
            className="rewardBlock-mobileLine"
          />
          <div className="rewardBlock-item">
            <div className="rewardBlock-item-head">
              <div className="head-wrap">
                <div className="text-wrap">
                  <h3 className="title">Usd rewards</h3>
                  <span className="description">
                    Every friend you invite will get you
                  </span>
                </div>
              </div>
              <div className="price">
                <span className="price-text">$100</span>
                <span className="rules">
                  <a href="/">USD Rewards Rules</a>
                </span>
                <ArrowRightIcon />
              </div>
            </div>
            <div className="rewardBlock-item-content">
              <img
                src={require("../../assets/banners/rew1.png")}
                alt="rewardItem"
              />
              <div className="rewardBlock-item-content-text">
                Please contact us for a more profitable customized plan.
              </div>
              <div className="rewardBlock-item-content-btn">
                <img
                  src={require("../../assets/icons/Telegram.png")}
                  className="icon"
                />
                <span>Contact us</span>
              </div>
            </div>
          </div>
        </div>

        <div className="item-wrap">
          <div className="rewardBlock-btn mobile">
            <StarIcon />
            <span className="btn-text">Affiliate rewards</span>
            <StarIcon />
          </div>
          <img
            src={require("../../assets/affiliateLine.png")}
            alt="lines"
            className="rewardBlock-mobileLine"
          />
          <div className="rewardBlock-item">
            <div className="rewardBlock-item-head">
              <div className="head-wrap">
                <div className="text-wrap">
                  <h3 className="title">BCommission rewards</h3>
                  <span className="description">
                    Every friend you invite will rebate you a percentage of
                    their wagers as your commission and will be credited
                    directly to your balance.
                  </span>
                </div>
              </div>
            </div>
            <div className="rewardBlock-item-content">
              <img
                src={require("../../assets/banners/rew2.png")}
                alt="rewardItem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardBlock;
