import React, { useState } from 'react';

const Comparaison = () => {

  return (
    <div className="container-fluid px-0 px-md-3 mb-5">
      <div className="row g-0 g-md-4 mx-0">
        {/* Side bar */}
        <div className="col-md-3 ps-0 pe-0 pe-md-2">
          <div className="bg-white rounded-3 shadow-sm p-3 me-0 me-md-2" style={{ position: 'sticky', top: 87, maxHeight: 'calc(100vh - 40px)', overflowY: 'auto' }}>
            <h5 className="text-primary mb-3 pb-2 border-bottom">
              <i className="bi bi-list-ul" /> Sommaire
            </h5>
            <nav className="nav flex-column">
              <a className="nav-link px-0 py-1 text-dark" href="#intro">
                <i className="bi bi-info-circle text-primary me-2" />Introduction
              </a>
              <a className="nav-link px-0 py-1 text-dark" href="#exemple-move-pose">
                <i className="bi bi-arrow-right-circle text-primary me-2" />Exemple 1 : move_pose (MGD)
              </a>
              <a className="nav-link px-0 py-1 text-dark" href="#exemple-move-joints">
                <i className="bi bi-arrow-left-circle text-primary me-2" />Exemple 2 : move_joints (MGI)
              </a>
            </nav>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="col-md-9 ps-0 ps-md-2 pe-0 bg-white rounded-3 shadow-sm p-4 mb-4">

          {/* Introduction */}
          <div id="intro" >
            <h2 className="text-primary border-bottom pb-2 mb-4">
              <i className="bi bi-puzzle" /> PRATIQUE ET LIEN AVEC LA THÉORIE
            </h2>
            <p>
              Cette section a pour but de <strong>visualiser concrètement</strong> les concepts théoriques abordés dans le chapitre "Fondamentaux Théoriques".
              Nous allons exécuter des scripts simples sur le robot <strong>Niryo Ned2</strong> et analyser ce qui se passe du point de vue de la <strong>cinématique directe (MGD)</strong> et de la <strong>cinématique inverse (MGI)</strong>.
            </p>
            <div className="alert alert-info">
              <strong>Objectif pédagogique :</strong> Comprendre comment une consigne (position cartésienne ou angles articulaires) est transformée en mouvement réel par le robot.
            </div>
          </div>

          {/* Exemple 1 : move_pose */}
          <div id="exemple-move-pose" >
            <h3 className="text-dark fw-bold mb-3">
              <i className="bi bi-arrow-right-circle text-primary me-2" />
              Exemple 1 : Utilisation de <code className="text-dark">move_pose</code> (MGD)
            </h3>
            <p>
              La fonction <code className="text-dark">move_pose</code> permet de déplacer l'effecteur du robot (la pince) vers une <strong>position cartésienne cible</strong> définie par ses coordonnées (x, y, z) et son orientation (roll, pitch, yaw).
            </p>
            <p>
              <strong>Lien avec la théorie :</strong> Pour atteindre cette position cible, le robot doit résoudre le <strong>Problème Géométrique Inverse (MGI)</strong>. Il calcule les angles de chaque articulation nécessaires pour placer la pince à l'endroit voulu. Ce que vous, en tant qu'utilisateur, spécifiez, c'est <strong>où</strong> vous voulez que la pince aille (espace opérationnel), et le robot déduit <strong>comment</strong> (espace articulaire) il doit bouger ses moteurs.
            </p>

            
              <div className="border rounded bg-dark text-white p-3 mb-3" style={{ overflowX: 'auto' }}>
                <pre className="mb-0"><code>{`from pyniryo import *
import time

robot = NiryoRobot("169.254.200.200")

robot.move_pose(0.2, 0.1, 0.3, 0.0, 0.0, 0.0)
time.sleep(1)
robot.move_pose(0.25, -0.1, 0.2, 0.0, 0.0, 0.8)

robot.close_connection()`}</code></pre>
              </div>

            <div className="alert alert-info">
              <strong>Ce qu'il se passe :</strong> Le robot calcule en temps réel une solution au <strong>MGI</strong> pour chaque <code>move_pose</code>. Il y a parfois plusieurs solutions (ex: coude haut / coude bas), et le robot choisit la plus adaptée en fonction de sa configuration actuelle et des contraintes mécaniques.
            </div>
          </div>

          {/* Exemple 2 : move_joints */}
          <div id="exemple-move-joints" >
            <h3 className="text-dark fw-bold mb-3">
              <i className="bi bi-arrow-left-circle text-primary me-2" />
              Exemple 2 : Utilisation de <code className="text-dark">move_joints</code> (MGI)
            </h3>
            <p>
              La fonction <code className="text-dark">move_joints</code> permet de contrôler directement les <strong>angles articulaires</strong> du robot. Vous spécifiez la position de chaque moteur.
            </p>
            <p>
              <strong>Lien avec la théorie :</strong> C'est l'inverse du cas précédent. Vous spécifiez <strong>comment</strong> le robot doit se plier (espace articulaire), et le robot exécute le mouvement. Si vous voulez savoir où se trouve la pince (position cartésienne), le robot doit alors résoudre le <strong>Problème Géométrique Direct (MGD)</strong>.
            </p>
              <div className="border rounded bg-dark text-white p-3 mb-3" style={{ overflowX: 'auto' }}>
                <pre className="mb-0"><code>{`from pyniryo import *
import time

robot = NiryoRobot("169.254.200.200")

robot.move_joints(0.0, 0.5, -0.8, 0.0, 0.0, 0.0)
time.sleep(1)
robot.move_joints(0.0, 0.5, -1.33, 0.0, 0.0, 0.0)

robot.close_connection()`}</code></pre>
              </div>

            <div className="alert alert-info">
              <strong>Ce qu'il se passe :</strong> Le robot exécute simplement les commandes moteur. C'est vous qui contrôlez directement la cinématique. Le <strong>MGD</strong> est utilisé en arrière-plan pour, par exemple, vous indiquer en temps réel la position de la pince dans l'interface de NiryoStudio.
            </div>
          </div>

          {/* Résumé visuel */}
          <div id="Résumé_schématique">
            <h3 className="text-dark fw-bold mb-3">
              <i className="bi bi-diagram-3 text-primary me-2" />
              Résumé schématique
            </h3>
            <div className="row">
              <div className="col-md-6">
                <div className="border rounded p-3 h-100">
                  <h5 className="text-center text-primary">Espace Opérationnel → Espace Articulaire</h5>
                  <div className="text-center">
                    <span className="badge bg-primary me-1">move_pose</span>
                    <i className="bi bi-arrow-right mx-2"></i>
                    <span className="badge bg-secondary">MGI (calcul des angles)</span>
                  </div>
                  <p className="mt-2 small text-center">Vous définissez une position (x,y,z,r,p,y) → Le robot calcule les angles (q1..q6).</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border rounded p-3 h-100">
                  <h5 className="text-center text-primary">Espace Articulaire → Espace Opérationnel</h5>
                  <div className="text-center">
                    <span className="badge bg-primary me-1">move_joints</span>
                    <i className="bi bi-arrow-right mx-2"></i>
                    <span className="badge bg-secondary">MGD (calcul de la position)</span>
                  </div>
                  <p className="mt-2 small text-center">Vous définissez les angles (q1..q6) → Le robot calcule la position (x,y,z,r,p,y) de la pince.</p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-muted small">
              <i className="bi bi-info-circle me-1"></i>
              Ce schéma illustre le lien direct entre les fonctions de programmation de <strong>pyniryo</strong> et les concepts fondamentaux de <strong>cinématique</strong> expliqués dans la partie Théorie.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comparaison;