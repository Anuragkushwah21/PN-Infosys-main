import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";

function PlacementGallery() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("https://pninfosysbackend.onrender.com/api/getAllPlacement");
        setStudents(response.data.allPlacement); // Assuming the API returns an array of student objects
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch placement data.");
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="parallax-banner1" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />
          <div
            className="inner-header"
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div className="inner-content">
              <h1
                className="text-center"
                style={{ color: "white", textShadow: "0px 0px 5px #000000" }}
              >
                Placement Gallery
              </h1>
              <div className="main-decoration" style={{ marginTop: "20px" }}></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-center my-4">Students Who Got Placed</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-danger">{error}</p>
          ) : (
            <div
              className="justify-content-center"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                padding: "20px",
              }}
            >
              {students.map((student, index) => (
                <StudentCard key={index} student={student} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PlacementGallery;
