import React from "react";

import { ReactComponent as ArrowTopCircle } from "../../assets/icons/arrowTopCircle.svg";
import { ReactComponent as ArrowDownCircle } from "../../assets/icons/arrowDownCircle.svg";

import "../../scss/components/modalNav.scss";

const ModalNav = ({ activeItem, handleActiveItem }) => {
  const modalNavItems = [
    { text: "Deposit", Icon: ArrowTopCircle },
    { text: "Withdraw", Icon: ArrowDownCircle },
    { text: "BCSwap" },
    { text: "Buy Crypto" },
    { text: "Vault Pro" },
  ];

  return (
    <div className="modalNav">
      {modalNavItems.map(({ text, Icon }, id) => {
        return (
          <div
            className={`modalNav-item ${activeItem == id ? "active" : ""}`}
            onClick={() => handleActiveItem(id)}
          >
            {Icon && <Icon />}
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ModalNav;
