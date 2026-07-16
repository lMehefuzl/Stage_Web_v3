//npm install framer-motion   pour télécharger les truc de motion
import React from 'react';
import { motion } from 'framer-motion'; //pour animé les bail

const Hero = () => {
  return (
    <div className="bg-light border-bottom py-3 text-center">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        
        {/* logo animé */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-3 d-inline-block"
        >
           <img src="images/logo.png" className="img-fluid" style={{maxHeight: '10rem', width: 'auto', objectFit: 'contain'}} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold text-primary mb-2 tracking-tight"
        >
          NIRYO NED 2
        </motion.h1>

          {/*//la bare bleu */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '400px' }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ height: '4px', background: 'linear-gradient(90deg, #0d6efd, #6610f2)', borderRadius: '2px', margin: '12px auto 24px' }}
        />
        
        {/* pop up soustitre */}
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