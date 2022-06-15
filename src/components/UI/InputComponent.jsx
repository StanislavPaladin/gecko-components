import React from "react";

import "../../scss/components/inputComponent.scss";

const InputComponent = ({
  label,
  additionalLabel,
  labelColor,
  placeholder,
  value,
  isReadonly,
  icon,
  isMinMaxComponent
}) => {
  return (
    <div className="inputComponent">
      <div className="inputComponent-labels">
        <label
          style={{ color: labelColor }}
          htmlFor="input"
          className="inputComponent-labels-item"
        >
          {label}
        </label>
        <label
          style={{ color: labelColor }}
          htmlFor="input"
          className="inputComponent-labels-item"
        >
          {additionalLabel}
        </label>
      </div>
      <div className="inputComponent-wrapper">
        <input
          name="input"
          type="text"
          className="inputComponent-wrapper-input"
          value={value}
          placeholder={placeholder}
          readOnly={isReadonly}
        />
        <div className="inputComponent-wrapper-icon">{icon}</div>
      </div>
    </div>
  );
};

export default InputComponent;
