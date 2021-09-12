import React, { Component } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Google Map */}
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96675.78523415352!2d-74.04718227108513!3d40.78141356385996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ed64fc3b013b%3A0xd813d2023b2ead16!2sNew+York+County%2C+Nueva+York%2C+EE.+UU.!5e0!3m2!1ses!2sco!4v1515849243841"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen
        ></iframe>
      </div>
      {/* End Google Map */}

      {/* Section Area - Content Central */}
      <section className="content-info">
        <div className="container">
          <div className="row paddings-mini">
            {/* Left Content */}
            <div className="col-md-4">
              <aside className="panel-box">
                <div className="titles no-margin">
                  <h4>The Office</h4>
                </div>
                <div className="info-panel">
                  <address>
                    <strong>Midas Football Academy.</strong>
                    <br />
                    <i className="fa fa-map-marker"></i>
                    <strong>Address: </strong>
                    Gospel Camp Ground, Command Ipaja Lagos on Mondays,
                    Tuesdays, Wednesdays and Fridays from 7am
                    <br />
                    <i className="fa fa-plane"></i>
                    <strong>City: </strong>Lagos
                    <br />
                    <i className="fa fa-phone"></i>{" "}
                    <abbr title="Phone">P:</abbr> +234 (703)-237-9792, +234
                    (909)-143-0200
                    <br />
                    <i className="fa fa-whatsapp"></i>
                    <strong>WhatsApp:</strong> +234(803-376-9034)
                  </address>
                </div>
              </aside>

              <aside className="panel-box">
                <div className="titles no-margin">
                  <h4>Emails Contact</h4>
                </div>
                <div className="info-panel">
                  <address>
                    <i className="fa fa-envelope"></i>
                    <strong>Email:</strong>
                    <Link to="/mailto:info@midasfootballacademy.com">
                      {" "}
                      info@midasfootballacademy.com
                    </Link>
                    <br />
                    <i className="fa fa-envelope"></i>
                    <strong>Email:</strong>
                    <Link to="/mailto:info.midasfa@gmail.com">
                      {" "}
                      info.midasfa@gmail.com
                    </Link>
                  </address>
                </div>
              </aside>
            </div>
            {/* End Left Content */}

            {/* Right Content */}
            <div className="col-md-8">
              <div className="panel-box">
                <div className="titles no-margin">
                  <h4>Contact Form</h4>
                </div>
                <div className="info-panel">
                  {/* Form Contact */}
                  <form className="form-theme" action="php/send-mail.php">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Your name *</label>
                        <input
                          type="text"
                          required="required"
                          value=""
                          maxlength="100"
                          className="form-control"
                          name="Name"
                          id="name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Your email address *</label>
                        <input
                          type="email"
                          required="required"
                          value=""
                          maxlength="100"
                          className="form-control"
                          name="Email"
                          id="email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Subject *</label>
                        <input
                          type="text"
                          required="required"
                          value=""
                          maxlength="100"
                          className="form-control"
                          name="Email"
                          id="email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Comment *</label>
                        <textarea
                          maxlength="5000"
                          rows="10"
                          className="form-control"
                          name="message"
                          style={{ height: "138px;" }}
                          required="required"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-lg btn-primary"
                        />
                      </div>
                    </div>
                  </form>
                  {/* End Form Contact */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="result"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Content */}
          </div>
        </div>
      </section>
      {/* End Section Area -  Content Central */}

      <div className="content-instagram">
        <div id="instafeed"></div>
      </div>
    </>
  );
};

export default Contact;
