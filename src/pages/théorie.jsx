import React from 'react'

const théorie = () => {
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
          {/* 1. MODÉLISATION GÉOMÉTRIQUE */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#modelisation" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-graph-up text-primary me-2" />Modélisation géométrique
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseModelisation" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseModelisation">
              <a className="nav-link px-0 py-1 text-secondary small" href="#introduction">1. Introduction</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#architectures">2. Principales architectures</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#changements-reperes">3. Changements de repères</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#rotation-axe">4. Rotation autour d'un seul axe</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#espaces">5. Espace vectoriel vs espace articulaire</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#mgd">6. Modélisation Géométrique Directe (MGD)</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#dh">7. Convention de Denavit-Hartenberg (DH)</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#mgi">8. Modélisation Géométrique Inverse (MGI)</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#etude-ned2">9. Étude géométrique du Niryo Ned2</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 2. RÉSUMÉ ROS */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#resume-ros" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-diagram-3 text-primary me-2" />Résumé ROS
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseResumeRos" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseResumeRos">
              <a className="nav-link px-0 py-1 text-secondary small" href="#objectifs-philosophie">1. Objectifs et Philosophie de ROS</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#objectifs">a) Objectifs Principaux</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#philosophie">b) Philosophie</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#concepts-cles">2. Concepts Clés de l'Architecture</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#noeuds">a) Nœuds</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#master">b) Master</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#topics">c) Topics</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#messages">d) Messages</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#services">e) Services</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#serveur-parametres">f) Serveur de Paramètres</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#package">g) Package</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#outils-ecosysteme">3. Outils et Écosystème</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#outils">a) Outils</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#bibliotheques">b) Écosystème</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#limites">4. Limites de ROS</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#cours">5. Lien vers un cours complet ROS</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* FIGURES */}
          {/* ============================================ */}
          <div className="border-top mt-3 pt-2" />
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <span style={{cursor: 'default'}}>
                <i className="bi bi-image text-primary me-2" />Figures
              </span>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseFigures" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseFigures">
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
            </div>
          </div>
          
          {/* ============================================ */}
          {/* TABLEAUX */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <span style={{cursor: 'default'}}>
                <i className="bi bi-table text-primary me-2" />Tableaux
              </span>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseTableaux" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseTableaux">
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau21">Tableau 21</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau22">Tableau 22</a>
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
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-graph-up" /> MODÉLISATION GÉOMÉTRIQUE</h2>
        <div id="introduction" className="mt-3">
          <h3 className="text-dark fw-bold">1. Introduction</h3>
          <p>Un robot est un système mécanique poly-articulé (corps rigides interconnectés par des liaisons), mu par des actionneurs et commandé par un calculateur.<br />
            Un corps libre dans l'espace possède <strong>6 degrés de liberté (DDL)</strong> : 3 translations et 3 rotations.</p>
          <ul>
            <li>Trois translations</li>
            <li>Trois rotations</li>
          </ul>
          <p>Un solide possède au maximum 6 DDL qui décroît à mesure que le mouvement est contraint par des articulations le liant à d'autres solides.</p>
          <h5 className="mt-3">Liaisons élémentaires utilisés en robotique</h5>
          <p>Contrairement en mécanique où on parle de pivot, glissière ou encore de rotule par exemple, en robotique on utilise que deux liaisons élémentaires :</p>
          <div id="figure34" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure34.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 34 : Schéma d'une prismatique</p>
          <ul>
            <li><strong>Prismatique (≡ glissière) notée P :</strong> Seulement 1 DDL, valeur articulaire : q = longueur [m]</li>
          </ul>
          <div id="figure35" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure35.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 35 : Schéma d'une rotoïde</p>
          <ul>
            <li><strong>Rotoïde (≡ Pivot) notée R :</strong> Seulement 1 DDL, valeur articulaire q = angle [rad ou °]</li>
          </ul>
          <p>Pour modéliser des articulations de DDL &gt; 1, nous avons recours à une succession de P ou R.</p>
        </div>
        <div id="architectures" className="mt-5">
          <h3 className="text-dark fw-bold">2. Principales architectures</h3>
          <div id="figure36" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure36.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 36 : Architectures principales de différents bras robotisés</p>
        </div>
        <div id="changements-reperes" className="mt-5">
          <h3 className="text-dark fw-bold">3. Changements de repères</h3>
          <p>En mathématique, pour changer de repère, on utilise la relation de Chasles, mais en robotique on utilise la relation suivante :</p>
          <div id="figure37" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure37.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 37 : Schéma montrant le changement de repère</p>
          <p>L'équation ci-dessus sert à passer du repère 1 au repère 2. Mais si on souhaite passer du repère 2 à 1, par de simples manipulations mathématiques, on obtient :</p>
          <div id="figure38" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure38.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 38 : Changement de repère</p>
          <div id="figure39" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure39.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 39 : Matrice de rotation inverse dans le cas où R0 et R1 sont orthonormé</p>
          <p>Ces expressions sont toujours valables, cependant, quand on passe par un nombre élevé de repères, ça en devient compliqué.<br /> C'est pourquoi on utilise la transformation homogène :</p>
          <div id="figure40" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure40.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 40 : Équations permettant de calculer des changements de repères</p>
          <p>La matrice A<sub>i,i+1</sub> est appelée matrice de transformation homogène de taille 4*4.</p>
          <div id="figure41" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure41.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 41 : Matrice de transformation homogène</p>
        </div>
        <div id="rotation-axe" className="mt-5">
          <h3 className="text-dark fw-bold">4. Rotation autour d'un seul axe</h3>
          <div id="figure42" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure42.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 42 : Rotation autour d'un axe</p>
          <p>Pour calculer la matrice M<sub>01</sub> autour d'un seul axe, on peut utiliser les matrices préremplies suivantes :</p>
          <div id="figure43" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure43.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 43 : Matrices de rotation autour d'un axe</p>
          <p>Cependant, l'orientation d'un repère par rapport à un autre peut être décrite de manière suffisante par 3 rotations successives.</p>
          <h5 className="mt-3">Angles d'Euler :</h5>
          <p>6 séquences disponibles :</p>
          <div id="figure44" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure44.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 44 : Séquences d'Euler</p>
          <h5 className="mt-3">Angles de Bryant (autre convention) :</h5>
          <p>Dans cette convention, on utilise les termes Roulis, Tangage, Lacet.</p>
          <div id="figure45" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure45.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 45 : Repère des angles de Bryant</p>
          <div className="alert alert-warning mt-3">
            <i className="bi bi-exclamation-triangle-fill" /> <strong>ATTENTION :</strong>
            <ul className="mt-2 mb-0">
              <li>La combinaison de deux rotations successives n'est pas commutative.</li>
              <li>Par convention, les repères en robotique sont des tétraèdres directs.</li>
              <li>Convention des signes des angles de rotation autour d'un axe (+ ⇒ positif) :<br />
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
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 240}}>
                <p className="mb-0">On appelle « <strong>espace opérationnel</strong> » ou « <strong>espace utilisateur</strong> » l'espace dans lequel est représenté la position de l'effecteur.<br /><br />
                  Dans ce cas, les coordonnées (cartésiennes, cylindriques ou sphériques) de l'effecteur (position et orientation) sont décrites dans un repère fixe appelé base (généralement lié au bâti).</p>
              </div>
            </div>
            <div className="col-md-6">
              <div id="figure46" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 240}}>
                <img src="images/Figure46.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 46 : Schématique d'une pince articulée</p>
            </div>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 240}}>
                <p className="mb-0">On appelle « <strong>espace articulaire</strong> » ou « <strong>espace de configuration</strong> » d'un robot l'espace défini par l'ensemble des variables articulaires.<br />
                  On note <strong>q(t)</strong> les <strong>variables articulaires</strong>.<br /><br />
                  On appelle « <strong>configuration articulaire</strong> » d'un robot l'état de l'ensemble de ses variables articulaires.<br /><br />
                  <strong>Vecteur de configuration articulaire :</strong><br />
                  q(t) = [q₁(t) ··· qᵢ(t) ··· qₙ(t)]ᵀ</p>
              </div>
            </div>
            <div className="col-md-6">
              <div id="figure47" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 240}}>
                <img src="images/Figure47.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 47 : Schématique d'une pince articulée</p>
            </div>
          </div>
          <p id="tableau21" className="text-center small mt-1">Tableau 21 : Tableau définissant un espace opérationnel et un espace articulaire.</p>
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
          <p>De manière moins formel : On part des articulations et on va jusqu'à l'effecteur.<br /> On cherche à déterminer la position et l'orientation de l'effecteur final à partir des variables d'articulations.</p>
          <p>A partir de la matrice de transformation homogène on détermine les paramètres du MGD :</p>
          <div id="figure48" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure48.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 48 : Matrice de transformation homogène</p>
          <p>Le MGD est utilisé pour caractériser le fonctionnement d'un bras manipulateur. Concrètement, 
            il permet de calculer la configuration de l'effecteur du robot en fonction de la position de chaque moteur (liaison) du robot.</p>
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
          <div id="figure49" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure49.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 49 : Schéma de changement de repère</p>
          <div id="figure50" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure50.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 50 : Matrices de changements de repères</p>
          <p>Et on obtient la matrice de transformation homogène suivante :</p>
          <div id="figure51" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure51.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
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
              <thead className="table-primary"><tr><th>Liaison</th><th>θ<sub>i</sub></th><th>d<sub>i</sub></th><th>a<sub>i</sub></th><th>α<sub>i</sub></th></tr></thead>
              <tbody>
                <tr><td /><td /><td /><td /><td /></tr>
                <tr><td /><td /><td /><td /><td /></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 22 : Tableau à remplir lorsqu'on utilise la convention de Denavit-Hartenberg.</p>
          <p>Les équations sont des fonctions non-linéaires des variables des articulations. Dans l'étude du MGD (mais également du MGI), on utilise les conventions de DH afin de simplifier les calculs car on a plus que 4 paramètres au lieu de 6.</p>
          <div id="figure52" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure52.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 52 : Schéma générique d'asservissement de position d'un robot avec le MGD</p>
          <p><strong>PROBLÈME :</strong> la loi de commande devrait permettre de fournir les signaux de commande aux moteurs de chacune des articulations du robot sur la base des seules coordonnées opérationnelles de l'organe terminal !<br />
            → Modélisation Géométrique Inverse MGI.</p>
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
            <i className="bi bi-exclamation-triangle-fill" /> La MGI est plus difficile à résoudre que la MGD.
          </div>
          <p>Il se peut que la MGI n'ait pas de solution, une solution ou encore plusieurs solutions.<br />
            Mais pour pouvoir obtenir la MGI, on cherche à obtenir des formes fermées plutôt que des solutions
            numériques pour deux raisons :</p>
          <ul>
            <li>Dans certaines applications tel que le suivie d'une ligne de soudure par un système de vision, les équations du MGI peuvent être résolue à un taux rapide, toutes les 20ms et avoir une expression sous la forme fermée est mieux que de chercher une expression itérative.</li>
            <li>La MGI a en générale plusieurs solutions mais avoir des solutions sous forme fermée permet de développer des règles pour choisir une solution plutôt que plusieurs.</li>
          </ul>
          <p>Les solutions sous formes fermées sont plus rapides que les solutions numériques mais elles sont dépendantes du robot (non générales).</p>
          <p><strong>Problème :</strong> la modélisation géométrique n'est pas bijective. Les solutions <strong>q</strong> du MGI peuvent être multiples pour une configuration <strong>X</strong> de l'effecteur donnée.</p>
          <div id="figure53" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure53.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
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
            <p>Although the general problem of inverse kinematics is quite difficult, it turns out that for manipulators having six joints, 
              with the last three joints intersecting at a point (such as the Stanford Manipulator above), 
              it is possible to decouple the inverse kinematics problem into two simpler problems, known respectively, as 
              <strong>inverse position kinematics</strong>, and <strong>inverse orientation kinematics</strong>. To put it another way, 
              for a six-DOF manipulator with a spherical wrist, the inverse kinematics problem may be separated into two simpler problems, 
              namely first finding the position of the intersection of the wrist axes, hereafter called the <strong>wrist center</strong>, 
              and then finding the orientation of the wrist.</p>
          </div>
          <p className="text-center small mt-1">Figure 54 : Passage du document "Spong-RobotmodellingandControl_Hutchinson"</p>
          <p>Cet extrait explique que pour un robot 6 axes, comme le Niryo Ned2, on peut découper le problème de la MGI en deux points :</p>
          <ul>
            <li><strong>Modélisation inverse de position :</strong> les 3 premiers axes (base, épaule, coude) servent principalement à amener le centre du poignet (wrist center) à la bonne position.<br />
              Le centre du poignet est défini comme le point où se coupent les trois derniers axes (ceux du poignet).</li>
            <li><strong>Modélisation inverse d'orientation :</strong> une fois le poignet au bon endroit, les 3 derniers axes (poignet 1, poignet 2, poignet 3) permettent d'orienter l'effecteur où l'on souhaite.<br />
              Comme ces axes se coupent en un seul point, ils peuvent générer toutes les orientations possibles autour du centre du poignet (poignet sphérique). Sur le Ned2, ça sert à tourner, incliner ou faire pivoter la pince.</li>
          </ul>
          <p>Le schéma suivant montre où sont placé les articulations (base, épaule, etc.) et la partie position et orientation.</p>
          <div id="figure55" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
            <img src="images/Figure55.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
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
          <div id="figure56" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure56.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 56 : Modélisation du robot Niryo Ned2</p>
          <div id="figure57" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure57.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 57 : Tableau de Denavit-Hartenberg</p>
        </div>
      </div>
      {/* résumé ros */}
      <div id="resume-ros" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-diagram-3" /> RÉSUMÉ ROS</h2>
        <p><strong>Le Robot Operating System (ROS)</strong> est un <strong>méta système d'exploitation (ou middleware)</strong> conçu spécifiquement pour la robotique. Il vise à simplifier le développement d'applications robotiques complexes en fournissant des services d'OS et des fonctionnalités de haut niveau.</p>
        {/* ============================================ */}
        {/* 1. OBJECTIFS ET PHILOSOPHIE DE ROS */}
        {/* ============================================ */}
        <div id="objectifs-philosophie" className="mt-3">
          <h3 className="text-dark fw-bold">1. Objectifs et Philosophie de ROS</h3>
          <div id="objectifs">
            <h4 className="fw-bold mt-3">a) Objectifs Principaux</h4>
            <p>L'objectif fondamental de ROS est de <strong>soutenir la réutilisation de code (code reuse)</strong> en recherche et développement robotique. L'idée est d'<strong>arrêter de réinventer la roue</strong> en mutualisant les briques logicielles élémentaires.</p>
          </div>
          <div id="philosophie">
            <h4 className="fw-bold mt-3">b) Philosophie</h4>
            <ul>
              <li><strong>Open Source et Gratuit :</strong> ROS est distribué sous licence BSD.</li>
              <li><strong>Architecture Microkernel :</strong> Plutôt que d'être un environnement d'exécution monolithique, ROS utilise un grand nombre d'outils et d'exécutables indépendants (Nœuds). Le crash d'un nœud n'affecte pas l'ensemble du système, le rendant plus robuste et évolutif.</li>
              <li><strong>Multi-langages :</strong> Il supporte nativement C++ et Python, mais aussi d'autres langages comme Octave, LISP, et Java.</li>
              <li><strong>Communication Distribuée :</strong> Les composants communiquent en utilisant une architecture distribuée peer-to-peer après une négociation initiale via le Master.</li>
            </ul>
          </div>
        </div>
        {/* ============================================ */}
        {/* 2. CONCEPTS CLÉS DE L'ARCHITECTURE */}
        {/* ============================================ */}
        <div id="concepts-cles" className="mt-5">
          <h3 className="text-dark fw-bold">2. Concepts Clés de l'Architecture</h3>
          <p>L'architecture de ROS est structurée autour de quatre grands mécanismes : <strong>la Plomberie</strong>, <strong>les Outils</strong>, <strong>les Capacités</strong> et <strong>l'Écosystème</strong>. La "Plomberie" (mécanismes de communication) est la base du système.</p>
          <div id="noeuds">
            <h4 className="fw-bold mt-3">a) Nœuds (Nodes)</h4>
            <p>Les Nœuds sont des programmes indépendants, instances d'un exécutable, représentant une unité de traitement spécifique (par exemple, un algorithme de planification ou un pilote de capteur/moteur).</p>
          </div>
          <div id="master">
            <h4 className="fw-bold mt-3">b) Master (ROS Master)</h4>
            <p>Le Master est le service d'enregistrement et de déclaration des nœuds (un name service). Il permet aux nœuds de se connaître et de se mettre en contact pour échanger de l'information.</p>
          </div>
          <div id="topics">
            <h4 className="fw-bold mt-3">c) Topics (Communication Asynchrone)</h4>
            <p>Un <strong>Topic</strong> est un canal de communication <strong>unidirectionnel</strong> de type many-to-many (plusieurs émetteurs pour plusieurs récepteurs).<br />
              Un nœud peut être <strong>Publisher</strong> (émetteur) sur un ou plusieurs topics.<br />
              Un nœud peut être <strong>Subscriber</strong> (récepteur) sur un ou plusieurs topics.<br />
              Les Topics transmettent des <strong>Messages</strong>.</p>
          </div>
          <div id="messages">
            <h4 className="fw-bold mt-3">d) Messages</h4>
            <p>Un <strong>Message</strong> est une structure de données typée (entiers, flottants, strings, ou d'autres messages complexes). Il définit le format de l'information échangée via les Topics.</p>
          </div>
          <div id="services">
            <h4 className="fw-bold mt-3">e) Services</h4>
            <p>Les <strong>Services</strong> permettent une communication de type <strong>synchrone</strong> (requête/réponse) entre deux nœuds. Ils sont utilisés lorsqu'il est nécessaire d'envoyer une donnée et d'attendre immédiatement le résultat d'un calcul. Contrairement aux Topics, un seul nœud peut se déclarer comme un Service sous un nom donné.</p>
          </div>
          <div id="serveur-parametres">
            <h4 className="fw-bold mt-3">f) Serveur de Paramètres</h4>
            <p>C'est une <strong>mémoire partagée</strong> qui permet de définir et de gérer des <strong>paramètres globaux</strong> (gains de contrôleur, noms de répertoires, etc.). Ces paramètres sont accessibles et modifiables par l'ensemble des nœuds, y compris en temps réel.</p>
          </div>
          <div id="package">
            <h4 className="fw-bold mt-3">g) Package</h4>
            <p>Un <strong>Package</strong> est l'unité d'organisation et de distribution dans ROS. Il s'agit d'un répertoire contenant le code, les messages, les services, les fichiers de lancement, et le fichier package.xml qui spécifie ses dépendances.</p>
          </div>
        </div>
        {/* ============================================ */}
        {/* 3. OUTILS ET ÉCOSYSTÈME */}
        {/* ============================================ */}
        <div id="outils-ecosysteme" className="mt-5">
          <h3 className="text-dark fw-bold">3. Outils et Écosystème</h3>
          <div id="outils">
            <h4 className="fw-bold mt-3">a) Outils (Software Tools)</h4>
            <p>ROS fournit une suite d'outils graphiques et en ligne de commande essentiels pour le développement et le débogage :</p>
            <ul>
              <li><strong>RViz :</strong> Interface graphique de visualisation 3D des modèles de robots, des cartes de navigation et des données de capteurs (images, nuages de points 3D).</li>
              <li><strong>Gazebo :</strong> Un simulateur dynamique complet permettant de modéliser la physique (inerties, frottements) d'un environnement et d'un robot en 3D.</li>
              <li><strong>rosbag/rxbag :</strong> Outil permettant d'enregistrer des séquences de données Topics et de les rejouer ultérieurement.</li>
              <li><strong>rqt_graph/rqt_plot :</strong> Outils pour visualiser le graphe des communications entre les nœuds (rqt_graph) et tracer l'évolution des données transmises sur un Topic (rqt_plot).</li>
            </ul>
          </div>
          <div id="bibliotheques">
            <h4 className="fw-bold mt-3">b) Écosystème (Libraries &amp; Standards)</h4>
            <ul>
              <li><strong>URDF :</strong> Unified Robot Description Format, un format XML standardisé pour décrire l'arbre cinématique, la géométrie, la dynamique et les capteurs d'un robot.</li>
              <li><strong>KDL :</strong> Librairie pour le calcul de la géométrie et la cinématique des robots.</li>
              <li><strong>MoveIt! :</strong> Framework pour la planification de trajectoires.</li>
              <li><strong>SLAM :</strong> Algorithmes de Self Localization and Map building (Cartographie et Localisation Simultanées) pour construire une carte 2D et localiser le robot.</li>
            </ul>
          </div>
        </div>
        {/* ============================================ */}
        {/* 4. LIMITES DE ROS */}
        {/* ============================================ */}
        <div id="limites" className="mt-5">
          <h3 className="text-dark fw-bold">4. Limites de ROS</h3>
          <p>La principale limitation de ROS est qu'il <strong>n'est pas temps-réel</strong>.
            Il existe un délai a priori inconnu entre l'envoi et la réception des messages.
            De plus, le code tend à devenir dépendant de ROS, bien que la bonne pratique consiste à maximiser l'écriture de bibliothèques sans ROS.
            <br /> Il fonctionne essentiellement sous <strong>Ubuntu</strong>.</p>
        </div>
        {/* ============================================ */}
        {/* 5. LIEN VERS UN COURS COMPLET ROS */}
        {/* ============================================ */}
        <div id="cours" className="mt-5">
          <h3 className="text-dark fw-bold">5. Lien vers un cours complet ROS</h3>
          <p>Pour votre rapport, vous pouvez citer les tutoriels officiels de la documentation ROS qui couvrent l'installation et les concepts de base pas à pas :<br />
            <strong>Tutoriels officiels ROS (en français) :</strong> <a href="https://wiki.ros.org/fr/ROS/Tutorials">Introduction à ROS - Séminaire VAUL / Norlab #3.</a></p>
          <p>Pour une introduction en vidéo aux concepts de ROS, ce séminaire offre un bon aperçu :<br />
            <a href="https://www.youtube.com/watch?v=vAb5SnaJbF0">Introduction à ROS - Séminaire VAUL / Norlab #3</a></p> 
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default théorie