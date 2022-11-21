import React from 'react';
import '../../assets/css/Curriculum/Study.css';

const SpecificStudy = ({name, school, description, data}) => {
  return (
    <div className='study'>
      <div className='name'>
        <p className='text-name'>{name}</p>
        <p className='school'>{school}</p>
        <p className='data'>{data}</p>
      </div>
      <div className='description'>
        <p className='text-description'>   
        </p>
      </div>
    </div>
  )
}

export default SpecificStudy