import React, { useState } from 'react';
// import { ReactComponent as BellIcon } from './icons/bell.svg';
// import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
// import { ReactComponent as CaretIcon } from './icons/caret.svg';
// import { ReactComponent as PlusIcon } from './icons/plus.svg';
// import { ReactComponent as CogIcon } from './icons/cog.svg';
// import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';

import { Router } from '@reach/router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/about/About'
import Ndguthrie from '../pages/about/Ndguthrie'
import Shallphd from '../pages/about/Shallphd'
import Distralite from '../pages/projects/Distralite'
import Minotaurshoof from '../pages/projects/Minotaurshoof'


function NavBar({ navLinks }) {

  return (
    <div>
      <NavbarDropdownMenu
        navLinks={ navLinks }
      >
        <NavItem icon = { <h2><a href="/">Home</a></h2> }/>
        <NavItem icon = { <h2>About</h2> }>
          <AboutDropdownMenu/>
        </NavItem>
        <NavItem icon = { <h2>Projects</h2> }>
          <ProjectsDropdownMenu/>
        </NavItem>
        <NavItem icon = { <h2><a href="/contact">Contact</a></h2> }/>
      </NavbarDropdownMenu>

      <Router>
      < Contact path = "/contact" />
      {/* < Portfolio path = "/portfolio" /> */}
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
          <DropdownItem>
            <a href="/about">
              About Blue Mesa
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="/ndguthrie">
              Nathan D. Guthrie
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="/shallphd">
              Steve Hall
            </a>
          </DropdownItem>
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
            <DropdownItem>
              <a href="/distralite">
                Distralite
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="/minotaurshoof">
                Minotaur Hoof
              </a>
            </DropdownItem>
          </div>
      </CSSTransition>
    </div>
  );
}

function NavbarDropdownMenu(props) {
  return(
    <nav className="navbarDropdownMenu">
      <ul className="navbarDropdownMenu-nav"> { props.children } </ul>
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

export default NavBar;
