import React from 'react'
import { certifications } from '../data/portfolio';
import './Certifications.css'

function Certifications() {
    return (
        <section id="certifications" className="certifications">
            <h3 className="certifications-header">Certificaciones</h3>
            <div className='certifications-container'>
                {certifications.map((certification) => {
                    return (
                        <div className='certification-card'>
                            <img src={certification.logo} alt={certification.name} className='certification-logo'/>
                            <h4 className='certification-name'>{certification.name}</h4>
                            <p className='certification-organization'>{certification.organization}</p>
                            <p className='certification-expedition-date'>{certification.expedition_date}</p>

                        {certification.expiration_date && (
                            <p className='certification-expiration-date'>{certification.expiration_date}</p>
                        )}

                        {certification.url && (
                            <a href={certification.url} target="_blank" rel="noreferrer" className='certification-url'>
                                Ver certificado
                            </a>
                        )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Certifications;