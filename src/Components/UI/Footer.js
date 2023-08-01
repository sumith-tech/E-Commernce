import React from "react";
import { Container, Navbar } from "react-bootstrap";
import classes from './Footer.module.css'

const EStoreFooter = () => {
  return (
    <div>
      <Navbar style={{backgroundColor:'#161313'}} expand="sm" variant="dark">
        <Container>
          <Navbar.Brand className={classes.footertitle}>The Generics</Navbar.Brand>

          <Navbar.Brand><a href="https://www.youtube.com/">
            <img src='https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg'alt="youtube" width='30px'/>
            </a></Navbar.Brand>
          <Navbar.Brand><a href="https://open.spotify.com//"><img src='https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png' alt="spotify" width='30px'/></a></Navbar.Brand>
          <Navbar.Brand><a href="https://www.facebook.com//"><img src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="facebook" width='30px'/></a></Navbar.Brand>
         
        </Container>
        <span className={classes.copyright}>©2023 The Generics Productions</span>
      </Navbar>
    </div>
  );
};

export default EStoreFooter;