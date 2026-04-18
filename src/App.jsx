import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Catalog from './pages/Catalog/Catalog';
import TreeDetail from './pages/TreeDetail/TreeDetail';
import Contact from './pages/Contact/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/catalogo/:slug" element={<TreeDetail />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
