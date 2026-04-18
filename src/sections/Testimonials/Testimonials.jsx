import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Excelente calidad de plantas y muy buen asesoramiento. Nos ayudaron a elegir las especies adecuadas para nuestro proyecto de restauración. Muy recomendados.",
      author: "María Rodríguez",
      role: "Coordinadora de Proyecto Ambiental"
    },
    {
      text: "Árboles de buena calidad y entrega puntual. El equipo nos brindó información técnica útil para el mantenimiento. Seguiremos trabajando con ellos.",
      author: "Carlos Mendoza",
      role: "Propietario de Finca"
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lo Que Dicen Nuestros Clientes
          </motion.h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="quote-icon">
                <Quote size={24} fill="var(--primary)" color="var(--primary)" />
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
