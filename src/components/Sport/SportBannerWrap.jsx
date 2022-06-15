import React from "react";
import Slider from "react-slick";
import SportBanner from "../../components/Sport/SportBanner";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as NextArrowIcon } from "../../assets/icons/arrowRight.svg";
import { ReactComponent as PrevArrowIcon } from "../../assets/icons/arrowLeft.svg";

import "../../scss/pages/Sport/sportBannerWrap.scss";

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

const BannerPreview = () => {
  return (
    <div className="sport-banners">
      <SportBanner boosted gradient teamOne={"Juventus"} teamTwo={"Inter"} />
      <SportBanner
        gradient={true}
        country={"Spain"}
        league={"LaLiga"}
        teamOne={{
          name: "Real Betis Sevil",
          goals: 0,
          img: require("../../assets/real.png"),
        }}
        teamTwo={{
          name: "Valencia CF",
          goals: 1,
          img: require("../../assets/valencia.png"),
        }}
        currentTime={"78’ 2nd half"}
      />
    </div>
  );
};

const SportBannerWrap = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="sportBannerWrap">
      <BannerPreview />
      <div className="mobile">
        <Slider {...settings}>
          <div className="slide-wrap">
            <SportBanner
              boosted
              gradient
              teamOne={"Juventus"}
              teamTwo={"Inter"}
              mobile
            />
          </div>
          <div className="slide-wrap">
            <SportBanner
              gradient={true}
              country={"Spain"}
              league={"LaLiga"}
              teamOne={{
                name: "Real Betis Sevil",
                goals: 0,
                img: require("../../assets/real.png"),
              }}
              teamTwo={{
                name: "Valencia CF",
                goals: 1,
                img: require("../../assets/valencia.png"),
              }}
              currentTime={"78’ 2nd half"}
              mobile
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SportBannerWrap;
