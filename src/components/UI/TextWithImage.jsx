import React from "react";
import "../../scss/components/textWithImage.scss";

const TextWithImage = ({ text, Image, active, reverse }) => {
  return (
    <div className={`textWithImage ${active ? "active" : ""} ${reverse ? "reverse" : ""}`}>
      <Image className="image" />
      <span className="text">{text}</span>
    </div>
  );
};

export default TextWithImage;
