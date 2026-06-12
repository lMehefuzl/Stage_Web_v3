import React from 'react';

export default function ModelisationMatlab() {
  return (
    <div className="bg-light">
      <div className="bg-white border-bottom shadow-sm mb-4">
        <div className="container-fluid py-3 px-4">
          <a href="index.html" className="btn btn-outline-primary btn-sm">
            <i className="bi bi-arrow-left"></i> Accueil
          </a>
          <span className="ms-3 fs-5 fw-semibold text-primary">
            MODÉLISATION GÉOMÉTRIQUE & PROGRAMMATION MATLAB
          </span>
        </div>
      </div>

      <div className="container-fluid px-0 px-md-3 mb-5">
        <div className="row g-0 g-md-4 mx-0">
          {/* side bar */}
          <div className="col-md-3 ps-0 pe-0 pe-md-2">
            <div
              className="bg-white rounded-3 shadow-sm p-3 me-0 me-md-2"
              style={{
                position: 'sticky',
                top: '20px',
                maxHeight: 'calc(100vh - 40px)',
                overflowY: 'auto',
              }}
            >
              <h5 className="text-primary mb-3 pb-2 border-bottom">
                <i className="bi bi-list-ul"></i> Sommaire
              </h5>
              <nav className="nav flex-column">
                <a className="nav-link px-0 py-1 text-dark" href="#introduction">
                  <i className="bi bi-book text-primary me-2"></i>1. Introduction
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#architectures">
                  <i className="bi bi-diagram-3 text-primary me-2"></i>2. Principales architectures
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#changements-reperes">
                  <i className="bi bi-arrow-left-right text-primary me-2"></i>3. Changements de repères
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#rotation-axe">
                  <i className="bi bi-arrow-repeat text-primary me-2"></i>4. Rotation autour d'un seul axe
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#espaces">
                  <i className="bi bi-grid-3x3-gap-fill text-primary me-2"></i>5. Espace vectoriel vs espace articulaire
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#mgd">
                  <i className="bi bi-calculator-fill text-primary me-2"></i>6. Modélisation Géométrique Directe (MGD)
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#dh">
                  <i className="bi bi-table text-primary me-2"></i>7. Convention de Denavit-Hartenberg (DH)
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#mgi">
                  <i className="bi bi-arrow-return-left text-primary me-2"></i>8. Modélisation Géométrique Inverse (MGI)
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#etude-ned2">
                  <i className="bi bi-robot text-primary me-2"></i>9. Étude géométrique du Niryo Ned2
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#matlab-installation">
                  <i className="bi bi-cloud-download text-primary me-2"></i>1. Installation NedROS sur MATLAB
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#matlab-librarie">
                  <i className="bi bi-graph-up text-primary me-2"></i>2. Librairies MATLAB
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#matlab-premiere-utilisation">
                  <i className="bi bi-play-circle text-primary me-2"></i>3. Première utilisation
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#matlab-simulation">
                  <i className="bi bi-display text-primary me-2"></i>4. Simulation MATLAB
                </a>
                <a className="nav-link px-0 py-1 text-dark mt-2" href="#matlab-hardware">
                  <i className="bi bi-motherboard text-primary me-2"></i>5. Hardware
                </a>

                <div className="border-top mt-3 pt-2">
                  <p className="text-primary fw-semibold small mb-1">
                    <i className="bi bi-image text-primary me-1"></i> Figures :
                  </p>
                  <div className="ps-3">
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure34">Figure 34</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure35">Figure 35</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure36">Figure 36</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure37">Figure 37</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure38">Figure 38</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure39">Figure 39</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure40">Figure 40</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure41">Figure 41</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure42">Figure 42</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure43">Figure 43</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure44">Figure 44</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure45">Figure 45</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure46">Figure 46</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure47">Figure 47</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure48">Figure 48</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure49">Figure 49</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure50">Figure 50</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure51">Figure 51</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure52">Figure 52</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure53">Figure 53</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure54">Figure 54</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure55">Figure 55</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure56">Figure 56</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure57">Figure 57</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure97">Figure 97</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure98">Figure 98</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure99">Figure 99</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure100">Figure 100</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure101">Figure 101</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure102">Figure 102</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure103">Figure 103</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure104">Figure 104</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure105">Figure 105</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure106">Figure 106</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure107">Figure 107</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure108">Figure 108</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure109">Figure 109</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure110">Figure 110</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure111">Figure 111</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#figure112">Figure 112</a>
                  </div>
                </div>

                <div className="border-top mt-3 pt-2">
                  <p className="text-primary fw-semibold small mb-1">
                    <i className="bi bi-table text-primary me-1"></i> Tableaux :
                  </p>
                  <div className="ps-3">
                    <a className="nav-link px-0 py-1 text-secondary small" href="#tableau21">Tableau 21</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#tableau22">Tableau 22</a>
                    <a className="nav-link px-0 py-1 text-secondary small" href="#tableau27">Tableau 27</a>
                  </div>

                  <a className="nav-link px-0 py-1 text-dark mt-2" href="#matlab-annexes">
                  <i className="bi bi-paperclip text-primary me-2"></i>Annexes MATLAB
                </a>
                <div className="ps-4">
                  <a className="nav-link px-0 py-1 text-secondary small" href="#annexe1">Annexe 01</a>
                  <a className="nav-link px-0 py-1 text-secondary small" href="#annexe2">Annexe 02</a>
                  <a className="nav-link px-0 py-1 text-secondary small" href="#annexe3">Annexe 03</a>
                  <a className="nav-link px-0 py-1 text-secondary small" href="#annexe4">Annexe 04</a>
                  <a className="nav-link px-0 py-1 text-secondary small" href="#annexe5">Annexe 05</a>
                  <a className="nav-link px-0 py-1 text-secondary small" href="#annexe6">Annexe 06</a>
                  <a className="nav-link px-0 py-1 text-secondary small" href="#annexe7">Annexe 07</a>
                </div>
                </div>
              </nav>
            </div>
          </div>

          {/* contenu principal */}
          <div className="col-md-9 ps-0 ps-md-2 pe-0">
            {/* ============================================ */}
            {/* MODÉLISATION GÉOMÉTRIQUE */}
            {/* ============================================ */}
            <div id="modelisation" className="bg-white rounded-3 shadow-sm p-4 mb-4">
              <h2 className="text-primary border-bottom pb-2 mb-4">
                <i className="bi bi-graph-up"></i> MODÉLISATION GÉOMÉTRIQUE
              </h2>

              <div id="introduction" className="mt-3">
                <h3 className="text-dark fw-bold">1. Introduction</h3>
                <p>
                  « Un robot est un système mécanique poly-articulé, mu par des actionneurs et commandé par un calculateur.»<br />
                  Un système poly-articulé est un ensemble de corps rigides (solides, segments) interconnectés entre eux par des liaisons mécaniques.<br />
                  Lorsqu'un corps solide est libre de tout mouvement dans l'espace, ses mouvements peuvent être décrits selon 6 mouvements élémentaires appelés degrés de liberté (DDL) :
                </p>
                <ul>
                  <li>Trois translations</li>
                  <li>Trois rotations</li>
                </ul>
                <p>Un solide possède au maximum 6 DDL qui décroît à mesure que le mouvement est contraint par des articulations le liant à d'autres solides.</p>

                <h5 className="mt-3">Liaisons élémentaires utilisés en robotique</h5>
                <p>Contrairement en mécanique où on parle de pivot, glissière ou encore de rotule par exemple, en robotique on utilise que deux liaisons élémentaires :</p>

                <div id="figure34" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '150px' }}>
                  <img src="images/Figure34.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Schéma d'une prismatique" />
                </div>
                <p className="text-center small mt-1">Figure 34 : Schéma d'une prismatique</p>
                <ul>
                  <li><strong>Prismatique (≡ glissière) notée P :</strong> Seulement 1 DDL, valeur articulaire : q = longueur [m]</li>
                </ul>

                <div id="figure35" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '150px' }}>
                  <img src="images/Figure35.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Schéma d'une rotoïde" />
                </div>
                <p className="text-center small mt-1">Figure 35 : Schéma d'une rotoïde</p>
                <ul>
                  <li><strong>Rotoïde (≡ Pivot) notée R :</strong> Seulement 1 DDL, valeur articulaire q = angle [rad ou °]</li>
                </ul>
                <p>Pour modéliser des articulations de DDL &gt; 1, nous avons recours à une succession de P ou R.</p>
              </div>

              <div id="architectures" className="mt-5">
                <h3 className="text-dark fw-bold">2. Principales architectures</h3>
                <div id="figure36" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '300px' }}>
                  <img src="images/Figure36.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Architectures principales" />
                </div>
                <p className="text-center small mt-1">Figure 36 : Architectures principales de différents bras robotisés</p>
              </div>

              <div id="changements-reperes" className="mt-5">
                <h3 className="text-dark fw-bold">3. Changements de repères</h3>
                <p>En mathématique, pour changer de repère, on utilise la relation de Chasles, mais en robotique on utilise la relation suivante :</p>

                <div id="figure37" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure37.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Changement de repère" />
                </div>
                <p className="text-center small mt-1">Figure 37 : Schéma montrant le changement de repère</p>

                <p>L'équation ci-dessus sert à passer du repère 1 au repère 2. Mais si on souhaite passer du repère 2 à 1, par de simples manipulations mathématiques, on obtient :</p>

                <div id="figure38" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure38.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Équation de changement de repère" />
                </div>
                <p className="text-center small mt-1">Figure 38 : Changement de repère</p>

                <div id="figure39" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure39.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Matrice de rotation inverse" />
                </div>
                <p className="text-center small mt-1">Figure 39 : Matrice de rotation inverse dans le cas où R0 et R1 sont orthonormé</p>

                <p>Ces expressions sont toujours valables, cependant, quand on passe par un nombre élevé de repères, ça en devient compliqué.<br /> C'est pourquoi on utilise la transformation homogène :</p>

                <div id="figure40" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure40.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Calculs de changements de repères" />
                </div>
                <p className="text-center small mt-1">Figure 40 : Équations permettant de calculer des changements de repères</p>

                <p>La matrice A<sub>i,i+1</sub> est appelée matrice de transformation homogène de taille 4*4.</p>

                <div id="figure41" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure41.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Matrice de transformation homogène" />
                </div>
                <p className="text-center small mt-1">Figure 41 : Matrice de transformation homogène</p>
              </div>

              <div id="rotation-axe" className="mt-5">
                <h3 className="text-dark fw-bold">4. Rotation autour d'un seul axe</h3>
                <div id="figure42" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure42.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Rotation autour d'un axe" />
                </div>
                <p className="text-center small mt-1">Figure 42 : Rotation autour d'un axe</p>

                <p>Pour calculer la matrice M<sub>01</sub> autour d'un seul axe, on peut utiliser les matrices préremplies suivantes :</p>

                <div id="figure43" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '150px' }}>
                  <img src="images/Figure43.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Matrices de rotation" />
                </div>
                <p className="text-center small mt-1">Figure 43 : Matrices de rotation autour d'un axe</p>

                <p>Cependant, l'orientation d'un repère par rapport à un autre peut être décrite de manière suffisante par 3 rotations successives.</p>

                <h5 className="mt-3">Angles d'Euler :</h5>
                <p>6 séquences disponibles :</p>

                <div id="figure44" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '150px' }}>
                  <img src="images/Figure44.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Séquences d'Euler" />
                </div>
                <p className="text-center small mt-1">Figure 44 : Séquences d'Euler</p>

                <h5 className="mt-3">Angles de Bryant (autre convention) :</h5>
                <p>Dans cette convention, on utilise les termes Roulis, Tangage, Lacet.</p>

                <div id="figure45" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '150px' }}>
                  <img src="images/Figure45.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Angles de Bryant" />
                </div>
                <p className="text-center small mt-1">Figure 45 : Repère des angles de Bryant</p>

                <div className="alert alert-warning mt-3">
                  <i className="bi bi-exclamation-triangle-fill"></i> <strong>ATTENTION :</strong>
                  <ul className="mt-2 mb-0">
                    <li>La combinaison de deux rotations successives n'est pas commutative.</li>
                    <li>Par convention, les repères en robotique sont des tétraèdres directs.</li>
                    <li>
                      Convention des signes des angles de rotation autour d'un axe (+ ⇒ positif) :<br />
                      Autour de x : + de y → z<br />
                      Autour de y : + de z → x<br />
                      Autour de z : + de x → y
                    </li>
                  </ul>
                </div>
              </div>

              <div id="espaces" className="mt-5">
                <h3 className="text-dark fw-bold">5. Espace vectoriel vs espace articulaire</h3>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                      <p className="mb-0">
                        On appelle « <strong>espace opérationnel</strong> » ou « <strong>espace utilisateur</strong> » l'espace dans lequel est représenté la position de l'effecteur.<br /><br />
                        Dans ce cas, les coordonnées (cartésiennes, cylindriques ou sphériques) de l'effecteur (position et orientation) sont décrites dans un repère fixe appelé base (généralement lié au bâti).
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div id="figure46" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                      <img src="images/Figure46.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Pince articulée 1" />
                    </div>
                    <p className="text-center small mt-1">Figure 46 : Schématique d'une pince articulée</p>
                  </div>
                </div>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                      <p className="mb-0">
                        On appelle « <strong>espace articulaire</strong> » ou « <strong>espace de configuration</strong> » d'un robot l'espace défini par l'ensemble des variables articulaires.<br />
                        On note <strong>q(t)</strong> les <strong>variables articulaires</strong>.<br /><br />
                        On appelle « <strong>configuration articulaire</strong> » d'un robot l'état de l'ensemble de ses variables articulaires.<br /><br />
                        <strong>Vecteur de configuration articulaire :</strong><br />
                        q(t) = [q₁(t) ··· qᵢ(t) ··· qₙ(t)]ᵀ
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div id="figure47" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                      <img src="images/Figure47.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Pince articulée 2" />
                    </div>
                    <p className="text-center small mt-1">Figure 47 : Schématique d'une pince articulée</p>
                  </div>
                </div>
                <p id="tableau21" className="text-center small mt-1">
                  Tableau 21 : Tableau définissant un espace opérationnel et un espace articulaire.
                </p>
              </div>

              <div id="mgd" className="mt-5">
                <h3 className="text-dark fw-bold">6. Modélisation Géométrique Directe (MGD)</h3>
                <p><strong>Modélisation Géométrique Directe (MGD) &lt;-&gt; Forward Kinematics</strong></p>
                <p><strong>Définition :</strong> le modèle géométrique direct permet de déterminer la configuration de l'effecteur (position, orientation) d'un robot en fonction de la configuration de ses liaisons.</p>
                <p className="fw-bold">X = f<sub>MGD</sub>(q, ζ)</p>
                <ul>
                  <li>X : coordonnées opérationnelles de l'organe terminal</li>
                  <li>q : vecteur de configuration articulaire</li>
                  <li>ζ : paramètres géométriques du robot</li>
                </ul>
                <p>
                  De manière moins formel : On part des articulations et on va jusqu'à l'effecteur.<br /> 
                  On cherche à déterminer la position et l'orientation de l'effecteur final à partir des variables d'articulations.
                </p>
                <p>A partir de la matrice de transformation homogène on détermine les paramètres du MGD :</p>

                <div id="figure48" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure48.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Transformation homogène MGD" />
                </div>
                <p className="text-center small mt-1">Figure 48 : Matrice de transformation homogène</p>

                <p>
                  Le MGD est utilisé pour caractériser le fonctionnement d'un bras manipulateur. Concrètement, 
                  il permet de calculer la configuration de l'effecteur du robot en fonction de la position de chaque moteur (liaison) du robot.
                </p>

                <h5 className="mt-3">La méthodologie d'obtention d'un modèle géométrique direct est la suivante :</h5>
                <ol>
                  <li>Identifier les coordonnées articulaires</li>
                  <li>Identifier les paramètres géométriques qui définissent le mécanisme</li>
                  <li>Associer à chacune des articulations un repère</li>
                  <li>Déterminer le positionnement de chaque repère par rapport au précédent</li>
                  <li>Mettre ces changements de repères sous forme de matrices homogènes</li>
                  <li>Calculer le MGD du mécanisme</li>
                </ol>
              </div>

              <div id="dh" className="mt-5">
                <h3 className="text-dark fw-bold">7. Convention de Denavit-Hartenberg (DH)</h3>
                <p>En robotique industrielle :</p>
                <ul>
                  <li>Les liaisons considérées peuvent être décomposées en liaisons élémentaires</li>
                  <li>Les segments sont supposés rigides</li>
                </ul>
                <p>→ Il est possible, par un placement de repères approprié, de décrire entre deux repères successifs par <strong>4 paramètres</strong> (au lieu de 6 habituellement).</p>

                <h5 className="mt-3">2 hypothèses sont faites :</h5>
                <ul>
                  <li><strong>DH1 :</strong> l'axe x<sub>i</sub> est perpendiculaire à l'axe z<sub>i-1</sub></li>
                  <li><strong>DH2 :</strong> l'axe x<sub>i</sub> intersecie z<sub>i-1</sub></li>
                </ul>

                <h5 className="mt-3">Les paramètres de DH sont :</h5>
                <ul>
                  <li><strong>θ<sub>i</sub> :</strong> angle entre x<sub>i-1</sub> et x<sub>i</sub> (autour de z<sub>i-1</sub>)</li>
                  <li><strong>d<sub>i</sub> :</strong> distance entre le plan (x<sub>i-1</sub>, y<sub>i-1</sub>) et x<sub>i</sub> (le long de z<sub>i-1</sub>)</li>
                  <li><strong>a<sub>i</sub> :</strong> distance entre le plan (y<sub>i</sub>, z<sub>i</sub>) et z<sub>i-1</sub> (le long de x<sub>i</sub>)</li>
                  <li><strong>α<sub>i</sub> :</strong> angle entre z<sub>i-1</sub> et z<sub>i</sub> (autour de x<sub>i</sub>)</li>
                </ul>

                <p>A l'aide du schéma suivant, on détermine les matrices de transformation élémentaires :</p>
                <div id="figure49" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure49.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Changement de repère DH" />
                </div>
                <p className="text-center small mt-1">Figure 49 : Schéma de changement de repère</p>

                <div id="figure50" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure50.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Matrices DH" />
                </div>
                <p className="text-center small mt-1">Figure 50 : Matrices de changements de repères</p>

                <p>Et on obtient la matrice de transformation homogène suivante :</p>

                <div id="figure51" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure51.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Matrice T_i" />
                </div>
                <p className="text-center small mt-1">Figure 51 : Matrice de transformation homogène</p>

                <p>Pour une liaison élémentaire donnée (R ou P), <strong>un seul de ses quatre paramètres varie</strong>. Le placement de repères doit suivre trois règles précises :</p>
                <ul>
                  <li>L'axe z<sub>i</sub> du repère R<sub>i</sub> fixé au segment i est placé sur l'axe de la liaison entre les segments i et i+1</li>
                  <li>L'axe x<sub>i</sub> du repère R<sub>i</sub> est porté par la perpendiculaire commune aux axes z<sub>i-1</sub> et z<sub>i</sub></li>
                  <li>Les axes y<sub>i</sub> de chacun des repères sont finalement placés de manière à former des tétraèdres directs</li>
                </ul>

                <h5 className="mt-3">La méthodologie d'obtention d'un modèle géométrique direct via DH est la suivante :</h5>
                <ol>
                  <li>Identifier les segments et placer les repères selon les conventions de DH ;</li>
                  <li>Identifier les variables articulaires et les paramètres géométriques ;</li>
                  <li>Classer ces variables et paramètres dans un tableau ;</li>
                  <li>Définir les matrices de transformation homogènes pour chaque articulation ;</li>
                  <li>Mettre ces changements de repères sous forme de matrices homogènes</li>
                  <li>Calculer le MGD.</li>
                </ol>

                <div id="tableau22" className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-primary">
                      <tr><th>Liaison</th><th>θ<sub>i</sub></th><th>d<sub>i</sub></th><th>a<sub>i</sub></th><th>α<sub>i</sub></th></tr>
                    </thead>
                    <tbody>
                      <tr><td></td><td></td><td></td><td></td><td></td></tr>
                      <tr><td></td><td></td><td></td><td></td><td></td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-center small mt-1">Tableau 22 : Tableau à remplir lorsqu'on utilise la convention de Denavit-Hartenberg.</p>

                <p>Les équations sont des fonctions non-linéaires des variables des articulations. Dans l'étude du MGD (mais également du MGI), on utilise les conventions de DH afin de simplifier les calculs car on a plus que 4 paramètres au lieu de 6.</p>

                <div id="figure52" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure52.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Schéma asservissement MGD" />
                </div>
                <p className="text-center small mt-1">Figure 52 : Schéma générique d'asservissement de position d'un robot avec le MGD</p>

                <p>
                  <strong>PROBLÈME :</strong> la loi de commande devrait permettre de fournir les signaux de commande aux moteurs de chacune des articulations du robot sur la base des seules coordonnées opérationnelles de l'organe terminal !<br />
                  → Modélisation Géométrique Inverse MGI.
                </p>
              </div>

              <div id="mgi" className="mt-5">
                <h3 className="text-dark fw-bold">8. Modélisation Géométrique Inverse (MGI)</h3>
                <p>Le MGI permet de déterminer la configuration des liaisons (coordonnées articulaires) d'un robot en fonction de la configuration de son effecteur (position, vitesse).</p>
                <p className="fw-bold">q = f<sub>MGD</sub>(X, ζ)</p>
                <ul>
                  <li>X : coordonnées opérationnelles de l'organe terminal</li>
                  <li>q : vecteur de configuration articulaire</li>
                  <li>ζ : paramètres géométriques du robot</li>
                </ul>
                <p>Le MGI est obtenu par l'inversion du MGD : <strong>f<sub>MGI</sub> = f<sub>MGD</sub><sup>-1</sup></strong></p>
                <p>De manière moins formel : on part de la position et l'orientation souhaitées de l'effecteur et on remonte aux variables des articulations.</p>

                <div className="alert alert-warning">
                  <i className="bi bi-exclamation-triangle-fill"></i> La MGI est plus difficile à résoudre que la MGD.
                </div>

                <p>
                  Il se peut que la MGI n'ait pas de solution, une solution ou encore plusieurs solutions.<br />
                  Mais pour pouvoir obtenir la MGI, on cherche à obtenir des formes fermées plutôt que des solutions
                  numériques pour deux raisons :
                </p>
                <ul>
                  <li>Dans certaines applications tel que le suivie d'une ligne de soudure par un système de vision, les équations du MGI peuvent être résolue à un taux rapide, toutes les 20ms et avoir une expression sous la forme fermée est mieux que de chercher une expression itérative.</li>
                  <li>La MGI a en générale plusieurs solutions mais avoir des solutions sous forme fermée permet de développer des règles pour choisir une solution plutôt que plusieurs.</li>
                </ul>
                <p>Les solutions sous formes fermées sont plus rapides que les solutions numériques mais elles sont dépendantes du robot (non générales).</p>

                <p><strong>Problème :</strong> la modélisation géométrique n'est pas bijective. Les solutions <strong>q</strong> du MGI peuvent être multiples pour une configuration <strong>X</strong> de l'effecteur donnée.</p>

                <div id="figure53" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure53.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Schéma asservissement MGI" />
                </div>
                <p className="text-center small mt-1">Figure 53 : Schéma générique d'asservissement de position d'un robot avec le MGI</p>

                <p>Dans ce cas, la synthèse du correcteur est plus facile car <strong>les variables en jeu</strong> dans la loi de commande <strong>appartiennent à l'espace articulaire.</strong></p>

                <p>Il n'existe pas de méthode systématique d'inversion du modèle géométrique direct.<br />
                Néanmoins, si elle existe, la forme explicite issue d'une inversion mathématique, qui donne toutes les solutions possibles au problème inverse constitue le modèle géomètre inverse.</p>

                <h5 className="mt-3">Méthodes pour calculer le MGI :</h5>
                <ul>
                  <li><strong>Méthode analytique :</strong> très complexe</li>
                  <li><strong>Méthode analytique de Paul :</strong> on décompose le MGD par les matrices de passages de chaque liaison et on déduit le MGI de manière itératives en partant de l'effecteur et en parcourant la chaîne cinématique jusqu'à la base.</li>
                  <li><strong>Remarque :</strong> cette méthode convient à une majorité de robots industriels.</li>
                  <li><strong>Méthodes numériques :</strong> si le MGI n'existe pas, on peut calculer une solution particulière du problème inverse par des procédures numériques (ex: méthode de Newton). Elles conduisent à une solution locale au sens où elle dépend des conditions initiales.</li>
                  <li><strong>Méthodes de découplage :</strong> faire un découplage cinématique, c'est-à-dire considérer la position et l'orientation indépendamment. Utilisation d'une approche géométrique pour résoudre le problème de position puis les angles d'Euler pour l'orientation.</li>
                </ul>

                <p>L'extrait qui suit provient de la page 99 du document « Spong – RobotmodellingandControl_Hutchinson » :</p>

                <div id="figure54" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1">
                  <p>
                    Although the general problem of inverse kinematics is quite difficult, it turns out that for manipulators having six joints, 
                    with the last three joints intersecting at a point (such as the Stanford Manipulator above), 
                    it is possible to decouple the inverse kinematics problem into two simpler problems, known respectively, as 
                    <strong>inverse position kinematics</strong>, and <strong>inverse orientation kinematics</strong>. To put it another way, 
                    for a six-DOF manipulator with a spherical wrist, the inverse kinematics problem may be separated into two simpler problems, 
                    namely first finding the position of the intersection of the wrist axes, hereafter called the <strong>wrist center</strong>, 
                    and then finding the orientation of the wrist.
                  </p>
                </div>
                <p className="text-center small mt-1">Figure 54 : Passage du document &quot;Spong-RobotmodellingandControl_Hutchinson&quot;</p>

                <p>Cet extrait explique que pour un robot 6 axes, comme le Niryo Ned2, on peut découper le problème de la MGI en deux points :</p>
                <ul>
                  <li><strong>Modélisation inverse de position :</strong> les 3 premiers axes (base, épaule, coude) servent principalement à amener le centre du poignet (wrist center) à la bonne position.<br />
                  Le centre du poignet est défini comme le point où se coupent les trois derniers axes (ceux du poignet).</li>
                  <li><strong>Modélisation inverse d'orientation :</strong> une fois le poignet au bon endroit, les 3 derniers axes (poignet 1, poignet 2, poignet 3) permettent d'orienter l'effecteur où l'on souhaite.<br />
                  Comme ces axes se coupent en un seul point, ils peuvent générer toutes les orientations possibles autour du centre du poignet (poignet sphérique). Sur le Ned2, ça sert à tourner, incliner ou faire pivoter la pince.</li>
                </ul>

                <p>Le schéma suivant montre où sont placé les articulations (base, épaule, etc.) et la partie position et orientation.</p>

                <div id="figure55" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '250px' }}>
                  <img src="images/Figure55.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Articulations Ned2" />
                </div>
                <p className="text-center small mt-1">Figure 55 : Schéma du robot Ned2 montrant ses articulations</p>

                <p>La <strong>MGI (Modélisation Géométrique Inverse)</strong> est indispensable pour contrôler l'effecteur en position/orientation, 
                mais elle introduit des complexités (solutions multiples, singularités, coût de calcul). C'est pourquoi elle est préférable pour la commande du robot.</p>

                <p>Les MGD et MGI caractérisent la structure géométrique du robot et permettent l'asservissement en position. En revanche, 
                elles ne prennent pas en compte les vitesses articulaires, ni la planification de trajectoires complexes, 
                ni les asservissements en vitesse ou en retour d'état.</p>

                <p className="fw-bold">→ MCD et MCI (diapo 89 à 92)</p>
              </div>

              <div id="etude-ned2" className="mt-5">
                <h3 className="text-dark fw-bold">9. Étude géométrique du Niryo Ned2</h3>
                <div id="figure56" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '300px' }}>
                  <img src="images/Figure56.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Modélisation Ned2" />
                </div>
                <p className="text-center small mt-1">Figure 56 : Modélisation du robot Niryo Ned2</p>

                <div id="figure57" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure57.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Tableau DH Ned2" />
                </div>
                <p className="text-center small mt-1">Figure 57 : Tableau de Denavit-Hartenberg</p>
              </div>
            </div>

            {/* ============================================ */}
            {/* PROGRAMMATION MATLAB */}
            {/* ============================================ */}
            <div id="matlab" className="bg-white rounded-3 shadow-sm p-4 mb-4">
              <h2 className="text-primary border-bottom pb-2 mb-4">
                <i className="bi bi-graph-up"></i> PROGRAMMATION MATLAB
              </h2>

              <div id="matlab-installation" className="mt-3">
                <h3 className="text-dark fw-bold">1. Installation NedROS sur MATLAB</h3>
                <p>Pour utiliser le robot Ned2 avec le logiciel MATLAB, on peut utiliser un projet MATLAB existant qui sert de tutoriel.<br />
                <a href="https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots">https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots</a></p>
                <p>Vous pouvez aussi y accéder via la documentation Niryo dans l'onglet API puis MATLAB :<br />
                <a href="https://docs.niryo.com/">https://docs.niryo.com/</a></p>
              </div>

              <div id="matlab-librarie" className="mt-5">
                <h3 className="text-dark fw-bold">2. Librairies MATLAB</h3>
                <p>Pour contrôler le Niryo Ned2 avec MATLAB/Simulink en lien avec ROS, deux Toolboxes sont nécessaires (<strong>MATLAB R2024b ou ultérieur</strong>) :</p>
                <ul>
                  <li><strong>Robotics System Toolbox :</strong> <a href="https://fr.mathworks.com/products/robotics.html" target="_blank" rel="noreferrer">https://fr.mathworks.com/products/robotics.html</a><br />
                  Génère des scénarios de test robotique, importe des modèles de robots industriels, et permet de développer des prototypes combinant cinématique et dynamique.</li>
                  <li><strong>ROS Toolbox :</strong> <a href="https://fr.mathworks.com/products/ros.html" target="_blank" rel="noreferrer">https://fr.mathworks.com/products/ros.html</a><br />
                  Interface de connexion entre MATLAB/Simulink et ROS/ROS2. Permet de concevoir des nœuds ROS, de les connecter à un réseau existant, de les vérifier en simulation (desktop) ou sur du hardware (Gazebo, robots réels). Supporte la génération de code C++ et CUDA.</li>
                </ul>
              </div>

              <div id="matlab-premiere-utilisation" className="mt-5">
                <h3 className="text-dark fw-bold">3. Première utilisation</h3>
                <p>Avant de s'intéresser au contenu du GitHub, plusieurs étapes sont à effectuer.</p>

                <ol>
                  <li><strong>Installer l'ADD-ON MinGW64</strong><br />
                  Cette étape peut être faite directement depuis MATLAB en cliquant sur : <strong>Add-On → Add-On Explorer</strong>, puis en sélectionnant <strong>MinGW64</strong>.</li>
                  <li><strong>Installer python 3.10.x</strong> (MATLAB ne prend pas en compte les dernières versions)<br />
                  Après l'installation : <strong>MATLAB puis Home → Settings → MATLAB Compiler → Sélectionner Python dans MATLAB Runtime Installer Location</strong>.</li>
                  <li><strong>Installer Visual Studio 2022 et le paramétrer en tant que compilateur</strong><br />
                  <p>Le site Microsoft ne propose plus directement Visual Studio 2022 (pousse vers la version 2026, incompatible avec MATLAB). 
                  Téléchargez la version 2022 via l'historique des versions Community : <a href="https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-history">https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-history</a><br /></p></li>
                </ol>

                <p>Une fois Visual Studio 2022 installé, ouvrir l'installateur pour finaliser l'installation :</p>

                <p><strong>Dans Workloads, cocher :</strong></p>
                <ul>
                  <li>Développement Desktop en C++ (Desktop development with C++)</li>
                  <li>Dans Composants individuels, sélectionner en plus des éléments par défaut :</li>
                </ul>

                <div id="tableau27" className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-primary"><tr><th>Composant</th><th>Pourquoi</th></tr></thead>
                    <tbody>
                      <tr><td className="fw-bold">MSVC v143 – Outils de build C++ (x64/x86)</td><td>Compilateur pour MATLAB et ROS</td></tr>
                      <tr><td className="fw-bold">Windows 10 SDK (10.0.xxxxx)</td><td>Nécessaire pour compiler sur Windows</td></tr>
                      <tr><td className="fw-bold">Windows Universal C Runtime</td><td>Requis pour certains fichiers DLL</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-center small mt-1">Tableau 27 : Tableau des Composants Individuels dans Visual Studio Installer</p>

                <p>Enfin cliquer sur <strong>Modifier/Installer</strong>.</p>
                <p>Fermer MATLAB et redémarrer le PC afin que tous les chemins et variables d'environnement soient correctement mis à jour.</p>

                <div className="alert alert-info">
                  <i className="bi bi-info-circle-fill"></i> <strong>Remarque :</strong> Visual Studio est un compilateur / environnement de développement.<br />
                  Visual Studio Code est un éditeur de texte.
                </div>

                <p>Ensuite il ne vous reste plus qu'à lancer le fichier <strong>« FirstSetup.mlx »</strong> et à suivre les instructions.</p>
                <p>À la ligne 3, on vous demande de lancer la commande suivante :</p>
                <pre className="bg-dark text-white p-3 rounded"><code>mex -setup</code></pre>
                <p>→ Sélectionner <strong>Microsoft Visual C++ 2022</strong>.</p>

                <p>Avant d'exécuter la ligne 9 (<code className="text-dark">rosgenmsg(&quot;ned_ros&quot;)</code>), copiez le dossier <code className="text-dark">niryo_robot_msgs</code> 
                (dans <code className="text-dark">ned_ros</code>) vers un nouveau dossier. MATLAB ne supporte pas la génération de messages dans un package contenant autre chose que des messages ou services. 
                Exécutez ensuite <code className="text-dark">rosgenmsg()</code> sur ce nouveau dossier.</p>

                <pre className="bg-dark text-white p-3 rounded"><code>{`rosgenmsg("ned_ros")`}</code></pre>
                <p>À ça :</p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`rosgenmsg("<Chemin de votre fichier>\\<le nom de votre fichier>")`}</code></pre>

                <p>La ligne 10 explique la manipulation : sans celle-ci, <code className="text-dark">rosgenmsg</code> tenterait de générer des messages pour <strong>tous</strong> 
                les packages de <code className="text-dark">ned_ros</code>, 
                dont certains ne contiennent pas de fichiers messages, ce qui provoquerait une erreur.</p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`rosgenmsg(fullfile("ned_ros","niryo_robot_hardware_stack"));`}</code></pre>
                <p>Pour ignorer cette commande et qu'elle ne pose plus de problème, il est possible de la supprimer ou la mettre en commentaire.</p>

                <div id="figure97" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure97.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Créer un commentaire" />
                </div>
                <p className="text-center small mt-1">Figure 97 : Créer un commentaire sur MATLAB</p>

                <p>Pour la partie 4 du script (intitulé <strong>4. Add the custom message folder to the MATLAB path</strong>), vous pouvez mettre en commentaire une bonne partie des commandes et ne laisser que :</p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`addpath('<!>\\MATLAB_msg_gen_ros1\\win64\\install\\m')\nsavepath`}</code></pre>
                <p>A la place de <strong>&lt;!&gt;</strong>, ajouté le chemin menant au fichier de message créé précédemment.</p>

                <div id="figure98" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '400px' }}>
                  <img src="images/Figure98.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Commande rosgenmsg" />
                </div>
                <p className="text-center small mt-1">Figure 98 : Utilisation de la commande « rosgenmsg() »</p>

                <div id="figure99" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '150px' }}>
                  <img src="images/Figure99.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Lancement programme" />
                </div>
                <p className="text-center small mt-1">Figure 99 : Lancement d'un programme</p>

                <p>Avec la commande ligne 18 du fichier FirstSetup.mlx, vous pouvez vous assurer que les
                messages présents dans « niryo-robot-msgs » sont bien utiliser. Ce sont tous les messages
                qui commencent par « niryo_robot_msgs ».</p>

                <div id="figure100" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '300px' }}>
                  <img src="images/Figure100.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="rosmsg list" />
                </div>
                <p className="text-center small mt-1">Figure 100 : Listage des messages existant via la commande « rosmsg list »</p>

                <p>La suite des instructions ne devrait pas poser de problèmes.</p>
              </div>

              <div id="matlab-simulation" className="mt-5">
                <h3 className="text-dark fw-bold">4. Simulation MATLAB</h3>
                <p>Après avoir terminé les instructions de « FirstSetup.mlx », vous pouvez lancer le fichier <strong>« Ned2_Simulation.mlx »</strong> afin de manipuler une simulation du robot dans un premier temps.</p>
                <p>Dans ce fichier, on lance une simulation numérique du robot que l'on manipule de différentes manières. On peut :</p>
                <ul>
                  <li>Manipuler le robot joint par joint</li>
                  <li>Faire une trajectoire au robot avec une durée déterminée</li>
                  <li>Manipuler le robot avec sa position XYZ et ses angles Roll, Pitch et Yaw grâce au modèle cinématique inverse</li>
                  <li>Fermer la pince du robot (le gripper)</li>
                  <li>Ouvrir la pince du robot</li>
                </ul>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div id="figure101" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{ height: '300px' }}>
                      <img src="images/Figure101.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Interface simulation" />
                    </div>
                    <p className="text-center small mt-1">Figure 101 : Interface de la simulation</p>
                  </div>
                  <div className="col-md-6">
                    <div id="figure102" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{ height: '300px' }}>
                      <img src="images/Figure102.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Trajectoire simulation" />
                    </div>
                    <p className="text-center small mt-1">Figure 102 : Interface de simulation pendant une trajectoire</p>
                  </div>
                </div>

                <div id="figure103" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '500px' }}>
                  <img src="images/Figure103.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Panneau 1" />
                </div>
                <p className="text-center small mt-1">Figure 103 : Interface du panneau de contrôle de la simulation (1)</p>

                <div id="figure104" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '500px' }}>
                  <img src="images/Figure104.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Panneau 2" />
                </div>
                <p className="text-center small mt-1">Figure 104 : Interface du panneau de contrôle de la simulation (2)</p>

                <p>Vous remarquerez que les instructions MATLAB pour les différentes actions sont toutes écrites et pourront vous resservir lors de l'écriture de votre propre script MATLAB.</p>

                <div id="figure105" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '450px' }}>
                  <img src="images/Figure105.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Commande help" />
                </div>
                <p className="text-center small mt-1">Figure 105 : Utilisation de la commande « help »</p>

                <p>Vous pouvez directement accéder à l'ensemble de la documentation MATLAB, en cliquant <a href="https://fr.mathworks.com/help/releases/R2025b/?s_tid=user_nav_help">ici</a>.<br />
                Maintenant que nous avons pu utiliser la simulation MATLAB depuis le script fourni par le GitHub, il est temps de créer notre propre script .m permettant de contrôler le robot en simulation.</p>

                <div id="figure106" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '300px' }}>
                  <img src="images/Figure106.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Bras commande show" />
                </div>
                <p className="text-center small mt-1">Figure 106 : Bras Ned2 avec la commande « .show() »</p>

                <p>La simulation MATLAB utilise la classe <strong>Ned2Sim.m</strong> qui définit les actions du robot : déplacements, affichage, récupération du TCP. 
                La commande <code className="text-dark">.show()</code> affiche le robot.</p>

                <p>Le code GitHub d'origine a dû être corrigé (erreurs de dimensionnement des variables). 
                Pour rappel, MATLAB manipule des matrices : une variable qui a pour valeur 5, par exemple, est en fait une matrice 1x1 qui a pour valeur 5.</p>
                <p>Après de nombreuses vérifications, nous obtenons le code disponible en <strong><a href="#annexe1">Annexe 01</a></strong>.</p>

                <p>Pour développer les possibilités de notre robot, nous avons ajouté des fonctions dans la classe Ned2Sim :</p>
                <ul>
                  <li>La fonction <strong>MoveLinear()</strong>, qui demande au robot de déplacer la pince de façon linéaire. Disponible en <strong><a href="#annexe2">Annexe 02</a></strong>.</li>
                  <li>La fonction <strong>MoveCircular()</strong>, qui demande au robot de déplacer la pince de façon circulaire. Disponible en <strong><a href="#annexe3">Annexe 03</a></strong>.</li>
                  <li>La fonction <strong>getFK()</strong> qui renvoie la matrice homogène de cinématique directe entre la base du robot et la pince. Disponible en <strong><a href="#annexe4">Annexe 04</a></strong>.</li>
                  <li>La fonction <strong>getTCP()</strong>, qui renvoie la position et l'orientation du TCP (Tool Center Point). Disponible en <strong><a href="#annexe5">Annexe 05</a></strong>.</li>
                  <li>La fonction <strong>drawTCP()</strong> qui dessine un repère TCP sur la figure. Disponible en <strong><a href="#annexe6">Annexe 06</a></strong>.</li>
                </ul>
                <p>Remarque : Ces fonctions sont à ajouter dans la partie « methods » du fichier Ned2Sim.m.</p>

                <p>Une fois toutes ces fonctions ajoutées, nous pouvons écrire un code rapide qui va devoir réaliser les étapes suivantes :</p>
                <ul>
                  <li>Se déplacer en position [0.25 0 0.25] (.Move())</li>
                  <li>Renvoyer le TCP ( .getTCP() )</li>
                  <li>Se déplacer en ligne de [0.25 0 0.25] à [0.20 0.20 0.30] ( .MoveLinear() )</li>
                  <li>Renvoyer la matrice homogène base → pince ( .getFK() )</li>
                  <li>Faire un mouvement circulaire ( .MoveCircular() )</li>
                  <li>Dessiner le repère TCP ( .drawTCP() )</li>
                </ul>

                <p>On obtient alors le code suivant :</p>

                <pre className="bg-dark text-white p-3 rounded"><code>{`nedSim = Ned2Sim();
nedSim.show();
pause(1)

disp('Déplacement du robot ...')
nedSim.Move([0.25 0 0.25],[0 0 0],3);
disp('Coordonnées du robot')
[pos,rpy] = nedSim.getTCP();
disp('Position du robot:')
fprintf('X: %f, Y: %f, Z: %f\\n',pos)
disp(' ')
disp('Orientation du robot:')
fprintf('Roll: %f, Pitch: %f, Yaw: %f\\n',rpy)
disp(' ')

disp('Déplacement du robot en ligne ...')
P1 = [0.25 0.00 0.25];
P2 = [0.20 0.20 0.30];
nedSim.MoveLinear(P1, P2, [0 0 0], 4);
T = nedSim.getFK();
disp('Matrice de transformation du robot:')
disp(T)

disp('Déplacement du robot en cercle ...')
P1 = [0.20 0.00 0.30];
P2 = [0.25 0.10 0.35];
P3 = [0.20 0.20 0.30];
nedSim.MoveCircular(P1, P2, P3, [0 0 0], 5, 80);
nedSim.drawTCP();
% Retrieve and display the final position and orientation of the robot
finalPos = nedSim.getTCP();
disp('Position finale du robot:')
fprintf('X: %f, Y: %f, Z: %f\\n',finalPos)`}</code></pre>

                <div className="alert alert-info">
                  <i className="bi bi-info-circle-fill"></i> <strong>Remarque :</strong> Les fonctions disp et fprintf servent à afficher un message ou une variable dans la console de commande. Elles permettent de savoir à quel endroit du code le robot est en train d'effectuer une action. La différence entre les deux est que disp accepte un seul argument d'entrée, là où fprintf peut en accepter plusieurs.
                </div>

                <p>La console nous renvoie les informations suivantes :</p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`Déplacement du robot ...
Coordonnées du robot
Position du robot:
X: 0.250000, Y: 0.000000, Z: 0.250000
Orientation du robot:
Roll: 0.000000, Pitch: 0.000000, Yaw: -0.000000

Déplacement du robot en ligne ...
Matrice de transformation du robot:
    1.0000 -0.0000 -0.0000 0.2000
    0.0000  1.0000 -0.0000 0.2000
    0.0000  0.0000  1.0000 0.3000
         0       0       0 1.0000

Déplacement du robot en cercle ...
Position finale du robot:
X: 0.200000, Y: 0.200000, Z: 0.300000`}</code></pre>

                <p>Sur la figure qui est apparu représentant le robot on retrouve le repère TCP dessiné :</p>
                <div id="figure107" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '300px' }}>
                  <img src="images/Figure107.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Ned2 fin programme" />
                </div>
                <p className="text-center small mt-1">Figure 107 : Image du Ned2 à la fin du programme</p>

                <p>
                  On remarque cependant que la pince garde toujours la même position (vers le haut, le long de
                  l'axe z) et cela même si le robot bouge. Elle n'est d'ailleurs pas alignée avec le Joint censé
                  contrôler sa rotation. De plus, le Joint 6 contrôlant la rotation de la pince semble bloqué ou ne
                  pas fonctionner.
                </p>

                <div id="figure108" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                  <img src="images/Figure108.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Pince mal positionnée" />
                </div>
                <p className="text-center small mt-1">Figure 108 : Pince du robot mal positionné</p>

                <p>
                  Pour résoudre ce problème, il faut se rendre dans le fichier <strong>urdf</strong> du robot.
                  Ce fichier permet la représentation visuelle du robot dans la simulation. En réalité, il est divisé en plusieurs
                  fichiers, chacun d'entre eux gérant une partie différente du robot. Le fichier qui nous intéresse et celui qui est
                  appelé dans la classe Ned2Sim.m à la ligne 38.
                </p>

                <pre className="bg-dark text-white p-3 rounded"><code>{`rbt = importrobot("niryo_ned2_gripper1_n_camera.urdf.xacro");`}</code></pre>

                <p>Ce fichier contrôle la position et l'orientation de la pince du robot dans l'état initial ou lors de mouvement du robot.</p>
                <p>La partie à modifier est la suivante :</p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`<joint name="joint_to_gripper" type="fixed">
    <parent link="tool_link"/>
    <child link="base_gripper_1"/>
    <origin xyz="-0.007 0 0.003" rpy="\${-PI/2} 0 0"/>
</joint>`}</code></pre>
                <p>Il faut modifier la valeur du <strong>pitch</strong> (en rouge sur l'élément de code ci-dessus) de l'origine et le changer en <strong>${`{PI/2}`}</strong>.<br />
                Après ces changements, vous devriez avoir une pince qui suit les déplacements et rotations du bras robotique.</p>

                <p>Pour tester ces changements nous allons reprendre une partie du code utilisé précédemment:</p>

                <pre className="bg-dark text-white p-3 rounded"><code>{`nedSim = Ned2Sim();
nedSim.show();
disp('Initialisation du simulateur terminée.');

disp('Déplacement du robot ...')
nedSim.Move([0.25 0 0.25],[0 0.95 0.4],3);
disp('Coordonnées du robot')
[pos,rpy] = nedSim.getTCP();
disp('Position du robot:')
fprintf('X: %f, Y: %f, Z: %f\\n',pos)
disp(' ')
disp('Orientation du robot:')
fprintf('Roll: %f, Pitch: %f, Yaw: %f\\n',rpy)
disp(' ')`}</code></pre>

                <p>Nous avons changé les valeurs rpy pour effectuer une rotation avec nedSim.Move(…).On obtient :</p>

                <div id="figure109" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                  <img src="images/Figure109.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Pince bien positionnée" />
                </div>
                <p className="text-center small mt-1">Figure 109 : Pince du robot bien positionné</p>
              </div>

              <div id="matlab-hardware" className="mt-5">
                <h3 className="text-dark fw-bold">5. Hardware</h3>
                <p>Enfin, ce projet vous propose aussi de vous connecter directement au robot avec le fichier <strong>« Ned2_Hardware.mlx »</strong>.</p>
                <div className="alert alert-warning">
                  <i className="bi bi-exclamation-triangle-fill"></i> <strong>Remarque :</strong> La première instruction du script vous proposera peut-être un message d'erreur malgré le fait que vous avez bien suivi les instructions du petit encart présent au début du fichier.
                </div>
                <p>Le robot connecte son ROS Master sur le port <strong>127.0.0.1</strong>, or l'IP du robot est <strong>169.254.200.200</strong> et c'est sur cette adresse que l'on souhaite se connecter. Mais mettre l'adresse 127.0.0.1 à la place de Ned2 dans l'instruction ne fonctionne pas. En effet, celle-ci est une adresse par défaut utilisée pour les connexions Ethernet dans tous les appareils possédant une connexion Ethernet. Il faut donc changer cette adresse par défaut au sein même du robot.</p>
                <p>En réalité c'est la valeur de <strong>$ROS_MASTER_URI</strong> que vous devez modifier avec l'adresse IP du robot. Pour vérifier la valeur de ce dernier, vous pouvez taper la commande suivante dans un terminal de commande ssh du robot disponible sur NiryoStudio :</p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`echo $ROS_MASTER_URI`}</code></pre>
                <p>Il faut aussi s'assurer que le robot n'utilise pas ROS en local et qu'il puisse discuter avec un appareil extérieur qui n'est pas connecté à sa Raspberry PI.</p>
                <p>Une fois que vous vous êtes assuré que le ROS pouvait être utilisé depuis votre appareil et que le ROS Master était bien configuré sur la bonne adresse IP, nous pouvons tester le code suivant :</p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`ned = Ned2("169.254.200.200");
ned.showRobot()`}</code></pre>
                <p>Or MATLAB doit se connecter au ROS Master pour communiquer avec le robot. Nous allons donc d'abord l'initialiser. On va modifier le code de la façon suivante :</p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`rosshutdown;
setenv('ROS_MASTER_URI','http://169.254.200.200:11311');
setenv('ROS_IP','169.254.200.100');
rosinit;
ned = Ned2("169.254.200.200");
ned.goHome();`}</code></pre>
                <p>La première ligne ferme tous les ROS Masters déjà ouverts. Elle ne sert pas vraiment lors de la première utilisation du code mais lorsque vous réexécuterez le code, elle fermera ceux ouverts précédemment afin d'éviter les erreurs. Les deux lignes qui suivent permettent de déclarer des variables systèmes. Ici, on déclare l'adresse IP du ROS Master, (l'adresse du robot avec le bon port), ainsi que l'adresse du PC que l'on utilise.</p>
                <p>On initialise ensuite le Ros Master avec <strong>rosinit</strong>, qui prendra en compte les variables systèmes déclarées précédemment. Il est donc important que leur nom soit exactement <strong>ROS_MASTER_URI</strong> et <strong>ROS_IP</strong>.</p>
                <p>On déclare ensuite un élément de la classe Ned2. Cette dernière est déjà créée dans les fichiers du GitHub. Vous pouvez la retrouvez avec le chemin suivant :</p>
                <p><a href="https://github.com/mathworks-robotics/matlab-support-for-niryo-ned2-robots/tree/main/classes">https://github.com/mathworks-robotics/matlab-support-for-niryo-ned2-robots/tree/main/classes</a></p>

                <p>Maintenant, en lançant ce programme, vous devriez rencontrer avec un message d'erreur
                lorsque le programme tente d'exécuter la dernière ligne. Cette dernière demande au robot de
                se déplacer en position Home.</p>

                <div id="figure110" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '200px' }}>
                  <img src="images/Figure110.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Bras position Home" />
                </div>
                <p className="text-center small mt-1">Figure 110 : Bras en position Home</p>

                <p>Or, MATLAB va tenter de faire appel à un message compris dans le dossier <strong>niryo_robot_tool_commander</strong>,
                et ces messages n'existent pas dans le GitHub. En regardant dans le firmware du robot,
                nous avons constaté qu'ils n'existent pas non plus dans le robot.<br />
                On recherche ToolGal.msg et ToolState.msg.</p>

                <div id="figure111" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '100px' }}>
                  <img src="images/Figure111.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Message niryo_robot_tools_commander" />
                </div>
                <p className="text-center small mt-1">Figure 111 : Message compris dans niryo_robot_tools_commander</p>

                <p>On recherche dans le robot un fichier action qui pourrait générer les messages que l'on
                souhaite. Nous avons fini par les trouver à l'aide de la commande suivante : </p>
                <pre className="bg-dark text-white p-3 rounded"><code>{`find ~/catkin_ws/src -name "*.action"`}</code></pre>

                <div id="figure112" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{ height: '150px' }}>
                  <img src="images/Figure112.png" className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} alt="Recherche fichiers action" />
                </div>
                <p className="text-center small mt-1">Figure 112 : Recherche de ToolGoal.msg, ToolState.msg et des fichiers action</p>

                <p>Les fichiers <code className="text-dark">ToolGoal.msg</code> et <code className="text-dark">ToolState.msg</code> sont introuvables. 
                Plutôt que de mettre à jour le firmware (qui ferait tout perdre), la classe <strong>Ned2</strong> a été modifiée pour ne plus faire appel à ces mauvais messages. 
                La version réduite (initialisation ROS + mouvement Home) est disponible en <strong><a href="#annexe7">Annexe 07</a></strong>.</p>
                <div className="alert alert-info">
                  <i className="bi bi-info-circle-fill"></i> <strong>Remarque :</strong> Nous avons copié le code de la classe Ned2 originelle dans un document texte afin de pouvoir le retrouver rapidement et de réutiliser certaines parties. Cette façon de procéder va nous permettre de déboguer petit à petit les fonctions de cette classe Ned2.
                </div>
              </div>

              <div id="matlab-annexes" className="mt-5">
                <h3 className="text-dark fw-bold">Annexes</h3>

                <div id="annexe1" className="mt-4">
                  <h4 className="text-primary fw-bold">Annexe 01</h4>
                  <pre className="bg-dark text-white p-3 rounded d-block mb-3"><code>{`classdef Ned2Sim < handle
    properties (SetAccess = private)
        RigidBodyTree
        IK
        Weight
        sampleRate = 20
        robotAxes = []
        HomeConfiguration
        NumJoints
        NumArmJoints
        NumGripperJoints
        end
        properties (SetAccess = public)
        plotTraj = false
        recordTraj = false
        RecordedPoses = []
    end

    properties (SetObservable = true)
        CurrentConfiguration % 1 x NumArmJoints
        GripperConfiguration % 1 x NumGripperJoints
    end

    methods
        function ned = Ned2Sim(args)
            arguments
                args.Tool = 'Gripper'
            end

            % === Charger le robot ===
            if ~exist('niryo_ned2_gripper1_n_camera.mat','file')
                rbt = importrobot("niryo_ned2_gripper1_n_camera.urdf.xacro");
                save('niryo_ned2_gripper1_n_camera.mat','rbt');
            else
                S = load('niryo_ned2_gripper1_n_camera.mat');
                rbt = S.rbt;
            end
            ned.RigidBodyTree = rbt;
            ned.RigidBodyTree.DataFormat = 'row';

            % === Détection auto des joints ===
            ned.NumJoints = numel(ned.RigidBodyTree.homeConfiguration);

            ned.NumArmJoints = 6; % Ned2 = 6 axes bras
            ned.NumGripperJoints = ned.NumJoints - ned.NumArmJoints;

            % === Configurations ===
            ned.HomeConfiguration = zeros(1, ned.NumJoints);
            ned.CurrentConfiguration = zeros(1, ned.NumArmJoints);
            ned.GripperConfiguration = zeros(1, ned.NumGripperJoints);

            % === IK ===
            ned.IK = inverseKinematics("RigidBodyTree", ned.RigidBodyTree);
            ned.IK.SolverParameters.AllowRandomRestart = false;
            ned.Weight = [1 1 1 1 1 1];

            % === Listeners ===
            addlistener(ned,'CurrentConfiguration','PostSet',@ned.configurationChanged);
            addlistener(ned,'GripperConfiguration','PostSet',@ned.configurationChanged);
        end

        % ========================
        function configurationChanged(ned,~,~)
            if ned.recordTraj
                ned.RecordedPoses = [ned.RecordedPoses; ...
                    [ned.CurrentConfiguration ned.GripperConfiguration]];
            end
            if ned.isRobotShown()
                ned.show();
            end
        end
        % ========================
        function goHome(ned, duration)
            arguments
                ned
                duration = 3
            end
            ned.PlanTrajectory([[ned.CurrentConfiguration ned.GripperConfiguration]; ...
                    ned.HomeConfiguration], duration);
        end
        % ========================
        function PlanTrajectory(ned, waypoints, duration, method)
            arguments
                ned
                waypoints
                duration = 3
                method = 'trapveltraj'
            end

            tvec = 0:1/ned.sampleRate:duration;
            numSamples = length(tvec);
            waypoints = waypoints';

            switch method
                case 'trapveltraj'
                    [q, ~] = trapveltraj(waypoints,numSamples);
                case 'minjerkpolytraj'
                    [q, ~] = minjerkpolytraj(waypoints, ...
                        linspace(0,duration,size(waypoints,2)), numSamples);
                otherwise
                    [q, ~] = trapveltraj(waypoints,numSamples);
            end

            rc = rateControl(ned.sampleRate);
            for idx = 1:numSamples
                qi = q(:,idx)';
                ned.CurrentConfiguration = qi(1:ned.NumArmJoints);
                ned.GripperConfiguration = qi(ned.NumArmJoints+1:end);
                waitfor(rc);
            end
        end

        % ========================
        function Move(ned, Position, RPY, duration)
            arguments
                ned
                Position (1,3) double
                RPY (1,3) double
                duration = 3
            end

            se = se3(flip(RPY),"eul","ZYX", Position);
            curConf = [ned.CurrentConfiguration ned.GripperConfiguration];
            sol = ned.IK("tool_link", se.tform, ned.Weight, curConf);
            ned.PlanTrajectory([curConf; sol], duration);
        end

        % ========================
        function SetPose(ned, Pose)
            Pose = Pose(:)';
            ned.CurrentConfiguration = Pose(1:ned.NumArmJoints);
            ned.GripperConfiguration = Pose(ned.NumArmJoints+1:ned.NumJoints);
        end

        % ========================

        function show(ned)
            config = ned.HomeConfiguration;
            config(1:ned.NumArmJoints) = ned.CurrentConfiguration;
            config(ned.NumArmJoints+1:end) = ned.GripperConfiguration;

            if ~ned.isRobotShown()
                ned.clearFigure();
            else
                show(ned.RigidBodyTree, config, ...
                    'PreservePlot', false, ...
                    'FastUpdate', true, ...
                    'Frames','off', ...
                    'Parent',ned.robotAxes);
            end
            drawnow;
        end

        % ========================
        function clearFigure(ned)
            config = ned.HomeConfiguration;
            config(1:ned.NumArmJoints) = ned.CurrentConfiguration;
            config(ned.NumArmJoints+1:end) = ned.GripperConfiguration;

            if ned.isRobotShown
                cla(ned.robotAxes);
                show(ned.RigidBodyTree, config, ...
                    'PreservePlot', false, ...
                    'FastUpdate', true, ...
                    'Frames','off', ...
                    'Parent',ned.robotAxes);
            else
                ned.robotAxes = show(ned.RigidBodyTree, config, ...
                    'PreservePlot', false, ...
                    'FastUpdate', true, ...
                    'Frames','off');
            end
            set(ned.robotAxes.Parent,'WindowStyle','docked');
            xlim(ned.robotAxes,[-0.5 0.5])
            ylim(ned.robotAxes,[-0.5 0.5])
            zlim(ned.robotAxes,[-0.1 0.8])
        end

        % ========================
        function val = isRobotShown(ned)
            val = ~isempty(ned.robotAxes) && isvalid(ned.robotAxes);
        end

        % ========================
        function openGripper(ned)
            ned.GripperConfiguration = zeros(1,ned.NumGripperJoints);
        end

        function closeGripper(ned)
            ned.GripperConfiguration = -0.01*ones(1,ned.NumGripperJoints);
        end

        % ========================
        function img = snapshot(ned)
            img = [];
            if ned.isRobotShown()
                frame = getframe(ned.robotAxes.Parent);
                img = frame.cdata;
            else
                warning('Robot non affiché – snapshot impossible.');
            end
        end
    end
end`}</code></pre>
                </div>

                <div id="annexe2" className="mt-4">
                  <h4 className="text-primary fw-bold">Annexe 02</h4>
                  <pre className="bg-dark text-white p-3 rounded d-block mb-3"><code>{`function MoveLinear(ned, Pstart, Pend, RPY, duration, nPoints)
    arguments
        ned
        Pstart (1,3) double
        Pend (1,3) double
        RPY (1,3) double
        duration = 3
        nPoints = 50
    end

    % Interpolation linéaire en XYZ
    x = linspace(Pstart(1), Pend(1), nPoints);
    y = linspace(Pstart(2), Pend(2), nPoints);
    z = linspace(Pstart(3), Pend(3), nPoints);

    curConf = [ned.CurrentConfiguration ned.GripperConfiguration];
    traj = zeros(nPoints, ned.NumJoints);

    for i = 1:nPoints
        pos = [x(i) y(i) z(i)];
        se = se3(flip(RPY),"eul","ZYX", pos);
        sol = ned.IK("tool_link", se.tform, ned.Weight, curConf);

        traj(i,:) = sol;
        curConf = sol; % warm start IK
    end

    % Exécuter la trajectoire
    ned.PlanTrajectory(traj, duration);
end`}</code></pre>
                </div>

                <div id="annexe3" className="mt-4">
                  <h4 className="text-primary fw-bold">Annexe 03</h4>
                  <pre className="bg-dark text-white p-3 rounded d-block mb-3"><code>{`function MoveCircular(ned, Pstart, Pvia, Pend, RPY, duration, nPoints)
    arguments
        ned
        Pstart (1,3) double
        Pvia (1,3) double
        Pend (1,3) double
        RPY (1,3) double
        duration = 3
        nPoints = 60
    end

    % --- Calcul du cercle passant par 3 points ---
    A = Pstart(:); B = Pvia(:); C = Pend(:);

    % Vecteurs du plan
    AB = B - A;
    AC = C - A;
    n = cross(AB, AC);
    n = n / norm(n);

    % Base locale du cercle
    ex = AB / norm(AB);
    ey = cross(n, ex);

    % Coordonnées locales
    xB = dot(AB, ex);
    yB = dot(AB, ey);
    xC = dot(AC, ex);
    yC = dot(AC, ey);

    % Centre du cercle en 2D
    d = 2*(xB*yC - yB*xC);
    if abs(d) < 1e-6
        error("Points presque alignés → cercle impossible");
    end
    ux = ( (xB^2 + yB^2)*yC - (xC^2 + yC^2)*yB ) / d;
    uy = ( (xC^2 + yC^2)*xB - (xB^2 + yB^2)*xC ) / d;

    % Centre 3D
    O = A + ux*ex + uy*ey;

    % Angles
    vA = A - O;
    vB = B - O;
    vC = C - O;

    thetaA = 0;
    thetaB = atan2(dot(vB,ey), dot(vB,ex));
    thetaC = atan2(dot(vC,ey), dot(vC,ex));

    % Choix du bon sens (A→B→C)
    if ~(thetaA < thetaB && thetaB < thetaC) && ...
        ~(thetaA > thetaB && thetaB > thetaC)
        if thetaC > thetaA
            thetaC = thetaC - 2*pi;
        else
            thetaC = thetaC + 2*pi;
        end
    end

    theta = linspace(thetaA, thetaC, nPoints);

    % Générer trajectoire cartésienne
    traj = zeros(nPoints,3);
    for i = 1:nPoints
        traj(i,:) = (O + cos(theta(i))*ex*norm(vA) + sin(theta(i))*ey*norm(vA))';
    end

    % IK point par point
    curConf = [ned.CurrentConfiguration ned.GripperConfiguration];
    jointTraj = zeros(nPoints, ned.NumJoints);

    for i = 1:nPoints
        se = se3(flip(RPY),"eul","ZYX", traj(i,:));
        sol = ned.IK("tool_link", se.tform, ned.Weight, curConf);
        jointTraj(i,:) = sol;
        curConf = sol;
    end

    % Exécuter
    ned.PlanTrajectory(jointTraj, duration);
end`}</code></pre>
                </div>

                <div id="annexe4" className="mt-4">
                  <h4 className="text-primary fw-bold">Annexe 04</h4>
                  <pre className="bg-dark text-white p-3 rounded d-block mb-3"><code>{`function T = getFK(ned)
    % Renvoie la matrice homogène base_link -> tool_link
    config = ned.HomeConfiguration;
    config(1:ned.NumArmJoints) = ned.CurrentConfiguration;
    config(ned.NumArmJoints+1:end) = ned.GripperConfiguration;

    T = getTransform(ned.RigidBodyTree, config, "tool_link", "base_link");
end`}</code></pre>
                </div>

                <div id="annexe5" className="mt-4">
                  <h4 className="text-primary fw-bold">Annexe 05</h4>
                  <pre className="bg-dark text-white p-3 rounded d-block mb-3"><code>{`function [pos, rpy] = getTCP(ned)
    % Renvoie position + orientation (RPY) du TCP
    T = ned.getFK();
    pos = T(1:3,4)';
    rpy = rotm2eul(T(1:3,1:3),'ZYX');
end`}</code></pre>
                </div>

                <div id="annexe6" className="mt-4">
                  <h4 className="text-primary fw-bold">Annexe 06</h4>
                  <pre className="bg-dark text-white p-3 rounded d-block mb-3"><code>{`function drawTCP(ned)
    % Dessine un repère TCP dans la figure
    if ~ned.isRobotShown()
        return
    end
    T = ned.getFK();
    p = T(1:3,4);
    R = T(1:3,1:3);

    hold(ned.robotAxes,'on')

quiver3(ned.robotAxes,p(1),p(2),p(3),R(1,1),R(2,1),R(3,1),0.05,'r','LineWidth',2)
quiver3(ned.robotAxes,p(1),p(2),p(3),R(1,2),R(2,2),R(3,2),0.05,'g','LineWidth',2)
quiver3(ned.robotAxes,p(1),p(2),p(3),R(1,3),R(2,3),R(3,3),0.05,'b','LineWidth',2)

    hold(ned.robotAxes,'off')
end`}</code></pre>
                </div>

                <div id="annexe7" className="mt-4">
                  <h4 className="text-primary fw-bold">Annexe 07</h4>
                  <pre className="bg-dark text-white p-3 rounded d-block mb-3"><code>{`classdef Ned2 < handle
    properties (SetAccess = private)
        RigidBodyTree;
        CmdAction;
        ArmCmdAction;
        GripAction;
        CamTopic;
        JointNames;
        IK;
        Weight;
        UseRos logical = true;
        JointStates;
`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}