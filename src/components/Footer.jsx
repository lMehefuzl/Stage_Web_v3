import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-top mt-3 py-3">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

        {/* message à gauche */}
        <p className="text-muted small mb-0 text-center text-md-start" style={{ maxWidth: '900px' }}>
          Ce site a été développé à partir de travaux réalisés dans le cadre de l'AMI du réseau d'ESR du site Champardennais.
        </p>

        {/* logos à droite */}
        <div className="d-flex align-items-center gap-4">
          <img src="images/Cesi.png" alt="CESI" className="img-fluid" style={{ maxHeight: '40px', width: 'auto' }} />
          <img src="images/Eisine.png" alt="EISINE" className="img-fluid" style={{ maxHeight: '40px', width: 'auto' }} />
          <img src="images/Crestic.png" alt="CRESTIC" className="img-fluid" style={{ maxHeight: '40px', width: 'auto' }} />
        </div>

      </div>
    </footer>
  );
};

export default Footer;