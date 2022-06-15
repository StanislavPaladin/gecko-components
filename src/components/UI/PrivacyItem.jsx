import React from "react";

import "../../scss/components/privacyItem.scss";

const PrivacyItem = ({ title, text, isActive }) => {
  return (
    <div className="privacyItem">
      <div className="privacyItem-top">
        <div className="privacyItem-top-title">{title}</div>
        <div
          className={
            isActive
              ? "privacyItem-top-radio inactive"
              : "privacyItem-top-radio"
          }
        >
          <div className="privacyItem-top-radio-item item-left">
            <input
              id={title + "left"}
              type="radio"
              name={title}
              value="off"
              checked
            />
            <label htmlFor={title + "left"}></label>
          </div>
          <div className="privacyItem-top-radio-item item-right">
            <input id={title + "right"} type="radio" name={title} value="on" />
            <label htmlFor={title + "right"}></label>
          </div>
        </div>
      </div>

      {text && <div className="privacyItem-text">{text}</div>}
    </div>
  );
};

export default PrivacyItem;
