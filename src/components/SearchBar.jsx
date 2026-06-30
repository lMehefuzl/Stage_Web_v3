// components/SearchBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  //const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Structure : [titre, page, section] (tableau 3 colonne)
  const data = [
    // Documentation Technique
    ['Documentation Technique', '/documentation-technique'],
    ['Description du robot', '/documentation-technique', 'description'],
    ['Les accessoires', '/documentation-technique', 'accessoires'],
    ['Les boutons', '/documentation-technique', 'boutons'],
    ['Sécurité', '/documentation-technique', 'securite'],
    ['Indications anneau LED', '/documentation-technique', 'anneau-led'],
    ['Maintenance', '/documentation-technique', 'maintenance'],
    ['Capteurs', '/documentation-technique', 'capteurs'],
    ['Généralités', '/documentation-technique', 'generalites'],
    ['Connectiques', '/documentation-technique', 'connectiques'],
    ['Architecture électrique', '/documentation-technique', 'architecture'],
    ['Alimentation', '/documentation-technique', 'alimentation'],
    ['Mode opératoire', '/documentation-technique', 'modes'],
    ['Grippers', '/documentation-technique', 'grippers'],
    ['Électroaimant', '/documentation-technique', 'electroaimant'],
    ['Pompe à vide', '/documentation-technique', 'pompe'],
    ['Raspberry Pi 4', '/documentation-technique', 'raspberry'],
    ['Servomoteur XL330', '/documentation-technique', 'servomoteur'],
    ['Caméra IMX322', '/documentation-technique', 'camera'],
    ['Capteur IR', '/documentation-technique', 'capteur'],
    ['Convoyeur v2', '/documentation-technique', 'convoyeur'],
    ['Set Vision', '/documentation-technique', 'set-vision'],
    ['Bouton Wi-Fi', '/documentation-technique', 'bouton-wifi'],
    ['Bouton supérieur', '/documentation-technique', 'bouton-sup'],
    ['Panneau de contrôle', '/documentation-technique', 'panneau'],

    // Programmation
    ['Programmation', '/programmation'],
    ['NiryoStudio', '/programmation', 'nirystudio'],
    ['Programmation logiciels', '/programmation', 'logiciels'],
    ['Installation des librairies', '/programmation', 'librairies'],
    ['MATLAB', '/programmation', 'matlab'],
    ['ROS', '/programmation', 'programmation-ros'],
    ['Exemples', '/programmation', 'exemples'],
    ['Blockly', '/programmation', 'blockly'],
    ['Pyniryo', '/programmation', 'pyniryo-logiciel'],
    ['Node-RED', '/programmation', 'node-red'],
    ['Utilisation du robot', '/programmation', 'utilisation-seul'],
    ['Configuration initiale', '/programmation', 'configuration-initiale'],
    ['Connexion au robot', '/programmation', 'connexion'],
    ['Calibration', '/programmation', 'calibration'],
    ['Interface', '/programmation', 'interface'],
    ['Tableau de bord', '/programmation', 'tableau-bord'],
    ['PyModbus', '/programmation', 'pymodbus'],
    ['Installation NedROS', '/programmation', 'matlab-installation'],
    ['Simulation MATLAB', '/programmation', 'matlab-simulation'],
    ['Hardware MATLAB', '/programmation', 'matlab-hardware'],
    ['Préambule ROS', '/programmation', 'preambule'],
    ['Simulation Gazebo', '/programmation', 'simulation-gazebo-rviz'],
    ['Création de programme', '/programmation', 'creation-programmes'],
    ['Robot réel', '/programmation', 'programmation-reel'],

    // Communication
    ['Communication Logicielle', '/communication', 'communication'],
    ['Modbus/TCP', '/communication', 'modbus-tcp'],
    ['Bobines (coils)', '/communication', 'bobines'],
    ['Entrées discrètes', '/communication', 'entrees-discretes'],
    ['Registres de holding', '/communication', 'registres-holding'],
    ['Registres d\'entrées', '/communication', 'registres-entrees'],

    // Jumeau Numérique
    ['Jumeau Numérique', '/jumeau-numerique', 'jumeau-numerique'],
    ['Installation NiryoStudio', '/jumeau-numerique', 'installation'],
    ['Simulation NiryoStudio', '/jumeau-numerique', 'simulation-niryostudio'],
    ['Environnements', '/jumeau-numerique', 'environnements'],
    ['Linux / Windows', '/jumeau-numerique', 'linux-windows'],
    ['RViz', '/jumeau-numerique', 'rviz'],
    ['Gazebo', '/jumeau-numerique', 'gazebo'],
    ['Webots', '/jumeau-numerique', 'webots'],
    ['PyBullet', '/jumeau-numerique', 'pybullet'],
    ['Prérequis', '/jumeau-numerique', 'prerequis'],
    ['Téléchargement', '/jumeau-numerique', 'telechargement'],
    ['Démarrer simulation', '/jumeau-numerique', 'sim-demarrage'],
    ['Utilisation simulation', '/jumeau-numerique', 'sim-utilisation'],
    ['Blocs de couleurs', '/jumeau-numerique', 'sim-blocs'],
    ['Espaces de travail', '/jumeau-numerique', 'sim-espaces'],
    ['Limites simulation', '/jumeau-numerique', 'sim-limites'],
    ['Dépannages', '/jumeau-numerique', 'sim-depannages'],

    // Théorie
    ['Fondamentaux Théoriques', '/theorie', 'theorie'],
    ['Modélisation géométrique', '/theorie', 'modelisation'],
    ['Résumé ROS', '/theorie', 'resume-ros'],
    ['Introduction', '/theorie', 'introduction'],
    ['Architectures', '/theorie', 'architectures'],
    ['Changements de repères', '/theorie', 'changements-reperes'],
    ['Rotation autour d\'un axe', '/theorie', 'rotation-axe'],
    ['Espace vectoriel', '/theorie', 'espaces'],
    ['MGD', '/theorie', 'mgd'],
    ['Denavit-Hartenberg', '/theorie', 'dh'],
    ['Modélisation Géométrique Directe', '/theorie', 'mgi'],
    ['MGI', '/theorie', 'mgi'],
    ['Modélisation Géométrique Inverse', '/theorie', 'mgi'],
    ['Étude du Ned2', '/theorie', 'etude-ned2'],
    ['Objectifs ROS', '/theorie', 'objectifs-philosophie'],
    ['Concepts ROS', '/theorie', 'concepts-cles'],
    ['Outils ROS', '/theorie', 'outils-ecosysteme'],
    ['Limites ROS', '/theorie', 'limites'],

    // Ressources
    ['Ressources', '/ressources', 'ressources'],
    ['Lexique', '/ressources', 'lexique'],
    ['Liens utiles', '/ressources', 'liens'],

    // IA
    // IA
    ['1. Apprentissage par renforcement', '/ia', 'cadrage'],
    ['Présentation de l\'Apprentissage par Reinforcement', '/ia', 'présentation_rl'],
    ['Définition de l\'Apprentissage par Reinforcement', '/ia', 'definition_rl'],
    ['Le processus de décision markovien', '/ia', 'pdm'],
    ['Fonctions de valeur et équations de Bellman', '/ia', 'bellman'],
    ['Gradient de politique', '/ia', 'gradient'],
    ['Présentation des algorithmes', '/ia', 'choix-algo'],
    ['2. Soft Actor-Critic (SAC)', '/ia', 'sac'],
    ['Définition du SAC', '/ia', 'sac-def'],
    ['Objectif du SAC', '/ia', 'sac-objectif'],
    ['Principe de fonctionnement', '/ia', 'sac-fonctionnement'],
    ['3. Simulation et jumeau numérique', '/ia', 'jumeau'],
    ['Concept de jumeau numérique', '/ia', 'jumeau-concept'],
    ['Moteurs de simulation physique', '/ia', 'moteurs'],
    ['Choix de PyBullet', '/ia', 'choix-pybullet'],
    ['Bibliothèques d\'implémentation', '/ia', 'bibliotheques'],
    ['Choix de CleanRL', '/ia', 'choix-cleanrl'],
    ['4. Analyse des besoins', '/ia', 'besoins'],
    ['Besoins fonctionnels', '/ia', 'besoins-fonctionnels'],
    ['Besoins non fonctionnels', '/ia', 'besoins-non-fonctionnels'],
    ['5. Configuration de l\'environnement', '/ia', 'config-env'],
    ['Création de l\'espace de développement', '/ia', 'anaconda'],
    ['Installation des dépendances', '/ia', 'dependances'],
    ['Vérification de l\'installation', '/ia', 'verif-install'],
    ['6. Conception de NiryoEnv', '/ia', 'niryoenv'],
    ['Architecture générale', '/ia', 'architecture-env'],
    ['Modélisation du bras', '/ia', 'modelisation'],
    ['Espace d\'action', '/ia', 'espace-action'],
    ['Espace d\'observation', '/ia', 'espace-observation'],
    ['Fonction de récompense', '/ia', 'recompense'],
    ['Génération de la cible', '/ia', 'cible-aleatoire'],
    ['7. Apprentissage par renforcement (Entraînement)', '/ia', 'entrainement'],
    ['Architecture du script', '/ia', 'architecture-script'],
    ['Hyperparamètres', '/ia', 'hyperparametres'],
    ['Boucle d\'entraînement', '/ia', 'boucle'],
    ['Lancement de l\'entraînement', '/ia', 'lancement'],
    ['Résultats du premier cycle', '/ia', 'resultats'],
    ['8. Benchmark et tests', '/ia', 'benchmark'],
    ['Comparaison des versions', '/ia', 'versions-env'],
    ['Script d\'évaluation', '/ia', 'script-evaluation'],
    ['Résultats du benchmark', '/ia', 'resultats-benchmark'],
      ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length > 0) {
      const results = data.filter(([title]) => 
        title.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);
      setSuggestions(results);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      const [title, path, section] = suggestions[0]; //on peut l'enlever car comme c pas en strict, ca se déclare automatiquemant en bas, mais ca deviendra des variable globale je pense
      navigate(`${path}#${section}`);
      resetSearch();
    }
  };

  const handleClick = ([title, path, section]) => {
    navigate(`${path}#${section}`);
    resetSearch();
  };

  const resetSearch = () => {
    setIsOpen(false);
    setQuery('');
    inputRef.current?.blur();
  };

  return (
    <div className="position-relative ms-auto" style={{ width: '100%', maxWidth: '500px' }}>
      <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center gap-2 px-3 py-2 border rounded-pill bg-white shadow-sm">
          <i className="bi bi-search text-muted"></i>
          <input
            ref={inputRef}
            type="text"
            className="form-control border-0 shadow-none p-0 fs-6"
            placeholder="Rechercher..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.trim().length > 0 && setIsOpen(true)}
            autoComplete="off"
          />
          {/* 
          {query && (
            <button
              type="button"
              className="btn btn-link text-muted p-0 border-0"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
                inputRef.current?.focus();
              }}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          )}
          */}
        </div>
      </form>

      {isOpen && suggestions.length > 0 && (
        <div
          ref={inputRef}
          className="position-absolute top-100 start-0 mt-2 bg-white rounded-3 shadow-lg border"
          style={{ width: '100%', maxHeight: '300px', overflowY: 'auto', zIndex: 1050 }}
        >
          {suggestions.map(([title], i) => (
            <div
              key={i}
              className="px-4 py-2 hover-bg"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(suggestions[i])}
            >
              <span className="small">{title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;