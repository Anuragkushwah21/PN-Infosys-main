import React, { useEffect } from "react";
import training from "../../assets/images/training.png";
import collaborative1 from "../../assets/images/collaborative1.jpg";
import thinking from "../../assets/images/thinking.png";
import dedication from "../../assets/images/dedication.jpg";
import banner2 from "../../assets/images/banner2.png";
import learning from "../../assets/images/learning.png";
import elearning from "../../assets/images/e-learning.png";
import Technologies from "../Technologies/Technologies";
import Portfolio from "../Portfolio/Portfolio";
import EventsHome from "../Events/EventsHome";
import Popup from "../Layouts/Popup";

function Home() {
  useEffect(() => {
    // Check localStorage to determine if the modal has been shown before
    const modalShown = localStorage.getItem("isModalShown");
    if (!modalShown) {
      const modalElement = document.getElementById("popup");
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
        localStorage.setItem("isModalShown", "true"); // Corrected key for consistency
      }
    }
  }, []);

  return (
    <>
     <Popup/>
      {/* section one */}
      <div className="main-content">
        <div className="parallax-banner">
          <div className="inner-header">
            <div className="inner-content">
              <h4 style={{ textShadow: "0px 0px 5px #000000" }}>
                what are you waiting for?
              </h4>
              <h1 style={{ textShadow: "0px 0px 5px #000000" }}>
                Our PN Infosys
                <br /> We're ready to help you grow!.
              </h1>
              <div className="main-decoration">
                <img src={banner2} alt style={{ width: "50%" }} />
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
              className="waves"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* section two */}
      <section className="features" style={{ marginTop: 45 }}>
        <p class="lead text-center fs-6 fs-md-5 fs-lg-4 px-1">
          PN INFOSYS is a leading global business consulting and IT service
          company, Whether you need to run your business more efficiently or
          accelerate revenue growth, PN INFOSYS can get you there.
        </p>
        <div className="container-fluid" style={{ width: "95%" }}>
          <div className="row">
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img src={collaborative1} alt />
                </div>
                <h4>
                  Collaborative
                  <br /> Spirit
                </h4>
                <p>
                  We believe in developing true partnerships and making clients
                  happy.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img src={thinking} alt />
                </div>
                <h4>
                  Expert
                  <br /> Thinking
                </h4>
                <p>
                  We brings robust skill and forward looking perspectives to
                  solve customer challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img src={dedication} alt />
                </div>
                <h4>Exorbitant Dedication</h4>
                <p>
                  PN Infosys is driven to meet client needs with determination
                  and grit. We embrace tough challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img src={training} alt />
                </div>
                <h4>
                  Industrial <br />
                  Training
                </h4>
                <p>
                  We provide free Industrial Internship to novice
                  undergratuates. Basically our aim is to help students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section three */}
      <section className="good-tips">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>
                  Learning environment,Free Internship to novice students.
                </h2>
              </div>
              <div className="tips-content">
                <ul>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>WEB DESIGNING</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>WEB DEVELOPMENT</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-mobile"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>APP DEVELOPMENT</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>ANGULAR, PYTHON, DJANGO, LARAVEL</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-image">
                <img src={learning} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* technology */}
      <Technologies />
      {/* portfolio */}
      <Portfolio />
      {/* service */}
      <section className="good-tips">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={{ textAlign: "center", color: "white" }}>
                Our Services
              </h1>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading" />
              <div className="tips-content">
                <ul>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-lightbulb-o"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>INNOVATIVE Ideas</h4>
                      <p className="align-justify">
                        PN INFOSYS believes in developing true partnerships. We
                        foster a collegial environment where individual
                        perspectives are respected and honest dialogue is
                        expected.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-server"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>CREATIVE Designing</h4>
                      <p className="align-justify">
                        PN INFOSYS brings robust skills and forward looking
                        perspectives to solve customer challenges. We use proven
                        knowledge to make recommendations and provide expert
                        guidance to our customers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-users"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>CLIENT'S Happiness</h4>
                      <p className="align-justify">
                        PN INFOSYS is driven to meet client needs with
                        determination and grit. We embrace tough challenges and
                        do not rest until the problem is solved, the right way.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-tasks"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>FULL Maintenance</h4>
                      <p className="text-justify text-align">
                        PN INFOSYS Company provides a full range of maintenance
                        and compliance services for Government and Commercial
                        facilities both large and small.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-bullseye"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>PRACTICAL Training</h4>
                      <p className="align-justify">
                        We don't use paper and pencil at all in our training
                        sessions.We are provided only practical work at training
                        class session.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-image">
                <img src={elearning} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* events */}
      <EventsHome />
     
    </>
  );
}

export default Home;
