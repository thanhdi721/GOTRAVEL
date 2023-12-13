import React from "react";
import logo from "../../assets/images/logo_black.png";
const FooterComponent = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-12">
                <div class="single-footer f-about">
                  <div class="logo">
                    <a href="index.html">
                      <img src={logo} alt="#" />
                    </a>
                  </div>
                  <p>
                    Making the world a better place through constructing elegant
                    hierarchies.
                  </p>
                  <ul class="social">
                    <li>
                      <div>
                        <i class="lni lni-facebook-filled"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i class="lni lni-twitter-original"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i class="lni lni-instagram"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i class="lni lni-linkedin-original"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i class="lni lni-youtube"></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i class="lni lni-pinterest"></i>
                      </div>
                    </li>
                  </ul>
                  <p class="copyright-text">
                    Designed and Developed by
                    <div rel="nofollow" target="_blank">
                      UIdeck
                    </div>
                  </p>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-12">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer f-link">
                      <h3>Solutions</h3>
                      <ul>
                        <li>
                          <div>Marketing</div>
                        </li>
                        <li>
                          <div>Analytics</div>
                        </li>
                        <li>
                          <dic>Commerce</dic>
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
                  <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer f-link">
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
                  <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer f-link">
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
                  <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer f-link">
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
