import React from "react";

import "../../scss/components/inputComponentPassword.scss";

const InputComponentPassword = ({
  label,
  additionalLabel,
  labelColor,
  placeholder,
  value,
  isReadonly,
  icon,
}) => {
  return (
    <div className="inputComponentPassword">
      <div className="inputComponentPassword-wrapper">
        <input
          name="input"
          type="password"
          className="inputComponentPassword-wrapper-input"
          value={value}
          placeholder={placeholder}
          readOnly={isReadonly}
        />
        <div className="inputComponentPassword-wrapper-icon">{icon}</div>
      </div>
    </div>
  );
};

export default InputComponentPassword;
