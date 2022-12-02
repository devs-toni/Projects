import React from 'react';
import '../../assets/css/Projects/Projects.css';
import Global from '../../Global';

const Project = ({ id, project }) => {
  const url = Global.url;
  return (
    <div className='project'>
      <div className={id % 2 === 0 ? 'container reverse' : 'container'}>
        <div className="container-img"><img className={id % 2 === 0 ? 'img' : 'img'} src={`${url}${project.image}`} alt={project.name} /></div>
        <div className={`info ${id % 2 === 0 ? 'marginLeft' : ''}`}>
          <p className='name'>{project.name}</p>
          <p className='description'>{project.description}</p>
          {project.link && <a className='link' target='_blank' rel='noreferrer' href={project.link}>Visitar</a>}
        </div>
      </div>
    </div>
  )
}

export default Project