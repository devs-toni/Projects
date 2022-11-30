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

    const closeMenu = () => {
        if (isNavShow) {
            setIsNavShow(false);
        }
    }

    return (
        <div className='header'>
            <HashRouter>
                <div className='div-logo'>
                    <Link to='/'><Logo className='logo' onClick={closeMenu}></Logo></Link>
                </div>
                <nav id='navigator' className={`navigator ${isNavShow ? 'active' : ''}`}>
                    <Link className='anchor' to='/courses' onClick={closeMenu}>Formación IT</Link>
                    <Link className='anchor' to='/cv' onClick={closeMenu}>Curriculum</Link>
                    <Link className='anchor' to='/projects' onClick={closeMenu}>Proyectos</Link>
                    <Link className='anchor' to='/about' onClick={closeMenu}>Sobre mí</Link>
                    <Link className='anchor' to='/contact' onClick={closeMenu}>Contacto</Link>
                    <Link className='anchor' to='/login' onClick={closeMenu}><i className="bi bi-box-arrow-in-right"></i></Link>
                    <button onClick={switchTheme}><BsSunFill className='bright' /></button>
                </nav>
                <FiMenu className='hamburguer' onClick={openMenu} />
            </HashRouter>
        </div>
    );
};

export default Header;