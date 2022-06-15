import React, { useContext } from "react";
import {
  SidebarContext,
  ModalsContext,
  SidebarHiddenContext,
} from "../context";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as CasinoImage } from "../assets/icons/sidebar/casino.svg";
import { ReactComponent as SportImage } from "../assets/icons/sidebar/sport.svg";
import { ReactComponent as AffiliateImage } from "../assets/icons/casino/affiliate.svg";
import { ReactComponent as DiamondImage } from "../assets/icons/casino/originals.svg";
import { ReactComponent as FavoriteImage } from "../assets/icons/casino/favorite.svg";
import { ReactComponent as ForumImage } from "../assets/icons/casino/forum.svg";
import { ReactComponent as LiveImage } from "../assets/icons/casino/live.svg";
import { ReactComponent as LotteryImage } from "../assets/icons/casino/lottery.svg";
import { ReactComponent as PromotionsImage } from "../assets/icons/casino/promotions.svg";
import { ReactComponent as ProvablyImage } from "../assets/icons/casino/provably.svg";
import { ReactComponent as RecentImage } from "../assets/icons/casino/recent.svg";
import { ReactComponent as SlotsImage } from "../assets/icons/casino/slots.svg";
import { ReactComponent as VipImage } from "../assets/icons/casino/vip.svg";

import { ReactComponent as ArrowDownImage } from "../assets/icons/arrowDown.svg";
import { ReactComponent as ArrowLeftImage } from "../assets/icons/arrowLeft.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close-btn.svg";

import { ReactComponent as FlagIcon } from "../assets/icons/sidebar/flag.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/sidebar/plus.svg";
import { ReactComponent as PlusBlueIcon } from "../assets/icons/sidebar/plusBlue.svg";
import { ReactComponent as AllSportsIcon } from "../assets/icons/sidebar/allSports.svg";

import { ReactComponent as FootballIcon } from "../assets/icons/sport/football.svg";
import { ReactComponent as BaseballIcon } from "../assets/icons/sport/baseball.svg";
import { ReactComponent as BasketballIcon } from "../assets/icons/sport/basketball.svg";
import { ReactComponent as CricketIcon } from "../assets/icons/sport/cricket.svg";
import { ReactComponent as HockeyIcon } from "../assets/icons/sport/hockey.svg";
import { ReactComponent as TennisIcon } from "../assets/icons/sport/tennis.svg";

import { ReactComponent as SelectedIcon } from "../assets/icons/selected.svg";

import { ReactComponent as Logo } from "../assets/icons/logoLight.svg";
import { ReactComponent as LogoSmall } from "../assets/icons/logoSmall.svg";

import "../scss/sidebar.scss";

const RenderCasinoSidebar = ({ setSidebarActive }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [activeLanguage, setActiveLanguage] = React.useState(false);

  const casinoTabs = [
    {
      link: "#",
      text: "GG Originals",
      Image: DiamondImage,
      id: 1,
    },
    {
      link: "/allSlots",
      text: "Slots",
      Image: SlotsImage,
      id: 2,
    },
    {
      link: "/allSlots",
      text: "Live Casino",
      Image: LiveImage,
      id: 3,
    },
    {
      link: "/promotion",
      text: "Promotions",
      Image: PromotionsImage,
      id: 4,
      promotions: true,
    },
    {
      link: "/lottery",
      text: "Lottery",
      Image: LotteryImage,
      id: 5,
    },
    {
      link: "/affiliate",
      text: "Affiliate",
      Image: AffiliateImage,
      id: 6,
    },
    {
      link: "/vipClub",
      text: "VIP Club",
      Image: VipImage,
      id: 7,
    },
    {
      link: "/",
      text: "Forum",
      Image: ForumImage,
      id: 8,
    },
    {
      link: "/standartPolicy",
      text: "Provably fair",
      Image: ProvablyImage,
      id: 9,
    },
    {
      link: "/favoriteGames",
      text: "Favorite games",
      Image: FavoriteImage,
      id: 10,
    },
    {
      link: "/recentPlay",
      text: "Recent play",
      Image: RecentImage,
      id: 11,
    },
  ];
  const { isModalActive, setModalActive } = useContext(ModalsContext);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setSidebarActive(false);
  };

  return (
    <>
      <div className="sidebar-navigation">
        {casinoTabs.slice(0, 4).map((tab) => {
          const { text, Image } = tab;
          return (
            <div className="nav-wrap">
              <Link
                className={`sidebar-navigation-nav ${activeTab == tab.id ? "active" : ""
                  }
                  ${tab.promotions ? "promotions" : ""}`}
                onClick={() => !tab.bcGame && handleTabClick(tab.id)}
                to={tab.link}
              >
                <div className="nav-item">
                  <p>{text}</p>
                  <Image />
                </div>
                {/* {tab.bcGame && <ArrowDownImage className="arrow-down" />} */}
                {tab.promotions && (
                  <div className="sidebar-navigation-items-promotions">
                    <img
                      className="item"
                      src={require("../assets/sidebarItem1Hidden.png")}
                      alt="item"
                    />
                    <img
                      className="item"
                      src={require("../assets/sidebarItem3Hidden.png")}
                      alt="item"
                      onClick={() => setModalActive("promotions")}
                    />
                    <img
                      className="item"
                      src={require("../assets/sidebarItem5Hidden.png")}
                      alt="item"
                    />
                    <img
                      className="item"
                      src={require("../assets/sidebarItem2Hidden.png")}
                      alt="item"
                    />
                    <img
                      className="item"
                      src={require("../assets/sidebarItem4Hidden.png")}
                      alt="item"
                    />
                  </div>
                )}
              </Link>
              {tab.bcGame && (
                <div className={`bc-games-list`}>
                  <Link
                    to="/openGame"
                    className="bc-games-list-item"
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <DiamondImage />
                    Game 1
                  </Link>
                  <Link
                    to="/openGame"
                    className="bc-games-list-item"
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <DiamondImage />
                    Game 2
                  </Link>
                  <Link
                    to="/openGame"
                    className="bc-games-list-item"
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <DiamondImage />
                    Game 3
                  </Link>
                  <Link
                    to="/openGame"
                    className="bc-games-list-item"
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <DiamondImage />
                    Game 4
                  </Link>
                </div>
              )}
            </div>
          );
        })}
        {/* <div className="sidebar-navigation-items">
          <img
            className="item"
            src={require("../assets/sidebarItem1.png")}
            alt="item"
          />
          <img
            className="item"
            src={require("../assets/sidebarItem3.png")}
            alt="item"
            onClick={() => setModalActive("promotions")}
          />
          <img
            className="item"
            src={require("../assets/sidebarItem5.png")}
            alt="item"
          />
          <img
            className="item"
            src={require("../assets/sidebarItem2.png")}
            alt="item"
          />
          <img
            className="item"
            src={require("../assets/sidebarItem4.png")}
            alt="item"
          />
        </div> */}
        <hr />
        {casinoTabs.slice(4, 9).map((tab) => {
          const { text, Image } = tab;
          return (
            <Link
              className={`sidebar-navigation-nav ${activeTab == tab.id ? "active" : ""
                }`}
              onClick={() => handleTabClick(tab.id)}
              to={tab.link}
            >
              <div className="nav-item">
                <p>{text}</p>
                <Image />
              </div>
            </Link>
          );
        })}
        <hr id="second" />
        {casinoTabs.slice(9, 11).map((tab) => {
          const { text, Image } = tab;
          return (
            <Link
              className={`sidebar-navigation-nav ${activeTab == tab.id ? "active" : ""
                }`}
              onClick={() => handleTabClick(tab.id)}
              to={tab.link}
            >
              <div className="nav-item">
                <p>{text}</p>
                <Image />
              </div>
            </Link>
          );
        })}
      </div>
      <div className={`sidebar-select ${activeLanguage ? "active" : ""}`}>
        <div
          className={`sidebar-select-options ${activeLanguage ? "active" : ""}`}
        >
          <div
            className="option"
            onClick={() => setActiveLanguage(!activeLanguage)}
          >
            <div className="option-flag">
              <img src={require("../assets/icons/gbFlag.png")} alt="flag" />
            </div>
            <div className="option-language">English</div>
            <SelectedIcon className="option-arrow" />
          </div>
          <div
            className="option"
            onClick={() => setActiveLanguage(!activeLanguage)}
          >
            <div className="option-flag">
              <img src={require("../assets/icons/franceFlag.png")} alt="flag" />
            </div>
            <div className="option-language">Français</div>
          </div>
          <div
            className="option"
            onClick={() => setActiveLanguage(!activeLanguage)}
          >
            <div className="option-flag">
              <img src={require("../assets/icons/gerFlag.png")} alt="flag" />
            </div>
            <div className="option-language">Germany</div>
          </div>
        </div>
        <div
          className="option active"
          onClick={() => setActiveLanguage(!activeLanguage)}
        >
          <div className="option-flag">
            <img src={require("../assets/icons/gbFlag.png")} alt="flag" />
          </div>
          <div className="option-language">English</div>
          <ArrowDownImage
            className={`option-arrow ${activeLanguage ? "top" : ""}`}
          />
        </div>
      </div>
      <div className="sidebar-info">
        <ul>
          <li>Help Centre</li>
          <li>Live chat</li>
          <li>Terms & Conditions</li>
          <li>About</li>
          <li>News</li>
        </ul>
      </div>
    </>
  );
};

const RenderSportSidebar = ({ setSidebarActive }) => {
  const categoriesList = [
    { title: "Soccer", image: FootballIcon, active: true },
    { title: "Baseball", image: BaseballIcon },
    { title: "Basketball", image: BasketballIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Baseball", image: BaseballIcon },
    { title: "Basketball", image: BasketballIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Basketball", image: BasketballIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Baseball", image: BaseballIcon },
    { title: "Basketball", image: BasketballIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Baseball", image: BaseballIcon },
    { title: "Basketball", image: BasketballIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Baseball", image: BaseballIcon },
    { title: "Basketball", image: BasketballIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Basketball", image: BasketballIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Tennis", image: TennisIcon },
    { title: "Baseball", image: BaseballIcon },
    { title: "Basketball", image: BasketballIcon },
    { title: "Cricket", image: CricketIcon },
    { title: "Ice Hockey", image: HockeyIcon },
    { title: "Tennis", image: TennisIcon },
  ];
  const [opened, setOpened] = React.useState([]);

  return (
    <div className="sportSidebarWrap">
      <div className="sidebar-category mob">
        <FlagIcon />
        <p className="quickLinks">Favourites</p>
        <PlusIcon className="plusIcon" />
      </div>
      <div className="sidebar-category link">
        <AllSportsIcon />
        <p className="allSports">All Sports</p>
      </div>
      {categoriesList.map(({ title, image: Image, active }, id) => {
        return (
          <>
            <div
              className="sidebar-category"
              onClick={() => setSidebarActive(false)}
            >
              <Image />
              <p className={`category ${active ? "active" : ""}`}>{title}</p>
              {opened.findIndex((a) => a === id) < 0 ? (
                <PlusIcon
                  className="plusIcon"
                  onClick={() =>
                    setOpened((state) => {
                      return [...state, id];
                    })
                  }
                />
              ) : (
                <PlusBlueIcon
                  className="plusIcon"
                  onClick={() =>
                    setOpened((state) => {
                      return [...state.filter((a) => a != id)];
                    })
                  }
                />
              )}
            </div>
            <div
              className={`sidebar-category-more ${opened.findIndex((a) => a === id) > -1 ? "" : "hidden"
                }`}
            >
              <div className="sidebar-category-more-item">
                <img
                  src={require("../assets/earth.png")}
                  alt="eng"
                  className="nav-item-img"
                />
                International Clubs
              </div>
              <div className="sidebar-category-more-item">
                <img
                  src={require("../assets/earth.png")}
                  alt="eng"
                  className="nav-item-img"
                />
                International
              </div>
              <div className="sidebar-category-more-item">
                <img
                  src={require("../assets/earth.png")}
                  alt="eng"
                  className="nav-item-img"
                />
                International Youth
              </div>
              <div className="sidebar-category-more-item">
                <img
                  src={require("../assets/eng.png")}
                  alt="eng"
                  className="nav-item-img"
                />
                England
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

const Sidebar = ({ handleLoading }) => {
  const { sidebarActive, setSidebarActive } = useContext(SidebarContext);
  const { sidebarHidden, setSidebarHidden } = useContext(SidebarHiddenContext);
  const [sidebarActiveSection, setSidebarActiveSection] = React.useState(0);
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname == "/") {
      handleSidebarActiveSection(0);
    }
  }, [pathname]);

  const handleSidebarActiveSection = (id) => {
    setSidebarActiveSection(id);
    handleLoading();
  };

  const handleArrowClick = () => {
    if (
      pathname !== "/sport" &&
      pathname !== "/sportBet" &&
      window.innerWidth > 1024
    ) {
      setSidebarHidden(!sidebarHidden);
    } else {
      setSidebarActive();
    }
  };

  return (
    <>
      <div
        className={`sidebar-arrow ${sidebarHidden ? "hidden" : ""} ${sidebarActive ? "active" : ""
          }`}
        onClick={() => handleArrowClick()}
      >
        <ArrowLeftImage />
      </div>
      <div className={`sidebar-wrap ${sidebarHidden ? "hidden" : ""}`}>
        <div
          className={`sidebar ${sidebarHidden ? "hidden" : ""} ${sidebarActive ? "active" : ""
            } ${sidebarActiveSection === 1 ? "sport" : ""}`}
        >
          <div className="sidebar-logo">
            <Logo />
          </div>
          <div className="sidebar-logoSmall">
            <LogoSmall />
          </div>
          <div className="sidebar-sections">
            <Link
              className={`sidebar-sections-btn ${sidebarActiveSection === 0 ? "active" : ""
                }`}
              onClick={() => handleSidebarActiveSection(0)}
              to="/"
            >
              <div className="section">
                <p>Casino</p>
                <CasinoImage />
              </div>
            </Link>
            <Link
              className={`sidebar-sections-btn ${sidebarActiveSection === 1 ? "active" : ""
                }`}
              onClick={() => handleSidebarActiveSection(1)}
              to="/sport"
            >
              <div className="section">
                <p>Sport</p>
                <SportImage />
              </div>
            </Link>
            <div
              className="sport-close-btn"
              onClick={() => setSidebarActive(false)}
            >
              <CloseIcon />
            </div>
          </div>
          {sidebarActiveSection ? (
            <RenderSportSidebar setSidebarActive={setSidebarActive} />
          ) : (
            <RenderCasinoSidebar setSidebarActive={setSidebarActive} />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
