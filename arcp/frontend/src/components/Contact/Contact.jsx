import React from 'react';
import Form from './Form';
import MapContainer from './MapContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone as Phone, faEnvelope as Mail } from '@fortawesome/fontawesome-free-solid';
import '../../assets/css/Contact/Contact.css';
const Contact = () => {

  return (
    <div className='contact'>
      <h1 className='title'>Contacto</h1>
      <p className='description'>Por favor, contacta conmigo mediante el formulario o a través de cualquier otro método de contacto que te proporciono si tienes cualquier duda, inquietud o proposición</p>
      <p className='name'>Antonio Rufino Casasus</p>
      <div className="data-contact">
        <div className="data-email">
          <a target='_blank' className='social-link' rel='noreferrer' href="mailto:devs.toni@gmail.com"><FontAwesomeIcon icon={Mail} className='icon' /></a>
          <p className='mail'>devs.toni@gmail.com</p>
        </div>
        <div className="data-phone">
          <a target='_blank' className='social-link' rel='noreferrer' href="https://api.whatsapp.com/send?phone=674767153&text=Hello%20Antonio"><i className="bi bi-whatsapp icon"></i></a>
          <a target='_blank' className='social-link' rel='noreferrer' href="tel:674767153">
            <FontAwesomeIcon icon={Phone} className='icon' />
          </a>
          <p className='phone'>+34 674767153</p>
        </div>
      </div>
      <Form />
      <div className="location-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <p className="location">Ubicación</p>
      </div>
      <MapContainer styles='google-map' />
    </div>
  )
}

export default Contact