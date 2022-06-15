import React from 'react'
import "../../scss/components/cryptoItem.scss";

const CryptoItem = ({ image, price }) => {
  return (
    <div className="cryptoItem">
      <img className="image" src={image} alt="cryptoImg" />
      <span className="price">{price}</span>
    </div>
  )
}

export default CryptoItem