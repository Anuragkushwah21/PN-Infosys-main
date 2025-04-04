import React from "react";
import { Link } from "react-router-dom";

function Prestige() {
  const imagelink = [
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729169427/PN_INFOSYS/img6_xpygv9.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729169427/PN_INFOSYS/img1_esrn7l.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729169426/PN_INFOSYS/img5_cnfkv4.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729169426/PN_INFOSYS/img2_ruyqjp.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729169425/PN_INFOSYS/img3_cf6d9d.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729169425/PN_INFOSYS/img4_nofmwa.jpg",
  ];
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Prestige Institute of Management & Research, Gwalior</h1>
              <span>
                <Link to="/">Home</Link>
                WorkShop
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="recent-cases portfolio-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h6 className="text-center">
                  Prestige Institute of Management & Research, Gwalior
                </h6>
                <h5 className="text-center">WorkShop</h5>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                {imagelink.map((link, index) => (
                  <div
                    key={index}
                    className="col-lg-4 masonry-item all category-analysis"
                  >
                    <div className="case-item">
                      <a href={link} target className="zoom">
                        <div className="case-thumb">
                          <img
                            src={link}
                            alt
                            style={{ marginTop: 0, height: "250px" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prestige;
