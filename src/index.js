import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // <HashRouter>
  //   <App />
  // </HashRouter>,
  <BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);
