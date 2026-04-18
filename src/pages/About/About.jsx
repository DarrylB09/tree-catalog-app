import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartPulse, Quote } from 'lucide-react';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Sobre Árboles Nativos</h1>
            <p>Dedicados a restaurar la naturaleza mediante el cultivo de árboles nativos</p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="about-history section">
        <div className="container">
          <div className="history-grid">
            <motion.div 
              className="history-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Nuestra Historia</h2>
              <p>Fundada por <strong>Yile</strong>, un apasionado ambientalista con una visión para la restauración ecológica, Árboles Nativos comenzó como un pequeño vivero dedicado a preservar las especies arbóreas locales.</p>
              <p>Lo que empezó como una misión personal para combatir la deforestación ha crecido hasta convertirse en una empresa próspera que ha ayudado a restaurar miles de hectáreas de tierra degradada en toda la región.</p>
              <p>Hoy trabajamos con organizaciones conservacionistas, agencias gubernamentales y propietarios privados para proporcionar árboles nativos de alta calidad que apoyan la biodiversidad, previenen la erosión del suelo y capturan carbono.</p>
              <p>Nuestro compromiso va más allá de solo vender árboles. Brindamos orientación experta sobre selección de especies, técnicas de plantación y cuidado a largo plazo para garantizar el éxito de cada proyecto de reforestación.</p>
            </motion.div>
            <motion.div 
              className="history-visuals"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="history-image large">
                <img src="https://images.unsplash.com/photo-1592150621344-c60361005228?q=80&w=2070&auto=format&fit=crop" alt="Vivero de árboles" />
              </div>
              <div className="history-image-sub-grid">
                <div className="history-image small">
                  <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2070&auto=format&fit=crop" alt="Árboles jóvenes" />
                </div>
                <div className="history-image small">
                  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" alt="Sendero bosque" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision section">
        <div className="container">
          <div className="mv-grid">
            <motion.div 
              className="mv-card mission-bg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Nuestra Misión</h3>
              <p>Restaurar ecosistemas degradados y combatir el cambio climático cultivando y distribuyendo especies de árboles nativos. Empoderamos a comunidades y organizaciones para crear un impacto ambiental duradero a través de la reforestación sostenible.</p>
            </motion.div>
            <motion.div 
              className="mv-card vision-bg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Nuestra Visión</h3>
              <p>Un futuro donde los bosques nativos prosperen en nuestro paisaje, proporcionando hábitat para la vida silvestre, aire y agua limpios para las comunidades, y un clima estable para las generaciones venideras. Visualizamos convertirnos en el proveedor líder de árboles nativos para conservación.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section">
        <div className="container">
          <div className="section-header centered">
            <h2>¿Por Qué Elegirnos?</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon"><Award size={32} /></div>
              <h4>Conocimiento Experto</h4>
              <p>Profundo entendimiento de los ecosistemas locales y requisitos de especies nativas</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><ShieldCheck size={32} /></div>
              <h4>Garantía de Calidad</h4>
              <p>Plántulas saludables y robustas cultivadas con cuidado y prácticas ecológicas</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><HeartPulse size={32} /></div>
              <h4>Soporte Continuo</h4>
              <p>Orientación integral desde la selección hasta la plantación y más allá</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder section">
        <div className="container">
          <div className="founder-card">
            <div className="founder-image">
              <img src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=1974&auto=format&fit=crop" alt="Yile - Fundador" />
            </div>
            <div className="founder-info">
              <Quote size={40} className="quote-icon" />
              <h2>Conoce a Yile, Nuestro Fundador</h2>
              <p>Con más de 15 años de experiencia en silvicultura y conservación, Yile combina experiencia científica con una profunda pasión por la restauración ambiental.</p>
              <blockquote className="founder-quote">
                "Cada árbol que cultivamos representa esperanza para el futuro de nuestro planeta. Juntos podemos revertir la deforestación y crear ecosistemas prósperos para las generaciones venideras."
              </blockquote>
              <div className="founder-signature">
                <strong>— Yile</strong>
                <span>Fundador y Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
