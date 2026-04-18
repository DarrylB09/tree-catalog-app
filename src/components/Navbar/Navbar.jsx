import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Is the current page the home page? 
  // This helps deciding if navbar should be transparent initially
  const isHomePage = location.pathname === '/' || location.pathname === '/inicio';

  return (
    <nav className={`navbar ${scrolled || !isHomePage ? 'scrolled' : 'transparent'}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-wrapper" onClick={() => setIsOpen(false)}>
          <div className="logo-circle">
            <Leaf size={20} color="var(--bg-white)" fill="var(--bg-white)" />
          </div>
          <span className="logo-text">Árboles Nativos</span>
        </Link>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/inicio" onClick={() => setIsOpen(false)}>Inicio</Link></li>
          <li><Link to="/sobre-nosotros" onClick={() => setIsOpen(false)}>Sobre Nosotros</Link></li>
          <li><Link to="/catalogo" onClick={() => setIsOpen(false)}>Catálogo de Árboles</Link></li>
          <li><Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
        </ul>

        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
