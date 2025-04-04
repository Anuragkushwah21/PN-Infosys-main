import React, { useState, useEffect } from "react";
import axios from "axios";

function Technologies() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [technologies, setTechnologies] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get("/api/getAllTechnology");
        // console.log(response.data)
        setTechnologies(response.data.allTechnology); // Assuming response data is an array of technologies
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchTechnologies();
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filterClasses = (category) => {
    return activeFilter === "*" || activeFilter === category
      ? "d-block"
      : "d-none";
  };

  return (
    <>
    <section className="recent-cases">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h4 style={{ fontSize: "xx-large" }}>Technologies</h4>
              <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                We work on..
              </h1>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="portfolio-filters">
              <ul>
                <li
                  onClick={() => handleFilterClick("*")}
                  className={activeFilter === "*" ? "active" : ""}
                >
                  Show All
                </li>
                <li
                  onClick={() => handleFilterClick("web_design")}
                  className={activeFilter === "web_design" ? "active" : ""}
                >
                  Web Designing
                </li>
                <li
                  onClick={() => handleFilterClick("web_dev")}
                  className={activeFilter === "web_dev" ? "active" : ""}
                >
                  Web Development
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row masonry-layout filters-content normal-col-gap">
          {technologies.map((tech) => (
            <div
              key={tech.id} // Assuming each technology has a unique `id`
              className={`col-lg-3 col-md-6 masonry-item ${tech.category} ${filterClasses(
                tech.category
              )}`}
            >
              <div className="case-item"> 
                <div className="case-thumb">
                  <img
                    src={tech.image.url} // Assuming API provides `imageUrl`
                    alt={tech.title} // Assuming API provides `name`
                    style={{ height: "200px" }}
                  />
                </div>
                <div className="down-content">
                  <h4>{tech.title}</h4>
                  <span>{tech.description}</span> {/* Assuming API provides `description` */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Technologies;
