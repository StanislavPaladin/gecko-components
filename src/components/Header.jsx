import React, { useContext } from "react";
import { ChatContext, SidebarContext, ModalsContext, SidebarHiddenContext, NotificationContext } from "../context";
import { Link, useLocation } from "react-router-dom";
import UserBar from "./UI/UserBar";
import UserMenu from "./UI/UserMenu";
import UserPanel from "./UI/UserPanel";
import CurrencySearch from "./UI/CurrencySearch";
import SearchResult from "./UI/SearchResult";

import { ReactComponent as ChatIcon } from "../assets/icons/chat.svg";
import { ReactComponent as Chat2Icon } from "../assets/icons/chat2.svg";
import { ReactComponent as BellIcon } from "../assets/icons/Bell.svg";
import { ReactComponent as MailIcon } from "../assets/icons/Mail.svg";
import { ReactComponent as Logo } from "../assets/icons/logoLight.svg";
import { ReactComponent as UserBurger } from "../assets/icons/userBurger.svg";
import { ReactComponent as WalletIcon } from "../assets/icons/wallet8.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search_icon.svg";

import "../scss/header.scss";

const Header = ({ full }) => {
  const { chatActive, setChatActive } = useContext(ChatContext);
  const { sidebarActive, setSidebarActive } = useContext(SidebarContext);
  const { isModalActive, setModalActive } = useContext(ModalsContext);
  const { sidebarHidden, setSidebarHidden } = useContext(SidebarHiddenContext);
  const { notificationActive, setNotificationActive } = useContext(NotificationContext);
  const [userPanelActive, setUserPanelActive] = React.useState(false);
  const [userInfoActive, setUserInfoActive] = React.useState(false);
  const [currencySearchActive, setCurrencySearchActive] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const modalRef = React.useRef();
  const { pathname } = useLocation();

  const handleUserPanel = () => {
    setUserPanelActive(!userPanelActive);
    setCurrencySearchActive(false);
  };

  const handleUserInfo = () => {
    setUserInfoActive(!userInfoActive);
    setUserPanelActive(false);
  };

  const handleCurrencySearch = () => {
    setUserPanelActive(false);
    setUserInfoActive(false);
    setCurrencySearchActive(!currencySearchActive);
  };

  React.useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setCurrencySearchActive(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <div className="header-wrap">
      <header className={`header ${sidebarHidden ? "sidebarHidden" : ""} ${full ? "full" : ""}`}>
        {pathname !== "/forum" && pathname !== "/forumDetail" && (
          <div
            className="header-chat diamond"
            onClick={() => setSidebarActive(true)}
          >
            <UserBurger />
          </div>
        )}
        {
          pathname == "/" &&
          <div className="header-logo">
            <Logo />
          </div>
        }
        <div className="header-input">
          <input
            className="input"
            placeholder="Game name | Provider | Category Tag"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <SearchResult active={search} />
        {
          pathname == "/" &&
          <div className="header-chat" onClick={() => notificationActive ? setNotificationActive(false) : setChatActive(!chatActive)} >
            <Chat2Icon />
          </div>
        }
        {pathname !== "/" ? (
          <>
            <button
              className="primary-btn-small header-btn user"
              onClick={() => setModalActive("wallet")}
            >
              <span>Wallet</span>
              <WalletIcon />
            </button>
            <UserBar
              handleUserPanel={handleUserPanel}
              handleCurrencySearch={handleCurrencySearch}
            />
            <div className="user-image" onClick={handleUserPanel}>
              <div className="image-wrap">
                <img className="image-wrap-img" src={require("../assets/userBar.png")} />
              </div>
              <div className="burger-wrap">
                <UserBurger />
              </div>
            </div>
            <UserMenu active={userInfoActive} handleUserInfo={handleUserInfo} />
            <CurrencySearch active={currencySearchActive} modalRef={modalRef} />
            <UserPanel
              active={userPanelActive}
              handleUserInfo={handleUserInfo}
            />
          </>
        ) : (
          <>
            <button
              className="primary-btn-small active header-btn reg-btn"
              onClick={() => setModalActive("signIn")}
            >
              Sign in
            </button>
            <button
              className="primary-btn-small header-btn reg-btn"
              onClick={() => setModalActive("signUp")}
            >
              Sign Up
            </button>
          </>
        )}

        {pathname !== "/" && (
          <>
            <BellIcon className="header-icon"
              onClick={() => {
                setChatActive(true);
                setNotificationActive(true);
              }} />
            <MailIcon
              className="header-icon"
              onClick={() => setModalActive("chat")}
            />
            <ChatIcon
              className="header-icon chat-icon"
              onClick={() => notificationActive ? setNotificationActive(false) : setChatActive(!chatActive)}
            />
          </>
        )}
        <div
            className="header-chat diamond search"
          // onClick={() => setSidebarActive(true)}
          >
            <SearchIcon />
          </div>
      </header>
      {(pathname !== "/forum" && pathname !== "/forumDetail") && (
        <div className={`header-mobile-menu ${pathname == "/" ? "align" : ""}`}>
          {pathname !== "/" ? (
            <>
              <img
                className="header-mobile-item"
                src={require("../assets/headerMobile2.png")}
                alt="item"
              />
              <img
                className="header-mobile-item"
                src={require("../assets/headerMobile1.png")}
                alt="item"
                onClick={() => {
                  setChatActive(true);
                  setNotificationActive(true)
                }}
              />
              <img
                className="header-mobile-item"
                src={require("../assets/headerMobile3.png")}
                alt="item"
                onClick={() => setModalActive("chat")}
              />
            </>
          ) :
            <button className="primary-btn mobile-btn">Sign In</button>}
        </div>
      )}
      

      {(pathname == "/sportBet" ||
        pathname == "/sport" ||
        pathname == "/sportSearch") && (
          <div className="header-mobile-menu">
            <Link to="/sport">
              <img
                className="header-mobile-item"
                src={require("../assets/headerSport1.png")}
                alt="item"
              />
            </Link>
            <Link to="/sport">
              <img
                className="header-mobile-item"
                src={require("../assets/headerSport2.png")}
                alt="item"
              />
            </Link>
            <div onClick={() => setSidebarActive(true)}>
              <img
                className="header-mobile-item"
                src={require("../assets/headerSport3.png")}
                alt="item"
              />
            </div>
            <Link to="/sport">
              <img
                className="header-mobile-item"
                src={require("../assets/headerSport4.png")}
                alt="item"
              />
            </Link>
            <Link to="/sport">
              <img
                className="header-mobile-item"
                src={require("../assets/headerSport5.png")}
                alt="item"
              />
            </Link>
            <Link to="/sportBet">
              <img
                className="header-mobile-item"
                src={require("../assets/headerSport6.png")}
                alt="item"
              />
            </Link>
            <Link to="/sportSearch">
              <img
                className="header-mobile-item"
                src={require("../assets/headerSport7.png")}
                alt="item"
              />
            </Link>
          </div>
        )}
        
    </div>
  );
};

export default Header;
