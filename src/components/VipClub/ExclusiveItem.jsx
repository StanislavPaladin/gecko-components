import React from "react";

import "../../scss/pages/VipClub/exclusiveItem.scss";

const ExclusiveItem = () => {
  return (
    <div className="exclusiveItem">
      <img src={require("../../assets/icons/diamond1.png")} alt="diamond"/>
      <h3 className="exclusiveItem-title">Unique VIP Transfer Program</h3>
      <p className="exclusiveItem-text">
        DEFI.GAME respects and welcomes every distinguished VIP and will give
        you an exclusive VIP status that you can continue your honor here.
        Contact us for details.
      </p>
    </div>
  );
};

export default ExclusiveItem;
