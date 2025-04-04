import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddOurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    description: "",
    image: null,
  });
  const navigate = useNavigate();
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://pninfosysbackend.onrender.com/api/getAllOurTeam");
      setTeamMembers(response.data.allOurTeam);
      navigate("https://pninfosysbackend.onrender.com/addOurTeam");
    } catch (error) {
      toast.error("Failed to fetch team members.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async () => {
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("description", newMember.description);
    formData.append("image", newMember.image);

    try {
      const response = await axios.post("https://pninfosysbackend.onrender.com/api/insertOurTeam", formData);
      toast.success("Team member added successfully.");
      setTeamMembers([...teamMembers, response.data]);
      setNewMember({ name: "", description: "", image: null });
    } catch (error) {
      toast.error("Failed to add team member.");
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await axios.delete(`https://pninfosysbackend.onrender.com/api/deleteOurTeam/${id}`);
      toast.success("Team member deleted successfully.");
      setTeamMembers(teamMembers.filter((member) => member.id !== id));
    } catch (error) {
      toast.error("Failed to delete team member.");
    }
  };

  return (
    <section className="our-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Add New Team Member</h2>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 offset-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={newMember.name}
                    onChange={(e) =>
                      setNewMember({ ...newMember, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={newMember.description}
                    onChange={(e) =>
                      setNewMember({
                        ...newMember,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) =>
                      setNewMember({ ...newMember, image: e.target.files[0] })
                    }
                  />
                </div>
                <button className="btn btn-primary" onClick={handleAddMember}>
                  Add Member
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center mt-2">Meet Our Team Members</h2>
        <div className="row mt-2">
          {loading ? (
            <div className="col-lg-12 text-center">
              <p>Loading team members...</p>
            </div>
          ) : teamMembers.length > 0 ? (
            teamMembers.map((member) => (
              <div className="col-lg-3" key={member.id}>
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href={member.profileImage}
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
                      src={member.image?.url || "/default-image.jpg"}
                      alt={member.name || "Member"}
                    />
                  </div>
                  <div className="down-content">
                    <h4>{member.name}</h4>
                    <span>{member.description}</span>
                    <button
                      className="rounded"
                      onClick={() => handleDeleteMember(member._id)}
                    >
                      <i className="bg-danger fa-solid fa-trash"></i>
                    </button>
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
  );
};

export default AddOurTeam;
