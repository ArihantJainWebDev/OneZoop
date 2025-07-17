import React from 'react'
import '../styles/home.css'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-page">
                <div className="hero-section">
                    <div className="hero-logo">
                        Welcome to <span>OneZoop</span>
                    </div>
                    <div className="hero-subtext">
                        Discover the opportunities that match your skills.<br />
                        Empower your career with OneZoop.
                    </div>
                    <div className="hero-buttons">
                        <a href="/" className="btn btn-primary">Get Started</a>
                        <a href="/opportunities" className="btn btn-secondary">Explore opportunities</a>
                    </div>
                </div>
                <div className="main">
                    <div className="main-content">
                        <header>
                            <p>Everything you need to launch your career</p>
                            <p>From discovering opportunities to applying in just one click, we've got you covered.</p>
                        </header>
                        <main>
                            <div className="features">
                                <div className="feature">
                                    <h3>Discover Opportunities by category</h3>
                                    <div className="category">
                                        <a href="/opportunities?category=internships" className="category-link"><img src="./src/assets/icons/internship_1945674.png" alt="" />Internships</a>
                                        <a href="/opportunities?category=jobs" className="category-link"><img src="./src/assets/icons/job_942762.png" alt="" />Jobs</a>
                                        <a href="/opportunities?category=events" className="category-link"><img src="./src/assets/icons/event_2558934.png" alt="" />Events</a>
                                        <a href="/opportunities?category=competitions" className="category-link"><img src="./src/assets/icons/winner_7202302.png" alt="" />Competitions</a>
                                        <a href="/opportunities?category=hackathons" className="category-link"><img src="./src/assets/icons/layer7_15258581.png" alt="" />Hackathons</a>
                                        <a href="/opportunities?category=freelancing" className="category-link"><img src="./src/assets/icons/freelance_5433877.png" alt="" />Freelancing</a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
