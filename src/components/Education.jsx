import React from 'react'

function Education() {
  return (
    <section id="education" className="education">
        <h3 className="education-header">Educación</h3>
        <div className="education-container">
            <div className="education-card">
                <h4 className="education-title">CFGS Desarrollo de Aplicaciones Web</h4>
                <p className="education-school">CIFP La Laboral</p>
                <p className="education-duration">Sept. 2025 - Jun. 2027</p>
            </div>
            <div className="education-card">
                <h4 className="education-title">CFGS Desarrollo de Aplicaciones Multiplataforma</h4>
                <p className="education-school">IES Número 1</p>
                <p className="education-duration">Sept. 2023 - Jun. 2025</p>
            </div>
            <div className="education-card">
                <h4 className="education-title">Bachillerato</h4>
                <p className="education-school">IES Montevil</p>
                <p className="education-duration">Sept. 2021 - Jun. 2023</p>
            </div>
        </div>
    </section>
  )
}

export default Education