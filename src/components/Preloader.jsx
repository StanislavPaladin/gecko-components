import React from "react";
import { ReactComponent as PreloadIcon1 } from "../assets/preloader/comet.svg";
import { ReactComponent as PreloadIcon2 } from "../assets/preloader/text.svg";

import "../scss/components/preloader.scss";

const Preloader = ({active}) => {
  return (
    <div className={`preloader ${active ? "" : "hide"}`}>
      <div className="preloader__container">
        <div className="preloader__star"></div>
        <div className="preloader__speed"></div>
        <div className="preloader__elem">
          <PreloadIcon1 className="preload__anim" />
          <PreloadIcon2 />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
