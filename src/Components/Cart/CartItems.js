import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import classes from "./CartItem.module.css";
const CartItems = (props) => {
  console.log(props.title);
  return (
    <tr>
      <Row>
        <Col>
          <div>
            <img className={classes.image} src={props.imageUrl}></img>
            <h4>{props.title}</h4>
          </div>
        </Col>
        <Col>
          <span className={classes.price}>{props.price}</span>
        </Col>
        <Col>
          <span className={classes.quantity}>{props.quantity}</span>
        </Col>
        <Col>
          <Button variant="danger">REMOVE</Button>
        </Col>
      </Row>
    </tr>
  );
};
export default CartItems;
