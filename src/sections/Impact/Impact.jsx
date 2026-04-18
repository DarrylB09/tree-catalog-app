import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bird, Handshake } from 'lucide-react';
import './Impact.css';

const Impact = () => {
  const stats = [
    { 
      icon: <ShieldCheck size={32} />,
      value: 'Proyectos de Reforestación', 
      label: 'Apoyo continuo a iniciativas ambientales en crecimiento' 
    },
    { 
      icon: <Bird size={32} />,
      value: 'Conservación de Biodiversidad', 
      label: 'Especies nativas que favorecen el equilibrio ecológico' 
    },
    { 
      icon: <Handshake size={32} />,
      value: 'Alianzas Estratégicas', 
      label: 'Trabajamos con organizaciones y comunidades locales' 
    }
  ];

  return (
    <section className="impact section">
      <div className="container">
        <div className="impact-content">
          <motion.div 
            className="impact-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Nuestro Compromiso</h2>
            <p>Contribuyendo a un futuro más verde</p>
          </motion.div>

          <div className="impact-grid full-width">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card horizontal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-icon-box">{stat.icon}</div>
                <div className="stat-info-box">
                  <span className="stat-value small">{stat.value}</span>
                  <span className="stat-label opa">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
