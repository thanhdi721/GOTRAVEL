import React from "react";
import "../../assets/css/style.css";
import banner from "../../assets/images/banner-image-1-1920x300.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FromComponents from "../../components/FromComponent/FromComponent";

import "./style.css";
const PackagesPage = () => {
  // Get today's date in YYYY-MM-DD format
  // const getTodayDate = () => {
  //   const today = new Date();
  //   return today.toISOString().split("T")[0];
  // };
  // State to store the selected date
  // const [selectedDateGo, setSelectedDateGo] = useState(getTodayDate);
  // const [selectedDateFrom, setSelectedDateFrom] = useState(getTodayDate);
  // // Event handler for date change
  // const handleDateGOChange = (event) => {
  //   setSelectedDateGo(event.target.value);
  // };
  // const handleDateFromChange = (event) => {
  //   setSelectedDateFrom(event.target.value);
  // };

  return (
    <>
      <section
        className="banner banner-secondary"
        id="top"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="banner-caption">
                <div className="line-dec"></div>
                <h2>Packages</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* <Container
          style={{
            background: "#bbb",
            marginTop: "20px",
            paddingBottom: "12px",
          }}
        >
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

              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", border: "1px solid gray" }}>
              <span className="text-center">Chọn ngày đi:</span>
              <input
                type="date"
                value={selectedDateGo}
                onChange={handleDateGOChange}
                style={{ width: "20px", border: "none", background: "#bbb" }}
              />
              <span>
                {" "}
                {selectedDateGo && <span>Ngày đi: {selectedDateGo}</span>}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid gray",
              }}
            >
              <span className="text-center">Chọn ngày đến:</span>
              <input
                type="date"
                value={selectedDateFrom}
                onChange={handleDateFromChange}
                style={{ width: "20px", border: "none", background: "#bbb" }}
              />
              <span>
                {" "}
                {selectedDateFrom && <span>Ngày đến: {selectedDateFrom}</span>}
              </span>
            </div>
          </div>
        </Container> */}

        <div className="bodyFrom">
          <form id="bookingForm">
            <input type="text" class="form-control" placeholder="Tìm Kiếm" />
            <div style={{ display: "flex", gap: "16px" }}>
              <input
                className="border1"
                type="date"
                id="arrivalDate"
                placeholder="Thời Gian Đến"
              />
              <input
                className="border1"
                type="date"
                id="departureDate"
                placeholder="Thời Gian Đi"
              />
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <select id="roomNumber" className="border1">
                <option value="">Chọn Số Phòng</option>
                <option value="1">1 Phòng</option>
                <option value="2">2 Phòng</option>
                <option value="3">3 Phòng</option>
              </select>
              <select id="peopleNumber" className="border1">
                <option value="">Chọn Số Người</option>
                <option value="1">1 Người</option>
                <option value="2">2 Người</option>
                <option value="3">3 Người</option>
              </select>
            </div>
            <button type="submit" style={{ width: "30vw" }}>
              Tìm Phòng
            </button>
          </form>
        </div>
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
