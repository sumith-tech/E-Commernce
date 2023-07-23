import { useContext } from "react";
import classes from "./Header.module.css";
import Button from "react-bootstrap/Button";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
  const cartctx = useContext(CartContext);
  let numberOfCartitems = 0;
  cartctx.items.forEach((item) => {
    numberOfCartitems = numberOfCartitems + Number(item.quantity);
  });

  return (
    <header>
      <Navbar
        fixed="top"
        bg="dark"
        expand="sm"
        variant="dark"
        className="justify-content-center"
      >
        <Navbar.Brand href={'../HomePage/Home'} >HOME</Navbar.Brand>
        <Navbar.Brand style={{ paddingLeft: "35px",paddingRight:"35px",justifyContent:'center'}} href={'/'}>STORE</Navbar.Brand>
        <Navbar.Brand   href={'../AboutPage/About'}>ABOUT</Navbar.Brand>
        <Button onClick={props.onclick} className={Button} variant="secondary" style={{ position: 'absolute',top:'0',right:'0',margin:'20px' }}>
          CART<span style={{ paddingTop: "0px",}}>{numberOfCartitems}</span>
        </Button>{" "}
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
