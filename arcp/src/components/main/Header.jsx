import React from 'react'
import { BrowserRouter as Router, HashRouter, Link } from 'react-router-dom';
import '../../styles/header.css';
import Logo from './Logo';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <Logo className='logo' />
            </div>
            <div className='navigator'>
                <HashRouter>
                    <Link className='anchor' to='/cv'>Curriculum</Link>
                    <Link className='anchor' to='/courses'>IT Training</Link>
                    <Link className='anchor' to='/projects'>My Projects</Link>
                    <Link className='anchor' to='/about'>About Me</Link>
                    <Link className='anchor' to='/contact'>Contact</Link>
                </HashRouter>
            </div>
        </div>
    )
}

export default Header