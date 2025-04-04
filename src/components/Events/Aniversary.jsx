import React from "react";
import { Link } from "react-router-dom";

function Aniversary() {
  const imageLinks = [
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729151245/PN_INFOSYS/a1_hkv6lx.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729151245/PN_INFOSYS/a8_m3r8xc.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729151247/PN_INFOSYS/a9_fbdzau.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a4_xtasi3.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a2_bvppmj.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a3_cexhkb.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a5_mlvyf7.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a7_a2ugji.png",
  ];
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Aniversary Celebration</h1>
              <span>
                <Link to="/">Home</Link>
                Celebration
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
                <h6 className="text-center">Pn Infosys Celebration</h6>
                <h2 className="text-center">Company Celebration</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                {imageLinks.map((link, index) => (
                  <div
                    key={index}
                    className="col-lg-4 masonry-item all category-analysis"
                  >
                    <div className="case-item">
                      <a href={link} target className="zoom">
                        <div className="case-thumb">
                          <img src={link} alt style={{ marginTop: 0 }} />
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

export default Aniversary;
