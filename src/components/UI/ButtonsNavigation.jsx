import React from "react";
import TextWithImage from "./TextWithImage";

import "../../scss/components/buttonsNavigation.scss";

const EmptyImage = () => {
  return <div className="empty"></div>;
};

const ButtonsNavigation = ({ buttonsList }) => {
  return (
    <div className="buttonsNavigation">
      {buttonsList.map(({ text, Image, active }) => {
        return (
          <button
            className={`buttonsNavigation-btn ${active ? "active" : ""}`}
          >
            <TextWithImage
              text={text}
              Image={Image ? Image : EmptyImage}
              active={active}
            />
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsNavigation;
