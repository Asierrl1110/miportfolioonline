import React from 'react'
import { education as educations } from '../data/portfolio'

function Education() {
    return (
        <section id="education" className="education">
            <h3 className="education-header">Educación</h3>
            <div className="education-container">
                {educations.map((education) => {
                    return (
                        <div className="education-card">
                            <h4 className="education-title">{education.title}</h4>
                            <p className="education-school">{education.school}</p>
                            <p className="education-duration">{education.duration}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Education