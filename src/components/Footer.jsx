import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Footer.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`} id='contact'>
      <p>Contacto:</p>
      <div className='social-icons'>
        <a href='https://wa.me/123456789' target='_blank' rel='noopener noreferrer'>WhatsApp</a>
        <a href='https://www.instagram.com/orizonte.ar/' target='_blank' rel='noopener noreferrer'>Instagram</a>
        <a href='mailto:contacto@tuempresa.com'>Email</a>
      </div>
      <p>Suscribite a nuestro newsletter</p>
      <input type='email' placeholder='Tu correo' />
      <button>Suscribirse</button>
    </footer>
  );
};

export default Footer;