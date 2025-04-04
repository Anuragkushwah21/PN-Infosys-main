import React from "react";
import { Carousel } from "react-bootstrap";

const testimonialsData = [
  {
    name: "Manoj Palwaliya",
    role: "Full Stack Developer",
    message:
      "It is the best learning hub for all adamant students. It is based on a 100% practical approach. Trainees get to work on Live Projects, which strengthens their portfolio (C.V). The trainers here are very experienced and guide you through every step of the process. I would highly recommend PN Infosys to anyone serious about a career in tech.",
  },
  {
    name: "Riya Parashar",
    role: "Web Developer",
    message:
      "It is the best learning hub for all students. Best place to learn. Thank you, PN Infosys! The hands-on projects and real-world examples made a big difference in how I learned web development. The mentors are always ready to help, and I really appreciated the friendly environment.",
  },
  {
    name: "Akansha Tomar",
    role: "Full Stack Developer",
    message:
      "Best place to learn, grow, and nourish technical skills. Working on the latest technologies helped me stay up-to-date with industry trends. The real-life projects gave me the confidence to handle any work scenario after the course completion. PN Infosys also helped me build a solid portfolio.",
  },
  {
    name: "Rohit Kumar",
    role: "UI/UX Developer",
    message:
      "It's a great experience at PN Infosys. The working environment is incredible, and I gained a lot of practical exposure. The curriculum is thoughtfully designed, allowing students to stay ahead of the curve in UI/UX design. Highly recommend this institute for anyone looking to excel in their career.",
  },
  {
    name: "Vinod Chauhan",
    role: "Full Stack Developer",
    message:
      "Excellent teaching staff, hands-on experience on the latest technologies. 80% practical, 20% theory, which is a great balance. The projects were challenging but rewarding, and I now feel confident tackling any full stack job thanks to the knowledge gained here.",
  },
  {
    name: "Vipin Sharma",
    role: "Web Developer",
    message:
      "A great place to learn web designing, development, and presentation skills. The instructors at PN Infosys ensured that I understood each and every concept thoroughly. I can now build dynamic, responsive websites with ease, thanks to the skills I acquired during the training.",
  },
];
function PlacementDesk() {
  return (
    <>
      <div className="main-content">
        <div className="page-heading1">
        </div>
        <section className="steps">
          <div className="section-heading">
            <h1
              style={{
                color: "#009df2",
                fontSize: "xxx-large",
                textAlign: "center",
              }}
            >
              Welcome to our Placement Cell
            </h1>
            <h4
              className="align-justify"
              style={{ fontSize: "xx-large", textAlign: "center" }}
            >
              We are here for your bright future.
            </h4>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="step-item">
                  <div className="item-number">
                    <h6>01</h6>
                  </div>
                  <div className="item-content">
                    <h4>First Step</h4>
                    <p>Come to us...!!</p>
                  </div>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="step-item">
                  <div className="item-number">
                    <h6>02</h6>
                  </div>
                  <div className="item-content">
                    <h4>Second Step</h4>
                    <p>Learn with us..!!</p>
                  </div>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="step-item">
                  <div className="item-number">
                    <h6>03</h6>
                  </div>
                  <div className="item-content">
                    <h4>Third Step</h4>
                    <p>
                      Be a <span>JOB SEEKER</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-tips our-team-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="video-thumb">
                  <img
                    src="https://res.cloudinary.com/dow1049t2/image/upload/v1728759640/PN_INFOSYS/vj1_wzrqg1.png"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-heading">
                  <h6>Message From</h6>
                  <h2>Chairman's Desk</h2>
                </div>
                <p className="text-justify message">
                  Established in the year of 2018 .Pninfosys is the software
                  company rapidly growing in last 2 year in Gwalior. Our company
                  is not only a training centre as well it is a product based
                  company Pninfosys which was a dream few year ago has become a
                  reality and much sought after institutions in and around
                  Gwalior. <br />
                  <br />
                  It gives me a great pleasure to informing U to batch of
                  2018,19 are full placed All students reached in high paid
                  company In Delhi, indore,Bhopal I m happy to have the
                  opportunity serve in such a magnificent and a look forward to
                  helping pav the way for a bright and successful future.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-tips our-team-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading">
                  <h6>Message From</h6>
                  <h2>CEO Desk</h2>
                </div>
                <p className="text-justify message">
                  When educating the minds of our youth we must not forget to
                  educate their hearts. We focus on discovering developing and
                  drawing out the hidden talent and the magic lying Dormant
                  inside all of it's student Our future goal in clear.
                  <br />
                  <br /> We gives good quality training for our students in next
                  5year. Today dynamic world 360 degree development And grooming
                  is of supreme important and through our company. We are
                  creating an environment for future leaders , entrepreneurs and
                  professional who posses skill and aptitude in añ array of
                  functional Discipline.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="video-thumb">
                  <img
                    src="https://res.cloudinary.com/dow1049t2/image/upload/v1728759639/PN_INFOSYS/neha_1_fkzh0y.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container text-center my-5">
          <h2 className="font-weight-bold">
            What Our Students Say
          </h2>

          <Carousel
            controls={false}
            indicators={false}
            interval={3000}
            slide={true}
            pause="hover"
            className="carousel-right-to-left"
          >
            {testimonialsData.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div className="row">
                  <div className="col-12">
                    <div className="p-4">
                      <h3 className="font-weight-bold mt-4">
                        {testimonial.name}
                      </h3>
                      <h4 className="text-primary font-weight-bold my-3">
                        {testimonial.role}
                      </h4>
                      <p className="font-weight-normal">
                        <i className="fa fa-quote-left pr-2" />{" "}
                        {testimonial.message}{" "}
                        <i className="fa fa-quote-right pl-2" />
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </div>
    </>
  );
}

export default PlacementDesk;
