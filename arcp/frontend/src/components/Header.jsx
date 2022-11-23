import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { BsSunFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import '../assets/css/Header.css';
import Logo from './Logo';

const Header = ({ switchTheme, isNavShow, setIsNavShow }) => {


    const openMenu = () => {
        setIsNavShow(!isNavShow);
    }

    return (
        <div className='header'>
            <HashRouter>
                <div className='div-logo'>
                    <Link to='/'><Logo className='logo' ></Logo></Link>
                </div>
                <nav id='navigator' className={`navigator ${isNavShow ? 'active' : ''}`}>
                    <Link className='anchor' to='/courses' onClick={() => setIsNavShow(!isNavShow)}>IT Training</Link>
                    <Link className='anchor' to='/cv' onClick={() => setIsNavShow(!isNavShow)}>Curriculum</Link>
                    <Link className='anchor' to='/projects' onClick={() => setIsNavShow(!isNavShow)}>Projects</Link>
                    <Link className='anchor' to='/about' onClick={() => setIsNavShow(!isNavShow)}>About</Link>
                    <Link className='anchor' to='/contact' onClick={() => setIsNavShow(!isNavShow)}>Contact</Link>
                    <Link className='anchor' to='/admin' onClick={() => setIsNavShow(!isNavShow)}><i class="bi bi-box-arrow-in-right"></i></Link>
                    <button onClick={switchTheme}><BsSunFill className='bright' /></button>
                </nav>
                <FiMenu className='hamburguer' onClick={openMenu} />
            </HashRouter>
        </div>
    );
};

export default Header;