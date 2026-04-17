import React from 'react'
import java from '../assets/img/java.svg'
import csharp from '../assets/img/csharp.png'
import kotlin from '../assets/img/kotlin.png'
import html from '../assets/img/html5.png'
import css from '../assets/img/css.png'
import javascript from '../assets/img/javascript.png'
import nodejs from '../assets/img/nodejs.png'
import expressjs from '../assets/img/expressjs.svg'
import reactt from '../assets/img/react.png'
import python from '../assets/img/python.png'
import sqlserver from '../assets/img/sqlserver.png'
import mongodb from '../assets/img/mongodb.png'
import git from '../assets/img/git.png'
import github from '../assets/img/github.png'
import postman from '../assets/img/postman.png'

function Skills() {
  return (
    <section id="skills" className="skills">
        <h3 className="skills-title">Tecnologías</h3>
        <ul className="skills-list">
            <li className="skill-element">
                <div className="skill-content">
                    <img src={java} alt="Imagen tecnologia"/>
                    <p>Java</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={csharp} alt="Imagen tecnologia"/>
                    <p>C#</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={kotlin} alt="Imagen tecnologia"/>
                    <p>Kotlin</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={html} alt="Imagen tecnologia"/>
                    <p>HTML</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={css} alt="Imagen tecnologia"/>
                    <p>CSS</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={javascript} alt="Imagen tecnologia"/>
                    <p>JavaScript</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={nodejs} alt="Imagen tecnologia"/>
                    <p>Node.js</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={expressjs} alt="Imagen tecnologia"/>
                    <p>Express.js</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={reactt} alt="Imagen tecnologia"/>
                    <p>React</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={python} alt="Imagen tecnologia"/>
                    <p>Python</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={sqlserver} alt="Imagen tecnologia"/>
                    <p>SQL Server</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={mongodb} alt="Imagen tecnologia"/>
                    <p>MongoDB</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={git} alt="Imagen tecnologia"/>
                    <p>Git</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={github} alt="Imagen tecnologia"/>
                    <p>GitHub</p>
                </div>
            </li>
            <li className="skill-element">
                <div className="skill-content">
                    <img src={postman} alt="Imagen tecnologia"/>
                    <p>Postman</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Skills