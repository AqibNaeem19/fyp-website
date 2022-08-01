import React, { useState,useEffect, useContext } from 'react';
import { Navbar, Landing, Purpose, Soundwave, Profile } from './components/index';
import authContext from './context/authContext';
import { Routes, Route, Link } from "react-router-dom";
import { gapi } from "gapi-script";
import { CLIENT_ID } from './Secrets';

function App() {
  const { state } = useContext(authContext);
  let isSignedIn = state.isSignedIn;
  const [userSigned, setUsersigned] = useState(isSignedIn);

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        client_id: CLIENT_ID,
        scope: ""
      })
    }

    gapi.load('client:auth2', start);
  })

  useEffect(() => {
    const timer = setInterval(() => {
      if(userSigned !== state.isSignedIn){
        setUsersigned(state.isSignedIn);
      }
    }, 3000)

    return () => clearInterval(timer);
  })

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={
          <div>
            <Navbar />
            <Landing />
            <Soundwave />
            <Purpose />
          </div>
        } 
        />

        <Route path="/profile" element={ userSigned && <Profile />} />

      </Routes>
      {/* <Navbar />
      <Landing />
      <Soundwave />
      <Purpose /> */}
    </div>
  )
}

export default App;
