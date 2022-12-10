import React, { useEffect, useState } from 'react'
import Timegraphic from './Timegraphic';
import '../../assets/css/Curriculum/Curriculum.css';
import DigitalSkill from './DigitalSkill';
import Global from '../../Global';
import axios from 'axios';
import CustomPopup from '../Popup';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

const Curriculum = () => {

    const [skills, setSkills] = useState([])
    const backendUrl = Global.url;
    const [info, setInfo] = useState(null);
    const [description, setDescription] = useState([]);
    const [visibility, setVisibility] = useState(false);
    const {texts} = useContext(LanguageContext);

    const popupCloseHandler = (e) => {
        setVisibility(e);
        setInfo({});
        document.querySelector('body').style.overflow = 'auto';
    };
    useEffect(() => {
        axios.get(`${backendUrl}getSkills`).then(res => {
            setSkills(res.data.skills);
        });
    }, []);

    const handlePopup = (e) => {
        if (e.target.getAttribute('topic')) {
            e.stopPropagation();
            axios.post(`${backendUrl}getCurriculum`, { topic: e.target.getAttribute('topic') }).then(res => {
                setInfo(res.data.cv[0]);
                setDescription([...res.data.cv[0].description.split(',')]);
                setVisibility(!visibility);
                document.querySelector('body').style.overflow = 'hidden';
            });
        }
    }

    return (
        <div className="curriculum">
            {info && <CustomPopup
                onClose={popupCloseHandler}
                show={visibility}
            >
                <div className='name'>
                    <div className="image-container"><img className='image' src={`${backendUrl}${info.image}`} alt={info.name} /></div>
                    <p className='text-name'>{info.name}</p>
                    <p className='school'>{info.center}</p>
                    <p className='data'>{info.date}</p>
                </div>
                <div className='description'>
                    <ul className='text-description'>
                        {description.map((line, key) =>
                            <li className='li' key={key}>{line}</li>
                        )}
                    </ul>
                </div>
            </CustomPopup>}
            <div className='info'>
                <h1 className='title'>{texts.title.curriculum}</h1>
                <p className='description'>{texts.description.curriculum}</p>
            </div>
            <div className='cv' >
                <Timegraphic handlePopup={handlePopup} />
                <div className='skills'>
                    <div className="digital-skills">
                        <p className="title">Habilidades digitales</p>
                        {skills.map(skill => skill.section === 'Digital' && <DigitalSkill key={skill.id} {...skill} />)}
                    </div>
                    <div className="other">
                        <div className="digital-skills">
                            <p className="title">Idiomas</p>
                            {skills.map(skill => skill.section === 'Language' && <DigitalSkill key={skill.id} {...skill} />)}
                        </div>
                        <div className="digital-skills">
                            <p className="title">Soft Skills</p>
                            {skills.map(skill => skill.section === 'Soft' && <DigitalSkill key={skill.id} {...skill} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;