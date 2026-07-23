import React, { useState } from 'react';
import { motion } from 'framer-motion'; //pour animé

const Hero = () => {
  const [landed, setLanded] = useState(false);

  return (
    <div className="bg-light border-bottom py-3 text-center">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        
        {/* CESI — le robot saute et prend la place du I */}
        <div className="d-flex justify-content-center align-items-end mb-3" style={{ height: 'clamp(6rem, 16vw, 9rem)' }}>
          <span
            className="fw-bold"
            style={{
              background: 'linear-gradient(90deg, #0d6efd, #6610f2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              fontSize: 'clamp(3rem, 10vw, 7rem)'
            }}
          >
            CES
          </span>

          <div
            className="position-relative d-flex align-items-end justify-content-center"
            style={{ width: 'clamp(2.2rem, 7vw, 5rem)', height: '100%' }}
          >
            {/* ombre au sol */}
            <div
              className="position-absolute"
              style={{
                bottom: '0px',
                left: 'calc(50% - 16px)', // <-- décalage vers la droite ici
                width: '75%'
              }}
            >
              <motion.div
                style={{
                  height: '10px',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 75%)'
                }}
                initial={{ opacity: 0, scaleX: 0.3 }}
                animate={
                  landed
                    ? { opacity: 0.3, scaleX: [0.7, 0.85, 0.7] }
                    : { opacity: [0, 0.5, 0.25, 0.4, 0.28, 0.35], scaleX: [0.3, 1, 0.5, 0.85, 0.6, 0.75] }
                }
                transition={
                  landed
                    ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                    : { duration: 1.7, times: [0, 0.4, 0.5, 0.62, 0.7, 1], ease: 'easeOut' }
                }
              />
            </div>

            {/* le robot qui tombe, s'écrase, rebondit, puis respire */}
            <motion.img
              src="images/logov2.png"
              alt="Niryo Ned 2 - CESI"
              className="img-fluid position-relative"
              style={{ maxHeight: '100%', width: 'auto', transformOrigin: 'bottom center' }}
              initial={{ y: -260, opacity: 0, scaleX: 1, scaleY: 1 }}
              animate={
                landed
                  ? { y: [0, -8, 0], scaleX: 1, scaleY: 1, opacity: 1 }
                  : {
                      y: [-260, 0, -55, 0, -22, 0, -6, 0],
                      scaleY: [1, 0.6, 1.12, 0.85, 1.05, 0.95, 1.01, 1],
                      scaleX: [1, 1.25, 0.9, 1.08, 0.96, 1.03, 0.99, 1],
                      opacity: [0, 1, 1, 1, 1, 1, 1, 1]
                    }
              }
              transition={
                landed
                  ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 1.7, times: [0, 0.4, 0.5, 0.62, 0.7, 0.82, 0.9, 1], ease: 'easeOut' }
              }
              onAnimationComplete={() => { if (!landed) setLanded(true); }}
            />
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold text-primary mb-2 tracking-tight"
        >
          NIRYO NED
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
          {/*lignes pour les credits  */}
          {/*}
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
          */}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;