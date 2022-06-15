import React from "react";
import TextWithImage from "../UI/TextWithImage";
import ButtonsNavigation from "../UI/ButtonsNavigation";

import { ReactComponent as AllGamesIcon } from "../../assets/icons/allGames.svg";
import { ReactComponent as PlayImage } from "../../assets/icons/play.svg";

import "../../scss/pages/MainPage/gamesList.scss";
import { Link } from "react-router-dom";

const buttonsList = [
  {
    text: "Lobby",
    active: true,
  },
  {
    text: "Original",
    active: false,
  },

  {
    text: "Slots",
    active: false,
  },
  {
    text: "Live casino",
    active: false,
  },
  {
    text: "Original",
    active: false,
  },
  {
    text: "Slots",
    active: false,
  },
  {
    text: "Live casino",
    active: false,
  },
];

const GamesList = () => {
  return (
    <div className="gamesList">
      <div className="gamesList-header">
        <div className="gamesList-header-btn">
          <AllGamesIcon/>
          <span>All games(22 033)</span>
        </div>
        <div className="gamesList-header-nav">
          <ButtonsNavigation buttonsList={buttonsList.slice(0, 4)} />
        </div>
      </div>
      <div className="gamesList-content-wrap">
        <div className="gamesList-buttons">
          {/* {buttonsList.map(({ text, active }) => {
            return (
              <button
                className={`gamesList-buttons-btn ${active ? "active" : ""}`}
              >
                <TextWithImage text={text} active={active} />
              </button>
            );
          })} */}
        </div>
        <div className="gamesList-content">
          {new Array(18).fill(0).map((el) => {
            return (
              <Link to="/openGame" className="gamesList-content-item">
                <img
                  src={require(`../../assets/gamesList${Math.ceil(
                    Math.random() * 5
                  )}.png`)}
                  alt="game"
                />
                <div className="fade">
                  <PlayImage />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GamesList;
