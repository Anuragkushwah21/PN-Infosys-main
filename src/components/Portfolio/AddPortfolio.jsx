import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newPortfolio, setNewPortfolio] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [editPortfolio, setEditPortfolio] = useState(null); // State for the item being edited
  const navigate = useNavigate();

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/getAllPortfolio");
      if (response.data && response.data.allPortfolio) {
        setPortfolio(response.data.allPortfolio);
      } else {
        toast.error("Unexpected response format.");
      }
    } catch (error) {
      toast.error("Failed to fetch portfolio items.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddPortfolioItem = async () => {
    if (!newPortfolio.title || !newPortfolio.description || !newPortfolio.image) {
      return toast.error("All fields are required.");
    }

    const formData = new FormData();
    formData.append("title", newPortfolio.title);
    formData.append("description", newPortfolio.description);
    formData.append("image", newPortfolio.image);

    try {
      const response = await axios.post("/api/insertPortfolio", formData);
      if (response.data) {
        toast.success("Portfolio item added successfully.");
        setPortfolio([...portfolio, response.data]);
        setNewPortfolio({ title: "", description: "", image: null });
        navigate("/portfolio");
      } else {
        toast.error("Failed to add portfolio item.");
      }
    } catch (error) {
      toast.error("Failed to add portfolio item.");
    }
  };

  const handleDeletePortfolio = async (id) => {
    try {
      await axios.delete(`/api/deletePortfolio/${id}`);
      setPortfolio(portfolio.filter((item) => item._id !== id));
      toast.success("Portfolio item deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete portfolio item.");
    }
  };

  const handleEditPortfolio = (item) => {
    setEditPortfolio(item);
  };

  const handleUpdatePortfolio = async () => {
    if (!editPortfolio.title || !editPortfolio.description) {
      return toast.error("Title and description are required.");
    }

    const formData = new FormData();
    formData.append("title", editPortfolio.title);
    formData.append("description", editPortfolio.description);
    if (editPortfolio.image) {
      formData.append("image", editPortfolio.image);
    }

    try {
      const response = await axios.put(
        `/api/updatePortfolio/${editPortfolio._id}`,
        formData
      );
      if (response.data) {
        toast.success("Portfolio item updated successfully.");
        setPortfolio((prev) =>
          prev.map((item) =>
            item._id === editPortfolio._id ? response.data : item
          )
        );
        setEditPortfolio(null);
      } else {
        toast.error("Failed to update portfolio item.");
      }
    } catch (error) {
      toast.error("Failed to update portfolio item.");
    }
  };

  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h2 className="mb-2">Add New Portfolio Item</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={newPortfolio.title}
                onChange={(e) =>
                  setNewPortfolio({ ...newPortfolio, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Description"
                value={newPortfolio.description}
                onChange={(e) =>
                  setNewPortfolio({ ...newPortfolio, description: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) =>
                  setNewPortfolio({ ...newPortfolio, image: e.target.files[0] })
                }
              />
            </div>
            <button className="btn btn-primary" onClick={handleAddPortfolioItem}>
              Add Portfolio
            </button>
          </div>
        </div>

        <div className="row mt-4 mb-5">
          {loading ? (
            <div className="col-lg-12 text-center">
              <p>Loading portfolio items...</p>
            </div>
          ) : portfolio.length > 0 ? (
            portfolio.map((item) => (
              <div className="col-lg-4" key={item._id}>
                <div className="portfolio-item">
                  <div className="portfolio-thumb">
                    <img src={item.image.url} alt={item.title} />
                  </div>
                  <div className="down-content">
                    <h4 className="mt-1">{item.title}</h4>
                    <p>{item.description}</p>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEditPortfolio(item)}
                    >
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeletePortfolio(item._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12 text-center">
              <p>No portfolio items found.</p>
            </div>
          )}
        </div>
      </div>

      {editPortfolio && (
        <div className="edit-modal">
          <div className="modal-content">
            <h4>Edit Portfolio Item</h4>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={editPortfolio.title}
                onChange={(e) =>
                  setEditPortfolio({ ...editPortfolio, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                value={editPortfolio.description}
                onChange={(e) =>
                  setEditPortfolio({
                    ...editPortfolio,
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
                  setEditPortfolio({
                    ...editPortfolio,
                    image: e.target.files[0],
                  })
                }
              />
            </div>
            <button className="btn btn-success" onClick={handleUpdatePortfolio}>
              Update
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setEditPortfolio(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AddPortfolio;
