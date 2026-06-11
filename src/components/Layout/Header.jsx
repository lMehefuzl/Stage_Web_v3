import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-white border-bottom shadow-sm mb-4">
      <div className="container-fluid py-3 px-4">
        <Link to="/" className="btn btn-outline-primary btn-sm">
          <i className="bi bi-arrow-left"></i> Accueil
        </Link>
        <span className="ms-3 fs-5 fw-semibold text-primary">
          NIRYO NED 2
        </span>
      </div>
    </div>
  );
}