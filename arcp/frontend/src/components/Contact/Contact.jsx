import React from 'react';
import Form from './Form';
import MapContainer from './MapContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone as Phone, faEnvelope as Mail, Whatsapp } from '@fortawesome/fontawesome-free-solid';
import '../../assets/css/Contact/Contact.css';

const Contact = () => {

  return (
    <div className='contact'>
      <h1 className='title'>Contact</h1>
      <p className='description'>Please contact me through the form or through my contact information.</p>
      <p className='name'>Antonio Rufino Casasus</p>
      <div className="data-contact">
        <div className="data-email">
        <a target='_blank' className='social-link' href="mailto:devs.toni@gmail.com"><FontAwesomeIcon icon={Mail} className='icon' /></a>
          <p className='mail'>devs.toni@gmail.com</p>
        </div>
        <div className="data-phone">
        <a target='_blank' className='social-link' href="https://api.whatsapp.com/send?phone=674767153&text=Hello%20Antonio"><i className="bi bi-whatsapp icon"></i></a>
          <a target='_blank' className='social-link' href="tel:674767153">
            <FontAwesomeIcon icon={Phone} className='icon' />
          </a>
          <p className='phone'>+34 674767153</p>
        </div>
      </div>
      <Form />
      <MapContainer styles='google-map' />
    </div>
  )
}

export default Contact