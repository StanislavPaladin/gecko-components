import React from "react";

import "../../scss/pages/Forum/recentlyTopicItem.scss";
const RecentlyTopicItem = () => {
  return (
    <div className="recentlyTopicItem">
      <div className="recentlyTopicItem-main">
        <div className="recentlyTopicItem-main-image">
          <img
            src={require("../../assets/icons/messageIcon.png")}
            alt="message"
          />
        </div>
        <div className="recentlyTopicItem-main-about">
          <div className="recentlyTopicItem-main-about-text">
            Community Survey and <br />
            $200 Worth Shitlinks
            <br />
            Giveaway
            <br />
          </div>
          <div className="recentlyTopicItem-main-about-gray">Done</div>
          <div className="recentlyTopicItem-main-about-wrapper">
            <div className="recentlyTopicItem-main-about-wrapper-time">
              <img src={require("../../assets/icons/clock.png")} alt="clock" />
              <div className="recentlyTopicItem-main-about-wrapper-time-gray">
                12 minutes ago{" "}
              </div>
              <div className="recentlyTopicItem-main-about-wrapper-time-white">
                in General Events
              </div>
            </div>
          </div>
        </div>
        <div className="recentlyTopicItem-main-topics">250</div>
      </div>
    </div>
  );
};

export default RecentlyTopicItem;
