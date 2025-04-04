import React from "react";

function MPCT() {
  const imageLink = [
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913904/PN_INFOSYS/mpct1_bxuzdl.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913906/PN_INFOSYS/mpct2_qxuzjs.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913906/PN_INFOSYS/mpct3_rk2k2y.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913906/PN_INFOSYS/mpct5_yfjb3k.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913904/PN_INFOSYS/mpct13_r3yxaw.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913904/PN_INFOSYS/mpct17_yox9ap.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913905/PN_INFOSYS/mpct14_gykth4.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913906/PN_INFOSYS/mpct15_vk1kne.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913904/PN_INFOSYS/mpct16_swptz7.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913904/PN_INFOSYS/mpct17_yox9ap.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913905/PN_INFOSYS/mpct18_wi8lvi.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728913904/PN_INFOSYS/mpct19_xr4ggk.jpg",
  ];
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Workshop by Pninfosys in MPCT</h1>
              <span>
                <a href="index.html">Home</a>
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
                  Workshop of web designing and development by Mr Vikas Jain
                </h6>
                <h2 className="text-center">
                  Workshop of Web Designing &amp; Web Development
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                {imageLink.map((link, index) => (
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

export default MPCT;
