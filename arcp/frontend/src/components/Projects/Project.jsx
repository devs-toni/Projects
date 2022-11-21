import React from 'react';
import '../../assets/css/Projects/Projects.css';
import arcp from '../../assets/img/Projects/arcp.png';
import calc from '../../assets/img/Projects/calculadora.png';

const Project = ( { id, project } ) => {
  return (
    <div className='project'>
        <div className={id % 2 === 0 ? 'container reverse' : 'container'}>
          <img className={id % 2 === 0 ? 'img marginLeft' : 'img'} src={project.image} alt={project.name} />
          <div className="info">
              <p className='name'>{project.name}</p>
              <p className='description'>{project.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Project