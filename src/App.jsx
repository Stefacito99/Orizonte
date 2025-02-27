import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learn' element={<Learn />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
