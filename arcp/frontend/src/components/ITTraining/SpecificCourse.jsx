import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Global from '../../Global';
import '../../assets/css/ITTraining/SpecificCourse.css';
import Arrow from '../Arrow';

const SpecificCourse = () => {
  const backendUrl = Global.url;
  const { id } = useParams();
  const [showCourse, setShowCourse] = useState({});
  const [techs, settechs] = useState([]);
  const [colors, setColors] = useState([]);
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}getCourse/${id}`).then(res => {
      setShowCourse(res.data.course[0]);
      settechs(res.data.course[0].technologies.split(','));
      setColors(res.data.course[0].color.split(','));
      setBorders(res.data.course[0].border.split(','));
    });
  }, []);



  return (
    <>
      <div className='specificCourse'>
        <div className='arrows'>
          <Arrow direction='left' previous='/courses'></Arrow>
          <Arrow direction='right'></Arrow>
        </div>
        <div className='img'>
          <img src={showCourse.image} alt="Course" />
        </div>
        <div className='info'>
          <p className='title'>{showCourse.name}</p>
          <p className='center'>{showCourse.center}</p>
          <p className='description'>{showCourse.description}</p>
        </div>
        <div className="technologies">
          {
            techs.map((tech, index) => {
              let style = {
                backgroundColor: `${colors[index]}`, borderColor: `${borders[index]}`
              }
              if (tech !== '') {
                return (<p key={index} className='tech' style={style} >{tech}</p>)
              }
            })
          }
        </div>
      </div>
    </>

  )
}

export default SpecificCourse;