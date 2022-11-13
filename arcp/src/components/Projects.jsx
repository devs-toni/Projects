import React from 'react'
import Project from './specific/Project';
import arcp from '../assets/img/arcp.png';

const Projects = () => {
  return (
    <div className='courses projects'>
      <Project img={arcp} title='Mi Portfolio' tech='developed with React.js'  />
      <Project img='' title='Bikers' tech='Spring Boot'  />
      <Project img='' title='Calculator' tech='React.js'  />
      <Project img='' title='Pokemon Console' tech='Java'  />
    </div>
  )
}

export default Projects