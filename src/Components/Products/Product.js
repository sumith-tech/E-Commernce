import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Product.module.css";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Product = () => {
  return (
    <>
      <section>
        <div className={classes.containor}>
          <h2>MUSIC</h2>
          <div className={classes.cards}>
            {productsArr.map((music, i) => (
              <div key={i} className={classes.card}>
                <h3>{music.title}</h3>
                <div className={classes.hover02}>
                  <figure>
                    <img className={classes.img} src={music.imageUrl}></img>
                  </figure>
                </div>
                <span>
                  {`$${music.price}`}
                  <Button className={classes.btn}>Add to CART</Button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
