import React from "react";

function BentChair() {
  const imgLink = [
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914447/PN_INFOSYS/office1_poojsi.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914448/PN_INFOSYS/office10_fykkki.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914445/PN_INFOSYS/office9_hvslca.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914445/PN_INFOSYS/office6_zpgdrb.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914445/PN_INFOSYS/office8_jo5x2b.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914446/PN_INFOSYS/office15_aynba4.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914446/PN_INFOSYS/office17_wkfvxd.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914447/PN_INFOSYS/office16_awdnpn.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728914447/PN_INFOSYS/office18_nkuxvj.jpg",
  ];
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>BentChair Company</h1>
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
                <h6 className="text-center">BentChair WorkShop </h6>
                <h2 className="text-center">
                  Workshop by our senior Advisor Mr.Niket Bansal
                </h2>
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
                          <img
                            src={link}
                            alt="ffice1.jpg"
                            style={{ marginTop: 0 }}
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

export default BentChair;
