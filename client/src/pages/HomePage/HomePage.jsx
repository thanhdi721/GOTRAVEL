import React from "react";
import imagesTravel from "../../assets/images/imgtravel.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "./app.css";
const HomePage = () => {
  return (
    <>
      <section id="home" className="hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="hero-content">
                <h1 className="wow fadeInLeft" data-wow-delay=".4s">
                  A powerful app for your business.
                </h1>
                <p className="wow fadeInLeft" data-wow-delay=".6s">
                  From open source to pro services, Piqes helps you to build,
                  deploy, test, and monitor apps.
                </p>
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
                <h3 className="wow zoomIn" data-wow-delay=".2s">
                  Features
                </h3>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Your Experience Gets Better And Better Over Time.
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-solid fa-cloud rotate-diagonal-br"></i>
                <h3>Push to Deploy</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i className="fa-solid fa-lock rotate-diagonal-br"></i>
                <h3>SSL Certificates</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i className="fa-solid fa-rotate-right rotate-diagonal-br"></i>
                <h3>Simple Queues</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-solid fa-shield rotate-diagonal-br"></i>
                <h3>Advanced Security</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i className="fa-solid fa-gear rotate-diagonal-br"></i>
                <h3>Powerful API</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i className="fa-solid fa-layer-group  rotate-diagonal-br"></i>
                <h3>Database Backups</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
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
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
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
                    <p>satisfaction</p>
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
                    <p>Happy Users</p>
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
                    <p>Downloads</p>
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
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-table wow fadeInUp" data-wow-delay=".2s">
                <div className="table-head">
                  <h4 className="title">Hobby</h4>
                  <p>All the basics for starting a new business</p>
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
                  <p>All the basics for starting a new business</p>
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
                  <p>All the basics for starting a new business</p>
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
                  <p>All the basics for starting a new business</p>
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
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Please, purchase full version of the template to get all
                  pages, features and commercial license.
                </p>
                <div className="button wow fadeInUp" data-wow-delay=".6s">
                  <div className="btn">Purchase Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
