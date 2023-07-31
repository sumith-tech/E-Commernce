import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Title from "./Title";
import CartContext from "../../../Store/cart-context";
const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const logoutHandler=()=>{
    cartCtx.logout();
  }
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

        {!cartCtx.islogin && (
          <Navbar.Brand
            href={"../Auth/AuthMain"}
            style={{
              paddingLeft: "35px",
              color: "white",
              textDecoration: "none",
            }}
          >
            login
          </Navbar.Brand>
        )}
        {cartCtx.islogin && <Button onClick={logoutHandler}>Logout</Button>}
      </Navbar>
      <Title />
    </header>
  );
};
export default Header;
