import React from 'react'
import Login from './login';
import Logout from './logout';
import '../styles/Navbar.css';

const Navbar = () => {

  return (
    <div className='nav'>
      <div className="nav-container">
        <p> <i className="fa-solid fa-sun-plant-wilt"></i> </p>
        <div className="nav-buttons-container">
          <Login />
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
