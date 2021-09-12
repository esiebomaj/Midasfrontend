import React, { Component } from "react";

const SinglePlayer = () => {
  return (
    <>
      <div
        className="section-title single-player"
        style={{ background: "url(img/slide/3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Single Player</h1>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- End Section Title -->*/}

      {/*<!-- Section Area - Content Central -->*/}
      <section className="content-info">
        {/*<!-- Single Team Tabs -->*/}
        <div className="single-player-tabs">
          <div className="container">
            <div className="row">
              {/*<!-- Side info single team-->*/}
              <div className="col-lg-4 col-xl-3">
                <div className="item-player single-player">
                  <div className="head-player">
                    <img src="img/players/7.jpg" alt="location-team" />
                  </div>
                  <div className="info-player">
                    <span className="number-player">10</span>
                    <h4>
                      Jamez Rodriguez
                      <span>Forward</span>
                    </h4>
                  </div>
                </div>

                {/*<!-- Attack -->*/}
                <div className="panel-box">
                  <div className="titles no-margin">
                    <h4>
                      <i className="fa fa-user"></i>Personal Info
                    </h4>
                  </div>
                  <ul className="list-panel">
                    <li>
                      <p>
                        Weight <span>70 Kg</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Height <span>1.70 Mts</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Nationality <span>Colombia</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Place of Birth <span>Cucuta</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Date of Birth <span>March 5th, 1989</span>
                      </p>
                    </li>
                  </ul>
                </div>
                {/*<!-- End Attack -->*/}
              </div>
              {/*<!-- end Side info single team-->*/}

              <div className="col-lg-8 col-xl-9">
                {/*<!-- Nav Tabs -->*/}
                {/*<!-- End Nav Tabs -->*/}

                {/*<!-- Content Tabs -->*/}
                <div className="tab-content">
                  {/*<!-- Tab One - overview -->*/}
                  <div className="tab-pane active" id="overview">
                    <div className="panel-box padding-b">
                      <div className="titles">
                        <h4>Players info</h4>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 ">
                          <p>
                            The Colombia national football team (Spanish:
                            Selección de fútbol de Colombia) represents Colombia
                            in international football competitions and is
                            overseen by the Colombian Football Federation. It is
                            a member of the CONMEBOL and is currently ranked
                            thirteenth in the FIFA World Rankings.[3] The team
                            are nicknamed Los Cafeteros due to the coffee
                            production in their country.
                          </p>

                          <p>
                            Since the mid-1980s, the national team has been a
                            symbol fighting the country's negative reputation.
                            This has made the sport popular and made the
                            national team a sign of nationalism, pride and
                            passion for many Colombians worldwide.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Tab One - overview -->*/}
                </div>
                {/*<!-- Content Tabs -->*/}
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Single Team Tabs -->*/}
      </section>
    </>
  );
};

export default SinglePlayer;
