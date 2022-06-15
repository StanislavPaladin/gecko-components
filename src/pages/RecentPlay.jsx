import React from "react";
import RouteUIComponent from "../components/UI/RouteUIComponent.jsx";
import SlotItem from "../components/UI/SlotItem";

import "../scss/components/recentPlay.scss";

const RecentPlay = ({route}) => {
  return (
    <div className="container">
      <div className="recentPlay">
      <RouteUIComponent routeItems={`Slots/${route}`} />
        <div className="recentPlay-list">
          {new Array(18).fill(0).map((el) => {
            return (
              <SlotItem
                image={require(`../assets/slotItem${Math.ceil(
                  Math.random() * 4
                )}.png`)}
                name="Crash"
                category="Betfury In House"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentPlay;
