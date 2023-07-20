import React from "react";
import classes from "./Header.module.css";
import Button from "react-bootstrap/Button";
import { Container, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#">HOME</Navbar.Brand>
        </Container>
        <Container className="justify-content-center">
          <Navbar.Brand href="#">STORE</Navbar.Brand>
        </Container>
        <Container className="justify-content-center">
          <Navbar.Brand href="#">ABOUT</Navbar.Brand>
        </Container>
        <Button variant="secondary">CART</Button>{" "}
      </Navbar>
      <Container fluid className="bg-danger">
        <Container className="justify-content-center">
          <h1>The Generics</h1>
        </Container>
      </Container>
    </header>
  );
};
export default Header;
