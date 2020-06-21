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

function App() {
  return (
    <Navbar>
      <NavItem icon = { <h2 style={{}}>About</h2> }>
        <AboutDropdownMenu/>
      </NavItem>
      <NavItem icon = { <h2 style={{}}>Projects</h2> }>
        <ProjectsDropdownMenu/>
      </NavItem>
      <NavItem icon = { <h2 style={{}}>Contact</h2> }/>

      {/* <NavItem icon = { <CaretIcon /> }>
        <DropdownMenu/>
      </NavItem> */}

    </Navbar>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>

        <span className="icon-button">{ props.leftIcon }</span>
        { props.children }

        <span className="icon-right">{ props.rightIcon }</span>
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
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings"
              >                
                Settings
            </DropdownItem>
          </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'settings'} 
        unmountOnExit 
        timeout={500}
        classNames='menu-secondary'
        onEnter={calcHeight}
        >
          <div className='menu'>
            <DropdownItem leftIcon={<ArrowIcon />} goToMenu='main' />
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}>
                Settings
            </DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}>
                Settings
            </DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}>
                Settings
            </DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}>
                Settings
            </DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}>
                Settings
            </DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}>
                Settings
            </DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}>
                Settings
            </DropdownItem>
          </div>
      </CSSTransition>

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
            <DropdownItem>Nathan D. Guthrie</DropdownItem>
            <DropdownItem>Steve Hall</DropdownItem>
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
