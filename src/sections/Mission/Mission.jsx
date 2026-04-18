import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Recycle, Users } from 'lucide-react';
import './Mission.css';

const Mission = () => {
  const cards = [
    {
      icon: <Sprout size={40} />,
      title: 'Especies Nativas',
      text: 'Trabajamos con árboles adaptados a su entorno natural, ideales para restauración ecológica y conservación.'
    },
    {
      icon: <Recycle size={40} />,
      title: 'Crecimiento Sostenible',
      text: 'Utilizamos prácticas responsables que favorecen el desarrollo saludable de cada árbol.'
    },
    {
      icon: <Users size={40} />,
      title: 'Impacto Comunitario',
      text: 'Apoyamos proyectos locales de reforestación y recuperación de espacios naturales.'
    }
  ];

  return (
    <section id="sobre-nosotros" className="mission section">
      <div className="container">
        <div className="mission-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Venta de Árboles Nativos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Producimos y comercializamos especies nativas adaptadas a nuestra región. Nuestros árboles son ideales para reforestación, recuperación de suelos, conservación de biodiversidad y proyectos de restauración ecológica.
          </motion.p>
        </div>

        <div className="mission-grid">
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
