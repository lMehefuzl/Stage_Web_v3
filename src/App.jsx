import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Robot from './pages/Robot';
import Testing from './pages/testing';  // ← IMPORTANT
import Modelisation_matlab from './pages/Modelisation_matlab';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="robot" element={<Robot />} />
          <Route path="testing" element={<Testing />} />  {/* ← IMPORTANT */}
          <Route path="Modelisation_matlab" element={<Modelisation_matlab />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;