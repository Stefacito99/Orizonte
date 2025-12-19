import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Footer.css';

// importa los iconos (png) que guardaste en src/assets/Footer/
import whatsappIcon from '../assets/Footer/whatsappIcon.png';
import instagramIcon from '../assets/Footer/instagramIcon.png';
import mailIcon from '../assets/Footer/mailIcon.png';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigator.clipboard.writeText('orizonte.ar@gmail.com')
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // vuelve a estado normal
      })
      .catch((err) => console.error('Error al copiar el correo:', err));
  };

  return (
    <footer className={`footer ${theme}`} id='contact'>
      <p>Contacto:</p>
      <div className='social-icons'>
        <a href='https://wa.me/542915668093' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
          <img src={whatsappIcon} alt='WhatsApp' />
        </a>
        <a href='https://www.instagram.com/orizonte.ar/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
          <img src={instagramIcon} alt='Instagram' />
        </a>
        <a href='mailto:orizonte.ar@gmail.com' onClick={handleCopyEmail} className="copy-email-link" aria-label={emailCopied ? 'Email Copiado' : 'Copiar Email'} title={emailCopied ? 'Email Copiado' : 'Copiar email'}>
          <img src={mailIcon} alt='Email' className="mail-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;