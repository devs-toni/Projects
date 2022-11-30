import React, { useState } from 'react'
import Project from './Project';
import Global from '../../Global';
import axios from 'axios';
import { useEffect } from 'react';

const Projects = () => {

  const url = Global.url;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();

  }, [projects.length]);

  const getProjects = () => {
    axios.get(url + 'getProjects').then(res => {
      setProjects(res.data.projects);
    });
  };

  return (
    <div className='courses projects'>
      <div className="info">
        <h1 className='title'>Proyectos</h1>
        <p className='description'>Aquí puedes tomarte tu tiempo para echar un vistazo a los diferentes proyectos que he estado creando y mejorando desde que las habilidades que he ido adquiriendo me lo han permitido.</p>
      </div>
      {
        projects.length > 0
          ? (
            projects.map((project, index) => {
              return (<Project key={index} id={index} project={project} />)
            })
          ) : (
            <h3 className=''>No hay artículos</h3>
          )
      }
    </div>
  )
}

export default Projects