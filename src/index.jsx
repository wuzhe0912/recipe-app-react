import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// initialize styles
import './styles/main.css';
import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
