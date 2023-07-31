import React, { useState } from "react";
import Header from "../Layouts/Header";
import Product from "./Product";
import CartProvider from "../../Store/CartProvider";
import Cart from "../Cart/Cart";

const StorePage = () => {
  const [showCart, setShowcart] = useState(false);

  const showCartHandler = () => {
    setShowcart(true);
  };
  const closeCartHandler = () => {
    setShowcart(false);
  };
  
  return (
    <CartProvider>
      {showCart && <Cart onClose={closeCartHandler} />}
      <Header onclick={showCartHandler} />
      <Product />
    </CartProvider>
  );
};
export default StorePage;
