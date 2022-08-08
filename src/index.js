import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import axios from 'axios';

axios.defaults.baseURL = 'https://jacob-dev.herokuapp.com';
window.location.hash = '';
window.scrollTo(0, 0);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
