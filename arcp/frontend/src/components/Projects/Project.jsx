import React from 'react';
import '../../assets/css/Projects/Projects.css';
import { Link, useRouteMatch } from 'react-router-dom';

const Project = ({ id, project }) => {

  const { path, url } = useRouteMatch();

  return (
    <div className='project'>
      <div className={id % 2 === 0 ? 'container reverse' : 'container'}>
        <img className={id % 2 === 0 ? 'img' : 'img'} src={project.image} alt={project.name} />
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