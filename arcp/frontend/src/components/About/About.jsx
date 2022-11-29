import React from 'react'
import '../../assets/css/About/About.css';
import Me from '../../assets/img/About/me.png';
import Animation from './Animation';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import aficiones from '../../assets/img/About/aficiones.png';
import historia from '../../assets/img/About/historia.png';
import develop from '../../assets/img/About/develop.png';
import AboutSection from './AboutSection';
import Arrow from '../Arrow';

const About = () => {

    const { path, url } = useRouteMatch();

    return (
        <div className='courses about'>
            <h1 className='title'>About Me</h1>
            <p className='description'>In this section, you can know a little about me</p>
            <div className="me">
                <img className='img' src={Me} alt="Me" />
                <p>Backend developer. Actually I'm realising a Master in Software Development in Assembler Institute of Technologies</p>
            </div>
            <div className="icons">
                <div className='icons-int'>
                    <div className="icon">
                        <Link to={`${url}/history`}><img className='icon-history' src={historia} alt="History" /></Link>
                    </div>
                    <div className="icon end">
                        <Link to={`${url}/hobbies`}><img className='icon-aficiones' src={aficiones} alt="Aficiones" /></Link>
                    </div>
                    <div className="icon">
                        <Link to={`${url}/devs`}><img className='icon-develop' src={develop} alt="Development" /></Link>
                    </div>
                </div>
            </div>
            <div className="window">
                <Switch>
                    <Route path={`${path}/:topic`} component={AboutSection}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default About;