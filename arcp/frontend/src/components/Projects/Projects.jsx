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
    console.log(projects);

  }, [projects.length]);

  const getProjects = () => {
    axios.get(url + 'getProjects').then(res => {
      setProjects(res.data.projects);
    });
  };

  return (
    <div className='courses projects'>
      <div className="info">
        <h1 className='title'>Projects</h1>
        <p className='description'>Please, take a look at the different projects that I have been creating and improving since I started in this world.</p>
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