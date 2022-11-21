/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import '../../assets/css/ITTraining/Course.css';

const Course = ({ course, className }) => {

  return (
    <div className='box'>
      <img className='img' src={course.image} alt={course.name} />
      <div className='info'>
        <p className='name'>{course.name}</p>
        <p className='creator'>{course.center}</p>
        <div className='features'>
          <p className='hours'>{course.hours} h</p>
          <a className='eye' href={course.link} target='_blank'>
            <svg
              width='24'
              height='24'
              className='border white'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512">
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" /></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Course;