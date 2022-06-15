import React from "react";
import Slider from "react-slick";

import { ReactComponent as NextArrowIcon } from "../../assets/icons/arrowRight.svg";
import { ReactComponent as PrevArrowIcon } from "../../assets/icons/arrowLeft.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../scss/pages/MainPage/carousel.scss";

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

const Carousel = () => {
  const ref = React.useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 350,
    cssEase: "ease",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel">
      <Slider {...settings} ref={ref}>
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
        <div className="slide-wrap">
          <img
            className="carousel-image"
            src={require("../../assets/slide2.png")}
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
        <div className="slide-wrap">
          <img
            className="carousel-image"
            src={require("../../assets/slide2.png")}
            alt="slide1"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
