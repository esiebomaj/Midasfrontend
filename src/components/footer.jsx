import React, { Component } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/*<!-- footer-->*/}
      <footer id="footer">
        {/*<!-- Footer Top-->*/}
        <div className="top-footer">
          {/*<!-- Logo Footer-->*/}
          <div className="col-lg-12">
            <div className="logo-footer">
              <img
                src="img/midas/MFA logo PNG1 1.png"
                alt="Logo"
                className="logo_img"
              />
            </div>
          </div>
          {/*<!-- End Logo Footer-->*/}

          {/*<!-- Social Icons-->*/}
          <ul className="social">
            <li>
              <div>
                <Link
                  to="/https://facebook.com/midasfootballacademy"
                  className="facebook"
                >
                  <i className="fa fa-facebook"></i>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  to="/https://twitter.com/midasfanigeria"
                  className="twitter-icon"
                >
                  <i className="fa fa-twitter"></i>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  to="/https://instgram.com/midasacademy"
                  className="instagram"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  to="/https://www.linkedin.com/company/midas-football-academy/"
                  className="linkedin-icon"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/#" className="youtube">
                  <i className="fa fa-youtube"></i>
                </Link>
              </div>
            </li>
          </ul>
          {/*<!-- End Social Icons-->*/}
        </div>
        {/*<!-- End Footer Top-->*/}

        {/*<!-- Links Footer-->*/}
        <div className="links-footer">
          <div className="container">
            <div className="row">
              {/*<!-- Column Links -->*/}
              <div className="col-lg-2 col-md-5 col-sm-5">
                <div className="info-links">
                  <h5>Midas Football Academy</h5>
                  <p>
                    Midas provide broadcast and sports equipment purchase
                    services to individuals and corporate organisations as well
                    as organize world className soccer tours, trials and
                    tournaments for individual players and teams in Africa,
                    Europe and the United States.
                  </p>
                </div>
              </div>
              {/*<!-- End Column Links -->*/}

              {/*<!-- Column Links -->*/}
              <div className="col-lg-4 col-md-7 col-sm-7">
                <div className="info-links">
                  <h5>Contact Us</h5>
                  <address>
                    <i className="fa fa-phone"></i>
                    <strong>Phone:</strong> +234 (703)-237-9792, +234
                    (909)-143-0200, +234 (817)-601-9417
                    <br />
                  </address>
                  <address>
                    <i className="fa fa-envelope"></i>
                    <strong>Email:</strong>
                    <Link to="/mailto:info@midasfootballacademy.com">
                      {" "}
                      info@midasfootballacademy.com
                    </Link>{" "}
                    <br />
                    <i className="fa fa-envelope"></i>
                    <strong>Email:</strong>
                    <Link to="/mailto:info.midasfa@gmail.com">
                      {" "}
                      info.midasfa@gmail.com
                    </Link>
                  </address>
                </div>
              </div>
              {/*<!-- End Column Links -->*/}
              {/*<!-- Column Links -->*/}
              <div className="col-lg-2 col-md-5 col-sm-5">
                <div className="info-links">
                  <h5>Categories</h5>
                  <ul>
                    <li>
                      <Link to="/academy">Midas Football Academy</Link>
                    </li>
                    <li>
                      <Link to="/our-team">Our Teams</Link>
                    </li>
                    <li>
                      <Link to="/players">Players</Link>
                    </li>
                    <li>
                      <Link to="/page-faq">
                        Frequently Asked Questions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/*<!-- End Column Links -->*/}
              {/*<!-- Column Links -->*/}
              <div className="col-lg-4 col-md-7 col-sm-7">
                <div className="info-links">
                  <h5>Why Midas Football Academy? </h5>
                  <p>
                    Once you have become a member of our academy your profile
                    will be available to football clubs, football scouts and
                    football agents to view. Our established relationship with
                    high profile contacts means your information will be viewed
                    by some of the most influential people in football from
                    across the world.
                  </p>
                </div>
              </div>
              {/*<!-- End Column Links -->*/}
            </div>
          </div>
        </div>
        {/*<!-- End Links Footer-->*/}

        {/*<!-- footer Down-->*/}
        <div className="footer-down">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>&copy; 2021 Midas Football Academy. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- footer Down-->*/}
      </footer>
      {/*<!-- End footer 2-->*/}
    </>
  );
};

export default Footer;
