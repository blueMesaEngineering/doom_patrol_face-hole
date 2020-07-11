import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from "react-router-dom";


function NavBar({ navLinks }) {

  return (
    <div>
      <NavbarDropdownMenu
        navLinks={ navLinks }
      >
        <NavItem icon = { <h2>
                            <NavLink exact to="/">
                              Home
                            </NavLink>
                          </h2> }/>
        <NavItem icon = { <h2>About</h2> }>
          <AboutDropdownMenu/>
        </NavItem>
        <NavItem icon = { <h2>Projects</h2> }>
          <ProjectsDropdownMenu/>
        </NavItem>
        <NavItem icon = { <h2>
                            <NavLink exact to="/contact">
                              Contact
                            </NavLink>
                          </h2> }/>
      </NavbarDropdownMenu>
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
        { props.children }
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
            <NavLink exact to="/about">
              About Blue Mesa
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink exact to="/ndguthrie">
              Nathan D. Guthrie
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink exact to="/shallphd">
              Steve Hall
            </NavLink>
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
        { props.children }
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
              <NavLink exact to="/distralite">
                Distralite
              </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink exact to="/minotaurshoof">
                Minotaur Hoof
              </NavLink>
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
