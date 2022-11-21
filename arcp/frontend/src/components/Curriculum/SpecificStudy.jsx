import React, { useEffect, useState } from 'react';
import '../../assets/css/Curriculum/Study.css';

const SpecificStudy = ({ name, center, description, date }) => {

  return (
    <div className='study'>
      <div className='name'>
        <p className='text-name'>{name}</p>
        <p className='school'>{center}</p>
        <p className='data'>{date}</p>
      </div>
      <div className='description'>
        <ul className='text-description'>
          {description.map(line => {
            <li>{line}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default SpecificStudy