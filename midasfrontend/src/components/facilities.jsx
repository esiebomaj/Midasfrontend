import React, { Component } from "react";
import { Link } from "react-router-dom";

const Facilities = () => {
  return (
    <>
      <div
        className="section-title"
        style={{ background: "url(img/midas/MFAdark.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Midas Football Academy Facilities</h1>
              <p>
                We are not only blessed with abundant human resources, but we
                can also boast of some modern facilities to aid our day to day
                activities.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section Title -->*/}

      {/* <!-- Section Area - Content Central -->*/}
      <section className="content-info">
        {/* <!-- Parallax Section -->*/}
        <div
          className="parallax-section"
          style={{ background: "url(img/midas/futureplan.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2 className="big-title">Our Facilities</h2>
                <h4>
                  “Write the vision and make it plain on tablets, That he may
                  run who reads it. For the vision is yet for an appointed time,
                  But at the end, it will speak, and it will not lie. Though it
                  tarries, wait for it; Because it will surely come, It will not
                  tarry. Habakkuk 2:2-3
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Gray Section -->*/}
        {/* <!--Item Club News -->*/}
        <div className="row mesonary-filter">
          <div className="col-lg-3 col-md-3 develop">
            <Link
              className="zoom-image-item text-dark d-block hover-3d mt-30"
              data-effect="mfp-move-horizontal"
              to="img/midas/mfa-plan1.jpeg"
            >
              <div className="img-mask rounded-lg">
                <img
                  className="img-fluid"
                  src="img/midas/mfa-plan1.jpeg"
                  alt="image description"
                />
                <span className="img-icon img-icon-center d-inline-block rounded-circle position-absolute text-light text-center fe fe-plus"></span>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-3 design">
            <Link
              className="zoom-image-item text-dark d-block hover-3d mt-30"
              data-effect="mfp-move-horizontal"
              to="img/midas/mfa-plan.jpeg"
            >
              <div className="img-mask rounded-lg">
                <img
                  className="img-fluid"
                  src="img/midas/mfa-plan.jpeg"
                  alt="image description"
                />
                <span className="img-icon img-icon-center d-inline-block rounded-circle position-absolute text-light text-center fe fe-plus"></span>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-3 design">
            <Link
              className="zoom-image-item text-dark d-block hover-3d mt-30"
              data-effect="mfp-move-horizontal"
              to="img/midas/mfa-plan2.jpeg"
            >
              <div className="img-mask rounded-lg">
                <img
                  className="img-fluid"
                  src="img/midas/mfa-plan2.jpeg"
                  alt="image description"
                />
                <span className="img-icon img-icon-center d-inline-block rounded-circle position-absolute text-light text-center fe fe-plus"></span>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-3 design">
            <Link
              className="zoom-image-item text-dark d-block hover-3d mt-30"
              data-effect="mfp-move-horizontal"
              to="img/midas/mfa-plan3.jpeg"
            >
              <div className="img-mask rounded-lg">
                <img
                  className="img-fluid"
                  src="img/midas/mfa-plan3.jpeg"
                  alt="image description"
                />
                <span className="img-icon img-icon-center d-inline-block rounded-circle position-absolute text-light text-center fe fe-plus"></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
