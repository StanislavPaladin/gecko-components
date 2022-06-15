import React, { useContext } from "react";
import { ChatContext } from "../../context";
import Slider from "react-slick/lib/slider";
import WinnerItem from "../UI/WinnerItem";
import { Link } from "react-router-dom";

import { ReactComponent as WowIcon } from "../../assets/icons/wow.svg";
import { ReactComponent as FireIcon } from "../../assets/icons/fire.svg";
import { ReactComponent as TopIcon } from "../../assets/icons/top.svg";
import { ReactComponent as TimerIcon } from "../../assets/icons/timer.svg";
import { ReactComponent as PlayImage } from "../../assets/icons/play.svg";

import { ReactComponent as NextArrowIcon } from "../../assets/icons/arrowRight.svg";
import { ReactComponent as PrevArrowIcon } from "../../assets/icons/arrowLeft.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../scss/pages/MainPage/winsBlock.scss";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="arrow-bg right" onClick={onClick}>
      <NextArrowIcon className={`arrow`} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="arrow-bg left" onClick={onClick}>
      <PrevArrowIcon className={`arrow`} />
    </div>
  );
};

const RenderItems = () => {
  const { chatActive, setChatActive } = useContext(ChatContext);
  return (
    <>
      {new Array(window.innerWidth > 1800 ? chatActive ? 2 : 4 : 2).fill(0).map((el) => {
        return (
          <WinnerItem
            image={require("../../assets/winner1.png")}
            nick="Qqiigasdgwb"
            price="$4299.00"
            category="In Ring of Fortune"
          />
        );
      })}
    </>
  );
};

const WinsBlock = () => {
  const ref = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 350,
    cssEase: "ease",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        }
      },]
  };

  return (
    <div className="winsBlock-wrap">
      <div className="winsBlock">
        <div className="winsBlock-column">
          <div className="winsBlock-column-title">
            <WowIcon />
            <div className="special-text special-text__1">Much</div>
            <div className="usual-text">WOW Wins</div>
          </div>
          <div className="winsBlock-column-col">
            <RenderItems />
          </div>
        </div>
        <div className="winsBlock-column">
          <div className="winsBlock-column-title">
            <TopIcon />
            <div className="special-text special-text__2">Top</div>
            <div className="usual-text">Winning Games</div>
          </div>
          <div className="winsBlock-column-col">
            <RenderItems />
          </div>
        </div>
        <div className="winsBlock-column">
            <div className="winsBlock-column-title">
              <FireIcon />
              <div className="winsBlock-column-title-wrap">
                <div className="special-text special-text__3">Trending</div>
                <div className="usual-text">Right Now</div>
              </div>
            </div>
          <div className="winsBlock-column-carousel">
            <Slider {...settings} ref={ref}>
              {new Array(4).fill(0).map((el) => {
                return (
                  <Link to="/openGame" className="trendingItem">
                    <img
                      src={require("../../assets/trending1.png")}
                      alt="slot"
                    />
                    <div className="fade">
                      <PlayImage />
                    </div>
                    <div className="name">Solar queen</div>
                    <div className="growth">
                      RTP: <span className="percent">99%</span>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="winsBlock-column">
            <div className="winsBlock-column-title">
              <TimerIcon />
              <div className="winsBlock-column-title-wrap">
                <div className="special-text special-text__4">Recently</div>
                <div className="usual-text">Added</div>
              </div>
          </div>
          <div className="winsBlock-column-carousel">
            <Slider {...settings} ref={ref}>
              {new Array(4).fill(0).map((el) => {
                return (
                  <Link to="/openGame" className="trendingItem">
                    <img
                      src={require("../../assets/trending1.png")}
                      alt="slot"
                    />
                    <div className="fade">
                      <PlayImage />
                    </div>
                    <div className="name">Solar queen</div>
                    <div className="growth">
                      RTP: <span className="percent">99%</span>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="winsBlock mobile">
        <div className="winsBlock-buttons">
          <div className="winsBlock-column-title">
            <WowIcon />
            <div className="special-text__1">Much</div>
            <div className="usual-text">WOW Wins</div>
          </div>
          <div className="winsBlock-column-title">
            <TopIcon />
            <div className="special-text__2">Top</div>
            <div className="usual-text">Winning Games</div>
          </div>
          <div className="winsBlock-column-title">
            <FireIcon />
            <div className="special-text__3">Trending</div>
            <div className="usual-text">Right Now</div>
          </div>
          <div className="winsBlock-column-title">
            <TimerIcon />
            <div className="special-text__4">Recently</div>
            <div className="usual-text">Added</div>
          </div>
        </div>
        <div className="winsBlock-items">
          <WinnerItem
            image={require("../../assets/winner1.png")}
            nick="Qqiigasdgwb"
            price="$4299.00"
            category="In Ring of Fortune"
          />
          <WinnerItem
            image={require("../../assets/winner1.png")}
            nick="Qqiigasdgwb"
            price="$4299.00"
            category="In Ring of Fortune"
          />
          <WinnerItem
            image={require("../../assets/winner1.png")}
            nick="Qqiigasdgwb"
            price="$4299.00"
            category="In Ring of Fortune"
          />
          <WinnerItem
            image={require("../../assets/winner1.png")}
            nick="Qqiigasdgwb"
            price="$4299.00"
            category="In Ring of Fortune"
          />
        </div>
      </div>
    </div>
  );
};

export default WinsBlock;
