import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();
  //   console.log(tshirts);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      //since this t-shirt already exist in the cart so we don't add that item any more.
      toast("You already added this item");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };
  const removeFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="shirt-container">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            handleAddToCart={handleAddToCart}
            tshirt={tshirt}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
