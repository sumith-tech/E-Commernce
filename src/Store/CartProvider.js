import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const additemhandler = (item) => {
    const existingCartItemIndex = items.findIndex(
      (index) => index.id === item.id
    );
    const existingCartItem = items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...item,
        quantity: +existingCartItem.quantity + +item.quantity,
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
      setItems(updatedItems);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItemHandler = (id) => {
    console.log(id);
    const existingCartItemIndex = items.findIndex((index) => index.id === id);
    const existingcartitem = items[existingCartItemIndex];
    console.log(existingcartitem);
    let updatedItems;
    if (existingcartitem.quantity === 1 || existingcartitem.quantity === "1") {
      updatedItems = items.filter((item) => item.id !== id);
      console.log(updatedItems);
      setItems(updatedItems);
    } else {
      const updatedItem = {
        ...existingcartitem,
        quantity: +existingcartitem.quantity - 1,
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
      setItems(updatedItems);
    }
  };

  const cartcontext = {
    items: items,
    totalamount: 0,
    addItem: additemhandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
