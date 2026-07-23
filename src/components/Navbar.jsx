import React, { useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Navbar = ({ user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
        return 'IA';
      default: 
        return 'GUIDE NIRYO NED 2';
    }
  };

  const isHome = location.pathname === '/';
  
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); // supprime la session
    navigate('/');
  };

  return (
    <>
      <div className="bg-white border-bottom shadow-sm mb-4 sticky-top">
        <div className="container-fluid py-3 px-4 d-flex align-items-center">
          {!isHome && (
            <Link to="/"><motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="btn btn-outline-primary btn-sm border rounded-3"><i className="bi bi-arrow-left"></i> Accueil
            </motion.button></Link>
          )}
          <motion.span
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="ms-3 fs-5 fw-semibold text-primary">{getTitle()}
          </motion.span>

           <SearchBar />
          
          {user ? (
            <div className="ms-auto d-flex flex-column">
              <button className="btn btn-outline-primary btn-sm border rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#userMenu">
                <i className="bi bi-person-circle me-1"></i>
                {user.name}
              </button>
              <div className="collapse" id="userMenu">
                <button onClick={handleLogout} className="btn btn-outline-danger btn-sm border rounded-3 mt-1">
                  <i className="bi bi-box-arrow-right me-1"></i>Déconnexion
                </button>
              </div>
            </div>
          ) : (
            <Link to="registration" className="ms-auto">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="btn btn-outline-primary btn-sm border rounded-3">Connexion
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;