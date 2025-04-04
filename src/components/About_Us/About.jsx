import React from "react";
import { Link } from "react-router-dom";
import Technologies from "../Technologies/Technologies";
import OurTeam from "../OurTeam/OurTeam";

function About() {
  return (
    <>
      <div className="main-content">
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>About Us</h1>
                <span>
                  <Link to="/">Home</Link>
                  About Us
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="steps">
          <div className="section-heading">
            <h4 style={{ fontSize: "xx-large", textAlign: "center" }}>
              We are the best
            </h4>
            <h1
              style={{
                color: "#009df2",
                fontSize: "xxx-large",
                textAlign: "center",
              }}
            >
              For all your needs
            </h1>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="step-item">
                  <div className="item-number">
                    <h6>01</h6>
                  </div>
                  <div className="item-content">
                    <img
                      src="https://res.cloudinary.com/dow1049t2/image/upload/v1728751060/PN_INFOSYS/a1-removebg-preview_pjsffm.png"
                      alt
                    />
                  </div>
                  <br />
                  <h4
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginLeft: "7%",
                    }}
                  >
                    Consult your idea with us!
                  </h4>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step-item">
                  <div className="item-number">
                    <h6>02</h6>
                  </div>
                  <div className="item-content">
                    <img
                      src="https://res.cloudinary.com/dow1049t2/image/upload/v1728751064/PN_INFOSYS/develop_c91kvl.webp"
                      alt
                    />
                  </div>
                  <br />
                  <h4
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginLeft: "7%",
                    }}
                  >
                    We'll Develop your idea
                  </h4>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step-item">
                  <div className="item-number">
                    <h6>03</h6>
                  </div>
                  <div className="item-content">
                    <img
                      src="https://res.cloudinary.com/dow1049t2/image/upload/v1728751060/PN_INFOSYS/a3_f5tm6c.png"
                      alt
                    />
                  </div>
                  <br />
                  <h4
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginLeft: "7%",
                    }}
                  >
                    We'll Digital Market your idea.{" "}
                  </h4>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step-item">
                  <div className="item-number">
                    <h6>04</h6>
                  </div>
                  <div className="item-content">
                    <img
                      src="https://res.cloudinary.com/dow1049t2/image/upload/v1728751060/PN_INFOSYS/a4-removebg-preview_q4jicc.png"
                      alt
                    />
                  </div>
                  <br />
                  <h4
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginLeft: "7%",
                    }}
                  >
                    Client's happiness{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="about-tips"
          style={{ backgroundColor: "#00aaff", padding: "50px 0" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="section-heading"
                  style={{ marginBottom: "20px" }}
                >
                  <h6></h6>
                  <h2
                    style={{
                      color: "white",
                      fontSize: "36px",
                      fontWeight: "bold",
                    }}
                  >
                    Who &amp; We are?
                  </h2>
                </div>
                <p
                  className="text-justify text-medium"
                  style={{ color: "white", lineHeight: "1.8" }}
                >
                  We are a one-stop destination for all digital solutions, be it
                  website designing, web development, digital marketing, SEO,
                  mobile apps and full maintenance and compliance services for
                  Government and Commercial facilities both large and small. Our
                  elegant group of Developers provide their innovation who
                  transform your idea into an amazing website Design or Mobile
                  App Development while keeping every custom project unique.
                  <br />
                  <br />
                  We are part of this IT industry since 2018, we not only
                  developed products and websites but also provide internship
                  and training to students and make them capable to work in this
                  IT software industry. Our internship and training program is
                  totally based on hands-on practical experience with live
                  projects.
                  <br />
                  <br />
                  Our team of certified IT professionals services Dental
                  Offices, Medical Offices, Restaurants, Bars and all types of
                  businesses throughout the Lowcountry and the world. Our team
                  of certified IT professionals services Hospitals, Colleges,
                  Research Institutes, Schools, Restaurants, Bars and all types
                  of businesses throughout the Lowcountry and the world.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div
                  className="video-thumb"
                  style={{ position: "relative", textAlign: "center" }}
                >
                  <img
                    src="https://res.cloudinary.com/dow1049t2/image/upload/v1728751062/PN_INFOSYS/template_ueyfn6.png"
                    alt=""
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <img
                    src="https://res.cloudinary.com/dow1049t2/image/upload/v1729186313/PN_INFOSYS/playicon_f2gloz.png"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                    className="play-btn"
                    alt="Play Icon"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      cursor: "pointer",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
                <div
                  id="exampleModalCenter"
                  className="modal fade"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-body" style={{ padding: "0" }}>
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FWho-%26-We-Are%3F%2Flearn.jpg?alt=media&token=b95d388f-e1c0-457f-8835-dae0390077b7"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Technologies />
        <OurTeam/>
      </div>
    </>
  );
}

export default About;
