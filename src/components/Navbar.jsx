import React from 'react'
import '../assets/styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar-container'>
      <div className='tagName'>
        musP
      </div>
      <ul className='menu'>
        <li className='menu-item'>
            <Link to='/' className='nav-menu-link'>Home</Link>
        </li>
        <li className='menu-item'>
            <Link to='/about' className='nav-menu-link'>About Us</Link>
        </li>
        <li className='menu-item'>
            <Link to='/contact' className='nav-menu-link'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
