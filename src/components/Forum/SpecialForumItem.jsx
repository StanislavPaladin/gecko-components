import React from "react";

import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";

import "../../scss/pages/Forum/specialForumItem.scss";

const SpecialForumItem = ({
  title,
  categories,
  description,
  posts,
  msg,
  nick,
  date,
}) => {
  return (
    <div className="specialForumItem">
      <div className="specialForumItem-head">
        <div className="messageIcon">
          <ChatIcon />
        </div>
        <div className="head-wrap">
          <div className="title">{title}</div>
          <div className="categories">
            {categories.map((el) => {
              return <div className="category">{el}</div>;
            })}
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="specialForumItem-content">
        <div className="posts">
          {posts} <p>posts</p>
        </div>
        <div className="user">
          <div className="photo">P</div>
          <div className="user-info">
            <div className="nick">{msg}</div>
            <div className="date">
              By <span>{nick}</span> Yesterday at
              <br />
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialForumItem;
