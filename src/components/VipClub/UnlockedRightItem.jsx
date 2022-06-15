import React from "react";

import {ReactComponent as LockIcon} from "../../assets/icons/lock.svg";

import "../../scss/pages/VipClub/unlockedRightItem.scss";

const UnlockedRightItem = () => {
  return (
    <div className="unlockedRightItem">
      <div className="unlockedRightItem-head">
        <div className="unlockedRightItem-head-flag">V03</div>
        <div className="unlockedRightItem-head-status"><LockIcon/>Locked</div>
      </div>
      <div className="unlockedRightItem-content">
        <div className="unlockedRightItem-title">Roll Competition</div>
        <div className="unlockedRightItem-text">
          Try your luck once a day for a spot on our daily top 10 and win some
          free Doge!
        </div>
      </div>
    </div>
  );
};

export default UnlockedRightItem;
