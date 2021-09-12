import React, { Component } from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <div
        className="section-title"
        style={{ background: "url(img/midas/dsc00192-1000x668.jpeg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>News</h1>
            </div>
          </div>
        </div>
      </div>
      {/*End Section Title -->*/}

      {/* <!-- Section Area - Content Central -->*/}
      <section className="content-info">
        <div className="container paddings-mini">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Content Text-->*/}
              <div className="panel-box">
                <div className="titles">
                  <h4>All News</h4>
                </div>

                {/* <!-- Post Item -->*/}
                <div className="post-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="img-hover">
                        <img
                          src="img/blog/1.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="overlay">
                          <Link to="single-news">+</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5>
                        <Link to="single-news">Group Stage Breakdown</Link>
                      </h5>
                      <span className="data-info">January 3, 2014 </span>
                      <p>
                        While familiar with fellow European nation France,
                        Hareide admits that South American side Peru.
                      </p>{" "}
                      <Link
                        to="single-news"
                        className="btn-iw outline skin"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- End Post Item -->*/}

                {/* <!-- Post Item -->*/}
                <div className="post-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="img-hover">
                        <img
                          src="img/blog/2.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="overlay">
                          <Link to="single-news">+</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5>
                        <Link to="single-news">
                          Russia 2018’s potential classNameic match-ups
                        </Link>
                      </h5>
                      <span className="data-info">January 9, 2014 </span>
                      <p>
                        Our goal is very clear, it didn’t change after the draw.
                        We should qualify for the knockout stage.
                      </p>
                      <Link
                        to="single-news"
                        className="btn-iw outline skin"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- End Post Item -->*/}

                {/* <!-- Post Item -->*/}
                <div className="post-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="img-hover">
                        <img
                          src="img/blog/3.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="overlay">
                          <Link to="single-news">+</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5>
                        <Link to="single-news">
                          World Cup rivalries reprised
                        </Link>
                      </h5>
                      <span className="data-info">January 4, 2014 </span>
                      <p>
                        The outdoor exhibition on Manezhnaya Square comprises 11
                        figures that symbolise the main sites of interest.
                      </p>{" "}
                      <Link
                        to="single-news"
                        className="btn-iw outline skin"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- End Post Item -->*/}

                {/* <!-- Post Item -->*/}
                <div className="post-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="img-hover">
                        <img
                          src="img/blog/4.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="overlay">
                          <Link to="single-news">+</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5>
                        <Link to="single-news">
                          All set for your trip to Russia?
                        </Link>
                      </h5>
                      <span className="data-info">January 8, 2014 </span>
                      <p>
                        Colombia play Japan on 19 June at the Mordovia Arena,
                        where the piling and casting operations.
                      </p>{" "}
                      <Link
                        to="single-news"
                        className="btn-iw outline skin"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- End Post Item -->*/}
              </div>
              {/* <!-- End Content Text-->*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
