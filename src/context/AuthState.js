import React from 'react';
import authContext from './authContext';

const AuthState = (props) => {
  let state = {
    isSignedIn: false,
    email: '',
    name: ''
  }

  const updateContextState = (isSignedIn, email, name) => {
    state.isSignedIn = isSignedIn;
    state.email = email;
    state.name = name;
  }

  let userExists = localStorage.getItem("user");
  if(userExists){
    state = JSON.parse(userExists);
  } 
  

  return (
    <authContext.Provider value={{state, updateContextState}}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState;