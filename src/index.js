import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App.js';
console.log(App())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
