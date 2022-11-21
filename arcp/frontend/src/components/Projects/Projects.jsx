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