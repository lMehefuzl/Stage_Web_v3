import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/hero';
import HomeCards from './components/HomeCards';

// Pages
import DocumentationTechnique from './pages/DocumentationTechnique';
import Programmation from './pages/Programmation';
import Communication from './pages/Communication';
import JumeauNumerique from './pages/JumeauNumerique';
import Theorie from './pages/Theorie';
import Ressources from './pages/Ressources';
import Ia from './pages/Ia';
import Registration from './components/Registration';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-light min-h-screen">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<><Hero /><HomeCards /></>} /> {/* acceuil */}

         
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Login/>} />
          

          <Route path="/documentation-technique" element={<DocumentationTechnique />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/jumeau-numerique" element={<JumeauNumerique />} />
          <Route path="/theorie" element={<Theorie />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/ia" element={<Ia />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;