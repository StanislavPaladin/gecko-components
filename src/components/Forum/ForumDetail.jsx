import React from "react";

import { ReactComponent as StarInCircleIcon } from "../../assets/icons/starInCircle.svg";
import { ReactComponent as ClipInCircleIcon } from "../../assets/icons/clipInCircle.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";
import { ReactComponent as ArrowDownMini } from "../../assets/icons/arrowDownMini.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrowRight.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";

import "../../scss/pages/Forum/forumDetail.scss";

const RenderMessages = (messagesList) => {
  return (
    <div className="forumDetail-itemsList">
      {new Array(4).fill(0).map((el) => {
        return (
          <div className="item">
            <div className="user">
              <img
                src={require("../../assets/forumUser.png")}
                alt="user"
                className="user-photo"
              />
              <div className="user-name">
                Vlad Bortnovskyi
                <div className="time-mobile">
                  <ClockIcon />
                  26 minutes ago
                </div>
              </div>
              <div className="user-desc">Авторитет</div>
            </div>
            <div className="message">
              <div className="message-time">
                <ClockIcon />
                26 minutes ago
              </div>
              <div className="message-msg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                aperiam optio veniam corporis ad cum dolorem minima amet
                exercitationem fugiat?
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ForumDetail = () => {
  return (
    <div className="forumDetail">
      <div className="forumDetail-head">
        <div className="title">
          <div className="icons">
            <StarInCircleIcon />
            <ClipInCircleIcon />
          </div>
          Community survey and 200$ bonus to deposit
        </div>
        <div className="content">
          <div className="user">
            <img src={require("../../assets/userPhoto.png")} alt="user" />
            <div className="wrap">
              <p className="author">
                By <span>s0urse</span>
              </p>
              <p className="started">Started 13 hours ago</p>
            </div>
          </div>
          <div className="buttons">
            <div className="share">
              <ShareIcon />
              Share
            </div>
            <div className="sortBy">
              Sort By<span>72</span>
              <ArrowDownMini />
            </div>
          </div>
        </div>
      </div>
      <button className="primary-btn-small">
        Reply to this topic
      </button>
      <div className="forumDetail-pagination">
        <div className="pagination">
          <div className="pagination-item active">1</div>
          <div className="pagination-item">2</div>
          <div className="pagination-item">3</div>
          <div className="pagination-item">4</div>
          <div className="pagination-item">Next</div>
          <div className="pagination-item">
            <ArrowRightIcon />
          </div>
          <p>Page 1 of 4</p>
          <ArrowDownMini />
        </div>
      </div>
      <RenderMessages />
    </div>
  );
};

export default ForumDetail;
