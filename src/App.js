import React, { useState } from 'react';
import { Router } from '@reach/router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/about/About'
import Ndguthrie from './pages/about/Ndguthrie'
import Shallphd from './pages/about/Shallphd'
import Distralite from './pages/projects/Distralite'
import Minotaurshoof from './pages/projects/Minotaurshoof'

import NavBar from './components/NavBar';

function App() {
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

  return (
    <div>
      <NavBar navLinks={ navLinks } />
      <Router>
        < Contact path = "/contact" />
        < Home path = "/" />
        < About path = "/about" />
        < Ndguthrie path = "/ndguthrie" />
        < Shallphd path = "/shallphd" />
        < Distralite path = "/distralite" />
        < Minotaurshoof path = "/minotaurshoof" />
      </Router>
    </div>
  );
}

export default App;
