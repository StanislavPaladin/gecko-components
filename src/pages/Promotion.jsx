import React from "react";
import PromotionBanner from "../components/Promotion/PromotionBanner.jsx";
import RouteUIComponent from "../components/UI/RouteUIComponent.jsx";

import { ReactComponent as StarIcon } from "../assets/icons/yellowStar.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrowRight.svg";
import { ReactComponent as MasterMedalsImage } from "../assets/masterMedals.svg";

import "../scss/pages/Promotion/index.scss";

const OtherBonusItem = ({ title, text }) => {
  return (
    <div className="other-bonus">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const otherBonusList = [
  { title: "ROLL COMPETITION", text: "Roll your way to Daily Victory!" },
  {
    title: "WHERE IS COCO BONUS",
    text: "COCO plays Hide and Seek! Did you catch him yet?!",
  },
  {
    title: "RAIN",
    text: "It's raining coins in chatrooms! 6 hours 6 winners!",
  },
];

const Promotion = () => {
  return (
    <div className="container">
      <div className="promotion">
        <RouteUIComponent routeItems="Home/Promotion" />
        <PromotionBanner />
        <div className="promotion-shitcode">
          <div className="promotion-shitcode-item bcd">
            <div className="wrap">
              <h3>BC DOLLAR: BCD</h3>
              <p>1 BCD = 1 USD</p>
              <p>Claim BSD Right Now</p>
              <div className="details">
                <a href="/">
                  Details <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="promotion-shitcode-item shitcode">
            <div className="wrap">
              <div className="head">
                <h3>SHITCODE</h3>
                <div className="details">
                  <a href="/">
                    Details <ArrowRightIcon />
                  </a>
                </div>
              </div>
              <p>Redeem shitcodes to unlock crypto rewards</p>
              <div className="enterCode">
                <input type="text" placeholder="Enter you code" />
                <button className="enterCode-btn primary-btn">Redeem</button>
              </div>
            </div>
          </div>
        </div>
        <div className="promotion-medals">
          <div className="wrap">
            <h3>MASTER MEDALS</h3>
            <p>Witness every step of your becoming a Master</p>
            <div className="details">
              <a href="/">
                Details <ArrowRightIcon />
              </a>
            </div>
          </div>
          <MasterMedalsImage className="promotion-medals-img" />
          <div className="details details-mobile">
            <a href="/">
              Details <ArrowRightIcon />
            </a>
          </div>
        </div>
        <div className="promotion-bonuses">
          <div className="promotion-bonuses-btn">
            <StarIcon />
            <span className="btn-text">Other bonus</span>
            <StarIcon />
          </div>
          <div className="bonus-list">
            <div className="bonus">
              <div className="wrap">
                <img
                  className="bonus-img-mobile"
                  src={require("../assets/bonusMobile2.png")}
                  alt="bonus img"
                />
                <h3>TASK HUB</h3>
                <p>Achieve tasks and get rewards!</p>
                <button className="bonus-btn">Get Reward Now</button>
              </div>
              <img
                className="bonus-img"
                src={require("../assets/bonusImg1.png")}
                alt="bonus img"
              />
            </div>
            <div className="bonus">
              <div className="wrap">
                <img
                  className="bonus-img-mobile"
                  src={require("../assets/bonusMobile4.png")}
                  alt="bonus img"
                />
                <h3>LUCKY SPIN BONUS SPIN AND GET UP TO 1 BTC</h3>
                <button className="bonus-btn">Sing Up & Spin Now!</button>
              </div>
              <img
                className="bonus-img"
                src={require("../assets/bonusImg3.png")}
                alt="bonus img"
              />
            </div>
            <div className="bonus">
              <div className="wrap">
                <img
                  className="bonus-img-mobile"
                  src={require("../assets/bonusMobile1.png")}
                  alt="bonus img"
                />
                <h3>RAKEBACK BONUS</h3>
                <p>
                  Collect Rakeback with every bet you place, whether you win or
                  lose.
                </p>
              </div>
              <img
                className="bonus-img"
                src={require("../assets/bonusImg2.png")}
                alt="bonus img"
              />
            </div>
            <div className="bonus">
              <div className="wrap">
                <img
                  className="bonus-img-mobile"
                  src={require("../assets/bonusMobile3.png")}
                  alt="bonus img"
                />
                <h3>RECHARGE BONUS</h3>
                <p>
                  No one likes to wait for recharge to complete. Relax and Enjoy
                  steady stream of recharge right here!
                </p>
              </div>
              <img
                className="bonus-img"
                src={require("../assets/bonusImg4.png")}
                alt="bonus img"
              />
            </div>
          </div>
        </div>
        <div className="promotion-other-bonuses">
        <div className="promotion-bonuses-btn">
            <StarIcon />
            <span className="btn-text">Other casino bonus</span>
            <StarIcon />
          </div>
          <div className="promotion-other-bonuses-list">
            {otherBonusList.map((el) => {
              return <OtherBonusItem title={el.title} text={el.text} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
