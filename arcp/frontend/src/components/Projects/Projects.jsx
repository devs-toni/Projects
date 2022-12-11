import React, { useState } from 'react'
import Project from './Project';
import Global from '../../Global';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

const Projects = () => {

  const url = Global.url;
  const [projects, setProjects] = useState([]);
  const { texts } = useContext(LanguageContext);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    await axios.get(url + 'getProjects').then(res => {
      setProjects(res.data.projects);
    });
  };
  return (
    <div className='courses projects'>
      <div className="info">
        <h1 className='title'>{texts.projects.title}</h1>
        <p className='description'>{texts.projects.description}</p>
      </div>
      {
        projects.length > 0
          ? (
            projects.map((project, index) => {
              return (<Project key={index} id={index} project={project} />)
            })
          ) : (
            <h3 className=''>{texts.empty}</h3>
          )
      }
    </div>
  )
}

export default Projects