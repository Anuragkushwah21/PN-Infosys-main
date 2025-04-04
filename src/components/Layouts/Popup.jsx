import React, { useEffect, useState } from "react";
import axios from "axios";

const Popup = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("https://pninfosysbackend.onrender.com/api/getAllNotice");
        setNotices(response.data.allNotice); // Assuming response.data is an array of notices
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="popup"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog justify-content-center">
          <div className="modal-content mt-xl-5">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Notice Board
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              {notices.length > 0 ? (
                notices.map((notice, index) => (
                  <div key={index} className="mb-2">
                    <p>
                      <strong>{notice.title}: </strong>
                    </p>
                    <p>{notice.notice}:</p>
                    {notice.link && (
                      <a
                        href={notice.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        {notice.link}
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <p>No notices available.</p>
              )}
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
