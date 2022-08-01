import React, { useContext } from 'react'
import Login from './login';
import Logout from './logout';
import '../styles/Navbar.css';
import authContext from '../context/authContext';

const Navbar = () => {
  const a = useContext(authContext);
  console.log('context name ', a.name );
  console.log('context email ', a.email );

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
