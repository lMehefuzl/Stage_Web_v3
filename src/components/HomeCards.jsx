import React from 'react';

const HomeCards = ({ setPage }) => {
  return (
    <div className="container py-5">
      <div className="row g-4">

        {/* DOCUMENTATION TECHNIQUE */}
        <div className="col-md-6 col-lg-4">
          <div 
            onClick={() => setPage('documentation_technique')} 
            className="card h-100 border-primary border-2 rounded-4 shadow-sm text-decoration-none d-block"
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center p-4">
              <i className="bi bi-journal-bookmark-fill fs-1 text-primary"></i>
              <h5 className="card-title text-primary mt-3 fw-bold">DOCUMENTATION TECHNIQUE</h5>
              <p className="card-text text-muted">Description du robot • Accessoires • Boutons • Sécurité • Anneau LED • Maintenance • Capteurs</p>
            </div>
          </div>
        </div>

        {/* PROGRAMMATION */}
        <div className="col-md-6 col-lg-4">
          <div 
            onClick={() => setPage('programmation')} 
            className="card h-100 border-primary border-2 rounded-4 shadow-sm text-decoration-none d-block"
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center p-4">
              <i className="bi bi-code-slash fs-1 text-primary"></i>
              <h5 className="card-title text-primary mt-3 fw-bold">PROGRAMMATION</h5>
              <p className="card-text text-muted">NiryoStudio • Blockly • Pyniryo • ROS • MATLAB/Simulink • Node-RED • Simulation • Librairies</p>
            </div>
          </div>
        </div>

        {/* COMMUNICATION LOGICIELLE */}
        <div className="col-md-6 col-lg-4">
          <div 
            onClick={() => setPage('communication')} 
            className="card h-100 border-primary border-2 rounded-4 shadow-sm text-decoration-none d-block"
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center p-4">
              <i className="bi bi-wifi fs-1 text-primary"></i>
              <h5 className="card-title text-primary mt-3 fw-bold">COMMUNICATION LOGICIELLE</h5>
              <p className="card-text text-muted">Modbus/TCP • Bobines (coils) • Entrées discrètes • Registres de holding • Registres d'entrées • PyModbus</p>
            </div>
          </div>
        </div>

        {/* JUMEAU NUMÉRIQUE */}
        <div className="col-md-6 col-lg-4">
          <div 
            onClick={() => setPage('jumeau_numérique')} 
            className="card h-100 border-primary border-2 rounded-4 shadow-sm text-decoration-none d-block"
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center p-4">
              <i className="bi bi-cpu fs-1 text-primary"></i>
              <h5 className="card-title text-primary mt-3 fw-bold">JUMEAU NUMÉRIQUE</h5>
              <p className="card-text text-muted">Installation NiryoStudio • Simulation • Linux/Windows • RViz • Gazebo • Webots</p>
            </div>
          </div>
        </div>

        {/* FONDAMENTAUX THÉORIQUES */}
        <div className="col-md-6 col-lg-4">
        <div 
            onClick={() => setPage('théorie')} // Changé ici en 'théorie'
            className="card h-100 border-primary border-2 rounded-4 shadow-sm text-decoration-none d-block"
            style={{ cursor: 'pointer' }}
        >
            <div className="card-body text-center p-4">
            <i className="bi bi-calculator-fill fs-1 text-primary"></i>
            <h5 className="card-title text-primary mt-3 fw-bold">FONDAMENTAUX THÉORIQUES</h5>
            <p className="card-text text-muted">MGD • Convention DH • MGI</p>
            </div>
        </div>
        </div>

        {/* RESSOURCES */}
        <div className="col-md-6 col-lg-4">
          <div 
            onClick={() => setPage('ressources')} 
            className="card h-100 border-primary border-2 rounded-4 shadow-sm text-decoration-none d-block"
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center p-4">
              <i className="bi bi-folder-symlink-fill fs-1 text-primary"></i>
              <h5 className="card-title text-primary mt-3 fw-bold">RESSOURCES</h5>
              <p className="card-text text-muted">Lexique • Liens utiles</p>
            </div>
          </div>
        </div>

        {/* ia */}
        <div className="col-md-6 col-lg-4">
          <div 
            onClick={() => setPage('ia')} 
            className="card h-100 border-primary border-2 rounded-4 shadow-sm text-decoration-none d-block"
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center p-4">
              <i className="bi bi-folder-symlink-fill fs-1 text-primary"></i>
              <h5 className="card-title text-primary mt-3 fw-bold">BENCHMARKS</h5>
              <p className="card-text text-muted">ia • reienforcement learning</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeCards;