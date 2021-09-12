import React, { Component } from "react";
import { Link } from "react-router-dom";

const PageRegister = () => {
  return (
    <>
      <div
        className="section-title"
        style={{ background: "url(img/midas/slide3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Join Midas Football Academy</h1>
              <p>
                Be part of the next generation of big stars and talents in the
                world of football.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section Title -->*/}

      {/* <!-- Section Area - Content Central -->*/}
      <section className="content-info">
        <div className="container paddings">
          {/* <!-- Content Text-->*/}
          <div className="panel-box padding-b">
            <div className="titles">
              <h4>Why Join Midas?</h4>
            </div>

            <div className="info-panel">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    You will have the opprtunity of playing in defferent local
                    and international competitions in Nigeria and abroad.
                  </p>
                  <p>
                    You have a chance of playing for Nigeria (or your country)
                    national team in different age grade competitions and go on
                    to become a professional player.
                  </p>
                  <p>
                    Once you have become a member of our academy, your profile
                    will be available to football clubs, football scouts and
                    football agents to view. Our established relationship with
                    hiigh profile contacts mean your information will be viewed
                    by some of the most influential people in football from
                    across the world.
                  </p>
                  <p>
                    All members will also be invited to play in regular trial
                    matches around the world. This will give you the opportunity
                    to show the clubs, scouts and agents your ability.
                  </p>
                  <p>
                    As a members of this cademy, you will have the opportunity
                    to play in front of international football representatives
                    from around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Item Table-->*/}
          <div className="col-lg-12">
            <div className="item-price">
              <h3>Standard</h3>
              <div className="price">
                <sup>₦</sup>
                <span>77,000</span>
              </div>
              <ul className="features">
                <li>
                  {" "}
                  <em>is made up of the following</em>{" "}
                </li>
                <li> Application Form: ₦5,000.00</li>
                <li>
                  {" "}
                  Compulsory Academy Uniform/Ceremonial Dress: ₦5,000.00 (per
                  pair)
                </li>
                <li> Compulsory Academy Training Jersey: ₦5,000.00</li>
                <li> Compulsory Coaching Fee: ₦35,000.00 (per annum)</li>
                <li> Compulsory ID Card: ₦2,000.00</li>
                <li> Compulsory Medical Fee: ₦15,000.00 (per annum)</li>
                <li> Project Fee: ₦10,000.00</li>
                <li> Camp Fee: ₦0.00</li>
              </ul>
              <h6>
                Our fee is one of the cheapest in Nigeria compared to the
                highest level of exposure we give our players. Make your payment
                through the following Bank account:
              </h6>
              <div className="col-md-12">
                <div className="item-boxed-service">
                  <h3>Bank: Keystone Bank Plc</h3>
                  <h3>Acc. Name: Midas Football Academy</h3>
                  <h3>Acc Number: 1000960956</h3>
                </div>
              </div>
              <h6>
                Payment teller should be shown to the Team Manager or Head Coach
                for approval before resuming training with the team.
              </h6>
              <h6>
                Note: All the payments MUST be made through the Bank Account
                displayed above.
              </h6>
              <h6>
                The team currently train at Ikola pitch behind Army Resettlement
                Centre, Ikola, Ipaja Lagos on Mondays, Wednesdays and Fridays
                from 7am.
              </h6>
            </div>
            {/* <!-- End Item Table-->*/}
          </div>
          <div className="panel-box block-form">
            <div className="titles text-center">
              <h4>Join Midas Football Academy</h4>
            </div>

            <div className="info-panel">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="lead">
                    Please fill the form below and submit for a chance to join
                    MFA.
                  </p>
                </div>
              </div>

              <form className="form-horizontal form-theme padding-top-mini">
                <div className="form-group">
                  <label className="control-label col-sm-2">Full Name</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Type your name"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Email Address
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Phone number</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="form-control"
                      placeholder="Your phone number"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Date Of Birth
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      id="erdate"
                      name="erdate"
                      className="form-control"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Sex</label>
                  <div className="col-sm-10">
                    <select
                      id="ersex"
                      name="ersex"
                      className="form-control"
                      required=""
                    >
                      <option value="">Select Sex</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Address</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="form-control"
                      placeholder="Type your address"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Height</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="height"
                      name="height"
                      className="form-control"
                      placeholder="Your height"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Weight</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      className="form-control"
                      placeholder="Your weight"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Dominant foot
                  </label>
                  <div className="col-sm-10">
                    <select
                      id="foot"
                      name="foot"
                      className="form-control"
                      required=""
                    >
                      <option value="">Select dominant foot</option>
                      <option value="Male">Right</option>
                      <option value="Female">Left</option>
                      <option value="Female">Both</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Prefered position
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="position"
                      name="position"
                      className="form-control"
                      placeholder="Your prefered position"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">current team</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="ercn"
                      name="ercn"
                      className="form-control"
                      placeholder="Type your team name"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Your biggest dream
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      id="erdesc"
                      name="erdesc"
                      className="form-control"
                      placeholder="Type biggest dream"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Other career</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="ercareer"
                      name="ercareer"
                      className="form-control"
                      placeholder="Type other career of interest"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Highest educational qualification
                  </label>
                  <div className="col-sm-10">
                    <select
                      id="foot"
                      name="foot"
                      className="form-control"
                      required=""
                    >
                      <option value="">
                        Select highest education attained
                      </option>
                      <option value="Male">O-level</option>
                      <option value="Female">OND</option>
                      <option value="Female">HND</option>
                      <option value="Female">Bachelors degree</option>
                      <option value="Female">Masters degree</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Headshot</label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      id="myFile"
                      name="myFile"
                      className="form-control"
                      placeholder="Upload a headshot"
                      required=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p className="lead">
                      <b>References</b>
                    </p>
                    <p>
                      Please provide two (2) references. One must be a
                      Government worker or a business owner and must be
                      verifiable.
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Reference 1 Full name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your reference full name"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Relationship</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="text"
                      name="text"
                      className="form-control"
                      placeholder="Relationship with reference 1"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Contact</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      className="form-control"
                      placeholder="Reference 1 phone number"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">
                    Reference 2 Full name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your reference full name"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Relationship</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="text"
                      name="text"
                      className="form-control"
                      placeholder="Relationship with reference 2 "
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Contact</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      className="form-control"
                      placeholder="Reference 2 phone number"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="offset-sm-2 col-sm-10">
                    <input
                      type="submit"
                      value="submit"
                      className="bnt btn-iw"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- End Content Text-->*/}
        </div>
      </section>
    </>
  );
};

export default PageRegister;
