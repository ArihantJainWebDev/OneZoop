import React from 'react'
import "../styles/dashboard.css"
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaCog, FaBookmark, FaBriefcase } from 'react-icons/fa';
import Profile from '../components/Profile';
import SavedJobs from '../components/SavedJobs';
import Settings from '../components/Settings';
import AppliedJobs from '../components/AppliedJobs';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-page">
      <div className={`dash-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="sidebar-nav">
          <NavLink to="/profile" className="nav-link">
            <FaUser /> {isSidebarOpen && <span>Profile</span>}
          </NavLink>
          <NavLink to="/settings" className="nav-link">
            <FaCog /> {isSidebarOpen && <span>Settings</span>}
          </NavLink>
          <NavLink to="/saved-jobs" className="nav-link">
            <FaBookmark /> {isSidebarOpen && <span>Saved Jobs</span>}
          </NavLink>
          <NavLink to="/applied-jobs" className="nav-link">
            <FaBriefcase /> {isSidebarOpen && <span>Applied Jobs</span>}
          </NavLink>
        </nav>
      </div>
      <div className="dashboard-body">
        <div className="topbar">
          <h1>Dashboard</h1>
        </div>
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="dashboard-cards">
                  <div className="card profile-card">
                    <h2>Profile Overview</h2>
                    <p>Welcome back, User!</p>
                    <p>Status: <span style={{ color: "green" }}>Active</span></p>
                    <button>View Profile</button>
                  </div>
                  <div className="card analytics-card">
                    <h2>Applied Jobs Analytics</h2>
                    <p>Total Applied: <b>12</b></p>
                    <p>Interviews: <b>3</b></p>
                    <p>Offers: <b>1</b></p>
                    <button>View Details</button>
                  </div>
                  <div className="card recent-jobs-card">
                    <h2>Recent Jobs</h2>
                    <ul>
                      <li>
                        <b>Frontend Developer</b> at ABC Corp<br />
                        <span>Applied: 2 days ago</span>
                      </li>
                      <li>
                        <b>Backend Engineer</b> at XYZ Ltd<br />
                        <span>Applied: 5 days ago</span>
                      </li>
                    </ul>
                    <button>See All Jobs</button>
                  </div>
                  <div className="card saved-jobs-card">
                    <h2>Saved Jobs</h2>
                    <p>You have <b>5</b> jobs saved for later.</p>
                    <button>View Saved Jobs</button>
                  </div>
                </div>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/saved-jobs" element={<SavedJobs />} />
            <Route path="/applied-jobs" element={<AppliedJobs />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;