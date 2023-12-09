import React from "react";
import imagesTravel from "../../assets/images/imgtravel.png";
const HomePage = () => {
  return (
    <>
      <section id="home" class="hero-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-12 col-12">
              <div class="hero-content">
                <h1 class="wow fadeInLeft" data-wow-delay=".4s">
                  A powerful app for your business.
                </h1>
                <p class="wow fadeInLeft" data-wow-delay=".6s">
                  From open source to pro services, Piqes helps you to build,
                  deploy, test, and monitor apps.
                </p>
                <div class="button wow fadeInLeft" data-wow-delay=".8s">
                  <div class="btn">
                    <i class="lni lni-apple"></i> App Store
                  </div>
                  <div class="btn btn-alt">
                    <i class="lni lni-play-store"></i> Google Play
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-12 col-12">
              <div class="hero-image wow fadeInRight" data-wow-delay=".4s">
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
      <section id="features" class="features section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h3 class="wow zoomIn" data-wow-delay=".2s">
                  Features
                </h3>
                <h2 class="wow fadeInUp" data-wow-delay=".4s">
                  Your Experience Gets Better And Better Over Time.
                </h2>
                <p class="wow fadeInUp" data-wow-delay=".6s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i class="lni lni-cloud-upload"></i>
                <h3>Push to Deploy</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i class="lni lni-lock"></i>
                <h3>SSL Certificates</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i class="lni lni-reload"></i>
                <h3>Simple Queues</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
                <i class="lni lni-shield"></i>
                <h3>Advanced Security</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i class="lni lni-cog"></i>
                <h3>Powerful API</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page at its layout.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i class="lni lni-layers"></i>
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
      <section class="our-achievement section">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
              <div class="title">
                <h2>Trusted by developers from over 80 planets</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                  <div
                    class="single-achievement wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <h3 class="counter">
                      <span id="secondo1" class="countup" cup-end="100">
                        100
                      </span>
                      %
                    </h3>
                    <p>satisfaction</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div
                    class="single-achievement wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h3 class="counter">
                      <span id="secondo2" class="countup" cup-end="120">
                        120
                      </span>
                      K
                    </h3>
                    <p>Happy Users</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div
                    class="single-achievement wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h3 class="counter">
                      <span id="secondo3" class="countup" cup-end="125">
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
      <section id="pricing" class="pricing-table section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h3 class="wow zoomIn" data-wow-delay=".2s">
                  pricing
                </h3>
                <h2 class="wow fadeInUp" data-wow-delay=".4s">
                  Pricing Plan
                </h2>
                <p class="wow fadeInUp" data-wow-delay=".6s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-table wow fadeInUp" data-wow-delay=".2s">
                <div class="table-head">
                  <h4 class="title">Hobby</h4>
                  <p>All the basics for starting a new business</p>
                  <div class="price">
                    <h2 class="amount">
                      $12<span class="duration">/mo</span>
                    </h2>
                  </div>
                  <div class="button">
                    <div class="btn">Buy Hobby</div>
                  </div>
                </div>

                <div class="table-content">
                  <h4 class="middle-title">What's Included</h4>

                  <ul class="table-list">
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Cras justo odio.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Dapibus ac
                      facilisis in.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Morbi leo risus.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Potenti felis, in
                      cras ligula.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-table wow fadeInUp" data-wow-delay=".4s">
                <div class="table-head">
                  <h4 class="title">Freelancer</h4>
                  <p>All the basics for starting a new business</p>
                  <div class="price">
                    <h2 class="amount">
                      $24<span class="duration">/mo</span>
                    </h2>
                  </div>
                  <div class="button">
                    <div class="btn">Buy Freelancer</div>
                  </div>
                </div>

                <div class="table-content">
                  <h4 class="middle-title">What's Included</h4>

                  <ul class="table-list">
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Cras justo odio.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Dapibus ac
                      facilisis in.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Morbi leo risus.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Potenti felis, in
                      cras ligula.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-table wow fadeInUp" data-wow-delay=".6s">
                <div class="table-head">
                  <h4 class="title">Startup</h4>
                  <p>All the basics for starting a new business</p>
                  <div class="price">
                    <h2 class="amount">
                      $32<span class="duration">/mo</span>
                    </h2>
                  </div>
                  <div class="button">
                    <div class="btn">Buy Startup</div>
                  </div>
                </div>

                <div class="table-content">
                  <h4 class="middle-title">What's Included</h4>

                  <ul class="table-list">
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Cras justo odio.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Dapibus ac
                      facilisis in.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Morbi leo risus.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Potenti felis, in
                      cras ligula.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-table wow fadeInUp" data-wow-delay=".8s">
                <div class="table-head">
                  <h4 class="title">Enterprise</h4>
                  <p>All the basics for starting a new business</p>
                  <div class="price">
                    <h2 class="amount">
                      $48<span class="duration">/mo</span>
                    </h2>
                  </div>
                  <div class="button">
                    <div class="btn">Buy Enterprise</div>
                  </div>
                </div>

                <div class="table-content">
                  <h4 class="middle-title">What's Included</h4>

                  <ul class="table-list">
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Cras justo odio.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Dapibus ac
                      facilisis in.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Morbi leo risus.
                    </li>
                    <li>
                      <i class="lni lni-checkmark-circle"></i> Potenti felis, in
                      cras ligula.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section call-action">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div class="cta-content">
                <h2 class="wow fadeInUp" data-wow-delay=".2s">
                  You are using free Lite <br />
                  Version of Appvilla
                </h2>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  Please, purchase full version of the template to get all
                  pages, features and commercial license.
                </p>
                <div class="button wow fadeInUp" data-wow-delay=".6s">
                  <div class="btn">Purchase Now</div>
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
