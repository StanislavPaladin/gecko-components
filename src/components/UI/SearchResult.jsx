import React from "react";
import SearchItem from "./SearchItem";

import "../../scss/components/searchResult.scss";

const SearchResult = ({active}) => {
  return (
    <div className={`searchResult ${active ? "" : "hide"}`}>
      <div className="searchResult-header">
        <p>Search result</p>
        <p>
          About <span>82</span> results
        </p>
      </div>
      <div className="searchResult-wrap">
        {new Array(12).fill(0).map((el) => {
          return (
            <SearchItem
              image={require("../../assets/searchItemImage.png")}
              name="Golden Dragon"
              rtp={"96.00%"}
              tags={["Slots", "KA Gaming"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
