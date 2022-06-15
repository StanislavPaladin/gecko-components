import React from "react";

import { ReactComponent as ArrowNext } from "../../assets/icons/arrowRight.svg";
import { ReactComponent as ArrowPrev } from "../../assets/icons/arrowLeft.svg";

import "../../scss/components/pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-wrapper">
        <div className="pagination-wrapper-item">
          <ArrowPrev />
        </div>
        <div className="pagination-wrapper-item">1</div>
        <div className="pagination-wrapper-item active">2</div>
        <div className="pagination-wrapper-item">3</div>
        <div className="pagination-wrapper-item empty">...</div>
        <div className="pagination-wrapper-item">9</div>
        <div className="pagination-wrapper-item">
          <ArrowNext />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
