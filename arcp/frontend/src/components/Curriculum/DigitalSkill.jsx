import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

const DigitalSkill = ({ name, level, color, section }) => {

    const [completed, setCompleted] = useState(0);
    const [skillName, setSkillName] = useState('');
    const {language} = useContext(LanguageContext);

    useEffect(() => {
      setInterval(() => setCompleted(level), 30);
      if (section === "Soft") {
        let parseName = JSON.parse(name);
        if (language === "es") setSkillName(parseName.es);
        else setSkillName(parseName.en);
    }
    }, [language]);

    const containerStyles = {
        height: 5,
        width: '160px',
        backgroundColor: 'var(--font-color)',
        borderRadius: 50,
        margin: 50,
        marginLeft: 20
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: color,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 3s ease-in-out'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }


    return (
        <div className='skill'>
        <p className='name'>{section === 'Soft' ? skillName : name}</p>
            <div style={containerStyles} className='bar'>
                <div style={fillerStyles}>
                    <span style={labelStyles}></span>
                </div>
            </div>
        </div>
    )
}

export default DigitalSkill