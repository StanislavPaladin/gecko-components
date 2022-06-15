import React from "react";

import "../../scss/components/selectComponent.scss";

const SelectComponent = ({
  label,
  additionalLabel,
  labelColor,
  value,
  additionalText,
  additionalLabelColor,
  image,
  currency,
  isMax,
}) => {
  return (
    <div className="selectComponent">
      <div className="selectComponent-labels">
        <label
          style={{ color: labelColor }}
          htmlFor="input"
          className="selectComponent-labels-item"
        >
          {label}
        </label>
        <label
          style={{ color: additionalLabelColor ? additionalLabelColor : labelColor }}
          htmlFor="input"
          className="selectComponent-labels-item"
        >
          {additionalLabel}
        </label>
      </div>
      <div className="selectComponent-wrapper">
        <div className="selectComponent-wrapper-value">
          <div className="selectComponent-wrapper-value-text">
            <div className="selectComponent-wrapper-value-text-main">
              {value}
            </div>
            {additionalText && (
              <div className="selectComponent-wrapper-value-text-additional">
                {additionalText}
              </div>
            )}
          </div>
          {isMax && (
            <div className="selectComponent-wrapper-value-ismax">
              <span>Max</span>
            </div>
          )}
        </div>
        <div className="selectComponent-wrapper-select">
          <div className="selectComponent-wrapper-select-image">{image}</div>
          <select
            className="selectComponent-wrapper-select-item"
            name="select"
            id="select"
          >
            <option value={currency}>{currency}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
