import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>
            <h1>LOGO</h1>
        </Link>
        
        <nav>
            <ul>
                <li>
                    <Link to='/' className='nav__link'>
                      Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' className='nav__link'>
                      About Us
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className='nav__link'>
                      Contact Us
                    </Link>
                </li>             
            </ul>
        </nav>        
    </div>
  )
}

export default Navbar