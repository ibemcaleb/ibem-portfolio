import React, { useState} from 'react'
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'
import CALEB_RESUME from '../images/CALEB_RESUME.pdf'

const Header = () => {
    const [barTimes, setBarTimes] = useState(true)

    const handleMenu = () => {
        const nav = document.querySelector('.nav')
        nav.classList.toggle('show')
        setBarTimes(!barTimes)
    }

  return (
    <div className='Header'>
        <a href='#home' className='logo effect-3d'>Caleb Ibem</a>
        <div className="header-contact">
            <span><FaPhoneAlt /> 08166558072</span>
        </div>
        <div className="bar-times" onClick={handleMenu}>
            {barTimes ? <FaBars /> : <FaTimes />}
        </div>
        <nav className='nav'>
            <ul>
                <li><a href="#home" className='menu' onClick={handleMenu}>Home</a></li>
                <li><a href="#skills" className='menu' onClick={handleMenu}>Skills</a></li>
                <li><a href="#projects" className='menu' onClick={handleMenu}>Projects</a></li>
                <li><a href="#contact" className='menu' onClick={handleMenu}>Contact</a></li>
                <li><a href={CALEB_RESUME} download={CALEB_RESUME.pdf} target='_blank' rel='noreferrer' className='menu cv' onClick={handleMenu}>My Resume</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header