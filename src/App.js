import React from 'react';
import { Navbar, Landing, Purpose, Soundwave } from './components/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Soundwave />
      <Purpose />
    </div>
  );
}

export default App;
