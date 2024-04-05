import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import Mobilenav from './Mobilenav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='navbar-container'>
        <h4 className='nav-h4'>Development Stretch</h4>
        <ul className='navbar-ul'>
          <li>
            <a className='menu-item'>Home</a>
          </li>
          <li>
            <a className='menu-item'>Skills</a>
          </li>
          <li>
            <a className='menu-item'>Work Experience</a>
          </li>
          <li>
            <a className='menu-item'>Contact Me</a>
          </li>
          <li>
            <button className='nav-btn'>Hire Me</button>
          </li>
        </ul>
        <button className="menu-btn" onClick={toggleMenu}>
          <span className="material-icons-outlined" style={{ fontSize: "1.8rem" }}>
            {openMenu ? "close" : "menu"}
          </span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
