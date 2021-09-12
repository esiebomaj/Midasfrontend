import React, { Component } from "react";
import { Link } from "react-router-dom";

const PageFaq = () => {
  return (
    <>
      <div
        className="section-title"
        style={{ background: "url(img/midas/AlikaEmeka.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- End Section Title -->*/}

      {/*<!-- Section Area - Content Central -->*/}
      <section className="content-info">
        {/*<!-- Content Central -->*/}
        <section className="container">
          <div className="row padding-top">
            {/*<!-- Accordion -->*/}
            <div className="col-md-12">
              {/*<!-- Info -->*/}
              <div className="panel-box">
                <div className="titles no-margin">
                  <h4>
                    <i className="fa fa-coffee"></i>Answers when most needed!
                  </h4>
                </div>
                {/*<!-- Accorodion Faq -->*/}
                <div className="row">
                  <div className="accrodation">
                    {/*<!-- section 1 -->*/}
                    <span className="acc-trigger">
                      <a href="#">
                        I am above the age of 16 and want to become a
                        professional footballer; can I still join the academy?
                      </a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        First, you need to fill in an online application form on
                        this website and make sure you add all the necessary
                        data and YES you can still join MFA even though you are
                        already above the age of 16 as long as you have not
                        celebrated your 19th birthday yet. We expect our academy
                        players to graduate at the age of 18 but we also believe
                        there are some late bloomers who didn’t start early but
                        willing to work hard to make their dream a reality.
                      </div>
                    </div>

                    {/*<!-- section 2 -->*/}
                    <span className="acc-trigger">
                      <a href="#">Where is the academy located?</a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        The academy is located at Gospel Camp Ground, Command
                        Ipaja, Lagos. This is where we train and operate at the
                        moment as we work on our own permanent facility which
                        will be ready soon.
                      </div>
                    </div>

                    {/*<!-- section 3 -->*/}
                    <span className="acc-trigger">
                      <a href="#">
                        I am based outside Lagos, is it possible for me to join
                        the academy?
                      </a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        Yes. We assist players outside of Lagos in need of a
                        place to stay at their own expenses. Kindly reach out to
                        our head Coach Emeka on 08022595194 regarding
                        accommodation. This is because we are working on the
                        academy permanent home.
                      </div>
                    </div>

                    {/*<!-- section 4 -->*/}
                    <span className="acc-trigger">
                      <a href="#">What is the training time for the academy?</a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        Our team train on Mondays, Tuesdays, Wednesdays and
                        Fridays from 7am. We participate in Youth International
                        Tournaments every year as well as the Ikeja
                        Developmental League along with other tournaments.
                      </div>
                    </div>

                    {/*<!-- section 5 -->*/}
                    <span className="acc-trigger">
                      <a href="#">How can I register?</a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        To be a part of the team, you can download and fill the
                        application form on this website and pay all the
                        necessary fees. You will then come with your payment
                        teller before resuming training with the academy. You
                        can also contact Midas football academy on any of the
                        contact lines provided on the website.Pellentesque
                        habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Vestibulum tortor quam, feugiat
                        vitae, ultricies eget, tempor sit amet, ante. Donec eu
                        libero sit amet quam egestas semper. Aenean ultricies mi
                        vitae est. Mauris placerat eleifend leo. Quisque sit
                        amet est et sapien ullamcorper pharetra. Vestibulum erat
                        wisi, condimentum sed, commodo vitae, ornare sit amet,
                        wisi. Aenean fermentum, elit eget tincidunt condimentum,
                        eros ipsum rutrum orci, sagittis tempus lacus enim ac
                        dui. Donec non enim in turpis pulvinar facilisis. Ut
                        felis. Praesent dapibus, neque id cursus faucibus,
                        tortor neque egestas augue, eu vulputate magna eros eu
                        erat. Aliquam erat volutpat.
                      </div>
                    </div>

                    {/*<!-- section 6 -->*/}
                    <span className="acc-trigger">
                      <a href="#">How much is the registration fee?</a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        Our fee at the moment is NGN77,000 for a full season (12
                        months) it covers training, medicals, 1 training jersey
                        and 1 ceremonial jersey. The fee is the most affordable
                        you can find anywhere in Nigeria compare to the amount
                        of value we provide.
                      </div>
                    </div>

                    {/*<!-- section 7 -->*/}
                    <span className="acc-trigger">
                      <a href="#">
                        People say that I am too small for football?
                      </a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        For any football player to be successful in the game,
                        you do not have to be the biggest, strongest, or fastest
                        to be successful. At youth level many players have not
                        fully developed and still have time to grow in height.
                        On the other hand mentally a positive attitude goes a
                        long way in helping not only your game, but your
                        teammates as well. For any young footballers there are
                        other aspects which have to be monitored in order to
                        succeed so size does not really matter.
                      </div>
                    </div>

                    {/*<!-- section 8 -->*/}
                    <span className="acc-trigger">
                      <a href="#">How do I become the best of my age group?</a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        Playing football at any professional level requires hard
                        work, if signing a professional contract is the young
                        players aim, then the hard work will be worthwhile. Hard
                        work includes working on different parts of your game,
                        such as fitness, technique, tactical awareness and other
                        aspects of the game which aren’t your strongest in order
                        to become a better player and stand out.
                      </div>
                    </div>

                    {/*<!-- section 9 -->*/}
                    <span className="acc-trigger">
                      <a href="#">How do I reach the top?</a>
                    </span>
                    <div className="acc-container" style={{ display: "none" }}>
                      <div className="content">
                        As professional football can be a relatively short
                        career players need to be at their best abilities at all
                        times in order for them to be recognized and not
                        replaced by other players at youth level. This requires
                        focus and not being distracted by the surrounding
                        environment. To stay at the top of your game you need to
                        work hard on a daily basis and improve on all aspects of
                        your game. This requires learning new things and new
                        ways of training in order to improve yourself physically
                        and mentally.
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- End Accorodion Faq -->*/}
              </div>
              {/*<!-- End Info-->*/}
            </div>
            {/*<!-- End Accordion -->*/}
          </div>
        </section>
        {/*<!-- End Content Central -->*/}
      </section>
      {/*<!-- End Section Area -  Content Central -->*/}

      <div className="content-instagram">
        <div id="instafeed"></div>
      </div>
    </>
  );
};

export default PageFaq;
