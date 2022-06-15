import React from "react";
import TextWithImage from "./UI/TextWithImage";

import { ReactComponent as HomeImage } from "../assets/icons/home.svg";
import ButtonsNavigation from "./UI/ButtonsNavigation";
import BetItem from "./UI/BetItem";
import UserMessage from "./UI/UserMessage";
import SlotItem from "./UI/SlotItem";
import WinnerItem from "./UI/WinnerItem";

const buttonsList = [
  {
    text: "Recent",
    Image: HomeImage,
    active: true,
  },
  {
    text: "Home",
    Image: HomeImage,
    active: false,
  },
  {
    text: "One more",
    Image: HomeImage,
    active: false,
  },
];

const CollectComponents = () => {
  return (
    <div className="App">
      <button className="primary-btn">Sign up</button>
      <button className="primary-btn-small">Sign up</button>
      <button className="primary-btn-small active">Sign up</button>
      <TextWithImage Image={HomeImage} text="Home" />
      <ButtonsNavigation buttonsList={buttonsList} />
      <BetItem />
      <UserMessage
        image={require("../assets/user.png")}
        message="I have to change already, maybe 85 xD"
        time="15:02"
        nick="Jumanji"
        level="5"
        crown
      />
      <div style={{ display: "flex" }}>
        <SlotItem
          image={require("../assets/slotItem1.png")}
          name="Crash"
          category="Betfury In House"
        />
        <SlotItem
          image={require("../assets/slotItem2.png")}
          name="Crash"
          category="Betfury In House"
        />
        <SlotItem
          image={require("../assets/slotItem3.png")}
          name="Crash"
          category="Betfury In House"
        />
      </div>

      <WinnerItem
        image={require("../assets/winner1.png")}
        nick="Qqiigasdgwb"
        price="$4299.00"
        category="In Ring of Fortune"
      />
    </div>
  );
};

export default CollectComponents;
