import React, { useContext} from 'react';
import authContext from '../context/authContext';
import { GoogleLogout } from 'react-google-login';
import { CLIENT_ID } from '../Secrets';

const Logout = ({setUserSigned}) => {
  const { state, updateContextState} = useContext(authContext);

  const onLogout = () => {
    console.log("Log out succesfully : ");
    updateContextState(false, '', '');
    setUserSigned( false);
    localStorage.removeItem('user');
  }


  return (

    <GoogleLogout
      client_id={CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={onLogout}
    >
    </GoogleLogout>
  )

}

export default Logout;