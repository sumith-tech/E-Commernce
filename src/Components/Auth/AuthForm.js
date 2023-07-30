import React, { useContext, useRef } from "react";
import classes from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Store/cart-context";
const AuthForm = () => {
  const emailInpRef = useRef();
  const passwordInpRef = useRef();
  const navigate = useNavigate();
  const authctx = useContext(CartContext);

  const item= authctx.items
  console.log(item)
  const submitHandler = (event) => {
    event.preventDefault();

    const emailInp = emailInpRef.current.value;
    const passwordInp = passwordInpRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUc9bY7No9sh6JOBba_0ch-DUNaEmIcvA",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInp,
          password: passwordInp,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errMessage = data.error.message;
            }
            alert(errMessage);
          });
        }
      })
      .then((data) => {
        navigate("/");
        authctx.login(data.idToken);
        console.log(data.idToken);
      })
      .catch((err) => {});
  };
  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInpRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInpRef} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
