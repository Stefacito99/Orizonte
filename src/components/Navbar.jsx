import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Navbar.css';
import logoClaro from '../assets/logoClaro.png';
import logoOscuro from '../assets/logoOscuro.png';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const logo = theme === 'light' ? logoOscuro : logoClaro;
  const themeIcon = theme === 'light' ? '🌙' : '☀️';

  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li><button className='theme-switch' onClick={toggleTheme}>{themeIcon}</button></li>
        <li><a href='#contact'>Contacto</a></li>
        <li><Link to='/'>¿Quiénes Somos?</Link></li>
        <li><Link to='/learn'>Aprender</Link></li>
        <li><img src={logo} alt='Logo' className='logo' /></li>
      </ul>
    </nav>
  );
};

export default Navbar;