import React from 'react';

const NavMain = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-3" href="#">
          🧠 Cognitive Mental Wellness
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                <i className="fas fa-home me-2"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#moodAnalysis">
                <i className="fas fa-heart me-2"></i> Mood Analysis
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resources">
                <i className="fas fa-book me-2"></i> Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#progress">
                <i className="fas fa-chart-line me-2"></i> Progress
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="fas fa-phone-alt me-2"></i> Contact
              </a>
            </li>

            {/* Feedback Section */}
            <li className="nav-item">
              <a className="nav-link" href="#feedback">
                <i className="fas fa-comment-dots me-2"></i> Feedback
              </a>
            </li>

            {/* User Profile Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle me-2"></i> User
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#profile">
                    <i className="fas fa-user me-2"></i> Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#settings">
                    <i className="fas fa-cogs me-2"></i> Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#logout">
                    <i className="fas fa-sign-out-alt me-2"></i> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
