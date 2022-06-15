import React from "react";
import AffiliateBanner from "../components/Affiliate/AffiliateBanner";
import InfoCard from "../components/Affiliate/InfoCard";
import RouteUIComponent from "../components/UI/RouteUIComponent";
import RewardBlock from "../components/Affiliate/RewardBlock";
import RealTimeRewards from "../components/Affiliate/RealTimeRewards";

import "../scss/pages/Affiliate/index.scss";

const AffiliateCardsList = () => {
  return (
    <>
      <h2 className="affiliatePage-h2 cardsList">Start earning today</h2>
      <div className="affiliatePage-infoCardsList">
        <InfoCard
          title="Build Your Own Casino Club Quickly."
          textList={[
            "It's hard to build a casino, but you can start from managing your own table on Gecko Casino.",
            "Gecko Casino is not just games, it’s a platform to realize the potential of your hidden dreams.",
            "Join Gecko Casino and set sail on a new chapter in your wealth journey immediately!",
          ]}
        />
        <InfoCard
          title="Build A Casino Website With Your Own Domain."
          textList={[
            "If you got your own plan. you can set up a casino website with your own domain, design style and theme. If you are capable to invite players and their wager amount reaches a billion dollars and above, you will be able to get your own customized casino!",
            "Contact Affiliate@defi.game for more details"
          ]}
        />
      </div>
    </>
  );
};

const Affiliate = () => {
  return (
    <div className="container">
      <div className="affiliatePage">
        <RouteUIComponent routeItems="Commission Rules/Affiliate Terms" />
        <AffiliateBanner />
        <AffiliateCardsList />
        <div className="affiliatePage-wrap">
          <RewardBlock />
          <div className="affiliatePage-rewards">
            <div className="wrap">
              <h2 className="affiliatePage-rewards-h2 affiliatePage-h2">
                Rewards sent out till date
              </h2>
              <div className="affiliatePage-rewards-wrap">
                <div className="item">
                  <span>USD rewards sent out till date</span>
                  <div className="item-btn"><span>816291 USD</span></div>
                </div>
                <div className="item">
                  <span>Commission sent out till date</span>
                  <div className="item-btn"><span>8839888.11 USD</span></div>
                </div>
              </div>
            </div>
          </div>
          <RealTimeRewards />
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
