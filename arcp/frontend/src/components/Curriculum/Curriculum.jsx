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

    const [name, setName] = useState('');
    const [center, setCenter] = useState('');
    const [description, setDescription] = useState([]);
    const [techs, settechs] = useState([]);
    const [colors, setColors] = useState([]);
    const [borders, setBorders] = useState([]);
    const [visibility, setVisibility] = useState(false);
    const {texts, language} = useContext(LanguageContext);

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
        console.log(e.target);
        if (e.target.getAttribute('topic')) {
            e.stopPropagation();
            axios.post(`${backendUrl}getCurriculum`, { topic: e.target.getAttribute('topic') }).then(res => {
                setInfo(res.data.cv[0]);
                if (res.data.cv[0].technologies) settechs(res.data.cv[0].technologies.split(','));
                else settechs([]);
                if (res.data.cv[0].color) setColors(res.data.cv[0].color.split(','));
                else setColors([]);
                if (res.data.cv[0].border) setBorders(res.data.cv[0].border.split(','));
                else setBorders([]);
                let parseName = JSON.parse(res.data.cv[0].name);
                let parseCenter = JSON.parse(res.data.cv[0].center);
                let parseDescription = JSON.parse(res.data.cv[0].description);
                if (language === "es") {
                    setName(parseName.es);
                    setCenter(parseCenter.es);
                    setDescription(parseDescription.es.split('~'));
                } else {
                    setName(parseName.en);
                    setCenter(parseCenter.en);
                    setDescription(parseDescription.en.split('~'));
                }
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
                    <p className='text-name'>{name}</p>
                    <p className='school'>{center}</p>
                    <p className='data'>{info.date}</p>
                </div>
                <div className='description'>
                    <ul className='text-description'>
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
            </CustomPopup>}
            <div className='info'>
                <h1 className='title'>{texts.curriculum.title}</h1>
                <p className='description'>{texts.curriculum.description}</p>
            </div>
            <div className='cv' >
                <Timegraphic handlePopup={handlePopup} />
                <div className='skills'>
                    <div className="digital-skills">
                        <p className="title">{texts.curriculum.digital[0]}</p>
                        {skills.map(skill => skill.section === 'Digital' && <DigitalSkill key={skill.id} {...skill} />)}
                    </div>
                    <div className="other">
                        <div className="digital-skills">
                            <p className="title">{texts.curriculum.digital[1]}</p>
                            {skills.map(skill => skill.section === 'Language' && <DigitalSkill key={skill.id} {...skill} />)}
                        </div>
                        <div className="digital-skills">
                            <p className="title">{texts.curriculum.digital[2]}</p>
                            {skills.map(skill => skill.section === 'Soft' && <DigitalSkill key={skill.id} {...skill} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;