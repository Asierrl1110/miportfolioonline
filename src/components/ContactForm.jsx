import React, { useState } from 'react'
import emailjs from "@emailjs/browser"

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
                <input type="text" name="name" placeholder="Nombre" required className='form-name'
                    value={formData.name} onChange={onChange} />
                <input type="email" name="email" placeholder="Email" required className='form-email'
                    value={formData.email} onChange={onChange} />
                <textarea name="message" placeholder="Mensaje" rows="5" required className='form-message'
                    value={formData.message} onChange={onChange} />
                <button type='submit' className='form-sendbutton'>Enviar</button>
            </form>
        </section>
    )
}

export default ContactForm