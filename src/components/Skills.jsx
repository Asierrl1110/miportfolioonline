import React from 'react'
import { skills } from '../data/portfolio'

function Skills() {
    return (
        <section id="skills" className="skills">
            <h3 className="skills-title">Tecnologías</h3>
            <ul className="skills-list">
                {skills.map((skill) => {
                    return (
                        <li className="skill-element">
                            <div className="skill-content">
                                <img src={skill.image} alt="Imagen tecnologia" />
                                <p>{skill.name}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Skills