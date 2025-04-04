import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    college: "",
    qualification: "",
    branch: "",
    semester: "",
    courseName: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://pninfosysbackend.onrender.com/api/insertStudent", formData);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        address: "",
        gender: "",
        college: "",
        qualification: "",
        branch: "",
        semester: "",
        courseName: "",
      });
      if (response.data) {
        toast.success("Registration Successful!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Student Registration</h3>
            <form onSubmit={handleSubmit}>
              {/* Name & Mobile */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Student Name</label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Mobile Number</label>
                  <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} rows="3" required></textarea>
              </div>

              {/* Gender */}
              <div className="mb-3">
                <label className="form-label d-block">Gender</label>
                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" name="gender" value="Male" onChange={handleChange} required />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" name="gender" value="Female" onChange={handleChange} required />
                  <label className="form-check-label">Female</label>
                </div>
              </div>

              {/* Branch & Qualification */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Select Branch</label>
                  <select className="form-control" name="branch" value={formData.branch} onChange={handleChange} required>
                    <option value="">-- Select Branch --</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EE">EE</option>
                    <option value="IT">IT</option>
                    <option value="MECHANICAL">MECHANICAL</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="AUTOMOBILE">AUTOMOBILE</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Select Qualification</label>
                  <select className="form-control" name="qualification" value={formData.qualification} onChange={handleChange} required>
                    <option value="">-- Select Qualification --</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="BCA">BCA</option>
                    <option value="Bsc">Bsc</option>
                    <option value="Msc">Msc</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>
              </div>

              {/* Semester */}
              <div className="mb-3">
                <label className="form-label">Select Semester</label>
                <select className="form-control" name="semester" value={formData.semester} onChange={handleChange} required>
                  <option value="">-- Select Semester --</option>
                  <option value="First">First</option>
                  <option value="Second">Second</option>
                  <option value="Third">Third</option>
                  <option value="Fourth">Fourth</option>
                  <option value="Fifth">Fifth</option>
                  <option value="Sixth">Sixth</option>
                  <option value="Seventh">Seventh</option>
                  <option value="Eighth">Eighth</option>
                </select>
              </div>

              {/* Course */}
              <div className="mb-3">
                <label className="form-label">Select Course</label>
                <select className="form-control" name="courseName" value={formData.courseName} onChange={handleChange} required>
                  <option value="">-- Select Course --</option>
                  <option value="Full Stack MERN Stack Development">Full Stack MERN (6 Months - ₹7000)</option>
                  <option value="Web Designing">Web Designing (3 Months - ₹2500)</option>
                  <option value="Python">Python (3 Months - ₹3000)</option>
                  <option value="C programming">C Programming (3 Months - ₹2000)</option>
                  <option value="PHP (Laravel Framework)">PHP Laravel (6 Months - ₹5000)</option>
                </select>
              </div>

              {/* College */}
              <div className="mb-3">
                <label className="form-label">Select College</label>
                <select className="form-control" name="college" value={formData.college} onChange={handleChange} required>
                  <option value="">-- Select College --</option>
                  <option value="RJIT">RJIT</option>
                  <option value="MPCT">MPCT</option>
                  <option value="MITS">MITS</option>
                  <option value="ITM">ITM</option>
                  <option value="SHRIRAM">SHRIRAM COLLEGE</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
