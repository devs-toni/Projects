import React from 'react';
import '../../assets/css/Projects/Projects.css';

const Project = ( { img, title, tech, right } ) => {
  return (
    <div className='project'>
        <div className={right ? 'container reverse' : 'container'}>
          <img className={right ? 'img marginLeft' : 'img'} src={img} alt={title} />
          <div className="info">
              <p className='name'>{title}</p>
              <p className='tech'>{tech}</p>
          </div>
        </div>
    </div>
  )
}

export default Project