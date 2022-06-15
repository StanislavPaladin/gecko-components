import React from "react";

import "../../scss/components/userMessage.scss";

const UserMessage = ({ image, message, nick, time }) => {
  return (
    <div className="userMessage">
      <div className="avatar">
        <img className="avatar-img" src={image} alt="avatar" />
      </div>
      <div className="message">
        <div className="message-head">
          <div className="message-head-nick">
            {nick}
          </div>
          <div className="message-head-time">{time}</div>
        </div>
        <div className="message-content">{message}</div>
      </div>
    </div>
  );
};

export default UserMessage;
