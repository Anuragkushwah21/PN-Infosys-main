import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure Bootstrap is imported

function StudentDisplay() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/api/getAllStudent");
        setStudents(response.data.allStudent);
      } catch (error) {
        setError("Failed to fetch student data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <h3 className="mb-3 text-center">Student List</h3>

          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-danger text-center">{error}</p>}

          {!loading && !error && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Branch</th>
                    <th>Semester</th>
                    <th>Course</th>
                    <th>Gender</th>
                    <th>Qualification</th>
                    <th>College</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length > 0 ? (
                    students.map((student, index) => (
                      <tr key={student.id}>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.mobile}</td>
                        <td>{student.branch}</td>
                        <td>{student.semester}</td>
                        <td>{student.courseName}</td>
                        <td>{student.gender}</td>
                        <td>{student.qualification}</td>
                        <td>{student.college}</td>
                        <td>{student.address}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">No students found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDisplay;
