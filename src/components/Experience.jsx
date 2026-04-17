import React from 'react'

function Experience() {
  return (
    <section id="experience" className="experience">
        <h3 className="experience-title">Experiencia</h3>
        <div className="experience-container">
            <div className="experience-card">
                <h4 className="job-title">Desarrollador ABAP</h4>
                <p className="company">Capgemini</p>
                <p className="duration">Abr. 2025 - Jun. 2025</p>
                <ul className="functions">
                    <li className="function-item">Desarrollo de reports en lenguaje ABAP</li>
                    <li className="function-item">Uso de Open SQL para trabajo con bases de datos</li>
                    <li className="function-item">Visualización de datos mediante ALVs</li>
                    <li className="function-item">Creación de tablas y ayudas de búsqueda en entorno SAP</li>
                    <li className="function-item">Participar en un bootcamp en el que recibi formación básica en ABAP, UI5 y SAP BTP</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Experience