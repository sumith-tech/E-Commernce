import React, { useState } from "react";
import Header from "./Components/Layouts/Header";
import Product from "./Components/Products/Product";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
const App = () => {
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

export default App;
