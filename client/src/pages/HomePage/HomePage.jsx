import React from "react";
import logo from "../../assets/images/logo_black.png";
import imagesTravel from "../../assets/images/imgtravel.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "./app.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
  // const user = useSelector((state) => state.user);
  return (
    <>
      <header className="header navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" />
                  </Link>
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
                    {/* <ul id="nav" className="navbar-nav ms-auto">
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
                    </ul> */}
                  </div>
                  {/* {user?.name ? (
                    <div className="button add-list-button">
                      <div className="btn" onClick={handleNavigateLogin}>
                        {user.name}
                      </div>
                    </div>
                  ) : ( */}
                  <div className="button add-list-button">
                    <div className="btn" onClick={handleNavigateLogin}>
                      Tài Khoản
                    </div>
                  </div>
                  {/* )} */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="home" className="hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="hero-content">
                <h1 className="wow fadeInLeft" data-wow-delay=".4s">
                  A powerful app for your business.
                </h1>
                <span
                  className="wow fadeInLeft"
                  data-wow-delay=".6s"
                  style={{ color: "#fff" }}
                >
                  From open source to pro services, Piqes helps you to build,
                  deploy, test, and monitor apps.
                </span>
                <div className="button wow fadeInLeft" data-wow-delay=".8s">
                  <div className="btn">
                    <i className="lni lni-apple"></i> App Store
                  </div>
                  <div className="btn btn-alt">
                    <i className="lni lni-play-store"></i> Google Play
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                <img
                  src={imagesTravel}
                  alt="#"
                  style={{ width: "40%", marginLeft: "30px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="features section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Chuyến Đi Là Các Cuộc Trải Nghiệm
                </h2>
                <span className="wow fadeInUp" data-wow-delay=".6s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-solid fa-cloud rotate-diagonal-br"></i>
                <h3>Push to Deploy</h3>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i className="fa-solid fa-lock rotate-diagonal-br"></i>
                <h3>SSL Certificates</h3>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i className="fa-solid fa-rotate-right rotate-diagonal-br"></i>
                <h3>Simple Queues</h3>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-solid fa-shield rotate-diagonal-br"></i>
                <h3>Advanced Security</h3>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i className="fa-solid fa-gear rotate-diagonal-br"></i>
                <h3>Powerful API</h3>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i className="fa-solid fa-layer-group  rotate-diagonal-br"></i>
                <h3>Database Backups</h3>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-achievement section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="title">
                <h2>Trusted by developers from over 80 planets</h2>
                <span>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div
                    className="single-achievement wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <h3 className="counter">
                      <span id="secondo1" className="countup" cup-end="100">
                        100
                      </span>
                      %
                    </h3>
                    <span>satisfaction</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div
                    className="single-achievement wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h3 className="counter">
                      <span id="secondo2" className="countup" cup-end="120">
                        120
                      </span>
                      K
                    </h3>
                    <span>Happy Users</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div
                    className="single-achievement wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h3 className="counter">
                      <span id="secondo3" className="countup" cup-end="125">
                        125
                      </span>
                      k+
                    </h3>
                    <span>Downloads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3 className="wow zoomIn" data-wow-delay=".2s">
                  pricing
                </h3>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Pricing Plan
                </h2>
                <span className="wow fadeInUp" data-wow-delay=".6s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-table wow fadeInUp" data-wow-delay=".2s">
                <div className="table-head">
                  <h4 className="title">Hobby</h4>
                  <span>All the basics for starting a new business</span>
                  <div className="price">
                    <h2 className="amount">
                      $12<span className="duration">/mo</span>
                    </h2>
                  </div>
                  <div className="button">
                    <div className="btn">Buy Hobby</div>
                  </div>
                </div>

                <div className="table-content">
                  <h4 className="middle-title">What's Included</h4>

                  <ul className="table-list">
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Cras justo
                      odio.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Dapibus ac
                      facilisis in.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Morbi leo
                      risus.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Potenti
                      felis, in cras ligula.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-table wow fadeInUp" data-wow-delay=".4s">
                <div className="table-head">
                  <h4 className="title">Freelancer</h4>
                  <span>All the basics for starting a new business</span>
                  <div className="price">
                    <h2 className="amount">
                      $24<span className="duration">/mo</span>
                    </h2>
                  </div>
                  <div className="button">
                    <div className="btn">Buy Freelancer</div>
                  </div>
                </div>

                <div className="table-content">
                  <h4 className="middle-title">What's Included</h4>

                  <ul className="table-list">
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Cras justo
                      odio.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Dapibus ac
                      facilisis in.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Morbi leo
                      risus.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Potenti
                      felis, in cras ligula.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-table wow fadeInUp" data-wow-delay=".6s">
                <div className="table-head">
                  <h4 className="title">Startup</h4>
                  <span>All the basics for starting a new business</span>
                  <div className="price">
                    <h2 className="amount">
                      $32<span className="duration">/mo</span>
                    </h2>
                  </div>
                  <div className="button">
                    <div className="btn">Buy Startup</div>
                  </div>
                </div>

                <div className="table-content">
                  <h4 className="middle-title">What's Included</h4>

                  <ul className="table-list">
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Cras justo
                      odio.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Dapibus ac
                      facilisis in.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Morbi leo
                      risus.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Potenti
                      felis, in cras ligula.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-table wow fadeInUp" data-wow-delay=".8s">
                <div className="table-head">
                  <h4 className="title">Enterprise</h4>
                  <span>All the basics for starting a new business</span>
                  <div className="price">
                    <h2 className="amount">
                      $48<span className="duration">/mo</span>
                    </h2>
                  </div>
                  <div className="button">
                    <div className="btn">Buy Enterprise</div>
                  </div>
                </div>

                <div className="table-content">
                  <h4 className="middle-title">What's Included</h4>

                  <ul className="table-list">
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Cras justo
                      odio.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Dapibus ac
                      facilisis in.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Morbi leo
                      risus.
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i> Potenti
                      felis, in cras ligula.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section call-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div className="cta-content">
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  You are using free Lite <br />
                  Version of Appvilla
                </h2>
                <span className="wow fadeInUp" data-wow-delay=".4s">
                  Please, purchase full version of the template to get all
                  pages, features and commercial license.
                </span>
                <div className="button wow fadeInUp" data-wow-delay=".6s">
                  <div className="btn">Purchase Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="single-footer f-about">
                  <div className="logo">
                    <a href="index.html">
                      <img src={logo} alt="#" />
                    </a>
                  </div>
                  <span>
                    Making the world a better place through constructing elegant
                    hierarchies.
                  </span>
                  <ul className="social">
                    <li>
                      <div>
                        <i className="lni lni-facebook-filled"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="lni lni-twitter-original"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="lni lni-instagram"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="lni lni-linkedin-original"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="lni lni-youtube"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="lni lni-pinterest"></i>
                      </div>
                    </li>
                  </ul>
                  <span className="copyright-text">
                    Designed and Developed by
                    <div rel="nofollow" target="_blank">
                      UIdeck
                    </div>
                  </span>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-footer f-link">
                      <h3>Solutions</h3>
                      <ul>
                        <li>
                          <div>Marketing</div>
                        </li>
                        <li>
                          <div>Analytics</div>
                        </li>
                        <li>
                          <div>Commerce</div>
                        </li>
                        <li>
                          <div>Insights</div>
                        </li>
                        <li>
                          <div>Promotion</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-footer f-link">
                      <h3>Support</h3>
                      <ul>
                        <li>
                          <div>Pricing</div>
                        </li>
                        <li>
                          <div>Documentation</div>
                        </li>
                        <li>
                          <div>Guides</div>
                        </li>
                        <li>
                          <div>API Status</div>
                        </li>
                        <li>
                          <div>Live Support</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-footer f-link">
                      <h3>Company</h3>
                      <ul>
                        <li>
                          <div>About Us</div>
                        </li>
                        <li>
                          <div>Our Blog</div>
                        </li>
                        <li>
                          <div>Jobs</div>
                        </li>
                        <li>
                          <div>Press</div>
                        </li>
                        <li>
                          <div>Contact Us</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-footer f-link">
                      <h3>Legal</h3>
                      <ul>
                        <li>
                          <div>Terms & Conditions</div>
                        </li>
                        <li>
                          <div>Privacy Policy</div>
                        </li>
                        <li>
                          <div>Catering Services</div>
                        </li>
                        <li>
                          <div>Customer Relations</div>
                        </li>
                        <li>
                          <div>Innovation</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
