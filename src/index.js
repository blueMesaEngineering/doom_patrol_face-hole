import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';

const navLinks = [
  {
    text: 'Home',
    path: '/',
    // icon: 'ion-ios-home',
  },
  {
    text: 'Contact',
    path: '/Contact',
    // icon: 'ion-ios-megaphone',
  },
  {
    text: 'About',
    path: '/about',
    // icon: 'ion-ios-business',
  },
  {
    text: 'Portfolio',
    path: '/portfolio',
    // icon: 'ion-ios-briefcase',
  }
]

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <NavBar navLinks={ navLinks } />
      </div>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
