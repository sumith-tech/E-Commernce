import React from "react";

const CartContext=React.createContext({
    items: [],
    product:[],
  addItem: (item) => {},
  removeItem: (id) => {},
  showProduct:(product)=>{},
})
export default CartContext;