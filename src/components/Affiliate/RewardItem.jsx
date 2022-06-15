import React from 'react'
import CryptoItem from "../UI/CryptoItem";

import TeetherSrc from "../../assets/icons/Tether.png";

import "../../scss/pages/Affiliate/rewardItem.scss";

const RewardItem = ({active}) => {
  return (
    <div className={`rewardItem ${active ? "active" : ""}`}>
        <span className="rewardItem-span">Jaylon Saris</span>
        <CryptoItem price="0.03487000" image={TeetherSrc}/>
    </div>
  )
}

export default RewardItem