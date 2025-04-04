import React from "react";
import { Link } from "react-router-dom";

function Xiaomi_Mi_Company() {
  const imgLink = [
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757357/PN_INFOSYS/workshop_vaibhav1_rlga53.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757354/PN_INFOSYS/mi2_bja4yx.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757351/PN_INFOSYS/workshop_vaibhav3_myv7tf.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757348/PN_INFOSYS/workshop_vaibhav4_ijiaw4.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757346/PN_INFOSYS/mi5_v7fvon.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757343/PN_INFOSYS/mi6_reowcl.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757340/PN_INFOSYS/workshop_vaibhav7_dztrw5.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757336/PN_INFOSYS/mi8_bpehxq.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757336/PN_INFOSYS/workshop_vaibhav9_volpga.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1728757375/PN_INFOSYS/workshop_vaibhav10_odlwky.png",
  ];
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Xiaomi Mi Company</h1>
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
                <h6 className="text-center">Xiaomi WorkShop</h6>
                <h5 className="text-center">
                  WorkShop by our seniour Advisor Mr.Vaibhav Shrivastav
                </h5>
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
                      <a href={link} className="zoom">
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

export default Xiaomi_Mi_Company;
