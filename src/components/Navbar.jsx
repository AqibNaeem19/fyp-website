import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-container">
        <h1 className="nav-logo">Logo</h1>
        <div className="nav-buttons-container">
          <button className="signup">Signup</button>
          <button className="signup">Signin</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
