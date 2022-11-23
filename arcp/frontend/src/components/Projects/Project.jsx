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
          <Link className='linkEye' to={`${url}/calculator`}>
            <svg
              width='42'
              height='42'
              className='svgEye'
              xmlns='http://www.w3.org/2000/svg'
              viewBox="0 0 576 512">
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" /></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project