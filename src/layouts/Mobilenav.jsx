import React from 'react'
import '../assets/styles/MobileNav.css'
const Mobilenav = ({isOpen,toggleMenu}) => {
   
  return (
    <>
    <div className={`mobile-menu ${isOpen?"active":""}`}  
    onClick={toggleMenu}
    >
        <div className='mobile-menu-container' >
        <h4 className='h41'>Development Stretch</h4>
        <ul className='mobile-ul' >
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
          <button className='mobile-btn'>Hire Me</button>
        </li>
      </ul>
        </div>

    </div>
    </>

  )
}

export default Mobilenav
