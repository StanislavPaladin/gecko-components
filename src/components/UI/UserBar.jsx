import React from "react";

import { ReactComponent as Btc } from "../../assets/icons/btcMini.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrowDown.svg";

import "../../scss/components/userBar.scss";

const UserBar = ({handleUserPanel,handleCurrencySearch}) => {
  return (
    <div className="userBar">
      <div className="userBar-account">
        <div className="currency" onClick={() => handleCurrencySearch()}>
          <Btc />
          BTC
          <ArrowDownIcon className="arrow"/>
        </div>
        <div className="value">99999.0000</div>
      </div>
    </div>
  );
};

export default UserBar;
