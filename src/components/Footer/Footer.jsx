import React from 'react';
import { TreeDeciduous, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo white">
              <TreeDeciduous size={32} />
              <span>Árboles Nativos</span>
            </div>
            <p>Cultivamos árboles nativos para la reforestación y conservación del medio ambiente. Juntos podemos restaurar nuestros ecosistemas y construir un futuro más verde.</p>
          </div>

          <div className="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="#catalogo">Catálogo de Árboles</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Información de Contacto</h3>
            <ul>
              <li>
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@nativetrees.com</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>123 Green Valley Rd, Nature City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Árboles Nativos. Todos los derechos reservados. Cultivando un mañana más verde.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
