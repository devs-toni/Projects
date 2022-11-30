import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';
import Animation from './Animation';


const AboutSection = () => {

    const url = Global.url;
    
    const [text, setText] = useState('');

    const { topic } = useParams();

    useEffect(() => {
        setText('');
        axios.post(`${url}getAboutMe`, {
            topic
        }).then(res => {
            setText(res.data.topic[0].text);
        });
    }, [topic]);

    return (
        <>
            {text && <Animation className='born' speed={5} content={text}/>}
        </>
    )
}

export default AboutSection