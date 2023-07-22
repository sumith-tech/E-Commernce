import React, { useContext,useState } from "react";
import classes from "./ProductItem.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../../Store/cart-context";
const ProductItem = (props) => {
  const cartctx=useContext(CartContext)

  const addtoCartHandler = (event) => {
    event.preventDefault();
    
    cartctx.addItem({...props.item});
  };
  return (
    <div key={props.i} className={classes.card}>
      <h3>{props.title}</h3>
      <div className={classes.hover02}>
        <figure>
          <img className={classes.img} src={props.imageUrl}></img>
        </figure>
      </div>
      <span>
        {`$${props.price}`}
        <Button onClick={addtoCartHandler} className={classes.btn}>
          Add to CART
        </Button>
      </span>
    </div>
  );
};
export default ProductItem;
