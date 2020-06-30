import React, { useState } from 'react';
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
    </div>
  );
}

export default App;
