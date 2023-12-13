import React, { useState } from "react";
import "../../assets/css/style.css";
import banner from "../../assets/images/banner-image-1-1920x300.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FromComponents from "../../components/FromComponent/FromComponent";
import Form from "react-bootstrap/Form";
const PackagesPage = () => {
  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };
  // State to store the selected date
  const [selectedDateGo, setSelectedDateGo] = useState(getTodayDate);
  const [selectedDateFrom, setSelectedDateFrom] = useState(getTodayDate);
  // Event handler for date change
  const handleDateGOChange = (event) => {
    setSelectedDateGo(event.target.value);
  };
  const handleDateFromChange = (event) => {
    setSelectedDateFrom(event.target.value);
  };

  return (
    <>
      <section
        class="banner banner-secondary"
        id="top"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <div class="banner-caption">
                <div class="line-dec"></div>
                <h2>Packages</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <Container style={{ background: "#bbb", marginTop: "20px" }}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Chọn địa điểm du lịch"
            style={{
              width: "50%",
              margin: "auto",
              border: "1px solid gray",
              borderRadius: "6px",
              marginBottom: "6px",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "8px",
              height: "35px",
              border: "1px solid gray",
            }}
          >
            <div style={{ display: "flex" }}>
              <p className="text-center">Chọn ngày đi:</p>
              <input
                type="date"
                value={selectedDateGo}
                onChange={handleDateGOChange}
                style={{ width: "20px", border: "none" }}
              />
              <p> {selectedDateGo && <p>Ngày đi: {selectedDateGo}</p>}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-center">Chọn ngày đến:</p>
              <input
                type="date"
                value={selectedDateFrom}
                onChange={handleDateFromChange}
                style={{ width: "20px", border: "none" }}
              />
              <p> {selectedDateFrom && <p>Ngày đến: {selectedDateFrom}</p>}</p>
            </div>
          </div>
        </Container>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <FromComponents />
              <FromComponents />
              <FromComponents />
              <FromComponents />
              <FromComponents />
              <FromComponents />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
export default PackagesPage;
