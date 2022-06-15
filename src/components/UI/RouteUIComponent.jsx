import React from "react";

import { ReactComponent as ArrowRightImage } from "../../assets/icons/arrowRight.svg";

import "../../scss/components/route.scss";

const Route = ({ routeItems }) => {
  const routeItemsMapped = routeItems.split("/").join("-/-").split("-");
  return (
    <div className="route-wrap">
      <div className="route">
        {routeItemsMapped.map((item, i) => {
          if (item === "/") {
            return <ArrowRightImage />;
          } else {
            return (
              <div
                className={`route-parent ${
                  i == routeItemsMapped.length - 1 ? "active" : ""
                }`}
              >
                {item}
              </div>
            );
          }
        })}
      </div>
      <div className="signature">
        By
        <span>Spinomenal</span>
      </div>
    </div>
  );
};

export default Route;
