import React from 'react'
import Course from './Course'
import '../../assets/css/ITTraining/Courses.css';
import Counter from './Counter';
import { useEffect } from 'react';
import { useState } from 'react';
import Global from '../../Global';
import axios from 'axios';

const Courses = () => {

  const url = Global.url;

  const [courses, setcourses] = useState([])
  const [hours, sethours] = useState(0);

  useEffect(() => {
    getCourses();
    sumHours();
  }, [courses.length]);

  const getCourses = () => {
    axios.get(url + 'getCourses').then(res => {
      setcourses(res.data.courses);
    });
  };

  const sumHours = () => {
    let previousHours = 0;
    courses.forEach(c => {
      sethours(previousHours += c.hours)
    });
  }

  return (
    <div className='courses'>
      <div className='right'>

        <Counter hours={hours} />
      </div>
      <div className="left">
        <h3 className='title-it'>My Studies</h3>
        <p className='description-it'>All the courses that I have taken since I started programming </p>
      </div>
      <div className='boxes'>
        {
          courses.length > 0
            ? (
              courses.map((course, index) => {
                console.log(course);
                return (
                  <Course
                    key={index}
                    id={index}
                    course={course}
                    className='box'
                  />
                )
              })
            ) : (
              <h3 className=''>Any Trainings</h3>
            )
        }
      </div>
    </div>
  )
}

export default Courses