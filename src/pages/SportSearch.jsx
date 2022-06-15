import React from "react";
import SportBetItem from "../components/SportSearch/SportBetItem";

import "../scss/pages/SportSearch/index.scss";

const SportSearch = () => {
  return (
    <div className="container sport">
      <div className="sportSearch">
        <div className="sportBet-nav">
          <div className="nav-item img">
            <img
              src={require("../assets/earth.png")}
              alt="eng"
              className="nav-item-img"
            />
            UEFA Champions League
          </div>
          <div className="nav-item img">
            <img
              src={require("../assets/earth.png")}
              alt="eng"
              className="nav-item-img"
            />
            UEFA Europe League
          </div>
          <div className="nav-item img">
            <img
              src={require("../assets/earth.png")}
              alt="eng"
              className="nav-item-img"
            />
            UEFA (2x6 min)
          </div>
          <div className="nav-item img">
            <img
              src={require("../assets/eng.png")}
              alt="eng"
              className="nav-item-img"
            />
            England Premier League
          </div>
        </div>
        <div className="sportSearch-textList">
          <div className="text">
            <div className="category">COUNTER-STRIKE ‧ Y-ZONE</div>
            <div className="title">Y-Games Pro Series, Group stage</div>
          </div>
          <div className="text">
            <div className="category">Soccer ‧ International clubs</div>
            <div className="title">Club Friendly Games</div>
          </div>
          <div className="text">
            <div className="category">COUNTER-STRIKE ‧ Y-ZONE</div>
            <div className="title">Y-Games Pro Series, Group stage</div>
          </div>
        </div>
        <div className="sportSearch-itemsList">
          {new Array(6).fill(0).map((el) => {
            return <SportBetItem />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SportSearch;
