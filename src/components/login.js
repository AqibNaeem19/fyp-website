import React, { useContext } from 'react';
import authContext from '../context/authContext';
import { GoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../Secrets';

const Login = ({setUserSigned}) => {
  const { state, updateContextState} = useContext(authContext);

  const onSuccess = (res) => {
    console.log("Login Successfull as : ", res.profileObj);
    const { name, email } = res.profileObj;
    updateContextState(true, email, name);
    setUserSigned(state.isSignedIn)
  }

  const onFailure = ( res) => {
    console.log("Login Failed as : ", res);
  }

  return (

    <GoogleLogin
      client_id={CLIENT_ID}
      buttonText="SIGN UP"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Login;