import React from 'react'
import "../styles/dashboard.css"
import Overview from '../components/Overview';
import AppliedJobs from '../components/AppliedJobs'
import SavedJobs from '../components/SavedJobs'
import Profile from '../components/Profile'
import Settings from '../components/Settings'

const Dashboard = () => {

  const [selectedComponent, setSelectedComponent] = React.useState('overview');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'overview':
        return <Overview />;
      case 'applications':
        return <AppliedJobs />;
      case 'saved':
        return <SavedJobs />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <div className="user-profile">
          <div className="user-avatar">
            <img src="../assets/avatar2.jpg" alt="" />
          </div>
          <div className="user-info">
            <h3>Aditya Rajpoot</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <nav className="navigation">
          <ul>
            <li className={`nav-item ${selectedComponent === 'overview' ? 'active' : ''}`}>
              <a onClick={() => setSelectedComponent('overview')}>
                <span className="icon">🏠</span> Overview
              </a>
            </li>
            <li className={`nav-item ${selectedComponent === 'applications' ? 'active' : ''}`}>
              <a onClick={() => setSelectedComponent('applications')}>
                <span className="icon">📋</span> Applications
              </a>
            </li>
            <li className={`nav-item ${selectedComponent === 'saved' ? 'active' : ''}`}>
              <a onClick={() => setSelectedComponent('saved')}>
                <span className="icon">🔖</span> Saved Opportunities
              </a>
            </li>
            <li className={`nav-item ${selectedComponent === 'profile' ? 'active' : ''}`}>
              <a onClick={() => setSelectedComponent('profile')}>
                <span className="icon">📄</span> Profile
              </a>
            </li>
            <li className={`nav-item ${selectedComponent === 'settings' ? 'active' : ''}`}>
              <a onClick={() => setSelectedComponent('settings')}>
                <span className="icon">⚙️</span> Account Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="return-home">
          <a href="home.html">← Return to Home</a>
        </div>
      </aside>
      <div className="dash-main-content">
        <header className="main-header">
          <h1>Welcome back, Alex!</h1>
          <p>Here's what's happening with your career journey</p>
          <div className="header-actions">
            <button className="btn-edit-profile">✏️ Edit Profile</button>
            <button className="btn-search-jobs">🔍 Search Jobs</button>
          </div>
        </header>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Dashboard;