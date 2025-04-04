import React from "react";

function Birthday() {
  const imageLinks = [
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915002/PN_INFOSYS/hbd1_xrxxxc.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915002/PN_INFOSYS/hbd3_ljxqif.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915001/PN_INFOSYS/hbd2_f8ar1w.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915001/PN_INFOSYS/hbd4_yl8dis.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915011/PN_INFOSYS/hbd5_spwf9t.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915011/PN_INFOSYS/hbd6_aw5qzj.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915010/PN_INFOSYS/hbd7_fisexc.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915007/PN_INFOSYS/hbd10_wojc7p.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915005/PN_INFOSYS/hbd14_dipjxm.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915010/PN_INFOSYS/hbd8_lrvzi3.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915010/PN_INFOSYS/hbd9_hiys1o.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915006/PN_INFOSYS/hbd11_yr03og.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915005/PN_INFOSYS/hbd12_a6p2sr.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915009/PN_INFOSYS/hbd13_pu4han.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915004/PN_INFOSYS/hbd15_fc5ygi.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728915003/PN_INFOSYS/hbd16_inzzkz.png",
  ];
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Birthday Celebration</h1>
              <span>
                <a href="index.html">Home</a>
                Pninfosys
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
                <h6 className="text-center">Birthday Celebration</h6>
                <h2 className="text-center">Pninfosys Team</h2>
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
                      <a href={link}>
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

export default Birthday;
