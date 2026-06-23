import React, { useState } from 'react';
import { Link, useLocation, } from 'react-router-dom';
import { motion } from 'framer-motion';
import FormulaireConnexion from './FormulaireConnexion';

const Navbar = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);

  const getTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/documentation-technique': 
        return 'DOCUMENTATION TECHNIQUE';
      case '/programmation': 
        return 'PROGRAMMATION';
      case '/communication': 
        return 'COMMUNICATION LOGICIELLE';
      case '/jumeau-numerique': 
        return 'JUMEAU NUMÉRIQUE';
      case '/theorie': 
        return 'FONDAMENTAUX THÉORIQUES';
      case '/ressources': 
        return 'RESSOURCES';
      case '/ia': 
        return 'BENCHMARKS';
      default: 
        return 'GUIDE NIRYO NED 2';
    }
  };

  const isHome = location.pathname === '/';

  return (
    <>
      <div className="bg-white border-bottom shadow-sm mb-4 sticky-top">
        <div className="container-fluid py-3 px-4 d-flex align-items-center">
          {!isHome && (
            <Link to="/"><motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="btn btn-outline-primary btn-sm border rounded-3"
            >
              <i className="bi bi-arrow-left"></i> Accueil
            </motion.button></Link>
          )}
          <motion.span
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="ms-3 fs-5 fw-semibold text-primary"
          >
            {getTitle()}
          </motion.span>

          
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setShowLogin(true)}
            className="btn btn-outline-primary btn-sm border rounded-3 ms-auto"
          >
            Connexion
          </motion.button>
        </div>
      </div>

      {showLogin && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
          onClick={() => setShowLogin(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <FormulaireConnexion />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;