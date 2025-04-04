import React from "react";
import { Link } from "react-router-dom";
import elearning from "../../assets/images/e-learning.png";

function Index() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Training</h1>
              <span>
                <Link to="/">Home</Link>
                Training
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="good-tips" style={{ margin: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h1 style={{ color: "white" }}>Helping Hands</h1>
                <br />
                <p
                  className="text-justify align-justify"
                  style={{ color: "white" }}
                >
                  We have capability to train even novice students, students who
                  don’t have any experience with coding can work efficiently in
                  our training sessions. We need only adamant students who are
                  disciplined enough to pay attention and have that urge in them
                  for learning new things. You will have the experience to work
                  on Live Projects, which will ameliorate your portfolio.
                  Basically through these training sessions, we want to help
                  students to grow, Our training sessions are helping hands for
                  adamant students.
                </p>
              </div>
              <div className="tips-content" />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-image">
                <img src={elearning} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recent-cases">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h4 style={{ fontSize: "xx-large" }}>What will you</h4>
                <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                  Learn
                </h1>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-filters" />
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                <div className="col-lg-4 masonry-item all category-analysis">
                  <div className="case-item">
                    <a href="single-project.html">
                      <div className="case-thumb">
                        <img
                          src="https://res.cloudinary.com/dow1049t2/image/upload/v1728756304/PN_INFOSYS/case3_zwoux0.jpg"
                          alt
                        />
                      </div>
                      <div className="down-content">
                        <h4>
                          Learn HTML, CSS, JAVASCRIPT, BOOTSTRAP, WORDPRESS
                        </h4>
                        <span>45 Days to Complete</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-seo">
                  <div className="case-item">
                    <a href="single-project.html">
                      <div className="case-thumb">
                        <img
                          src="https://res.cloudinary.com/dow1049t2/image/upload/v1728756317/PN_INFOSYS/traning_case1_phriws.jpg"
                          alt
                        />
                      </div>
                      <div className="down-content">
                        <h4>Learn MYSQL, CORE PHP , OPS, LARAVEL</h4>
                        <span>60 Days to Complete</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-digital">
                  <div className="case-item">
                    <a href="single-project.html">
                      <div className="case-thumb">
                        <img
                          src="https://res.cloudinary.com/dow1049t2/image/upload/v1728756315/PN_INFOSYS/traning_case2_myk1vl.jpg"
                          alt
                        />
                      </div>
                      <div
                        className="down-content"
                        style={{ paddingBottom: 2 }}
                      >
                        <h4>
                          Javescript, Angular, React Js, Node Js, React Native,
                          Restfull API, Mongo DB, Git, AWS{" "}
                        </h4>
                        <span>90 Days to Complete</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h4 style={{ fontSize: "xx-large" }}>Internship</h4>
          <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
            Experience
          </h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon" style={{ paddingTop: 15 }}>
                  <img
                    src="https://res.cloudinary.com/dow1049t2/image/upload/v1728756312/PN_INFOSYS/traning_banner_small_vbnvoz.png"
                    alt
                  />
                </div>
                <h4>100% Practical Training</h4>
                <p>
                  We don't use paper and pencil at all in our training sessions.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/dow1049t2/image/upload/v1728756305/PN_INFOSYS/traning_office_work_6_csngee.png"
                    alt
                    style={{ maxWidth: 154 }}
                  />
                </div>
                <h4>Live Projects</h4>
                <p>
                  We make you work on Live projects, in order to strengthen your
                  portfolio.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/dow1049t2/image/upload/v1728756306/PN_INFOSYS/traning_laptop_3_dlrqa7.png"
                    alt
                    style={{ maxWidth: 128 }}
                  />
                </div>
                <h4>Innovative Ideas</h4>
                <p>
                  We always inbuilt innovation in our training sessions, to
                  learn something new.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
}

export default Index;
