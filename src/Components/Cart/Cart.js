import React from "react";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const CartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const CartItem =  CartElements.map((item, i) => (
        <CartItems
          key={i}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
        />
      ))
    

  console.log(CartItem);
  return (
    <Modal>
      <div className={classes.Cart}>
        <section id="cart" className={classes.title}>
          <h2>Cart</h2>
          <button onClick={props.onClose} className={classes.btn}>
            X
          </button>
          <table>
          <tr className={classes.row}>
            <th className={classes.item}>ITEM</th>
            <th className={classes.price}>PRICE</th>
            <th className={classes.qty}>QUANTITY</th>
          </tr>
          {CartItem}
          </table>
          
        </section>
      </div>
    </Modal>
  );
};
export default Cart;
