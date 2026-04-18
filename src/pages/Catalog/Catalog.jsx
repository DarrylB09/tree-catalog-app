import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { TREES_DATA } from '../../data/trees';
import './Catalog.css';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [filteredTrees, setFilteredTrees] = useState(TREES_DATA);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = TREES_DATA;

    // Filter by Search
    if (searchTerm) {
      result = result.filter(tree => 
        tree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by Category
    if (activeFilter !== 'Todos') {
      result = result.filter(tree => tree.type === activeFilter);
    }

    setFilteredTrees(result);
  }, [searchTerm, activeFilter]);

  return (
    <div className="catalog-page">
      {/* Header section */}
      <section className="catalog-hero">
        <div className="container">
          <h1>Catálogo de Árboles</h1>
          <p>Descubre nuestra selección de especies de árboles nativos</p>
        </div>
      </section>

      {/* Search and Filter section */}
      <section className="catalog-controls section">
        <div className="container">
          <div className="controls-wrapper">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Buscar árboles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <button 
                className={`filter-btn ${activeFilter === 'Todos' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Todos')}
              >
                Todos
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'Caducifolio' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Caducifolio')}
              >
                Caducifolio
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'Perenne' ? 'active' : ''}`}
                onClick={() => setActiveFilter('Perenne')}
              >
                Perenne
              </button>
            </div>
          </div>
          
          <div className="results-count">
            Mostrando {filteredTrees.length} árboles
          </div>
        </div>
      </section>

      {/* Grid section */}
      <section className="catalog-grid section">
        <div className="container">
          <div className="trees-grid">
            {filteredTrees.length > 0 ? (
              filteredTrees.map((tree) => (
                <div key={tree.id} className="tree-card catalog-card">
                  <div className="tree-image">
                    <img src={tree.image} alt={tree.name} />
                    <div className="tree-type-tag">{tree.type}</div>
                  </div>
                  <div className="tree-info">
                    <span className="scientific-name">{tree.scientificName}</span>
                    <h3>{tree.name}</h3>
                    <p>{tree.shortDesc}</p>
                    <div className="card-actions">
                      <Link to={`/catalogo/${tree.slug}`} className="btn-text">
                        Ver Detalles
                        <ArrowRight size={16} />
                      </Link>
                      <button className="btn-consultar">Consultar precio</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No se encontraron árboles con ese nombre</h3>
                <button className="btn btn-outline" onClick={() => {setSearchTerm(''); setActiveFilter('Todos');}}>
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
