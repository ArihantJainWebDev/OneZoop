import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img className='logo' src="./src/assets/logobg.png" alt="onezoop" />
                </div>
                <div className="nav-links">
                    <ul className="links-list">
                        <li><a href="/" className='active'>Home</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/opportunities">Opportunities</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="auth-button">
                    <button className="login-btn">Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
