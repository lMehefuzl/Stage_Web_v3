import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode> //strictMode est la pour vérifier si tout marche bien donc ca repete le mm bail 2 fois (15+5=20, mias ici c 2020 car il affiche le documentwrite 2 fois)
    <App />
  //</React.StrictMode>
);