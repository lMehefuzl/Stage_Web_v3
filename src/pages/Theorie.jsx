import React from 'react'

const Theorie = () => {
  return (
<div className="container-fluid px-0 px-md-3 mb-5">
  <div className="row g-0 g-md-4 mx-0">
    {/* side bar */}
    <div className="col-md-3 ps-0 pe-0 pe-md-2">
        <div className="bg-white rounded-3 shadow-sm p-3 me-0 me-md-2" style={{ position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto' }}>
            <h5 className="text-primary mb-3 pb-2 border-bottom">
                <i className="bi bi-list-ul"></i> Sommaire
            </h5>
            <nav className="nav flex-column">
                
                {/* ============================================ */}
                {/* 1. MODÉLISATION GÉOMÉTRIQUE */}
                {/* ============================================ */}
                <div className="mb-2">
                    <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
                        <a href="#modelisation" className="text-dark text-decoration-none" style={{ cursor: 'pointer' }}>
                            <i className="bi bi-graph-up text-primary me-2"></i>Modélisation géométrique
                        </a>
                        <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseModelisation" aria-expanded="false" style={{ cursor: 'pointer' }}></i>
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
                {/* 2. CINÉMATIQUE DIRECTE (MGD) */}
                {/* ============================================ */}
                <div className="mb-2">
                    <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
                        <a href="#cinematique-directe" className="text-dark text-decoration-none" style={{ cursor: 'pointer' }}>
                            <i className="bi bi-arrow-right-circle text-primary me-2"></i>Cinématique directe (MGD)
                        </a>
                        <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseCinematiqueDirecte" aria-expanded="false" style={{ cursor: 'pointer' }}></i>
                    </div>
                    <div className="collapse ps-4" id="collapseCinematiqueDirecte">
                        <a className="nav-link px-0 py-1 text-secondary small" href="#fk-intro">1. Introduction à la cinématique</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#ciné_direct_et_inverse">3. Cinématique directe et inverse</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#fk-exemple">4. Exemple : Robot 2R plan</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#fk-regles">5. Règles préliminaires — Attribution des repères</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#fk-homogene">6. Matrice de transformation homogène</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#convention_hartenberg">7. Convention de Denavit-Hartenberg (DH)</a>
                    </div>
                </div>
                
                {/* ============================================ */}
                {/* 3. CINÉMATIQUE INVERSE (MGI) */}
                {/* ============================================ */}
                <div className="mb-2">
                    <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
                        <a href="#cinematique-inverse" className="text-dark text-decoration-none" style={{ cursor: 'pointer' }}>
                            <i className="bi bi-arrow-left-circle text-primary me-2"></i>Cinématique inverse (MGI)
                        </a>
                        <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseCinematiqueInverse" aria-expanded="false" style={{ cursor: 'pointer' }}></i>
                    </div>
                    <div className="collapse ps-4" id="collapseCinematiqueInverse">
                        <a className="nav-link px-0 py-1 text-secondary small" href="#commande">1. Commande des robots articulés</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#definition">2. Modèle géométrique inverse (MGI)</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#methodes">3. Méthodes de calcul du MGI</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#de_paul">4. Méthode de Paul</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mcd_fin">5. Modèle cinématique direct (MCD)</a>
                    </div>
                </div>
                
                {/* ============================================ */}
                {/* 4. RÉSUMÉ ROS */}
                {/* ============================================ */}
                <div className="mb-2">
                    <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
                        <a href="#resume-ros" className="text-dark text-decoration-none" style={{ cursor: 'pointer' }}>
                            <i className="bi bi-diagram-3 text-primary me-2"></i>Résumé ROS
                        </a>
                        <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseResumeRos" aria-expanded="false" style={{ cursor: 'pointer' }}></i>
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
                <div className="border-top mt-3 pt-2"></div>
                
                <div className="mb-2">
                    <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
                        <span style={{ cursor: 'default' }}>
                            <i className="bi bi-image text-primary me-2"></i>Figures
                        </span>
                        <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseFigures" aria-expanded="false" style={{ cursor: 'pointer' }}></i>
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
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd01">MGD 01</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd02">MGD 02</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd021">MGD 021</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd08">MGD 08</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd09">MGD 09</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd10">MGD 10</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd11">MGD 11</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd12">MGD 12</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd13">MGD 13</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd14">MGD 14</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd15">MGD 15</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd16">MGD 16</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd17">MGD 17</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd18">MGD 18</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd19">MGD 19</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd20">MGD 20</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd21">MGD 21</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd22">MGD 22</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd23">MGD 23</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd24">MGD 24</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd25">MGD 25</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd27">MGD 27</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd28">MGD 28</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd29">MGD 29</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd31">MGD 31</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd32">MGD 32</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd33">MGD 33</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd34">MGD 34</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd35">MGD 35</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd37">MGD 37</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd38">MGD 38</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgd40">MGD 40</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi01">MGI 01</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi02">MGI 02</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi03">MGI 03</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi05">MGI 05</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi07">MGI 07</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi08">MGI 08</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi09">MGI 09</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi11">MGI 11</a>
                        <a className="nav-link px-0 py-1 text-secondary small" href="#mgi13">MGI 13</a>
                    </div>
                </div>
                
                {/* ============================================ */}
                {/* TABLEAUX */}
                {/* ============================================ */}
                <div className="mb-2">
                    <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
                        <span style={{ cursor: 'default' }}>
                            <i className="bi bi-table text-primary me-2"></i>Tableaux
                        </span>
                        <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseTableaux" aria-expanded="false" style={{ cursor: 'pointer' }}></i>
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

      <div>
        {/* ============================================ */}
        {/* CINÉMATIQUE DIRECTE (nouveau — diapo MGD) */}
        {/* ============================================ */}
        <div id="cinematique-directe" className="bg-white rounded-3 shadow-sm p-4 mb-4">
          <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-arrow-right-circle" /> CINÉMATIQUE DIRECTE (MGD)</h2>
          {/* 1. INTRODUCTION */}
          <div id="fk-intro" className="mt-3">
            <h3 className="text-dark fw-bold">1. Introduction à la cinématique</h3>
            <p>La cinématique est une description du mouvement du manipulateur <strong>sans considération des forces et des couples</strong> qui provoquent le mouvement.</p>
            <p><strong>Sujet principal :</strong> étude de la position et de l'orientation de l'effecteur terminal par rapport à la base du manipulateur <strong>en fonction des variables articulaires</strong>.</p>
            <div className="border rounded bg-light p-3 mt-3">
              <p className="mb-1"><strong>Cinématique directe :</strong> étant donnés les différents paramètres articulaires et de segments, calculer la localisation de l'effecteur terminal (outil) dans l'espace de tâche.</p>
              <p className="mb-1">Pour la cinématique directe, nous avons les <strong>variables articulaires</strong>
              </p><div className="border rounded bg-light p-2 mt-2 d-flex align-items-center justify-content-center" style={{height: 120}}>
                <img src="images/mgd01.png" alt="Schéma cinématique directe : variables articulaires en entrée, position effecteur en sortie — diapo MGD slide 13" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            <div className="border rounded bg-light p-3 mt-3">
              <p className="mb-1"><strong>Cinématique inverse :</strong> Pour la inverse cinématique inverse, position et orientation de l'effecteur terminal </p>
              <div className="border rounded bg-light p-2 mt-2 d-flex align-items-center justify-content-center" style={{height: 120}}>
                <img src="images/mgd02.png" alt="Schéma cinématique inverse : position effecteur en entrée, variables articulaires en sortie — diapo MGD slide 14" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
          {/* 3. DÉFINITION CINÉMATIQUE DIRECTE / INVERSE */}
          <div id="ciné_direct_et_inverse" className="mt-5">
            <h3 className="text-dark fw-bold">3. Cinématique directe et inverse</h3>
            <div className="row align-items-center mt-3">
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
                <div className="col-6 ms-5">
                  <strong>Cinématique directe</strong>
                  <div className="mt-1">
                    <div>x₁ = l · cos(θ)</div>
                    <div>y₁ = l · sin(θ)</div>
                  </div>
                  <br />
                  <strong>Cinématique inverse</strong>
                  <div className="mt-1">
                    <div>θ = cos⁻¹(x₁ / l)</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="col-md-5 text-center">
                    <img src="images/mgd021.png" alt="Schéma cinématique" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4. EXEMPLE 2R PLAN */}
          <div id="fk-exemple" className="mt-5">
            <h3 className="text-dark fw-bold">4. Exemple : Robot 2R plan</h3>
            <p>Étant données les variables articulaires et les dimensions des segments, quelle est la position et l'orientation de l'effecteur terminal ?</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
              <img src="images/mgd08.png" alt="Robot 2R plan avec angles q1, q2 et longueurs a1, a2 — diapo MGD slide 16" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="mt-3"><strong>Étape 1 :</strong> Choisir le repère de base du robot afin d'exprimer (x<sub>2</sub>, y<sub>2</sub>) dans ce repère.</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
              <img src="images/mgd09.png" alt="Robot 2R plan avec repère de base x0, y0 et point (x2, y2) inconnu — diapo MGD slide 17" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="mt-3"><strong>Étape 2 :</strong> Remarquer que le segment 1 se déplace dans un cercle centré sur l'origine du repère de base. On peut définir la position de x<sub>1</sub> et y<sub>1</sub> :</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
              <img src="images/mgd10.png" alt="Robot 2R plan : position du segment 1 exprimée en (a1 cos q1, a1 sin q1) — diapo MGD slide 18" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="mt-3"><strong>Étape 3 :</strong> Choisir un repère dont l'origine est située sur l'articulation 2 avec la même orientation que le repère de base.</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
              <img src="images/mgd11.png" alt="Robot 2R plan : repère 1 (x1,y1) centré sur l'articulation 2 avec même orientation que le repère de base — diapo MGD slide 19" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="mt-3"><strong>Étape 4 :</strong> Remarquer que le segment 2 se déplace dans un cercle centré sur le repère 1. La position de l'extrémité du segment 2 dans le repère 1 est :</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
              <img src="images/mgd12.png" alt="Robot 2R plan : position segment 2 dans repère 1 — (a2 cos(q1+q2), a2 sin(q1+q2)) — diapo MGD slide 20" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="mt-3"><strong>Résultat final :</strong> Parce que le repère de base et le repère 1 ont la même orientation, on peut additionner les coordonnées pour trouver la position de l'effecteur terminal dans le repère de base :</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1 mt-2" style={{height: 220}}>
              <img src="images/mgd13.png" alt="Robot 2R plan : position finale de l'effecteur dans le repère de base avec formules x2 et y2 — diapo MGD slide 21" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
          </div>
          {/* 5. RÈGLES PRÉLIMINAIRES */}
          <div id="fk-regles" className="mt-5">
            <h3 className="text-dark fw-bold">5. Règles préliminaires — Attribution des repères</h3>
            <ul>
              <li>Pour effectuer l'analyse cinématique, nous attachons rigidement un repère à chaque segment.<br />
                En particulier, nous attachons <strong>(o<sub>i</sub>, x<sub>i</sub>, y<sub>i</sub>, z<sub>i</sub>)</strong> au segment i</li>
              <li>Cela signifie que, quel que soit le mouvement exécuté par le robot, les coordonnées de chaque point sur le segment i sont constantes lorsqu'elles sont exprimées dans le 
                i<sup>ème</sup> repère</li>
              <li>Lorsque l'articulation i est actionnée, le segment i et son repère attaché <strong>(o<sub>i</sub>, x<sub>i</sub>, y<sub>i</sub>, z<sub>i</sub>)</strong> subissent un mouvement résultant</li>
              <li>Le repère <strong>(o<sub>0</sub>, x<sub>0</sub>, y<sub>0</sub>, z<sub>0</sub>)</strong> attaché à la base du robot est appelé <strong>repère inertiel</strong></li>
            </ul>
          </div>
          {/* 6. MATRICE DE TRANSFORMATION HOMOGÈNE */}
          <div id="fk-homogene" className="mt-5">
            <h3 className="text-dark fw-bold">6. Matrice de transformation homogène</h3>
            <p>La matrice homogène est une <strong>combinaison d'une matrice de rotation et d'un vecteur de déplacement</strong>.<br />
              Cette matrice cinématique est représentée par la lettre <strong>H</strong>.<br />
              Elle donne à la fois la rotation et la position d'un repère par rapport à un autre repère.</p>
            <div id="fk-projection">
              <h4 className="fw-bold mt-3"> Projection vectorielle</h4>
              <h5 className="mt-3">En 2D :</h5>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
                <img src="images/mgd14.png" alt="Projection vectorielle 2D : vecteur V projeté sur X0 et Y0 avec angle θ — diapo MGD slide 24" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <h5 className="mt-3">En 3D :</h5>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
                <img src="images/mgd15.png" alt="Projection vectorielle 3D : vecteur V projeté sur X0, Y0, Z0 — diapo MGD slide 25" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            <div id="fk-rotation-mat">
              <h4 className="fw-bold mt-3"> Matrices de rotation</h4>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
                <img src="images/mgd16.png" alt="Matrices de rotation autour de Z avec projections de X1 et Y1 sur X0Y0Z0 — diapo MGD slide 26" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              {/* Suite de  Matrices de rotation — à partir du slide 27 */}
              <h5 className="mt-4">Exemple : Trouver la matrice de rotation du repère 2 par rapport au repère de base 0</h5>
              {/* Slide 27 */}
              <p>Le diagramme cinématique suivant présente un robot RRR avec les repères 0, 1 et 2. L'objectif est de trouver :</p>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
                <img src="images/mgd17.png" alt="Diagramme cinématique robot RRR : axes Z0 Y0 X0, Z1 θ1 a1 Y1 X1, Z2 θ2 Y2 X2 avec distances a2 a3 a4 — diapo MGD slide 27" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              {/* Slide 28 */}
              <p className="mt-3"><strong>Étape 1 — Matrice de rotation du repère de base vers le premier repère :</strong><br />
              </p><div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
                <img src="images/mgd18.png" alt="Rotation autour de Z0 avec variable articulaire θ1 — matrice de rotation Z utilisée — diapo MGD slide 28" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              {/* Slide 29 */}
              <p className="mt-3">Dans la première configuration, avant la rotation, l'angle articulaire est nul : il n'y a pas de rotation du repère 1 par rapport au repère 0. Dans le diagramme cinématique, x₁, y₁ et z₁ sont tous dans exactement les mêmes directions que x₀, y₀ et z₀. On utilise donc la <strong>matrice identité</strong> :</p>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
                <img src="images/mgd19.png" alt="Configuration initiale angle nul : matrice identité, puis matrice de rotation complète du repère 0 vers le repère 1 — diapo MGD slide 29" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              {/* Slide 30 */}
              <p className="mt-3"><strong>Étape 2 — Matrice de rotation du repère 1 vers le repère 2 :</strong><br />
                Dans le diagramme cinématique, x₂, y₂ et z₂ sont tous dans exactement les mêmes directions que x₁, y₁ et z₁. La matrice de rotation complète du repère 1 vers le repère 2 est obtenue de la même manière que l'étape précédente.</p>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
                <img src="images/mgd20.png" alt="Matrice de rotation complète du repère 1 vers le repère 2 — diapo MGD slide 30" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              {/* Slide 31 */}
              <p className="mt-3"><strong>Résultat — Matrice de rotation du repère de base vers le repère 2 :</strong></p>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
                <img src="images/mgd21.png" alt="Matrice de rotation totale repère 0 vers repère 2 avec X2=Y0, Y2=-X0, Z2=Z0 — diapo MGD slide 31" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              {/* Slide 32 */}
              <h5 className="mt-4">Exemple : RRR</h5>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
                <img src="images/mgd22.png" alt="Robot RRR avec repères z0,z1,z2,z3 et angles q1,q2,q3, axes x0,y0,x1,y1,x2,y2,x3,y3 — diapo MGD slide 32" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              {/* Slide 33 */}
              <p className="mt-3">Matrices de rotation complètes pour le robot RRR en appliquant la méthode à chaque articulation successivement :</p>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
                <img src="images/mgd23.png" alt="Matrices de rotation complètes du robot RRR pour chaque articulation — diapo MGD slide 33" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            {/*  Vecteur de déplacement — Slide 34 */}
            <div id="fk-deplacement">
              <h4 className="fw-bold mt-4"> Vecteur de déplacement</h4>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
                <img src="images/mgd24.png" alt="Vecteur de déplacement entre repère de base et repère 1 : axes Z0 X1 Y0 X0 Z1 Y1 avec θ1, distances a1 et a2 — diapo MGD slide 34" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            {/*  Matrice complète — Slide 35 */}
            <div id="fk-complete">
              <h4 className="fw-bold mt-4"> Matrice de transformation homogène complète</h4>
              <p>On construit la matrice de transformation homogène en insérant la matrice de rotation et le vecteur de déplacement :</p>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
                <img src="images/mgd25.png" alt="Matrice de transformation homogène 4x4 complète avec bloc rotation 3x3 et vecteur déplacement 3x1 plus ligne du bas — diapo MGD slide 35" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              {/* Slide 36 */}
              <div className="alert alert-info mt-3">
                <i className="bi bi-info-circle-fill" /> <strong>Ressources vidéo complémentaires :</strong><br />
                <a href="https://www.youtube.com/watch?v=tAu8-gkxAcE" target="_blank">https://www.youtube.com/watch?v=tAu8-gkxAcE</a><br />
                <a href="https://www.youtube.com/watch?v=PBD06Toaymw" target="_blank">https://www.youtube.com/watch?v=PBD06Toaymw</a>
              </div>
            </div>
          </div>
          {/* 7. CONVENTION DE DENAVIT-HARTENBERG */}
          <div id="convention_hartenberg" className="mt-5">
            <h3 className="text-dark fw-bold">7. Convention de Denavit-Hartenberg (DH)</h3>
            <p>Étapes pour dériver le modèle cinématique :</p>
            <ol>
              <li>Attribuer les repères D-H</li>
              <li>Trouver les paramètres des segments</li>
              <li>Calculer les matrices de transformation des articulations adjacentes</li>
              <li>Calculer la matrice cinématique</li>
            </ol>
            {/*  Attribution des repères — Slide 38 */}
            <div id="repères">
              <h4 className="fw-bold mt-3"> Attribution des repères D-H</h4>
              <ul>
                <li>L'axe <strong>Z<sub>i</sub></strong> doit être l'axe de révolution ou la direction du mouvement</li>
                <li>L'axe <strong>X<sub>i</sub></strong> doit être perpendiculaire à Z<sub>i-1</sub> et à Z<sub>i</sub></li>
                <li>L'axe <strong>X<sub>i</sub></strong> doit intersecter l'axe Z<sub>i-1</sub></li>
                <li>L'axe <strong>Y<sub>i</sub></strong> doit être tracé de sorte que l'ensemble du repère suive la règle de la main droite</li>
              </ul>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
                <img src="images/mgd27.png" alt="Attribution des repères D-H : Z1 et X1 perpendiculaire à Z1 et Z0, X1 intersecte Z0, deux directions possibles de X1 — diapo MGD slide 38" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            {/*  Paramètres DH — Slides 39-41 */}
            <div id="paramètres_forward_kinematics">
              <h5 className="mt-3">Paramètres de rotation :</h5>
              <ul>
                <li><strong>θ<sub>i</sub> :</strong> rotation autour de Z<sub>i-1</sub> → variable articulaire si l'articulation i est rotoïde</li>
                <li><strong>α<sub>i</sub> :</strong> rotation autour de X<sub>i</sub> → angle entre Z<sub>i</sub> et Z<sub>i-1</sub> autour de X<sub>i</sub></li>
              </ul>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 240}}>
                <img src="images/mgd28.png" alt="Paramètres de rotation DH : tableau θ et α avec exemple α1 angle de Z0 vers Z1 autour de X1 — diapo MGD slide 39" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <h5 className="mt-3">Paramètres des segments :</h5>
              <ul>
                <li><strong>d<sub>i</sub> :</strong> déplacement le long de Z<sub>i-1</sub> → variable articulaire si l'articulation i est prismatique</li>
                <li><strong>r<sub>i</sub> :</strong> déplacement entre deux repères le long de X<sub>i</sub></li>
              </ul>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 240}}>
                <img src="images/mgd29.png" alt="Paramètres de translation DH : tableau d et r avec distances a1, a2, a3 le long des axes — diapo MGD slide 40" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            {/*  Matrices de transformation — Slides 42-43 */}
            <div id="matrices">
              <h4 className="fw-bold mt-3"> Matrices de transformation des articulations adjacentes</h4>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
                <img src="images/mgd31.png" alt="Formule générale de la matrice de transformation homogène DH en fonction des 4 paramètres θ, d, r, α — diapo MGD slide 42" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 230}}>
                <img src="images/mgd32.png" alt="Matrice DH décomposée : matrice d'orientation et vecteur de position séparés — diapo MGD slide 43" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            {/*  Exemple 1 RRR — Slides 44-46 */}
            <div id="ex1">
              <h4 className="fw-bold mt-3"> Exemple 1 : RRR</h4>
              <ul>
                <li><strong>θ<sub>i</sub> :</strong> angle de rotation de X<sub>i-1</sub> à X<sub>i</sub> autour de Z<sub>i-1</sub></li>
                <li><strong>d<sub>i</sub> :</strong> distance de l'origine du repère (i-1) à l'intersection de Z<sub>i-1</sub> &amp; X<sub>i</sub> le long de Z<sub>i-1</sub></li>
                <li><strong>r<sub>i</sub> :</strong> distance de l'intersection de Z<sub>i-1</sub> &amp; X<sub>i</sub> à l'origine du repère i le long de X<sub>i</sub></li>
                <li><strong>α<sub>i</sub> :</strong> angle de rotation de Z<sub>i-1</sub> à Z<sub>i</sub> autour de X<sub>i</sub></li>
              </ul>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 280}}>
                <img src="images/mgd33.png" alt="Robot RRR avec articulations 1 2 3, repères Z0 X0 Y0, Z1 X1 Y1, Z2 X2 Y2, Z3 X3 Y3, distances a0, a1 et d2 — diapo MGD slide 44" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p>Utiliser Scilab pour calculer la matrice de transformation <strong>H<sub>3</sub><sup>0</sup></strong> afin de définir la position et l'orientation de l'effecteur terminal.</p>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 180}}>
                <img src="images/mgd34.png" alt="Tableau DH du robot RRR avec valeurs de θ, d, r, α pour chaque articulation — diapo MGD slide 45" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
                <img src="images/mgd35.png" alt="Tableau DH robot RRR complété avec matrices de transformation pour chaque articulation — diapo MGD slide 46" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            {/*  Exemple 2 RPP — Slides 47-48 */}
            <div id="ex2">
              <h4 className="fw-bold mt-3"> Exemple 2 → Robot cylindrique RPP</h4>
              <ol>
                <li>Attribuer les repères D-H</li>
                <li>Trouver les paramètres D-H pour ce robot</li>
                <li>Calculer la matrice cinématique</li>
              </ol>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
                <img src="images/mgd37.png" alt="Robot cylindrique RPP avec repères D-H attribués et paramètres DH identifiés — diapo MGD slide 48" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            {/*  Exemple RRP pour DH — Slide 49 */}
            <div id="ex-rrp">
              <h4 className="fw-bold mt-3"> Exemple → RRP utilisé pour la matrice de transformation de Denavit-Hartenberg</h4>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 270}}>
                <img src="images/mgd38.png" alt="Robot RRP avec variables articulaires q1 et d3, repères z0 x3 y3 z3 y0 x0 z1 x1 y1 x2 y2 z2 — diapo MGD slide 49" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            {/*  Exemple 3 SCARA — Slides 50-51 */}
            <div id="ex3">
              <h4 className="fw-bold mt-3"> Exemple 3 — Robot SCARA</h4>
              <p>Étapes à réaliser pour ce robot SCARA :</p>
              <ol>
                <li>Trouver le design cinématique du robot SCARA</li>
                <li>Attribuer les repères D-H</li>
                <li>Trouver les paramètres D-H pour ce robot</li>
                <li>Calculer la matrice cinématique</li>
              </ol>
              <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
                <img src="images/mgd40.png" alt="Robot SCARA avec repères D-H attribués : Z0 X0 Y0, q1, q2, d1, X1, Z1 — diapo MGD slide 51" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
        </div>
        {/* ============================================ */}
        {/* CINÉMATIQUE INVERSE (nouveau — diapo MGI) */}
        {/* ============================================ */}
        <div id="cinematique-inverse" className="bg-white rounded-3 shadow-sm p-4 mb-4">
          <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-arrow-left-circle" /> CINÉMATIQUE INVERSE (MGI)</h2>
          {/* 1. COMMANDE AVEC LE MGD — PROBLÈME */}
          <div id="commande" className="mt-3">
            <h3 className="text-dark fw-bold">1. Commande des robots articulés</h3>
            <h4 className="text-dark fw-bold">Comment peut-on commander le robot avec le MGD ?</h4>
            <p>Schéma générique de l'asservissement de position d'un robot avec le MGD</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
              <img src="images/mgi01.png" alt="Schéma d'asservissement de position avec MGD : Xd(t) → erreur → loi de commande → u(t) → système mécanique → q(t) → MGD → X(t) mesurées — diapo MGI slide 3" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <div className="alert alert-danger mt-3">
              <i className="bi bi-exclamation-octagon-fill" /> <strong>PROBLÈME :</strong> la loi de commande devrait permettre de fournir les signaux de commande aux moteurs de chacune des articulations du robot sur la base des <strong>seules coordonnées opérationnelles de l'organe terminal</strong> !
              → Nécessité d'introduire le <strong>modèle géométrique inverse (MGI)</strong>.
            </div>
          </div>
          {/* 2. DÉFINITION DU MGI */}
          <div id="definition" className="mt-5">
            <h3 className="text-dark fw-bold">2. Modèle géométrique inverse (MGI)</h3>
            <p>Le modèle géométrique inverse <strong>(MGI)</strong> permet de déterminer la configuration des liaisons (coordonnées articulaires) d'un robot en fonction de la configuration de son organe terminal (position, orientation de l'effecteur).</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
              <img src="images/mgi02.png" alt="Schéma MGI : espace opérationnel X ↔ espace articulaire q avec paramètres ζ — diapo MGI slide 4" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
          </div>
          {/*  NON-UNICITÉ ET CONFIGURATIONS SINGULIÈRES */}
          <div id="singularites" className="mt-5">
            <h4 className="text-dark fw-bold">Exemple graphique de non-unicité de la solution d'un MGI</h4>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
              <img src="images/mgi03.png" alt="Robot 3R plan montrant les deux configurations coude haut et coude bas pour une même position de l'effecteur — diapo MGI slide 5" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
          </div>
          {/*  COMMANDE AVEC LE MGI */}
          <div id="commande_mgi" className="mt-5">
            <h4 className="text-dark fw-bold">Schéma d'asservissement de position d'un robot (avec MGI)</h4>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 250}}>
              <img src="images/mgi05.png" alt="Schéma d'asservissement avec MGI : Xd(t) → MGI → qd → erreur articulaire → loi de commande → robot — diapo MGI slide 7" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
          </div>
          {/* 3. MÉTHODES DE CALCUL DU MGI */}
          <div id="methodes" className="mt-5">
            <h3 className="text-dark fw-bold">3. Méthodes de calcul du MGI</h3>
            <p>Il n'existe pas de méthode systématique d'inversion du modèle géométrique direct.<br />
              Lorsqu'elle existe, la forme explicite, issue d'une inversion mathématique, qui donne toutes les solutions possibles au problème inverse (il y a rarement unicité de la solution) constitue le modèle géométrique inverse.</p>
            <p>Il existe un certain nombre de méthodes pour calculer le modèle géométrique inverse, par exemple:</p>
            <ul>
              <li><strong>Méthode analytique :</strong> on prend les équations du MGD que l'on « triture » pour trouver le MGI.</li>
              <li><strong>Méthode analytique de Paul :</strong> on décompose le MGD par les matrices de passages de chaque liaison et on déduit le MGI de manière itérative en partant de l'effecteur et en parcourant la chaîne cinématique jusqu'à la base.
                <br /><em>Remarque : cette méthode convient à une majorité de robots industriels.</em></li>
              <li><strong>Méthodes numériques :</strong> lorsque le MGI n'existe pas (pas de forme explicite), on peut calculer une solution particulière du problème inverse par des procédures numériques (ex. méthode de Newton). Ces dernières conduisent à une solution locale, dépendant des conditions initiales.
                <br /><em>Remarque : de telles méthodes peuvent être pénalisantes du point de vue du temps de calcul et sont donc à proscrire (dans la mesure du possible) pour l'implémentation « en ligne » au sein de structure de commande.</em></li>
            </ul>
          </div>
          {/*  EXEMPLE ROBOT RR PLAN */}
          <div id="exemple_rr" className="mt-5">
            <h4 className="text-dark fw-bold">Exemple 1 :</h4>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
              <img src="images/mgi07.png" alt="Formule générale du MGI : q = f_MGI(X, ζ) avec schéma de l'espace opérationnel et articulaire — diapo MGI slide 9" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <h4 className="text-dark fw-bold">Exemple 2 :</h4>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1 mt-2" style={{height: 220}}>
              <img src="images/mgi08.png" alt="Suite de la formule générale du MGI avec les équations développées — diapo MGI slide 10" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <h4 className="text-dark fw-bold">Exemple 3 :</h4>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1 mt-2" style={{height: 220}}>
              <img src="images/mgi09.png" alt="Suite de la formule générale du MGI avec les équations développées — diapo MGI slide 10" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
          </div>
          {/* 4. MÉTHODE DE PAUL */}
          <div id="de_paul" className="mt-5">
            <h3 className="text-dark fw-bold">4. Méthode de Paul</h3>
            <p>Soit le robot composé de n liaisons élémentaires :</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
              <img src="images/mgi11.png" alt="Schéma robot n liaisons avec corps 1, corps n, matrices A_{i-1,i}, A_{n-1,n} et variable U0 — diapo MGI slide 12" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
          </div>
          {/* 5. VERS LE MCD */}
          <div id="mcd_fin" className="mt-5">
            <h3 className="text-dark fw-bold">5. Modèle cinématique direct (MCD)</h3>
            <p>Les MGD et MGI permettent de caractériser la structure géométrique d'un robot et d'implémenter des lois de commandes pour l'asservissement en position. </p>
            <p>En revanche, il ne tiennent pas compte des vitesses articulaires et ne permettent pas d'analyser le robot en mouvement, de planifier ou de suivre de trajectoires complexes, de réaliser des asservissement en vitesse ou en retour d'état (position vitesse)…</p>
            <p>Le modèle cinématique direct <strong>(MCD)</strong> permet de déterminer la <strong>situation cinématique de l'organe terminal</strong> (vecteur vitesse de l'effecteur dans l'espace opérationnel) en fonction de la <strong>situation cinématique articulaires</strong> (vitesses articulaires dans l'espace de configuration).</p>
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 220}}>
              <img src="images/mgi13.png" alt="Schéma de transition du MGD/MGI vers le MCD avec la matrice Jacobienne reliant vitesses articulaires et opérationnelles — diapo MGI slide 13" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
          </div>
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
            <h4 className="fw-bold mt-3"> Objectifs Principaux</h4>
            <p>L'objectif fondamental de ROS est de <strong>soutenir la réutilisation de code (code reuse)</strong> en recherche et développement robotique. L'idée est d'<strong>arrêter de réinventer la roue</strong> en mutualisant les briques logicielles élémentaires.</p>
          </div>
          <div id="philosophie">
            <h4 className="fw-bold mt-3"> Philosophie</h4>
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
            <h4 className="fw-bold mt-3"> Nœuds (Nodes)</h4>
            <p>Les Nœuds sont des programmes indépendants, instances d'un exécutable, représentant une unité de traitement spécifique (par exemple, un algorithme de planification ou un pilote de capteur/moteur).</p>
          </div>
          <div id="master">
            <h4 className="fw-bold mt-3"> Master (ROS Master)</h4>
            <p>Le Master est le service d'enregistrement et de déclaration des nœuds (un name service). Il permet aux nœuds de se connaître et de se mettre en contact pour échanger de l'information.</p>
          </div>
          <div id="topics">
            <h4 className="fw-bold mt-3"> Topics (Communication Asynchrone)</h4>
            <p>Un <strong>Topic</strong> est un canal de communication <strong>unidirectionnel</strong> de type many-to-many (plusieurs émetteurs pour plusieurs récepteurs).<br />
              Un nœud peut être <strong>Publisher</strong> (émetteur) sur un ou plusieurs topics.<br />
              Un nœud peut être <strong>Subscriber</strong> (récepteur) sur un ou plusieurs topics.<br />
              Les Topics transmettent des <strong>Messages</strong>.</p>
          </div>
          <div id="messages">
            <h4 className="fw-bold mt-3"> Messages</h4>
            <p>Un <strong>Message</strong> est une structure de données typée (entiers, flottants, strings, ou d'autres messages complexes). Il définit le format de l'information échangée via les Topics.</p>
          </div>
          <div id="services">
            <h4 className="fw-bold mt-3"> Services</h4>
            <p>Les <strong>Services</strong> permettent une communication de type <strong>synchrone</strong> (requête/réponse) entre deux nœuds. Ils sont utilisés lorsqu'il est nécessaire d'envoyer une donnée et d'attendre immédiatement le résultat d'un calcul. Contrairement aux Topics, un seul nœud peut se déclarer comme un Service sous un nom donné.</p>
          </div>
          <div id="serveur-parametres">
            <h4 className="fw-bold mt-3"> Serveur de Paramètres</h4>
            <p>C'est une <strong>mémoire partagée</strong> qui permet de définir et de gérer des <strong>paramètres globaux</strong> (gains de contrôleur, noms de répertoires, etc.). Ces paramètres sont accessibles et modifiables par l'ensemble des nœuds, y compris en temps réel.</p>
          </div>
          <div id="package">
            <h4 className="fw-bold mt-3"> Package</h4>
            <p>Un <strong>Package</strong> est l'unité d'organisation et de distribution dans ROS. Il s'agit d'un répertoire contenant le code, les messages, les services, les fichiers de lancement, et le fichier package.xml qui spécifie ses dépendances.</p>
          </div>
        </div>
        {/* ============================================ */}
        {/* 3. OUTILS ET ÉCOSYSTÈME */}
        {/* ============================================ */}
        <div id="outils-ecosysteme" className="mt-5">
          <h3 className="text-dark fw-bold">3. Outils et Écosystème</h3>
          <div id="outils">
            <h4 className="fw-bold mt-3"> Outils (Software Tools)</h4>
            <p>ROS fournit une suite d'outils graphiques et en ligne de commande essentiels pour le développement et le débogage :</p>
            <ul>
              <li><strong>RViz :</strong> Interface graphique de visualisation 3D des modèles de robots, des cartes de navigation et des données de capteurs (images, nuages de points 3D).</li>
              <li><strong>Gazebo :</strong> Un simulateur dynamique complet permettant de modéliser la physique (inerties, frottements) d'un environnement et d'un robot en 3D.</li>
              <li><strong>rosbag/rxbag :</strong> Outil permettant d'enregistrer des séquences de données Topics et de les rejouer ultérieurement.</li>
              <li><strong>rqt_graph/rqt_plot :</strong> Outils pour visualiser le graphe des communications entre les nœuds (rqt_graph) et tracer l'évolution des données transmises sur un Topic (rqt_plot).</li>
            </ul>
          </div>
          <div id="bibliotheques">
            <h4 className="fw-bold mt-3"> Écosystème (Libraries &amp; Standards)</h4>
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

export default Theorie