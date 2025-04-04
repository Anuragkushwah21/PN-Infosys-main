import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    axios
      .get('https://pninfosysbackend.onrender.com/api/getAllPortfolio')
      .then((response) => {
        setPortfolioItems(response.data.allPortfolio); // Assuming the API returns an array of portfolio objects
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching portfolio items:', error);
        setError('Failed to load portfolio items. Please try again later.');
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
      <section className="portfolio-page-second-version">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h4 style={{ fontSize: 'xx-large' }}>Our</h4>
                <h1 style={{ color: '#009df2', fontSize: 'xxx-large' }}>
                  Portfolio
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            {portfolioItems.map((item, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="case-item">
                  <div className="case-thumb">
                    <img
                      src={item.image.url} // Assuming API provides `src` for the image URL
                      alt={item.title} // Fallback to `title` if `alt` is missing
                      className="img-fluid"
                      style={{
                        height: '300px',
                        objectFit: 'cover',
                        width: '100%',
                      }}
                    />
                    <div className="hover-effect">
                      <div className="hover-content">
                        <a href="#/none">
                          <i className="fa fa-search" />
                        </a>
                        <a href={item.link}>
                          <i className="fa fa-link" />
                        </a>
                        <h3 style={{ color: 'white' }}>{item.title}</h3>
                        <h5 style={{ color: 'white' }}>{item.city}</h5>
                      </div>
                    </div>
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

export default Portfolio;
