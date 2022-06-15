import React from "react";
import RewardItem from "./RewardItem";

import "../../scss/pages/Affiliate/realTimeRewards.scss";

const RealTimeRewards = () => {
  return (
    <div className="realTimeRewards">
      <h2 className="realTimeRewards-h2 affiliatePage-h2">
        Platform real-time rewards
      </h2>
      <div className="realTimeRewards-wrap">
        <div className="col">
          {new Array(9).fill(0).map((el, i) => {
            return <RewardItem active={i % 2} key={i} />;
          })}
        </div>
        <div className="col">
          {new Array(9).fill(0).map((el, i) => {
            return <RewardItem active={i % 2} key={i} />;
          })}
        </div>
      </div>
      <div className="primary-btn">Create Referral Code Now</div>
    </div>
  );
};

export default RealTimeRewards;
