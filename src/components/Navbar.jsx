// ...existing code...
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Navbar.css';
import logoClaro from '../assets/logoClaro.png';
import logoOscuro from '../assets/logoOscuro.png';
// importa los iconos de tema
import moonIcon from '../assets/Navbar/moonIcon.png';
import sunIcon from '../assets/Navbar/sunIcon.png';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const logo = theme === 'light' ? logoOscuro : logoClaro;
  const themeIcon = theme === 'light' ? moonIcon : sunIcon;

  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li>
          <button className='theme-switch' onClick={toggleTheme} aria-label='Cambiar tema'>
            <img
              src={themeIcon}
              alt={theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
              className={`theme-icon ${theme === 'light' ? 'moon-icon' : 'sun-icon'}`}
            />
          </button>
        </li>
        <li><a href='#contact'>Contacto</a></li>
        <li><Link to='/'>¿Quiénes Somos?</Link></li>
        <li><Link to='/learn'>Aprender</Link></li>
        <li><img src={logo} alt='Logo' className='logo' /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
// ...existing code...