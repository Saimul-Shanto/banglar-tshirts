// import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  console.log(cart);
  return (
    <div>
      <h3>order summary: {cart.length}</h3>
      {cart.map((singleShirt) => (
        <p key={singleShirt._id}>
          {singleShirt.name}
          <button onClick={() => removeFromCart(singleShirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
