import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Title from "./Title";
const Header = (props) => {
  return (
    <header>
      <Navbar
        fixed="top"
        bg="dark"
        expand="sm"
        variant="dark"
        className="justify-content-center"
      >
        <Navbar.Brand href={"../HomePage/Home"}>HOME</Navbar.Brand>
        <Navbar.Brand
          style={{
            paddingLeft: "35px",
            paddingRight: "35px",
            justifyContent: "center",
          }}
          href={"/"}
        >
          STORE
        </Navbar.Brand>
        <Navbar.Brand href={"../AboutPage/About"}>ABOUT</Navbar.Brand>
        <Navbar.Brand
          style={{ paddingLeft: "35px", justifyContent: "center" }}
          href={"../ContactUs/Contactus"}
        >
          CONTACT US
        </Navbar.Brand>

        <Navbar.Brand
          href={"../Auth/AuthMain"}
          style={{
            paddingLeft: "35px",
            color: "white",
            textDecoration: "none",
          }}
        >
          LOGIN
        </Navbar.Brand>
      </Navbar>
      <Title />
    </header>
  );
};
export default Header;
