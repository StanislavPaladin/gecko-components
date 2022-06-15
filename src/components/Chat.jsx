import React, { useContext } from "react";
import { ChatContext, NotificationContext } from "../context";

// import DateDelimiter from "./UI/DateDelimiter";
import UserMessage from "./UI/UserMessage";
import ChatNotification from "./UI/ChatNotification";

import { ReactComponent as ArrowDownImage } from "../assets/icons/arrowDown.svg";
import { ReactComponent as ArrowRightImage } from "../assets/icons/arrowRight.svg";
import { ReactComponent as ArrowBackIcon } from "../assets/icons/arrow-back.svg";
import { ReactComponent as SelectedIcon } from "../assets/icons/selected.svg";

import { ReactComponent as OnlineImage } from "../assets/icons/online.svg";

import "../scss/chat.scss";

const Chat = () => {
  const { chatActive, setChatActive } = useContext(ChatContext);
  const [activeLanguage, setActiveLanguage] = React.useState(false);
  const { notificationActive, setNotificationActive } = useContext(NotificationContext);
  const [inputText, setInputText] = React.useState("");
  const [inputHeight, setInputHeight] = React.useState(0);
  const isMoreHeight = 152 + inputHeight * 10 < 302;

  const handleInputText = (text) => {
    console.log(inputHeight);
    setInputHeight(Math.floor(text.length / 32));
    setInputText(text);
  };

  return (
    <>
      <div
        className={`chat  ${!chatActive ? "hidden" : ""} ${chatActive ? "active" : ""
          }`}
      >
        {!notificationActive ? (
          <>
            <div className="chat-arrow" onClick={() => setChatActive(false)}>
              <ArrowRightImage />
            </div>
            <div
              className="chat-language"
              onClick={() => setActiveLanguage(!activeLanguage)}
            >
              <ArrowBackIcon className="chat-language-back" />
              <div className="chat-language-online">
                <OnlineImage className="online" />
                568
              </div>
              <div className="language">
                Chat: English{" "}
                <ArrowDownImage
                  className={`arrow ${activeLanguage ? "top" : ""}`}
                />
              </div>
            </div>
            <div
              className={`chat-options ${!activeLanguage ? "hidden" : ""}`}
              onClick={() => setActiveLanguage(!activeLanguage)}
            >
              <div className="option">
                English <SelectedIcon />
              </div>
              <div className="option">Français</div>
              <div className="option">Germany</div>
              <div className="option">Indonesian</div>
            </div>
            <div
              className="chat-messages"
              style={{
                height: isMoreHeight
                  ? `calc(100% - ${102 + inputHeight * 10}px)`
                  : "calc(100% - 244px)",
              }}
            >
              <UserMessage
                image={require("../assets/user.png")}
                message="I have to change already, maybe 85 xD"
                time="15:04"
                nick="Perihelion"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="But, it's only a try out 💪🏼"
                time="15:03"
                nick="David"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="Don’t have telegram. I tried ready to do that. I’m in this place we can see something different!"
                time="15:02"
                nick="Jumanji"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="But, it's only a try out 💪🏼"
                time="15:03"
                nick="David"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="Don’t have telegram. I tried ready to do that. I’m in this place we can see something different!"
                time="15:02"
                nick="Jumanji"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="Don’t have telegram. I tried ready to do that. I’m in this place we can see something different!"
                time="15:02"
                nick="Jumanji"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="But, it's only a try out 💪🏼"
                time="15:03"
                nick="David"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="Don’t have telegram. I tried ready to do that. I’m in this place we can see something different!"
                time="15:02"
                nick="Jumanji"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="Don’t have telegram. I tried ready to do that. I’m in this place we can see something different!"
                time="15:02"
                nick="Jumanji"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="But, it's only a try out 💪🏼"
                time="15:03"
                nick="David"
              />
              <UserMessage
                image={require("../assets/user.png")}
                message="Don’t have telegram. I tried ready to do that. I’m in this place we can see something different!"
                time="15:02"
                nick="Jumanji"
              />
            </div>
            <div className="chat-input">
              <div
                className="chat-input-block"
                style={{ height: `${40 + inputHeight * 10}px` }}
              >
                <button className="chat-input-block-btn">/</button>
                <button className="chat-input-block-btn">@</button>
                <textarea
                  className="input"
                  placeholder="Enter your message ..."
                  value={inputText}
                  onChange={(e) => handleInputText(e.target.value)}
                />
                <div className="btn">
                  <img src={require("../assets/icons/send.png")} />
                </div>
              </div>
              {/* <div className="chat-buttons">
                <div className="chat-buttons-online">
                  <OnlineImage className="online" />
                  1298
                </div>
              </div> */}
            </div>
          </>
        ) : (
          <ChatNotification />
        )}
      </div>
    </>
  );
};

export default Chat;
