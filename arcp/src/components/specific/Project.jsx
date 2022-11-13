import React from 'react';
import '../../styles/project.css';

const Project = ( { img, title, tech } ) => {
  return (
    <div className='project'>
        <img className='img' src={img} alt={title} />
        <div className="info">
            <p className='name'>{title}</p>
            <p className='tech'>{tech}</p>
        </div>
    </div>
  )
}

export default Project