import React from "react";

import "../../scss/pages/VipClub/vipClubBanner.scss";

const VipClubBanner = () => {
  return (
    <div className="vipClubBanner">
      <h1 className="vipClubBanner-h1">VIP - Exclusive<br/> Player Benefits</h1>
      <p className="vipClubBanner-p">
      As a way of showing our gratitude and appreciation to our VIP players, GekoGames invites you to join our VIP Club where there is an abundance of gifts, giveaways, higher cash back and unique features. Don't miss out on all the exciting and amazing fun!
      </p>
      <img
        src={require("../../assets/banners/vipHero.png")}
        alt="banner-img"
        className="vipClubBanner-hero"
      />
    </div>
  );
};

export default VipClubBanner;
