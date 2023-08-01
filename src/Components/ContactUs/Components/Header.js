import React from "react";
import { Navbar,Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './Header.module.css'
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
        <Navbar.Brand href={"/"}>HOME</Navbar.Brand>
        <Navbar.Brand
          style={{
            paddingLeft: "35px",
            paddingRight: "35px",
            justifyContent: "center",
          }}
          href={"/store"}
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
      </Navbar>
      <Container fluid className="bg-danger">
        <Container className={classes.title}>
          <h1>The Generics</h1>
        </Container>
      </Container>
    </header>
  );
};
export default Header;
