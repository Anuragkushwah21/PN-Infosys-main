import React from "react";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

function OurServices() {
  return (
    <>
      <div className="main-content">
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Our Services</h1>
                <span>
                  <Link to="/">Home</Link>
                  Our Services
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h5
                  className="text-justify"
                  style={{ textAlign: "center", marginTop: 31 }}
                >
                  "PN INFOSYS is a leading global business consulting and IT
                  service company. We provides a full range of maintenance and
                  compliance services for Government and Commercial facilities
                  both large and small. Whether you need to run your business
                  more efficiently or accelerate revenue growth, PN INFOSYS can
                  get you there. Our team is proficient enough to provide all
                  the IT services, which a customer needs in an affordable
                  rates. We make sure our clients are happy at the end of the
                  day."
                </h5>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728755337/3_of9hbj.jpg"
                      alt
                    />
                  </div>
                  <h4>Innovative Ideas</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728755355/1_aarmpu.jpg"
                      alt
                    />
                  </div>
                  <h4>Creative Designing</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728755357/2_etqiw6.jpg"
                      alt
                    />
                  </div>
                  <h4>Client's Happiness</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="good-tips" style={{ margin: 0 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="section-heading">
                  <h1 style={{ color: "white" }}>PN Services</h1>
                  <h4
                    className="text-justify text-align"
                    style={{ color: "white" }}
                  >
                    PN INFOSYS provides the best service possible to its
                    customers because for us, our client’s happiness is
                    important. Whatever we choose to do, we do it an exorbitant
                    manner.
                  </h4>
                </div>
                <div style={{ color: "white" }}>
                  <ul>
                    <li className="text-justify text-align">
                      PN INFOSYS Company provides a full range of maintenance
                      and compliance services for Government and Commercial
                      facilities both large and small.
                    </li>
                    <br />
                    <li className="text-justify text-align">
                      PN INFOSYS believes in developing true partnerships. We
                      foster a collegial environment where individual
                      perspectives are respected and honest dialogue is
                      expected.
                    </li>
                    <br />
                    <li className="text-justify text-align">
                      PN INFOSYS brings robust skills and forward looking
                      perspectives to solve customer challenges. We use proven
                      knowledge to make recommendations and provide expert
                      guidance to our customers.
                    </li>
                    <br />
                    <li className="text-justify text-align">
                      PN INFOSYS is driven to meet client needs with
                      determination and grit. We embrace tough challenges and do
                      not rest until the problem is solved, the right way.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="right-image">
                  <img
                    src="https://res.cloudinary.com/dow1049t2/image/upload/v1728755476/PN_INFOSYS/pnservice_srggra.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurServices;
