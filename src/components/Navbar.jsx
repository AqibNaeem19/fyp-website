import React, { useState } from 'react'
import Login from './login';
import Logout from './logout';
import '../styles/Navbar.css';

const Navbar = () => {
  const [userSigned, setUserSigned] = useState();

  return (
    <div className='nav'>
      <div className="nav-container">
        <p> <i className="fa-solid fa-sun-plant-wilt"></i> </p>
        <div className="nav-buttons-container">
          {!userSigned && <Login setUserSigned={setUserSigned} />}
          {userSigned && <Logout setUserSigned={setUserSigned} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
