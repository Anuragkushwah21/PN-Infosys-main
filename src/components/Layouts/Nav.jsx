import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import logo from "../../assets/images/colorlogo.png";
import { Context } from "../../main";
import toast from "react-hot-toast";

function Nav() {
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  console.log(isAuthorized);
  const [loading, setLoading] = useState(true);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://pninfosysbackend.onrender.com/api/getUser");
        // console.log(response.data.data);
        setUser(response.data.data);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
    // Removed dependency on isAuthorized to prevent infinite re-fetch
  }, [setIsAuthorized, setUser]);

  const handleLogout = async () => {
    try {
      const { data } = await axios.get("/api/logOut");
      toast.success(data.message);
      setIsAuthorized(false);
      setUser(null);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message, setIsAuthorized(true));
    }
  };

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavLinkClick = () => {
    setIsNavCollapsed(true);
    window.scrollTo(0, 0);
  };

  if (loading) {
    // Display loading spinner while fetching user data
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-uppercase text-center custom-header">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo_png" className="nav-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
            aria-controls="navbarNavDropdown"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navbar items */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavCollapsed ? "collapse" : "show smooth-transition"
          }`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav custom-font">
            <li className="nav-item ">
              <Link
                className="nav-link text-dark mt-2"
                aria-current="page"
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark mt-2"
                to="/about"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark mt-2"
                to="/service"
                onClick={handleNavLinkClick}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark mt-2"
                to="/training"
                onClick={handleNavLinkClick}
              >
                Training
              </Link>
            </li>
            {/* Dropdown menus */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark mt-2"
                to="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                WorkShop
              </Link>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="servicesDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/prestige"
                    onClick={handleNavLinkClick}
                  >
                    Prestige College
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/xiaomi"
                    onClick={handleNavLinkClick}
                  >
                    Xiaomi MI Company
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/bentchair"
                    onClick={handleNavLinkClick}
                  >
                    Bentchair Company
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/rjit"
                    onClick={handleNavLinkClick}
                  >
                    Rjit College
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/mpct"
                    onClick={handleNavLinkClick}
                  >
                    Mpct College
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark mt-2"
                to="#"
                id="contactDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Placement
              </Link>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="contactDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/placement_desk"
                    onClick={handleNavLinkClick}
                  >
                    Placement Desk
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/placement_gallery"
                    onClick={handleNavLinkClick}
                  >
                    Placement Gallery
                  </Link>
                </li>
              </ul>
            </li>
            {user && user.role === "admin" && (
              <>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-dark mt-2"
                    to="#"
                    id="adminDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admin
                  </Link>
                  <ul
                    className="dropdown-menu text-center"
                    aria-labelledby="adminDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/addEvent"
                        onClick={handleNavLinkClick}
                      >
                        <i className="fas fa-calendar-plus"></i> Add Event
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/addPlacement"
                        onClick={handleNavLinkClick}
                      >
                        <i className="fas fa-user-graduate"></i> Add Placement
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/addTechnology"
                        onClick={handleNavLinkClick}
                      >
                        <i className="fas fa-laptop-code"></i> Add Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/addPortfolio"
                        onClick={handleNavLinkClick}
                      >
                        <i className="fas fa-briefcase"></i> Add Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/addOurTeam"
                        onClick={handleNavLinkClick}
                      >
                        <i className="fas fa-users"></i> Add Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/addNotice"
                        onClick={handleNavLinkClick}
                      >
                        <i className="fas fa-bullhorn"></i> Add Notice
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/message"
                        onClick={handleNavLinkClick}
                      >
                        <i className="fas fa-envelope"></i> Message
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/students"
                        onClick={handleNavLinkClick}
                      >
                        <i className="fa-solid fa-graduation-cap"></i> Students
                      </Link>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger m-2  "
                        onClick={handleLogout}
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link
                className="nav-link text-dark mt-2"
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // target="_blank"
                className="btn btn-outline-info nav-link text-dark mb-2"
                to="studentRegister"
              >
                Register
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                target="_blank"
                className="btn btn-outline-info nav-link text-dark mb-2"
                to="https://www.pninfosys.in/"
              >
                Internship
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
