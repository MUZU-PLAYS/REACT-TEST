import React from 'react'
import './NavBar.css'
import logo from '..//..//assets/logo.png'
const NavBar = () => {
  return (
    <nav className='container'>
     <img src={logo} alt="" className='logo'/>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Program</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><button className='btn'>About Us</button></li>
      </ul>
    </nav>
  )
}

export default NavBar
