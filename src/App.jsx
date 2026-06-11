import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Robot from './pages/Robot';  // ← AJOUTER CETTE LIGNE

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="robot" element={<Robot />} />  {/* ← AJOUTER CETTE LIGNE */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;