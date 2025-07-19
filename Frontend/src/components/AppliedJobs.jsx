import React from 'react';
import '../styles/dashboard.css'

const AppliedJobs = () => {
  return (
    <div className="page-content">
      <section className="my-applications-section">
                <h2>My Applications</h2>
                <ul className="app-list">
                    <li>
                        <span className="company-initial">G</span>
                        <div className="app-details">
                            <p>Software Engineer</p>
                            <span>Google</span>
                        </div>
                        <span className="app-status in-review">In Review</span>
                    </li>
                    <li>
                        <span className="company-initial">M</span>
                        <div className="app-details">
                            <p>Product Manager</p>
                            <span>Microsoft</span>
                        </div>
                        <span className="app-status interview-scheduled">Interview Scheduled</span>
                    </li>
                    <li>
                        <span className="company-initial">A</span>
                        <div className="app-details">
                            <p>Data Scientist</p>
                            <span>Amazon</span>
                        </div>
                        <span className="app-status applied">Applied</span>
                    </li>
                    <li>
                        <span className="company-initial">M</span>
                        <div className="app-details">
                            <p>Frontend Developer</p>
                            <span>Meta</span>
                        </div>
                        <span className="app-status rejected">Rejected</span>
                    </li>
                </ul>
            </section>
    </div>
  );
};

export default AppliedJobs;