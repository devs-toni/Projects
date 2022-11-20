import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <nav id='navbar' className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          <img src={logo} className='App-logo' alt="logo" width='80' />
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to='/articles' className='nav-link'>Artículos</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;