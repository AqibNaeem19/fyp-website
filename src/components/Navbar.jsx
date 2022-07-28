import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-container">
        <p> <i className="fa-solid fa-sun-plant-wilt"></i> </p>
        <div className="nav-buttons-container">
          <button className="signup">Signup</button>
          <button className="signup">Signin</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
