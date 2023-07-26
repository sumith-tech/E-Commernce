import React, { useContext } from "react";
import classes from "./ProductItem.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../../Store/cart-context";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const cartctx = useContext(CartContext);

  const addtoCartHandler = (event) => {
    event.preventDefault();

    cartctx.addItem({ ...props.item });
  };

  const checkHandler = () => {
    cartctx.showProduct({ ...props.item });
  };
  return (
    <div key={props.i} className={classes.card}>
      <h3>{props.title}</h3>
      <div className={classes.hover02}>
        <figure>
          <Link
            to={`/Products/SeperateProduct/UniqueProduct${props.id}`}
            onClick={checkHandler}
          >
            <img className={classes.img} src={props.imageUrl}></img>
          </Link>
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
