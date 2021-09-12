import React, { Component } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      {/* <!-- Section Title -->*/}
      <div
        className="section-title"
        style={{ background: "url(img/midas/slide1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Midas Gallery</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section Title -->*/}

      {/* <!-- Section Area - Content Central -->*/}
      <section className="content-info">
        {/* <!-- Single Team Tabs -->*/}
        <div className="single-team-tabs">
          <div className="container">
            <div className="row">
              {/* <!-- Left Content - Tabs and Carousel -->*/}

              <div className="col-lg-12">
                {/* <!-- Content Tabs -->*/}
                <div className="tab-content">
                  {/* <!-- Tab One - Sumary -->*/}
                  <div className="tab-pane active" id="summary">
                    {/* <!--Items Club News -->*/}
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="clear-title">Photos</h3>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                          <div className="hover-bg">
                            {" "}
                            <Link
                              to="img/midas/MFA participating in social work.jpg"
                              title="#"
                              data-lightbox-gallery="gallery1"
                            >
                              <div className="hover-text">
                                <h4>Lorem Ipsum</h4>
                              </div>
                              <img
                                src="img/midas/MFA participating in social work.jpg"
                                className="img-responsive"
                                alt="#"
                              />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                          <div className="hover-bg">
                            {" "}
                            <Link
                              to="img/midas/MFA triumph in Denmark.JPG"
                              title="#"
                              data-lightbox-gallery="gallery1"
                            >
                              <div className="hover-text">
                                <h4>Adipiscing Elit</h4>
                              </div>
                              <img
                                src="img/midas/MFA triumph in Denmark.JPG"
                                className="img-responsive"
                                alt="Project Title"
                              />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                          <div className="hover-bg">
                            {" "}
                            <Link
                              to="img/midas/Midas win.jpg"
                              title="#"
                              data-lightbox-gallery="gallery1"
                            >
                              <div className="hover-text">
                                <h4>Adipiscing Elit</h4>
                              </div>
                              <img
                                src="img/midas/Midas win.jpg"
                                className="img-responsive"
                                alt="#"
                              />{" "}
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* <!--End Item Club News -->*/}
                    </div>
                    {/* <!--End Items Club News -->*/}

                    {/* <!--Items Club video -->*/}
                    <div className="row no-line-height">
                      <div className="col-md-12">
                        <h3 className="clear-title">Videos</h3>
                      </div>

                      {/* <!--Item Club News -->*/}
                      <div className="col-lg-6 col-xl-4">
                        {/* <!-- Widget Text-->*/}
                        <div className="panel-box">
                          <div className="titles no-margin">
                            <h4>
                              <Link to="#">Eliminatory to the world.</Link>
                            </h4>
                          </div>
                          <iframe
                            className="video"
                            src="https://www.youtube.com/embed/Ln8rXkeeyP0"
                            frameborder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowfullscreen
                          ></iframe>
                        </div>
                        {/* <!-- End Widget Text-->*/}
                      </div>
                      {/* <!--End Item Club News -->*/}

                      {/* <!--Item Club News -->*/}
                      <div className="col-lg-6 col-xl-4">
                        {/* <!-- Widget Text-->*/}
                        <div className="panel-box">
                          <div className="titles no-margin">
                            <h4>
                              <Link to="#">Colombia classNameification</Link>
                            </h4>
                          </div>
                          <iframe
                            className="video"
                            src="https://www.youtube.com/embed/Z5cackyUfgk"
                            frameborder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowfullscreen
                          ></iframe>
                        </div>
                        {/* <!-- End Widget Text-->*/}
                      </div>
                      {/* <!--End Item Club News -->*/}

                      {/* <!--Item Club News -->*/}
                      <div className="col-lg-6 col-xl-4">
                        {/* <!-- Widget Text-->*/}
                        <div className="panel-box">
                          <div className="titles no-margin">
                            <h4>
                              <Link to="#">World Cup goal</Link>
                            </h4>
                          </div>
                          <iframe
                            className="video"
                            src="https://www.youtube.com/embed/hW3hnUoUS0k"
                            frameborder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowfullscreen
                          ></iframe>
                        </div>
                        {/* <!-- End Widget Text-->*/}
                      </div>
                      {/* <!--End Item Club News -->*/}
                    </div>
                    {/* <!--End Items Club video -->*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
