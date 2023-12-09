import {} from "antd";
import imagesCard from "../../assets/images/product1.png";
import React from "react";
import { WrapperCardStyle, WrapperCardStyleBorder } from "./style";

const FromComponents = () => {
  return (
    <div className="card-group" style={{ paddingLeft: "20px" }}>
      <WrapperCardStyleBorder className="card">
        <WrapperCardStyle>
          <img
            className="card-img-top"
            src={imagesCard}
            alt="Job posting"
            style={{ width: "50px", borderRadius: "6px" }}
          />
          <h5 className="card-title">Công ty TNHH 1 thành viên PTD</h5>
        </WrapperCardStyle>

        <div className="card-body">
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </WrapperCardStyleBorder>
      {/* <div className="card" style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          <img
            className="card-img-top"
            src={imagesCard}
            alt="Job posting"
            style={{ width: "50px" }}
          />
          <h5 className="card-title">Card title</h5>
        </div>

        <div className="card-body">
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          <img
            className="card-img-top"
            src={imagesCard}
            alt="Job posting"
            style={{ width: "50px" }}
          />
          <h5 className="card-title">Card title</h5>
        </div>

        <div className="card-body">
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default FromComponents;
