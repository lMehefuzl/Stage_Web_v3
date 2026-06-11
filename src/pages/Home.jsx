import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const pages = [
  { path: '/robot', title: 'ROBOT NIRYO NED 2' },
  { path: '/capteurs', title: 'CAPTEURS ET INSTRUMENTATION' },
  { path: '/modelisation', title: 'MODÉLISATION GÉOMÉTRIQUE' },
  { path: '/environnements', title: 'ENVIRONNEMENTS DE PROGRAMMATION' },
  { path: '/logiciels', title: 'LOGICIELS DE PROGRAMMATION' },
  { path: '/communication', title: 'COMMUNICATION LOGICIELLE' },
  { path: '/installation', title: 'INSTALLATION DE NIRYOSTUDIO' },
  { path: '/niryostudio', title: 'NIRYO NED2 ET NIRYOSTUDIO' },
  { path: '/simulation', title: 'SIMULATION DE NIRYOSTUDIO' },
  { path: '/librairies', title: 'INSTALLATION DES LIBRAIRIES' },
  { path: '/matlab', title: 'PROGRAMMATION MATLAB' },
  { path: '/resume-ros', title: 'RÉSUMÉ ROS' },
  { path: '/programmation-ros', title: 'PROGRAMMATION ROS' },
  { path: '/lexique', title: 'LEXIQUE' },
  { path: '/liens', title: 'LIENS UTILES' },
  { path: '/annexes', title: 'ANNEXES' },
  { path: '/testing', title: 'Testing of all sorts' }
];

export default function Home() {
  return (
    <>
      {/* En-tête comme dans index.html */}
      <div className="bg-white border-bottom shadow-sm">
        <div className="container py-4 text-center">
          <h1 className="display-4 fw-bold text-primary mt-3">NIRYO NED 2</h1>
          <p className="lead text-secondary">Guide d'utilisation du robot Niryo Ned 2</p>
          <p className="text-muted small">
            <i className="bi bi-person"></i> Auteurs : BEVILACQUA Arthur et ERRARD Mathéo<br />
            <i className="bi bi-people"></i> Encadrants : M.Laurent Arcese et Stéphane Lecasse
          </p>
        </div>
      </div>

      {/* Grille des cartes */}
      <Container className="py-5">
        <Row className="g-4">
          {pages.map((page, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Link to={page.path} className="text-decoration-none">
                <Card className="h-100 border-primary border-2 rounded-4 shadow-sm card-hover">
                  <Card.Body className="text-center p-4">
                    <i className={`${page.icon} fs-1 text-primary`}></i>
                    <h5 className="card-title text-primary mt-3 fw-bold">{page.title}</h5>
                    <p className="card-text text-muted">{page.desc}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}