import React from "react";

import {ReactComponent as LogoutIcon} from "../../assets/icons/logoutIcon.svg"
import {ReactComponent as ArrowRight} from "../../assets/icons/arrowRight.svg"

import "../../scss/components/userPanel.scss";

const UserPanel = ({ handleUserInfo, name="Leva Shaikers", active }) => {
  const userItems = [
    {text: "User Information", active: true},
    {text: "Statistics"},
    {text: "Transaction"},
    {text: "Live Support"},
    {text: "Affiliate"},
    {text: "Wallet"},
    {text: "BCSwap"},
    {text: "Vault Pro"},
    {text: "Reward"},
    {text: "VIP Club"},
  ];
  return (
    <div className={`userMenu-layout ${active ? "" : "hide"}`}>
    <div className={`userPanel ${active ? "" : "hide"}`}>
      <div className="userPanel-info">
        <div className="userPanel-info-user">
          <div className="userPanel-info-user-name">{name}</div>
          <div className="userPanel-info-user-stars">★★★★★ {0}</div>
        </div>
        <div className="userPanel-info-settings">
          <img
            className="userPanel-info-settings-icon"
            src={require("../../assets/icons/Play-joystickk.png")}
            alt="joystick"
          />
          <a href="/"><span>Global Settings</span></a>
        </div>
      </div>
      <div className="userPanel-lvl">
        <div className="userPanel-lvl-info">
          <div className="userPanel-lvl-info-current">Vip 0</div>
          <div className="userPanel-lvl-info-next">
            <span>Need 0xp </span>
            <span className="userPanel-lvl-info-next-vip">Vip 1</span>
          </div>
        </div>

        <div className="userPanel-lvl-exp">
          <div className="userPanel-lvl-exp-bar">
            <div className="userPanel-lvl-exp-bar-filled"></div>
          </div>
          <span>{0}%</span>
        </div>
      </div>
      <div className="userPanel-main">
        {userItems.map(({text, active}) => (
          <div key={text} className="userPanel-main-item" onClick={() => active && handleUserInfo()}>
            <ArrowRight/>
            <span className="userPanel-main-item-text">{text}</span>
          </div>
        ))}
      </div>
      <div className="userPanel-main-item logout">
        <LogoutIcon/>
        <span className="userPanel-main-item-text">Logout</span>
      </div>
    </div>
    </div>
  );
};

export default UserPanel;
