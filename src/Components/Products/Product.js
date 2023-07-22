import React, { useContext } from "react";
import classes from "./Product.module.css";
import ProductItem from "./ProductItem";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity:1,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity:1,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity:1,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity:1,
  },
];

const Product = (props) => {
  const ProductList = productsArr.map((music, i) => (
    <ProductItem
      key={i}
      id={music.id}
      title={music.title}
      price={music.price}
      imageUrl={music.imageUrl}
      item={music}
    />
  ));

  return (
    <>
      <section>
        <div className={classes.containor}>
          <h2>MUSIC</h2>
          <div className={classes.cards}>{ProductList}</div>
        </div>
      </section>
    </>
  );
};

export default Product;
