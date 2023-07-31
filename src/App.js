import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import StorePage from "./Components/Products/StorePage";
import About from "./Components/AboutPage/About";
import Home from "./Components/HomePage/Home";
import Contactus from "./Components/ContactUs/Contactus";
import UniqueProduct1 from "./Components/Products/SeperateProduct/UniqueProduct1";
import UniqueProduct2 from "./Components/Products/SeperateProduct/UniqueProduct2";
import UniqueProduct3 from "./Components/Products/SeperateProduct/UniqueProduct3";
import UniqueProduct4 from "./Components/Products/SeperateProduct/UniqueProduct4";
import AuthMain from "./Components/Auth/AuthMain";
import CartContext from "./Store/cart-context";

const App = () => {
  const contxtCtx = useContext(CartContext);
  console.log(contxtCtx.islogin);
  return (
    <Routes>
      {contxtCtx.islogin && <Route path="/store" element={<StorePage />} />}
      {!contxtCtx.islogin && <Route path="/store" element={<AuthMain />} />}
      <Route path="/loginstore" element={<StorePage />} />
      <Route path="/AboutPage/About" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs/Contactus" element={<Contactus />} />
      <Route path="/Auth/AuthMain" element={<AuthMain />} />
      <Route
        path="/Products/SeperateProduct/UniqueProduct1"
        element={<UniqueProduct1 />}
      />
      <Route
        path="/Products/SeperateProduct/UniqueProduct2"
        element={<UniqueProduct2 />}
      />
      <Route
        path="/Products/SeperateProduct/UniqueProduct3"
        element={<UniqueProduct3 />}
      />
      <Route
        path="/Products/SeperateProduct/UniqueProduct4"
        element={<UniqueProduct4 />}
      />
    </Routes>
  );
};

export default App;
