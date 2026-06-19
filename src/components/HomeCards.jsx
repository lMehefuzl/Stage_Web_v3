import React from 'react';

const HomeCards = ({ setPage }) => {
  const cardsData = [
    { id: 'documentation_technique', icon: 'bi-journal-bookmark-fill', title: 'DOCUMENTATION TECHNIQUE', desc: 'Description du robot • Accessoires • Boutons • Sécurité • Anneau LED • Maintenance • Capteurs' },
    { id: 'programmation', icon: 'bi-code-slash', title: 'PROGRAMMATION', desc: 'NiryoStudio • Blockly • Pyniryo • ROS • MATLAB/Simulink • Node-RED • Simulation • Librairies' },
    { id: 'communication', icon: 'bi-wifi', title: 'COMMUNICATION LOGICIELLE', desc: 'Modbus/TCP • Bobines (coils) • Entrées discrètes • Registres de holding • Registres d\'entrées • PyModbus' },
    { id: 'jumeau_numérique', icon: 'bi-cpu', title: 'JUMEAU NUMÉRIQUE', desc: 'Installation NiryoStudio • Simulation • Linux/Windows • RViz • Gazebo • Webots' },
    { id: 'théorie', icon: 'bi-calculator-fill', title: 'FONDAMENTAUX THÉORIQUES', desc: 'MGD • Convention DH • MGI' },
    { id: 'ressources', icon: 'bi-folder-symlink-fill', title: 'RESSOURCES', desc: 'Lexique • Liens utiles' },
    { id: 'ia', icon: 'bi-info-circle-fill', title: 'BENCHMARK', desc: 'ia • reinforced learning • machine learning' },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {cardsData.map((card) => (
          <div className="col-md-6 col-lg-4" key={card.id}>
            <div 
              onClick={() => setPage(card.id)} 
              className="card h-100 border rounded-4 shadow-sm text-center p-3 custom-card"
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body">
                <i className={`bi ${card.icon} display-5 text-primary mb-3`}></i>
                <h5 className="card-title text-primary fw-bold mb-3">{card.title}</h5>
                <p className="card-text text-muted small">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;