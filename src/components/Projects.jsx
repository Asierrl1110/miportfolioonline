import React from 'react'
import brainboostClient from '../assets/img/brainboostclient.jpg'
import brainboostServer from '../assets/img/brainboostserver.jpg'
import cajaRegistradora from '../assets/img/cajaregistradora.jpg'

function Projects() {
  return (
    <section id="projects" className="projects">
        <h3 className="projects-title">Proyectos</h3>
        <div className="projects-container">
            <div className="project-card">
                <img className="project-image" src={brainboostClient} alt="Imagen proyecto"/>
                <p className="project-name">Brainboost Client</p>
                <p className="project-text">
                    Brainboost es una aplicación de estudio de flashcards, su objetivo es ayudar a los distintos
                    usuarios de
                    la aplicación para la memorización y aprendizaje de una forma más rápida de conceptos clave.
                </p>
                <ul className="project-tecnologies">
                    <li>Kotlin</li>
                    <li>SQLite</li>
                </ul>
                <button className="project-button" id="btnBrainboostClient">Ver proyecto</button>
            </div>
            <div className="project-card">
                <img className="project-image" src={brainboostServer} alt="Imagen proyecto"/>
                <p className="project-name">Brainboost Server</p>
                <p className="project-text">
                    Brainboost es una aplicación de estudio de flashcards, su objetivo es ayudar a los distintos
                    usuarios de
                    la aplicación para la memorización y aprendizaje de una forma más rápida de conceptos clave.
                </p>
                <ul className="project-tecnologies">
                    <li>Java</li>
                    <li>SQL Server</li>
                </ul>
                <button className="project-button" id="btnBrainboostServer">Ver proyecto</button>
            </div>
            <div className="project-card">
                <img className="project-image" src={cajaRegistradora} alt="Imagen proyecto"/>
                <p className="project-name">Caja Registradora</p>
                <p className="project-text">Consiste en una simulación de una caja registradora de supermercado, permitiendo
                    la
                    gestión de usuarios y productos, la realización de ventas y la generación de tickets en formato TXT
                    y
                    CSV.</p>
                <ul className="project-tecnologies">
                    <li>Java</li>
                    <li>JavaSwing</li>
                    <li>JavaHelp</li>
                </ul>
                <button className="project-button" id="btnCajaRegistradora">Ver proyecto</button>
            </div>
        </div>
    </section>
  )
}

export default Projects