import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><button className='theme-switch'>🌙/☀️</button></li>
        <li><a href='#contact'>Contacto</a></li>
        <li><Link to='/'>¿Quiénes Somos?</Link></li>
        <li><Link to='/learn'>Aprender</Link></li>
        <li><img src={logo} alt='Logo' className='logo' /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
