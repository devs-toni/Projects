import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { BsSunFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import '../assets/css/Header.css';
import Logo from './Logo';
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Header = ({ switchTheme, isNavShow, setIsNavShow }) => {

    const { texts, handleLanguage } = useContext(LanguageContext);

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
                    <Link to='/' onClick={closeMenu}><Logo className='logo'></Logo></Link>
                </div>
                <nav id='navigator' className={`navigator ${isNavShow ? 'active' : ''}`}>
                    <Link className='anchor' to='/courses' onClick={closeMenu}>{texts.menu.training}</Link>
                    <Link className='anchor' to='/cv' onClick={closeMenu}>{texts.menu.curriculum}</Link>
                    <Link className='anchor' to='/projects' onClick={closeMenu}>{texts.menu.projects}</Link>
                    <Link className='anchor' to='/about' onClick={closeMenu}>{texts.menu.about}</Link>
                    <Link className='anchor' to='/contact' onClick={closeMenu}>{texts.menu.contact}</Link>
                    <div className="options">
                        <Link className='anchor' to='/login' onClick={closeMenu}><i className="bi bi-box-arrow-in-right"></i></Link>
                        <select name="language" id="language" className='language' onChange={handleLanguage}>
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                        </select>
                        <button onClick={switchTheme}><BsSunFill className='bright' /></button>
                    </div>
                </nav>
                <FiMenu className='hamburguer' onClick={openMenu} />
            </HashRouter>
        </div>
    );
};

export default Header;

