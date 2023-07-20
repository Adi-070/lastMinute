import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navContainer">
        <span className="logo">
        LastMinute
        </span>
        <div className="navItems">
             <button className="navButton">Register</button>
             <button className="navButton">Log in</button>
        </div>
    </div>
    
    </div>
  )
}

export default Navbar