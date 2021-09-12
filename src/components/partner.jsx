import React, { Component } from "react";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <>
      <div
        className="section-title"
        style={{
          background: "url(img/midas/EthiopiaPresident.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Partner With Midas Football Academy</h1>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- End Section Title -->*/}

      {/*<!-- Section Area - Content Central -->*/}
      <section className="content-info">
        {/*<!-- White Section -->*/}
        <div className="white-section paddings">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <img
                  src="img/midas/bayonle-with-cafu-2000x2000-82.jpeg"
                  alt=""
                />
              </div>
              <div className="col-md-6 col-xl-6">
                <div className="item-boxed-service">
                  <h3>
                    Midas Football Academy is seeking sponsorship from
                    individuals, philantropists, investors, government or
                    corporate organizations to enable this dream become reality.
                  </h3>
                  <h3>
                    You can also open and operate a Cub Center of the Academy in
                    your State.
                  </h3>
                  <Link to="#">
                    <i className="fa fa-plus-circle"></i>Make Donations
                  </Link>
                  <p>or send to</p>
                  <h3>Bank: Keystone Bank Plc</h3>
                  <h3>Acc. Name: Midas Football Academy</h3>
                  <h3>Acc Number: 1000960956</h3>
                </div>
              </div>
            </div>
            {/*<!-- White Space -->*/}
            <div className="section-info">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center">
                      <p>
                        We appreciate financial support through the following
                        Account details. Also, material support would be
                        appreciated.
                      </p>
                      <p>
                        You may wish to Contact Us for more details in this
                        regard. Thank you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- White space -->*/}
            <div className="row padding-top">
              <div className="col-md-6 col-xl-6">
                <div className="item-boxed-service">
                  <h4>Download sponsorship proposal </h4>
                  <Link to="#">
                    <i className="fa fa-plus-circle"></i>Download here
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-xl-6">
                <div className="item-boxed-service">
                  <h4>Fill cub center application</h4>
                  <Link to="#">
                    <i className="fa fa-plus-circle"></i>Fill here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- End White Section -->*/}

        {/*<!-- Parallax Section -->*/}
        <div
          className="parallax-section"
          style={{ background: "url(img/midas/futureplan.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h1 className="big-title">Let's make this dream a reality</h1>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- End Gray Section -->*/}
      </section>
    </>
  );
};

export default Partners;
