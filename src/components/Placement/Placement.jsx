import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/placement.css";
import toast from "react-hot-toast";

function Placement() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [placements, setPlacements] = useState([]);
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [editingPlacementId, setEditingPlacementId] = useState(null); // ID of the placement being edited

  // Fetch placement data
  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await axios.get("/api/getAllPlacement");
        setPlacements(response.data.allPlacement);
      } catch (error) {
        console.error("Error fetching placements:", error);
      }
    };

    fetchPlacements();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImage(file);
      setErrorMessage("");
    } else {
      setImage(file);
      setErrorMessage("Please upload a valid image file (JPEG or PNG).");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !companyName || !jobTitle || (!image && !editMode)) {
      setErrorMessage("Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("companyName", companyName);
    formData.append("jobTitle", jobTitle);
    if (image) formData.append("image", image);

    try {
      if (editMode) {
        // Update placement API
        await axios.post(
          `/api/updatePlacement/${editingPlacementId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        toast.success("Placement updated successfully!");
        setEditMode(false);
        setEditingPlacementId(null);
      } else {
        // Add new placement API
        await axios.post("/api/insertPlacement", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Placement added successfully!");
      }
      fetchPlacements(); // Refresh the list
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        editMode ? "Failed to update placement." : "Failed to add placement."
      );
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this placement?")) {
      return;
    }

    try {
      await axios.delete(`/api/deletePlacement/${id}`);
      toast.success("Placement deleted successfully!");
      fetchPlacements(); // Refresh the list
    } catch (error) {
      console.error("Error deleting placement:", error);
      toast.error("Failed to delete placement.");
    }
  };

  const handleEdit = (placement) => {
    setName(placement.name);
    setCompanyName(placement.companyName);
    setJobTitle(placement.jobTitle);
    setImage(null); // Reset the image field as it's not editable directly
    setEditMode(true);
    setEditingPlacementId(placement._id);
  };

  const resetForm = () => {
    setName("");
    setCompanyName("");
    setJobTitle("");
    setImage(null);
    setErrorMessage("");
  };

  const fetchPlacements = async () => {
    try {
      const response = await axios.get("https://pninfosys-backend.onrender.com/api/getAllPlacement");
      setPlacements(response.data.allPlacement);
    } catch (error) {
      console.error("Error fetching placements:", error);
    }
  };

  return (
    <>
      <div className="container-fluid py-5 bg-light">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card shadow-lg">
              <div className="card-body">
                <h3 className="text-center mb-4">
                  {editMode
                    ? "Edit Placement Details"
                    : "Add Placement Details"}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      className="form-control"
                      onChange={handleFileChange} // Handle file change
                      required={!editMode} // Required only for new records
                    />
                    {errorMessage && (
                      <small className="text-danger">{errorMessage}</small>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="companyName" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      placeholder="Enter company name"
                      className="form-control"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="jobTitle" className="form-label">
                      Designation
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      placeholder="Enter your job title"
                      className="form-control"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    {editMode ? "Update Details" : "Submit Details"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Display All Placements */}
      <div className="container py-5">
        <h3 className="text-center mb-4">All Placements</h3>
        <div className="row">
          {placements.length === 0 ? (
            <p>No placements available.</p>
          ) : (
            placements.map((placement) => (
              <div className="col-md-3 mb-4" key={placement._id}>
                <div className="student-card">
                  <img
                    src={placement.image.url || placement.image}
                    alt={placement.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{placement.name}</h5>
                    <p className="card-text">
                      Company: {placement.companyName}
                    </p>
                    <p className="card-text">
                      Designation: {placement.jobTitle}
                    </p>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(placement)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(placement._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Placement;
