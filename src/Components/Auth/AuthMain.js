import React from "react";
import CartProvider from "../../Store/CartProvider";
import AuthForm from "./AuthForm";
const AuthMain = () => {
  return (
    <CartProvider>
      <AuthForm />
    </CartProvider>
  );
};

export default AuthMain;
