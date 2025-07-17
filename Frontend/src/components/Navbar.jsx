import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img className='logo' src="./src/assets/logobg.png" alt="onezoop" />
                </div>
                <div className="auth-button">
                    <button className="login-btn">Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
