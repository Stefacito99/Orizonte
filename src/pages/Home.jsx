import React, { useState } from 'react';
import '../styles/Home.css';
import paesano from '../assets/partners/paesano-icon.png';
import frutopolis from '../assets/partners/frutopolis-icon.png';
import reina from '../assets/partners/reina-icon.png';
import chacho from '../assets/partners/chacho-icon.png';

const faqItems = [
  {
    q: '¿Qué es Orizonte y por qué existimos?',
    a: 'Somos una empresa creada para impulsar a las PyMEs en su camino de crecimiento. Nuestro objetivo es brindar el apoyo, la asesoría y el financiamiento que necesitan aquellas empresas que no encuentran respaldo en el mercado de creditos tradicional.'
  },
  {
    q: '¿Cómo es trabajar con nosotros y por qué elegirnos?',
    a: 'Trabajar con Orizonte significa contar con un equipo que entiende tus necesidades y está comprometido con tu crecimiento. Más que un préstamo, ofrecemos un vínculo cercano, basado en la confianza y el crecimiento mutuo.'
  },
  {
    q: '¿Qué impacto buscamos para tu empresa?',
    a: 'Nuestro objetivo es que tu empresa crezca de forma sólida y sostenible. Con nuestro financiamiento, asesoría y apoyo continuo, buscamos que tu negocio avance y cuentes con un aliado confiable en cada paso.'
  },
  {
    q: '¿Cuál es nuestra propuesta y qué nos hace diferentes?',
    a: 'Ofrecemos financiamiento diseñado específicamente para las necesidades de cada cliente: personalización, acompañamiento continuo y condiciones pensadas para fomentar el crecimiento.'
  },
  {
    q: '¿Cómo solicito financiamiento?',
    a: 'Podés iniciar el contacto a través del botón de WhatsApp; analizamos tu caso y te guiamos en los pasos.'
  },
  {
    q: '¿Qué requisitos piden?',
    a: 'Los requisitos varían según el tipo de empresa y la línea de financiamiento; habitualmente pedimos información financiera básica y datos del proyecto.'
  }
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <div className='home'>
      {/* HERO vacío salvo por la frase centrada */}
      <section className='hero' aria-label='Hero'>
        <h1>Invertimos en PyMEs, impulsamos emprendedores.</h1>
      </section>

      {/* FAQ y Partners aparecen al bajar */}
      <section className='faq' id='faq'>
        <h2>Preguntas Frecuentes</h2>
        <div className='faq-list'>
          {faqItems.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button
                className='faq-question'
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {item.q}
                <span className='chev' aria-hidden>{openIndex === i ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role='region'
                aria-labelledby={`faq-question-${i}`}
                className='answer'
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='partners' id='partners'>
        <h2>Empresas que confían en nosotros</h2>

        <div className='partners-slider' role='list' aria-label='Partners'>
          <div className='partner-item' role='listitem'>
            <img src={paesano} alt='Paesano' loading='lazy' />
          </div>
          <div className='partner-item' role='listitem'>
            <img src={frutopolis} alt='Frutópolis' loading='lazy' />
          </div>
          <div className='partner-item' role='listitem'>
            <img src={reina} alt='Reina' loading='lazy' />
          </div>
          <div className='partner-item' role='listitem'>
            <img src={chacho} alt='Chacho' loading='lazy' />
          </div>
        </div>
      </section>

      {/* espacio extra para probar scroll */}
      <div style={{ height: 120 }} />

      <footer id='contact'></footer>
    </div>
  );
};

export default Home;