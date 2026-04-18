import React from 'react';
import { motion } from 'framer-motion';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section id="contacto" className="contact-cta section">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Necesitas Árboles para Tu Proyecto?</h2>
          <p>Contáctanos y te asesoramos en la elección de especies, precios y disponibilidad</p>
          <div className="cta-actions">
            <button className="btn btn-vibrant">
              Contáctanos
            </button>
            <button className="btn btn-outline-white">
              Solicitar información
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
