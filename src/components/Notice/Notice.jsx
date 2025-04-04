import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Notice() {
  const [notices, setNotices] = useState([]);
  const [formData, setFormData] = useState({ title: "", notice: "", link: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get("/api/getAllNotice");
      setNotices(response.data.allNotice);
      // setNotices(response.data.noticeCount); // Uncomment if you want to display the notice count
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update notice using the _id
        await axios.post(`/api/updateNotice/${editingId}`, formData);
        toast.success("Notice updated successfully.");
      } else {
        await axios.post("/api/insertNotice", formData);
        toast.success("Notice added successfully.");
      }
      setFormData({ title: "", notice: "", link: "" });
      setEditingId(null);
      fetchNotices();
    } catch (error) {
      console.error("Error saving notice:", error);
      toast.error("Error saving notice.");
    }
  };

  const handleEdit = (notice) => {
    setFormData({ title: notice.title, notice: notice.notice, link: notice.link });
    setEditingId(notice._id); // Use _id for editing
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/deleteNotice/${id}`);
      toast.success("Notice deleted successfully.");
      fetchNotices();
    } catch (error) {
      toast.error("Error deleting notice.");
      console.error("Error deleting notice:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Manage Notices</h2>
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="notice"
              placeholder="Enter Notice Details"
              value={formData.notice}
              onChange={handleChange}
              required
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="link"
              placeholder="Enter Link"
              value={formData.link}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {editingId ? "Update Notice" : "Create Notice"}
          </button>
        </form>
      </div>

      <div className="mt-4">
        {notices.length === 0 ? (
          <p className="text-center">No notices available</p>
        ) : (
          <ul className="list-group">
            {notices.map((notice) => (
              <li key={notice._id} className="list-group-item d-flex flex-column">
                <h5>{notice.title}</h5>
                <p>{notice.notice}</p>
                <a href={notice.link} className="text-primary" target="_blank" rel="noopener noreferrer">
                  {notice.link}
                </a>
                <div className="mt-2 d-flex justify-content-end">
                  <button onClick={() => handleEdit(notice)} className="btn btn-warning me-2 mr-2 p-2">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button onClick={() => handleDelete(notice._id)} className="btn btn-danger p-2">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Notice;
