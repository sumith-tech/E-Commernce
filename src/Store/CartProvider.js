import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [itemsId, setItemsId] = useState([]);
  const [product, setProduct] = useState([]);
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  useEffect(() => {
    getitemid();
  }, [items]);
  useEffect(() => {
    updatedItemsToCart();
  }, []);
  const updatedItemsToCart = () => {
    axios
      .get(`https://crudcrud.com/api/e8010481fbfc46fe8da5af9d4ad6a0c6/${email}`)
      .then((res) => {
        let finalObj = [];
        for (let i = 0; i < res.data.length; i++) {
          let obj = {
            dltid: res.data[i]._id,
            id: res.data[i].newitem.id,
            title: res.data[i].newitem.title,
            price: res.data[i].newitem.price,
            quantity: res.data[i].newitem.quantity,
            imageUrl: res.data[i].newitem.imgUrl,
          };

          finalObj = [...finalObj, obj];
        }
        setItems(finalObj);
      });
  };
  const getitemid = () =>
    axios
      .get(`https://crudcrud.com/api/e8010481fbfc46fe8da5af9d4ad6a0c6/${email}`)
      .then((res) => {
        let idarr = [];
        for (let i = 0; i < res.data.length; i++) {
          let id = res.data[i]._id;
          idarr.push(id);
        }
        setItemsId(idarr);
      });

  const additemhandler = async (item) => {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].dltid);
    }

    const existingCartItemIndex = items.findIndex(
      (index) => index.id === item.id
    );
    const existingCartItem = items[existingCartItemIndex];
    let updatedItems;

    console.log(item.id);

    if (existingCartItem) {
      const updatedItem = {
        ...item,
        quantity: +existingCartItem.quantity + +item.quantity,
      };
      const newitem = updatedItem;
      const putitem = axios
        .put(
          `https://crudcrud.com/api/e8010481fbfc46fe8da5af9d4ad6a0c6/${email}/${itemsId[existingCartItemIndex]}`,
          { newitem }
        )
        .then((res) => {});
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;

      setItems(updatedItems);
      updatedItemsToCart();
    } else {
      setItems([...items, item]);
      const newitem = item;
      axios
        .post(
          `https://crudcrud.com/api/e8010481fbfc46fe8da5af9d4ad6a0c6/${email}`,
          { newitem }
        )
        .then((res) => {
          console.log(res.data);
        });
      updatedItemsToCart();
    }
  };

  const removeItemHandler = (id) => {
    
    // const existingCartItemIndex = items.findIndex((index) => index.id === id);
    // const existingcartitem = items[existingCartItemIndex];
    // console.log(existingcartitem);
    // let updatedItems;
    // if (existingcartitem.quantity === 1 || existingcartitem.quantity === "1") {
    //   updatedItems = items.filter((item) => item.id !== id);
    //   console.log(updatedItems);

    //   setItems(updatedItems);
    // } else {
    //   const updatedItem = {
    //     ...existingcartitem,
    //     quantity: +existingcartitem.quantity - 1,
    //   };
    //   updatedItems = [...items];
    //   updatedItems[existingCartItemIndex] = updatedItem;
    //   setItems(updatedItems);
    // }
    const updatedid = itemsId.filter((itemid) => itemid !== id);
    setItemsId(updatedid);
    console.log(id);
    axios
      .delete(
        `https://crudcrud.com/api/e8010481fbfc46fe8da5af9d4ad6a0c6/${email}/${id}`
      )
      .then((res) => {
        updatedItemsToCart();
      });
  };

  const showProductHandler = (product) => {
    setProduct(product);
  };

  //for login
  const saveTokenHandler = (token, mailId) => {
    setToken(token);
    localStorage.setItem("token", token);
    let emailRead = mailId.replace("@", "");
    emailRead = emailRead.replace(".", "");
    localStorage.setItem("email", emailRead);
    setEmail(mailId);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const isloggedin = !!token;

  const cartcontext = {
    items: items,
    totalamount: 0,
    addItem: additemhandler,
    removeItem: removeItemHandler,
    product: product,
    showProduct: showProductHandler,
    token: token,
    islogin: isloggedin,
    login: saveTokenHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {console.log(itemsId)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
