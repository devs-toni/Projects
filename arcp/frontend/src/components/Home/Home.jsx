import React from 'react'
import { Transition } from '../Home/Transition';
import '../../assets/css/Home/Home.css';
import Global from '../../Global';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

const Home = () => {

    const init = {
        name: '',
        comment: ''
    }
    const {texts} = useContext(LanguageContext)
    const url = Global.url;
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(init);


    const refName = React.createRef();
    const refComment = React.createRef();

    useEffect(() => {
        axios.get(`${url}getComments`).then((res) => {
            setComments([...res.data.comments]);
        });
    }, [comments.length]);

    const handleChange = () => {
        setComment({
            name: refName.current.value,
            comment: refComment.current.value
        });
    };

    const handleSubmit = () => {
        handleChange();
        setComments([...comments, comment]);
        axios.post(`${url}saveComment`, comment);
        refName.current.value = '';
        refComment.current.value = '';
    }


    return (
        <div className='home'>
            <div className='title'>
                <p className='name'>Antonio Rufino Casasus</p>
                <p className="job">Full Stack Developer</p>
            </div>
            <div className="welcome-div">
                <span className='welcome'>`{texts.home.welcome} $&#123; </span>
                <Transition className='welcome change' />
                <span className='welcome'> &#125;`, {texts.home.welcome2}</span>
            </div>
            <div className='container-description'>
                <p className='description'>{texts.home.description}</p>
            </div>
            <div className="comentarios">
                <form id='form'>
                    <div className="comments">
                        <input type="text" name='name' id='name' placeholder={texts.home.comments.name} ref={refName} onChange={handleChange} />
                        <textarea name="message" id='comment' placeholder={texts.home.comments.comment} ref={refComment} onChange={handleChange}></textarea>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={handleSubmit} width="54" height="54" fill="currentColor" className="svg" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </form>
                {
                    comments.map((comment, index) => {
                        return (
                            <div className="showComments" key={index}>
                                <p className="name">{comment.name}</p>
                                <p className="message">{comment.comment}</p>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Home