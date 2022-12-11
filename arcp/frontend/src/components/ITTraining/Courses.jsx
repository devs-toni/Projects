import React from 'react'
import Course from './Course'
import '../../assets/css/ITTraining/Courses.css';
import Counter from './Counter';
import { useEffect } from 'react';
import { useState } from 'react';
import Global from '../../Global';
import axios from 'axios';
import CustomPopup from '../Popup';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

const Courses = () => {
    const url = Global.url;
    const [courses, setcourses] = useState([])
    const [hours, sethours] = useState(0);
    const [visibility, setVisibility] = useState(false);
    const [course, setCourse] = useState(null);
    const [description, setDescription] = useState([]);
    const [techs, settechs] = useState([]);
    const [colors, setColors] = useState([]);
    const [borders, setBorders] = useState([]);
    const { texts, language } = useContext(LanguageContext);

    const handlePopup = (e) => {
        if (e.target.getAttribute('topic')) {
            axios.get(`${url}getCourse/${e.target.getAttribute('topic')}`).then(res => {
                setCourse(res.data.course[0]);
                settechs(res.data.course[0].technologies.split(','));
                setColors(res.data.course[0].color.split(','));
                setBorders(res.data.course[0].border.split(','));
                setVisibility(!visibility);
                document.querySelector('body').style.overflow = 'hidden';
                let parseDescription = JSON.parse(res.data.course[0].description);
                if (language === 'es') setDescription(parseDescription.es.split('~'));
                else setDescription(parseDescription.en.split('~'));
            });
        }
    }

    const popupCloseHandler = (e) => {
        setVisibility(e);
        setCourse({});
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
                <Counter hours={hours} text={texts.courses.hours} />
            </div>
            <div className="left">
                <h3 className='title-it'>{texts.courses.title}</h3>
                <p className='description-it'>{texts.courses.description}</p>
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
                            <h3 className='text-center'>{texts.empty}</h3>
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
                            <ul className='description'>
                                {description.map((line, key) =>
                                    <li className='li' key={key}>{line}</li>
                                )}
                            </ul>
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