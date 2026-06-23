import React from 'react';
import { Link } from 'react-router-dom';

const HomeCards = () => {
  const cardsData = [
    { id: 'documentation-technique', icon: 'bi-journal-bookmark-fill', title: 'DOCUMENTATION TECHNIQUE', desc: 'Description du robot • Accessoires • Boutons • Sécurité • Anneau LED • Maintenance • Capteurs' },
    { id: 'programmation', icon: 'bi-code-slash', title: 'PROGRAMMATION', desc: 'NiryoStudio • Blockly • Pyniryo • ROS • MATLAB/Simulink • Node-RED • Simulation • Librairies' },
    { id: 'communication', icon: 'bi-wifi', title: 'COMMUNICATION LOGICIELLE', desc: 'Modbus/TCP • Bobines (coils) • Entrées discrètes • Registres de holding • Registres d\'entrées • PyModbus' },
    { id: 'jumeau-numerique', icon: 'bi-cpu', title: 'JUMEAU NUMÉRIQUE', desc: 'Installation NiryoStudio • Simulation • Linux/Windows • RViz • Gazebo • Webots' },
    { id: 'theorie', icon: 'bi-calculator-fill', title: 'FONDAMENTAUX THÉORIQUES', desc: 'MGD • Convention DH • MGI' },
    { id: 'ressources', icon: 'bi-folder-symlink-fill', title: 'RESSOURCES', desc: 'Lexique • Liens utiles' },
    { id: 'ia', icon: 'bi-info-circle-fill', title: 'BENCHMARK', desc: 'ia • reinforced learning • machine learning' },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {cardsData.map((card) => (
          <div className="col-md-6 col-lg-4" key={card.id}>
            <Link to={`/${card.id}`} className="text-decoration-none">
              <div className="card h-100 border rounded-4 shadow-sm text-center p-3 custom-card">
                <div className="card-body">
                  <i className={`bi ${card.icon} display-5 text-primary mb-3`}></i>
                  <h5 className="card-title text-primary fw-bold mb-3">{card.title}</h5>
                  <p className="card-text text-muted small">{card.desc}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;