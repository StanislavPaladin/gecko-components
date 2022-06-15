import React from "react";

import {ReactComponent as StarInCircleIcon} from "../../assets/icons/starInCircle.svg";
import {ReactComponent as ClipInCircleIcon} from "../../assets/icons/clipInCircle.svg";

import "../../scss/pages/Forum/forumItem.scss";

const ForumItem = ({ color,title,author,date,category,views,hot,replies,lastReply }) => {
  return (
    <div className="forumItem">
      <div className="forumItem-wrapper">
        <div className="forumItem-wrapper-icons">
          <StarInCircleIcon/>
          <ClipInCircleIcon/>
        </div>
        <div className="forumItem-wrapper-text">
          {title}
          <br /> By
          <span className="colored" style={{ color: color }}>
            {" "}{author}
          </span>
          , {date} in {category}
        </div>
      </div>

      <div className="forumItem-items">
        <div className="forumItem-items-btns">
          <div className={`forumItem-items-btns-replies ${hot ? "hot" : ""}`}>
            {hot && <span className="forumItem-items-btns-replies-hot">HOT!</span>}
            <span className="forumItem-items-btns-replies-text">
              {replies} replies
            </span>
          </div>
          <div className="forumItem-items-btns-views">{views}</div>
        </div>
        <div className="forumItem-items-about">
          <img src={require("../../assets/icons/clock.png")} alt="clock" />
          <div className="forumItem-items-about-wrapper">
            <div className="forumItem-items-about-wrapper-name">{lastReply.author}</div>
            <div className="forumItem-items-about-wrapper-time">
              {lastReply.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumItem;
