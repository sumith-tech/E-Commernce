import React, { Fragment } from "react";
import Header from "./Components/Header";
import ContactForm from "./Components/ContactForm";

const Contactus = () => {
  async function addContactDataHandler(data) {
    const response = await fetch(
      "https://contact-279f5-default-rtdb.asia-southeast1.firebasedatabase.app/userdata.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        header: { "Content-Type": "application/json" },
      }
      
    );
    
  }
  return (
    <Fragment>
      <Header />
      <ContactForm addContactData={addContactDataHandler} />
    </Fragment>
  );
};
export default Contactus;
