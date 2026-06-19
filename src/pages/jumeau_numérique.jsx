import React from 'react'

const jumeau_numérique = () => {
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
          {/* 1. INSTALLATION DE NIRYOSTUDIO */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#installation" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-cloud-download text-primary me-2" />Installation NiryoStudio
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseInstallation" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseInstallation">
              <a className="nav-link px-0 py-1 text-secondary small" href="#prerequis">1. Prérequis</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#telechargement">2. Téléchargement</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 2. SIMULATION NIRYOSTUDIO */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#simulation-niryostudio" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-play-circle text-primary me-2" />Simulation NiryoStudio
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseSimulation" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseSimulation">
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-generalites">1. Généralités</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-installation">2. Installation</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-demarrage">3. Démarrer et arrêter</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-utilisation">4. Utilisation</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-robot">5. Utilisation du robot</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-blocs">6. Blocs de couleurs</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-espaces">7. Espaces de travail</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-limites">8. Limites</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#sim-depannages">9. Dépannages</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 3. ENVIRONNEMENTS DE PROGRAMMATION */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#environnements" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-window-desktop text-primary me-2" />Environnements
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseEnvironnements" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseEnvironnements">
              <a className="nav-link px-0 py-1 text-secondary small" href="#linux-windows">1. Linux / Windows</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#linux"> Linux</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#windows"> Windows</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#rviz">2. RViz</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 4. GAZEBO */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#gazebo" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-display text-primary me-2" />Gazebo
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseGazebo" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseGazebo">
              <a className="nav-link px-0 py-1 text-secondary small" href="#gazebo-presentation">Pour utiliser la simulat Présentation</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#gazebo-choix"> Un choix évident</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#gazebo-installation"> Installation</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#gazebo-wsl">— WSL</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#gazebo-docker">— Docker</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#gazebo-vm">— VM</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#gazebo-limites"> Limites</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 5. WEBOTS */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#webots" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-globe text-primary me-2" />Webots
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseWebots" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseWebots">
              <a className="nav-link px-0 py-1 text-secondary small" href="#webots-presentation">Pour utiliser la simulat Présentation</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#webots-caracteristiques"> Caractéristiques</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#webots-limites"> Limites avec Niryo</a>
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
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure86">Figure 86</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure87">Figure 87</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure88">Figure 88</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure89">Figure 89</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure90">Figure 90</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure91">Figure 91</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure92">Figure 92</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure93">Figure 93</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure94">Figure 94</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure95">Figure 95</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure96">Figure 96</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#webot1">Webots</a>
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
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau24">Tableau 24</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau25">Tableau 25</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau26">Tableau 26</a>
            </div>
          </div>
        </nav>
      </div>
    </div>

    {/* contenu principal */}
    <div className="col-md-9 ps-0 ps-md-2 pe-0">
      {/* ============================================ */}
      {/* INSTALLATION NIRYOSTUDIO */}
      {/* ============================================ */}
      <div id="installation" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-cloud-download" /> INSTALLATION DE NIRYOSTUDIO</h2>
        <div id="prerequis" className="mt-3">
          <h3 className="text-dark fw-bold">1. Prérequis</h3>
          <p>Pour télécharger et utiliser NiryoStudio sur un PC, quelques prérequis sont nécessaires pour le système d'exploitation.</p>
          <div id="tableau24" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Systèmes d'exploitation</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Windows</td><td>Windows 10 ou versions ultérieures</td></tr>
                <tr><td className="fw-bold">Mac</td><td>Seuls les binaires 64 bits sont fournis pour MacOS, et la version minimale prise en charge est MacOS 10.10</td></tr>
                <tr><td className="fw-bold">Linux</td><td>Les binaires précompilés ia32 (i686) et x64 (amd64) d'Electron sont compilés sous Ubuntu 20.04, tandis que le binaire arm est compilé pour ARM v7 avec ABI hard-float et NEON pour Debian Wheezy</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 24 : Tableau répertoriant les 3 principaux systèmes d'exploitation</p>
          <p>Les configurations matérielles recommandées sont :</p>
          <div id="tableau25" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Composant</th><th>Configuration recommandée</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Processeur</td><td>Intel Core I5 (8ème génération, Apple M1 ou plus récent sont supportés)</td></tr>
                <tr><td className="fw-bold">RAM</td><td>6 Go de RAM (16 est recommandé pour Unity WebGL)</td></tr>
                <tr><td className="fw-bold">Stockage</td><td>2 Go d'espace libre pour l'installation et les ressources temporaires</td></tr>
                <tr><td className="fw-bold">Graphisme</td><td>Les cartes graphiques compatibles avec OpenGL 3.3 ou versions ultérieures</td></tr>
                <tr><td className="fw-bold">Résolution d'écran</td><td>1920x1080 ou plus grand</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 25 : Tableau répertoriant les configurations matérielles recommandées de l'ordinateur pour la programmation</p>
        </div>
        <div id="telechargement" className="mt-5">
          <h3 className="text-dark fw-bold">2. Téléchargement</h3>
          <p>Si le PC possède la configuration nécessaire alors pour télécharger le logiciel, il faut se rendre sur le site Niryo :<br />
            <a href="https://niryo.com/fr/niryostudio/" target="_blank">https://niryo.com/fr/niryostudio/</a></p>
          <p>Documentation NiryoStudio :<br />
            <a href="https://docs.niryo.com/niryostudio/" target="_blank">https://docs.niryo.com/niryostudio/</a></p>
        </div>
      </div>
      {/* ============================================ */}
      {/* SIMULATION NIRYOSTUDIO */}
      {/* ============================================ */}
      <div id="simulation-niryostudio" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-play-circle" /> SIMULATION NIRYOSTUDIO</h2>
        <div id="sim-generalites" className="mt-3">
          <h3 className="text-dark fw-bold">1. Généralités</h3>
          <p>Pour utiliser la simulation sur NiryoStudio, certaines exigences doivent être respectées.</p>
          <div id="tableau26" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Paramètre</th><th>Donnée</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Système opérateur</td><td><ul><li>Windows 10 et versions ultérieures avec WSL 2.0 installé.</li><li>MacOs 10.15 (Catalina) ou version ultérieure.</li></ul></td></tr>
                <tr><td className="fw-bold">Matériel</td><td><ul><li>16 Go ou plus de RAM pour une simulation 3D fluide</li><li>Processeur multicœur moderne (Intel Core i5/i7, Apple Silicon M1/M2/M3 ou équivalent)</li>
                      <li>Un GPU dédié est recommandé pour de meilleures performances 3D</li>
                      <li>18 Go minimum d'espace libre sur le disque dur</li></ul></td></tr>
                <tr><td className="fw-bold">Logiciel</td><td>NiryoStudio 1.11.0 et versions ultérieures</td></tr>
                <tr><td className="fw-bold">Réseau</td><td><ul><li>Le port 9090 doit être ouvert et disponible sur la machine hôte pour que la simulation communique avec NiryoStudio</li>
                      <li>Le port 40001 doit être ouvert et disponible sur la machine pour utiliser la simulation avec PyNiryo</li>
                      <li>La connexion internet n'est requise qu'au premier lancement (pour télécharger et installer les packages de simulation)</li><li>Après la première configuration, la simulation s'exécute entièrement hors ligne</li></ul></td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 26 : Tableau récapitulatif des recommandations informatiques pour la simulation du robot via Niryo Studio</p>
          <p>Il existe une version gratuite déjà présente sur le logiciel lorsqu'on le télécharge mais celle-ci ne peut simuler qu'un maximum de 10 instructions.<br />
            Si on souhaite simuler plus d'instructions, il faut payer une licence qui permet de pouvoir simuler une infinité d'instructions.</p>
          <p>Le processus d'installation est le même pour la version gratuite et la version sous licence de la simulation.</p>
          <div className="alert alert-danger">
            <i className="bi bi-exclamation-octagon-fill" /> <strong>ATTENTION :</strong> vous ne pouvez pas vous connecter simultanément à une simulation <strong>ET</strong> un robot physique.<br />
            Dès que vous vous connectez à un robot physique, la simulation s'arrête automatiquement.
          </div>
        </div>
        <div id="sim-installation" className="mt-5">
          <h3 className="text-dark fw-bold">2. Installation de la simulation</h3>
          <div id="figure86" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure86.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 86 : Lancer une simulation</p>
          <p>Cliquer sur <strong>« Lancer la simulation »</strong> si vous avez un abonnement actif au module de simulation ou <strong>« Essayer gratuitement »</strong> pour tester la version gratuite limitée à 10 instructions.</p>
          <p>La simulation commencera par le téléchargement et l'installation de toutes les dépendances nécessaires.<br />
            Ce processus peut prendre un certain temps, selon la vitesse de votre réseau et les performances de la machine hôte.</p>
          <div id="figure87" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure87.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 87 : Interface de simulation</p>
          <p>Une fois l'installation terminée, la simulation se lancera automatiquement et affichera une vue 3D d'un Niryo Discovery Bundle.</p>
        </div>
        <div id="sim-demarrage" className="mt-5">
          <h3 className="text-dark fw-bold">3. Démarrer et arrêter la simulation</h3>
          <p>Pour démarrer la simulation, cliquez sur le bouton <strong>« Simulation »</strong> puis sélectionnez <strong>« Lancer la simulation »</strong>.</p>
          <div id="figure88" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure88.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 88 : Démarrer une simulation</p>
          <p>Pour arrêter la simulation, cliquez sur <strong>« Déconnecter »</strong>. La simulation s'arrêtera automatiquement.<br />
            En cas de problème rencontré lors de l'utilisation de la simulation, on peut la redémarrer en cliquant sur <strong>« Reboot »</strong>.</p>
        </div>
        <div id="sim-utilisation" className="mt-5">
          <h3 className="text-dark fw-bold">4. Utilisation de la simulation</h3>
          <p>Contrairement à la connexion à un robot physique, la simulation inclut des éléments supplémentaires dans la scène 3D du robot, vous permettant de commencer immédiatement vos expérimentations sans configuration supplémentaire.</p>
          <p>Elle est fournie avec le Bundle Discovery préinstallé (pince, éléments de l'espace de travail, set Vision, blocs, etc.) mais sans la pompe à vide.</p>
          <div id="figure89" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure89.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 89 : Arrêter une simulation</p>
          <p>Cette configuration est conçue pour vous permettre d'explorer immédiatement les cas d'utilisation les plus courants, tels que le <strong>Pick&amp;Place, Triage de pièce via le set Vision et le workspace</strong> directement dans l'environnement virtuel.</p>
          <p>L'interface 3D View est composée des éléments suivants :</p>
          <div id="figure90" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure90.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 90 : Interface 3D View en simulation</p>
          <div id="figure91" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 500}}>
            <img src="images/Figure91.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 91 : Liste d'actions possibles sur la simulation</p>
          <h5 className="mt-3">Le contrôle de la caméra se fait de la manière suivante :</h5>
          <ul>
            <li><strong>Faire pivoter la caméra :</strong> maintenir le bouton gauche de la souris enfoncé</li>
            <li><strong>Zoom caméra :</strong> utiliser la molette de la souris ou maintenir le bouton droit de la souris enfoncé et faire glisser la souris</li>
            <li><strong>Traduire la caméra :</strong> maintenir le bouton central de la souris enfoncé ou utiliser « CTRL + Clique gauche »</li>
          </ul>
          <p>Une sphère rouge apparaît au centre de l'écran pendant le mouvement de la caméra pour faciliter la localisation et le zoom de la scène.</p>
        </div>
        <div id="sim-robot" className="mt-5">
          <h3 className="text-dark fw-bold">5. Utilisation du robot</h3>
          <p>Une fois la simulation lancée et connectée, vous pouvez contrôler et programmer le Ned2 virtuel comme la version physique de celui-ci.</p>
          <p>Vous pouvez déplacer et interagir avec le robot simulé grâce aux méthodes suivantes :</p>
          <ul>
            <li><strong>Déplacement direct :</strong> déplacer manuellement les articulations ou le point central de l'outil (TCP) à l'aide du panneau « Déplacement direct »</li>
            <li><strong>Programmation :</strong> créer des programmes à l'aide de Blockly (blocs visuels par glisser-déposer) ou écrire des scripts Python pour un contrôle avancé</li>
            <li><strong>Mouvement libre :</strong> cliquer sur le robot dans la scène 3D et utiliser la « boule Gizmo » pour le déplacer librement</li>
          </ul>
          <div id="figure92" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure92.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 92 : Image de déplacement du robot en simulation</p>
        </div>
        <div id="sim-blocs" className="mt-5">
          <h3 className="text-dark fw-bold">6. Utilisation des blocs de couleurs</h3>
          <p>Le <strong>« Bundle Discovery »</strong> contient une zone d'instanciation de bloc :</p>
          <div id="figure93" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure93.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 93 : Zone d'instanciation sur la simulation</p>
          <p>Pour installer un bloc, cliquez dessus et un gadget vous permettant de le déplacer dans la scène apparaîtra.</p>
          <div id="figure94" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure94.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 94 : Déplacement d'un bloc dans la scène de simulation</p>
          <p>Pour supprimer un bloc instancié, cliquez dessus et appuyez sur la touche « Suppr » de votre clavier.</p>
        </div>
        <div id="sim-espaces" className="mt-5">
          <h3 className="text-dark fw-bold">7. Utilisation des espaces de travail et de cadres utilisateurs</h3>
          <p>La simulation est fournie avec des <strong>WorkSpace</strong> préconfigurés et des <strong>UserFrames</strong> correspondant à la scène 3D.</p>
          <p>Deux UserFrames sont disponibles par défaut :</p>
          <ul>
            <li>alpha_zone_userframe</li>
            <li>beta_zone_userframe</li>
          </ul>
          <div id="figure95" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure95.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 95 : Position des UserFrames sur la scène de simulation</p>
          <p>Deux WorkSpace sont également disponibles :</p>
          <ul>
            <li>bundle_workspace</li>
            <li>conveyor_workspace</li>
          </ul>
          <div id="figure96" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure96.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 96 : Position des WorkSpace sur la scène de simulation</p>
        </div>
        <div id="sim-limites" className="mt-5">
          <h3 className="text-dark fw-bold">8. Limites</h3>
          <ul>
            <li>L'état de la simulation n'est pas enregistré entre les sessions, chaque lancement démarre à partir d'un nouvel état.</li>
            <li><strong>Les collisions</strong> avec les objets de la scène ne sont pas prises en compte (pas d'interaction basée sur la physique).</li>
            <li>Seul un nombre <strong>limité de blocs</strong> peut être instancié dans la scène (5 par type/couleur).</li>
          </ul>
        </div>
        <div id="sim-depannages" className="mt-5">
          <h3 className="text-dark fw-bold">9. Dépannages</h3>
          <p>Si vous rencontrez des problèmes lors de l'utilisation de la simulation Ned2, essayez les étapes suivantes :</p>
          <h5 className="mt-3"> Redémarrer la simulation</h5>
          <p>Cliquez sur <strong>« Redémarrer »</strong> dans NiryoStudio pour redémarrer l'environnement de simulation. Cela résout la plupart des problèmes temporaires de connexion ou de chargement.</p>
          <h5 className="mt-3"> Vérifiez la connexion internet (première connexion uniquement)</h5>
          <p>Assurez-vous que votre ordinateur était connecté à internet lors du <strong>premier lancement</strong> pour permettre le téléchargement de toutes les dépendances. Après la première configuration, la simulation peut s'exécuter entièrement hors ligne.</p>
          <h5 className="mt-3"> Vérifiez la disponibilité du port</h5>
          <p>Assurez-vous que le <strong>port 9090</strong> est ouvert et non utilisé par une autre application sur votre machine. Si le port est bloqué, NiryoStudio ne pourra pas se connecter à la simulation.</p>
          <h5 className="mt-3"> Déconnectez-vous des robots physiques</h5>
          <p>Vous ne pouvez pas vous connecter à une simulation et à un robot physique en même temps. Si vous vous connectez à un vrai robot, la simulation s'arrêtera automatiquement.</p>
          <h5 className="mt-3"> Fermez et relancez NiryoStudio</h5>
          <p>Si les problèmes persistent, fermez complètement NiryoStudio et relancez-le avant de tenter de vous connecter à nouveau à la simulation.</p>
          <h5 className="mt-3"> Vérifiez les performances de votre système</h5>
          <p>Assurez-vous que votre ordinateur répond aux <strong>exigences minimales</strong> (RAM, CPU, GPU). Des ralentissements ou des blocages peuvent se produire sur des machines à faible spécification ou lors de l'exécution simultanée d'autres applications lourdes.</p>
          <h5 className="mt-3"> Vérifiez les autorisations utilisateurs</h5>
          <p>Assurez-vous d'avoir les droits nécessaires sur votre ordinateur (des droits d'administrateur peuvent être requis pour permettre à NiryoStudio d'ouvrir des ports et d'exécuter la simulation). Si vous utilisez un ordinateur d'entreprise ou scolaire, contactez votre administrateur informatique pour confirmer que les autorisations sont correctement définies.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* ENVIRONNEMENTS DE PROGRAMMATION */}
      {/* ============================================ */}
      <div id="environnements" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-window-desktop" /> ENVIRONNEMENTS DE PROGRAMMATION</h2>
        <div id="linux-windows" className="mt-3">
          <h3 className="text-dark fw-bold">1. Linux / Windows</h3>
          <p>Les systèmes d'exploitation Linux (comme Ubuntu) et Windows reposent sur des architectures et des usages différents, ce qui les rend adaptés à des contextes distincts, notamment dans le domaine de la robotique et du développement logiciel.</p>
          <div id="linux">
            <h4 className="fw-bold mt-3"> Linux</h4>
            <p>Linux est un système <strong>open-source</strong> : son code est librement accessible, modifiable et redistribuable. 
              Il est très présent en robotique, informatique embarquée, serveurs et environnements de développement avancés, 
              notamment pour sa stabilité et sa compatibilité avec ROS.</p>
            <p>Les distributions Linux utilisent des gestionnaires de paquets (comme APT sur Ubuntu) 
              pour installer, mettre à jour et supprimer des logiciels de manière centralisée et sécurisée.</p>
            <p>Linux met l'accent sur le terminal et les outils en ligne de commande, 
              offrant un contrôle précis du système. Il est nativement compatible avec Python, C/C++, Bash, Git et Docker.</p>
            <p>Reconnu pour sa robustesse et sa faible exposition aux virus, 
              Linux est utilisé dans les serveurs, les infrastructures critiques et les robots industriels.</p>
            <p>Pour contrôler le robot via ROS, il est conseillé d'utiliser <strong>Ubuntu 20.04 LTS</strong> 
              (Long Term System), une distribution stable, fiable et maintenue longtemps, 
              largement utilisée en robotique et compatible avec ROS.</p>
          </div>
          <div id="windows">
            <h4 className="fw-bold mt-3"> Windows</h4>
            <p>Contrairement à Linux, Windows est un système <strong>propriétaire</strong>, développé et contrôlé par Microsoft. Son fonctionnement est moins modifiable ce qui offre une ouverture au grand public et une facilité d'utilisation. Il est présent dans les usages <strong>des jeux vidéo, du multimédia et de la bureautique</strong>. Il est conçu pour offrir une interface intuitive.</p>
            <p>Windows repose majoritairement sur des installateurs individuels téléchargés sur Internet ou via le Microsoft Store. Cela offre une plus grande simplicité pour l'utilisateur moyen, mais un contrôle moins fin pour les développeurs.</p>
            <p>Windows privilégie une interface graphique conviviale, avec moins d'accent sur le terminal. Cependant, de nombreux outils robotiques ou scientifiques y sont moins bien supportés ou nécessitent des couches de compatibilité. Windows offre également un bon niveau de sécurité, mais étant le système le plus répandu chez les particuliers, il est davantage ciblé par les logiciels malveillants.</p>
          </div>
        </div>
        <div id="rviz" className="mt-5">
          <h3 className="text-dark fw-bold">2. RViz</h3>
          <p>RViz est un outil de visualisation 3D pour ROS. Il permet d'afficher en temps réel :</p>
          <ul>
            <li>Des robots</li>
            <li>Leurs capteurs (caméra, capteurs IR, etc.)</li>
            <li>Leurs trajectoires</li>
            <li>Leurs cartes</li>
          </ul>
          <p>En bref, c'est un logiciel pour voir ce que voit le robot et ce qu'il fait dans ROS. Contrairement à Gazebo, RViz ne simule pas la physique : il se contente d'afficher les données publiées sur les topics ROS. Les deux outils sont souvent utilisés ensemble : Gazebo pour la simulation physique, RViz pour la visualisation.</p>
          <div className="alert alert-info mt-3">
            <i className="bi bi-info-circle-fill" /> <strong>Remarque :</strong> dans notre cas, un dual-boot permet d'utiliser NiryoStudio dans l'environnement Windows et RViz/Gazebo dans un environnement Linux.
          </div>
        </div>
      </div>
      {/* ============================================ */}
      {/* GAZEBO */}
      {/* ============================================ */}
      <div id="gazebo" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-display" /> GAZEBO</h2>
        <div id="gazebo-presentation" className="mt-3">
          <h3 className="text-dark fw-bold">Pour utiliser la simulat Gazebo</h3>
          <h4 className="fw-bold mt-3"> Présentation</h4>
          <p>Gazebo est un logiciel de simulation open source largement utilisé en robotique. Il s'intègre parfaitement avec ROS.
            Cette compatibilité facilite l'intégration des algorithmes de contrôle et des programmes développés par les utilisateurs. </p>
          <p>Gazebo utilise des moteurs physiques avancés (ODE, Bullet, DART) pour simuler précisément les interactions physiques, collisions et frottements.</p>
          <p>Gazebo supporte la simulation simultanée de plusieurs robots et dispose de modèles spécialement conçus pour les robots Niryo (Ned, Ned2, Ned Pro), 
            évitant un travail fastidieux de modélisation.</p>
          <p>En milieu éducatif, Gazebo permet de tester des programmes sur des robots virtuels sans risque de casse matérielle, 
            favorisant la maîtrise de concepts comme la cinématique.</p>
        </div>
        <div id="gazebo-choix" className="mt-4">
          <h4 className="fw-bold mt-3"> Gazebo, un choix évident</h4>
          <p>Gazebo se distingue par sa compatibilité native avec les fichiers de robots Niryo, 
            permettant aux étudiants de travailler immédiatement sur des modèles fidèles à la réalité.</p>
          <p>À l'inverse, Webots est principalement conçu pour les robots mobiles (roues, drones). 
            Son architecture n'est pas optimisée pour les bras robotiques et l'absence d'intégration directe avec Niryo complique la mise en place d'environnements réalistes.</p>
          <p>Le choix de Gazebo s'impose naturellement : stable, éprouvé, il simule précisément les robots Niryo dans un cadre pédagogique sécurisé. 
            Même si son installation demande des efforts (version spécifique d'Ubuntu), ses avantages justifient pleinement cette contrainte.</p>
        </div>
        <div id="gazebo-installation" className="mt-4">
          <h4 className="fw-bold mt-3"> Installation de Gazebo</h4>
          <p>Dans la majorité des cas, les étudiants travaillent sous Windows. Gazebo ne fonctionne correctement qu'avec les fichiers Niryo que sous Ubuntu 18.04, une distribution ancienne difficilement accessible depuis Windows.</p>
          <p>La simulation nécessite une adresse IP propre pour communiquer avec Node-RED, un accès complet aux pilotes graphiques pour un affichage fluide, et une installation simple et reproductible. Le dual-boot est trop contraignant.</p>
          <p>Trois options s'offrent à nous : WSL, Docker ou une machine virtuelle.</p>
          <div id="gazebo-wsl" className="mt-3">
            <h5 className="mt-3">WSL (Windows Subsystem for Linux)</h5>
            <p>WSL permet d'exécuter Linux depuis Windows. Cependant, WSL1 (compatible Ubuntu 18.04) ne prend pas en charge l'accélération graphique, rendant l'affichage très lent. De plus, WSL ne reçoit pas d'IP classique, compliquant la communication avec Node-RED.</p>
          </div>
          <div id="gazebo-docker" className="mt-3">
            <h5 className="mt-3">Docker</h5>
            <p>Docker propose une approche modulaire et facilement partageable. Mais comme WSL1, il ne gère pas nativement l'accélération 3D, entraînant les mêmes lenteurs.</p>
          </div>
          <div id="gazebo-vm" className="mt-3">
            <h5 className="mt-3">VM (Machine Virtuelle)</h5>
            <p>La machine virtuelle est la solution la plus adaptée. Elle permet de faire tourner Ubuntu 18.04 sous Windows, avec accès aux pilotes graphiques (via VirtualBox Guest Additions) pour un affichage fluide, 
              et une adresse IP propre via le mode bridge pour communiquer avec Node-RED. La configuration initiale demande un peu d'efforts, mais c'est la solution la plus stable pour un usage pédagogique.</p>
          </div>
        </div>
        <div id="gazebo-limites" className="mt-5">
          <h4 className="fw-bold mt-3"> Limites de la simulation multi-robots</h4>
          <p>Malgré ses avantages, la simulation présente certaines limites importantes, en particulier lorsqu'il s'agit de simuler plusieurs robots en parallèle. Gazebo permet théoriquement de lancer plusieurs instances d'un même robot grâce à l'utilisation des <strong>namespaces</strong> dans ROS, qui permettent de distinguer les différents robots dans l'arborescence des topics. Cependant :</p>
          <ul>
            <li><strong>PyNiryo</strong> ne permet pas de spécifier un "namespace" lors de la connexion à un robot, ce qui rend impossible l'interaction avec plusieurs robots simulés simultanément.</li>
            <li><strong>Node-RED</strong> ne peut pas facilement différencier deux robots simulés si leurs topics ne sont pas clairement séparés ou si ceux-ci n'ont pas des adresses IP différentes.</li>
          </ul>
          <p>Cette limitation est un point bloquant important à connaître avant de concevoir des scénarios pédagogiques impliquant plusieurs robots simulés.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* WEBOTS */}
      {/* ============================================ */}
      <div id="webots" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-globe" /> WEBOTS</h2>
        <div id="webots-presentation" className="mt-3">
          <h3 className="text-dark fw-bold">Pour utiliser la simulat Webots</h3>
          <h4 className="fw-bold mt-3"> Présentation</h4>
          {/* doc 1 */}
          <p>Le système virtuel a été développé avec le simulateur Webots. 
            Webots est un logiciel open source de simulation pour des robots manipulateurs et mobiles. 
            Il contient un environnement 3D dans lequel il est possible de développer et visualiser l'intégralité du système.</p>
          <p>Il est constitué d'un arbre sur lequel figurent toutes les opérations effectuées pour développer le système virtuel, 
            comme la création d'une pièce, l'intégration d'un robot, les moteurs pour permettre les mouvements d'une articulation, etc.</p>
          <p>On y trouve aussi une console dans laquelle des données et des textes peuvent être affichés. 
            Un moniteur est également disponible afin de visualiser l'évolution des données générées par les capteurs.</p>
          <p>Une partie très importante du logiciel est l'éditeur de texte. Dans cet endroit, il est possible de programmer les contrôleurs. 
            C'est là que les compétences et connaissances informatiques sont mises à contribution. 
            Les contrôleurs peuvent être développés soit en C, C++, Matlab ou Python. Durant ce projet, 
            tous les contrôleurs ont été développés en python.</p>
        </div>
        <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
          <img src="images/webot1.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
        </div>
        <p className="text-center small mt-1">Logiciel de simulation Webots</p>
        <div id="webots-caracteristiques" className="mt-4">
          <h4 className="fw-bold mt-3"> Caractéristiques</h4>
          {/* doc 2 */}
          <p>Webots, de son côté, est une autre plateforme open source qui se distingue par une interface plus moderne et conviviale. 
            Développé initialement par Cyberbotics, Webots propose un environnement intuitif où la création et la modification de scènes 
            ou de robots sont facilitées par un éditeur graphique intégré. Cette interface rend Webots particulièrement adapté aux débutants 
            et aux projets pédagogiques multidisciplinaires.</p>
          {/* doc 2 */}
          <p>Le logiciel prend en charge une large bibliothèque de robots prêts à l'emploi et permet la programmation dans plusieurs langages, 
            notamment C, C++, Python, Java ou MATLAB, offrant ainsi une grande flexibilité. 
            Comme Gazebo, Webots utilise un moteur physique performant pour assurer une simulation fluide et réaliste.</p>
          {/* doc 2 */}
          <p>L'installation de Webots est simple et compatible avec les systèmes d'exploitation récents, 
            ce qui en fait un choix pratique pour une grande variété d'utilisateurs. Dans un contexte éducatif, 
            Webots facilite la prise en main rapide des concepts robotiques grâce à sa visualisation claire et à sa facilité d'utilisation.</p>
        </div>
        <div id="webots-limites" className="mt-4">
          <h4 className="fw-bold mt-3"> Limites avec les robots Niryo</h4>
          {/* doc 2 */}
          <p>Webots présente certaines limitations dans le cadre spécifique de la simulation des robots bras tels que ceux de Niryo. 
            En effet, Webots est davantage orienté vers la modélisation et la simulation de robots mobiles, comme les robots à roues ou les drones, et son architecture est principalement conçue pour ce type de systèmes.</p>
          {/* doc 2 */}
          <p>Contrairement à Gazebo, Webots ne propose pas d'intégration native avec les fichiers spécifiques fournis par Niryo, 
            ce qui complique l'importation et la simulation précise des bras robotiques de cette marque. 
            Cette absence d'intégration directe oblige à un travail manuel important de modélisation et d'adaptation des fichiers, 
            ce qui ralentit considérablement la mise en place des environnements de simulation.</p>
          {/* doc 2 */}
          <p>De plus, la gestion des mouvements complexes à six degrés de liberté, typiques des bras robotisés industriels, 
            est moins intuitive et moins optimisée dans Webots, limitant ainsi la qualité et la précision des simulations dans ce contexte.</p>
          {/* doc 2 */}
          <p>Ces facteurs rendent Webots moins adapté pour un usage avec les robots Niryo et expliquent pourquoi cette plateforme 
            n'a pas été retenue pour ce projet.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default jumeau_numérique