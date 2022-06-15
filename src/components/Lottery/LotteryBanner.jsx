import React from "react";

import "../../scss/pages/Lottery/lotteryBanner.scss";

const LotteryButtons = ({ mobile }) => {
  return (
    <div className={`btn-wrap ${mobile ? "mobile" : ""}`}>
      <div className="btn-wrap-btn">Buy ticket for $0,1</div>
      <div className="next-draw">
        Next Draw in
        02h:21m:47s
      </div>
    </div>
  );
};

const LotteryBanner = () => {
  return (
    <div className="lotteryBanner">
      <div className="lotteryBanner-head">
        <p>
          Lottery Game ID. <span>20220509</span>
        </p>
        <p className="lotteryBanner-head-tickets">
          Don't miss your chance! <span>27452</span> tickets have been sold
          today!
        </p>
      </div>
      <div className="lotteryBanner-content">
        <div className="lotteryBanner-content-info">
          <div className="price">$ 100 000</div>
          <div className="text">LOTTERY JACKPOT</div>
          <LotteryButtons />
        </div>
      </div>
      <LotteryButtons mobile />
      <div className="lotteryBanner-footer">
        <p className="lotteryBanner-footer-text">
          Iyke2214 Bought <span>1</span> lottery tickets
        </p>
      </div>
    </div>
  );
};

export default LotteryBanner;
