import React from 'react'
import Course from './specific/Course'
import assembler from '../assets/img/assembler.png';

const Courses = () => {
  return (
    <>
      <Course 
      name='Master in Software Development'
      img={assembler}
      hours='1200'
      tech='17'
      />
    </>
  )
}

export default Courses