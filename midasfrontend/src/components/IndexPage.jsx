import React, { Component } from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <>
      {/* <!-- section-hero-posts-->*/}
      <div className="hero-header big">
        {/* <!-- Hero Slider-->*/}
        <div id="hero-slider" className="hero-slider">
          {/* <!-- Item Slide-->*/}
          <div
            className="item-slider"
            style={{ background: "url(img/midas/slide3.jpg)" }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="info-slider">
                    <h1>WELCOME TO OUR ACADEMY</h1>
                    <p>
                      Dreams become possible or impossible by our actions. Your
                      dream of playing professional football depends on your
                      action today. Make that dream possible, join Midas today.
                    </p>
                    <Link to="/academy" className="btn-iw outline">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Item Slide-->*/}

          {/* <!-- Item Slide-->*/}
          <div
            className="item-slider"
            style={{ background: "url(img/midas/slide2.JPG)" }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="info-slider">
                    <h1>WELCOME TO OUR ACADEMY</h1>
                    <p>
                      Dreams become possible or impossible by our actions. Your
                      dream of playing professional football depends on your
                      action today. Make that dream possible, join Midas today.
                    </p>
                    <Link to="/academy" className="btn-iw outline">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Item Slide-->*/}

          {/* <!-- Item Slide-->*/}
          <div
            className="item-slider"
            style={{ background: "url(img/midas/slide4.JPG)" }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="info-slider">
                    <h1>WELCOME TO OUR ACADEMY</h1>
                    <p>
                      Dreams become possible or impossible by our actions. Your
                      dream of playing professional football depends on your
                      action today. Make that dream possible, join Midas today.
                    </p>
                    <Link to="/academy" className="btn-iw outline">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Item Slide-->*/}
        </div>
        {/* <!-- End Hero Slider-->*/}
      </div>
      {/* <!-- End section-hero-posts-->*/}

      {/* <!-- Section Area - Content Central -->*/}
      <section className="content-info">
        {/* <!-- White Section -->*/}
        <div className="white-section paddings">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <img src="img/midas/mfa2.jpg" alt="" />
              </div>
              <div className="col-lg-7">
                <h4 className="subtitle">
                  <span>Company Value</span>
                  Who We Are
                </h4>
                <p>
                  Midas provide broadcast and sports equipment purchase services
                  to individuals and corporate organisations as well as organize
                  world className soccer tours, trials and tournaments for
                  individual players and teams in Africa, Europe and the United
                  States.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <h5>Our Mission</h5>
                    <p>
                      Our Mission is to produce the next generation of big stars
                      and talents in the world of football and give them the
                      best education of the game that will last them for the
                      rest of their lives.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h5>Our Vision</h5>
                    <p>
                      Our Vision is to become the biggest football academy in
                      Nigeria and Africa, to have branches and centers in every
                      part of the world, to become the most successful football
                      academy with the type of players that will be produced for
                      National teams and football world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center padding-top">
                  <Link to="/our-team" className="btn-iw">
                    Our Team
                  </Link>
                  <Link to="/academy" className="btn-iw outline skin">
                    Football Academy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End White Section -->*/}

        {/* <!-- Parallax Section - Testimonials -->*/}
        <div
          className="parallax-section parallax-total"
          style={{ background: "url(img/midas/pic1.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="text-center paddings-50-50">
                  <h1>Would you like to know more about us?</h1>
                  <p className="lead">
                    Here's an explanation of who we are and what we do at MIdas
                    Football Academy
                  </p>
                  <a
                    className="icon-video swipebox-ligbox"
                    href="https://www.youtube.com/watch?v=AfOlAUd7u4o"
                  >
                    <i className="fa fa-play-circle-o"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Gray Section - Testimonials -->*/}
      </section>
    </>
  );
};

export default IndexPage;
