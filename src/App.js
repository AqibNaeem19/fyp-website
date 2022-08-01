import React, { useEffect } from 'react';
import { Navbar, Landing, Purpose, Soundwave } from './components/index';
import { gapi } from "gapi-script";
import { CLIENT_ID } from './Secrets';

function App() {

  useEffect(() => {
    function start(){
      gapi.auth2.init({
        client_id: CLIENT_ID,
        scope: ""
      })
    }
    
    gapi.load('client:auth2', start);  
  })


  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Soundwave />
      <Purpose />
    </div>
  )
}

export default App;
