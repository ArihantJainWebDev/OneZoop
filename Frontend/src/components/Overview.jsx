import React from 'react'
import "../styles/dashboard.css"

const Overview = () => {
    return (
        <div>
            <section className="dashboard-grid">
                <div className="card profile-completion">
                    <div className="card-header">
                        <h2>Profile Completion</h2>
                    </div>
                    <div className="completion-progress">
                        <div className="progress-circle">75%</div>
                        <ul className="completion-items">
                            <li>✔️ Basic Information</li>
                            <li>✔️ Work Experience</li>
                            <li>❌ Skills Assessment</li>
                            <li>✔️ Resume Upload</li>
                        </ul>
                    </div>
                </div>

                <div className="card application-statistics">
                    <div className="card-header">
                        <h2>Application Statistics</h2>
                    </div>
                    <div className="stats-grid">
                        <div>
                            <span className="stat-number">24</span>
                            <p>Total Applications</p>
                        </div>
                        <div>
                            <span className="stat-number">8</span>
                            <p>In Review</p>
                        </div>
                        <div>
                            <span className="stat-number">3</span>
                            <p>Interviews</p>
                        </div>
                        <div>
                            <span className="stat-number">1</span>
                            <p>Offers</p>
                        </div>
                    </div>
                </div>

                <div className="card recent-applications">
                    <div className="card-header">
                        <h2>Recent Applications</h2>
                        <span className="view-all">View All</span>
                    </div>
                    <ul className="app-list">
                        <li>
                            <span className="company-initial">G</span>
                            <div className="app-details">
                                <p>Software Engineer</p>
                                <span>Google - 2025-07-15</span>
                            </div>
                            <span className="app-status in-review">In Review</span>
                        </li>
                        <li>
                            <span className="company-initial">M</span>
                            <div className="app-details">
                                <p>Product Manager</p>
                                <span>Microsoft - 2025-07-14</span>
                            </div>
                            <span className="app-status interview-scheduled">Interview Scheduled</span>
                        </li>
                        <li>
                            <span className="company-initial">A</span>
                            <div className="app-details">
                                <p>Data Scientist</p>
                                <span>Amazon - 2025-07-13</span>
                            </div>
                            <span className="app-status applied">Applied</span>
                        </li>
                    </ul>
                </div>

                <div className="card saved-opportunities">
                    <div className="card-header">
                        <h2>Saved Opportunities</h2>
                        <span className="view-all">View All</span>
                    </div>
                    <ul className="opportunity-list">
                        <li>
                            <span className="company-initial">A</span>
                            <div className="opportunity-details">
                                <p>iOS Developer</p>
                                <span>Apple - Full-time</span>
                            </div>
                            <button className="btn-quick-apply">Quick Apply</button>
                        </li>
                        <li>
                            <span className="company-initial">N</span>
                            <div className="opportunity-details">
                                <p>UX Designer</p>
                                <span>Netflix - Remote</span>
                            </div>
                            <button className="btn-quick-apply">Quick Apply</button>
                        </li>
                        <li>
                            <span className="company-initial">T</span>
                            <div className="opportunity-details">
                                <p>Machine Learning Engineer</p>
                                <span>Tesla - Full-time</span>
                            </div>
                            <button className="btn-quick-apply">Quick Apply</button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Overview
