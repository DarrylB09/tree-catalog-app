import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Ponte en Contacto</h1>
            <p>Estamos aquí para ayudarte con tus necesidades de reforestación</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column - Info & Hours */}
            <div className="contact-info-column">
              <div className="info-section">
                <h2>Información de Contacto</h2>
                
                <div className="info-item">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div className="info-details">
                    <h3>Teléfono</h3>
                    <p>+1 (555) 123-4567</p>
                    <span>Lun-Vie 8AM-6PM</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div className="info-details">
                    <h3>Correo Electrónico</h3>
                    <p>info@arbolesnativos.com</p>
                    <span>Respondemos en 24 horas</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div className="info-details">
                    <h3>Ubicación</h3>
                    <p>Camino Valle Verde 123</p>
                    <span>Ciudad Naturaleza, NC 12345</span>
                  </div>
                </div>

                <button className="btn btn-vibrant btn-whatsapp">
                  <MessageCircle size={20} />
                  Escríbenos por WhatsApp
                </button>
              </div>

              <div className="hours-section">
                <div className="hours-header">
                  <Clock size={24} className="clock-icon" />
                  <h3>Horario de Atención</h3>
                </div>
                <ul className="hours-list">
                  <li><span>Lunes - Viernes:</span> <strong>8:00 AM - 6:00 PM</strong></li>
                  <li><span>Sábado:</span> <strong>9:00 AM - 4:00 PM</strong></li>
                  <li><span>Domingo:</span> <strong>Cerrado</strong></li>
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="contact-form-column">
              <div className="form-card">
                <h2>Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nombre Completo *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Juan Pérez" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row dual">
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="juan@ejemplo.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Número de Teléfono</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="+1 (555) 000-0000" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Asunto *</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="cotizacion">Cotización de árboles</option>
                      <option value="asesoria">Asesoría técnica</option>
                      <option value="vivero">Visita al vivero</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensaje *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      placeholder="Cuéntanos sobre tu proyecto o consulta..." 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    <Send size={20} />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <div className="map-header">
            <h2>Visita Nuestro Vivero</h2>
            <p>Damos la bienvenida a visitantes para recorrer nuestro vivero y ver nuestros árboles nativos de primera mano. Por favor llama con anticipación para programar una visita.</p>
          </div>
          <div className="map-placeholder">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127532.74868018171!2d-76.47169420658762!3d2.253027725946399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3752e53efb1c09%3A0x67a3f4e89926ea6d!2sPurac%C3%A9%2C%20Cauca%2C%20Colombia!5e0!3m2!1sen!2sus!4v1713350000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Puracé"
            ></iframe>
            <div className="map-overlay">
              <div className="map-card-info">
                <strong>Árboles Nativos</strong>
                <p>Camino Valle Verde 123, Ciudad Naturaleza</p>
                <button className="btn btn-sm btn-primary">Ver en Google Maps</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
