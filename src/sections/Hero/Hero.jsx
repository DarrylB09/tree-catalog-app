import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content centered"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="high-contrast">Cultivamos un futuro más verde</h1>
          <p className="high-contrast">Ofrecemos árboles para reforestación, restauración y conservación del medio ambiente</p>
          <div className="hero-actions centered">
            <button className="btn btn-white">
              Ver Catálogo de Árboles
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-vibrant">
              Contáctanos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
