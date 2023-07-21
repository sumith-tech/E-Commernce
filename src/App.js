import React,{useState} from "react";
import Header from "./Components/Layouts/Header";
import Product from "./Components/Products/Product";
import Cart from "./Components/Cart/Cart";
const App = () => {

  const [showCart, setShowcart] = useState(false);

  const showCartHandler = () => {
    setShowcart(true);
  };
  const closeCartHandler = () => {
    setShowcart(false);
  };
  return <div>
    {showCart && <Cart onClose={closeCartHandler}/>}
    <Header onclick={showCartHandler}/>
    <Product/>
  </div>
 
};

export default App;
