import React from 'react'
import Project from './Project';
import arcp from '../../assets/img/Projects/arcp.png';
import calc from '../../assets/img/Projects/calculadora.png';

const Projects = () => {
  return (
    <div className='courses projects'>
      <Project img={arcp} title='www.arcp.es' tech='developed with Front: React.js Back: Node.js DB: Mongo' right={false}  />
{/*       <Project img='' title='Bikers' tech='developed with Spring Boot' />
 */}      <Project img={calc} title='Calculator' tech='developed with React.js' right={true}  />
{/*       <Project img='' title='Pokemon Console' tech='developed with Java'  />
 */}    </div>
  )
}

export default Projects