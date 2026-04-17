import React from 'react'

function Header() {
  return (
    <header id="header" className="navbar">
        <nav>
            <ul className="nav-list">
                <li className="nav-item"><a className="nav-link" href="#start">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#aboutme">Sobre mi</a></li>
                <li className="nav-item"><a className="nav-link" href="#education">Educación</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">Experiencia</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
                <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header