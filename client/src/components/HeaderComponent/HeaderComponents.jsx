import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo_black.png";
const HeaderComponents = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
  return (
    <header class="header navbar-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="nav-inner">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
                <button
                  class="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a
                        href="#home"
                        class="page-scroll active"
                        aria-label="Toggle navigation"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#features"
                        class="page-scroll"
                        aria-label="Toggle navigation"
                      >
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        aria-label="Toggle navigation"
                        href="#overview"
                        class="page-scroll"
                      >
                        Overview
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#pricing"
                        class="page-scroll"
                        aria-label="Toggle navigation"
                      >
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#Team"
                        class="page-scroll"
                        aria-label="Toggle navigation"
                      >
                        Team
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#Blog"
                        class="page-scroll"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-4"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Blog
                      </a>
                      <ul class="sub-menu collapse" id="submenu-1-4">
                        <li class="nav-item">
                          <div>Blog Grid Sidebar</div>
                        </li>
                        <li class="nav-item">
                          <div>Blog Single</div>
                        </li>
                        <li class="nav-item">
                          <div>Blog Single Sibebar</div>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#Contact"
                        class="page-scroll"
                        aria-label="Toggle navigation"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="button add-list-button">
                  <div class="btn" onClick={handleNavigateLogin}>
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
