import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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

const ScrollToHash = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Si l'URL contient un hash (ex: #generalites)
    if (location.hash) {
      // On attend un peu que la page soit chargée

      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  
    }
  }, [location]);

  return null;
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);


  return (
    <BrowserRouter>
    <ScrollToHash />
      <div className="bg-light min-h-screen">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<><Hero /><HomeCards /></>} /> {/* acceuil */}

         
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Login setUser={setUser} />} />
          
          

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