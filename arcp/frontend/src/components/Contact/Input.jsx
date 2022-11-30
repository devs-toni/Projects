import React from 'react';
import '../../assets/css/Contact/Input.css';

const Input = ({ name, type, placeholder, blur, change, val, required, error }) => {
  return (
    <div className='margin'>
      <div className='form-input'>
        <label>{placeholder}</label>
        <input className='input' name={name} type={type} onBlur={blur} onChange={change} value={val} required={required && required} />
      </div>
      <p className='error'>{error}</p>
    </div>
  );
};

export default Input;