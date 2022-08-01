import React from 'react';
import authContext from './authContext';

const AuthState = (props) => {
  const state = {
    isSignedIn: false,
    email: '',
    name: ''
  }

  return (
    <authContext.Provider value={state}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState;