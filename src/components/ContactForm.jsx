import React, { useState } from 'react'
import emailjs from "@emailjs/browser"

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            alert("Correo enviado");
        } catch (error) {
            alert("Error al enviar");
        }

        console.log();
    }

    return (
        <section id='contactform' className='contactform'>
            <h2>Formulario de contacto</h2>
            <form onSubmit={onSubmit} className='form-div'>
                <div className='form-group'>
                    <label>Nombre <span className='form-required'>*</span></label>
                    <input type="text" name="name" placeholder="Tu Nombre" required className='form-name'
                    value={formData.name} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label>Email <span className='form-required'>*</span></label>
                    <input type="email" name="email" placeholder="Tu Email" required className='form-email'
                                        value={formData.email} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label>Asunto <span className='form-required'>*</span></label>
                    <input type="text" name="subject" placeholder="Asunto del correo" required className='form-subject'
                                        value={formData.subject} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label>Mensaje <span className='form-required'>*</span></label>
                    <textarea name="message" placeholder="Mensaje que me quieras enviar por correo" rows="5" 
                    required className='form-message' value={formData.message} onChange={onChange} />
                </div>
                <span className='form-required'>* Campos obligatorios</span>
                <button type='submit' className='form-sendbutton'>Enviar</button>
            </form>
        </section>
    )
}

export default ContactForm