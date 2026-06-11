import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-4 px-0 px-md-3">
        <div className="row g-0 g-md-4 mx-0">
          <div className="col-md-12 ps-0 ps-md-2 pe-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}