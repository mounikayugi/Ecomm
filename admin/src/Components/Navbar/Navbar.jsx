import React from 'react'
import './Navbar.css'
import navlogo from "../../Assets/nav_logo.jpeg"
import navprofile from '../../Assets/nav_profile.jpeg'

const Navbar = () => {
    return (
        <div className="navbar">
           <img src={navlogo} alt="" className='nav-logo'/>
           <h1>MY STORE</h1>
           <img src={navprofile} alt=""  className='nav-profile'/>
        </div>
    )
}

export default Navbar