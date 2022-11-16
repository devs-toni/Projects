import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/specificComponentsStyles/button.css';

const Button = ( { router, name, desc } ) => {
  return (
    <div className='btn'>
        <p className='big'><Link className='link' to={router}>{name}</Link></p>
        <span className='small'>{desc}</span>
    </div>
  )
}

export default Button