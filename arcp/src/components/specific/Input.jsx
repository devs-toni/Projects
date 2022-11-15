import React from 'react';
import '../../styles/specificComponentsStyles/input.css';

const Input = ({ name, type }) => {
  return (
    <div className='form-input'>
            <label>{name}</label>
            <input className='input' type={type} />
    </div>
  )
}

export default Input