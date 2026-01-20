import React from 'react'
import proj1 from '../images/img1.jpg'
import proj2 from '../images/elyovel.webp'
import proj3 from '../images/nil.jpg'
import proj4 from '../images/crud.jpeg'

const Projects = () => {
    const projects = [
        {
            id: 1,
            url: proj1,
            title: "Emoil Logistics",
            description: "EMOIL Logistics is a Logistics and delivery company in Lagos, Nigeria. I built the company's website from ground up using modern technologies. The website is fully responsive.",
            stack: ["HTML", "CSS", "Javascript", "React", "Node Js", "Express Js"],
            demo: "https://emoil.com.ng/",
            source: "www.source.com"
        },
        {
            id: 2,
            url: proj2,
            title: "Elyovels International Academy",
            description: "Elyovels International Academy is an excellent basic educational institution aimed at providing quality education at affordable cost. It is a place where young innocent citizens are groomed not just to be academically sound but to be valuable and responsible citizens to influence and impact society positively.",
            stack: ["CSS", "Javascript", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js"],
            demo: "https://elyovelsacademy.com/",
            source: "www.source.com"
        },
        {
            id: 3,
            url: proj3,
            title: "Next Imperial Limited",
            description: "Next Imperial Limited is a tech training center in Lagos, Nigeria. I was contracted to create this beautiful and responsive website for shocasing their courses. I built the site and deliverd on time. The site scales properly across various devices.",
            stack: ["HTML", "CSS", "Javascript", "React", "Node Js", "Express Js"],
            demo: "https://nextimperial.com/",
            source: "www.source.com"
        },
        {
            id: 4,
            url: proj4,
            title: "React CRUD Application",
            description: "This is a demo app I created to demonstrate Create, Read, Update, and Delete (CRUD) operations using Reactjs. This demo project has all the features of a real CRUD application, you can create a new entry and persist in the database, you can read data from the storage, you can update existing data as well as delete a record.",
            stack: ["HTML", "CSS", "Javascript", "React", "Node Js", "Express Js"],
            demo: "https://ibemcaleb.github.io/bookapp-v1/",
            source: "www.source.com"
        },
    ]

  return (
    <div className='Projects' id='projects'>
        <h1>My Projects</h1>
        <div className="project-menu">
            {projects.map((project) => 
                <div key={project.id} className='project-card'>
                    <div className="project-img-div">
                        <img src={project.url} alt={project.title} className='project-img' />
                    </div>
                    <h4>{project.title}</h4>
                    <h5>Project Description</h5>
                    <p className='project-description'>{project.description}</p>
                    <span>
                        <a href={project.demo} target='_blank' rel='noreferrer'>View Project</a>
                        {/* <a href={project.source}>Source Code</a> */}
                    </span>
                </div>
            )}
        </div>
    </div>
  )
}

export default Projects