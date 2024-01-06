import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logo_black.png";
import "./style.css";
const HeaderAdmin = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
  return (
    <Navbar expand="lg" className="" style={{ background: "#5ab268" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/admin/product">Sản Phẩm</Nav.Link>
            <Link className="nav-link" href="/admin">
              Người dùng
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderAdmin;
