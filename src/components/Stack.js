import React from 'react'
import html from '../images/html5.png'
import css from '../images/css3.png'
import js from '../images/js.png'
import react from '../images/reactjs.png'
import node from '../images/nodejs.png'
import express from '../images/express.png'
import redux from '../images/redux.png'
import mongodb from '../images/mongodb.png'
import mongoose from '../images/mongoose.png'
import jest from '../images/jest.png'
import restapi from '../images/rest-api-1.svg'
import ts from '../images/ts.png'
import nextjs from '../images/nextjs.jpg'
import tailwind from '../images/tailwind.png'
import bootstrap from '../images/bootstrap.jpeg'
import git from '../images/git.png'
import sql from '../images/sql.png'
import aws from '../images/aws.png'

const Stack = () => {
    const skills = [
        {
            id: 1,
            url: html,
            title: "html5"
        },
        {
            id: 2,
            url: css,
            title: "css3"
        },
        {
            id: 3,
            url: js,
            title: "js"
        },
        {
            id: 4,
            url: ts,
            title: "ts"
        },
        {
            id: 5,
            url: react,
            title: "reactjs"
        },
        {
            id: 6,
            url: node,
            title: "node"
        },
        {
            id: 7,
            url: express,
            title: "express"
        },
        {
            id: 8,
            url: redux,
            title: "redux"
        },
        {
            id: 9,
            url: mongodb,
            title: "mongodb"
        },
        {
            id: 10,
            url: mongoose,
            title: "mongoose"
        },
        {
            id: 11,
            url: jest,
            title: "jest"
        },
        {
            id: 12,
            url: restapi,
            title: "restapi"
        },
        {
            id: 13,
            url: nextjs,
            title: "nextjs"
        },
        {
            id: 14,
            url: tailwind,
            title: "tailwind"
        },
        {
            id: 15,
            url: bootstrap,
            title: "bootstrap"
        },
        {
            id: 16,
            url: git,
            title: "git"
        },
        {
            id: 17,
            url: sql,
            title: "sql"
        },
        {
            id: 18,
            url: aws,
            title: "aws"
        },
    ]
    
  return (
    <div className='Stack' id='skills'>
        <h1>My Technical Skills</h1>
        <div className="skills">
            {skills.map((skill) => 
                <div key={skill.id} className='skill-div'>
                    <img src={skill.url} alt={skill.title} className='skill-img' />
                </div>
            )}
        </div>
    </div>
  )
}

export default Stack