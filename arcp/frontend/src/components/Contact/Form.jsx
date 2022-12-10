import React from 'react'
import Input from './Input';
import '../../assets/css/Contact/Form.css';
import { useForm } from '../../hooks/useForm';
import Loader from '../Loader';
import Message from '../Message';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  comments: ''
}

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[.-]?){1,}@[a-z]+[.]\w{2,}$/;
  let regexPhone = /[0-9]/;
  let regexSubject = /^.{1,40}$/;
  let regexComments = /^.{1,255}$/;

  if (form.name && !regexName.test(form.name.trim())) {
    errors.name = '"Nombre" solo acepta letras y espacios en blanco';
  }
  if (form.email && !regexEmail.test(form.email.trim())) {
    errors.email = 'El formato "Email" introducido no és válido';
  }
  if (form.phone && !regexPhone.test(form.phone.trim())) {
    errors.phone = 'El formato "Phone" indroducido no és válido';
  }
  if (form.subject && !regexSubject.test(form.subject.trim())) {
    errors.subject = '"Subject" solo puede contener 40 caracteres'
  }
  if (form.comments && !regexComments.test(form.comments.trim())) {
    errors.comments = '"Comments" solo puede contener 255 caracteres'
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
    handleSubmit,
    handleBlur
  } = useForm(initialForm, validateForm);
  const {texts} = useContext(LanguageContext);

  return (
    <>
      {loading ? <Loader /> : 
      <form action='f2834b9068e7ce4a793c0fa0d1519fd5' className='form' onSubmit={handleSubmit}>
        <div className="column">
          <Input type='text' name='name' placeholder={texts.form.name}  blur={handleBlur} change={handleChange} val={form.name} required error={errors.name && errors.name} />
          <Input type='email' name='email' placeholder='Email' blur={handleBlur} change={handleChange} val={form.email} required error={errors.email && errors.email} />
          <Input type='text' name='phone' placeholder={texts.form.phone}  blur={handleBlur}  change={handleChange} val={form.phone} error={errors.phone && errors.phone} />
          <Input type='text' name='subject' placeholder={texts.form.subject}  blur={handleBlur} change={handleChange} val={form.subject} required error={errors.subject && errors.subject} />
        </div>
        <div className="comments-column">
          <div className="comments">
            <label>{texts.form.message}</label>
            <textarea className='textarea' name='comments'  onBlur={handleBlur} onChange={handleChange} value={form.comments} required />
          </div>
          {errors.comments && (<p className='errorComments'>{errors.comments}</p>)}
        </div>
        <div className="submit-container">
          <input type='submit' className='submit' value={texts.form.submit} />
        </div>
      </form>}
      {response && (<Message msg='Los datos han sido enviados' bgColor='var(--react-secondary-color-changing)' />)}
    </>
  )
}

export default Form;