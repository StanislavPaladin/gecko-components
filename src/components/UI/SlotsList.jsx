import React from "react";
import TextWithImage from "./TextWithImage";
import SlotItem from "./SlotItem";

import { ReactComponent as AllSlotsIcon } from "../../assets/icons/allSlots.svg";
import { ReactComponent as ArrowLeftImage } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRightImage } from "../../assets/icons/arrowRight.svg";

import "../../scss/pages/MainPage/slotsList.scss";

const RenderSlots = () => {
  return new Array(18).fill(0).map((el, i) => {
    return (
      <SlotItem
        image={require(`../../assets/slotItem${Math.ceil(
          Math.random() * 5
        )}.png`)}
        name="Crash"
        category="Betfury In House"
        key={i}
      />
    );
  });
};

const RenderHeaderButtons = ({filtersButtons}) => {
  if (filtersButtons.length > 0) {
    return (
      <div className="slotsList-header-filtersBtn">
        {filtersButtons.map((btn, i) => {
          return (
            <button className={`filtersBtn ${i == 0 ? "active" : ""}`} key={i}>
              {btn}
            </button>
          );
        })}
      </div>
    );
  } else {
    return (
      <>
        <ArrowLeftImage className="slotsList-header-arrow left" />
        <ArrowRightImage className="slotsList-header-arrow right" />
      </>
    );
  }
};

const RenderMobileButtons = ({filtersButtons}) => {
  if (filtersButtons.length > 0) {
    return (
      <div className="slotsList-content-mobileFiltersBtn">
        {filtersButtons.map((btn, i) => {
          return (
            <div className="list-btn btn" key={i}>
              {btn}
            </div>
          );
        })}
      </div>
    );
  }
};

const SlotsList = ({ btnText, filters }) => {
  const filtersButtons = filters ? ["Popular", "Recent", "A-Z", "Z-A"] : [];

  return (
    <div className="slotsList">
      <div className="slotsList-header">
        <div className="slotsList-header-btn">
          <AllSlotsIcon/>
          <span>{btnText}</span>
        </div>
        <RenderHeaderButtons filtersButtons={filtersButtons} />
      </div>
      <div className="slotsList-content">
        <RenderMobileButtons filtersButtons={filtersButtons}/>
        <div className="slotsList-content-items">
          <RenderSlots />
        </div>
      </div>
    </div>
  );
};

export default SlotsList;
