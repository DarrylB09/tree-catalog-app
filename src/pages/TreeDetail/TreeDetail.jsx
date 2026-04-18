import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, FileText, CheckCircle, Info } from 'lucide-react';
import { TREES_DATA } from '../../data/trees';
import './TreeDetail.css';

const TreeDetail = () => {
  const { slug } = useParams();
  const tree = TREES_DATA.find(t => t.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tree) {
    return (
      <div className="container section error-page">
        <h2>Árbol no encontrado</h2>
        <Link to="/catalogo" className="btn btn-primary">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="tree-detail-page">
      <div className="container top-nav">
        <Link to="/catalogo" className="back-link">
          <ArrowLeft size={18} />
          Volver al catálogo
        </Link>
      </div>

      <div className="container">
        <div className="detail-layout">
          {/* Left Column - Sticky Image */}
          <aside className="detail-sidebar">
            <div className="sticky-image-container">
              <img src={tree.image} alt={tree.name} className="main-tree-image" />
              <div className="type-tag-overlay">{tree.type}</div>
            </div>
          </aside>

          {/* Right Column - Scrollable Content */}
          <main className="detail-content">
            <header className="detail-header">
              <span className="scientific-name-accent">{tree.scientificName}</span>
              <h1>{tree.name}</h1>
              <p className="large-intro">{tree.longDesc}</p>
            </header>

            <div className="main-actions">
              <button className="btn btn-vibrant">
                <MessageCircle size={20} />
                Cotizar por WhatsApp
              </button>
              <button className="btn btn-outline-dark">
                <FileText size={20} />
                Cotizar por formulario
              </button>
            </div>

            {/* Characteristics Grid */}
            <section className="specs-section">
              <div className="specs-container-box">
                <h3>Características</h3>
                <div className="stats-grid">
                  <div className="stat-item-card">
                    <span className="stat-title">Altura en Madurez</span>
                    <span className="stat-data">{tree.stats.height}</span>
                  </div>
                  <div className="stat-item-card">
                    <span className="stat-title">Tasa de Crecimiento</span>
                    <span className="stat-data">{tree.stats.growth}</span>
                  </div>
                  <div className="stat-item-card">
                    <span className="stat-title">Tipo de Suelo</span>
                    <span className="stat-data">{tree.stats.soil}</span>
                  </div>
                  <div className="stat-item-card">
                    <span className="stat-title">Exposición Solar</span>
                    <span className="stat-data">{tree.stats.sun}</span>
                  </div>
                  <div className="stat-item-card">
                    <span className="stat-title">Necesidades de Agua</span>
                    <span className="stat-data">{tree.stats.water}</span>
                  </div>
                  <div className="stat-item-card">
                    <span className="stat-title">Zona Climática</span>
                    <span className="stat-data">{tree.stats.climate}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Environmental Benefits */}
            <section className="benefits-section-box">
              <div className="benefits-card-styled">
                <h3>Beneficios Ambientales</h3>
                <ul className="styled-check-list">
                  {tree.benefits.map((benefit, index) => (
                    <li key={index}>
                      <CheckCircle size={18} className="check-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Advice Alert */}
            <section className="advice-alert-section">
              <div className="advice-alert-box">
                <div className="advice-icon-circle">
                  <Info size={24} />
                </div>
                <div className="advice-body">
                  <h4>Orientación Experta Disponible</h4>
                  <p>Nuestro equipo puede ayudarte a determinar si este árbol es adecuado para tu proyecto, proporcionar instrucciones de plantación y ofrecer soporte continuo.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Final Bottom CTA - Full Width Background */}
      <section className="final-cta-full">
        <div className="container">
          <div className="centered-cta-content">
            <h3>¿Te interesa este árbol?</h3>
            <p>Contáctanos y te ayudamos con precio, disponibilidad y recomendaciones</p>
            <div className="final-btns-row">
              <button className="btn btn-vibrant">Cotizar este árbol</button>
              <button className="btn btn-outline-dark">Cotizar por formulario</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreeDetail;
