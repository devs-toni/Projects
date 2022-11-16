import React from 'react';
import { BrowserRouter as Router, HashRouter, Link } from 'react-router-dom';
import { BsSunFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import '../../styles/header.css';
import Logo from './Logo';

const Header = ({ switchTheme }) => {

    return (
        <div className='header'>
            <HashRouter>
                <div className='div-logo'>
                    <Link to='/'><Logo className='logo' ></Logo></Link>
                </div>
                <FiMenu className='hamburguer' />
                <nav className='navigator'>
                    <Link className='anchor' to='/cv'>Curriculum</Link>
                    <Link className='anchor' to='/courses'>IT Training</Link>
                    <Link className='anchor' to='/projects'>My Projects</Link>
                    <Link className='anchor' to='/about'>About Me</Link>
                    <Link className='anchor' to='/contact'>Contact</Link>
                    <button onClick={switchTheme}><BsSunFill className='bright' /></button>
                </nav>
            </HashRouter>
        </div>
    )
}

export default Header