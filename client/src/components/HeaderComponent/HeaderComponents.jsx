import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo_black.png";
const HeaderComponents = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a
                        href="#home"
                        className="page-scroll active"
                        aria-label="Toggle navigation"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#features"
                        className="page-scroll"
                        aria-label="Toggle navigation"
                      >
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        aria-label="Toggle navigation"
                        href="#overview"
                        className="page-scroll"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#pricing"
                        className="page-scroll"
                        aria-label="Toggle navigation"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#Team"
                        className="page-scroll"
                        aria-label="Toggle navigation"
                      >
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#Blog"
                        className="page-scroll"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-4"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Blog
                      </a>
                      <ul className="sub-menu collapse" id="submenu-1-4">
                        <li className="nav-item">
                          <div>Blog Grid Sidebar</div>
                        </li>
                        <li className="nav-item">
                          <div>Blog Single</div>
                        </li>
                        <li className="nav-item">
                          <div>Blog Single Sibebar</div>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#Contact"
                        className="page-scroll"
                        aria-label="Toggle navigation"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="button add-list-button">
                  <div className="btn" onClick={handleNavigateLogin}>
                    Tài Khoản
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponents;
