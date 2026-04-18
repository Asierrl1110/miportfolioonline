import React from 'react'
import { experience as experiences } from '../data/portfolio'

function Experience() {
    return (
        <section id="experience" className="experience">
            <h3 className="experience-title">Experiencia</h3>
            <div className="experience-container">
                {experiences.map((experience) => {
                    return (
                        <div className="experience-card">
                            <h4 className="job-title">{experience.title}</h4>
                            <p className="company">{experience.company}</p>
                            <p className="duration">{experience.duration}</p>
                            <ul className="functions">
                                {experience['function-items'].map((item) => {
                                return (
                                    <li className="function-item">{item}</li>
                                )
                            })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience