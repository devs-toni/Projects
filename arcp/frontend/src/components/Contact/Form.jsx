import React from 'react'
import Input from './Input';
import '../../assets/css/Contact/Form.css';
import { CheckBox } from '@mui/icons-material';

const Form = () => {
  return (
    <form className='form'>
      <div className="column">
        <Input type='text' name='Nombre' />
        <Input type='text' name='Email' />
        <Input type='text' name='Teléfono' />
        <Input type='text' name='Asunto' />
      </div>
      <div className="comments">
        <label>Message</label>
        <textarea className='textarea' />
      </div>
      <div className="politica">
        <input type="checkbox" />
        <label htmlFor="">I have read and accept the privacy policy</label>
      </div>
      <div className="submit-container">
        <input type='submit' className='submit' value='ENVIAR' />
        </div>
    </form>
  )
}

export default Form