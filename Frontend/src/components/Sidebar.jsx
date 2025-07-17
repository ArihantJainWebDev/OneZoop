import React from 'react'
import '../styles/profile.css'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="profile">
            <img src="./src/assets/avatar2.jpg" alt="" />
        </div>
        <div className="sidebar-links">
            <ul>
                <li className='active'>Profile</li>
                <li>Settings</li>
                <li>Appearance</li>
            </ul>
        </div>
        <div className="logout">
            <button>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
