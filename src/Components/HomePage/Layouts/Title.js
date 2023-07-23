import React from "react";
import { Container } from "react-bootstrap";
import classes from './Title.module.css'
const Title = () => {
  return (
    <Container fluid className="bg-danger">
      <Container className={classes.title}>
        <h1>The Generics</h1>
        <button className={classes.album}>Get our Latest Album</button>
        <button className={classes.play}>►</button>
      </Container>
    </Container>
  );
};
export default Title;
