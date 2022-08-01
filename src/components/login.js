import React, { useContext } from 'react';
import authContext from '../context/authContext';
import { GoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../Secrets';
import { useNavigate } from "react-router-dom";

const Login = ({setUserSigned}) => {
  const { state, updateContextState} = useContext(authContext);
  let navigate = useNavigate();

  const onSuccess = async (res) => {
    try {
      console.log("Login Successfull as : ", res.profileObj);
      const { name, email } = res.profileObj;
      await updateContextState(true, email, name);
      const loginCredentials = {
        isSignedIn: true,
        email: email,
        name: name
      }
      localStorage.setItem('user', JSON.stringify(loginCredentials));
      await setUserSigned(state.isSignedIn);
      console.log("Just before the navigate", state.isSignedIn)
      navigate("/profile");

    } catch (error) {
      console.log(error);
    }
  
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