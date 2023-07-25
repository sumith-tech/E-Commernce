import React, { useRef } from "react";
import classes from "./ContactForm.module.css";
import { Card } from "react-bootstrap";
const ContactForm = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phonenumber: phoneRef.current.value,
    };
    console.log(contactData);
    props.addContactData(contactData);
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" ref={emailRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">PH Number</label>
          <input type="number" id="number" ref={phoneRef} />
        </div>
        <button>Send Query</button>
      </form>
    </Card>
  );
};

export default ContactForm;
