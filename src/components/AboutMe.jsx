import React from 'react'
import { aboutme } from '../data/portfolio'

function AboutMe() {
  return (
    <section id="aboutme" className="aboutme">
        <div className="aboutme-container">
            <h3 className="aboutme-title">Sobre mi</h3>
            {aboutme.map((item) => {
                return (
                    <p className="aboutme-text">{item}</p>
                )
            })}
        </div>
    </section>
  )
}

export default AboutMe