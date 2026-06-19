//npm install framer-motion   pour télécharger les truc de motion
import React from 'react';
import { motion } from 'framer-motion'; //pour animé les bail

const Hero = () => {
  return (
    <div className="bg-light border-bottom py-5 text-center">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        
        {/* Icône animée : Elle flotte de haut en bas en continu */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-3 d-inline-block"
        >
          <i className="bi bi-robot text-primary" style={{ fontSize: '3.5rem' }}></i>
        </motion.div>

        {/* Titre : Apparition en fondu vers le haut */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold text-primary mb-2 tracking-tight"
        >
          NIRYO NED 2
        </motion.h1>
        
        {/* Sous-titre : Apparition après le titre */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="lead text-secondary fs-4 mx-auto" 
          style={{ maxWidth: '600px' }}
        >
          <strong>Guide d'utilisation du robot Niryo Ned 2</strong>

          <div className="d-flex justify-content-center gap-3 mt-4">
          <span className="badge bg-white text-dark border p-2 shadow-sm">
            <i className="bi bi-person text-primary me-2"></i>
            Auteurs : A. Bevilacqua & M. Errard
          </span>
          <span className="badge bg-white text-dark border p-2 shadow-sm">
            <i className="bi bi-people text-primary me-2"></i>
            Encadrants : L. Arcese & S. Lecasse
          </span>
        </div>
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;