import React from "react";

const CartContext = React.createContext({
  items: [],
  product: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  showProduct: (product) => {},
  token: "",
  islogin: null,
  login: (token) => {},
  logout: () => {},
});
export default CartContext;
