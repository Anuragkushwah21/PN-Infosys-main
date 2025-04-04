import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [events, setEvents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);

  // Fetch all events
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://pninfosysbackend.onrender.com/api/getAllEvent");
      setEvents(response.data.allEvent || []);
    } catch (error) {
      toast.error("Failed to fetch events.");
      console.error("Error fetching events:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.image) {
      toast.warning("Please fill in all fields.");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      if (editMode) {
        // Update event API
        await axios.post(`/api/updateEvent/${editingEventId}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Event updated successfully!");
      } else {
        // Add new event API
        await axios.post("/api/insertEvent", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Event added successfully!");
      }
      setFormData({ title: "", description: "", image: null });
      setEditMode(false);
      setEditingEventId(null);
      fetchEvents();
    } catch (error) {
      toast.error(editMode ? "Failed to update event." : "Failed to add event.");
      console.error("Error submitting event:", error);
    }
  };

  // Handle delete event
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) {
      return;
    }

    try {
      await axios.delete(`/api/deleteEvent/${id}`);
      toast.success("Event deleted successfully!");
      fetchEvents();
    } catch (error) {
      toast.error("Failed to delete event.");
      console.error("Error deleting event:", error);
    }
  };

  // Handle edit event
  const handleEdit = (event) => {
    setEditMode(true);
    setEditingEventId(event._id);
    setFormData({
      title: event.title,
      description: event.description,
      image: null, // Reset image input for editing
    });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  return (
    <div>
      {/* Form Section */}
      <div className="container my-5">
        <h2>{editMode ? "Edit Event" : "Add Event"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {editMode ? "Update Event" : "Add Event"}
          </button>
        </form>
      </div>

      {/* Events Section */}
      <section className="recent-cases portfolio-page my-5">
        <div className="container">
          <div className="row">
            {events.map((item, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="case-item">
                  <div className="case-thumb">
                    <img
                      src={item.image.url || item.image}
                      alt={item.title}
                      className="img-fluid"
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="down-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <button
                      onClick={() => handleEdit(item)}
                      className="btn btn-sm btn-warning me-2 m-2"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-danger"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddEvent;
