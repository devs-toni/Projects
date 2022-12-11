import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';
import Animation from './Animation';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';


const AboutSection = () => {

    const url = Global.url;
    const { texts } = useContext(LanguageContext);
    const initialText = '';
    const [text, setText] = useState(initialText);

    const { topic } = useParams();

    useEffect(() => {
        setText('');
        setTimeout(() => {
            switch (topic) {
                case 'history':
                    setText(texts.about.history);
                    break;
                case 'hobbies':
                    setText(texts.about.hobbies);
                    break;
                case 'devs':
                    setText(texts.about.devs);
                    break;
                default:
                    setText(initialText);
                    break;
            }
        }, 1);

        /*         axios.post(`${url}getAboutMe`, {
                    topic
                }).then(res => {
                    setText(res.data.topic[0].text);
                }); */
    }, [topic]);

    return (
        <>
            {text && <Animation className='born' speed={5} content={text} />}
        </>
    )
}

export default AboutSection