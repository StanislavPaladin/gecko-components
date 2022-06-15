import React from "react";
import SearchResult from "../components/UI/SearchResult";
import UserPanel from "../components/UI/UserPanel";

const Other = () => {
  return (
    <div className="container">
      <SearchResult />
      <UserPanel name="Iva Ivanchikova" />
    </div>
  );
};

export default Other;
