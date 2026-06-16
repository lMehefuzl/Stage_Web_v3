import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation(); //pour savoir on est ou
  const isHome = location.pathname === '/';

  // Mapping des titres
  const getTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'NIRYO NED 2';
    if (path === '/robot') return 'Robot Niryo Ned 2';
    if (path === '/Modelisation_matlab') return 'Modélisation MATLAB';
    if (path === '/environnements') return 'Environnements de programmation';
    if (path === '/communication') return 'Communication logicielle';
    if (path === '/installation') return 'Installation de NiryoStudio';
    if (path === '/niryostudio') return 'NiryoStudio';
    if (path === '/simulation') return 'Simulation';
    if (path === '/librairies') return 'Installation des librairies';
    if (path === '/matlab') return 'Programmation MATLAB';
    if (path === '/resume-ros') return 'Résumé ROS';
    if (path === '/programmation-ros') return 'Programmation ROS';
    if (path === '/lexique') return 'Lexique';
    if (path === '/liens') return 'Liens utiles';
    if (path === '/annexes') return 'Annexes';
    return 'NIRYO NED 2';
  };

  return (
    <div className="bg-white border-bottom shadow-sm mb-4">
      <div className="container-fluid py-3 px-4">
        {!isHome && (
          <Link to="/" className="btn btn-outline-primary btn-sm me-3">
            <i className="bi bi-arrow-left"></i> Accueil
          </Link>
        )}
        <span className="fs-5 fw-semibold text-primary">
          {getTitle()}
        </span>
      </div>
    </div>
  );
}