import React from "react";
import PropTypes from "prop-types";
import "../../assets/style.css";

const StudentCard = ({ student }) => (
  <div
    className="student-card"
    style={{
      backgroundImage: `url(${student.image.url})`,
    }} /* Set background image */
  >
    <div className="details">
      <h2 className="name">{student.name}</h2>
      <p className="job-title">{student.jobTitle}</p>
      <p className="company">{student.company}</p>
    </div>
  </div>
);

StudentCard.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentCard;
