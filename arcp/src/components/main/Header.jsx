import React from 'react'
import { BrowserRouter as Router, HashRouter, Link } from 'react-router-dom';
import '../../styles/header.css';
import Logo from './Logo';
import { BsSunFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';

const Header = () => {

    return (
        <div className='header'>
            <div>
                <Logo className='logo' />
            </div>
            <nav className='navigator'>
                <HashRouter>
                    <Link className='anchor' to='/cv'>Curriculum</Link>
                    <Link className='anchor' to='/courses'>IT Training</Link>
                    <Link className='anchor' to='/projects'>My Projects</Link>
                    <Link className='anchor' to='/about'>About Me</Link>
                    <Link className='anchor' to='/contact'>Contact</Link>
                    <BsSunFill className='bright' />
                    <FiMenu className='hamburguer'/>
                </HashRouter>
            </nav>
        </div>
    )
}

export default Header