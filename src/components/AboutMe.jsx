import React from 'react'
import { aboutme } from '../data/portfolio'
import './AboutMe.css'

function AboutMe() {
  return (
    <section id="aboutme" className="aboutme">
        <div className="aboutme-container">
            <h3 className="aboutme-title">Sobre mi</h3>
            {aboutme.map((item, index) => {
                return (
                    <p key={index} className="aboutme-text">{item}</p>
                )
            })}
        </div>
    </section>
  )
}

export default AboutMe