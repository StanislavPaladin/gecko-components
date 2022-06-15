import React from "react";
import Banner from "../components/MainPage/Banner";
import BiggestWinners from "../components/MainPage/BiggestWinners";
import Carousel from "../components/MainPage/Carousel";
import GameProviders from "../components/MainPage/GameProviders";
import GamesList from "../components/MainPage/GamesList";
import SlotsList from "../components/UI/SlotsList";
import WinsBlock from "../components/MainPage/WinsBlock";

import "../scss/pages/MainPage/index.scss";

const Main = () => {
  return (
    <div className="wrap">
      <img src={require("../assets/backgrounds/main/bg2.png")} alt="bg" className="bg2" />
      <img src={require("../assets/backgrounds/main/bg3.png")} alt="bg" className="bg3" />
      <div className="container">
        <div className="main">
          <Banner />
          <Carousel />
          <WinsBlock />
          <GamesList />
          <SlotsList btnText="Best from slots (20)" />
          <GameProviders />
          <BiggestWinners />
        </div>
      </div>
    </div>
  );
};

export default Main;
