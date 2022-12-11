import React, { useState } from 'react'
import '../../assets/css/About/About.css';
import Me from '../../assets/img/About/me.png';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import aficiones from '../../assets/img/About/aficiones.png';
import historia from '../../assets/img/About/historia.png';
import develop from '../../assets/img/About/develop.png';
import AboutSection from './AboutSection';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

const About = () => {

    const { path, url } = useRouteMatch();
    const [titleActive, setTitleActive] = useState(true);
    const {texts} = useContext(LanguageContext);

    return (
        <div className='courses about'>
            <h1 className='title'>{texts.about.title}</h1>
            <p className='description'>{texts.about.description}</p>
            <div className="me">
                <img className='img' src={Me} alt="Me" />
                <p>{texts.about.whoIAm}</p>
            </div>
            <div className="icons">
                <div className='icons-int'>
                    <div className="icon">
                        <Link to={`${url}/history`}><img className='icon-history' src={historia} alt="History" onClick={() => setTitleActive(false)} /></Link>
                    </div>
                    <div className="icon end">
                        <Link to={`${url}/hobbies`}><img className='icon-aficiones' src={aficiones} alt="Aficiones" onClick={() => setTitleActive(false)} /></Link>
                    </div>
                    <div className="icon">
                        <Link to={`${url}/devs`}><img className='icon-develop' src={develop} alt="Development" onClick={() => setTitleActive(false)} /></Link>
                    </div>
                </div>
            </div>
            <div className="window">
                {titleActive && <p>{texts.about.topic}</p>}
                <Switch>
                    <Route path={`${path}/:topic`} component={AboutSection}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default About;