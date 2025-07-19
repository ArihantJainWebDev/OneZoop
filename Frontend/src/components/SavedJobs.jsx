import React from 'react';
import '../styles/dashboard.css'

const SavedJobs = () => {
  return (
    <div className="page-content">
       <section className="saved-opportunities-section">
                <h2>Saved Opportunities</h2>
                <ul className="opportunity-list">
                    <li>
                        <span className="company-initial">A</span>
                        <div className="opportunity-details">
                            <p>iOS Developer</p>
                            <span>Apple</span>
                        </div>
                        <button className="btn-quick-apply">Apply Now</button>
                        <button className="btn-trash-icon">🗑️</button>
                    </li>
                    <li>
                        <span className="company-initial">N</span>
                        <div className="opportunity-details">
                            <p>UX Designer</p>
                            <span>Netflix</span>
                        </div>
                        <button className="btn-quick-apply">Apply Now</button>
                        <button className="btn-trash-icon">🗑️</button>
                    </li>
                    <li>
                        <span className="company-initial">T</span>
                        <div className="opportunity-details">
                            <p>Machine Learning Engineer</p>
                            <span>Tesla</span>
                        </div>
                        <button className="btn-quick-apply">Apply Now</button>
                        <button className="btn-trash-icon">🗑️</button>
                    </li>
                    <li>
                        <span className="company-initial">S</span>
                        <div className="opportunity-details">
                            <p>Backend Developer</p>
                            <span>Spotify</span>
                        </div>
                        <button className="btn-quick-apply">Apply Now</button>
                        <button className="btn-trash-icon">🗑️</button>
                    </li>
                </ul>
            </section>
    </div>
  );
};

export default SavedJobs;