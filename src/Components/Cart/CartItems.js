import React,{useContext} from "react";
import { Button, Row, Col } from "react-bootstrap";
import classes from "./CartItem.module.css";
import CartContext from "../../Store/cart-context";
const CartItems = (props) => {
  console.log(props.title);
  const cartctx=useContext(CartContext);
  const onremoveHandler = (event) => {
    cartctx.removeItem(props.id)
  };

  return (
    <tr key={props.i}>
      <Row>
        <Col>
          <div>
            <img className={classes.image} src={props.imageUrl}></img>
            <span style={{padding:'0px'}}>{props.title}</span>
          </div>
        </Col>
        <Col>
          <span className={classes.price}>{props.price}</span>
        </Col>
        <Col>
          <span className={classes.quantity}>{props.quantity}</span>
        </Col>
        <Col>
          <Button onClick={onremoveHandler} variant="danger">
            REMOVE
          </Button>
        </Col>
      </Row>
    </tr>
  );
};
export default CartItems;
