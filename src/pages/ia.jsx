import React from 'react'

const Ia = () => {
  return (
    <div className="container-fluid px-0 px-md-3 mb-5">
  <div className="row g-0 g-md-4 mx-0">
    {/* side bar */}
    <div className="col-md-3 ps-0 pe-0 pe-md-2">
    <div className="bg-white rounded-3 shadow-sm p-3 me-0 me-md-2" style={{position: 'sticky', top: 20, maxHeight: 'calc(100vh - 40px)', overflowY: 'auto'}}>
        <h5 className="text-primary mb-3 pb-2 border-bottom">
        <i className="bi bi-list-ul" /> Sommaire
        </h5>
        <nav className="nav flex-column">
        {/* ============================================ */}
        {/* 1. CONTEXTE DU PROJET */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#contexte" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-info-circle text-primary me-2" />Contexte du projet
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseContexte" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseContexte">
            <a className="nav-link px-0 py-1 text-secondary small" href="#entreprise">a) Présentation du laboratoire LINEACT</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#objectifs">b) Objectifs de la mission</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 2. CADRAGE THÉORIQUE */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#cadrage" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-book text-primary me-2" />Cadrage théorique
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseCadrage" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseCadrage">
            <a className="nav-link px-0 py-1 text-secondary small" href="#def-rl">a) Définition de l'Apprentissage par Renforcement</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#pdm">b) Le Processus de Décision Markovien</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#bellman">c) Fonctions de valeur et équations de Bellman</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#gradient">d) Gradient de politique</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#choix-algo">e) Choix de l'algorithme</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 3. SOFT ACTOR-CRITIC (SAC) */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#sac" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-cpu text-primary me-2" />Soft Actor-Critic (SAC)
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseSac" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseSac">
            <a className="nav-link px-0 py-1 text-secondary small" href="#sac-def">a) Définition du SAC</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#sac-objectif">b) Objectif du SAC</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#sac-fonctionnement">c) Principe de fonctionnement</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 4. SIMULATION PHYSIQUE ET JUMEAU NUMÉRIQUE */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#jumeau" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-box text-primary me-2" />Simulation et jumeau numérique
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseJumeau" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseJumeau">
            <a className="nav-link px-0 py-1 text-secondary small" href="#jumeau-concept">a) Présentation du concept</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#moteurs">b) Moteurs de simulation physique</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#choix-pybullet">c) Choix de PyBullet</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#bibliotheques">d) Bibliothèques d'implémentation</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#choix-cleanrl">e) Choix de CleanRL</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 5. ANALYSE DES BESOINS */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#besoins" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-list-check text-primary me-2" />Analyse des besoins
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseBesoins" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseBesoins">
            <a className="nav-link px-0 py-1 text-secondary small" href="#besoins-fonctionnels">a) Besoins fonctionnels</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#besoins-non-fonctionnels">b) Besoins non fonctionnels</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 6. CONFIGURATION DE L'ENVIRONNEMENT */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#config-env" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-gear text-primary me-2" />Configuration de l'environnement
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseConfig" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseConfig">
            <a className="nav-link px-0 py-1 text-secondary small" href="#anaconda">a) Création de l'espace de développement</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#dependances">b) Installation des dépendances</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#verif-install">c) Vérification de l'installation</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 7. CONCEPTION DE NIRYOENV */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#niryoenv" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-robot text-primary me-2" />Conception de NiryoEnv
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseNiryoEnv" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseNiryoEnv">
            <a className="nav-link px-0 py-1 text-secondary small" href="#architecture-env">a) Architecture générale</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#modelisation">b) Modélisation du bras</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#espace-action">c) Espace d'action</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#espace-observation">d) Espace d'observation</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#recompense">e) Fonction de récompense</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#cible-aleatoire">f) Génération de la cible</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#versions-env">g) Versions de l'environnement</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 8. APPRENTISSAGE PAR RENFORCEMENT */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#entrainement" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-graph-up text-primary me-2" />Apprentissage par renforcement
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseEntrainement" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseEntrainement">
            <a className="nav-link px-0 py-1 text-secondary small" href="#architecture-script">a) Architecture du script</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#hyperparametres">b) Configuration des hyperparamètres</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#boucle">c) Boucle d'entraînement</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#lancement">d) Lancement de l'entraînement</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#resultats">e) Résultats du premier cycle</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 9. BENCHMARK ET TESTS */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#benchmark" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-speedometer2 text-primary me-2" />Benchmark et tests
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseBenchmark" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseBenchmark">
            <a className="nav-link px-0 py-1 text-secondary small" href="#script-evaluation">a) Script d'évaluation</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#resultats-benchmark">b) Résultats du benchmark</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 10. DIFFICULTES ET SOLUTIONS */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#difficultes" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-exclamation-triangle text-primary me-2" />Difficultés et solutions
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseDifficultes" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseDifficultes">
            <a className="nav-link px-0 py-1 text-secondary small" href="#diff-1">a) Instabilité de v0</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#diff-2">b) Absence de signal</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#diff-3">c) Non-convergence</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#diff-4">d) Intégration CleanRL</a>
            </div>
        </div>
        
        {/* ============================================ */}
        {/* 11. SYNTHESE ET PERSPECTIVES */}
        {/* ============================================ */}
        <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
            <a href="#conclusion" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-flag text-primary me-2" />Synthèse et perspectives
            </a>
            <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseConclusion" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseConclusion">
            <a className="nav-link px-0 py-1 text-secondary small" href="#conclusion">Synthèse et perspectives</a>
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
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure1">Figure 1</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure2">Figure 2</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure3">Figure 3</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure4">Figure 4</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure9">Figure 9</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure10">Figure 10</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure11">Figure 11</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure12">Figure 12</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure13">Figure 13</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure14">Figure 14</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure15">Figure 15</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure16">Figure 16</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure17">Figure 17</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure18">Figure 18</a>
            <a className="nav-link px-0 py-1 text-secondary small" href="#figure19">Figure 19</a>
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
            </div>
        </div>
        </nav>
    </div>
    </div>
    {/* contenu principal */}
    <div className="col-md-9 ps-0 ps-md-2 pe-0">
      {/* ============================================ */}
      {/* 1. CONTEXTE DU PROJET */}
      {/* ============================================ */}
      <div id="contexte" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-info-circle-fill" /> 1. CONTEXTE DU PROJET</h2>
        <div id="entreprise">
          <h3 className="text-dark fw-bold">a) Présentation du laboratoire LINEACT</h3>
          {/* doc tech */}
          <p>CESI LINEACT (Laboratoire d'Innovation Numérique pour les Entreprises et les Apprentissages au service de la Compétitivité des Territoires) est l'Unité de Recherche officielle de l'école d'ingénieurs CESI. Né en 2015 avec la volonté de structurer les activités de recherche de l'école au service de ses dispositifs pédagogiques, le laboratoire a été officiellement labellisé "Unité de Recherche" en 2018. L'une de ses particularités est son maillage territorial : ses activités sont déployées sur l'ensemble des campus CESI à travers la France.</p>
          <p>Le laboratoire se positionne à l'interface exacte entre les mondes physiques et numériques. Il adopte une approche de recherche appliquée fortement centrée sur l'humain, en croisant plusieurs disciplines. Son but est de répondre concrètement aux besoins des entreprises partenaires tout en irriguant les formations de l'école.</p>
          <p>Les travaux de recherche sont appliqués à des domaines d'avenir majeurs :</p>
          <ul>
            <li>L'Industrie 5.0 (l'usine du futur).</li>
            <li>La construction 4.0 et la ville durable.</li>
            <li>Les services numériques et technologiques.</li>
            <li>Les formations et apprentissages du futur.</li>
          </ul>
          <p>La recherche au sein du laboratoire CESI LINEACT s'organise de manière transversale autour de deux pôles complémentaires :</p>
          <ul>
            <li><strong>Apprendre et Innover</strong> : cette équipe multidisciplinaire (psychologie, ergonomie, économie, etc.) se consacre à l'étude et à la conception d'écosystèmes d'apprentissage et d'innovation. Elle s'appuie sur un effectif paritaire de 14 chercheurs et 14 doctorants.</li>
            <li><strong>Ingénierie et Outils Numériques</strong> : structuré autour de 8 thématiques couvrant les sciences du numérique et de l'ingénieur, ce pôle de grande envergure rassemble 79 chercheurs et 43 doctorants.</li>
          </ul>
          <p>Pour mener à bien ces projets à la frontière du numérique et du monde physique, CESI LINEACT rassemble une force de frappe humaine et technique considérable. En cumulant les expertises de ses deux équipes, le laboratoire mobilise 93 chercheurs (incluant des Directeurs de Recherche et des chercheurs HDR) ainsi que 57 doctorants.</p>
          <p>Pour soutenir leurs travaux, l'unité s'appuie également sur trois plateformes technologiques de recherche et de transfert, dont la duplication numérique permet d'irriguer tous les campus : deux plateformes sont dédiées à l'usine du futur (Rouen et Nanterre) et une au bâtiment du futur (Nanterre).</p>
          <p>Intégré à l'équipe Ingénierie et Outils Numériques en tant qu'Assistant de Recherche, les missions se situent au cœur des problématiques de l'Industrie 5.0. Le travail se concentre sur la planification de trajectoire pour un bras robotique, en exploitant des environnements de simulation (jumeaux numériques) couplés à des algorithmes avancés d'apprentissage par renforcement. Les échanges quotidiens avec le tuteur enseignant-chercheur Alexandre PARANT et son doctorant Edmond SAMIA sont particulièrement enrichissants ; ils démontrent la pertinence du modèle de LINEACT où la recherche, le développement technique et la pédagogie s'alimentent mutuellement.</p>
        </div>
        <div id="objectifs" className="mt-5">
          <h3 className="text-dark fw-bold">b) Objectifs de la mission</h3>
          {/* doc tech */}
          <p>Le stage a pour but d'étudier et d'optimiser la planification de trajectoire pour un bras robotique de type Niryo Ned, en combinant un jumeau numérique et des algorithmes d'apprentissage par renforcement.</p>
          <p>Les missions s'articulent autour de trois objectifs opérationnels :</p>
          <ul>
            <li><strong>Environnement virtuel</strong> : Intégrer et configurer le jumeau numérique dans le moteur de simulation physique PyBullet pour recréer les contraintes réelles.</li>
            <li><strong>Phase d'apprentissage</strong> : Coder les algorithmes en Python et réaliser les phases d'entraînement du modèle de manière sécurisée au sein de la simulation.</li>
            <li><strong>Application physique</strong> : Déployer le programme sur le bras robotique réel pour vérifier la viabilité des trajectoires calculées et valider le transfert de la simulation vers la réalité.</li>
          </ul>
          <div id="figure1" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 400}}>
            <img src="images/IA_Figure1.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 1 : Logigramme des étapes de la mission</p>
          {/* doc tech */}
          <p>La réalisation de ce projet s'articule autour d'une méthodologie en cinq grandes phases : Cadrage théorique (état de l'art et analyse des besoins), Configuration de l'environnement (setup sous Anaconda et installation des dépendances PyBullet, Gymnasium, CleanRL), Conception de l'environnement virtuel (programmation Python du jumeau numérique du bras robotique), Apprentissage par renforcement (entraînement de l'agent virtuel appliqué à la physique simulée) et Benchmark et tests Sim-to-Real (évaluation des modèles générés et analyse des performances des trajectoires).</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 2. CADRAGE THEORIQUE */}
      {/* ============================================ */}
      <div id="cadrage" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-book-fill" /> 2. CADRAGE THÉORIQUE</h2>
        {/* doc tech */}
        <p>La robotique de manipulation est un domaine de recherche dynamique où l'automatisation de tâches complexes via des bras articulés se heurte aux limites des méthodes de contrôle classiques face à l'incertitude environnementale. Dans ce contexte, l'apprentissage par renforcement (RL) s'impose comme une alternative prometteuse, capable de générer des politiques de contrôle optimales par interaction directe plutôt que par modélisation exhaustive. Ce chapitre structure l'étude autour des fondements du RL, de l'algorithme SAC, de la simulation physique et des écosystèmes logiciels, afin de traduire ces concepts théoriques en exigences opérationnelles concrètes pour le projet.</p>
        <div id="def-rl">
          <h3 className="text-dark fw-bold">a) Définition de l'Apprentissage par Renforcement</h3>
          {/* doc tech */}
          <p>L'apprentissage par renforcement (Reinforcement Learning, RL) est une branche du machine learning dans laquelle un agent apprend à se comporter dans un environnement en exécutant des actions et en observant les récompenses qui en découlent (Sutton et Barto, 1998). À chaque pas de temps t, l'agent observe l'état sₜ, sélectionne une action aₜ selon sa politique courante π, reçoit une récompense scalaire rₜ et transite vers un nouvel état sₜ₊₁ ; l'objectif est d'apprendre une politique optimale π* maximisant l'espérance de la somme actualisée des récompenses futures. Ce paradigme se distingue de l'apprentissage supervisé par l'absence de données étiquetées, et de l'apprentissage non supervisé par la présence d'un signal de récompense orientant l'exploration.</p>
        </div>
        <div id="pdm" className="mt-5">
          <h3 className="text-dark fw-bold">b) Le processus de décision markovien</h3>
          {/* doc tech */}
          <p>Le cadre formel du RL est le Processus de Décision Markovien (PDM), défini par le quintuplet (S, A, P, R, γ) :</p>
          <ul>
            <li><strong>S</strong> : espace des états (positions et vitesses articulaires, pose de l'effecteur...)</li>
            <li><strong>A</strong> : espace des actions (couples ou positions articulaires cibles)</li>
            <li><strong>P</strong> : S × A → Δ(S) : fonction de transition probabiliste</li>
            <li><strong>R</strong> : S × A → ℝ : fonction de récompense immédiate</li>
            <li><strong>γ</strong> ∈ [0, 1) : facteur d'actualisation contrôlant l'horizon temporel</li>
          </ul>
          <p>L'hypothèse de Markov stipule que la distribution de probabilité de l'état suivant ne dépend que de l'état courant et de l'action, et non de l'historique complet des transitions. Cette propriété est fondamentale pour la tractabilité des algorithmes d'optimisation associés.</p>
        </div>
        <div id="bellman" className="mt-5">
          <h3 className="text-dark fw-bold">c) Fonctions de valeur et équations de Bellman</h3>
          {/* doc tech */}
          <p><strong>Fonction de valeur d'état Vπ(s)</strong> : elle quantifie le retour cumulé espéré en partant de l'état s et en suivant la politique π :</p>
          <p className="text-center fst-italic">Vπ(s) = ᵓπ [ Σₜ₌₀ ∞ γᵗ rₜ | s₀ = s ]</p>
          <p><strong>Fonction de valeur action-état Qπ (s, a)</strong> : elle étend cette notion en conditionnant sur l'action initiale :</p>
          <p className="text-center fst-italic">Qπ(s, a) = ᵓπ [ Σₜ₌₀ ∞ γᵗ rₜ | s₀ = s, a₀ = a ]</p>
          <p><strong>Equations de Bellman</strong> expriment la relation de récurrence entre ces fonctions : la valeur d'un état est égale à la récompense immédiate plus la valeur actualisée des états successeurs. Ces équations constituent le socle théorique de tous les algorithmes de RL modernes, car leur résolution par approximation conduit directement à la politique optimale π*.</p>
        </div>
        <div id="gradient" className="mt-5">
          <h3 className="text-dark fw-bold">d) Gradient de politique</h3>
          {/* doc tech */}
          <p>Pour les espaces d'action continus, comme c'est le cas pour la commande d'un bras robotique, les méthodes de gradient de politique optimisent directement les paramètres θ d'une politique paramétrique πθ en calculant le gradient de l'objectif J(πθ) par rapport à θ. Le théorème du gradient de politique (Policy Gradient Theorem, Sutton et al., 1999) fournit une expression analytique de ce gradient, calculable à partir d'échantillons de trajectoires :</p>
          <p className="text-center fst-italic">∇θ J(πθ) = ᵓπθ [∇θ log πθ(a|s) · Qπθ (s, a)]</p>
          <p>Les architectures acteur-critique exploitent cette décomposition en maintenant simultanément un réseau acteur (la politique paramétrique) et un réseau critique (approximateur de la fonction de valeur), permettant de réduire la variance des estimateurs de gradient tout en conservant un biais asymptotiquement nul.</p>
        </div>
        <div id="choix-algo" className="mt-5">
          <h3 className="text-dark fw-bold">e) Présentation des algorithmes en apprentissage par renforcement et choix</h3>
          {/* doc tech */}
          <p>L'évolution des algorithmes RL pour les espaces d'action continus peut être retracée depuis les premières méthodes tabulées (Q-learning, Watkins, 1989) jusqu'aux approches acteur-critique profondes contemporaines. Le tableau ci-dessous synthétise les algorithmes de référence pour le contrôle continu, segment pertinent pour la commande de bras robotiques articulés :</p>
          <div id="tableau1" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Algorithme</th><th>Type</th><th>Publication</th><th>Avantages</th><th>Inconvénients</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">TRPO</td><td>On-policy</td><td>Schulman, 2015</td><td>Convergence garantie, stable</td><td>Calcul coûteux (Hessien)</td></tr>
                <tr><td className="fw-bold">PPO</td><td>On-policy</td><td>Schulman, 2017</td><td>Très stable, simple à tuner</td><td>Efficacité données moyenne</td></tr>
                <tr><td className="fw-bold">DDPG</td><td>Off-policy</td><td>Lillicrap, 2016</td><td>Politique déterministe, rapide</td><td>Sensible aux hyperparamètres</td></tr>
                <tr><td className="fw-bold">TD3</td><td>Off-policy</td><td>Fujimoto, 2018</td><td>Réduit la surestimation Q</td><td>Moins exploratoire que SAC</td></tr>
                <tr><td className="fw-bold">SAC</td><td>Off-policy</td><td>Haarnoja, 2018</td><td>Entropie max, robuste, efficace</td><td>Architecture plus complexe</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 1 : Algorithme en RL</p>
          <p><strong>Justification du choix de SAC</strong> : Pour un projet de contrôle de bras robotique en espace d'action continu, SAC (Soft Actor-Critic) s'impose pour trois raisons décisives. Premièrement, sa nature off-policy lui confère une excellente efficacité d'échantillonnage, critique lorsque les simulations sont coûteuses en temps de calcul. Deuxièmement, la maximisation conjointe de l'entropie favorise une exploration systématique de l'espace des configurations articulaires, réduisant le risque de convergence prématurée vers des optima locaux. Troisièmement, SAC est reconnu pour sa robustesse aux hyperparamètres, propriété particulièrement précieuse en l'absence d'un protocole de réglage intensif (Haarnoja et al., 2018).</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 3. SOFT ACTOR-CRITIC (SAC) */}
      {/* ============================================ */}
      <div id="sac" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-cpu-fill" /> 3. PRÉSENTATION DU SOFT ACTOR-CRITIC (SAC)</h2>
        <div id="sac-def">
          <h3 className="text-dark fw-bold">a) Définition du SAC</h3>
          {/* doc tech */}
          <p>Le Soft Actor-Critic (SAC) est un algorithme d'apprentissage par renforcement profond de type acteur-critique basé sur le cadre de l'entropie maximale (Maximum Entropy RL). Introduit par Haarnoja et al. en 2018 (UC Berkeley), il est conçu pour les espaces d'action continus et repose sur une politique stochastique paramétrisée par un réseau de neurones profond. SAC est qualifié de soft car il ne cherche pas uniquement à maximiser la récompense cumulée, mais optimise conjointement la récompense et l'entropie de la politique, ce qui le différencie fondamentalement de ses prédécesseurs.</p>
          <p>SAC appartient à la famille des algorithmes off-policy : il exploite un replay buffer pour réutiliser des transitions passées indépendamment de la politique courante, améliorant considérablement son efficacité d'échantillonnage par rapport aux méthodes on-policy telles que PPO.</p>
          {/* depuis rapport */}
          <div className="alert alert-info mt-3">
            <i className="bi bi-info-circle-fill" /> SAC est un algorithme d'apprentissage par renforcement off-policy qui entraîne un agent à maximiser non seulement les récompenses, mais aussi l'entropie de sa politique c'est-à-dire à rester le plus aléatoire possible tout en étant performant. Cette idée centrale donne au SAC sa robustesse et sa capacité d'exploration.
          </div>
        </div>
        <div id="sac-objectif" className="mt-5">
          <h3 className="text-dark fw-bold">b) Objectif du SAC</h3>
          {/* doc tech */}
          <p>Contrairement aux algorithmes classiques, l'objectif du SAC intègre un terme d'entropie pour maximiser à la fois la récompense et la diversité des actions. Formellement, il maximise J(π) = Σₜ 𝔼π [ r(sₜ, aₜ) + α · H(π( · | sₜ)) ], où le coefficient de température α pilote le compromis entre exploration et exploitation. L'automatisation de l'apprentissage de α selon une entropie cible H̄ = −dim(A) renforce la robustesse pratique de l'algorithme en éliminant les réglages manuels complexes. Cet objectif augmenté permet non seulement d'éviter les optima locaux en encourageant une exploration approfondie des configurations articulaires, mais assure aussi une meilleure adaptabilité du bras robotique face aux perturbations ou aux imprécisions de modélisation du jumeau numérique.</p>
        </div>
        <div id="sac-fonctionnement" className="mt-5">
          <h3 className="text-dark fw-bold">c) Principe de fonctionnement</h3>
          {/* doc tech */}
          <p>SAC repose sur cinq composantes réseaux de neurones fonctionnant en interaction :</p>
          <ul>
            <li><strong>Acteur πθ(a|s)</strong> : réseau stochastique produisant une distribution gaussienne sur les actions</li>
            <li><strong>Critique 1 Qφ1(s,a) et Critique 2 Qφ2(s,a)</strong> : deux réseaux estimant la fonction de valeur action-état</li>
            <li><strong>Target Critic 1 et Target Critic 2</strong> : copies retardées des critiques, mises à jour par EMA (φ̅← τφ + (1-τ)φ̅)</li>
          </ul>
          <p>L'utilisation de deux critiques permet d'atténuer le phénomène de surestimation de la valeur Q, en retenant systématiquement le minimum des deux estimations lors des mises à jour. Cette technique, nommée clipped double-Q, est déterminante pour la stabilité de l'apprentissage.</p>
          <div id="figure2" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 350}}>
            <img src="images/IA_Figure2.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 2 : Schéma SAC</p>
          <p>La boucle d'entraînement du SAC alterne systématiquement entre une phase de collecte, où l'agent interagit avec l'environnement pour alimenter un replay buffer, et une phase de mise à jour basée sur l'échantillonnage de mini-batchs. Durant cette optimisation, les réseaux critiques sont ajustés pour minimiser l'erreur de Bellman incluant un terme d'entropie, tandis que la politique de l'acteur est affinée via le reparameterization trick pour maximiser l'équilibre récompense-entropie. Pour garantir la stabilité et la performance globale, le coefficient de température α est régulé automatiquement afin de piloter dynamiquement le compromis entre exploration et exploitation, tandis que les réseaux cibles sont mis à jour par moyenne mobile exponentielle pour stabiliser les objectifs d'apprentissage.</p>
          {/* depuis rapport */}
          <p>SAC repose sur trois réseaux appris et deux réseaux cibles figés :</p>
          {/* depuis rapport */}
          <ul>
            <li>l'Actor (politique stochastique π) produit une distribution gaussienne sur les actions. Il ne choisit pas une action déterministe, il échantillonne.</li>
            <li>les deux Critic Q₁ et Q₂ évaluent la qualité d'un couple (état, action). On en prend le minimum pour éviter la surestimation, biais classique en RL.</li>
            <li>les Target networks sont des copies lentes des Critic, mises à jour par une moyenne mobile (Polyak averaging, τ ≈ 0.005) pour stabiliser l'entraînement.</li>
            <li>le Replay buffer stocke des millions de transitions passées, permettant à SAC d'être off-policy : il réutilise des expériences anciennes, ce qui le rend bien plus efficace que PPO.</li>
          </ul>
          {/* depuis rapport */}
          <p>À chaque itération, SAC observe l'état, fait agir l'acteur, stocke la transition, puis tire un mini-batch du buffer pour mettre à jour les Critic et l'Actor (maximiser Q tout en maximisant l'entropie). Les target networks sont ensuite glissés doucement. Le coeur mathématique de SAC tient dans son objectif augmenté :</p>
          {/* depuis rapport */}
          <p className="text-center fst-italic">J(π) = E [Σ γᵗ (r (sₜ, aₜ) + α · H(π(·|sₜ)))]</p>
          {/* depuis rapport */}
          <p>Où H est l'entropie de la politique et α un coefficient de température. C'est ce terme d'entropie qui distingue SAC de DDPG ou TD3.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 4. SIMULATION PHYSIQUE ET JUMEAU NUMERIQUE */}
      {/* ============================================ */}
      <div id="jumeau" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-box-fill" /> 4. SIMULATION PHYSIQUE ET JUMEAU NUMÉRIQUE</h2>
        <div id="jumeau-concept">
          <h3 className="text-dark fw-bold">a) Présentation du concept de jumeau numérique</h3>
          {/* doc tech */}
          <p>Le concept de jumeau numérique désigne une réplique virtuelle fidèle d'un système physique permettant de simuler son comportement et de tester des stratégies de contrôle sans risque matériel ni coût d'expérimentation réelle. Formalisé autour de trois composantes l'entité physique, son équivalent virtuel et des flux d'informations bidirectionnels ce cadre sert d'environnement d'entraînement à l'agent en robotique. En intégrant précisément les propriétés physiques telles que la géométrie, les masses et les inerties, il permet de paralléliser la collecte d'expériences afin d'accélérer l'apprentissage. La fidélité de cette modélisation est alors la condition indispensable pour réduire l'écart de performance entre le virtuel et le réel, appelé gap sim-to-real.</p>
          <div id="figure3" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 350}}>
            <img src="images/IA_Figure3.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 3 : Jumeau numérique du bras Niryo Ned simulé sous PyBullet</p>
        </div>
        <div id="moteurs" className="mt-5">
          <h3 className="text-dark fw-bold">b) Présentation des moteurs de simulation physique</h3>
          {/* doc tech */}
          <div id="tableau2" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Moteur</th><th>Licence</th><th>Points forts</th><th>Compatibilité Windows</th><th>Usage RL</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">PyBullet / Bullet3</td><td>zlib (opensource)</td><td>Léger, Python-natif, URDF/SDF</td><td>Natif, pip install</td><td>Très répandu</td></tr>
                <tr><td className="fw-bold">MuJoCo</td><td>Apache 2.0 (2022)</td><td>Contacts très précis, benchmark</td><td>Natif, pip install</td><td>Référence recherche</td></tr>
                <tr><td className="fw-bold">Isaac Gym (NVIDIA)</td><td>Propriétaire</td><td>GPU parallèle massif, rapide</td><td>Natif (CUDA requis)</td><td>Industrie, grandes échelles</td></tr>
                <tr><td className="fw-bold">Gazebo / Ignition</td><td>Apache 2.0</td><td>Intégration ROS, prototypage</td><td>WSL2 requis (partiel)</td><td>Limité pour RL intensif</td></tr>
                <tr><td className="fw-bold">Webots</td><td>Apache 2.0</td><td>Interface intuitive</td><td>Natif</td><td>Peu utilisé en RL</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 2 : Moteurs de simulation physique</p>
        </div>
        <div id="choix-pybullet" className="mt-5">
          <h3 className="text-dark fw-bold">c) Choix de PyBullet et justification</h3>
          {/* doc tech */}
          <p>Pour ce projet exécuté sous Windows, PyBullet constitue le choix technologique optimal en raison de sa compatibilité native et de son installation simplifiée via Anaconda, supprimant le besoin de configurations complexes sous Linux. Le moteur se distingue par son mode DIRECT (headless), indispensable pour paralléliser l'entraînement sur CPU, ainsi que par son support natif du format URDF facilitant la modélisation des bras robotiques. Enfin, son intégration profonde dans la communauté RL via Gymnasium et sa capacité à simuler des systèmes à 6-7 degrés de liberté à une vitesse dix fois supérieure au temps réel garantissent des performances adaptées aux exigences de l'apprentissage intensif.</p>
          {/* depuis rapport */}
          <p>Pour ce projet, PyBullet 3.2.7 a été retenu pour sa compatibilité native Windows, son mode DIRECT (headless) indispensable pour l'entraînement intensif, et son support natif du format URDF.</p>
        </div>
        <div id="bibliotheques" className="mt-5">
          <h3 className="text-dark fw-bold">d) Bibliothèques d'implémentation algorithmique</h3>
          {/* doc tech */}
          <p>Plusieurs bibliothèques proposent des implémentations de référence des algorithmes RL :</p>
          <div id="tableau3" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Bibliothèque</th><th>Algorithmes couverts</th><th>Philosophie</th><th>Reproductibilité</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Stable-Baselines3</td><td>PPO, SAC, TD3, DDPG, A2C</td><td>API haut niveau, abstraction forte</td><td>Bonne</td></tr>
                <tr><td className="fw-bold">CleanRL</td><td>PPO, SAC, TD3, DDPG, DQN...</td><td>Single-file, lisibilité maximale</td><td>Excellente</td></tr>
                <tr><td className="fw-bold">RLlib (Ray)</td><td>Très large spectre</td><td>Distribué, scalable en cluster</td><td>Moyenne</td></tr>
                <tr><td className="fw-bold">Tianshou</td><td>PPO, SAC, TD3, et +</td><td>Modulaire, recherche avancée</td><td>Bonne</td></tr>
                <tr><td className="fw-bold">Acme (DeepMind)</td><td>Très large spectre</td><td>Recherche interne DeepMind</td><td>Limitée (usage acad.)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 3 : Bibliothèque RL</p>
        </div>
        <div id="choix-cleanrl" className="mt-5">
          <h3 className="text-dark fw-bold">e) Choix de CleanRL et justification</h3>
          {/* doc tech */}
          <p>La bibliothèque CleanRL a été sélectionnée pour ce projet en raison de sa philosophie « single-file » qui privilégie une implémentation autonome et transparente, facilitant ainsi la compréhension algorithmique ligne à ligne, indispensable dans un contexte de recherche. Ce choix garantit une excellente reproductibilité des résultats grâce à une gestion rigoureuse des graines aléatoires (seeds), répondant directement aux standards académiques de lutte contre la crise de la reproductibilité. De plus, l'outil offre un suivi natif des performances via TensorBoard et assure une compatibilité immédiate avec les interfaces Gymnasium développées pour le bras Niryo Ned. Enfin, sa simplicité d'installation sous Windows au sein d'un environnement Anaconda standard en fait une solution parfaitement adaptée aux contraintes logicielles du laboratoire.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 5. ANALYSE DES BESOINS DU PROJET */}
      {/* ============================================ */}
      <div id="besoins" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-list-check" /> 5. ANALYSE DES BESOINS DU PROJET</h2>
        {/* doc tech */}
        <p>L'analyse des besoins a été conduite selon une approche descendante, en déclinant les objectifs fonctionnels du projet en exigences techniques spécifiées. Les enseignements de la revue de littérature ont alimenté chaque niveau de cette décomposition, permettant de justifier les choix technologiques par des références établies plutôt que par simple commodité.</p>
        <div id="besoins-fonctionnels">
          <h3 className="text-dark fw-bold">a) Besoins fonctionnels</h3>
          {/* doc tech */}
          <div id="tableau4" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>ID</th><th>Besoin fonctionnel</th><th>Justification issue de la littérature</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">BF01</td><td>Simulation physique fidèle du bras (dynamique, contacts)</td><td>Nécessaire pour limiter le gap sim-to-real (Tobin et al., 2017)</td></tr>
                <tr><td className="fw-bold">BF02</td><td>Interface standardisée avec les algorithmes RL</td><td>Interopérabilité Gymnasium (Brockman et al., 2016)</td></tr>
                <tr><td className="fw-bold">BF03</td><td>Implémentation reproductible de SAC</td><td>CleanRL garantit la reproductibilité (Huang et al., 2022)</td></tr>
                <tr><td className="fw-bold">BF04</td><td>Définition d'une fonction de récompense dense</td><td>Réduire la rareté du signal (Andrychowicz et al., 2017)</td></tr>
                <tr><td className="fw-bold">BF05</td><td>Suivi en temps réel des métriques d'entraînement</td><td>Diagnostic de convergence, détection de pathologies</td></tr>
                <tr><td className="fw-bold">BF06</td><td>Évaluation des politiques apprises sur scénarios tests</td><td>Séparer entraînement et généralisation</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 4 : Besoins fonctionnels</p>
        </div>
        <div id="besoins-non-fonctionnels" className="mt-5">
          <h3 className="text-dark fw-bold">b) Besoins non fonctionnels</h3>
          {/* doc tech */}
          <div id="tableau5" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Critère</th><th>Exigence</th><th>Niveau cible</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Reproductibilité</td><td>Résultats identiques donnée une seed fixée</td><td>Obligatoire</td></tr>
                <tr><td className="fw-bold">Performance de simulation</td><td>Vitesse sup. au temps réel (wallclock ratio)</td><td>&gt; 10x en mode DIRECT</td></tr>
                <tr><td className="fw-bold">Maintenabilité</td><td>Code documenté, conforme aux standards PEP-8</td><td>Obligatoire</td></tr>
                <tr><td className="fw-bold">Portabilité</td><td>Exécution sur Windows, CPU sans GPU dédié</td><td>Obligatoire</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 5 : Besoins non fonctionnels</p>
          <p>Au terme de cette analyse, la chaîne technologique retenue :</p>
          <ul>
            <li>PyBullet pour la simulation physique,</li>
            <li>Gymnasium pour la standardisation de l'interface,</li>
            <li>CleanRL pour les implémentations algorithmiques</li>
          </ul>
          <p>répond de manière cohérente à l'ensemble des besoins identifiés. Cette pile logicielle présente l'avantage d'être entièrement open-source, largement adoptée dans la communauté académique, et de s'intégrer naturellement dans l'écosystème Anaconda sous Windows pour la gestion des dépendances.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 6. CONFIGURATION DE L'ENVIRONNEMENT DE TRAVAIL */}
      {/* ============================================ */}
      <div id="config-env" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-gear-fill" /> 6. CONFIGURATION DE L'ENVIRONNEMENT DE TRAVAIL</h2>
        {/* doc tech */}
        <p>La mise en place d'un environnement de développement reproductible et isolé constitue un prérequis méthodologique fondamental pour tout projet d'apprentissage par renforcement. La multiplicité des bibliothèques impliquées (simulation physique, interfaces RL, Framework d'apprentissage profond) génère des contraintes de compatibilité entre versions qui peuvent compromettre la stabilité du pipeline si elles ne sont pas rigoureusement gérées. Anaconda, gestionnaire de paquets et d'environnements Python, répond à cette exigence en permettant la création d'espaces d'exécution étanches, chacun disposant de ses propres versions d'interpréteur et de bibliothèques, sans interférence avec le système hôte ni avec d'autres projets.</p>
        <p>Le présent projet est développé sous Windows 11, avec Anaconda distribution Python 3.10. Ce choix de version est motivé par la compatibilité optimale documentée entre Python 3.10 et l'ensemble de la chaîne technologique retenue : PyBullet, Gymnasium, CleanRL et PyTorch. Python 3.10 constitue à ce jour la version de référence recommandée par les mainteneurs de ces bibliothèques pour des environnements de production stables.</p>
        <div id="anaconda">
          <h3 className="text-dark fw-bold">a) Création de l'espace de développement sous Anaconda</h3>
          {/* doc tech */}
          <p>L'environnement de développement est créé depuis l'Anaconda Prompt, interface en ligne de commande native sous Windows 11. La création d'un environnement dédié, nommé NewEnv, garantit l'isolation complète des dépendances du projet vis-à-vis du système de base et de tout autre projet Python installé sur la machine :</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Création de l'environnement isolé avec Python 3.10{"\n"}
conda create -n NewEnv python=3.10{"\n"}
{"\n"}
# Activation de l'environnement{"\n"}
conda activate NewEnv</code></pre>
          <p className="text-center small mt-1">Figure 4 : Script environnement virtuel</p>
          <div id="figure4" />
          <p>Une fois l'environnement activé, le préfixe (NewEnv) apparaît dans l'invite de commande, confirmant que toutes les installations et exécutions ultérieures sont confinées à cet espace de travail.</p>
        </div>
        <div id="dependances" className="mt-5">
          <h3 className="text-dark fw-bold">b) Installation des dépendances</h3>
          {/* doc tech */}
          <p>L'installation des bibliothèques suit un ordre précis, dicté par les relations de dépendance entre paquets. L'ensemble des installations est réalisé via pip au sein de l'environnement conda activé, garantissant la cohérence des versions retenues.</p>
          <h5 className="mt-3">PyTorch</h5>
          <p>PyTorch est installé en premier, car il constitue le moteur de calcul tensoriel sur lequel reposent CleanRL et les réseaux de neurones de l'agent SAC (acteur, critiques, réseaux cibles). Sous Windows 11 sans GPU NVIDIA dédié, la version CPU est suffisante pour les volumes d'entraînement envisagés dans ce projet :</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Installation de PyTorch{"\n"}
pip install torch torchvision torchaudio</code></pre>
          <h5 className="mt-3">PyBullet</h5>
          <p>PyBullet se distingue par une installation simplifiée sous Windows 11 grâce à une version précompilée, évitant ainsi les processus complexes de compilation à partir des sources. Il intègre nativement la bibliothèque pybullet_data, qui fournit un accès immédiat à divers modèles URDF de référence pour accélérer la mise en place du jumeau numérique.</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Installation du moteur de simulation physique{"\n"}
pip install pybullet</code></pre>
          <h5 className="mt-3">Gymnasium</h5>
          <p>Gymnasium, interface standardisée des environnements RL maintenue par la Farama Foundation, est installée dans sa version de base :</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Installation de l'interface Gymnasium{"\n"}
pip install gymnasium</code></pre>
          <h5 className="mt-3">CleanRL</h5>
          <p>CleanRL est obtenu directement depuis son dépôt GitHub officiel. Cette méthode est préférable à l'installation via pip car elle donne accès aux scripts d'entraînement entièrement modifiables, aux fichiers de configuration et aux exemples d'utilisation. Sous Windows 11, Git for Windows doit être préalablement installé (disponible sur gitscm.com) pour que la commande git clone soit disponible depuis l'Anaconda Prompt :</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Clonage du dépôt CleanRL{"\n"}
git clone https://github.com/vwxyzjn/cleanrl.git{"\n"}
cd cleanrl</code></pre>
          <h5 className="mt-3">TensorBoard</h5>
          <p>TensorBoard, développé par Google, fournit un tableau de bord interactif pour le suivi en temps réel des métriques d'entraînement : récompense cumulée par épisode, entropie de la politique, pertes des réseaux acteur et critiques. Il est nativement intégré dans les scripts CleanRL :</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Installation de TensorBoard{"\n"}
pip install tensorboard</code></pre>
        </div>
        <div id="verif-install" className="mt-5">
          <h3 className="text-dark fw-bold">c) Vérification de l'installation</h3>
          {/* doc tech */}
          <p>Un test fonctionnel approfondi a éte conduit pour valider l'intégrité du moteur de simulation PyBullet. Ce script charge le modèle URDF du bras robotique utilisé dans le projet, instancie les contrôleurs articulaires et exécute une boucle de simulation interactive en mode graphique (p.GUI), permettant de manipuler visuellement chaque articulation du robot via des curseurs d'interface. Ce test constitue une validation complète de la chaîne : chargement URDF, contrôle en position et boucle temps réel à 240 Hz :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>import pybullet as p{"\n"}
import pybullet_data{"\n"}
import time{"\n"}
{"\n"}
p.connect(p.GUI){"\n"}
p.setAdditionalSearchPath(pybullet_data.getDataPath()){"\n"}
p.setGravity(0, 0, -9.81){"\n"}
{"\n"}
p.loadURDF("plane.urdf"){"\n"}
{"\n"}
robot_path = r"C:\Users\astri\OneDrive\Desktop\ned_model\ned_custom.urdf"{"\n"}
# useFixedBase=True est CRUCIAL pour que le robot ne tombe pas !{"\n"}
robotId = p.loadURDF(robot_path, basePosition=[0,0,0], useFixedBase=True){"\n"}
{"\n"}
num_joints = p.getNumJoints(robotId){"\n"}
sliders = []{"\n"}
for i in range(num_joints):{"\n"}
{"    "}info = p.getJointInfo(robotId, i){"\n"}
{"    "}# On filtre pour ne garder que les joints mobiles (pas les fixes){"\n"}
{"    "}if info[2] != p.JOINT_FIXED:{"\n"}
{"        "}slider = p.addUserDebugParameter(f"Joint {"{"}i{"}"}", -3.14, 3.14, 0){"\n"}
{"        "}sliders.append((i, slider)){"\n"}
{"\n"}
while True:{"\n"}
{"    "}for joint_index, slider_id in sliders:{"\n"}
{"        "}target_pos = p.readUserDebugParameter(slider_id){"\n"}
{"        "}p.setJointMotorControl2(robotId, joint_index, p.POSITION_CONTROL,{"\n"}
{"                    "}targetPosition=target_pos){"\n"}
{"    "}p.stepSimulation(){"\n"}
{"    "}time.sleep(1./240.)</code></pre>
          <p className="text-center small mt-1">Script test fonctionnel chargement du modèle URDF et contrôle interactif des articulations</p>
          <p>Ce script charge spécifiquement le modèle ned_custom.urdf, modèle URDF du bras robotique utilisé dans ce projet. Le paramètre useFixedBase=True est indispensable : il fixe la base du robot au sol, évitant que la gravité ne fasse chuter l'ensemble du bras. La boucle tourne à une fréquence de 240 Hz, fréquence standard des simulations PyBullet, assurant une intégration temporelle stable de la dynamique articulaire. L'exécution sans erreur de ce script, et l'affichage correct du robot dans l'interface graphique PyBullet, constituent la condition nécessaire pour procéder à l'étape suivante : la conception de l'environnement Gymnasium.</p>
          <h5 className="mt-3">Synthèse de l'environnement de travail</h5>
          <div id="tableau6" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Composante</th><th>Version</th><th>Rôle dans le projet</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Windows 11</td><td>—</td><td>Système d'exploitation hôte</td></tr>
                <tr><td className="fw-bold">Anaconda</td><td>Python 3.10</td><td>Gestion isolée de l'environnement NewEnv et ses dépendances</td></tr>
                <tr><td className="fw-bold">PyTorch</td><td>2.x (CPU)</td><td>Moteur de calcul tensoriel pour les réseaux de neurones SAC</td></tr>
                <tr><td className="fw-bold">PyBullet</td><td>3.x</td><td>Simulation physique du jumeau numérique du bras robotique</td></tr>
                <tr><td className="fw-bold">Gymnasium</td><td>0.29.x</td><td>Interface standardisée entre l'environnement et les algorithmes RL</td></tr>
                <tr><td className="fw-bold">CleanRL</td><td>GitHub (latest)</td><td>Implémentation de référence de l'algorithme SAC</td></tr>
                <tr><td className="fw-bold">TensorBoard</td><td>2.x</td><td>Suivi temps réel des métriques pendant l'entraînement</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 6 : Récapitulatif environnement de travail</p>
          <p>Cette configuration constitue le socle technique stable sur lequel repose l'intégralité du développement ultérieur. L'isolation assurée par l'environnement conda NewEnv garantit la reproductibilité complète du pipeline : tout collaborateur ou évaluateur peut reconstituer un environnement fonctionnellement identique en exécutant la séquence de commandes décrites dans ce chapitre, indépendamment de sa configuration système préexistante sous Windows 11.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 7. CONCEPTION DE L'ENVIRONNEMENT VIRTUEL NIRYOENV */}
      {/* ============================================ */}
      <div id="niryoenv" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-robot" /> 7. CONCEPTION DE L'ENVIRONNEMENT VIRTUEL NIRYOENV</h2>
        {/* doc tech */}
        <p>Cette phase agit comme le pivot technique entre la simulation PyBullet, le modèle URDF du Niryo Ned et les algorithmes de CleanRL.</p>
        <ul>
          <li><strong>Standardisation</strong> : L'implémentation sous forme de classe Python héritant de gymnasium.Env assure une interopérabilité totale avec les standards de la Farama Foundation et l'algorithme SAC.</li>
          <li><strong>Objectif opérationnel</strong> : L'agent doit résoudre une tâche d'atteinte de cible (reach task) en stabilisant l'effecteur à moins de 5 cm d'un point généré aléatoirement.</li>
          <li><strong>Maîtrise du contrôle</strong> : La mission exige que l'IA assimile la cinématique directe et les contraintes de butées articulaires pour produire des trajectoires fluides et économes en énergie.</li>
        </ul>
        <div id="architecture-env">
          <h3 className="text-dark fw-bold">a) Architecture générale de la classe NiryoEnv</h3>
          {/* doc tech */}
          <p>La classe NiryoEnv respecte rigoureusement le standard Gymnasium pour assurer une communication fluide entre l'IA et le moteur physique.</p>
          <div id="tableau7" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Méthode</th><th>Type</th><th>Rôle</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">__init__()</td><td>Constructeur</td><td>Déclaration des espaces, connexion PyBullet, paramètres de contrôle</td></tr>
                <tr><td className="fw-bold">reset()</td><td>Obligatoire (Gymnasium)</td><td>Réinitialisation de la simulation, placement aléatoire de la cible, retour observation initiale</td></tr>
                <tr><td className="fw-bold">step(action)</td><td>Obligatoire (Gymnasium)</td><td>Application de l'action, avance de la simulation, calcul récompense, évaluation terminaison</td></tr>
                <tr><td className="fw-bold">_get_obs()</td><td>Interne</td><td>Construction et normalisation du vecteur d'observation 18 dimensions</td></tr>
                <tr><td className="fw-bold">close()</td><td>Obligatoire (Gymnasium)</td><td>Déconnexion propre du client PyBullet</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 7 : Standard Gymnasium</p>
        </div>
        <div id="modelisation" className="mt-5">
          <h3 className="text-dark fw-bold">b) Modélisation du bras Niryo Ned</h3>
          {/* doc tech */}
          <p>Le bras robotique Niryo Ned est défini par un fichier URDF (Unified Robot Description Format), un standard industriel qui répertorie avec précision la géométrie, les masses, les inerties et les contraintes de chaque articulation.</p>
          <p>Pour garantir que la simulation démarre toujours sur une base saine, ce modèle est rechargé lors de chaque réinitialisation via l'instruction suivante :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>self.robotId = p.loadURDF({"\n"}
{"    "}self.robot_path,{"\n"}
{"    "}basePosition=[0, 0, 0],{"\n"}
{"    "}useFixedBase=True,{"\n"}
{"    "}physicsClientId=self.client,{"\n"}
)</code></pre>
          <p className="text-center small mt-1">Figure 9 : Script chargement modèle URDF avec base fixée au sol</p>
          <div id="figure9" />
          <p>Le modèle URDF du Niryo Ned comporte deux types d'articulations : les joints mobiles (revolute), dotés de degrés de liberté, et les joints fixes, qui sont des liaisons mécaniques rigides. Pour piloter le robot, le système identifie dynamiquement les six premières articulations mobiles en filtrant les composants de type JOINT_FIXED :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>self.joint_indices = []{"\n"}
for i in range(p.getNumJoints(self.robotId, physicsClientId=self.client)):{"\n"}
{"    "}info = p.getJointInfo(self.robotId, i, physicsClientId=self.client){"\n"}
{"    "}if info[2] != p.JOINT_FIXED:{"\n"}
{"        "}self.joint_indices.append(i){"\n"}
self.joint_indices = self.joint_indices[:6]</code></pre>
          <p className="text-center small mt-1">Figure 11 : Script collecte dynamique des 6 joints mobiles</p>
          <div id="figure11" />
        </div>
        <div id="espace-action" className="mt-5">
          <h3 className="text-dark fw-bold">c) Définition de l'espace d'action</h3>
          {/* doc tech */}
          <p>L'espace d'action de l'agent repose sur un contrôle par déplacement incrémental (delta control). Plutôt que de commander des positions absolues, l'IA génère des variations angulaires fluides, limitées par une constante de sécurité DELTA_MAX = 0.05 rad, ce qui évite les saccades brusques dommageables pour les servomoteurs réels.</p>
          <p>Le protocole de sécurité en 5 étapes :</p>
          <ul>
            <li><strong>Clipping initial</strong> : L'action brute produite par le réseau de neurones est systématiquement contrainte dans l'intervalle [-1, 1].</li>
            <li><strong>Calcul de la variation</strong> : Le déplacement réel est obtenu par l'opération : delta = action × DELTA_MAX.</li>
            <li><strong>Actualisation de la cible</strong> : La nouvelle position visée est calculée par target = current_pos + delta.</li>
            <li><strong>Respect des butées physiques</strong> : Un second clipping garantit que la cible reste strictement comprise dans les limites articulaires [JOINT_LOWER_RAD, JOINT_UPPER_RAD].</li>
            <li><strong>Pilotage PyBullet</strong> : L'ordre final est exécuté via le mode POSITION_CONTROL avec une force maximale limitée à 50 N·m par articulation pour protéger la mécanique.</li>
          </ul>
          <pre className="bg-dark text-white p-3 rounded"><code>delta{"  "}= action * self.DELTA_MAX{"\n"}
target = np.clip({"\n"}
{"    "}current_pos + delta,{"\n"}
{"    "}self.JOINT_LOWER_RAD[self.CONTROLLED_JOINTS],{"\n"}
{"    "}self.JOINT_UPPER_RAD[self.CONTROLLED_JOINTS],{"\n"}
){"\n"}
for k, i in enumerate(self.CONTROLLED_JOINTS):{"\n"}
{"    "}p.setJointMotorControl2({"\n"}
{"        "}self.robotId, self.joint_indices[i],{"\n"}
{"        "}p.POSITION_CONTROL,{"\n"}
{"        "}targetPosition=float(target[k]),{"\n"}
{"        "}force=50.0,{"\n"}
{"        "}physicsClientId=self.client,{"\n"}
)</code></pre>
          <p className="text-center small mt-1">Figure 12 : Script application de l'action avec contrôle en position et protection des butées</p>
          <div id="figure12" />
        </div>
        <div id="espace-observation" className="mt-5">
          <h3 className="text-dark fw-bold">d) Définition de l'espace d'observation</h3>
          {/* doc tech */}
          <p>Le vecteur d'observation est de dimension 18, entièrement normalisé dans [-1, 1]. Cette normalisation garantit l'équilibre des gradients dans les réseaux de neurones de SAC :</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Positions → [-1,1] via limites articulaires URDF{"\n"}
pos_norm = (positions - self.JOINT_LOWER_RAD) / \{"\n"}
{"        "}(self.JOINT_UPPER_RAD - self.JOINT_LOWER_RAD) * 2.0 - 1.0{"\n"}
{"\n"}
# Vitesses : clip explicite sur ±10 rad/s{"\n"}
vel_norm = np.clip(velocities / 10.0, -1.0, 1.0){"\n"}
{"\n"}
# Delta direction et amplitude vers la cible (normalisé sur ±0.5 m){"\n"}
delta_norm = np.clip((self.target_pos - eef_pos) / 0.5, -1.0, 1.0){"\n"}
{"\n"}
# Position EEF absolue (normalisée sur ±1.0 m){"\n"}
eef_norm = np.clip(eef_pos / 1.0, -1.0, 1.0){"\n"}
{"\n"}
obs = np.concatenate([pos_norm, vel_norm, delta_norm, eef_norm])</code></pre>
          <p className="text-center small mt-1">Figure 13 : Script construction du vecteur d'observation 18 dimensions normalisé</p>
          <div id="figure13" />
        </div>
        <div id="recompense" className="mt-5">
          <h3 className="text-dark fw-bold">e) Conception de la fonction de récompense</h3>
          {/* doc tech */}
          <p>La fonction de récompense est de type dense exponentielle avec bonus sparse et pénalité énergétique. La récompense totale à chaque pas de temps se décompose en trois termes :</p>
          <div id="tableau8" className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary"><tr><th>Terme</th><th>Expression</th><th>Rôle</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Récompense dense</td><td>exp(−20 · d) − 1.0</td><td>Signal continu guidant l'effecteur vers la cible</td></tr>
                <tr><td className="fw-bold">Pénalité énergie</td><td>−0.05 · ‖δ‖²</td><td>Pénalise les mouvements brusques, favorise la fluidité</td></tr>
                <tr><td className="fw-bold">Bonus d'atteinte</td><td>+5.0 si d &lt; 0.05 m</td><td>Signal sparse récompensant explicitement le succès</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 8 : Termes récompense</p>
        </div>
        <div id="cible-aleatoire" className="mt-5">
          <h3 className="text-dark fw-bold">f) Initialisation et génération de la cible aléatoire</h3>
          {/* doc tech */}
          <p>La méthode reset() réinitialise intégralement la simulation en injectant un léger bruit articulaire ([-0.05, 0.05] rad) et une cible aléatoire dans l'espace de travail, forçant l'agent à généraliser son apprentissage dès le départ.</p>
          <pre className="bg-dark text-white p-3 rounded"><code>self.target_pos = np.array([{"\n"}
{"    "}self.np_random.uniform(0.2, 0.5),{"   "}# x : 20 → 50 cm{"\n"}
{"    "}self.np_random.uniform(-0.2, 0.2),{"  "}# y : -20 → +20 cm{"\n"}
{"    "}self.np_random.uniform(0.1, 0.4),{"   "}# z : 10 → 40 cm{"\n"}
], dtype=np.float32)</code></pre>
          <p className="text-center small mt-1">Figure 14 : Script génération aléatoire de la position cible dans l'espace de travail</p>
          <div id="figure14" />
          <p>L'architecture de NiryoEnv est optimisée pour transformer une simulation physique brute en un problème d'apprentissage par renforcement soluble et performant. Sa conception repose sur trois piliers :</p>
          <ul>
            <li><strong>Efficacité algorithmique</strong> : En limitant le contrôle à 4 articulations clés, on réduit drastiquement l'espace de recherche de l'IA sans sacrifier la pertinence de la tâche.</li>
            <li><strong>Ingénierie de la récompense</strong> : Le choix d'une récompense dense exponentielle exp(−20⋅d)−1 assure un signal d'apprentissage constant, tandis que la pénalité d'énergie −0.05⋅∥δ∥2 garantit des mouvements fluides et réalistes.</li>
            <li><strong>Robustesse industrielle</strong> : L'implémentation du multi-instance via physicsClientId permet de faire tourner des dizaines de simulations en parallèle.</li>
          </ul>
        </div>
        <div id="versions-env" className="mt-5">
          <h3 className="text-dark fw-bold">g) Versions de l'environnement</h3>
          {/* depuis rapport */}
          <p>NiryoEnv est une classe Python conforme au standard Gymnasium qui encapsule le jumeau numérique du bras Niryo Ned simulé sous PyBullet. Trois versions successives ont été développées de manière incrémentale :</p>
          {/* depuis rapport */}
          <ul>
            <li><strong>NiryoEnv v0</strong> : version initiale avec espace d'action 6D en position directe, 12 dimensions non normalisées et une récompense −exp(−20·d)</li>
            <li><strong>NiryoEnv v1</strong> : améliorations fondamentales avec contrôle incrémental 4D (DELTA_MAX = 0,05 rad), 18 dimensions normalisées [-1,1] et une récompense dense exponentielle + bonus sparse</li>
            <li><strong>NiryoEnv v2</strong> : variante v1 avec récompense linéaire −d pour comparaison benchmarkée</li>
          </ul>
          {/* doc tech */}
          <p><strong>NiryoEnv (NewEnv)</strong> constitue la version initiale, expérimentale. Son espace d'action à 6 dimensions avec contrôle en position directe (action × π) génère des mouvements brusques peu compatibles avec SAC. L'absence de normalisation de l'observation et de bonus sparse limite la capacité de l'agent à distinguer les configurations proches de la cible.</p>
          <p><strong>NiryoEnv v1</strong> introduit les améliorations fondamentales : passage au contrôle incrémental (DELTA_MAX = 0.05 rad), normalisation complète de l'observation en 18 dimensions, récompense exponentielle exp(−20·d) offrant un gradient dense fort à proximité de la cible, et enrichissement du dictionnaire info avec position, vitesse, orientation et angles RPY de l'effecteur.</p>
          <p><strong>NiryoEnv v2</strong> conserve la structure de v1 en modifiant uniquement la fonction de récompense : le terme exponentiel est remplacé par une pénalité linéaire −d, plus simple. La pénalité énergétique est réduite (−0.01·‖a‖² contre −0.05·‖δ‖² en v1), réduisant la contrainte sur l'amplitude des actions.</p>
          <div id="tableau9" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Caractéristique</th><th>NiryoEnv (NewEnv)</th><th>NiryoEnv v1</th><th>NiryoEnv v2</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Espace d'action</td><td>Box 6 dims ×π (pos. directe)</td><td>Box 4 dims delta (×0.05 rad)</td><td>Box 4 dims delta (×0.05 rad)</td></tr>
                <tr><td className="fw-bold">Espace d'observation</td><td>12 dims non normalisées</td><td>18 dims normalisées [-1,1]</td><td>18 dims normalisées [-1,1]</td></tr>
                <tr><td className="fw-bold">Fonction de récompense</td><td>−exp(−20·d)</td><td>exp(−20·d)−1−0.05·‖δ‖²</td><td>−d − 0.01·‖a‖²</td></tr>
                <tr><td className="fw-bold">Bonus d'atteinte</td><td>Aucun</td><td>+5.0 si d &lt; 0.05 m</td><td>+5.0 si d &lt; 0.05 m</td></tr>
                <tr><td className="fw-bold">Max steps / épisode</td><td>300</td><td>500</td><td>500</td></tr>
                <tr><td className="fw-bold">Sous-pas simulation</td><td>20 par step</td><td>8 par step</td><td>8 par step</td></tr>
                <tr><td className="fw-bold">Bruit initial</td><td>Non</td><td>Oui (±0.05 rad)</td><td>Oui (±0.05 rad)</td></tr>
                <tr><td className="fw-bold">Espace de travail cible</td><td>x[0.2,0.4] z[0.1,0.3]</td><td>x[0.2,0.5] z[0.1,0.4]</td><td>x[0.2,0.5] z[0.1,0.4]</td></tr>
                <tr><td className="fw-bold">Info dict enrichi</td><td>pos EEF uniquement</td><td>pos+vel+orientation+RPY</td><td>distance+is_success</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 9 : Récapitulatif comparatif des trois versions d'environnement</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 8. APPRENTISSAGE PAR RENFORCEMENT */}
      {/* ============================================ */}
      <div id="entrainement" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-graph-up-arrow" /> 8. APPRENTISSAGE PAR RENFORCEMENT</h2>
        {/* doc tech */}
        <p>La phase d'entraînement mobilise l'algorithme Soft Actor-Critic (SAC) au sein du framework CleanRL pour dériver une politique de contrôle optimale par interaction itérative avec le jumeau numérique NiryoEnv. Le processus, automatisé par un mécanisme de sauvegarde de modèle, s'étend sur un horizon de 300 000 pas de temps (timesteps), incluant une phase d'exploration stochastique initiale de 5 000 pas (learning_starts = 5000) dédiée à l'amorçage du replay buffer et à la stabilisation de l'apprentissage.</p>
        {/* depuis rapport */}
        <p>Afin de bien contextualiser cette démarche, il est essentiel de définir l'objectif physique de cet apprentissage : l'agent doit apprendre à piloter l'effecteur final du bras robotique simulé pour l'amener à une distance inférieure à 5 cm d'une cible (représentée par une boule) dont la position spatiale est générée aléatoirement à chaque épisode.</p>
        {/* depuis rapport */}
        <p>In fine, la finalité de cet entraînement en simulation est de doter le robot de la capacité à générer de manière totalement autonome une trajectoire fluide et optimale vers n'importe quel point de consigne donné dans son espace de travail.</p>
        <div id="architecture-script">
          <h3 className="text-dark fw-bold">a) Architecture du script d'entraînement</h3>
          {/* doc tech */}
          <p>Le script standard sac_continuous_action.py de CleanRL a été modifié sur deux points principaux. Premièrement, l'import et l'instanciation directe de NiryoEnv remplacent l'appel à gym.make(). Deuxièmement, un mécanisme de sauvegarde des poids de l'acteur a été ajouté en fin d'entraînement :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>from niryo_env_v2 import NiryoEnv{"\n"}
{"\n"}
def make_env(env_id, seed, idx, capture_video, run_name):{"\n"}
{"    "}def thunk():{"\n"}
{"        "}env = NiryoEnv(){"  "}# instanciation directe{"\n"}
{"        "}env = gym.wrappers.RecordEpisodeStatistics(env){"\n"}
{"        "}env.action_space.seed(seed){"\n"}
{"        "}return env{"\n"}
{"    "}return thunk</code></pre>
          <p className="text-center small mt-1">Figure 15 : Script adaptation de la fonction make_env pour NiryoEnv</p>
          <div id="figure15" />
          <p>Le script définit deux architectures de réseaux de neurones entièrement connectés, conformément à l'architecture SAC standard :</p>
          <div id="tableau10" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Réseau</th><th>Classe</th><th>Architecture</th><th>Entrée → Sortie</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Acteur πθ</td><td>Actor</td><td>3 couches fully-connected</td><td>18 → 256 → 256 → [μ, logσ] (4 dims)</td></tr>
                <tr><td className="fw-bold">Critique Qφ1</td><td>SoftQNetwork</td><td>3 couches fully-connected</td><td>18+4=22 → 256 → 256 → 1</td></tr>
                <tr><td className="fw-bold">Critique Qφ2</td><td>SoftQNetwork</td><td>3 couches fully-connected</td><td>18+4=22 → 256 → 256 → 1</td></tr>
                <tr><td className="fw-bold">Target Qφ1̅</td><td>SoftQNetwork (gelé)</td><td>Copie EMA de Qφ1</td><td>Mise à jour via τ = 0.005</td></tr>
                <tr><td className="fw-bold">Target Qφ2̅</td><td>SoftQNetwork (gelé)</td><td>Copie EMA de Qφ2</td><td>Mise à jour via τ = 0.005</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 9 : Récapitulatif Architecture SAC</p>
          <p>L'acteur produit pour chaque état une distribution gaussienne sur l'espace d'action à 4 dimensions. Le reparameterization trick (rsample()) permet le calcul du gradient de politique par rétropropagation à travers l'échantillonnage stochastique. L'action finale est transformée via tanh pour rester dans [-1, 1].</p>
          <p>Le paramètre autotune = True active le réglage automatique de la température α. La cible d'entropie est fixée à target_entropy = -dim(A) = -4, valeur heuristique recommandée par Haarnoja et al. (2019). Un troisième optimiseur Adam ajuste log α pour maintenir l'entropie de la politique proche de cette cible, éliminant le besoin de réglage manuel.</p>
        </div>
        <div id="hyperparametres" className="mt-5">
          <h3 className="text-dark fw-bold">b) Configuration des hyperparamètres</h3>
          {/* doc tech */}
          <p>Les hyperparamètres sont définis dans la dataclass Args et peuvent être surchargés en ligne de commande via Nyro. Le tableau présente les valeurs retenues pour ce premier cycle d'entraînement :</p>
          <div id="tableau10b" className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-primary"><tr><th>Hyperparamètre</th><th>Variable</th><th>Valeur</th><th>Justification</th></tr></thead>
              <tbody>
                <tr><td className="fw-bold">Timesteps totaux</td><td>total_timesteps</td><td>300 000</td><td>Premier cycle exploratoire</td></tr>
                <tr><td className="fw-bold">Phase d'exploration</td><td>learning_starts</td><td>5 000</td><td>Peuplement initial du replay buffer</td></tr>
                <tr><td className="fw-bold">Taille du buffer</td><td>buffer_size</td><td>1 000 000</td><td>Capacité suffisante pour off-policy</td></tr>
                <tr><td className="fw-bold">Taille de batch</td><td>batch_size</td><td>256</td><td>Standard SAC, équilibre biais/variance</td></tr>
                <tr><td className="fw-bold">LR acteur</td><td>policy_lr</td><td>3 × 10⁻⁴</td><td>Référence CleanRL / SAC original</td></tr>
                <tr><td className="fw-bold">LR critiques</td><td>q_lr</td><td>1 × 10⁻³</td><td>Référence CleanRL / SAC original</td></tr>
                <tr><td className="fw-bold">Facteur d'actualisation</td><td>gamma</td><td>0.99</td><td>Horizon long, tâche continue</td></tr>
                <tr><td className="fw-bold">EMA target networks</td><td>tau</td><td>0.005</td><td>Mise à jour douce, stabilité des cibles</td></tr>
                <tr><td className="fw-bold">Fréq. mise à jour acteur</td><td>policy_frequency</td><td>2</td><td>Délai TD3-style, réduit la variance</td></tr>
                <tr><td className="fw-bold">Auto-tuning entropie</td><td>autotune</td><td>True</td><td>α ajusté automatiquement (Haarnoja, 2019)</td></tr>
                <tr><td className="fw-bold">Seed</td><td>seed</td><td>1</td><td>Reproductibilité des résultats</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center small mt-1">Tableau 10 : Hyperparamètres SAC</p>
        </div>
        <div id="boucle" className="mt-5">
          <h3 className="text-dark fw-bold">c) Boucle d'entraînement</h3>
          {/* doc tech */}
          <p>Durant les 5 000 premiers pas, l'agent échantillonne des actions aléatoires sans utiliser le réseau acteur. Après cette phase, chaque pas déclenche quatre mises à jour successives :</p>
          <ul>
            <li>Mise à jour des critiques : minimisation de l'erreur quadratique entre Qφ(s,a) et la cible soft Bellman, calculée avec le minimum des deux réseaux cibles</li>
            <li>Mise à jour de l'acteur (tous les 2 pas) : maximisation de l'objectif entropie-récompense via le reparameterization trick</li>
            <li>Mise à jour de la température α : ajustement automatique pour maintenir l'entropie cible Η̄= -4</li>
            <li>Mise à jour EMA des réseaux cibles : φ̅← 0.005 × φ + 0.995 × φ̅, à chaque pas</li>
          </ul>
          <p>Une modification clé apportée au script standard CleanRL concerne la sauvegarde automatique des poids de l'acteur à l'issue de l'entraînement. Le modèle est persisté au format .cleanrl_model dans le répertoire de l'expérience :</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Sauvegarde du modèle acteur en fin d'entraînement{"\n"}
model_path = f"runs/{"{"}run_name{"}"}/{"{"}args.exp_name{"}"}.cleanrl_model"{"\n"}
torch.save(actor.state_dict(), model_path){"\n"}
print(f"Modèle sauvegardé : {"{"}model_path{"}"}")</code></pre>
          <p className="text-center small mt-1">Figure 16 : Script sauvegarde modèle SAC</p>
          <div id="figure16" />
        </div>
        <div id="lancement" className="mt-5">
          <h3 className="text-dark fw-bold">d) Lancement de l'entraînement</h3>
          {/* doc tech */}
          <p>L'entraînement est lancé depuis l'Anaconda Prompt, avec l'environnement NewEnv activé, depuis le répertoire contenant le script et le fichier niryo_env.py :</p>
          <pre className="bg-dark text-white p-3 rounded"><code># Activation de l'environnement{"\n"}
conda activate NewEnv{"\n"}
{"\n"}
# Lancement de l'entraînement avec les paramètres par défaut{"\n"}
python sac_continuous_action.py{"\n"}
{"\n"}
# Suivi en temps réel dans TensorBoard{"\n"}
tensorboard --logdir runs/</code></pre>
          <p className="text-center small mt-1">Figure 17 : Commandes de lancement de l'entraînement et du suivi TensorBoard</p>
          <div id="figure17" />
        </div>
        <div id="resultats" className="mt-5">
          <h3 className="text-dark fw-bold">e) Résultats du premier cycle d'entraînement</h3>
          {/* doc tech */}
          <p>La Figure 18 présente l'évolution de la récompense cumulée par épisode sur les 300 000 pas de temps du premier cycle d'entraînement.</p>
          <div id="figure18" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 350}}>
            <img src="images/IA_Figure18.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 18 : Évolution de la récompense épisodique sur 300 000 timesteps</p>
          <p>La courbe révèle une alternance régulière entre des épisodes à récompense proche de zéro correspondant aux épisodes courts où l'effecteur atteint rapidement la cible et des épisodes à récompense très négative (jusqu'à -175), correspondant aux épisodes tronqués. L'absence de tendance progressive à la hausse indique que l'agent n'a pas encore convergé vers une politique stable, et que le volume d'entraînement devra être significativement augmenté lors des cycles ultérieurs.</p>
          <div id="figure19" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 350}}>
            <img src="images/IA_Figure19.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 19 : Évolution de la longueur épisodique sur 300 000 timesteps</p>
          <p>La courbe présente un signal bimodal très marqué : les épisodes sont soit très courts (5 à 25 pas, lorsque la cible est proche de la configuration initiale), soit très longs (atteignant 220 pas, lorsque l'agent échoue). La persistance de cette bimodalité sur l'ensemble des 300 000 pas confirme que l'agent n'a pas encore acquis de politique générale couvrant l'ensemble de l'espace de travail.</p>
          <p>Le premier cycle d'entraînement a permis de valider l'intégrité complète du pipeline : connexion entre NiryoEnv et CleanRL, collecte et exploitation du replay buffer, calcul correct des pertes SAC, et sauvegarde du modèle. Toutefois, l'absence de convergence globale oriente les prochaines actions vers les améliorations suivantes :</p>
          <ul>
            <li>Augmentation du volume d'entraînement : porter total_timesteps entre 500 000 et 1 000 000 pour laisser SAC explorer l'espace de travail complet</li>
            <li>Sauvegarde périodique des checkpoints : enregistrer le modèle tous les 50 000 pas pour analyser la progression</li>
          </ul>
        </div>
      </div>
      {/* ============================================ */}
      {/* 9. BENCHMARK ET TESTS */}
      {/* ============================================ */}
      <div id="benchmark" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-speedometer2" /> 9. BENCHMARK ET TESTS</h2>
        {/* doc tech */}
        <p>La phase de benchmark valide le pipeline en évaluant les modèles en mode déterministe (sans bruit d'exploration). Cette étape repose sur deux métriques clés : la précision spatiale (distance effecteur-cible) et la performance de calcul (débit SPS), afin de quantifier à la fois la qualité de la politique de contrôle et l'efficience de la simulation.</p>
        <div id="script-evaluation">
          <h3 className="text-dark fw-bold">a) Script d'évaluation</h3>
          {/* doc tech */}
          <p>Le script d'évaluation charge les poids de l'acteur entraîné et l'exécute en mode déterministe : la méthode get_deterministic_action() utilise directement la moyenne μ de la distribution gaussienne de l'acteur, sans échantillonnage stochastique. Cette approche élimine la variance d'exploration et permet de mesurer la politique optimale apprise :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>def get_deterministic_action(self, x: torch.Tensor) -&gt; torch.Tensor:{"\n"}
{"    "}mean, _ = self.forward(x){"\n"}
{"    "}return torch.tanh(mean) * self.action_scale + self.action_bias</code></pre>
          <p className="text-center small mt-1">Extrait — Politique déterministe : suppression du bruit stochastique SAC pour l'évaluation</p>
          <p>Une fonctionnalité clé du script est la détection automatique de blocage : une fenêtre glissante de 30 pas surveille la progression de l'effecteur. Si la variation de distance est inférieure à 1 cm sur cette fenêtre, un blocage est signalé et l'utilisateur peut choisir d'interrompre l'épisode :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>STALL_WINDOW{"    "}= 30{"\n"}
STALL_THRESHOLD = 0.01{"  "}# 1 cm de progression minimale{"\n"}
{"\n"}
if len(recent_distances) == STALL_WINDOW:{"\n"}
{"    "}progression = max(recent_distances) - min(recent_distances){"\n"}
{"    "}if progression &lt; STALL_THRESHOLD:{"\n"}
{"        "}print(f"BLOCAGE DÉTECTÉ — Step {"{"}step_count{"}"}")</code></pre>
          <p className="text-center small mt-1">Extrait — Détection de blocage par fenêtre glissante sur 30 pas</p>
          <p>En fin de chaque épisode, un bilan complet de trajectoire est affiché et enregistré, regroupant l'ensemble des indicateurs de performance de l'effecteur : la distance EEF → cible (en mètres, source info["distance"]), l'erreur moyenne de l'épisode (en mètres, source np.mean(episode_errors)), le nombre de steps (source step_count), la récompense cumulée (source episode_reward), la position EEF x,y,z (source info["eef_x/y/z"]), l'orientation RPY en degrés (source info["roll/pitch/yaw"]), la vitesse linéaire EEF en m/s (source info["eef_velocity"]) et les positions des joints en degrés (source info["joint_positions"]).</p>
        </div>
        <div id="resultats-benchmark" className="mt-5">
          <h3 className="text-dark fw-bold">b) Résultats du benchmark</h3>
          {/* doc tech */}
          <p>Les trois versions d'environnement ont été développées de manière incrémentale, chacune introduisant des modifications ciblées visant à améliorer la stabilité de l'apprentissage.</p>
          <p>Les deux runs démarrent avec un SPS élevé (autour de 10 à l'initialisation) puis décroissent rapidement pour se stabiliser entre 3 et 5 SPS. Un plancher à 2–3 SPS est observé entre 100 000 et 150 000 pas, suggérant une période de charge maximale liée à la saturation du replay buffer. La stabilisation finale autour de 4 SPS traduit l'équilibre atteint entre simulation physique et apprentissage.</p>
          <p>Les deux runs présentent des comportements radicalement différents, révélateurs de l'impact de la fonction de récompense sur la dynamique d'optimisation. Le run vert (NiryoEnv v1, récompense exponentielle) affiche une perte croissante de 0 à environ +30 sur l'ensemble de l'entraînement. Cette croissance monotone de la perte d'acteur est typique d'un SAC qui maximise activement la valeur Q estimée : l'agent apprend progressivement à choisir des actions que les critiques évaluent comme très rentables, ce qui pousse la perte vers le haut.</p>
          <p>Le run orange (NiryoEnv v2, récompense linéaire) présente au contraire une perte stable autour de 0 ± 0.5 sur toute la durée. Cette stabilité indique que l'acteur n'améliore pas significativement sa politique au cours de l'entraînement — ce qui est cohérent avec la récompense linéaire −d dont le gradient est constant quelle que soit la distance, offrant un signal moins discriminant que la récompense exponentielle pour guider l'exploration à proximité de la cible.</p>
          {/* depuis rapport */}
          <p>NiryoEnv v0 se stabilise autour de 10 et 11 SPS, soit un débit nettement supérieur aux deux autres versions ce qui est cohérent avec sa configuration plus simple (moins de sous-pas, espace d'observation réduit). NiryoEnv v1 et v2 convergent vers 3 et 5 SPS, avec un plancher temporaire à 3 SPS entre 100k et 150k pas, correspondant à la saturation du replay buffer.</p>
          {/* depuis rapport */}
          <p>NiryoEnv v0 plonge à −21 puis remonte progressivement vers 0, révélant une instabilité initiale liée à l'amplitude excessive des actions.</p>
          <p><strong>Conclusion benchmark</strong> : l'analyse comparative des trois versions d'environnement a permis d'identifier NiryoEnv v1, avec sa récompense exponentielle exp(−20·d), comme la configuration offrant le signal d'apprentissage le plus discriminant pour les cycles à venir.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 10. DIFFICULTES RENCONTREES ET SOLUTIONS */}
      {/* ============================================ */}
      <div id="difficultes" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-exclamation-triangle-fill" /> 10. DIFFICULTÉS RENCONTRÉES ET SOLUTIONS APPORTÉES</h2>
        <div id="diff-1">
          <h3 className="text-dark fw-bold">a) Instabilité de NiryoEnv v0 et reformulation du problème</h3>
          {/* depuis rapport */}
          <p>La première version utilisait un contrôle en position directe sur 6 dimensions (action × π), produisant des mouvements brusques incompatibles avec SAC. L'agent généralisait une politique erratique en raison de l'amplitude excessive des déplacements articulaires, visible sur la courbe actor loss (plongeon à −21) et la longueur épisodique bloquée à 300 pas.</p>
          {/* depuis rapport */}
          <p><strong>Solution apportée</strong> : migration vers un contrôle incrémental (DELTA_MAX = 0,05 rad) dans NiryoEnv v1, réduisant l'espace d'action à 4 dimensions et limitant les chocs mécaniques. Ce pivot a été décidé après analyse des premières courbes TensorBoard avec mon tuteur et son doctorant en appuie.</p>
        </div>
        <div id="diff-2" className="mt-5">
          <h3 className="text-dark fw-bold">b) Absence de signal d'apprentissage exploitable</h3>
          {/* depuis rapport */}
          <p>Avec NiryoEnv v0, la récompense −exp(−20·d) produisait un gradient quasi nul lorsque l'effecteur était loin de la cible. L'agent ne recevait pratiquement aucun signal exploitable dans les premières phases d'exploration.</p>
          {/* depuis rapport */}
          <p><strong>Solution apportée</strong> : reformulation en exp(−20·d) − k, qui reste négative mais fournit un gradient non nul sur tout l'espace. Ajout d'un bonus sparse +5 pour d &lt; 0,05 m afin de renforcer le signal lors des approches réussies.</p>
        </div>
        <div id="diff-3" className="mt-5">
          <h3 className="text-dark fw-bold">c) Non-convergence sur 300 000 timesteps</h3>
          {/* depuis rapport */}
          <p>L'analyse des courbes de récompense épisodique et de longueur épisodique révèle l'absence de convergence globale.</p>
          {/* depuis rapport */}
          <p><strong>Analyse causale</strong> : 300 000 timesteps constituent un volume insuffisant pour un espace de travail 3D avec 4 degrés de liberté. La littérature indique que SAC nécessite généralement 500 000 à 2 000 000 timesteps sur des tâches robotiques similaires. <strong>Actions correctives</strong> : augmentation à 1 000 000 timesteps, sauvegardes de checkpoints tous les 50 000 pas.</p>
        </div>
        <div id="diff-4" className="mt-5">
          <h3 className="text-dark fw-bold">d) Intégration de CleanRL avec NiryoEnv</h3>
          {/* depuis rapport */}
          <p>Le script standard sac_continuous_action.py de CleanRL attend une instanciation via gym.make(env_id), incompatible avec une classe custom. L'adaptation a nécessité une demi-journée de débogage, en s'appuyant sur la documentation officielle de CleanRL et des tutoriels vidéo YouTube consacrés à l'implémentation de SAC. Deux modifications ciblées ont été apportées : remplacement de gym.make() par l'instanciation directe de NiryoEnv () dans la fonction make_env (), et ajout d'un mécanisme de sauvegarde des poids de l'acteur en fin d'entraînement.</p>
        </div>
      </div>
      {/* ============================================ */}
      {/* 11. SYNTHESE ET PERSPECTIVES */}
      {/* ============================================ */}
      <div id="conclusion" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-flag-fill" /> 11. SYNTHÈSE ET PERSPECTIVES</h2>
        {/* doc tech */}
        <p>Le premier cycle d'entraînement a permis de valider l'intégrité complète du pipeline : connexion entre NiryoEnv et CleanRL, collecte et exploitation du replay buffer, calcul correct des pertes SAC, et sauvegarde du modèle. Toutefois, l'absence de convergence globale oriente les prochaines actions vers les améliorations suivantes : augmentation du volume d'entraînement (porter total_timesteps entre 500 000 et 1 000 000 pour laisser SAC explorer l'espace de travail complet) et sauvegarde périodique des checkpoints (enregistrer le modèle tous les 50 000 pas pour analyser la progression).</p>
        <p>Les résultats du premier cycle d'entraînement sur 300 000 timesteps ont validé l'intégrité fonctionnelle du pipeline. L'agent démontre une capacité d'approche de la cible dans des configurations favorables, avec une erreur moyenne de 11,51 cm sur 10 épisodes évalués. Si cette valeur reste supérieure au seuil de succès de 5 cm, elle confirme que l'algorithme SAC explore efficacement l'espace de travail et amorce une stratégie d'atteinte cohérente. L'analyse comparative des trois versions d'environnement a par ailleurs permis d'identifier NiryoEnv v1, avec sa récompense exponentielle exp(−20·d), comme la configuration offrant le signal d'apprentissage le plus discriminant pour les cycles à venir.</p>
        <p>Le travail réalisé ouvre plusieurs perspectives directes. À court terme, l'augmentation du volume d'entraînement à 1 000 000 de timesteps, assortie de sauvegardes périodiques de checkpoints, constituera le premier levier d'amélioration de la précision. Sur le plan de la conception de l'environnement, l'intégration des joints J4 et J6 actuellement exclus permettra d'étendre le contrôle à l'ensemble des 6 degrés de liberté du bras, ouvrant la voie à un positionnement de l'effecteur à la fois en position et en orientation. À plus long terme, deux évolutions majeures sont envisagées : d'une part, la définition d'une trajectoire rectiligne à suivre l'agent devant guider l'effecteur le long d'un chemin imposé plutôt que vers un simple point cible et d'autre part, la génération d'une balle mobile dans l'espace de simulation, le bras devant intercepter et suivre dynamiquement sa trajectoire. Ces deux scénarios représentent une montée en complexité progressive vers des tâches industrielles réalistes, et constituent la feuille de route naturelle pour les prochaines itérations du projet au sein de LINEACT.</p>
        {/* depuis rapport */}
        <div className="alert alert-info mt-3">
          <i className="bi bi-info-circle-fill" /> <strong>Bilan des objectifs :</strong> l'objectif 1 (environnement virtuel PyBullet) a été atteint, avec NiryoEnv v1 opérationnel et 3 versions comparées. L'objectif 2 (phase d'apprentissage SAC) a été partiellement atteint : le pipeline est validé mais la convergence reste incomplète. L'objectif 3 (application physique sur le bras réel) n'a pas été atteint, la précision obtenue étant insuffisante pour un déploiement sécurisé.
        </div>
        <p>Sur le plan personnel, ce stage a constitué une immersion complète dans les problématiques de l'intelligence artificielle appliquée aux systèmes physiques. La maîtrise des outils de simulation (PyBullet, Gymnasium), la compréhension approfondie des mécanismes de l'algorithme SAC de la gestion de l'entropie à l'architecture acteur-critique et la pratique du cycle complet conception-entraînement-évaluation représentent des compétences directement transférables aux enjeux de la robotique intelligente et de l'industrie 5.0, au cœur des axes de recherche du laboratoire LINEACT.</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Ia