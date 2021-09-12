import React, { Component } from "react";
import { Link } from "react-router-dom";

const Academy = () => {
  return (
    <>
      <div
        className="section-title big-title"
        style={{ background: "url(img/locations/3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Midas Football Academy</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section Title -->*/}

      {/* <!-- Section Area - Content Central -->*/}
      <section className="content-info">
        {/* <!-- White Section -->*/}
        <div className="white-section paddings">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h4 className="subtitle">
                  <span>Overview</span>
                  Our Academy
                </h4>
                <div className="accrodation">
                  {/* <!-- section 1 -->*/}
                  <span className="acc-trigger">
                    <a href="#">Brief History</a>
                  </span>
                  <div className="acc-container" style={{ display: "none" }}>
                    <div className="content">
                      Midas Football Academy Nigeria formed in November 2006 to
                      discover young soccer talents in Nigeria and the rest of
                      Africa and make them better persons in the society. The
                      academy is duly registered and affiliated with the Nigeria
                      Football Federation and Lagos state Football Association.
                    </div>
                  </div>

                  {/* <!-- section 2 -->*/}
                  <span className="acc-trigger">
                    <a href="#">Our Believe</a>
                  </span>
                  <div className="acc-container" style={{ display: "none" }}>
                    <div className="content">
                      We believe in the numerous human and natural resources
                      that Nigeria and Africa possess most especially in the
                      football industry and Midas Football Academy was setup to
                      enable us recognize and deploy these talents.
                    </div>
                  </div>

                  {/* <!-- section 3 -->*/}
                  <span className="acc-trigger">
                    <a href="#">Core Achievement</a>
                  </span>
                  <div className="acc-container" style={{ display: "none" }}>
                    <div className="content">
                      With our network of international football clubs and
                      football management organisations around the world, we
                      have been helping young players with opportunities to
                      showcase their talents to football coaches, agents and
                      scouts from all over Europe, Asia, North Africa and the
                      Americas.
                    </div>
                  </div>

                  {/* <!-- section 4 -->*/}
                  <span className="acc-trigger">
                    <a href="#">Commitment</a>
                  </span>
                  <div className="acc-container" style={{ display: "none" }}>
                    <div className="content">
                      We are committed to the growth of football in Nigeria and
                      Africa.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <img src="img/midas/Midas win.jpg" alt="" />
              </div>
            </div>
            <Link to="page-register" className="btn-iw outline skin">
              Join Academy
            </Link>
          </div>
        </div>
        {/* <!-- End White Section -->*/}

        <div className="container paddings-mini">
          {/* <!-- Content Text-->*/}
          <div className="panel-box padding-b">
            <div className="titles">
              <h4>Our Strategy</h4>
            </div>

            <div className="info-panel">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Our aim is to provide the best of facilities, coaching and
                    games programme to create a perfect environment for players
                    to develop and reach their full potentials. We aim to
                    develop players to play in the first team of different clubs
                    in every part of the world as professionals and our
                    admission process is rigorous and on a continuous basis as
                    more talented qualified students are discovered and invited
                    to join the academy.
                  </p>
                  <p>
                    We aim to have a 120 student’s capacity hostel for the
                    junior and senior teams in the nearest future where they
                    will be 3 coaches for both levels. All student and coaches
                    shall reside in the academy accommodation, those that could
                    not complete their high school education and those that are
                    still in high school shall join academic activities of our
                    partner educational schools. They shall seat for WAEC, NECO
                    and GCE and as such shall be part of the evening training.
                    Midas Football Academy students that are part of the academy
                    activities of our partner educational school shall observe
                    breaks in line with the school calendar while the senior
                    students will remain at the academy accommodation and will
                    observe break as determined by the management. Players shall
                    be eliminated due to any form of bad behavior or poor
                    performance.
                  </p>
                  <p>
                    There shall be computer training opportunities for all
                    students of MFA; each student shall have a training kits and
                    camp uniforms. The academy shall have a most functional and
                    modern facilities for training and development of her
                    students. There shall be scholarship opportunities for
                    students with outstanding performance and educational result
                    at top football and educational institutes in Europe and
                    Americas. The academy shall have a well-furnished hostel
                    accommodation with all the house hold facilities.
                  </p>
                  <p>
                    There shall be a monthly award for the best player of the
                    month an initiative already introduced in the academy since
                    2012, There shall be a monthly visit by ex-international
                    across Africa to educate and enlighten the players on the
                    effect of social vices and etc.
                  </p>
                  <p>
                    The academy will have youths from Nigeria and across west
                    Africa between the age of 11 and 19 years old and as it is a
                    norm that best players are from poor homes, the academy will
                    give free admission to players with exceptional talent to
                    attend the academy for free and average ones with trainable
                    tendencies shall be given a discounted reduction of the
                    academy fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academy;
