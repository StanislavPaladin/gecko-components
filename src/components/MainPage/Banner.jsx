import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as NextArrowIcon } from "../../assets/icons/arrowRight.svg";
import { ReactComponent as PrevArrowIcon } from "../../assets/icons/arrowLeft.svg";

import "../../scss/pages/MainPage/banner.scss";

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
    <div className="banner-wrap">
      <div className="banner">
        <div className="banner-content">
          <h1>
            €2,000 in deposit bonuses & 200 free spins await you
          </h1>
          <h2>
            Welcome to Gerko Games, the casino journey of a lifetime. Join now, start exploring and win big.
          </h2>
          <button className="banner-content-btn">Create account</button>
        </div>
      </div>
      <img
        className="banner-wrap-hero"
        src={require("../../assets/banners/mainHero.png")}
      />
      <img
        className="banner-wrap-bg"
        src={require("../../assets/banners/main.png")}
      />
    </div>
  );
};

const Banner = () => {
  const sliderRef = React.useRef(null);
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
    <>
      <BannerPreview />
      <div className="mobile">
        <Slider {...settings} ref={sliderRef}>
          <BannerPreview />
          <div className="slide-wrap">
            <img
              className="carousel-image"
              src={require("../../assets/slide3.png")}
              alt="slide1"
            />
          </div>
          <div className="slide-wrap">
            <img
              className="carousel-image"
              src={require("../../assets/slide1.png")}
              alt="slide1"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
