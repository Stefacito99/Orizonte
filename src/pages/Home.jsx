import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <section className='about'>
        <h1>¿Quiénes Somos?</h1>
        <p>Texto sobre la empresa...</p>
      </section>
      <section className='partners'>
        <h2>Empresas que confían en nosotros</h2>
        <div className='slider'>[Slider de imágenes aquí]</div>
      </section>
      <section className='faq'>
        <h2>Preguntas Frecuentes</h2>
        <p>Pregunta 1 - Respuesta</p>
        <p>Pregunta 2 - Respuesta</p>
      </section>
      <footer id='contact'></footer>
    </div>
  );
};

export default Home;