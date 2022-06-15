import React from "react";
import ButtonsNavigation from "../components/UI/ButtonsNavigation";
import SlotsList from "../components/UI/SlotsList";
import TextWithImage from "../components/UI/TextWithImage";

import { ReactComponent as SlotsImage } from "../assets/icons/casino/favorite.svg";
import { ReactComponent as FilterImage } from "../assets/icons/filter.svg";
import { ReactComponent as ArrowDownImage } from "../assets/icons/arrowDown.svg";

import "../scss/pages/AllSlots/index.scss";

const buttonsList = [
  {
    text: "Recent play",
    Image: SlotsImage,
    active: true,
  },
  {
    text: "Favorite",
    Image: SlotsImage,
    active: false,
  },

  {
    text: "Popular",
    Image: SlotsImage,
    active: false,
  },
  {
    text: "In House",
    Image: SlotsImage,
    active: false,
  },
  {
    text: "Slots",
    Image: SlotsImage,
    active: false,
  },
  {
    text: "Shows",
    Image: SlotsImage,
    active: false,
  },
];

const AllSlots = () => {
  return (
    <div className="container">
      <div className="allSlots">
        <div className="allSlots-nav">
        {
            buttonsList.map((btn,i) => {
              const {Image, text} = btn;
              return (
                <div className={`allSlots-nav-item ${i == 0 ? "active" : ""}`}>
                  <p>{text}</p>
                  <Image/>
                </div>
              )
            })
          }
        </div>
        <div className="allSlots-filters">
          <div className="allSlots-filters-input">
            <input
              className="input"
              placeholder="Game name | Provider | Category Tag"
            />
          </div>
          <div className="allSlots-filters-filter filter">
            <TextWithImage text={"Filter"} Image={FilterImage} />
          </div>
          <div className="allSlots-filters-filter">
            <img src={require("../assets/icons/filterRed.png")} />
            <span className="filter-text">Providers</span>
            <span className="filter-text count">1</span>
            <ArrowDownImage className="arrow-icon" />
          </div>
        </div>
        <SlotsList btnText="Best from slots (20)" filters/>
      </div>
    </div>
  );
};

export default AllSlots;
