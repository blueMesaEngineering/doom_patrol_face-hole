import React, { useState } from 'react';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';


import { Router } from '@reach/router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Ndguthrie from './pages/about/Ndguthrie'
import Shallphd from './pages/about/Shallphd'


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
      text: 'Blog',
      path: '/blog',
      // icon: 'ion-ios-bonfire',
    },
    {
      text: 'Portfolio',
      path: '/portfolio',
      // icon: 'ion-ios-briefcase',
    }
  ]

  return (
    <div>
      <Navbar
        navLinks={ navLinks }
      >
        <NavItem icon = { <h2><a href="/home">Home</a></h2> }/>
        <NavItem icon = { <h2>About</h2> }>
          <AboutDropdownMenu/>
        </NavItem>
        <NavItem icon = { <h2>Projects</h2> }>
          <ProjectsDropdownMenu/>
        </NavItem>
        <NavItem icon = { <h2><a href="/contact">Contact</a></h2> }/>
      </Navbar>

      <Router>
      < Contact path = "/contact" />
      {/* < Portfolio path = "/portfolio" /> */}
      < Home path = "/home" />
      < Ndguthrie path = "/ndguthrie" />
      < Shallphd path = "/shallphd" />
      </Router>
    </div>
  );
}

function AboutDropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>

        {/* <span className="icon-button">{ props.leftIcon }</span> */}
        { props.children }

        {/* <span className="icon-right">{ props.rightIcon }</span> */}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
        >
          <div className='menu'>
            <DropdownItem><a href="/ndguthrie">Nathan D. Guthrie</a></DropdownItem>
            <DropdownItem><a href="/shallphd">Steve Hall</a></DropdownItem>
          </div>
      </CSSTransition>
    </div>
  );
}

function ProjectsDropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>

        {/* <span className="icon-button">{ props.leftIcon }</span> */}
        { props.children }

        {/* <span className="icon-right">{ props.rightIcon }</span> */}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
        >
          <div className='menu'>
            <DropdownItem>Distralite</DropdownItem>
            <DropdownItem>Minotaur Hoof</DropdownItem>
          </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props) {
  return(
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children } </ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);
  return(
    <li>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)} >
        { props.icon }
      </a>

      {open && props.children}

    </li>
  );
}

export default App;
