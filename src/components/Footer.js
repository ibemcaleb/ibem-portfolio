import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-contact">
            <span>
                <FaPhone />
                <p>+234 803 388 6920</p>
            </span>
            <span>
                <FaEnvelope />
                <p>iocaleb25@gmail.com</p>
            </span>
        </div>
        <div className="footer-social">
            <a href="https://www.linkedin.com/in/ibemcaleb/" target='_blank' rel='noreferrer'><FaLinkedin /></a>
            <a href="https://github.com/ibemcaleb" target='_blank' rel='noreferrer'><FaGithubSquare /></a>
        </div>
    </div>
  )
}

export default Footer