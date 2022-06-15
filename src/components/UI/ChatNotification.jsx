import React, { useContext } from "react";
import { ChatContext, NotificationContext } from "../../context";

import { ReactComponent as CloseBtn } from "../../assets/icons/close-btn.svg";
import { ReactComponent as Diamond } from "../../assets/icons/diamond_gray.svg";

import "../../scss/components/chatNotification.scss";

const ChatNotification = () => {
	const { chatActive, setChatActive } = useContext(ChatContext);
	const { notificationActive, setNotificationActive } = useContext(NotificationContext);
  return (
    <div className="chatNotification">
      <div className="chatNotification-header">
        <span className="chatNotification-header-text">Notification</span>
        <div className="chatNotification-header-icon" onClick={() => {
			setChatActive(false);
			setNotificationActive(false);
		}}>
          <CloseBtn />
        </div>
      </div>
      <div className="chatNotification-tabs">
        <div className="chatNotification-tabs-item-active">System Notice</div>
        <div className="chatNotification-tabs-item">
          Reward
          <Diamond />
        </div>
      </div>
      <div className="chatNotification-list">
	  <div className="chatNotification-main">
        <div className="chatNotification-main-header">
          <div className="chatNotification-main-header-title">
            ⚠️ Pragmatic Play Live Casino Maintenance ⚠️
          </div>
          <div className="chatNotification-main-header-info">
            <span>DEFI.GAME Oficcial</span>
            <span>05/07/2022 15:39</span>
          </div>
        </div>
        <div className="chatNotification-main-body">
          <div className="chatNotification-main-body-title">
            Hi Ssfjgkaegwb!
          </div>
          <div className="chatNotification-main-body-text">
            <span>
              Please be informed about Pragmatic Play Live Casino Planned
              Maintenance, all the third-party Live Casino games provided by
              Pragmatic Play will temporarily be unavailable to play.
            </span>
            <span>
              Maintenance Time: May 11st, 10:00 pm – May 12nd, 3:00 am (UTC)
              <br />
              Tables affected: All Live Casino Tables
            </span>
            <span>We will notify you when the game is available.</span>
            <span> Thank you for your patience and support!</span>
          </div>
          <div className="chatNotification-main-body-link">
            <div className="chatNotification-main-body-link-title">
              Click here 👇
            </div>
            <div className="chatNotification-main-body-link-colored">
              <a href="">
                If you have any questions kindly get in touch
                <br /> with our 24x7 customer service at
                <br />
                support.bc.game.
              </a>
            </div>
          </div>
        </div>
      </div>
	  <div className="chatNotification-main">
        <div className="chatNotification-main-header">
          <div className="chatNotification-main-header-title">
            ⚠️ Pragmatic Play Live Casino Maintenance ⚠️
          </div>
          <div className="chatNotification-main-header-info">
            <span>DEFI.GAME Oficcial</span>
            <span>05/07/2022 15:39</span>
          </div>
        </div>
        <div className="chatNotification-main-body">
          <div className="chatNotification-main-body-title">
            Hi Ssfjgkaegwb!
          </div>
          <div className="chatNotification-main-body-text">
            <span>
              Please be informed about Pragmatic Play Live Casino Planned
              Maintenance, all the third-party Live Casino games provided by
              Pragmatic Play will temporarily be unavailable to play.
            </span>
            <span>
              Maintenance Time: May 11st, 10:00 pm – May 12nd, 3:00 am (UTC)
              <br />
              Tables affected: All Live Casino Tables
            </span>
            <span>We will notify you when the game is available.</span>
            <span> Thank you for your patience and support!</span>
          </div>
          <div className="chatNotification-main-body-link">
            <div className="chatNotification-main-body-link-title">
              Click here 👇
            </div>
            <div className="chatNotification-main-body-link-colored">
              <a href="">
                If you have any questions kindly get in touch
                <br /> with our 24x7 customer service at
                <br />
                support.bc.game.
              </a>
            </div>
          </div>
        </div>
      </div>
	  </div>
    </div>
  );
};

export default ChatNotification;
