import React from 'react'
import fotoPersonal from '../assets/img/fotopersonal.jpg'

function Start() {
  return (
    <section id="start" className="start">
        <div className="start-photo">
            <img src={fotoPersonal} alt="Foto de Asier"/>
        </div>
        <h2 className="start-title">Hola, soy Asier Rodríguez Lamas</h2>
        <h3 className="start-subtitle">Desarrollador de Software junior</h3>
        <h3 className="start-subtitle">Correo electrónico: asierlamas05@gmail.com</h3>
        <div className="start-buttons">
            <button className="btn btn-linkedin" id="btnLinkedIn">LinkedIn</button>
            <button className="btn btn-github" id="btnGitHub">GitHub</button>
            <button className="btn btn-cv" id="btnDescargarCV">Descargar CV</button>
        </div>
    </section>
  )
}

export default Start