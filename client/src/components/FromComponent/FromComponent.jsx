import React from "react";
import imgProduct from "../../assets/images/product-2-720x480.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const FromComponents = () => {
  return (
    <>
      <Row style={{ marginRight: "18px" }}>
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
              <p
                className="text-center"
                style={{ cursor: "pointer", marginTop: "6px" }}
              >
                See More
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FromComponents;
