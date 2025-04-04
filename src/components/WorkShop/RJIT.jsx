import React from "react";

function RJIT() {
  const imgLink = [
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914165/PN_INFOSYS/rjit10_uw3amx.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914165/PN_INFOSYS/rjit9_pu9unw.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914165/PN_INFOSYS/rjit4_snukkk.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914165/PN_INFOSYS/rjit1_heqxkk.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914166/PN_INFOSYS/rjit2_kmujen.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914170/PN_INFOSYS/rjit12_tgusem.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914221/PN_INFOSYS/rjit14_z5nm44.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914221/PN_INFOSYS/rjit15_vptvmc.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914171/PN_INFOSYS/rjit16_uytstp.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914171/PN_INFOSYS/rjit13_2_m7mbj7.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914172/PN_INFOSYS/rjit17_lvyoar.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914165/PN_INFOSYS/rjit18_elwfdr.jpg",
  ];
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Workshop by Pninfosys in RJIT</h1>
              <span>
                <a href="index.html">Home</a>
                Work Shop
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
                  Rustamji Institute of Technology
                </h6>
                <h5 className="text-center">Seminar</h5>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                {imgLink.map((link, index) => (
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

export default RJIT;
