import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/colorlogo.png";
import axios from "axios";
import toast from "react-hot-toast";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/insertMessage", formData);
      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-center",
        });
      }
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Say Hello To Us!</h1>
                <span>
                  <Link to="/">Home</Link>
                  Contact Us
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="contact-info">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="info-item">
                  <div className="icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <h4>Email Address</h4>
                  <p>
                    <a href="#">www.pninfosys.com</a>
                    <br />
                    <a href="#">support@pninfosys.com</a>
                  </p>
                  <p style={{ visibility: "hidden" }}>kuch nahi</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item">
                  <div className="icon">
                    <i className="fa fa-phone" />
                  </div>
                  <h4>Phone Number</h4>
                  <p>
                    <a href="#">+91 7000846823</a>
                    <br />
                    <a href="#">+91 7415289378</a>
                  </p>
                  <p style={{ visibility: "hidden" }}>kuch nahi</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item">
                  <div className="icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <h4>Street Address</h4>
                  <p>
                    <a href="#">
                      MIG-332
                      <br />
                      Darpan Colony,Thatipur,
                      <br />
                      Gwalior,Madhya Pradesh
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="inner-content">
                  <div className="block-heading">
                    <h4>Say Hello To Us!</h4>
                  </div>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <input
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <input
                          name="email"
                          type="email"
                          placeholder="E-Mail Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          rows={6}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="filled-button"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "Send Message Now"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner-content">
                  <div className="block-heading">
                    <h4>More Info</h4>
                  </div>
                  <img src={logo} style={{ width: 239 }} alt="Logo" />
                  <div className="row">
                    <div className="col-lg-12">
                      <p style={{ fontSize: 15, textAlign: "justify" }}>
                        PN INFOSYS provides the best service possible to its
                        customers because for us, our client’s happiness is
                        important. Whatever we choose to do, we do it an
                        exorbitant manner. PN INFOSYS Company provides a full
                        range of maintenance and compliance services for
                        Government and Commercial facilities both large and
                        small.
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <br />
                      <button type="button" className="filled-button">
                        Read More..
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="block-heading">
                    <h4>Find Us On Map</h4>
                  </div>
                  <div id="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.6287734169678!2d78.20696011434966!3d26.208751696349776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c3a3faabd5e3%3A0x88d563b9d79500ed!2sPN%20INFOSYS!5e0!3m2!1sen!2sin!4v1594718912596!5m2!1sen!2sin"
                      allowFullScreen
                      style={{
                        border: "none",
                        width: "100%",
                        height: 400,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
