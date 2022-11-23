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
          <FontAwesomeIcon icon={Mail} className='icon' />
          <p className='mail'>devs.toni@gmail.com</p>
        </div>
        <div className="data-phone">
          <i class="bi bi-whatsapp icon"></i>
          <FontAwesomeIcon icon={Phone} className='icon' />
          <p className='phone'>+34 674767153</p>
        </div>
      </div>
      <Form />
      <MapContainer styles='google-map' />
    </div>
  )
}

export default Contact