import React, { useEffect, useState } from "react";
import axios from "axios";

function EventsHome() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    axios
      .get("/api/getAllEvent")
      .then((response) => {
        setEvents(response.data.allEvent); // Assuming the API returns an array of event objects
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <section className="recent-cases">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h4 style={{ fontSize: "xx-large" }}>News</h4>
              <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                Events
              </h1>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              {events.map((item, index) => (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <div
                    className="case-item d-flex flex-column"
                    style={{ height: "100%" }}
                  >
                    <a href="#/none">
                      <div className="case-thumb">
                        <img
                          src={item.image.url} // Assuming the API provides an `imgSrc` field
                          alt={item.title}
                          className="img-fluid"
                        />
                      </div>
                    </a>
                    <div className="down-content d-flex flex-column flex-grow-1">
                      <a href="#/none">
                        <h4>{item.title}</h4>
                        <ul
                          className="list-unstyled"
                          style={{ color: "black", fontSize: "12px" }}
                        >
                          <li>{item.description}</li>
                        </ul>
                      </a>
                      <a
                        className="btn btn-xs px-1 btn-primary mt-auto"
                        href="#/none"
                      >
                        Read more...
                      </a>
                    </div>
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

export default EventsHome;
