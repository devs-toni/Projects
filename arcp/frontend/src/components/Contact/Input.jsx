import React from 'react';
import '../../assets/css/Contact/Input.css';

const Input = ({ name, type, blur, change, val }) => {
  return (
    <div className='form-input'>
            <label>{`${name.charAt(0).toUpperCase()}${name.substring(1)}`}</label>
            <input className='input' name={name} type={type} onBlur={blur} onChange={change} value={val} />
    </div>
  );
};

export default Input;