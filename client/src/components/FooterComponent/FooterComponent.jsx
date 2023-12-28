import React from "react";
import logo from "../../assets/images/logo_black.png";
const FooterComponent = () => {
  return (
    <>
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

export default FooterComponent;
