import React from "react";

import "../../scss/components/paymentItem.scss";

const PaymentItem = ({ title, images }) => {
  return (
    <div className="paymentItem">
      <div className="paymentItem-title">{title}</div>
      <ul className="paymentItem-img">
        {images.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default PaymentItem;
