import React from 'react'
import Quiz from '../components/Quiz'



const DocumentationTechnique = () => {
  return (
<div className="container-fluid px-0 px-md-3 mb-5">
  <div className="row g-0 g-md-4 mx-0">
    {/* side bar */}
    <div className="col-md-3 ps-0 pe-0 pe-md-2">
      <div className="bg-white rounded-3 shadow-sm p-3 me-0 me-md-2" style={{position: 'sticky', top: 87, maxHeight: 'calc(100vh - 40px)', overflowY: 'auto'}}>
        <h5 className="text-primary mb-3 pb-2 border-bottom">
          <i className="bi bi-list-ul" /> Sommaire
        </h5>
        <nav className="nav flex-column">
          {/* ============================================ */}
          {/* 1. DESCRIPTION DU ROBOT */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#description" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-info-circle text-primary me-2" />Description du robot
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseRobot" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseRobot">
              <a className="nav-link px-0 py-1 text-secondary small" href="#generalites">1. Généralités</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#connectiques">2. Connectiques</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#architecture">3. Architecture électrique</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#alimentation">4. Alimentation</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#modes">5. Mode opératoire</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 2. LES ACCESSOIRES */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#accessoires" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-tools text-primary me-2" />Les accessoires
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseAccessoires" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseAccessoires">
              <a className="nav-link px-0 py-1 text-secondary small" href="#grippers">1. Grippers</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#electroaimant">2. Électroaimant</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#pompe">3. Pompe à vide</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 3. LES BOUTONS */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#boutons" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-grid-3x3-gap-fill text-primary me-2" />Les boutons
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseBoutons" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseBoutons">
              <a className="nav-link px-0 py-1 text-secondary small" href="#bouton-wifi">1. Bouton Wi-Fi</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#bouton-sup">2. Bouton supérieur</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#panneau">3. Panneau de contrôle</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 4. SÉCURITÉ */}
          {/* ============================================ */}
          <a className="nav-link px-0 py-1 text-dark" href="#securite">
            <i className="bi bi-shield-lock-fill text-primary me-2" />Sécurité
          </a>
          
          {/* ============================================ */}
          {/* INDICATIONS ANNEAU LED */}
          {/* ============================================ */}
          <a className="nav-link px-0 py-1 text-dark" href="#anneau-led">
            <i className="bi bi-lightbulb-fill text-primary me-2" />Indications anneau LED
          </a>
          
          {/* ============================================ */}
          {/* MAINTENANCE ET MISES À JOUR */}
          {/* ============================================ */}
          <a className="nav-link px-0 py-1 text-dark" href="#maintenance">
            <i className="bi bi-gear-fill text-primary me-2" />Maintenance et mises à jour
          </a>
          
          {/* ============================================ */}
          {/* 7. CAPTEURS ET INSTRUMENTATION */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#capteurs" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-motherboard text-primary me-2" />Capteurs et instrumentation
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseCapteurs" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseCapteurs">
              <a className="nav-link px-0 py-1 text-secondary small" href="#raspberry">1. Raspberry Pi 4</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#servomoteur">2. Servomoteur XL330</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#camera">3. Caméra IMX322</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#capteur">4. Capteur IR E18 D80NK</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#convoyeur">5. Convoyeur v2</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#set-vision">6. Set Vision</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* FIGURES */}
          {/* ============================================ 
          <div className="border-top mt-3 pt-2" />
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <span style={{cursor: 'default'}}>
                <i className="bi bi-image text-primary me-2" />Figures
              </span>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseFigures" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseFigures">
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure1">Figure 1</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure2">Figure 2</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure3">Figure 3</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure4">Figure 4</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure5">Figure 5</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure6">Figure 6</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure7">Figure 7</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure8">Figure 8</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure9">Figure 9</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure10">Figure 10</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure12">Figure 12</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure13">Figure 13</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure14">Figure 14</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure15">Figure 15</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure16">Figure 16</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure17">Figure 17</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure18">Figure 18</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure19">Figure 19</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure20">Figure 20</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure21">Figure 21</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure22">Figure 22</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure23">Figure 23</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure24">Figure 24</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure25">Figure 25</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure26">Figure 26</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure27">Figure 27</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure30">Figure 30</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure31">Figure 31</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure32">Figure 32</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure33">Figure 33</a>
            </div>
          </div>
          */}
          {/* ============================================ */}
          {/* TABLEAUX */}
          {/* ============================================ 
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <span style={{cursor: 'default'}}>
                <i className="bi bi-table text-primary me-2" />Tableaux
              </span>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseTableaux" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseTableaux">
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau1">Tableau 1</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau2">Tableau 2</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau3">Tableau 3</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau4">Tableau 4</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau5">Tableau 5</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau6">Tableau 6</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau7">Tableau 7</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau8">Tableau 8</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau9">Tableau 9</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau10">Tableau 10</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau11">Tableau 11</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau12">Tableau 12</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau13">Tableau 13</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau14">Tableau 14</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau15">Tableau 15</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau16">Tableau 16</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau17">Tableau 17</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau18">Tableau 18</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau19">Tableau 19</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau20">Tableau 20</a>
            </div>
          </div>
          */}
        </nav>
      </div>
    </div>

    {/* contenu principal */}
    <div className="col-md-9 ps-0 ps-md-2 pe-0">
      {/* ============================================ */}
      {/* 1. DESCRIPTION DU ROBOT */}
      {/* ============================================ */}
      <div id="description" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-info-circle-fill" /> DESCRIPTION DU ROBOT</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div id="figure1" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 250}}>
              <img src="images/Figure1.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 1 : Image du robot Niryo Ned2</p>
          </div>
          <div className="col-md-6">
            <div id="figure2" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 250}}>
              <img src="images/Figure2.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 2 : Cotes du robot</p>
          </div>
        </div>
        <div id="generalites">
          <h3 className="text-dark fw-bold">1. Généralités</h3>
          <div id="tableau1" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Valeur</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Poids</td><td>7 kg</td></tr>
                <tr><td className="fw-bold">Charge utile</td><td>300 g</td></tr>
                <tr><td className="fw-bold">Portée maximale (mm)</td><td>440 mm</td></tr>
                <tr><td className="fw-bold">Nombre d'axes</td><td>6 axes</td></tr>
                <tr><td className="fw-bold">Amplitudes de rotation (rad)</td><td>-2.97 ≤ axe 1 ≤ 2.97<br />-2.09 ≤ axe 2 ≤ 0.61<br />-1.34 ≤ axe 3 ≤ 1.57<br />-2.09 ≤ axe 4 ≤ 2.09<br />-1.75 ≤ axe 5 ≤ 0.96<br />-2.53 ≤ axe 6 ≤ 2.53</td></tr>
                <tr><td className="fw-bold">Vitesse de rotation (rad/s)</td><td>Axe 1 ≤ 2.97<br />Axe 2 ≤ 2.97<br />Axe 3 ≤ 2.97<br />Axe 4 ≤ 2.97<br />Axe 5 ≤ 2.97<br />Axe 6 ≤ 2.97</td></tr>
                <tr><td className="fw-bold">Vitesse max TCP (mm/s)</td><td>468 mm/s</td></tr>
                <tr><td className="fw-bold">Répétabilité (mm)</td><td>+/- 0.5 mm</td></tr>
                <tr><td className="fw-bold">Dimension de la base</td><td>200x200 mm</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement (°C)</td><td>5 - 45°C</td></tr>
                <tr><td className="fw-bold">Interface Homme - Machine</td><td>3 boutons de contrôle, Anneau LED, Haut-parleurs, Microphone</td></tr>
                <tr><td className="fw-bold">Alimentation</td><td>Entrée : AC100-240V / 50-60 Hz / 2.5A<br />Sortie : DC 12V - 7A / 5V - 7A</td></tr>
                <tr><td className="fw-bold">Alimentation des entrées/sorties</td><td>5V</td></tr>
                <tr><td className="fw-bold">Entrées/Sorties arrière de la base</td><td>Entrées numériques x3, Sorties numériques x3, Entrées analogiques x2, Sorties analogiques x2</td></tr>
                <tr><td className="fw-bold">Entrées/Sorties panneau de contrôle</td><td>Entrées numériques x1, Sorties numériques x1</td></tr>
                <tr><td className="fw-bold">Interface robot</td><td>2x USB 2.0, 2x USB 3.0, 1x Ethernet Gigabit</td></tr>
                <tr><td className="fw-bold">Matériaux</td><td>Aluminium, ABS-PC (injection plastique)</td></tr>
                <tr><td className="fw-bold">Détection de collision</td><td>Accéléromètre et gyroscope dans le panneau de contrôle</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 1 : Tableau description du robot Niryo Ned2</p>
        </div>
        <div id="connectiques" className="mt-5">
          <h3 className="text-dark fw-bold">2. Connectiques</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div id="figure3" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 240}}>
                <img src="images/Figure3.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 3 : Caractéristiques du panneau arrière de la base</p>
            </div>
            <div className="col-md-6">
              <div id="figure4" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 240}}>
                <img src="images/Figure4.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 4 : Panneau arrière de la base</p>
            </div>
          </div>
          <h4 className="fw-bold mt-4">Entrées numériques :</h4>
          <p>Les caractéristiques électriques des entrées numériques sont indiquées ci-dessous.</p>
          <div id="tableau2" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Connecteur</th><th>Paramètre</th><th>Min</th><th>Max</th><th>Unité</th></tr></thead>
              <tbody>
                <tr className="table-secondary fw-bold"><td>Entrée numérique : type → NPN</td><td /><td /><td /><td /></tr>
                <tr><td className="fw-bold">[DI1 - DI2 - DI3]</td><td className="fw-bold">Tension</td><td>0</td><td>5</td><td>V</td></tr>
                <tr><td /><td className="fw-bold">Courant</td><td>0</td><td>5</td><td>mA</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 2 : Tableau récapitulatif des entrées numériques du robot Niryo Ned2</p>
          <p>L'illustration ci-dessous montre comment connecter un bouton à l'entrée numérique.</p>
          <div id="figure5" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure5.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 5 : Schéma de connexion d'un bouton sur une entrée numérique</p>
          <h4 className="fw-bold mt-4">Sorties numériques :</h4>
          <p>Les caractéristiques électriques des sorties numériques sont indiquées ci-dessous.</p>
          <div id="tableau3" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Connecteur</th><th>Paramètre</th><th>Min</th><th>Max</th><th>Unité</th></tr></thead>
              <tbody>
                <tr className="table-secondary fw-bold"><td>Sortie numérique : type → PNP</td><td /><td /><td /><td /></tr>
                <tr><td className="fw-bold">[DO1 - DO2 - DO3]</td><td className="fw-bold">Tension</td><td>0</td><td>5</td><td>V</td></tr>
                <tr><td /><td className="fw-bold">Courant</td><td>0</td><td>250</td><td>mA</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 3 : Tableau récapitulatif des sorties numériques du robot Niryo Ned2</p>
          <p>L'illustration ci-dessous montre comment connecter une charge à contrôler à une sortie numérique.</p>
          <div id="figure6" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure6.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 6 : Schéma de connexion d'une charge sur une sortie numérique</p>
          <h4 className="fw-bold mt-4">Entrées analogiques :</h4>
          <p>Les entrées analogiques peuvent être utilisées pour mesurer la tension (0-5V) d'un équipement. Les caractéristiques électriques sont indiquées ci-dessous.</p>
          <div id="tableau4" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Connecteur</th><th>Paramètre</th><th>Min</th><th>Max</th><th>Unité</th></tr></thead>
              <tbody>
                <tr className="table-secondary fw-bold"><td>Entrée analogique</td><td /><td /><td /><td /></tr>
                <tr><td className="fw-bold">[AI1 - AI2]</td><td className="fw-bold">Tension</td><td>0</td><td>5</td><td>V</td></tr>
                <tr><td /><td className="fw-bold">Courant</td><td>0</td><td>20</td><td>mA</td></tr>
                <tr><td /><td className="fw-bold">Résolution</td><td>-</td><td>12</td><td>bits</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 4 : Tableau récapitulatif des entrées analogiques du robot Niryo Ned2</p>
          <p>L'illustration ci-dessous montre comment connecter un potentiomètre pour lire des tensions entre 0 et 5V.</p>
          <div id="figure7" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure7.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 7 : Schéma de connexion d'un potentiomètre sur une entrée analogique</p>
          <h4 className="fw-bold mt-4">Sorties analogiques :</h4>
          <p>Les sorties analogiques peuvent être utilisées pour paramétrer la tension (0-5V) d'un équipement.<br /> Les caractéristiques électriques sont indiquées ci-dessous.</p>
          <div id="tableau5" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Connecteur</th><th>Paramètre</th><th>Min</th><th>Max</th><th>Unité</th></tr></thead>
              <tbody>
                <tr className="table-secondary fw-bold"><td>Sortie analogique</td><td /><td /><td /><td /></tr>
                <tr><td className="fw-bold">[AO1 - AO2]</td><td className="fw-bold">Tension</td><td>0</td><td>5</td><td>V</td></tr>
                <tr><td /><td className="fw-bold">Courant</td><td>0</td><td>30</td><td>mA</td></tr>
                <tr><td /><td className="fw-bold">Résolution</td><td>-</td><td>12</td><td>bits</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 5 : Tableau récapitulatif des sorties analogiques du robot Niryo Ned2</p>
          <p>L'illustration ci-dessous montre comment connecter une charge à contrôler depuis une sortie analogique.</p>
          <div id="figure8" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure8.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 8 : Schéma de connexion d'une charge à contrôler sur une sortie analogique</p>
        </div>
        <div id="architecture" className="mt-5">
          <h3 className="text-dark fw-bold">3. Architecture électrique du cobot Ned2</h3>
          <div id="figure9" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure9.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 9 : Architecture électrique du robot Ned2</p>
        </div>
        <div id="alimentation" className="mt-5">
          <h3 className="text-dark fw-bold">4. Alimentation du robot et de ses composants</h3>
          <p>L'alimentation du robot se fait via la connectique numéro 15 visible sur la figure 4. Le schéma électrique de cette connectique est le suivant :</p>
          <div id="figure10" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure10.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 10 : Schéma d'alimentation du robot</p>
          <p>Et ses paramètres d'entrées sont :</p>
          <div id="tableau6" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Paramètres</th><th>Valeur</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Fréquence</td><td>50/60 Hz</td></tr>
                <tr><td className="fw-bold">Entrée</td><td>AC 100-240 V, 2.5 A</td></tr>
                <tr><td className="fw-bold">Sortie</td><td>12 V - 7 A; 5 V - 7 A</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Figure 11 : Paramètres d'alimentation</p>
          <p>Le robot s'allume en appuyant sur le bouton d'alimentation sur le panneau arrière. En démarrant il affiche une lumière blanche et une fois démarré, il affiche une lumière bleue. Un appui sur le même bouton permet de l'éteindre. <strong>ATTENTION : le robot doit être dans sa position initiale lorsqu'on l'allume ou l'éteint.</strong></p>
          <p><strong>Alimentation des moteurs :</strong> 12V, 11.4V, 5V</p>
          <p><strong>Les grippers de Ned2 sont alimentés par 5V.</strong> (à installer robot hors tension)</p>
        </div>
        <div id="modes" className="mt-5">
          <h3 className="text-dark fw-bold">5. Mode opératoire du robot</h3>
          <p>Le robot dispose de 3 modes opératoires :</p>
          <ul>
            <li><strong>Mode Manuel – Calibration du robot :</strong> le robot définit automatiquement les positions Zéro de chaque axe</li>
            <li><strong>Mode Collaboratif – Programmation :</strong> la programmation, l'édition, les chargements et l'exécution des programmes</li>
            <li><strong>Mode Manuel – Free Motion :</strong> les axes du robot peuvent être déplacés à la main.</li>
          </ul>
          <p>Le mode actuel peut être déterminé via la couleur de l'anneau lumineux.</p>
          <p><strong>Mode Manuel - Calibration du robot :</strong> la phase de calibration du robot est entièrement automatique et obligatoire afin de pouvoir contrôler le robot. Elle permet de faire correspondre la position de chaque moteur avec son contrôleur.</p>
          <p><strong>Mode Collaboratif – Programmation :</strong> après calibrage, le robot passe dans ce mode automatiquement. Il permet de programmer, éditer, charger et exécuter les programmes du robot.</p>
          <p><strong>Mode manuel – FreeMotion :</strong> ce mode permet de déplacer les articulations du robot à la main. Ce mode est activé soit par un appui continu sur le bouton correspondant sur le robot ou sur l'interface de programmation NiryoStudio. Ce mode sera présenté ultérieurement.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 2. LES ACCESSOIRES */}
      {/* ============================================ */}
      <div id="accessoires" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-tools" /> LES ACCESSOIRES</h2>
        <p>Ned2 est compatible avec 5 outils différents :</p>
        <ul>
          <li>3 types grippers (Custom, Large, Adaptatif)</li>
          <li>Électroaimant</li>
          <li>Pompe à vide</li>
        </ul>
        <div id="grippers" className="mb-4">
          <h3 className="text-dark fw-bold">1. Grippers</h3>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <div id="figure12" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 180}}>
                <img src="images/Figure12.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 12 : Pince Custom</p>
            </div>
            <div className="col-md-6">
              <div id="figure13" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 180}}>
                <img src="images/Figure13.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 13 : Cotes de la pince Custom</p>
            </div>
          </div>
          <div id="tableau7" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Valeur</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Ouverture maximale</td><td>43 mm</td></tr>
                <tr><td className="fw-bold">Distance de l'objet attrapé par rapport à la base de l'outil</td><td>85 mm</td></tr>
                <tr><td className="fw-bold">Moteur</td><td>Servomoteur XL330</td></tr>
                <tr><td className="fw-bold">Masse</td><td>87 g</td></tr>
                <tr><td className="fw-bold">Source d'alimentation</td><td>5 V</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement</td><td>5 – 45°C</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 6 : Description de la Pince Custom</p>
          <div id="figure14" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 180}}>
            <img src="images/Figure14.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 14 : Illustration et cotes de la pince large</p>
          <div id="tableau8" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Valeur</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Ouverture maximale</td><td>79.20 mm</td></tr>
                <tr><td className="fw-bold">Distance de l'objet attrapé par rapport à la base de l'outil</td><td>109.35 mm</td></tr>
                <tr><td className="fw-bold">Moteur</td><td>Servomoteur XL330</td></tr>
                <tr><td className="fw-bold">Masse</td><td>72.5 g</td></tr>
                <tr><td className="fw-bold">Source d'alimentation</td><td>5 V</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement</td><td>5 – 45°C</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 7 : Description de la Pince Large</p>
          <div id="figure15" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 180}}>
            <img src="images/Figure15.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 15 : Illustration et cotes de la pince adaptatif</p>
          <div id="tableau9" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Valeur</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Ouverture maximale</td><td>97.49 mm</td></tr>
                <tr><td className="fw-bold">Distance de l'objet attrapé par rapport à la base de l'outil</td><td>113.79 mm</td></tr>
                <tr><td className="fw-bold">Moteur</td><td>Servomoteur XL330</td></tr>
                <tr><td className="fw-bold">Masse</td><td>83 g</td></tr>
                <tr><td className="fw-bold">Source d'alimentation</td><td>5 V</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement</td><td>5 – 45°C</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 8 : Description de la pince adaptatif</p>
          <p>Les grippers sont connectés de la façon suivante sur le panneau de contrôle (cf. figure 22) :</p>
          <div id="figure16" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure16.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 16 : Schéma de câblage des pinces</p>
        </div>
        <div id="electroaimant" className="mb-4">
          <h3 className="text-dark fw-bold">2. Électroaimant</h3>
          <div id="figure17" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 180}}>
            <img src="images/Figure17.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 17 : Illustration et cotes de l'électroaimant</p>
          <div id="tableau10" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Valeur</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Ouverture maximale</td><td>20 mm</td></tr>
                <tr><td className="fw-bold">Surface de prélèvement</td><td>20 mm</td></tr>
                <tr><td className="fw-bold">Distance de l'objet attrapé par rapport à la base de l'outil</td><td>27 mm</td></tr>
                <tr><td className="fw-bold">Interface de contrôle</td><td>Sortie digitale</td></tr>
                <tr><td className="fw-bold">Masse</td><td>44.5 g</td></tr>
                <tr><td className="fw-bold">Source d'alimentation</td><td>5 V</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement</td><td>5 – 45°C</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 9 : Description de l'électroaimant</p>
          <p>L'électroaimant est connecté de la façon suivante sur le panneau de contrôle :</p>
          <div id="figure18" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 180}}>
            <img src="images/Figure18.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 18 : Connectique de l'électroaimant</p>
        </div>
        <div id="pompe">
          <h3 className="text-dark fw-bold">3. Pompe à vide</h3>
          <div id="figure19" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 180}}>
            <img src="images/Figure19.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 19 : Illustration et cotes de la pompe à vide</p>
          <div id="tableau11" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Moteur</td><td>Servomoteur XL330</td></tr>
                <tr><td className="fw-bold">Masse</td><td>18 g</td></tr>
                <tr><td className="fw-bold">Masse totale</td><td>183 g</td></tr>
                <tr><td className="fw-bold">Charge utile</td><td>300 g</td></tr>
                <tr><td className="fw-bold">Source d'alimentation</td><td>5 V</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement</td><td>5 – 45°C</td></tr>
                <tr><td className="fw-bold">Diamètre de la ventouse</td><td>20 mm</td></tr>
                <tr><td className="fw-bold">Distance de l'objet attrapé par rapport à la base de l'outil</td><td>47.5 mm</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 10 : Description de la pompe à vide</p>
          <div id="figure20" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 180}}>
            <img src="images/Figure20.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 20 : Câblage de la pompe à vide</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 3. LES BOUTONS */}
      {/* ============================================ */}
      <div id="boutons" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-grid-3x3-gap-fill" /> LES BOUTONS</h2>
        {/* alternative de la phrase le robot possède ...
              <strong>Le robot dispose de 6 boutons :</strong>
              <ul>
                  <li><strong>2 à l'arrière de la base :</strong> bouton d'alimentation (marche/arrêt) et bouton Wi-Fi.</li>
                  <li><strong>1 sur le dessus de la base :</strong> bouton multitâche.</li>
                  <li><strong>3 sur le panneau de contrôle</strong> (situé sur le bras).</li>
              </ul>
              */}
        <p>Le robot possède sur lui 6 boutons. Le bouton d'allumage et un bouton wifi, tous les deux présents sur le derrière de la base (Figure 21), un bouton multitâche sur le haut de la base, et les trois boutons du panneau de contrôle présents sur la Figure 23.</p>
        <div id="bouton-wifi" className="mb-4">
          <h3 className="text-dark fw-bold">1. Bouton Wi-Fi</h3>
          <div id="figure21" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure21.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 21 : Localisation du bouton wifi sur le robot</p>
          <div id="tableau12" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Fonction</th><th>Type d'action</th><th>Condition</th><th>État après action</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Activer le hotspot</td><td>Appui court</td><td>Le robot est en mode Wi-Fi</td><td>Le robot est en mode hotspot</td></tr>
                <tr><td className="fw-bold">Activer le Wi-Fi</td><td>Appui court</td><td>Le Wi-Fi n'est pas activé ou le robot est mode hotspot</td><td>Le robot est en mode Wi-Fi</td></tr>
                <tr><td className="fw-bold">Désactiver le hotspot et le Wi-Fi</td><td>Appui long</td><td>Le mode Wi-Fi ou hotspot est activé</td><td>Le Wi-Fi et hotspot sont désactivés</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 11 : Tableau répertoriant l'usage du bouton "wifi"</p>
        </div>
        <div id="bouton-sup" className="mb-4">
          <h3 className="text-dark fw-bold">2. Bouton supérieur</h3>
          <div id="tableau13" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Délai de pression</th><th>Fonction</th></tr></thead>
              <tbody>
                <tr className="table-secondary fw-bold"><td>Un programme est en cours d'exécution</td><td /></tr>
                <tr><td className="ps-4">1 appui court (0.1s - 2.0s)</td><td>Erreur dans le programme</td></tr>
                <tr><td className="ps-4">1 appui long (&gt;2s)</td><td>Erreur dans le programme</td></tr>
                <tr className="table-secondary fw-bold"><td>Un programme est en pause</td><td /></tr>
                <tr><td className="ps-4">1 appui court (0.1s - 0.2s)</td><td>Reprend le programme</td></tr>
                <tr><td className="ps-4">1 appui long (&gt;2s)</td><td>Erreur dans le programme</td></tr>
                <tr className="table-secondary fw-bold"><td>Un programme est défini en lancement automatique</td><td /></tr>
                <tr><td className="ps-4">1 appui court (0.1s - 2.0s)</td><td>Démarre un programme enregistré</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 12 : Tableau répertoriant les actions du bouton supérieur de la base du robot</p>
        </div>
        <div id="panneau">
          <h3 className="text-dark fw-bold">3. Panneau de contrôle</h3>
          <div id="figure23" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure23.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 23 : Panneau de contrôle</p>
          <div id="tableau14" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Bouton</th><th>Fonction</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">FreeMotion</td><td>Un appui continu permet de désactiver les couples dans les moteurs et effectuer l'opération FreeMotion</td></tr>
                <tr><td className="fw-bold">Save</td><td>Un appui sur ce bouton permet d'enregistrer la position du robot sur NiryoStudio</td></tr>
                <tr><td className="fw-bold">Custom</td><td>Ce bouton est programmable et permet d'enregistrer la position du robot sur NiryoStudio</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 13 : Tableau explicatif du panneau de contrôle</p>
          <p>L'utilisation de ces boutons seront présentés de manières plus approfondies ultérieurement.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 4. SÉCURITÉ */}
      {/* ============================================ */}
      <div id="securite" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-shield-lock-fill" /> SÉCURITÉ</h2>
        <div className="alert alert-warning py-2">
          <i className="bi bi-exclamation-triangle-fill" /><a href="https://docs.niryo.com/robots/ned2/safety-instructions/" target="_blank"> https://docs.niryo.com/robots/ned2/safety-instructions/</a>
        </div>
        <p><strong>Un bouton d'Arrêt d'Urgence (AU)</strong> est fourni avec le robot. Il doit toujours être branché au robot.</p>
        <div id="figure24" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
          <img src="images/Figure24.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
        </div>
        <p className="text-center small mt-1">Figure 24 : Bouton d'Arrêt d'Urgence (AU)</p>
        <strong>Mise en tension :</strong>
        <ul>
          <li>Brancher le robot sur secteur et connecter le bouton d'Arrêt d'Urgence (AU).</li>
          <li>Vérifier que le bouton d'AU est désactivé.</li>
          <li>Avant d'allumer, s'assurer que le robot est correctement fixé et qu'aucun obstacle ne se trouve à proximité (la calibration automatique va le faire bouger).</li>
          <div id="figure25" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure25.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 25 : Avertissement d'installation</p>
          <div id="figure26" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 450}}>
            <img src="images/Figure26.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 26 : Avertissement d'installation, de mise en marche/arrêt</p>
          <div id="figure27" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure27.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 27 : Mise en garde</p>
          <h5>Risques liés à la tension du robot :</h5>
          <p>Un danger de haute tension est associé au robot dans :</p>
          <ul>
            <li>L'alimentation des moteurs (12V, 11.4V, 5V)</li>
            <li>Les grippers de Ned2 sont alimentés par 5V. Veillez à installer les grippers lorsque le robot est hors-tension.</li>
          </ul>
          <h5>Actions de sécurité :</h5>
          <ul>
            <li><strong>Arrêt manuel du bras :</strong>Le robot peut être arrêté manuellement par son faible poids, sa force et sa puissance de transmission limitées. Mais il est recommandé d'utiliser les fonctions d'arrêt normales (par le logiciel ou le bouton en haut de la base).</li>
          </ul>
        </ul></div>
      {/* ============================================ */}
      {/* INDICATIONS DE L'ANNEAU LED */}
      {/* ============================================ */}
      <div id="anneau-led" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-lightbulb-fill" /> INDICATIONS DE L'ANNEAU LED DE LA BASE</h2>
        <h5>Lexique des motifs lumineux :</h5>
        <ul>
          <li><strong>None :</strong> les LED sont éteintes</li>
          <li><strong>Breath :</strong> l'intensité lumineuse augmente et diminue périodiquement, rappelant une respiration</li>
          <li><strong>Snake :</strong> le chenillard fait le tour des LED à vitesse modérée. Plusieurs LED se suivent</li>
          <li><strong>Chase :</strong> une LED sur trois est allumée. Toutes se décalent une LED après l'autre</li>
          <li><strong>Solide :</strong> l'ensemble de l'anneau LED est réglé sur la même couleur à la fois</li>
          <li><strong>Clignotant :</strong> Clignote une couleur selon une fréquence</li>
        </ul>
        <div id="tableau15" className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-primary">
              <tr><th>Couleur</th><th>Condition</th><th>Mode opératoire</th><th>Description</th><th>Action / Remarque</th></tr>
            </thead>
            <tbody>
              <tr><td className="fw-bold">None</td><td>Condition normale</td><td>-</td><td>Robot éteint</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Blanc Breath</td><td>Condition normale</td><td>-</td><td>Le robot démarre</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Blanc vers le bleu Breath</td><td>Condition normale</td><td>-</td><td>Démarrage du robot</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Bleu lent Chase</td><td>Condition normale</td><td>Mode manuel - Calibration</td><td>Calibration requise</td><td>Appuyez sur le bouton Custom, ou lancez un calibrage</td></tr>
              <tr><td className="fw-bold">Bleu Snake</td><td>Condition normale</td><td>Mode manuel - Calibration</td><td>Calibration en cours</td><td>N/A</td></tr>
              <tr><td className="fw-bold">3 clignotements jaune</td><td>Condition normale</td><td>Mode manuel - Calibration</td><td>Avertissement de calibration</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Orange Solide</td><td>Attention</td><td>Mode manuel</td><td>Un ou plusieurs axes du robot sont hors des limites de déplacement</td><td>Remettre les axes dans les limites et lancer la calibration</td></tr>
              <tr><td className="fw-bold">1 Breath blanc de 2s puis 6 clignotements en blanc</td><td>Condition normale</td><td>Mode manuel</td><td>Arrêt en cours</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Rouge Clignotant</td><td>Urgence</td><td>Mode manuel</td><td>Erreur sur les moteurs</td><td>Vérifiez la température du Raspberry. Contacter le SAV si le problème persiste</td></tr>
              <tr><td className="fw-bold">Blanc Solide</td><td>Condition normale</td><td>-</td><td>Mise à jour en cours</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Bleu Breath</td><td>Condition normale</td><td>Mode manuel - FreeMotion</td><td>FreeMotion activé</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Vert Breath</td><td>Condition normale</td><td>Mode manuel</td><td>FreeMotion désactivé</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Vert Solide</td><td>Condition normale</td><td>Mode manuel - Programmation</td><td>Programme en cours d'exécution</td><td>N/A</td></tr>
              <tr><td className="fw-bold">Vert Chase</td><td>Condition normale</td><td>Mode manuel - Programmation</td><td>Programme mis en pause</td><td>Un appui court sur le bouton supérieur pour reprendre, un appui long pour annuler</td></tr>
              <tr><td className="fw-bold">Orange Chase</td><td>Attention</td><td>Mode manuel - Programmation</td><td>Erreur dans le programme</td><td>Vérifiez les logs et lancer la nouvelle action pour réinitialiser</td></tr>
              <tr><td className="fw-bold">Rouge Solide</td><td>Urgence</td><td>-</td><td>Erreur fatale</td><td>Vérifiez les logs et redémarrer le robot</td></tr>
              <tr><td className="fw-bold">Orange Clignotant</td><td>Attention</td><td>-</td><td>Une collision est détectée</td><td>Effectuer une nouvelle action pour enlever l'avertissement</td></tr>
              <tr><td className="fw-bold">Violet Clignotant</td><td>Condition normale</td><td>Mode manuel</td><td>Connexion à NiryoStudio</td><td>N/A</td></tr>
              <tr><td className="fw-bold">1 clignotement blanc</td><td>Condition normale</td><td>Mode manuel - Programmation</td><td>Sauvegarde d'une position</td><td>N/A</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-center small mt-1">Tableau 14 : Tableau répertoriant les différents états de l'anneau LED ainsi que leurs significations.</p>
      </div>
      {/* ============================================ */}
      {/* MAINTENANCE ET MISES À JOUR */}
      {/* ============================================ */}
      <div id="maintenance" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-gear-fill" /> MAINTENANCE ET MISES À JOUR</h2>
        <div id="mise-a-jour" className="mb-4">
          <h3 className="text-dark fw-bold">Mise à jour</h3>
          <p>La version logicielle du robot et les versions Firmware des cartes électroniques peuvent être mises à jour en quelques étapes seulement à l'aide de NiryoStudio.</p>
          <div id="figure28" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure28.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Avertissement de mise à jour" />
          </div>
          <p className="text-center small mt-1">Figure 28 : Avertissement de mise à jour</p>
        </div>
        <div id="support">
          <h3 className="text-dark fw-bold">Maintenance et support</h3>
          <p>Une équipe support dédiée assure la maintenance et la résolution des problèmes techniques, avec une réponse sous 48h. 
            Toute intervention doit respecter les consignes de sécurité (partie 4 ou notice d'utilisation) et les règles de l'équipe support. 
            Pour toute question, contactez <a href="mailto:support@niryo.com">support@niryo.com</a> pour plus d'informations.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 7. CAPTEURS ET INSTRUMENTATION */}
      {/* ============================================ */}
      <div id="capteurs" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-motherboard-fill" /> CAPTEURS ET INSTRUMENTATION</h2>
        <p>Le Niryo Ned2 intègre un Raspberry Pi 4 et peut être équipé de capteurs, notamment le Set Vision et un convoyeur.</p>
        <strong>Le Set Vision se compose de :</strong>
        <ul>
          <li>Une caméra IMX322</li>
          <li>Un Workspace conçu pour être repositionnable</li>
          <li>6 objets (3 ronds, 3 carrés) de couleurs variées (les carrés servant de conteneurs pour les ronds)</li>
          <li>Une pointe de calibration</li>
        </ul>
        <p>Ce set confère à Ned2 la possibilité de détecter des objets et de sélectionner ceux avec lesquels il veut interagir. Celui-ci permet d'étudier des sujets comme le traitement d'image, le Machine Learning ou encore l'intelligence artificielle.</p>
        <div id="raspberry" className="mt-5">
          <h3 className="text-dark fw-bold">1. Raspberry Pi 4</h3>
          <p>Le Raspberry Pi 4 (un micro-ordinateur), intégré dans la base du robot, exécute ROS Noetic et les logiciels Niryo.
            Il reçoit les commandes (Python, Modbus, NiryoStudio, etc.) et pilote les moteurs et capteurs.</p>
          <div id="tableau16" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Donnée</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Processeur</td><td>Broadcom BCM 2711, quad-core ARM Cortex-A72 (ARM v8) SoC 64 bits - 1.5GHz</td></tr>
                <tr><td className="fw-bold">Mémoire RAM</td><td>4 Go</td></tr>
                <tr><td className="fw-bold">Connectique</td><td>2.4GHz et 5GHz IEEE, 2 ports USB 3.0, 2 ports USB 2.0, Port Ethernet (Gigabit), Wifi, Bluetooth 5.0, BLE</td></tr>
                <tr><td className="fw-bold">Vidéo &amp; Son</td><td>2 ports micro-HDMI (jusqu'à 4K pris en charge), Port d'affichage MIPI DSI 2 voies, Port d'appareil photo MIPI CSI 2 voies, Port audio stéréo 4 pôles et port vidéo composite</td></tr>
                <tr><td className="fw-bold">GPIO</td><td>Embase GPIO 40 broches standard (branchement des capteurs, moteurs, etc.)</td></tr>
                <tr><td className="fw-bold">Stockage</td><td>Carte microSD (pour le stockage et le chargement du système d'exploitation)</td></tr>
                <tr><td className="fw-bold">Alimentation</td><td>5V (3A minimum)</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement</td><td>0 – 50°C</td></tr>
                <tr><td className="fw-bold">Logiciel</td><td>Généralement avec Linux (Ubuntu, Raspberry Pi OS), Ubuntu 20.04 pour ROS avec le Niryo Ned2</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 15 : Tableau descriptif de la carte Raspberry Pi 4 du robot</p>
          <div id="figure30" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 400}}>
            <img src="images/Figure30.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 30 : Schéma fonctionnel simplifié montrant le rôle du Raspberry Pi 4 dans le robot Ned2</p>
        </div>
        <div id="servomoteur" className="mt-5">
          <h3 className="text-dark fw-bold">2. Servomoteur XL330</h3>
          <div id="tableau17" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Donnée</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">MCU</td><td>ARM CORTEX-M0+ (64MHz, 32 bits)</td></tr>
                <tr><td className="fw-bold">Capteur de position</td><td>Encodeur absolu sans contact (12bits, 360°) Fabricant (ams)</td></tr>
                <tr><td className="fw-bold">Taux de Baud</td><td>9600 bps ~ 4 Mbps</td></tr>
                <tr><td className="fw-bold">Algorithme de contrôle</td><td>Contrôle PID</td></tr>
                <tr><td className="fw-bold">Résolution</td><td>4096 impulsion/rev (pas/tour)</td></tr>
                <tr><td className="fw-bold">Poids</td><td>18g</td></tr>
                <tr><td className="fw-bold">Rapport d'engrenage</td><td>288.4 :1</td></tr>
                <tr><td className="fw-bold">Couple de décrochage</td><td>0.42 N.m (à 3.7V, 1.11A, 0.378 Nm/A)<br />0.52 N.m (à 5.0V, 1.47A, 0.354 Nm/A)<br />0.60 N.m (à 6.0V, 1.74A, 0.345 Nm/A)</td></tr>
                <tr><td className="fw-bold">Pas de vitesse de chargement</td><td>76 tr/min (à 3,7V)<br />103 tr/min (à 5,0V)<br />123 tr/min (à 6,0V)</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement</td><td>-5°C ~ +70°C</td></tr>
                <tr><td className="fw-bold">Tension d'entrée</td><td>3.7 - 6.0V (Recommandé : 5.0V)</td></tr>
                <tr><td className="fw-bold">Courant de veille</td><td>17 mA</td></tr>
                <tr><td className="fw-bold">Mode de fonctionnement</td><td>Mode de contrôle actuel<br />Mode de contrôle de la vitesse<br />Mode de contrôle de position (0 ~ 360 [°])<br />Mode de contrôle de position étendu (multi-tours)<br />Mode de contrôle de position basé sur le courant<br />Mode de contrôle PWM (mode de contrôle de la tension)</td></tr>
                <tr><td className="fw-bold">Connexion physique</td><td>Bus multidrop TTL (logique 3.3V, compatible 5V),<br />Communication série asynchrone half-duplex TTL (8 bits, 1 arrêt, pas de parité)</td></tr>
                <tr><td className="fw-bold">Technologie</td><td>Communication TTL half-duplex (UART) via protocole Dynamixel 2.0</td></tr>
                <tr><td className="fw-bold">Précision et incertitude</td><td>Précision de position: ±0.1° à ±0.2°, Incertitude liée au jeu mécanique et au bruit de l'encodeur</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 16 : Description du servomoteur XL330</p>
          <p>En pilotage en couple ou vitesse, l'incertitude est plus élevée (ça dépend du frottement, de la charge, etc.).</p>
          <h5 className="mt-3">Principe :</h5>
          <p>Moteur à courant continu + réducteur + encodeur de position (capteur de position). Une boucle de régulation interne (PID) ajuste automatiquement la position, la vitesse ou le couple en fonction des consignes. Il renvoie directement des données de position, vitesse courant, température, tension à l'ordinateur.</p>
        </div>
        <div id="camera" className="mt-5">
          <h3 className="text-dark fw-bold">3. Caméra IMX322</h3>
          <div id="tableau18" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Donnée</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Taille des pixels</td><td>2.8 µm</td></tr>
                <tr><td className="fw-bold">Taille de l'objectif</td><td>2.1 mm</td></tr>
                <tr><td className="fw-bold">Zone d'image</td><td>≈ 2.24Mpixels (2000 horizontal x 1121 vertical)</td></tr>
                <tr><td className="fw-bold">Résolution maximale</td><td>1080p (1920x1080)</td></tr>
                <tr><td className="fw-bold">Résolution et fréquence d'image disponible</td><td>Compressé et format : 320x240@30fps / 352x288@30fps / 640x360@30fps / 640x480@30fps<br />Format seulement : 800x600@15fps<br />Compressé seulement : 800x600@30fps / 1280x720@30fps / 1920x1080@30fps</td></tr>
                <tr><td className="fw-bold">Type d'obturateur</td><td>Obturateur électronique / Exposition par trame</td></tr>
                <tr><td className="fw-bold">Paramètre ajustable</td><td>Luminosité, contraste, saturation, teinte, balance des blancs, exposition, gain, gamma, netteté, contraste du rétroéclairage</td></tr>
                <tr><td className="fw-bold">Format brut</td><td>YUV</td></tr>
                <tr><td className="fw-bold">Sensibilité</td><td>5.0V / lux-seconde</td></tr>
                <tr><td className="fw-bold">Éclairage minimale</td><td>0.01 lux</td></tr>
                <tr><td className="fw-bold">Température de fonctionnement</td><td>-20 ~ 85 °C</td></tr>
                <tr><td className="fw-bold">Formats compressés</td><td>H264 &amp; MJPEG</td></tr>
                <tr><td className="fw-bold">Plage dynamique</td><td>86 dB</td></tr>
                <tr><td className="fw-bold">Rapport Signal/Bruit</td><td>42 dB</td></tr>
                <tr><td className="fw-bold">Configuration requise pour les systèmes d'exploitation</td><td>Windows 7 ou supérieur<br />Linux 2 ou supérieur<br />Android 4.0 ou supérieur</td></tr>
                <tr><td className="fw-bold">Méthodes de contrôle</td><td>NiryoStudio, API Python, TCP/IP</td></tr>
                <tr><td className="fw-bold">Type de connexion</td><td>USB 2.0 High Speed - Plug &amp; Play</td></tr>
                <tr><td className="fw-bold">Capteur d'image</td><td>CMOS rétroéclairé</td></tr>
                <tr><td className="fw-bold">Limites</td><td>Bruit de lecture, Rolling shutter (distorsion si objet rapide)</td></tr>
                <tr><td className="fw-bold">Données envoyées au PC</td><td>Envoie un flux numérique (USB ou Ethernet selon module) et le logiciel (ex: NiryoStudio, ou ROS, ...) reçoit une image matricielle</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 17 : Description de la caméra IMX322 implémenter sur le robot</p>
          <p><strong>Plage dynamique (DR)</strong> : Elle mesure l'écart entre les zones les plus sombres et les plus brillantes d'une image. 
            Calculée en décibels <strong>DR(dB) = 20 · log₁₀(Vsat / Vnoise)</strong>, elle peut aussi s'exprimer en "stops". Avec 86 dB (soit 14,3 stops), 
            la caméra dépasse largement les capteurs industriels standards (environ 80 dB), ce qui est amplement suffisant.</p>
          <p><a href="https://www.baslerweb.com/fr-fr/learning/yuv-color-coding/">Format brut YUV</a>: Ce codage couleur sépare la luminosité (Y) des informations de couleur (U et V), ce qui permet de réduire la quantité de données à traiter.</p>
        </div>
        <div id="capteur" className="mt-5">
          <h3 className="text-dark fw-bold">4. Capteur IR E18 D80NK</h3>
          <div id="tableau19" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Donnée</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Tension d'alimentation</td><td>+5V DC</td></tr>
                <tr><td className="fw-bold">Courant de consommation</td><td>Min : 25mA, Max : 100mA</td></tr>
                <tr><td className="fw-bold">Détection d'objets</td><td>Transparent ou opaque</td></tr>
                <tr><td className="fw-bold">Plage de détection</td><td>3cm à 80cm (dépend du type de la surface de l'objet)</td></tr>
                <tr><td className="fw-bold">Sortie</td><td>NPN, Normalement haut</td></tr>
                <tr><td className="fw-bold">Environnement de température</td><td>-25°C ~ 55°C</td></tr>
                <tr><td className="fw-bold">Longueur de câble</td><td>45cm</td></tr>
                <tr><td className="fw-bold">Configuration des pins</td><td>Fil rouge : +5V, Fil vert : GND, Fil jaune : Sortie digitale</td></tr>
                <tr><td className="fw-bold">Technologie</td><td>Capteur TOR<br />Sortie : numérique 0V ou 5V<br />Temps de réponse : ~2ms</td></tr>
                <tr><td className="fw-bold">Précision/incertitude</td><td>Mesure uniquement s'il y a la présence d'un objet ou pas.<br />Dépend de la couleur, texture et orientation de l'objet :<br />- Blanc mat : détecté plus loin<br />- Noir brillant : détecté plus près.<br />Incertitude typique sur la distance de seuil : ±5-10mm</td></tr>
                <tr><td className="fw-bold">Données envoyées au PC</td><td>Sortie : signal logique (0 ou 1)<br />0 : rien de détecté<br />1 : objet détecté</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 18 : Description du capteur IR E18 utilisé avec le robot (et le convoyeur)</p>
          <h5 className="mt-3">Principe :</h5>
          <p>Émetteur LED infrarouge + photodiode réceptrice. Mesure basée sur la réflexion de la lumière IR sur un objet (surface de l'objet). Si la lumière réfléchie dépasse un seuil → détection activée (sortie logique).</p>
          <p>La figure suivante montre comment câbler le capteur au robot.</p>
          <div id="figure31" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure31.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 31 : Schéma de câblage du capteur IR</p>
        </div>
        <div id="convoyeur" className="mt-5">
          <h3 className="text-dark fw-bold">5. Convoyeur v2</h3>
          <div id="figure32" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure32.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 32 : Illustration du convoyeur</p>
          <div id="tableau20" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètres</th><th>Données</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Poids</td><td>4.4 kg</td></tr>
                <tr><td className="fw-bold">Charge maximale</td><td>2 kg</td></tr>
                <tr><td className="fw-bold">Distance</td><td>700 mm</td></tr>
                <tr><td className="fw-bold">Vitesse maximale</td><td>70 mm/s</td></tr>
                <tr><td className="fw-bold">Dimension</td><td>712 x 225 x 60 mm</td></tr>
                <tr><td className="fw-bold">Sens du mouvement</td><td>Bidirectionnel</td></tr>
                <tr><td className="fw-bold">Alimentation électrique</td><td>12V - 3A</td></tr>
                <tr><td className="fw-bold">Méthode de contrôle</td><td>Robot : Niryo One, Ned, Ned2<br />Niryo Studio<br />PyNiryo, Niryo Modbus, boîtier de commande de convoyeur</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 19 : Description du convoyeur fournit avec le kit du robot Niryo Ned2</p>
        </div>
        <div id="set-vision" className="mt-5">
          <h3 className="text-dark fw-bold">6. Set Vision</h3>
          <div id="figure33" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure33.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 33 : Set Vision</p>
          <p>Ce module peut être utilisé avec :</p>
          <ul>
            <li>Blockly</li>
            <li>Python</li>
          </ul>
          <p>Et ils seront présentés dans la partie suivante.</p>
          <p className="fw-bold mt-3">Ce kit est composé de :</p>
          <div id="tableau21" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Partie</th><th>Quantité</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Câble USB</td><td>x1</td><td>PH-4 à USB 1m, connecteur l'appareil photo</td></tr>
                <tr><td className="fw-bold">Égratignure</td><td>x2</td><td>Permet d'attacher le câble au bras robotique</td></tr>
                <tr><td className="fw-bold">Astuce d'étalonnage</td><td>x1</td><td>Effectuer final utilisé pour l'étalonnage de l'espace de travail</td></tr>
                <tr><td className="fw-bold">Conteneur carré</td><td>x3</td><td>Carrés 3D qui peuvent être utilisés comme connecteurs pour les cercles</td></tr>
                <tr><td className="fw-bold">Cercles</td><td>x3</td><td>Cercles 3D qui peuvent être placés dans les conteneurs carrés</td></tr>
                <tr><td className="fw-bold">Table de l'espace de travail</td><td>x1</td><td>Une table d'espace de travail</td></tr>
                <tr><td className="fw-bold">Support de l'espace de travail</td><td>x1</td><td>Permet de définir le tableau de l'espace de travail</td></tr>
                <tr><td className="fw-bold">Connecteur mécanique</td><td>x1</td><td>Basisé d'une base en aluminium pour les liens Nedand pour connecter le support d'espace de travail ainsi que le convoyeur</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 20 : Tableau répertoriant les accessoires fournit dans le kit vision</p>
        </div>
      </div>
      <div id="quiz" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-info-circle-fill" /> Je teste mes connaissances</h2>
        <Quiz />
      </div>
    </div>
  </div>
</div>
  )
}

export default DocumentationTechnique