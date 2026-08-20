import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isDark, setIsDark] = useState(false)

  // Al cargar el componente, detectar el tema inicial
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDark(true)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDark(false)
    }
  }, [])

  // Alternar tema claro / oscuro
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <header id="header" className="navbar">
        <nav>
            <ul className="nav-list">
                <li className="nav-item"><a className="nav-link" href="#start">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#aboutme">Sobre mi</a></li>
                <li className="nav-item"><a className="nav-link" href="#education">Educación</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">Experiencia</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
                <li className="nav-item"><a className="nav-link" href="#certifications">Certificaciones</a></li>
                <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="#contactform">Contacto</a></li>
                <button 
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Cambiar tema"
              >
                {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
              </button>
            </ul>
        </nav>
    </header>
  )
}

export default Header