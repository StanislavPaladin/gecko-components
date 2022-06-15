import React from "react";

import "../../scss/components/searchItem.scss";

const SearchItem = ({ image, name, rtp, tags }) => {
  return (
    <div className="searchItem">
      <div className="searchItem-image">
        <img src={image} alt="searchItem" />
      </div>
      <div className="searchItem-info">
        <div className="searchItem-info-name">{name}</div>
        <div className="searchItem-info-rtp">
          RTP:
          <span className="searchItem-info-rtp-green">{" " + rtp}</span>
        </div>
        {tags.map((tag, index) => (
          <div key={index} className="searchItem-info-tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchItem;
