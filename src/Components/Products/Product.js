import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

const Product = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <Card className="shadow-lg">
              <Card.Header className="p-3">
                <h4>Black and white Colors</h4>
              </Card.Header>
              <Card.Body>
                <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"></img>
              </Card.Body>
              <Card.Footer>
                <span>$100</span>
                <Button >Add Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-lg">
              <Card.Header className="p-3">
                <h4>Colors</h4>
              </Card.Header>
              <Card.Body>
                <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"></img>
              </Card.Body>
              <Card.Footer>
                <span>$100</span>
                <Button >Add Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col>
            <Card className="shadow-lg">
              <Card.Header className="p-3">
                <h4>Yellow and Black Colors</h4>
              </Card.Header>
              <Card.Body>
                <img src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"></img>
              </Card.Body>
              <Card.Footer>
                <span>$100</span>
                <Button >Add Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-lg">
              <Card.Header className="p-3">
                <h4>Blue Color</h4>
              </Card.Header>
              <Card.Body>
                <img src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"></img>
              </Card.Body>
              <Card.Footer>
                <span>$100</span>
                <Button >Add Cart</Button>
              </Card.Footer>>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
