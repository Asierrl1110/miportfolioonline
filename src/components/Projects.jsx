import React from 'react'
import brainboostClient from '../assets/img/brainboostclient.jpg'
import brainboostServer from '../assets/img/brainboostserver.jpg'
import cajaRegistradora from '../assets/img/cajaregistradora.jpg'
import { projects } from '../data/portfolio'

function Projects() {

    var goTo = (url) => {
        window.open(url);
    }

    return (
        <section id="projects" className="projects">
            <h3 className="projects-title">Proyectos</h3>
            <div className="projects-container">
                {projects.map((project) => {
                    return (
                        <div className="project-card">
                        <img className="project-image" src={project.image} alt="Imagen proyecto" />
                        <p className="project-name">{project.name}</p>
                        <p className="project-text">{project.text}</p>
                        <ul className="project-tecnologies">
                            {project['tecnologies'].map((item) => {
                                return ( <li>{item}</li> )
                            })}
                        </ul>
                        <button className="project-button" id="btnBrainboostClient" onClick={() => { goTo(project.url) }}>Ver proyecto</button>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects