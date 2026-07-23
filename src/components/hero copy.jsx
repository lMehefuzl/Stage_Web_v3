import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [landed, setLanded] = useState(false);

  return (
    <div className="position-relative bg-light border-bottom py-5 text-center overflow-hidden">

      {/* halos décoratifs en fond */}
      <div
        className="position-absolute top-0 start-0"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(13,110,253,0.15) 0%, rgba(13,110,253,0) 70%)',
          transform: 'translate(-30%, -30%)',
          pointerEvents: 'none'
        }}
      />
      <div
        className="position-absolute bottom-0 end-0"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(102,16,242,0.15) 0%, rgba(102,16,242,0) 70%)',
          transform: 'translate(30%, 30%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>

        {/* CESI — le robot saute et prend la place du I */}
        <div className="d-flex justify-content-center align-items-end mb-2" style={{ height: 'clamp(6rem, 16vw, 9rem)' }}>
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

          {/* colonne du "I" occupée par le robot */}
          <div
            className="position-relative d-flex align-items-end justify-content-center"
            style={{ width: 'clamp(2.2rem, 7vw, 5rem)', height: '100%' }}
          >
            {/* ombre au sol, pulse à l'impact puis se stabilise */}
            <motion.div
              className="position-absolute"
              style={{
                bottom: '0px',
                width: '75%',
                height: '10px',
                left: 'calc(50% - 16px)', // <-- décalage vers la droite ici
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

            {/* le robot : chute, écrasement, rebonds, puis respiration en boucle */}
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

        {/* barre bleue */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '400px' }}
          transition={{ delay: 1.9, duration: 0.6 }}
          style={{
            height: '4px',
            background: 'linear-gradient(90deg, #0d6efd, #6610f2)',
            borderRadius: '2px',
            margin: '12px auto 24px',
            boxShadow: '0 2px 10px rgba(13,110,253,0.4)'
          }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="fw-bold text-primary mb-2"
        >
          NIRYO NED 2
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="lead text-secondary fs-4 mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <strong>Guide d'utilisation du robot Niryo Ned 2</strong>
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;