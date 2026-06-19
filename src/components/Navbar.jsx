//npm install framer-motion   pour télécharger les truc de motion

import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ setPage, currentPage }) => {
  // Cette fonction détermine le titre à afficher selon la page active
  const getTitle = () => {
    switch (currentPage) {
      case 'documentation_technique': 
        return 'DOCUMENTATION TECHNIQUE';
      case 'programmation': 
        return 'PROGRAMMATION';
      case 'communication': 
        return 'COMMUNICATION LOGICIELLE';
      case 'jumeau_numérique': 
        return 'JUMEAU NUMÉRIQUE';
      case 'théorie': 
        return 'FONDAMENTAUX THÉORIQUES';
      case 'ressources': 
        return 'RESSOURCES';
        case 'ia': 
        return 'BENCHMARKS';
      default: 
        return 'GUIDE NIRYO NED 2';
    }
  };

  return (
    <div className="bg-white border-bottom shadow-sm mb-4 sticky-top">
      <div className="container-fluid py-3 px-4 d-flex align-items-center">
        {/* Le bouton retour s'affiche uniquement si on n'est pas sur l'accueil */}
        {currentPage !== 'home' && (
          <motion.button initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}onClick={() => setPage('home')} 
            className="btn btn-outline-primary btn-sm border rounded-3">
            <i className="bi bi-arrow-left"></i> Accueil
          </motion.button>
        )}
        <motion.span key={currentPage} initial={{ opacity: 0 }}animate={{ opacity: 1 }}transition={{ duration: 0.5 }}
          className="ms-3 fs-5 fw-semibold text-primary">{getTitle()}
        </motion.span>
      </div>
    </div>
  );
};

export default Navbar;