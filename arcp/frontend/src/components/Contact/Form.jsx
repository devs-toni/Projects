import React from 'react'
import Input from './Input';
import '../../assets/css/Contact/Form.css';
import { useForm } from '../../hooks/useForm';
import Loader from '../Loader';
import Message from '../Message';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  comments: '',
  privacy: false
}

let styles = {
  fontWeight: '600',
  color: 'red'
}

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[.-]?){1,}@[a-z]+[.]\w{2,}$/;
  let regexPhone = /[0-9]/;
  let regexComments = /^.{1,255}$/;

  if (!form.email.trim()) {
    errors.email = 'El campo "Email" es obligatorio';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'El campo "Email" no és válido';
  }

  if (!form.phone.trim()) {
    errors.phone = 'El campo "Phone" es obligatorio';
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = 'El campo "Phone" no és válido';
  }

  if (!form.subject.trim()) {
    errors.subject = 'El campo "Asunto" es obligatorio';
  }

  if (!form.comments.trim()) {
    errors.comments = 'El campo "Comentarios" es obligatorio';
  } else if (!regexComments.test(form.name.trim())) {
    errors.comments = 'El campo "Comments" solo puede contener 255 caracteres'
  }

  return errors;
}

const validateName = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!form.name.trim()) {
    errors.name = 'El campo "Nombre" es obligatorio';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco';
  }
  return errors;
}

const Form = () => {

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleBlurName,
    handleSubmit
  } = useForm(initialForm, validateForm, validateName);

  return (
    <>
      <form action='f2834b9068e7ce4a793c0fa0d1519fd5' mothod="POST" className='form' onSubmit={handleSubmit}>
        <div className="column">
          <Input type='text' name='name' blur={handleBlurName} change={handleChange} val={form.name} />
          {errors.name && (<h4 style={styles}>{errors.name}</h4>)}
          <Input type='email' name='email' blur={handleBlur} change={handleChange} val={form.email} />
          {errors.email && (<h4 style={styles}>{errors.email}</h4>)}
          <Input type='text' name='phone' blur={handleBlur} change={handleChange} val={form.phone} />
          {errors.phone && (<h4 style={styles}>{errors.phone}</h4>)}
          <Input type='text' name='subject' blur={handleBlur} change={handleChange} val={form.subject} />
          {errors.subject && (<h4 style={styles}>{errors.subject}</h4>)}
        </div>
        <div className="comments">
          <label>Message</label>
          <textarea className='textarea' name='comments' onBlur={handleBlur} onChange={handleChange} value={form.comments} />
          {errors.comments && (<h4 style={styles}>{errors.comments}</h4>)}
        </div>
        <div className="politica">
          <input type="checkbox" name='privacy' onChange={handleChange} value={form.privacy} />
          <label htmlFor="">I have read and accept the privacy policy</label>
        </div>
        <div className="submit-container">
          <input type='submit' className='submit' value='ENVIAR' />
        </div>
      </form>
      {loading && <Loader />}
      {response && (<Message msg='Los datos han sido enviados' bgColor='green' />)}
    </>
  )
}

export default Form;