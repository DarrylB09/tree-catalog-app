import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './FeaturedTrees.css';

const FeaturedTrees = () => {
  const trees = [
    {
      name: 'Roble',
      desc: 'Árbol resistente y de larga vida, ideal para sombra, restauración de suelos y grandes espacios',
      img: 'https://images.unsplash.com/photo-1544430221-51000f3be916?q=80&w=2072&auto=format&fit=crop'
    },
    {
      name: 'Pino',
      desc: 'Crecimiento rápido, ideal para control de erosión, reforestación y protección de suelos',
      img: 'https://images.unsplash.com/photo-1510423014163-53d74bc48b26?q=80&w=2074&auto=format&fit=crop'
    },
    {
      name: 'Arce',
      desc: 'Proporciona excelente sombra y valor ornamental, ideal para espacios verdes',
      img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="catalogo" className="featured-trees section">
      <div className="container">
        <div className="featured-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Árboles Disponibles para Tu Proyecto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Especies nativas de alta calidad, listas para reforestación y proyectos ambientales
          </motion.p>
        </div>

        <div className="trees-grid">
          {trees.map((tree, index) => (
            <motion.div 
              key={index} 
              className="tree-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="tree-image">
                <img src={tree.img} alt={tree.name} />
              </div>
              <div className="tree-info">
                <h3>{tree.name}</h3>
                <p>{tree.desc}</p>
                <button className="btn-text">
                  Ver Detalles
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="featured-footer">
          <button className="btn btn-primary">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrees;
