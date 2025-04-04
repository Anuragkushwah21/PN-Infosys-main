import React, { useEffect, useState } from "react";
import axios from "axios";

function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("https://pninfosysbackend.onrender.com/api/getAllOurTeam");
        setTeamMembers(response.data.allOurTeam); // Adjust based on your API response format
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <>
      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h3>Our Team</h3>
                <h2>Meet Our Team Members</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <div className="col-lg-12 text-center">
                <p>Loading team members...</p>
              </div>
            ) : teamMembers.length > 0 ? (
              teamMembers.map((member, index) => (
                <div className="col-lg-3" key={index}>
                  <div className="team-item">
                    <div className="team-thumb">
                      <div className="hover-effect">
                        <ul>
                          <li>
                            <a
                              href={member.profileImage} // Assuming profileImage is in API response
                              target="_blank"
                              rel="noopener noreferrer"
                              className="fancybox-pop fancybox.image"
                            >
                              <i className="fa fa-search fa-border fa-2x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <img
                        src={member.image.url} // Assuming profileImage is in API response
                        alt={member.name}
                      />
                    </div>
                    <div className="down-content">
                      <h4>{member.name}</h4>
                      <span>{member.description}</span> {/* Assuming designation is in API */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12 text-center">
                <p>No team members found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;
