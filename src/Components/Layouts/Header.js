import React from "react";
import classes from "./Header.module.css";
import Button from "react-bootstrap/Button";
import { Container, Navbar } from "react-bootstrap";
const Header = (props) => {
  return (
    <header>
      <Navbar fixed="top" bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#">HOME</Navbar.Brand>
        </Container>
        <Container className="justify-content-center">
          <Navbar.Brand href="#">STORE</Navbar.Brand>
        </Container>
        <Container className="justify-content-center">
          <Navbar.Brand href="#">ABOUT</Navbar.Brand>
        </Container>
        <Button onClick={props.onclick} variant="secondary">CART</Button>{" "}
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
