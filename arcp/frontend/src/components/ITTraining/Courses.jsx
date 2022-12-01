import React from 'react'
import Course from './Course'
import '../../assets/css/ITTraining/Courses.css';
import Counter from './Counter';
import { useEffect } from 'react';
import { useState } from 'react';
import Global from '../../Global';
import axios from 'axios';
import CustomPopup from '../Popup';

const Courses = () => {
    const url = Global.url;
    const [courses, setcourses] = useState([])
    const [hours, sethours] = useState(0);
    const [visibility, setVisibility] = useState(false);
    const [course, setCourse] = useState(null);
    const [techs, settechs] = useState([]);
    const [colors, setColors] = useState([]);
    const [borders, setBorders] = useState([]);
    const handlePopup = (e) => {
        if (e.target.getAttribute('topic')) {
            axios.get(`${url}getCourse/${e.target.getAttribute('topic')}`).then(res => {
                setCourse(res.data.course[0]);
                settechs(res.data.course[0].technologies.split(','));
                setColors(res.data.course[0].color.split(','));
                setBorders(res.data.course[0].border.split(','));
                setVisibility(!visibility);
                document.querySelector('body').style.overflow = 'hidden';
            });
        }
    }

    const popupCloseHandler = (e) => {
        setVisibility(e);
        document.querySelector('body').style.overflow = 'auto';
    };

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
                <h3 className='title-it'>Formación</h3>
                <p className='description-it'>Sección dedicada a toda la formación en la que me he instruido desde que empecé a programar. En continua actualización.</p>
            </div>
            <div className='boxes'>
                {
                    courses.length > 0
                        ? (
                            courses.sort((a, b) => a.position < b.position ? 1 : -1)
                                .map((course, index) => {
                                    return (
                                        <Course
                                            popup={handlePopup}
                                            key={index}
                                            id={index}
                                            course={course}
                                        />
                                    )
                                })
                        ) : (
                            <h3 className=''>Any Trainings</h3>
                        )
                }
            </div>
            {
                course && <CustomPopup
                    onClose={popupCloseHandler}
                    show={visibility}
                >
                    <div className='specificCourse'>
                        <div className='img'>
                            <img src={`${url}${course.image}`} alt="Course" />
                        </div>
                        <div className='info'>
                            <p className='title'>{course.name}</p>
                            <p className='center'>{course.center}</p>
                            <p className='description'>{course.description}</p>
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
                </CustomPopup>
            }
        </div>
    )
}

export default Courses