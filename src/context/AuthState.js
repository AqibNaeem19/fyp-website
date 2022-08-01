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

  return (
    <authContext.Provider value={{state, updateContextState}}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState;