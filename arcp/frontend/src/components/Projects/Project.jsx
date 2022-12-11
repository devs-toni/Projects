import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import '../../assets/css/Projects/Projects.css';
import Global from '../../Global';
import LanguageContext from '../../context/LanguageContext';


const Project = ({ id, project }) => {
  const url = Global.url;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { language } = useContext(LanguageContext);


  useEffect(() => {
    let parseName = JSON.parse(project.name);
    let parseDescription = JSON.parse(project.description);
    if (language === "es") {
      setName(parseName.es);
      setDescription(parseDescription.es);
    } else {
      setName(parseName.en);
      setDescription(parseDescription.en);
    }
  }, [language])

  return (
    <div className='project'>
      <div className={id % 2 === 0 ? 'container reverse' : 'container'}>
        <div className="container-img"><img className={id % 2 === 0 ? 'img' : 'img'} src={`${url}${project.image}`} alt={project.name} /></div>
        <div className={`info ${id % 2 === 0 ? 'marginLeft' : ''}`}>
          <p className='name'>{name}</p>
          <p className='description'>{description}</p>
          {project.link && <a className='link' target='_blank' rel='noreferrer' href={project.link}>Visitar</a>}
        </div>
      </div>
    </div>
  )
}

export default Project