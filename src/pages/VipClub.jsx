import React from "react";
import RouteUIComponent from "../components/UI/RouteUIComponent";
import ExclusiveItem from "../components/VipClub/ExclusiveItem";
import UnlockedRightItem from "../components/VipClub/UnlockedRightItem";
import VipClubBanner from "../components/VipClub/VipClubBanner";

import "../scss/pages/VipClub/index.scss";

const VipClub = () => {
  return (
    <div className="container">
      <div className="vipClub">
        <RouteUIComponent routeItems={"Commission Rules/Affiliate Terms"} />
        <VipClubBanner />
        <div className="vipClub-unlockedRights">
          <h2>VIP & SVIP Unlocked Rights</h2>
          <div className="vipClub-unlockedRights-items">
            {new Array(8).fill(0).map((el) => {
              return <UnlockedRightItem />;
            })}
          </div>
          <div className="vipClub-unlockedRights-pagination">
            <div className="pagination active"></div>
            <div className="pagination"></div>
            <div className="pagination"></div>
          </div>
        </div>
        <div className="vipClub-exclusive">
          <h2 className="vipClub-exclusive-h2">
            Exclusive VIP & SVIP Benefits
          </h2>
          <div className="vipClub-exclusive-items">
            {new Array(8).fill(0).map((el) => {
              return <ExclusiveItem />;
            })}
          </div>
        </div>
        <div className="vipClub-message">
          <h2>
            Some features and benefits require specific conditions to be met.
            Please ask your VIP host for details
          </h2>
          <p>
            Each one of you is important to us. Whether you are here to take the
            bankroll or just passing some time chatting with friends. - You all
            are BC.GAME. We wouldn't be here without you! -
          </p>
        </div>
      </div>
    </div>
  );
};

export default VipClub;
