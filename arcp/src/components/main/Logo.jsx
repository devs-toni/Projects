import React from 'react';
import '../../styles/logo.css';
import logo from '../../assets/img/principal-logo.png';

const Logo = () => {
  return (
    <img className='logo' src={logo} alt="logo" />
  )
}

export default Logo