import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="tshirt-card">
      <img src={picture} alt="" />
      <p className="title">{name}</p>
      <p className="price-txt">Price: ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)} className="btn-buy">
        Buy Now
      </button>
    </div>
  );
};

export default TShirt;
