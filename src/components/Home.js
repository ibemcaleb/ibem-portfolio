import React from 'react'
import dev from '../images/img22.jpg'
import caleb from '../images/caleb.jpg'

const Home = () => {
  return (
    <div className='Home' id='home'>
        <img src={dev} alt="developer" className='profile-img' />
        <div className='profile-container'>
            <div className="profile-wrapper">
              <div className="profile-text">
                <h1>About Me</h1><br />
                <p>My name is Caleb Ibem, a graduate of Computer Science and a professional web developer.
                  I build functional, dynamic and responsive UI components that scale gracefully on different view devices (mobile, tablet and desktop).
                  Over the years, I have gathered experiences and mastered the use of various web technologies. 
                  Such as Reactjs, Redux Toolkit, Nodejs, Express, MongoDB, etc.
                  </p>
                <p>I am proficient in the use of modern technologies for front-end and back-end development. I am available for hire.</p>
              </div>
              <div className="profile-photo">
                  <img src={caleb} alt="caleb" className='caleb-photo' />
              </div>
            </div>
              <a href="#contact" className='hire-me'>Hire Me</a>
        </div>
    </div>
  )
}

export default Home