import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Header-->*/}

      <header className="header-4">
        {/* <!-- End headerbox-->*/}
        <div className="headerbox">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              {/* <!-- Logo-->*/}
              <div className="col col-xl-2">
                <div className="logo">
                  <Link to="/" title="Return Home">
                    <img
                      src="/img/midas/MFA logo PNG1.png"
                      alt="Logo"
                      className="logo_img"
                    />
                  </Link>
                </div>
              </div>
              {/* <!-- End Logo-->*/}

              {/* <!-- Adds nav-->*/}
              <div className="col col-xl-10">
                {/* <!-- mainmenu-->*/}
                <nav className="mainmenu">
                  <div className="container">
                    {/* <!-- Menu-->*/}
                    <ul className="sf-menu" id="menu">
                      <li className="current">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/academy">Academy</Link>
                      </li>
                      <li>
                        <Link to="/our-team">Our Team</Link>
                      </li>
                      <li>
                        <Link to="/players">Players</Link>
                      </li>

                      <li className="current">
                        <Link to="/facilities">Facilities</Link>
                        <ul className="sub-current">
                          <li>
                            <Link to="/facilities">Facilities</Link>
                          </li>
                          <li>
                            <Link to="/partner">Our Partners</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/page-register">Join Us</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="current">
                        <Link to="/page-faq">FAQs</Link>
                      </li>
                      <li>
                        <Link to="/news">News</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                    {/* <!-- End Menu-->*/}
                  </div>
                </nav>
                {/* <!-- End mainmenu-->*/}

                {/* <!-- Call Nav Menu-->*/}
                <a className="mobile-nav" href="#mobile-nav">
                  <i className="fa fa-bars"></i>
                </a>
                {/* <!-- End Call Nav Menu-->*/}
              </div>
              {/* <!-- End nav Header-->*/}
            </div>
          </div>
        </div>
        {/* <!-- End headerbox-->*/}
      </header>
      {/* <!-- End header-->*/}

      {/* <!-- Mobile Nav-->*/}
      <div id="mobile-nav">
        {/* <!-- Menu-->*/}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/academy">Academy</Link>
          </li>
          <li>
            <Link to="/players">Players List</Link>
          </li>
          <li>
            <Link to="/our-team">Our Team</Link>
          </li>

          <li>
            <Link to="/facilities">Facilities</Link>
            <ul>
              <li>
                <Link to="/facilities">Facilities</Link>
              </li>
              <li>
                <Link to="/partner">Our Partners</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/page-register">Join Us</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/page-faq">FAQs</Link>
          </li>

          <li>
            <Link to="/news">News</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <!-- End Menu-->*/}
      </div>

      {/* <!-- End Mobile Nav-->*/}
    </>
  );
};

export default Header;
