import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthState from './context/AuthState';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthState>
  </React.StrictMode>
);

