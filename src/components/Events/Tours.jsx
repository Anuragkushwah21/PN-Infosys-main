import React from "react";

function Tours() {
  const imageLinks = [
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153203/PN_INFOSYS/ture6_ceiaif.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153202/PN_INFOSYS/ture5_ytbmsq.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153188/PN_INFOSYS/ture7_a2onko.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153180/PN_INFOSYS/ture8_qpsbd3.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153162/PN_INFOSYS/ture10_uduscl.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153162/PN_INFOSYS/ture13_bmtvjb.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153128/PN_INFOSYS/ture12_zr909k.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153124/PN_INFOSYS/ture11_bd88wg.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153121/PN_INFOSYS/ture17_nzkw7f.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153120/PN_INFOSYS/ture14_pprpwk.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153119/PN_INFOSYS/ture16_sew5jf.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153117/PN_INFOSYS/ture19_norgki.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153117/PN_INFOSYS/ture20_n5wfip.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153115/PN_INFOSYS/ture18_re8hdz.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153114/PN_INFOSYS/ture22_vwtnpy.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153114/PN_INFOSYS/ture23_jm6uu0.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153112/PN_INFOSYS/ture21_gxnhtd.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153111/PN_INFOSYS/ture25_flpasd.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153111/PN_INFOSYS/ture26_h9vewj.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153109/PN_INFOSYS/ture24_cj5env.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153107/PN_INFOSYS/ture28_h2kxpd.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153106/PN_INFOSYS/ture29_m8yki2.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153106/PN_INFOSYS/ture27_rof5mb.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153104/PN_INFOSYS/ture32_pi3t0g.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153103/PN_INFOSYS/ture33_vtzesu.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153101/PN_INFOSYS/ture30_sftnqx.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153099/PN_INFOSYS/ture35_d0fap7.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153099/PN_INFOSYS/ture36_nr8qjw.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153098/PN_INFOSYS/ture34_p0dfbc.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153096/PN_INFOSYS/ture38_kc9qtx.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153094/PN_INFOSYS/ture39_h3dylg.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153093/PN_INFOSYS/ture43_av3ouc.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153093/PN_INFOSYS/ture41_q4ulqx.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153093/PN_INFOSYS/ture47_fnmnpz.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153080/PN_INFOSYS/ture46_txmgq9.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153048/PN_INFOSYS/ture2_qltvbt.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153047/PN_INFOSYS/ture44_n5ahtf.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153045/PN_INFOSYS/ture49_nnc9bg.jpg",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153044/PN_INFOSYS/true3_r8c1xl.png",
    "https://res.cloudinary.com/dow1049t2/image/upload/v1729153044/PN_INFOSYS/ture4_oyrwdx.png",
  ];
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Company Tour's</h1>
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
                <h6 className="text-center">Enjoying Moments</h6>
                <h2 className="text-center">Pninfosys Team</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                {imageLinks.map((link, index) => (
                  <div
                    key={index}
                    className="col-lg-4 masonry-item all category-seo"
                  >
                    <div className="case-item">
                      <a href={link} target className="zoom">
                        <div className="case-thumb">
                          <img src={link} alt style={{ maxHeight: "200px" }} />
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

export default Tours;
