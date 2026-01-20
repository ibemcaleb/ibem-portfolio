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
                <p>Full Stack Engineer with 5+ years of experience building and deploying scalable web applications using React.js, Next.js, Node.js, Express.js, and RESTful APIs. Strong background in developing secure backend services, integrating databases, and delivering responsive, user-focused frontend interfaces.
                  </p><br />
                <p>Experienced in working across the full development lifecycle—from requirements gathering to deployment and optimization—on production systems. Comfortable collaborating with cross-functional teams and translating business needs into reliable technical solutions.</p>&nbsp;
                <p>Tech Stack: React, Next.js, Node.js, Express.js, TypeScript, MongoDB, Mongoose, Git.</p>&nbsp;
                <p>Open to FullStack Engineer, Backend Engineer, Frontend Engineer roles where I can contribute to building impactful, scalable digital products.</p>
              </div>
              {/* <div className="profile-photo"> */}
                  <img src={caleb} alt="caleb" className='caleb-photo' />
              {/* </div> */}
            </div>
              <a href="#contact" className='hire-me'>Hire Me</a>
        </div>
    </div>
  )
}

export default Home