import React, { Component } from "react";

import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <>
      <div className="section-title-team">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="row">
                <div className="col-md-3">
                  <img src="img/midas/MFA logo PNG1.png" alt="" />
                </div>

                <div className="col-md-9">
                  <h1>Midas Football Academy Team</h1>
                  <ul className="general-info">
                    <li>
                      <h6>
                        <strong>Foundation:</strong> 2006
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <strong>President/CEO:</strong> Bayonle Arashi
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <strong>Manager:</strong> Njoku Chukwuemeka Felix
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <strong>Location:</strong> Lagos, Nigeria
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <a
                          href="https:midasfootballacademy.com"
                          target="_blank"
                        >
                          www.midasfootballacademy.com
                        </a>
                      </h6>
                    </li>
                  </ul>

                  <ul className="social-teams">
                    <li>
                      <div>
                        <a
                          href="https://facebook.com/midasfootballacademy"
                          className="facebook"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <a
                          href="https://twitter.com/midasfanigeria"
                          className="twitter-icon"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <a href="#" className="youtube">
                          <i className="fa fa-youtube"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-image-team"
          style={{
            background: "url(img/midas/socialwork.jpg)",
          }}
        ></div>
      </div>
      {/* <!-- End Section Title -->*/}

      {/* <!-- Section Area - Content Central -->*/}
      <section className="content-info">
        {/* <!-- Single Team Tabs -->*/}
        <div className="single-team-tabs">
          <div className="container">
            <div className="row">
              {/* <!-- Left Content - Tabs and Carousel -->*/}

              {/* <!-- Tab One - overview -->*/}
              <div className="tab-pane active" id="overview">
                <div className="container paddings-mini">
                  {/* <!-- Content Text-->*/}
                  <div className="panel-box padding-b">
                    <div className="titles">
                      <h4>Meet the team</h4>
                    </div>

                    <div className="row padding-top-mini">
                      <div className="col-md-4">
                        <img
                          className="img-responsive"
                          src="img/midas/emekanjoku.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <h3>
                          <b>NJOKU CHUKWUEMEKA FELIX</b>
                        </h3>
                        <h5>
                          <b>Head Coach and Manager</b>
                        </h5>
                        <p>
                          Coach Njoku Chukwuemeka Felix career objective is to
                          pursue and develop a professional career in a
                          reputable organization using my potential to add value
                          in order to achieve corporate goal. He joined Midas
                          football academy as a young and aspiring coach in 2011
                          and became the head coach and manager in 2015.
                        </p>
                        <p>
                          Coach Emeka won the famous Abesan cup championship for
                          Midas football academy in 2013 and has successfully
                          developed some talents for the academy that have gone
                          on to play in United States colleges and third
                          division soccer league. He is also involved in
                          development of young players who now ply their trade
                          with Nigeria national league teams and the Nigeria
                          professional league teams. He has won some local
                          tournament as a coach at different categories U-8,
                          U-10, U-12, U-15 and open age. Coach Emeka earned his
                          advance certificate in coaching and training from the
                          national institute for sports in 2016 and a diploma
                          from fcaan alongside his high school diploma.
                        </p>
                        <p>
                          Coach Emeka core competence includes effective and
                          good communication skills, good sense of service, and
                          significant attention to details, prioritization and
                          time management skill, good administrative skills,
                          strong analytical ability and ability to teach
                          effectively. He is very passionate about helping the
                          youngsters become the best version and to become
                          successful football players. Coach Emeka’s mentor is
                          former Manchester United legend Sir Alex Ferguson.
                        </p>
                        <p>
                          His hobbies are Traveling, reading, watching football
                          games. You can reach him directly on: +2348022595194
                        </p>
                      </div>
                    </div>

                    <div className="row padding-top-mini">
                      <div className="col-md-4">
                        <img
                          className="img-responsive"
                          src="img/midas/marcus.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <h3>
                          <b>UBONG MARCUS AKPAN</b>
                        </h3>
                        <h5>
                          <b>MFA South-South Representative (NG)</b>
                        </h5>
                        <p>
                          Marcus was appointed the exclusive South-South
                          Representative of the academy in 2017 after a long
                          consultation; he is a lover of football as he feels
                          the sport is a perfect balance of mental and physical
                          fitness. In his word, he also believes football has
                          its own language.
                        </p>
                        <p>
                          You don't have to speak or dress a certain way or even
                          know the same language communicate with another
                          football fan or a football player. He is helping the
                          academy to scout for talents across the South-South
                          area of Nigeria and show them the right path to help
                          them grow and become a professional player or be
                          useful to themselves as an adult.
                        </p>
                        <p>You can reach him directly on: +2348176019417.</p>
                      </div>
                    </div>

                    <div className="row padding-top-mini">
                      <div className="col-md-4">
                        <img
                          className="img-responsive"
                          src="img/midas/ceo.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <h3>
                          <b>BAYONLE ARASHI</b>
                        </h3>
                        <h5>
                          <b>CEO</b>
                        </h5>
                        <p>
                          Bayonle Arashi is a passionate media and soccer
                          professional with extensive experience in the areas of
                          communications, TV & Radio production, social media
                          marketing, sports events organization and operations.
                          A certified U.S soccer federation referee and member
                          of International Sports Press Association (AIPS).
                        </p>
                        <p>
                          He founded Midas Football Academy in Nigeria setup to
                          discover and develop young football players; the
                          Academy has participated and won International youth
                          tournaments in Germany, Denmark, Israel, South Africa
                          as well as some local tournament in Nigeria. MFA is
                          still producing exciting young talents with plans to
                          build a football facility where the players can
                          combine high school education and soccer to reach
                          their full potential.
                        </p>
                        <p>
                          Arashi has over A decade experience in broadcasting
                          having worked with Murhi International Group owners of
                          (MiTV and Star FM) & Daar Communications Plc. owners
                          of Africa Independent Television (AIT and Raypower FM)
                          all in Nigeria. He registered his first company in
                          2007 before resigning from the services at Daar
                          communications in 2009.
                        </p>
                        <p>
                          Bayonle covered the Africa Cup of Nations in Tunisia
                          2004, Egypt 2006, Ghana 2008 the FIFA World Cup in
                          Germany 2006 and South Africa 2010 as a volunteer
                          broadcaster working as a vision mixer and match day
                          director.
                        </p>
                        <p>
                          His works has been featured on Multichoice TV channel
                          in South Africa and was an analyst on Nigeria's
                          television channel during the 2014 FIFA world cup in
                          Brazil. He produced FOOTBALL AFRI, a thirty (30)
                          minutes television magazine show that aired on 3
                          Nigeria TV channels for 2 years and also created
                          SPORTS TANGO a sports quiz show on Faaji FM radio in
                          Lagos. He currently hosts Timeless Soccer on
                          Millennium Broadcasting Channel Houston Texas and
                          double as the head of sport and broadcast manager for
                          the TV channel. Bayonle has a weekly soccer vlog on
                          YouTube where he highlights latest news and happenings
                          around the world of the beautiful game.
                        </p>
                        <p>
                          He is the Founder of Scoutballers a recruiting
                          platform that assist soccer players of African descent
                          to find opportunities and college scholarship to study
                          and play in USA, Canada, Europe and Asia. He pitched
                          the scoutballers soccer recruiting idea in front of
                          over 200 people in Los Angeles in July 2015 during the
                          annual Dohagoals conference. Bayonle is the author of
                          not yet released book ROAD MAP TO A SUCCESSFUL SOCCER
                          CAREER. Follow on twitter, Instagram and Facebook:
                          @midassoccer.
                        </p>
                      </div>
                    </div>
                    {/* <!-- White Space -->*/}
                    <div className="section-info">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="text-center">
                              <h5>
                                {" "}
                                <span className="text-resalt">
                                  IF YOU ARE INTERESTED
                                </span>{" "}
                                in becoming a scout or state representative for
                                our academy or you have discovered a rare gem of
                                a football player, kindly reach out to us with
                                your information and we will consider your
                                interest.
                              </h5>
                              <p>
                                Send email to{" "}
                                <b>info@midasfootballacademy.com</b> or send a
                                WhatsApp message only to <b>+2348033769034.</b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- White space -->*/}
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

export default OurTeam;
