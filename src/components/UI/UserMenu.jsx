import React from "react";

import { ReactComponent as UserMedalIcon } from "../../assets/icons/medal_with_text.svg";
import { ReactComponent as MedalIcon } from "../../assets/icons/medal_empty.svg";
import { ReactComponent as PenIcon } from "../../assets/icons/pen_gray.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart_filled.svg";
import { ReactComponent as Circle } from "../../assets/icons/circle.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_btn_bold.svg";
import { ReactComponent as UserAvatar } from "../../assets/icons/user_avatar_girl.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowRightGray.svg";

import "../../scss/components/userMenu.scss";

const UserMenu = ({active, handleUserInfo}) => {
  return (
    <div className={`userMenu-layout ${active ? "" : "hide"}`}>
    <div className={`userMenu ${active ? "" : "hide"}`}>
     
      <div className="userMenu-header">
        <div className="userMenu-header-top">
          <div className="userMenu-header-top-info">User information</div>
          <div className="userMenu-header-top-medal">
            <UserMedalIcon />
          </div>
          <div className="userMenu-header-top-close">
            <CloseIcon onClick={()=>handleUserInfo()}/>
          </div>
        </div>
        <div className="userMenu-header-bottom">
          <div className="userMenu-header-bottom-user">
            <div className="userMenu-header-bottom-user-photo">
              <UserAvatar />
            </div>
            <div className="userMenu-header-bottom-user-info">
              <div className="userMenu-header-bottom-user-info-name">
                Iva Ivanchikova
              </div>
              <div className="userMenu-header-bottom-user-info-stars">
                ★★★★★ 0
              </div>
            </div>
          </div>
          <div className="userMenu-header-bottom-tools">
            <div className="userMenu-header-bottom-tools-heart">
              <HeartIcon />0
            </div>
            <div className="userMenu-header-bottom-tools-pen">
              <PenIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="userMenu-medals">
        <div className="userMenu-medals-top">
          <div className="userMenu-medals-top-info">
            <Circle />
            <div className="userMenu-medals-top-info-text">Medals 0</div>
          </div>
          <div className="userMenu-medals-top-details">
            <span>Details</span>
            <ArrowRight />
          </div>
        </div>
        <div className="userMenu-medals-main">
          <div className="userMenu-medals-main-item">
            <MedalIcon />
          </div>
          <div className="userMenu-medals-main-item">
            <MedalIcon />
          </div>
          <div className="userMenu-medals-main-item">
            <MedalIcon />
          </div>
          <div className="userMenu-medals-main-item">
            <MedalIcon />
          </div>
          <div className="userMenu-medals-main-item">
            <MedalIcon />
          </div>
          <div className="userMenu-medals-main-item">
            <MedalIcon />
          </div>
          <div className="userMenu-medals-main-item">
            <MedalIcon />
          </div>
        </div>
      </div>
      <div className="userMenu-statistics">
        <div className="userMenu-statistics-top">
          <div className="userMenu-statistics-top-info">
            <Circle />
            <div className="userMenu-statistics-top-info-text">Statistics</div>
          </div>
          <div className="userMenu-statistics-top-details">
            <span>Details</span>
            <ArrowRight />
          </div>
        </div>
        <div className="userMenu-statistics-main">
          <div className="userMenu-statistics-main-item">
            <div className="userMenu-statistics-main-item-info">
              <span>Total Wins</span>
            </div>
            <div className="userMenu-statistics-main-item-count">0</div>
          </div>
          <div className="userMenu-statistics-main-item">
            <div className="userMenu-statistics-main-item-info">
              <span>Total Bets</span>
            </div>
            <div className="userMenu-statistics-main-item-count">0</div>
          </div>
          <div className="userMenu-statistics-main-item">
            <div className="userMenu-statistics-main-item-info">
              <span>Total Wagered</span>
            </div>
            <div className="userMenu-statistics-main-item-count">0 USD</div>
          </div>
        </div>
      </div>
      <div className="userMenu-favorite">
        <div className="userMenu-favorite-title">Top 3 Favorite Games</div>
        <img className="userMenu-no-data-image" src={require(`../../assets/no-data-fish.png`)} alt="" />
      </div>
      <div className="userMenu-wager">
        <div className="userMenu-wager-title">Wager contest Details</div>
        <img className="userMenu-no-data-image" src={require(`../../assets/no-data-fish.png`)} alt="" />
      </div>
      <div className="userMenu-footer">Joined on 30.04.2022</div>
    </div>
    </div>
  );
};

export default UserMenu;
