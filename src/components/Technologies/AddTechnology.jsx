import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddTechnology() {
  const [formData, setFormData] = useState({
    // Used for editing
    title: "",
    description: "",
    image: null,
  });

  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false); // To track if editing mode is active

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      setLoading(true);
      if (editing) {
        // Edit functionality
        await axios.post(`/api/updateTechnology/${formData.id}`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log()
        toast.success("Technology updated successfully!");
      } else {
        // Add functionality
        await axios.post("/api/insertTechnology", form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Technology added successfully!");
      }
      fetchTechnologies();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating technology:", error);
      toast.error("Failed to add/update technology.");
    } finally {
      setLoading(false);
    }
  };

  const fetchTechnologies = async () => {
    try {
      const response = await axios.get("/api/getAllTechnology");
      setTechnologies(response.data.allTechnology);
    } catch (error) {
      console.error("Error fetching technologies:", error);
    }
  };

  const handleEdit = (tech) => {
    setEditing(true);
    setFormData({
      id: tech.id,
      title: tech.title,
      description: tech.description,
      image: null, // Keep the image null to avoid re-upload
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this technology?")) {
      try {
        await axios.delete(`/api/deleteTechnology/${id}`);
        toast.success("Technology deleted successfully!");
        fetchTechnologies();
      } catch (error) {
        console.error("Error deleting technology:", error);
        toast.error("Failed to delete technology.");
      }
    }
  };

  const resetForm = () => {
    setEditing(false);
    setFormData({
      id: null,
      title: "",
      description: "",
      image: null,
    });
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return (
    <section className="recent-cases">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 style={{ fontSize: "xx-large" }}>Technologies</h4>
            <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
              We work on..
            </h1>
          </div>
          <div className="col-lg-8 mb-4">
            <form onSubmit={handleSubmit} className="technology-form">
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Image:</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  // value={formData.image}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
              >
                {loading ? (editing ? "Updating..." : "Adding...") : editing ? "Update Technology" : "Add Technology"}
              </button>
              {editing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-secondary ml-2"
                >
                  Cancel
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="row masonry-layout filters-content normal-col-gap">
          {technologies.map((tech) => (
            <div key={tech.id} className={`col-lg-3 col-md-6 masonry-item`}>
              <div className="case-item">
                <div className="case-thumb">
                  <img
                    src={tech.image.url}
                    alt={tech.title}
                    style={{ height: "200px" }}
                  />
                </div>
                <div className="down-content">
                  <h4>{tech.title}</h4>
                  <span>{tech.description}</span>
                  <div style={{ marginTop: "10px" }}>
                    <button
                      onClick={() => handleEdit(tech)}
                      className="btn btn-warning btn-sm"
                    >
                     <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(tech._id)}
                      className="btn btn-danger btn-sm ml-2"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddTechnology;
