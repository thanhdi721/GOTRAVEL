import React from "react";
import banner from "../../assets/images/banner-image-1-1920x300.jpg";
import imgProduct from "../../assets/images/product-2-720x480.jpg";
import { Image } from "antd";
const PackageDetails = () => {
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
                <h2>Lorem ipsum dolor sit amet</h2>

                <h4>
                  <i className="fa fa-calendar"></i> Available: Spring
                  &nbsp;&nbsp; <i className="fa fa-cube"></i> 20 nights
                  &nbsp;&nbsp; <i className="fa fa-plane"></i> Flight included{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="featured-places">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div>
                  <img
                    src={imgProduct}
                    alt=""
                    className="img-responsive wc-image"
                  />
                </div>
                <br />
              </div>

              <div className="col-md-6 col-xs-12">
                <h2>
                  <strong className="text-primary">€300 - €4000</strong>
                </h2>

                <h2>
                  <small>
                    <i className="fa fa-map-marker"></i> 6 Regeneration Road,
                    SE16 2NX, London
                  </small>
                </h2>

                <br />

                <div className="row">
                  <div className="col-sm-4 col-xs-6">
                    <div className="form-group">
                      <Image
                        alt=""
                        className="img-responsive"
                        src={imgProduct}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6">
                    <div className="form-group">
                      <Image
                        alt=""
                        className="img-responsive"
                        src={imgProduct}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6">
                    <div className="form-group">
                      <Image
                        alt=""
                        className="img-responsive"
                        src={imgProduct}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-xs-6">
                    <div className="form-group">
                      <Image
                        alt=""
                        className="img-responsive"
                        src={imgProduct}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6">
                    <div className="form-group">
                      <Image
                        alt=""
                        className="img-responsive"
                        src={imgProduct}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-6">
                    <div className="form-group">
                      <Image
                        alt=""
                        className="img-responsive"
                        src={imgProduct}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form action="#" method="post" className="form">
              <div className="accordions">
                <ul className="accordion">
                  <li>
                    <div className="accordion-trigger">Description</div>

                    <div>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum, placeat. Cumque, nulla impedit officiis
                        perferendis harum, quae consequatur adipisci esse!
                      </span>

                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium esse eos qui optio rerum nam quae
                        libero pariatur commodi blanditiis voluptatibus
                        assumenda earum magni nisi numquam, ad, dolorum fugit
                        expedita.
                      </span>

                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cum quas, vel accusamus nisi, voluptatum
                        necessitatibus facilis voluptatibus architecto!
                        Excepturi voluptas tempora omnis aliquam doloremque
                        culpa, ipsum nulla error tenetur assumenda.
                      </span>

                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed similique nam repellendus commodi eaque dolor
                        numquam sint accusantium minus, reiciendis consequuntur
                        itaque, qui. Qui officiis omnis nisi rem fuga adipisci,
                        delectus, quidem ipsam ducimus tempora nihil facilis
                        provident facere. Nemo.
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="accordion-trigger">Info</div>
                    <div>
                      <ul className="list-group list-group-no-border">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-2 col-sm-3">
                              <span className="pjVpProductPolicyTitle">
                                <strong>Check-in</strong>
                              </span>
                            </div>
                            <div className="col-md-10 col-sm-9">
                              <span>
                                Donec dapibus semper sem, ac ultrices sem
                                sagittis ut. Donec sit amet erat elit, sed
                                pellentesque odio. In enim ligula, euismod a
                                adipiscing in, laoreet quis turpis. Ut accumsan
                                dignissim rutrum.
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-2 col-sm-3">
                              <span>
                                <strong>Check-out</strong>
                              </span>
                            </div>

                            <div className="col-md-10 col-sm-9">
                              <span>
                                Donec dapibus semper sem, ac ultrices sem
                                sagittis ut. Donec sit amet erat elit, sed
                                pellentesque odio. In enim ligula, euismod a
                                adipiscing in, laoreet quis turpis. Ut accumsan
                                dignissim rutrum.
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-2 col-sm-3">
                              <span>
                                <strong>Pets</strong>
                              </span>
                            </div>
                            <div className="col-md-10 col-sm-9">
                              <span>Not allowed</span>
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-2 col-sm-3">
                              <span>
                                <strong>Policies</strong>
                              </span>
                            </div>
                            <div className="col-md-10 col-sm-9">
                              <div>
                                <span>
                                  Donec dapibus semper sem, ac ultrices sem
                                  sagittis ut. Donec sit amet erat elit, sed
                                  pellentesque odio. In enim ligula, euismod a
                                  adipiscing in, laoreet quis turpis. Ut
                                  accumsan dignissim rutrum. <br />
                                  Donec dapibus semper sem, ac ultrices sem
                                  sagittis ut. Donec sit amet erat elit, sed
                                  pellentesque odio. In enim ligula, euismod a
                                  adipiscing in, laoreet quis turpis. Ut
                                  accumsan dignissim rutrum. <br />
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-2 col-sm-3">
                              <span>
                                <strong>Fees</strong>
                              </span>
                            </div>

                            <div className="col-md-10 col-sm-9">
                              <div>
                                <span>
                                  Donec dapibus semper sem, ac ultrices sem
                                  sagittis ut. Donec sit amet erat elit, sed
                                  pellentesque odio. In enim ligula, euismod a
                                  adipiscing in, laoreet quis turpis. Ut
                                  accumsan dignissim rutrum. <br />
                                  Donec dapibus semper sem, ac ultrices sem
                                  sagittis ut. Donec sit amet erat elit, sed
                                  pellentesque odio. In enim ligula, euismod a
                                  adipiscing in, laoreet quis turpis. Ut
                                  accumsan dignissim rutrum. <br />
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="accordion-trigger">
                      Enquiry &amp; Contact Details
                    </div>

                    <div>
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-sm-6">
                              <fieldset>
                                <input
                                  name="name"
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Name"
                                  required=""
                                />
                              </fieldset>
                            </div>

                            <div className="col-sm-6">
                              <fieldset>
                                <input
                                  name="email"
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="Email"
                                  required=""
                                />
                              </fieldset>
                            </div>

                            <div className="col-sm-6">
                              <fieldset>
                                <input
                                  name="phone"
                                  type="text"
                                  className="form-control"
                                  id="phone"
                                  placeholder="Phone"
                                  required=""
                                />
                              </fieldset>
                            </div>

                            <div className="col-sm-3">
                              <fieldset>
                                <input
                                  name="date1"
                                  type="text"
                                  className="form-control"
                                  id="date1"
                                  placeholder="From 16.06.2020"
                                  required=""
                                />
                              </fieldset>
                            </div>

                            <div className="col-sm-3">
                              <fieldset>
                                <input
                                  name="date2"
                                  type="text"
                                  className="form-control"
                                  id="date2"
                                  placeholder="To 16.06.2020"
                                  required=""
                                />
                              </fieldset>
                            </div>

                            <div className="col-lg-12">
                              <fieldset>
                                <textarea
                                  name="message"
                                  rows="6"
                                  className="form-control"
                                  id="message"
                                  placeholder="Notes"
                                  required=""
                                ></textarea>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <div className="blue-button">
                                <div>Send Request</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <span>
                            <span>Name</span>

                            <br />

                            <strong>John Smith</strong>
                          </span>

                          <span>
                            <span>Phone</span>

                            <br />

                            <strong>
                              <a href="tel:123-456-789">123-456-789</a>
                            </strong>
                          </span>

                          <span>
                            <span>Mobile phone</span>

                            <br />

                            <strong>
                              <a href="tel:456789123">456789123</a>
                            </strong>
                          </span>

                          <span>
                            <span>Email</span>

                            <br />

                            <strong>
                              <a href="mailto:john@carsales.com">
                                john@carsales.com
                              </a>
                            </strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export default PackageDetails;
