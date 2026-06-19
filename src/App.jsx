import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero'; 
import HomeCards from './components/HomeCards';

// Imports avec les noms complets et exacts de tes fichiers
import documentation_technique from './pages/documentation_technique';
import programmation from './pages/programmation';
import communication from './pages/communication';
import jumeau_numérique from './pages/jumeau_numérique';
import théorie from './pages/théorie';
import ressources from './pages/ressources';
import ia from './pages/ia';
//quiz testing phase
import Quiz from './components/Quiz';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'documentation_technique':
        return React.createElement(documentation_technique);
      case 'programmation':
        return React.createElement(programmation);
      case 'communication':
        return React.createElement(communication);
      case 'jumeau_numérique':
        return React.createElement(jumeau_numérique);
      case 'théorie':
        return React.createElement(théorie); 
      case 'ressources':
        return React.createElement(ressources);
      case 'ia':
        return React.createElement(ia);
      case 'home':
      default:
        return (
          <>
            <Hero />
            <HomeCards setPage={setCurrentPage} />
            <quiz />
          </>
        );
    }
  };

  return (
    <div className="bg-light min-h-screen">
      <Navbar setPage={setCurrentPage} currentPage={currentPage} />
      {/*  <div style={{ paddingTop: '0px' }}></div>  pour que des parties ne sont pas overlap par navbar car je vais utiliser sticky*/}
      {renderPage()}
    </div>
  );
};

export default App;