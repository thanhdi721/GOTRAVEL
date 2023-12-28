import React from "react";
import imgProduct from "../../assets/images/product-2-720x480.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "./style.css";

const FromComponents = () => {
  return (
    <>
      <Row className="marginAuto" style={{ marginRight: "18px" }}>
        <Col sm>
          <Card style={{ width: "18rem", marginBottom: "16px" }}>
            <Card.Img variant="top" src={imgProduct} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text style={{ color: "red" }}>$300-$400</Card.Text>
              <span
                className="text-center"
                style={{ cursor: "pointer", marginTop: "6px" }}
              >
                See More
              </span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FromComponents;
