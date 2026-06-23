import React from 'react'

const Programmation = () => {
  return (
        <div className="container-fluid px-0 px-md-3 mb-5">
  <div className="row g-0 g-md-4 mx-0">
    {/* side bar */}
    {/* side bar */}
    <div className="col-md-3 ps-0 pe-0 pe-md-2">
      <div className="bg-white rounded-3 shadow-sm p-3 me-0 me-md-2" style={{position: 'sticky', top: 87, maxHeight: 'calc(100vh - 40px)', overflowY: 'auto'}}>
        <h5 className="text-primary mb-3 pb-2 border-bottom">
          <i className="bi bi-list-ul" /> Sommaire
        </h5>
        <nav className="nav flex-column">
          {/* ============================================ */}
          {/* 1. NIRYO NED2 ET NIRYOSTUDIO */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#nirystudio" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-display text-primary me-2" />NiryoStudio
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseNiryoStudio" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseNiryoStudio">
              <a className="nav-link px-0 py-1 text-secondary small" href="#utilisation-seul">1. Utilisation du robot seul</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#configuration-initiale">2. Configuration initiale</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#connexion">3. Connexion au robot</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#mode-point-acces"> Mode point d'accès</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#mode-wifi"> Mode Wi-Fi</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#mode-ethernet"> Mode Ethernet</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#mode-ethernet-direct"> Mode Ethernet Direct</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#calibration">4. Calibration du robot</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#interface">5. Interface de NiryoStudio</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau-bord">6. Tableau de bord</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#utilisation">7. Utilisation du robot</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 2. PROGRAMMATION */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#logiciels" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-code-square text-primary me-2" />Programmation
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseProgrammation" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseProgrammation">
              <a className="nav-link px-0 py-1 text-secondary small" href="#blockly">1. Blockly</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#creer-programme"> Créer un programme</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#enregistrer-programme"> Enregistrer</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#mouvements"> Mouvements</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#jouer-programme"> Jouer un programme</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#ouvrir-programme">Ouvrir un programme</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#importer-exporter">Importer/Exporter</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#pyniryo-logiciel">2. Pyniryo</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#description-pyniryo"> Description</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#jouer-pyniryo"> Jouer un programme</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#importer-exporter-pyniryo"> Importer/Exporter</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#matlab">3. MATLAB / Simulink</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#node-red">4. Node-RED</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 3. INSTALLATION DES LIBRAIRIES */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#librairies" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-book text-primary me-2" />Installation des librairies
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseLibrairies" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseLibrairies">
              <a className="nav-link px-0 py-1 text-secondary small" href="#pyniryo">1. PyNiryo</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#pymodbus">2. PyModbus</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#matlab-librarie">3. Librairies MATLAB</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 4. PROGRAMMATION MATLAB */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#matlab" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-graph-up text-primary me-2" />Programmation MATLAB
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseMatlab" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseMatlab">
              <a className="nav-link px-0 py-1 text-secondary small" href="#matlab-installation">1. Installation NedROS</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#matlab-premiere-utilisation">2. Première utilisation</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#matlab-simulation">3. Simulation</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#matlab-hardware">4. Hardware</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 5. PROGRAMMATION ROS */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#programmation-ros" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-terminal text-primary me-2" />Programmation ROS
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseProgrammationRos" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseProgrammationRos">
              <a className="nav-link px-0 py-1 text-secondary small" href="#preambule">1. Préambule</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#commandes-bases"> Commandes de bases</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#commandes-ros"> Commandes ROS fréquentes</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#commandes-compilation"> Commandes de compilation</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#simulation-gazebo-rviz">2. Simulation</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#generalites-simulation"> Généralités</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#modeles-robot-rviz"> Les différents modèles de robot dans Rviz</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#ros">3. ROS</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#methodologie-ros"> Méthodologie</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#creation-programmes">4. Création et Lancement de programme</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#commandes-utiles"> Où trouver les commandes ?</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#commandes-utiles-liste"> Les commandes utiles</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#structure-programme"> Structure d'un programme</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#simulation-programmes"> Simulation</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#defaut-trajectoire">Défaut de trajectoire</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#debug-warn">Méthodologie de débogage [WARN]</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#plateformes-simulation"> Ajouter des plateformes</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#conclusion-simulation">Conclusion</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#programmation-reel">5. Programmation du robot réel</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#commande-reel"> Commande du robot réel</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#limites-connexion"> Limites rencontrées</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#analyse-cause"> Analyse de la cause</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#solution-mise-oeuvre"> Solution mise en œuvre</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#methode-embarquee">La méthode embarquée</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#mise-place-embarquee">Mise en place</a>
              <a className="nav-link px-0 py-1 text-secondary small ps-3" href="#definitions"> Définitions</a>
            </div>
          </div>
          
          {/* ============================================ */}
          {/* 6. Exemples */}
          {/* ============================================ */}
          <div className="mb-2">
            <div className="nav-link px-0 py-1 text-dark d-flex justify-content-between align-items-center">
              <a href="#Exemples" className="text-dark text-decoration-none" style={{cursor: 'pointer'}}>
                <i className="bi bi-paperclip text-primary me-2" />Exemples
              </a>
              <i className="bi bi-chevron-down small" data-bs-toggle="collapse" data-bs-target="#collapseExemples" aria-expanded="false" style={{cursor: 'pointer'}} />
            </div>
            <div className="collapse ps-4" id="collapseExemples">
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple1">Exemple 01</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple2">Exemple 02</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple3">Exemple 03</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple4">Exemple 04</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple5">Exemple 05</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple6">Exemple 06</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple7">Exemple 07</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple08">Exemple 08</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple09">Exemple 09</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple10">Exemple 10</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple11">Exemple 11</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple12">Exemple 12</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple13">Exemple 13</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple14">Exemple 14</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple15">Exemple 15</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple16">Exemple 16</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#exemple17">Exemple 17</a>
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
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure58">Figure 58</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure59">Figure 59</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure60">Figure 60</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure61">Figure 61</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure62">Figure 62</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure63">Figure 63</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure64">Figure 64</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure65">Figure 65</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure66">Figure 66</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure67">Figure 67</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure69">Figure 69</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure70">Figure 70</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure71">Figure 71</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure72">Figure 72</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure73">Figure 73</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure74">Figure 74</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure75">Figure 75</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure76">Figure 76</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure77">Figure 77</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure78">Figure 78</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure79">Figure 79</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure80">Figure 80</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure81">Figure 81</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure82">Figure 82</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure83">Figure 83</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure84">Figure 84</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure85">Figure 85</a>
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
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure113">Figure 113</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure114">Figure 114</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure115">Figure 115</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure116">Figure 116</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure117">Figure 117</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure118">Figure 118</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure119">Figure 119</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure120">Figure 120</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure121">Figure 121</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure122">Figure 122</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure123">Figure 123</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure124">Figure 124</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure125">Figure 125</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure126">Figure 126</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure127">Figure 127</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure128">Figure 128</a>
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
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau23">Tableau 23</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau27">Tableau 27</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau28">Tableau 28</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau29">Tableau 29</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau30">Tableau 30</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau31">Tableau 31</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau32">Tableau 32</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau33">Tableau 33</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau34">Tableau 34</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau35">Tableau 35</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau36">Tableau 36</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau37">Tableau 37</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau38">Tableau 38</a>
              <a className="nav-link px-0 py-1 text-secondary small" href="#tableau39">Tableau 39</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    {/* contenu principal */}
    <div className="col-md-9 ps-0 ps-md-2 pe-0">
      <div id="nirystudio" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-display" /> NIRYO NED2 ET NIRYOSTUDIO</h2>
        {/* ============================================ */}
        {/* 1. UTILISATION DU ROBOT SEUL */}
        {/* ============================================ */}
        <div id="utilisation-seul" className="mt-3">
          <h3 className="text-dark fw-bold">1. Utilisation du robot seul</h3>
          <p>Les deux images suivantes montrent les différentes amplitudes que peut emprunter le robot.</p>
          {/* FIGURE 69 */}
          <div className="row g-3 mb-4">
            <div className="col-md-12">
              <div id="figure69" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300}}>
                <img src="images/Figure69.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 69 : Schémas descriptifs de l'amplitude des mouvements du Niryo Ned2</p>
            </div>
          </div>
          <ul>
            <li><strong>Bouton Free Motion :</strong> désactive les couples moteurs</li>
            <li><strong>Bouton Save :</strong> enregistrer la position du robot sur NiryoStudio</li>
            <li><strong>Bouton Custom :</strong> bouton programmable et permet à l'utilisateur de choisir le type d'action et la fonction du bouton</li>
          </ul>
        </div>
        {/* ============================================ */}
        {/* 2. CONFIGURATION INITIALE DE NIRYOSTUDIO */}
        {/* ============================================ */}
        <div id="configuration-initiale" className="mt-5">
          <h3 className="text-dark fw-bold">2. Configuration initiale de NiryoStudio</h3>
          <p><strong>• Allumer le robot :</strong></p>
          <p>Assurer que le robot est sous tension puis appuyer sur le bouton « POWER » situé à l'arrière de la base. Quand le bouton est appuyé l'anneau LED devient blanc et passe au bleu après quelques secondes. Après ça, il est enfin possible d'utiliser le robot.</p>
          <p><strong>• Lancer NiryoStudio :</strong></p>
          <p><strong>• Connexion à NiryoStudio :</strong></p>
          <p>Se connecter à son compte personnel ou en utilisant un jeton invité.</p>
          <p><strong>Pour créer un compte :</strong></p>
          <ul>
            <li>Sur l'écran de connexion, cliquer sur l'option « Créer un compte »</li>
            <li>Ajouter son email</li>
            <li>Vérifier son adresse email (email de confirmation peut être dans les spams)</li>
            <li>Choisir un mot de passe sécurisé et conforme (longueur, caractères spéciaux)</li>
            <li>Retourner à la page de connexion de NiryoStudio</li>
            <li>Entrer son email et son mot de passe pour se connecter à son compte</li>
          </ul>
          {/* FIGURE 70 et 71 */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div id="figure70" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300}}>
                <img src="images/Figure70.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 70 : Connexion à NiryoStudio</p>
            </div>
            <div className="col-md-6">
              <div id="figure71" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300}}>
                <img src="images/Figure71.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 71 : Création de compte NiryoStudio</p>
            </div>
          </div>
          {/* FIGURE 72 */}
          <div id="figure72" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 250, marginBottom: '1rem'}}>
            <img src="images/Figure72.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 72 : Page de vérification du compte</p>
        </div>
        {/* ============================================ */}
        {/* 3. CONNEXION AU ROBOT */}
        {/* ============================================ */}
        <div id="connexion" className="mt-5">
          <h3 className="text-dark fw-bold">3. Connexion au robot</h3>
          <p>Il existe plusieurs possibilités pour connecter le logiciel NiryoStudio.</p>
          <div id="mode-point-acces">
            <h4 className="fw-bold mt-3"> Mode point d'accès</h4>
            <p>Chaque robot possède son propre réseau <strong>Wi-Fi (SSID)</strong>. Ce dernier est sous la forme <strong>Niryo Hotspot XX-XXX-XXX</strong>. L'adresse complète le robot est visible sous la base du robot.</p>
            <p>Il faut ensuite suivre les étapes suivantes :</p>
            <ul>
              <li>Connecter le PC au Wi-Fi du robot avec le mot de passe : niryorobot</li>
              <li>Dans NiryoStudio, depuis l'écran du tableau de bord, cliquer sur « Connecter le robot »</li>
            </ul>
            {/* FIGURE 73 */}
            <div id="figure73" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure73.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 73 : Connexion du robot à NiryoStudio</p>
            {/* FIGURE 74 */}
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400}}>
                  <p>Sélectionner ensuite le robot dans la fenêtre contextuelle <br />« Connexion ».<br />
                    Par défaut, le nom du robot correspond au SSID.</p>
                </div>
              </div>
              <div className="col-md-9">
                <div id="figure74" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
                  <img src="images/Figure74.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
                </div>
                <p className="text-center small mt-1">Figure 74 : Liste des robots disponible à la connexion</p>
              </div>
            </div>
            <p>Cliquer sur le bouton « Connecter » correspondant à votre mode de connexion et attendre
              que <strong>a connexion soit établie</strong>. La connexion prend quelques secondes.
              <strong>L'adresse IP</strong> utilisée par le robot pour la connexion au point d'accès est <strong>10.10.10.10</strong>.</p>
            {/* FIGURE 75 */}
            <div id="figure75" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure75.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 75 : Choix du mode de connexion</p>
            <p>Une fois connecté, NiryoStudio affiche l'état de la connexion sur la barre supérieure de l'interface et une vue 3D du robot.</p>
          </div>
          <div id="mode-wifi">
            <h4 className="fw-bold mt-3"> Mode Wi-Fi</h4>
            <p>Pour activer le mode Wi-Fi, le robot doit être d'abord connecté en mode point d'accès. <br />
              Une fois connecté au Ned2, allez dans <strong>« Mon robot » → « Paramètres »</strong> puis cliquer sur 
              <strong>« Modifier »</strong> dans la section <strong>« Connexion au robot »</strong>.</p>
            {/* FIGURE 76 */}
            <div id="figure76" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure76.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 76 : Vérification de la connexion du robot</p>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="border rounded bg-light p-2" style={{height: 400}}>
                  <p>Dans la section Wi-Fi, on peut connecter le robot au réseau <strong>Wi-Fi</strong> que l'on souhaite.</p>
                  <p>Une fois le robot connecté au réseau, connecter NiryoStudio au robot en suivant les étapes suivantes :</p>
                  <ul>
                    <li><strong>Connecter votre ordinateur</strong> sur le même réseau que votre robot</li>
                    <li>Cliquer sur <strong>Connecter le robot</strong></li>
                    <li><strong>Sélectionner votre robot</strong>, puis connectez-vous au robot en utilisant le mode Wi-Fi</li>
                  </ul>
                </div>
              </div>
              {/* FIGURE 77 */}
              <div className="col-md-6">
                <div id="figure77" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
                  <img src="images/Figure77.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
                </div>
                <p className="text-center small mt-1">Figure 77 : Connecter le robot</p>
              </div>
            </div>
            {/* FIGURE 78 */}
            <div id="figure78" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure78.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 78 : Activation du mode de connexion Wi-Fi</p>
          </div>
          <div id="mode-ethernet">
            <h4 className="fw-bold mt-3"> Mode Ethernet</h4>
            <p>Le robot peut être connecté à un réseau à l'aide du <strong>port Ethernet</strong> situé sur le panneau arrière. 
              Une fois le robot connecté au <strong>réseau via Ethernet</strong>, on peut se connecter au Ned2 en suivant les étapes ci-dessous :</p>
            <ul>
              <li><strong>Connecter</strong> votre ordinateur sur le même réseau (avec Ethernet ou Wi-Fi)</li>
              <li><strong>Cliquer</strong> sur <strong>« Connecter le robot »</strong> pour accéder à la connexion Ned2</li>
              <li><strong>Sélectionner</strong> son robot, puis se <strong>connecter</strong> avec Ethernet</li>
            </ul>
            <div id="mode-ethernet-direct">
              <h4 className="fw-bold mt-3"> Mode Ethernet Direct</h4>
              <p>On peut aussi utiliser un câble Ethernet pour connecter physiquement le robot avec
                l'ordinateur. Cependant le robot doit déjà être utiliser en mode point d'accès ou en mode WiFi.<br />
                On a ensuite quelque étape à suivre :</p>
              <ul>
                <li>Aller sur <strong>Mon robot → Paramètres</strong> puis cliquer sur <strong>Modifier</strong> dans la <strong>section Connexion</strong> du robot.</li>
                <li>Dans la <strong>section Ethernet</strong>, sélectionner <strong>« Ethernet direct »</strong> et déconnecter votre robot.</li>
                <li><strong>Reconnecter</strong> à votre robot en cliquant sur le bouton <strong>« Connecter le robot »</strong>.</li>
                <li><strong>Sélectionner</strong> votre robot, puis se connecter au robot en utilisant le <strong>mode Ethernet Direct</strong>.</li>
              </ul>
            </div>
            {/* FIGURE 79 */}
            <div id="figure79" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure79.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 79 : Changer le mode de connexion du robot.</p>
            {/* FIGURE 80 */}
            <div id="figure80" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure80.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 80 : Paramètre de connexion du robot.</p>
            {/* FIGURE 81 */}
            <div id="figure81" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure81.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 81 : Connecter le robot</p>
            {/* FIGURE 82 */}
            <div id="figure82" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure82.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 82 : Activation du mode de connexion Ethernet</p>
          </div>
        </div>
        {/* ============================================ */}
        {/* 4. CALIBRATION DU ROBOT */}
        {/* ============================================ */}
        <div id="calibration" className="mt-5">
          <h3 className="text-dark fw-bold">4. Calibration du robot</h3>
          <p>Le robot doit être calibré à chaque redémarrage. Cliquez sur le bouton clignotant 
            <strong>« Calibration requise »</strong> dans le tableau de bord ou dans l'onglet 
            <strong>MyRobot</strong>, puis attendez la fin de la procédure.</p>
          {/* FIGURE 83 */}
          <div id="figure83" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
            <img src="images/Figure83.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 83 : Calibration du robot</p>
          <p>À la fin du calibrage, un message s'affichera pour indiquer si l'étalonnage s'est bien déroulé. 
            Le robot affichera ensuite <strong>« Calibrage OK »</strong> sur le tableau de bord. Ce statut s'affichera quelques secondes avant de passer au bouton <strong>« Nouvel étalonnage »</strong>,
            permettant d'effectuer un autre calibrage.</p>
          <p>Une fois calibré, à l'emplacement <strong>(1)</strong>, le message « Calibration OK » en vert s'affiche.</p>
        </div>
        {/* ============================================ */}
        {/* 5. INTERFACE DE NIRYOSTUDIO */}
        {/* ============================================ */}
        <div id="interface" className="mt-5">
          <h3 className="text-dark fw-bold">5. Interface de NiryoStudio</h3>
          {/* FIGURE 84 */}
          <div id="figure84" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
            <img src="images/Figure84.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 84 : Interface générale de NiryoStudio</p>
          <p><strong>(1) État de la connexion :</strong> affiche l'état actuel de la connexion avec le robot.</p>
          <p><strong>(2) Panneau de navigation principal :</strong> cette barre latérale gauche offre un accès rapide aux fonctionnalités principales de NiryoStudio.</p>
          <ul>
            <li><strong>Tableau de bord :</strong> retourne à cet écran principal</li>
            <li><strong>Blockly :</strong> ouvre l'interface de programmation Blockly</li>
            <li><strong>Python :</strong> accès direct à la programmation Python pour les utilisateurs avancés</li>
            <li><strong>Direct Move :</strong> permet le contrôle manuel du robot pour des commandes de mouvement directes</li>
            <li><strong>Équipement :</strong> fournit des options pour configurer les outils ou accessoires connectés</li>
            <li><strong>Bibliothèques :</strong> accéder aux programmes enregistrés, aux positions, à la trajectoire et à d'autres ressources</li>
            <li><strong>Mon robot :</strong> affiche les détails et les paramètres du robot</li>
          </ul>
          <p><strong>(3) Commentaires et paramètres :</strong> pour gérer les paramètres de l'application et du compte.</p>
          <ul>
            <li>Bouton de commentaires : les utilisateurs peuvent donner leur avis sur l'application, partager des suggestions ou signaler des problèmes</li>
            <li>Langue : choisissez parmi les options de langues disponibles (anglais et français)</li>
            <li>Unités d'angles : sélectionnez les unités d'angle pour l'interface (radians ou degrés)</li>
            <li>Paramètres du compte : modifiez les informations de votre compte</li>
            <li>Mode plein écran : bascule l'application entre les modes plein écran et fenêtres</li>
            <li>Mode sombre : bascule l'application entre les modes claires et sombres</li>
            <li>Terminal SSH : ouvre un terminal SSH sur le robot (indisponible si vous n'êtes pas connecté au robot)</li>
          </ul>
          <p><strong>(4) Tableau de bord :</strong> affiche le contenu de la section du panneau de navigation,<br />
            le tableau de bord sur cette image (qui sera décrit dans la partie suivante).</p>
          <p><strong>(5) Vue 3D du robot :</strong> affiche un modèle 3D du robot permettant aux utilisateurs de visualiser son état actuel et son positionnement.</p>
        </div>
        {/* ============================================ */}
        {/* 6. TABLEAU DE BORD */}
        {/* ============================================ */}
        <div id="tableau-bord" className="mt-5">
          <h3 className="text-dark fw-bold">6. Tableau de bord</h3>
          {/* FIGURE 85 */}
          <div id="figure85" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
            <img src="images/Figure85.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 85 : Image montrant les différentes parties du tableau de bord</p>
          <p><strong>(1) État de la connexion :</strong> Affiche le nom du robot auquel NiryoStudio est connecté, l'état de la connexion, le mode de connexion et le bouton pour se déconnecter du robot.</p>
          <p><strong>(2) Étalonnage :</strong> permet à l'utilisateur de lancer le processus d'étalonnage du robot. Un clic sur ce bouton lance la procédure pour garantir que les mouvements du robot sont correctement alignés et calibrés pour des performances optimales.</p>
          <p><strong>(3) Annonce de mise à jour :</strong> avertit l'utilisateur lorsqu'une nouvelle version de NiryoStudio est disponible. Cliquer sur ce bouton installera la nouvelle version.</p>
          <p><strong>(4) Mes équipements connectés :</strong> Affiche la liste de tous les appareils actuellement connectés à NiryoStudio. Cette section indique le nom, l'état et les paramètres des équipements connectés. Vous pouvez lancer une analyse pour détecter les nouveaux équipements connectés en cliquant sur le bouton <strong>« Nouvelle analyse »</strong>.</p>
          <p><strong>(5) Mes derniers programmes :</strong> Affiche la liste des programmes récemment créés ou utilisés par l'utilisateur. Cette section permet un accès rapide aux programmes précédemment utilisés pour faciliter leur modification ou leur exécution. La liste complète des programmes se trouve dans la section <a href="https://docs.niryo.com/niryostudio/interface/library/">Bibliothèque</a>.</p>
        </div>
        {/* ============================================ */}
        {/* 7. UTILISATION DU ROBOT AVEC LE LOGICIEL NIRYOSTUDIO */}
        {/* ============================================ */}
        <div id="utilisation" className="mt-5">
          <h3 className="text-dark fw-bold">7. Utilisation du robot avec le logiciel NiryoStudio</h3>
          <p>Le Niryo Ned2 permet d'enregistrer des trajectoires : maintenez les boutons <strong>SAVE</strong> et <strong>FreeMotion</strong> enfoncés simultanément, effectuez le mouvement, puis relâchez. 
            NiryoStudio vous demandera un nom pour la trajectoire.</p>
          <p>Les trajectoires sont stockées au format binaire <code className="text-dark">.trajectory</code> (illisible directement). 
            Pour les lire ou en créer de nouvelles, un script Python doit être placé dans le même dossier.</p>
        </div>
      </div>
      <div id="logiciels" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-code-square" />PROGRAMMATION</h2>
        {/* Tableau récapitulatif */}
        <div id="tableau23" className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr><th>Nom</th><th>Langage</th><th>Difficulté</th><th>Documentation</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td className="fw-bold">Niryo Studio</td><td>En bloc</td><td className="text-success">Débutant</td><td><a href="https://docs.niryo.com/api/blockly">En bloc</a></td><td>Programmation de blocs simplifiée</td></tr>
              <tr><td className="fw-bold">Pyniryo</td><td>Python</td><td className="text-success">Débutant</td><td><a href="https://docs.niryo.com/api/pyniryo">Pyniryo</a></td><td>Programmation du robot à distance via API Python 2.7 et 3.X</td></tr>
              <tr><td className="fw-bold">Python ROS Wrapper</td><td>Python</td><td className="text-warning">Intermédiaire</td><td><a href="https://niryorobotics.github.io/ned_ros/packages/ros_wrapper.html">Wrappeur Python ROS</a></td><td>Programmez et exécutez votre code Python directement dans le robot.<br />
                  Aucun logiciel ou configuration requis à l'exception de NiryoStudio ou d'un terminal SSH.</td></tr>
              <tr><td className="fw-bold">MATLAB/Simulink</td><td>MATLAB</td><td className="text-warning">Intermédiaire</td><td><a href="https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots">MATLAB</a></td><td>Contrôle possible via ROS ou via Modbus TCP.<br />
                  Utile pour la simulation de trajectoires, le prototypage rapide d'algorithmes de contrôle/vision.</td></tr>
              <tr><td className="fw-bold">ROS</td><td>Python/C++</td><td className="text-danger">Avancé</td><td><a href="https://niryorobotics.github.io/ned_ros/packages/overview.html">Niryo ROS</a></td><td>Programmez et exécutez votre nœud ROS directement sur le robot ou à distance via ROS Multimachine.</td></tr>
              <tr><td className="fw-bold">Node-RED</td><td>En bloc</td><td className="text-danger">Avancé</td><td><a href="https://nodered.org/">Node-RED</a></td><td>Outil low-code, flux de données, IoT.<br />
                  Très visuel, adapté pour capteurs/actionneurs externes.</td></tr>
              <tr><td className="fw-bold">Modbus</td><td>Tout</td><td className="text-danger">Avancé</td><td><a href="https://docs.niryo.com/api/modbus">Modbus</a></td><td>Les programmes peuvent communiquer via le réseau avec les robots dans n'importe quel langage disponible. </td></tr>
              <tr><td className="fw-bold">Serveur TCP</td><td>Tout</td><td className="text-danger">Avancé</td><td><a href="https://niryorobotics.github.io/ned_ros/to_go_further/tcp_server.html">Serveur TCP</a></td><td>Les programmes peuvent communiquer via le réseau TCP avec les robots dans n'importe quel langage disponible.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-center small mt-1">Tableau 23 : Tableau résumant les différentes façons de programmer les robots Niryo</p>
        <p>La partie Modbus/TCP sera présenté dans le chapitre « Communication Logicielle ».</p>
        <p>Sur la figure suivante, vous pouvez voir un aperçu global du logiciel robot de Niryo afin de comprendre où se trouve chaque partie du logiciel.</p>
        {/* FIGURE 58 */}
        <div id="figure58" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 700, marginBottom: '1rem'}}>
          <img src="images/Figure58.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
        </div>
        <p className="text-center small mt-1">Figure 58 : Communications interne et externe du robot et ses composants</p>
        {/* ============================================ */}
        {/* 1. BLOCKLY (VIA NIRYOSTUDIO) */}
        {/* ============================================ */}
        <div id="blockly" className="mt-5">
          <h3 className="text-dark fw-bold">1. Blockly (via NiryoStudio)</h3>
          <p><strong>Blockly</strong> est un langage de programmation visuelle développé par Google. 
            Il consiste à assembler des blocs (équivalents à des instructions) sur un espace de travail. 
            Simple et intuitif, il est particulièrement adapté aux débutants.</p>
          <p>Dans NiryoStudio, sélectionnez l'onglet <strong>Blockly</strong> dans le panneau latéral. 
            Un deuxième panneau apparaît alors avec des catégories de blocs : Comments, Logic, Arm, Mouvement, etc.</p>
          <div id="figure59" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 700, marginBottom: '1rem'}}>
            <img src="images/Figure59.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 59 : Panneaux latéraux disponibles sur l'interface de NiryoStudio</p>
          <p>Pour en savoir plus sur chaque partie de ce deuxième panneau latéral, cliquez sur le lien suivant et allez dans la section que vous voulez :<br />
            <a href="https ://docs.niryo.com/api/blockly/article/#section-header-two-5s53j"> https ://docs.niryo.com/api/blockly/article/#section-header-two-5s53j</a>
          </p><div id="creer-programme">
            <h4 className="fw-bold mt-3"> Créer un nouveau programme</h4>
            <p>Dans l'onglet <strong>Blockly</strong>, saisissez un <strong>nom unique</strong> (si le nom existe déjà, NiryoStudio proposera de l'écraser) et une <strong>description facultative</strong>. 
              Cliquez sur <strong>« Créer »</strong> pour ouvrir un nouveau programme Blockly vide.</p>
            {/* FIGURE 60 */}
            <div id="figure60" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 200, marginBottom: '1rem'}}>
              <img src="images/Figure60.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 60 : Création d'un nouveau programme Blockly</p>
          </div>
          <div id="enregistrer-programme">
            <h4 className="fw-bold mt-3"> Enregistrer un programme</h4>
            <p>On peut enregistrer son programme manuellement en cliquant sur le bouton Enregistrer, ou activer l'enregistrement automatique (Autosave) pour permettre à NiryoStudio d'enregistrer automatiquement votre programme à chaque modification.</p>
            {/* FIGURE 61 */}
            <div id="figure61" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 100, marginBottom: '1rem'}}>
              <img src="images/Figure61.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 61 : Bouton sélecteur d'enregistrement automatique</p>
          </div>
          <div id="mouvements">
            <h4 className="fw-bold mt-3"> Création d'un code Blockly constitué de simples mouvements</h4>
            <p>Avant d'allumer le robot, vérifiez qu'il est en position de repos. 
              Après allumage et calibrage, maintenez le bouton <strong>FREEMOTION</strong> enfoncé, déplacez le robot à la position souhaitée, puis relâchez. 
              Pour enregistrer la position, appuyez sur <strong>SAVE</strong>.</p>
            <div className="alert alert-warning">
              <i className="bi bi-exclamation-triangle-fill" /> <strong>ATTENTION :</strong> à garder le bouton FREEMOTION appuyer pendant tout le mouvement du bras pour éviter toute dégradation.
            </div>
            <p>Faites cette manipulation autant que vous le voudrez et après chaque appui sur SAVE, vous verrez sur l'interface de Blockly des blocs. Chaque ligne correspond à un mouvement.</p>
            {/* FIGURE 62 */}
            <div id="figure62" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 200, marginBottom: '1rem'}}>
              <img src="images/Figure62.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 62 : Formation d'un programme Blockly à partir du robot Ned2</p>
            <p>En faisant de cette manière, vous enregistrez des positions finales et lorsque vous appuyez sur PLAY, le robot va de la position 1 à la position 2 de la manière la plus simple pour lui.</p>
            <p>Cependant, il est également possible de créer une trajectoire complète. Pour cela, il faut maintenir les boutons FREEMOTION et SAVE simultanément pendant toute la trajectoire souhaitée. Une fois celle-ci faite, relâchez et vous verrez apparaître sur NiryoStudio ceci :</p>
            {/* FIGURE 63 et 64 */}
            <div id="figure63" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 150, marginBottom: '1rem'}}>
              <img src="images/Figure63.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 63 : Enregistrement direct d'une trajectoire</p>
            <div id="figure64" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 100, marginBottom: '1rem'}}>
              <img src="images/Figure64.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 64 : Bloc créer de la trajectoire enregistrée ci-dessus</p>
            <p>Si on créé des « move_pose » block, trois types de trajectoires peuvent être choisies : Standard, Linéaire, Essayer Linéaire.</p>
            <ul>
              <li><strong>Standard :</strong> exécute le mouvement avec une trajectoire d'arc de sa position d'origine à celle indiquée dans le paramètre.</li>
              <li><strong>Linéaire :</strong> exécute le mouvement avec une trajectoire linéaire et saute le bloc si un obstacle est rentré.</li>
              <li><strong>Essayer linéaire :</strong> tente d'exécuter une trajectoire linéaire mais passe à une trajectoire d'arc si le robot peut rencontrer un obstacle, tel que sa propre base par exemple.</li>
            </ul>
            {/* FIGURE 65 */}
            <div id="figure65" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 150, marginBottom: '1rem'}}>
              <img src="images/Figure65.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 65 : Sélection du mode de trajectoire souhaité par création de "move_block" sur NiryoStudio</p>
            <p>Les paramètres peuvent être des variables ou Pose x, y, z, Raw, Pitch, Yaw.<br />
              Pour plus d'informations, cliquez sur le lien suivant :<br />
              <a href="https://docs.niryo.com/api/blockly/movement/#section-header-two-ftat1"> https://docs.niryo.com/api/blockly/movement/#section-header-two-ftat1</a></p>
          </div>
          <div id="jouer-programme">
            <h4 className="fw-bold mt-3"> Jouer un programme et une position à domicile</h4>
            <p>Une fois son programme fini, on peut le tester en cliquant sur le bouton <strong>Play</strong>. Ce bouton est disponible uniquement lorsqu'on est connecté au robot.<br /> 
              Une fois l'exécution démarrée, le bouton Play se transforme en bouton <strong>Stop</strong>, permettant d'interrompre le programme en cliquant dessus.<br />
              Pour ramener le robot à sa position par défaut, cliquer sur le bouton <strong>Position initiale</strong>.</p>
          </div>
          <div id="ouvrir-programme">
            <h4 className="fw-bold mt-3">Ouvrir un programme existant</h4>
            <p>On peut ouvrir un programme existant en cliquant sur le bouton <strong>Ouvrir</strong> de la barre d'outils. <strong>NiryoStudio</strong> invitera à sélectionner un programme à ouvrir. Cliquer sur l'entrée pour la charger.</p>
            {/* FIGURE 66 */}
            <div id="figure66" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure66.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 66 : Liste des programmes disponibles à l'ouverture</p>
          </div>
          <div id="importer-exporter">
            <h4 className="fw-bold mt-3">Importer ou exporter un programme</h4>
            <p>On peut importer un programme en cliquant sur le bouton <strong>Ouvrir</strong> de la barre d'outils, puis en sélectionnant le bouton <strong>« Importer »</strong>. Choisir un fichier programme <strong>Blockly, NiryoStudio</strong> attend un fichier <strong>JSON</strong>.<br />
              On peut exporter un programme en cliquant sur le bouton Exporter de la barre d'outils. Les programmes <strong>Blockly</strong> sont exportés au format <strong>JSON</strong>.</p>
          </div>
        </div>
        {/* ============================================ */}
        {/* 2. PYNIRYO */}
        {/* ============================================ */}
        <div id="pyniryo-logiciel" className="mt-5">
          <h3 className="text-dark fw-bold">2. Pyniryo</h3>
          <div id="description-pyniryo">
            <h4 className="fw-bold mt-3"> Description de Pyniryo</h4>
            <p>L'interface Python permet de programmer le robot Niryo avec le <strong>wrapper Python ROS</strong> ou <strong>Pyniryo</strong> 
              (bibliothèque contenant des éléments utiles à la programmation de robot Niryo en Python) directement dans l'environnement NiryoStudio.</p>
            <p>Pyniryo est une bibliothèque disponible sur NiryoStudio et utilise le paquet PyPi de Ned, qui
              est une API TCP (Application Programming Interface Transcription Control Protocol) faite avec Python.</p>
            <p>Il offre aux développeurs un moyen simple de créer des programmes pour les robots et de les
              contrôler via la communication à distance depuis leur ordinateur. Contrairement au Python
              ROS Wrapper, l'utilisateur n'a pas besoin d'être connecté au robot via un terminal.
              Ce paquet est capable de contrôler le Ned2 en simulation ou avec le robot physique.</p>
            <p>Il nous est conseillé d'utiliser la bibliothèque pyniryo car pyniryo2 ne recevra pas les mises à jour.</p>
          </div>
          <div id="jouer-pyniryo">
            <h4 className="fw-bold mt-3"> Jouer un programme et une position à domicile</h4>
            <p>Une fois le programme composé, on peut le tester en cliquant sur le bouton <strong>« Play »</strong>. Ce
              bouton est disponible uniquement lorsqu’on est connecté à un robot.<br />
              Une fois l'exécution démarrée, le bouton <strong>« Play »</strong> se transforme en bouton <strong>« Stop »</strong>,
              permettant d'interrompre le programme en cliquant dessus.<br />
              Si le programme contient une erreur, une fenêtre contextuelle affichant la trace du package apparaîtra.</p>
            {/* FIGURE 67 */}
            <div id="figure67" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure67.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 67 : Exemple d'erreurs d'exécution d'un programme</p>
          </div>
          <div id="importer-exporter-pyniryo">
            <h4 className="fw-bold mt-3"> Importer ou exporter un programme</h4>
            <p>On peut importer un programme en cliquant sur le bouton <strong>« Ouvrir »</strong> de la barre d'outils, puis en
              sélectionnant le bouton <strong>« Importer »</strong>.<br />
              Choisir un fichier programme <strong>Python</strong>, NiryoStudio attend un fichier <strong>« .py »</strong>.
              On peut exporter un programme en cliquant sur le bouton <strong>« Exporter »</strong> de la barre d'outils. Les
              programmes <strong>Blockly</strong> sont exportés au format <strong>« .py »</strong>.</p>
          </div>
        </div>
        {/* ============================================ */}
        {/* 3. ROS */}
        {/* ============================================ */}
        {/* ============================================ */}
        {/* 4. MATLAB / SIMULINK */}
        {/* ============================================ */}
        <div id="matlab" className="mt-5">
          <h3 className="text-dark fw-bold">3. MATLAB / Simulink</h3>
          <p>En cliquant sur le lien suivant et à condition que vous ayez une licence MATLAB, ce dernier vous proposera un tutoriel de ROS appliquée à MATLAB. Ces cours se déroulant dans l'environnement MATLAB, les lignes de codes des exemples sont toutes détaillées et peuvent être lancées les unes après les autres. Ainsi on comprend à quoi sert chacune des lignes mise en exemple et on se retrouve à pouvoir mettre en pratique directement ce que l'on apprend.</p>
          <p>Tutoriel MATLAB : <a href="https://fr.mathworks.com/MATLABcentral/fileexchange/118630-MATLAB-and-simulink-ros-tutorials">https://fr.mathworks.com/MATLABcentral/fileexchange/118630-MATLAB-and-simulink-ros-tutorials</a></p>
          <p>Tutoriel expliquant l'installation et la configuration de MATLAB pour contrôler les robots Ned et Ned2. Ce guide utilise l'Add-on ROS Toolbox. (cf. chapitre 7 – partie 3)</p>
          <p>Pour en savoir plus sur l'utilisation de MATLAB avec les robots Niryo Ned2, veuillez-vous rendre au lien suivant : <a href="https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots?tab=readme-ov-file">https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots?tab=readme-ov-file</a></p>
        </div>
        {/* ============================================ */}
        {/* 5. NODE-RED */}
        {/* ============================================ */}
        <div id="node-red" className="mt-5">
          <h3 className="text-dark fw-bold">4. Node-RED</h3>
          <p><strong>Node-RED</strong> est un outil low-code qui permet de créer des flux de données pour automatiser des environnements (domotique, industrie, IoT). 
            Basé sur Node.js, il fonctionne sur des appareils comme le Raspberry Pi ou dans le cloud.</p>
          <p>La programmation se fait en reliant des blocs entre eux : récupération de données (capteur, site web), 
            traitement (manipulation, isolation, regroupement), puis envoi vers une sortie (microcontrôleur, site web, etc.).</p>
          <p>Site officiel : <a href="https://nodered.org/" target="_blank">https://nodered.org/</a></p>
        </div>
      </div>
      <div id="librairies" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-book" /> INSTALLATION DES LIBRAIRIES</h2>
        {/* ============================================ */}
        {/* 1. PYNIRYO */}
        {/* ============================================ */}
        <div id="pyniryo" className="mt-3">
          <h3 className="text-dark fw-bold">1. PyNiryo</h3>
          <p>Pour utiliser la bibliothèque, il faut être sur une version égale ou supérieur :</p>
          <ul>
            <li><strong>2.7</strong> si vous utilisez Python 2</li>
            <li><strong>3.6</strong> si vous utilisez Python 3</li>
          </ul>
          <p>Pour connaître votre version, tapez :</p>
          <ul>
            <li><strong>python -version</strong> si c'est Python 2</li>
            <li><strong>python3 -version</strong> si vous utilisez Python 3</li>
          </ul>
          <p>Fonctionne en <strong>TCP/IP (via socket)</strong> : votre PC envoie des commandes au robot.</p>
          <p>Vous pouvez envoyer des mouvements (<strong>move_joints, move_pose</strong>), contrôler le convoyeur, grippers, lire les capteurs, etc.</p>
          <p>→ Très pratique pour l'enseignement, les projets académiques, la recherche.</p>
          <h5 className="mt-3">Comment ça marche :</h5>
          <ul>
            <li>Installer pyniryo.</li>
            <li>Se connecter au robot via <strong>son adresse IP</strong>.</li>
            <li>Utiliser les méthodes haut niveau pour envoyer les commandes.</li>
          </ul>
          <p>Pour installer Python de Ned via pip, exécutez : <br /><strong>« pip install pyniryo »</strong>.</p>
          <p>Si vous souhaitez également utiliser les fonctions Vision pour faire votre propre pipeline de traitement d'images, installez OpenCV via la commande :
            <strong>« pip install opencv-python »</strong>.</p>
          <p>Pour désinstaller la bibliothèque, exécutez :<br /> <strong>« pip uninstall pyniryo »</strong>.</p>
          <p>Vous pouvez trouver plus d'informations sur le forfait PyPi : <a href="https://pypi.org/project/pyniryo/">https://pypi.org/project/pyniryo/</a></p>
        </div>
        {/* ============================================ */}
        {/* 2. PYMODBUS */}
        {/* ============================================ */}
        <div id="pymodbus" className="mt-5">
          <h3 className="text-dark fw-bold">2. PyModbus</h3>
          <p>Elle peut être installée avec <strong>pip</strong> ou <strong>github</strong> via un terminal.</p>
          <p><strong>Requis :</strong> Python &gt;= 3.10</p>
          <p><strong>Installation standard :</strong><code className="text-dark">pip install pymodbus</code></p>
          <p>Pour en savoir sur les installations, se référer à la section « Installer » disponible via le lien suivant : 
            <a href="https://pymodbus.readthedocs.io/en/latest/index.html">https://pymodbus.readthedocs.io/en/latest/index.html</a></p>
          <h5 className="mt-3">Avantages :</h5>
          <ul>
            <li>Très complet : implémente la plupart des aspects du protocole Modbus</li>
            <li>Flexible : plusieurs options de transport, simulation, tools de conversion</li>
            <li>Écrit en Python : facile à intégrer dans des projets Python</li>
            <li>Communauté active, tests fournis</li>
          </ul>
          <h5 className="mt-3">Limites :</h5>
          <ul>
            <li>Performances limitées par Python, particulièrement en mode synchrone sous forte charge</li>
            <li>Pour des applications industrielles très critiques (temps réel, très faible latence), il peut y avoir des contraintes</li>
            <li>Complexité de configuration si beaucoup d'appareils, callbacks personnalisés, etc.</li>
          </ul>
        </div>
        <div id="matlab-librarie" className="mt-5">
          <h3 className="text-dark fw-bold">3. Librairies MATLAB</h3>
          <p>Pour contrôler le Niryo Ned2 avec MATLAB/Simulink en lien avec ROS, deux Toolboxes sont nécessaires (<strong>MATLAB R2024b ou ultérieur</strong>) :</p>
          <ul>
            <li><strong>Robotics System Toolbox :</strong> <a href="https://fr.mathworks.com/products/robotics.html" target="_blank">https://fr.mathworks.com/products/robotics.html</a><br />
              Génère des scénarios de test robotique, importe des modèles de robots industriels, et permet de développer des prototypes combinant cinématique et dynamique.</li>
            <li><strong>ROS Toolbox :</strong> <a href="https://fr.mathworks.com/products/ros.html" target="_blank">https://fr.mathworks.com/products/ros.html</a><br />
              Interface de connexion entre MATLAB/Simulink et ROS/ROS2. Permet de concevoir des nœuds ROS, de les connecter à un réseau existant, de les vérifier en simulation (desktop) ou sur du hardware (Gazebo, robots réels). Supporte la génération de code C++ et CUDA.</li>
          </ul>
        </div>
      </div>
      {/* PROGRAMMATION MATLAB */}
      {/* ============================================ */}
      <div id="matlab" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-graph-up" /> PROGRAMMATION MATLAB</h2>
        <div id="matlab-installation" className="mt-3">
          <h3 className="text-dark fw-bold">1. Installation NedROS sur MATLAB</h3>
          <p>Pour utiliser le robot Ned2 avec le logiciel MATLAB, on peut utiliser un projet MATLAB existant qui sert de tutoriel.<br />
            <a href="https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots">https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots</a></p>
          <p>Vous pouvez aussi y accéder via la documentation Niryo dans l'onglet API puis MATLAB :<br />
            <a href="https://docs.niryo.com/">https://docs.niryo.com/</a></p>
        </div>
        <div id="matlab-premiere-utilisation" className="mt-5">
          <h3 className="text-dark fw-bold">2. Première utilisation</h3>
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
            <i className="bi bi-info-circle-fill" /> <strong>Remarque :</strong> Visual Studio est un compilateur / environnement de développement.<br />
            Visual Studio Code est un éditeur de texte.
          </div>
          <p>Ensuite il ne vous reste plus qu'à lancer le fichier <strong>« FirstSetup.mlx »</strong> et à suivre les instructions.</p>
          <p>À la ligne 3, on vous demande de lancer la commande suivante :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>mex -setup</code></pre>
          <p>→ Sélectionner <strong>Microsoft Visual C++ 2022</strong>.</p>
          <p>Avant d'exécuter la ligne 9 (<code className="text-dark">rosgenmsg("ned_ros")</code>), copiez le dossier <code className="text-dark">niryo_robot_msgs</code> 
            (dans <code className="text-dark">ned_ros</code>) vers un nouveau dossier. MATLAB ne supporte pas la génération de messages dans un package contenant autre chose que des messages ou services. 
            Exécutez ensuite <code className="text-dark">rosgenmsg()</code> sur ce nouveau dossier.</p>
          <pre className="bg-dark text-white p-3 rounded"><code>rosgenmsg("ned_ros")</code></pre>
          <p>À ça :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>rosgenmsg("&lt;Chemin de votre fichier&gt;\&lt;le nom de votre fichier&gt;")</code></pre>
          <p>La ligne 10 explique la manipulation : sans celle-ci, <code className="text-dark">rosgenmsg</code> tenterait de générer des messages pour <strong>tous</strong> 
            les packages de <code className="text-dark">ned_ros</code>, 
            dont certains ne contiennent pas de fichiers messages, ce qui provoquerait une erreur.</p>
          <pre className="bg-dark text-white p-3 rounded"><code>rosgenmsg(fullfile("ned_ros","niryo_robot_hardware_stack"));</code></pre>
          <p>Pour ignorer cette commande et qu'elle ne pose plus de problème, il est possible de la supprimer ou la mettre en commentaire.</p>
          <div id="figure97" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure97.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 97 : Créer un commentaire sur MATLAB</p>
          <p>Pour la partie 4 du script (intitulé <strong>4. Add the custom message folder to the MATLAB path</strong>), vous pouvez mettre en commentaire une bonne partie des commandes et ne laisser que :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>addpath('&lt;!&gt;\MATLAB_msg_gen_ros1\win64\install\m'){"\n"}
savepath</code></pre>
          <p>A la place de <strong>&lt;!&gt;</strong>, ajouté le chemin menant au fichier de message créé précédemment.</p>
          <div id="figure98" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 400}}>
            <img src="images/Figure98.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 98 : Utilisation de la commande « rosgenmsg() »</p>
          <div id="figure99" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure99.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 99 : Lancement d'un programme</p>
          <p>Avec la commande ligne 18 du fichier FirstSetup.mlx, vous pouvez vous assurer que les
            messages présents dans « niryo-robot-msgs » sont bien utiliser. Ce sont tous les messages
            qui commencent par « niryo_robot_msgs ».</p>
          <div id="figure100" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure100.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 100 : Listage des messages existant via la commande « rosmsg list »</p>
          <p>La suite des instructions ne devrait pas poser de problèmes.</p>
        </div>
        <div id="matlab-simulation" className="mt-5">
          <h3 className="text-dark fw-bold">3. Simulation MATLAB</h3>
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
              <div id="figure101" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300}}>
                <img src="images/Figure101.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 101 : Interface de la simulation</p>
            </div>
            <div className="col-md-6">
              <div id="figure102" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300}}>
                <img src="images/Figure102.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
              </div>
              <p className="text-center small mt-1">Figure 102 : Interface de simulation pendant une trajectoire</p>
            </div>
          </div>
          <div id="figure103" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 500}}>
            <img src="images/Figure103.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 103 : Interface du panneau de contrôle de la simulation (1)</p>
          <div id="figure104" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 500}}>
            <img src="images/Figure104.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 104 : Interface du panneau de contrôle de la simulation (2)</p>
          <p>Vous remarquerez que les instructions MATLAB pour les différentes actions sont toutes écrites et pourront vous resservir lors de l'écriture de votre propre script MATLAB.</p>
          <div id="figure105" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 450}}>
            <img src="images/Figure105.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 105 : Utilisation de la commande « help »</p>
          <p>Vous pouvez directement accéder à l'ensemble de la documentation MATLAB, en cliquant <a href="https://fr.mathworks.com/help/releases/R2025b/?s_tid=user_nav_help">ici</a>.<br />
            Maintenant que nous avons pu utiliser la simulation MATLAB depuis le script fourni par le GitHub, il est temps de créer notre propre script .m permettant de contrôler le robot en simulation.</p>
          <div id="figure106" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure106.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 106 : Bras Ned2 avec la commande « .show() »</p>
          <p>La simulation MATLAB utilise la classe <strong>Ned2Sim.m</strong> qui définit les actions du robot : déplacements, affichage, récupération du TCP. 
            La commande <code className="text-dark">.show()</code> affiche le robot.</p>
          <p>Le code GitHub d'origine a dû être corrigé (erreurs de dimensionnement des variables). 
            Pour rappel, MATLAB manipule des matrices : une variable qui a pour valeur 5, par exemple, est en fait une matrice 1x1 qui a pour valeur 5.</p>
          <p>Après de nombreuses vérifications, nous obtenons le code disponible en <strong><a href="#exemple1">Exemple 01</a></strong>.</p>
          <p>Pour développer les possibilités de notre robot, nous avons ajouté des fonctions dans la classe Ned2Sim :</p>
          <ul>
            <li>La fonction <strong>MoveLinear()</strong>, qui demande au robot de déplacer la pince de façon linéaire. Disponible en <strong><a href="#exemple2">Exemple 02</a></strong>.</li>
            <li>La fonction <strong>MoveCircular()</strong>, qui demande au robot de déplacer la pince de façon circulaire. Disponible en <strong><a href="#exemple3">Exemple 03</a></strong>.</li>
            <li>La fonction <strong>getFK()</strong> qui renvoie la matrice homogène de cinématique directe entre la base du robot et la pince. Disponible en <strong><a href="#exemple4">Exemple 04</a></strong>.</li>
            <li>La fonction <strong>getTCP()</strong>, qui renvoie la position et l'orientation du TCP (Tool Center Point). Disponible en <strong><a href="#exemple5">Exemple 05</a></strong>.</li>
            <li>La fonction <strong>drawTCP()</strong> qui dessine un repère TCP sur la figure. Disponible en <strong><a href="#exemple6">Exemple 06</a></strong>.</li>
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
          <pre className="bg-dark text-white p-3 rounded"><code>nedSim = Ned2Sim();{"\n"}
nedSim.show();{"\n"}
pause(1){"\n"}
{"\n"}
disp('Déplacement du robot ...'){"\n"}
nedSim.Move([0.25 0 0.25],[0 0 0],3);{"\n"}
disp('Coordonnées du robot'){"\n"}
[pos,rpy] = nedSim.getTCP();{"\n"}
disp('Position du robot:'){"\n"}
fprintf('X: %f, Y: %f, Z: %f\n',pos){"\n"}
disp(' '){"\n"}
disp('Orientation du robot:'){"\n"}
fprintf('Roll: %f, Pitch: %f, Yaw: %f\n',rpy){"\n"}
disp(' '){"\n"}
{"\n"}
disp('Déplacement du robot en ligne ...'){"\n"}
P1 = [0.25 0.00 0.25];{"\n"}
P2 = [0.20 0.20 0.30];{"\n"}
nedSim.MoveLinear(P1, P2, [0 0 0], 4);{"\n"}
T = nedSim.getFK();{"\n"}
disp('Matrice de transformation du robot:'){"\n"}
disp(T){"\n"}
{"\n"}
disp('Déplacement du robot en cercle ...'){"\n"}
P1 = [0.20 0.00 0.30];{"\n"}
P2 = [0.25 0.10 0.35];{"\n"}
P3 = [0.20 0.20 0.30];{"\n"}
nedSim.MoveCircular(P1, P2, P3, [0 0 0], 5, 80);{"\n"}
nedSim.drawTCP();{"\n"}
% Retrieve and display the final position and orientation of the robot{"\n"}
finalPos = nedSim.getTCP();{"\n"}
disp('Position finale du robot:'){"\n"}
fprintf('X: %f, Y: %f, Z: %f\n',finalPos){"\n"}
</code></pre>
          <div className="alert alert-info">
            <i className="bi bi-info-circle-fill" /> <strong>Remarque :</strong> Les fonctions disp et fprintf servent à afficher un message ou une variable dans la console de commande. Elles permettent de savoir à quel endroit du code le robot est en train d'effectuer une action. La différence entre les deux est que disp accepte un seul argument d'entrée, là où fprintf peut en accepter plusieurs.
          </div>
          <p>La console nous renvoie les informations suivantes :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>Déplacement du robot ...{"\n"}
Coordonnées du robot{"\n"}
Position du robot:{"\n"}
X: 0.250000, Y: 0.000000, Z: 0.250000{"\n"}
Orientation du robot:{"\n"}
Roll: 0.000000, Pitch: 0.000000, Yaw: -0.000000{"\n"}
{"\n"}
Déplacement du robot en ligne ...{"\n"}
Matrice de transformation du robot:{"\n"}
{"    "}1.0000 -0.0000 -0.0000 0.2000{"\n"}
{"    "}0.0000{"  "}1.0000 -0.0000 0.2000{"\n"}
{"    "}0.0000{"  "}0.0000{"  "}1.0000 0.3000{"\n"}
{"         "}0{"       "}0{"       "}0 1.0000{"\n"}
{"\n"}
Déplacement du robot en cercle ...{"\n"}
Position finale du robot:{"\n"}
X: 0.200000, Y: 0.200000, Z: 0.300000</code></pre>
          <p>Sur la figure qui est apparu représentant le robot on retrouve le repère TCP dessiné :</p>
          <div id="figure107" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
            <img src="images/Figure107.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 107 : Image du Ned2 à la fin du programme</p>
          <p>On remarque cependant que la pince garde toujours la même position (vers le haut, le long de
            l'axe z) et cela même si le robot bouge. Elle n'est d'ailleurs pas alignée avec le Joint censé
            contrôler sa rotation. De plus, le Joint 6 contrôlant la rotation de la pince semble bloqué ou ne
            pas fonctionner.
          </p>
          <div id="figure108" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 250}}>
            <img src="images/Figure108.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 108 : Pince du robot mal positionné</p>
          <p>Pour résoudre ce problème, il faut se rendre dans le fichier <strong>urdf</strong> du robot.
            Ce fichier permet la représentation visuelle du robot dans la simulation. En réalité, il est divisé en plusieurs
            fichiers, chacun d'entre eux gérant une partie différente du robot. Le fichier qui nous intéresse et celui qui est
            appelé dans la classe Ned2Sim.m à la ligne 38.</p>
          <pre className="bg-dark text-white p-3 rounded"><code>rbt = importrobot("niryo_ned2_gripper1_n_camera.urdf.xacro");</code></pre>
          <p>Ce fichier contrôle la position et l'orientation de la pince du robot dans l'état initial ou lors de mouvement du robot.</p>
          <p>La partie à modifier est la suivante :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>&lt;!-- Joint from tool_link to base_gripper --&gt;{"\n"}
&lt;joint name="joint_to_gripper" type="fixed"&gt;{"\n"}
{"    "}&lt;parent link="tool_link"/&gt;{"\n"}
{"    "}&lt;child link="base_gripper_1"/&gt;{"\n"}
{"    "}&lt;origin xyz="-0.007 0 0.003" rpy="${"{"}-PI/2{"}"} 0 0"/&gt;{"\n"}
&lt;/joint&gt;</code></pre>
          <p>Il faut modifier la valeur du <strong>pitch</strong> (en rouge sur l'élément de code ci-dessus) de l'origine et le changer en <strong>${'{'}PI/2{'}'}</strong>.<br />
            Après ces changements, vous devriez avoir une pince qui suit les déplacements et rotations du bras robotique.</p>
          <p>Pour tester ces changements nous allons reprendre une partie du code utilisé précédemment:</p>
          <pre className="bg-dark text-white p-3 rounded"><code>nedSim = Ned2Sim();{"\n"}
nedSim.show();{"\n"}
disp('Initialisation du simulateur terminée.');{"\n"}
{"\n"}
disp('Déplacement du robot ...'){"\n"}
nedSim.Move([0.25 0 0.25],[0 0.95 0.4],3);{"\n"}
disp('Coordonnées du robot'){"\n"}
[pos,rpy] = nedSim.getTCP();{"\n"}
disp('Position du robot:'){"\n"}
fprintf('X: %f, Y: %f, Z: %f\n',pos){"\n"}
disp(' '){"\n"}
disp('Orientation du robot:'){"\n"}
fprintf('Roll: %f, Pitch: %f, Yaw: %f\n',rpy){"\n"}
disp(' '){"\n"}
</code></pre>
          <p>Nous avons changé les valeurs rpy pour effectuer une rotation avec nedSim.Move(…).On obtient :</p>
          <div id="figure109" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 250}}>
            <img src="images/Figure109.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 109 : Pince du robot bien positionné</p>
        </div>
        <div id="matlab-hardware" className="mt-5">
          <h3 className="text-dark fw-bold">4. Hardware</h3>
          <p>Le fichier <strong>« Ned2_Hardware.mlx »</strong> permet de connecter MATLAB au robot réel.</p>
          <div className="alert alert-warning">
            <i className="bi bi-exclamation-triangle-fill" /> 
            <strong>Remarque :</strong> La première instruction du script peut générer une erreur 
            même si les instructions du fichier ont été suivies.
          </div>
          <p>Le robot configure son ROS Master sur le port <code className="text-dark">127.0.0.1</code> (adresse locale), 
            mais son IP réelle est <code className="text-dark">169.254.200.200</code>. 
            Utiliser <code className="text-dark">127.0.0.1</code> à la place de l'IP du robot ne fonctionne pas, 
            car il s'agit d'une adresse par défaut sur tous les appareils Ethernet. 
            Il faut donc modifier cette configuration directement sur le robot.</p>
          <p>Pour corriger, modifiez la variable <code className="text-dark">$ROS_MASTER_URI</code> 
            avec l'adresse IP du robot. 
            Vous pouvez vérifier sa valeur via un terminal SSH dans NiryoStudio.</p>
          <pre className="bg-dark text-white p-3 rounded"><code>echo $ROS_MASTER_URI</code></pre>
          <p>Il faut aussi s'assurer que le robot n'utilise pas ROS en local et qu'il puisse discuter avec un appareil extérieur qui n'est pas connecté à sa Raspberry PI.</p>
          <p>Une fois que vous vous êtes assuré que le ROS pouvait être utilisé depuis votre appareil et que le ROS Master était bien configuré sur la bonne adresse IP, nous pouvons tester le code suivant :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>ned = Ned2("169.254.200.200");{"\n"}
ned.showRobot()</code></pre>
          <p>Or MATLAB doit se connecter au ROS Master pour communiquer avec le robot. Nous allons donc d'abord l'initialiser. On va modifier le code de la façon suivante :</p>
          <pre className="bg-dark text-white p-3 rounded"><code>rosshutdown;{"\n"}
setenv('ROS_MASTER_URI','http://169.254.200.200:11311');{"\n"}
setenv('ROS_IP','169.254.200.100');{"\n"}
rosinit;{"\n"}
ned = Ned2("169.254.200.200");{"\n"}
ned.goHome();</code></pre>
          <p>La première ligne (<code className="text-dark">rosshutdown</code>) ferme tous les ROS Masters déjà ouverts. 
            Elle est surtout utile lors des réexécutions du code pour éviter les conflits. 
            Les deux lignes suivantes (<code className="text-dark">setenv</code>) déclarent des variables systèmes : 
            l'adresse IP du ROS Master (celle du robot avec le bon port) 
            et l'adresse IP du PC utilisé.</p>
          <p>On initialise ensuite le ROS Master avec <code className="text-dark">rosinit</code>, 
            qui prend en compte les variables systèmes déclarées précédemment. Il est donc essentiel que leurs noms soient exactement 
            <code className="text-dark">ROS_MASTER_URI</code> et <code className="text-dark">ROS_IP</code>.</p>
          <p>On déclare ensuite un élément de la classe <strong>Ned2</strong>, 
            déjà présente dans les fichiers du GitHub : 
            <a href="https://github.com/mathworks-robotics/matlab-support-for-niryo-ned2-robots/tree/main/classes" target="_blank">
              https://github.com/mathworks-robotics/matlab-support-for-niryo-ned2-robots/tree/main/classes
            </a></p>
          <p>En lançant ce programme, une erreur devrait apparaître 
            lorsque la dernière ligne demande au robot de se déplacer en position Home.</p>
          <div id="figure110" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 200}}>
            <img src="images/Figure110.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 110 : Bras en position Home</p>
          <p>Or, MATLAB va tenter de faire appel à un message compris dans le dossier <strong>niryo_robot_tool_commander</strong>,
            et ces messages n'existent pas dans le GitHub. En regardant dans le firmware du robot,
            nous avons constaté qu'ils n'existent pas non plus dans le robot.<br />
            On recherche ToolGal.msg et ToolState.msg.</p>
          <div id="figure111" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 100}}>
            <img src="images/Figure111.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 111 : Message compris dans niryo_robot_tools_commander</p>
          <p>On recherche dans le robot un fichier action qui pourrait générer les messages que l'on
            souhaite. Nous avons fini par les trouver à l'aide de la commande suivante : </p>
          <pre className="bg-dark text-white p-3 rounded"><code>find ~/catkin_ws/src -name "*.action"</code></pre>
          <div id="figure112" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 150}}>
            <img src="images/Figure112.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
          </div>
          <p className="text-center small mt-1">Figure 112 : Recherche de ToolGoal.msg, ToolState.msg et des fichiers action</p>
          <p>Les fichiers <code className="text-dark">ToolGoal.msg</code> et <code className="text-dark">ToolState.msg</code> sont introuvables. 
            Plutôt que de mettre à jour le firmware (qui ferait tout perdre), la classe <strong>Ned2</strong> a été modifiée pour ne plus faire appel à ces mauvais messages. 
            La version réduite (initialisation ROS + mouvement Home) est disponible en <strong><a href="#exemple7">Exemple 07</a></strong>.</p>
          <div className="alert alert-info">
            <i className="bi bi-info-circle-fill" /> <strong>Remarque :</strong> Nous avons copié le code de la classe Ned2 originelle dans un document texte afin de pouvoir le retrouver rapidement et de réutiliser certaines parties. Cette façon de procéder va nous permettre de déboguer petit à petit les fonctions de cette classe Ned2.
          </div>
        </div>
      </div>
      <div id="programmation-ros" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-terminal" /> PROGRAMMATION ROS</h2>
        {/* ============================================ */}
        {/* 1. PRÉAMBULE */}
        {/* ============================================ */}
        <div id="preambule" className="mt-3">
          <h3 className="text-dark fw-bold">1. Préambule</h3>
          <p>Dans cette première partie on va lister les différentes commandes indispensables pour utiliser et naviguer à travers un environnement ROS.</p>
          <div id="commandes-bases">
            <h4 className="fw-bold mt-3"> Commandes de bases</h4>
            <div id="tableau28" className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr><th>Instructions</th><th>Description</th></tr>
                </thead>
                <tbody>
                  <tr><td className="fw-bold">cd</td><td>Change Directory : permet de naviguer entre les répertoires. cd &lt;nom_du_répertoire&gt;</td></tr>
                  <tr><td className="fw-bold">cd ..</td><td>Remonte d'un niveau dans l'arborescence des répertoires</td></tr>
                  <tr><td className="fw-bold">ls</td><td>List : affiche le contenu du répertoire courant (fichiers et sous-répertoires)</td></tr>
                  <tr><td className="fw-bold">mkdir</td><td>Make Directory : crée un nouveau répertoire. Utilisé par exemple pour créer
                      l'espace de travail (catkin_ws/src) ou le répertoire qui contiendra les fichiers python.</td></tr>
                  <tr><td className="fw-bold">touch</td><td>Créer un nouveau fichier vide</td></tr>
                  <tr><td className="fw-bold">chmod +x</td><td>Change les permissions d'un fichier pour le rendre exécutable. Il est
                      notamment indispensable pour les scripts Python.</td></tr>
                  <tr><td className="fw-bold">cp</td><td>Copy : permet de copier un répertoire ou un fichier. cp</td></tr>
                  <tr><td className="fw-bold">rm</td><td>Remove : supprime un fichier</td></tr>
                  <tr><td className="fw-bold">rm -rf</td><td>Supprime un répertoire et tout son contenu (r : récursif, f : forcer)</td></tr>
                  <tr><td className="fw-bold">source</td><td>Exécute un script (fichier .bash ou setup.bash) dans le terminal actuel pour
                      charger des variables ou des chemins d'accès.<br />
                      Essentiel après l'installation de ROS ou la compilation d'un workspace.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-center small mt-1">Tableau 28 : Tableau répertoriant les commandes ROS de base</p>
          </div>
          <div id="commandes-ros">
            <h4 className="fw-bold mt-3"> Commandes ROS fréquentes</h4>
            <p>Ces commandes interagissent directement avec l'environnement ROS (le Master et les noeuds).</p>
            <div id="tableau29" className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr><th>Instructions</th><th>Description</th></tr>
                </thead>
                <tbody>
                  <tr><td className="fw-bold">roslaunch</td><td>Lance un ou plusieurs nœuds, services, et serveurs de paramètres définis dans un fichier « .launch ».
                      <br />C'est la façon la plus courante de démarrer une application ROS complète.</td></tr>
                  <tr><td className="fw-bold">roscd</td><td>ROS Change Directory : Une commande spécifique à ROS pour naviguer
                      rapidement vers le répertoire d'un <strong>package</strong> ou d'un stack.<br />Ex: roscd &lt;mon_package&gt;.</td></tr>
                  <tr><td className="fw-bold">rosrun</td><td>Exécute directement un nœud unique dans un package.<br />
                      Ex: rosrun &lt;mon_package&gt; &lt;mon_noeud&gt;.</td></tr>
                  <tr><td className="fw-bold">roscore</td><td>Démarre le <strong>ROS Master</strong>, qui est le service d'enregistrement des nœuds.<br />
                      C'est la première chose à lancer pour qu'un système ROS fonctionne.</td></tr>
                  <tr><td className="fw-bold">rosnode list</td><td>Affiche la liste des nœuds actuellement actifs.</td></tr>
                  <tr><td className="fw-bold">rosnode kill &lt;nom_noeud&gt;</td><td>Arrête un nœud spécifique.</td></tr>
                  <tr><td className="fw-bold">rostopic list</td><td>Affiche la liste des Topics actuellement publiés.</td></tr>
                  <tr><td className="fw-bold">rostopic echo &lt;nom_topic&gt;</td><td>Affiche le contenu des <strong>messages</strong> circulant sur un Topic en temps réel.</td></tr>
                  <tr><td className="fw-bold">rostopic pub &lt;topic&gt; &lt;type_msg&gt; &lt;données&gt;</td><td>Publie un message sur un Topic. Souvent utilisé pour le débogage ou les tests rapides.</td></tr>
                  <tr><td className="fw-bold">rosservice list</td><td>Exécute un script (fichier .bash ou setup.bash) dans le terminal actuel pour charger des variables ou des chemins d'accès.<br />
                      Essentiel après l'installation de ROS ou la compilation d'un workspace.</td></tr>
                  <tr><td className="fw-bold">rosservice info &lt;nom_service&gt;</td><td>Affiche le type de message requis par un Service</td></tr>
                  <tr><td className="fw-bold">rosparam list</td><td>Affiche la liste de tous les paramètres chargés sur le <strong>Serveur de Paramètres</strong></td></tr>
                  <tr><td className="fw-bold">rosparam set &lt;param&gt; &lt;valeur&gt;</td><td>Modifie la valeur d'un paramètre en temps réel</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-center small mt-1">Tableau 29 : Tableau répertoriant les commandes ROS fréquentes</p>
          </div>
          <div id="commandes-compilation">
            <h4 className="fw-bold mt-3"> Commandes de compilation</h4>
            <p>Ces commandes sont utilisées pour créer et compiler les packages dans un « workspace » Catkin.</p>
            <div id="tableau30" className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr><th>Commande</th><th>Description</th></tr>
                </thead>
                <tbody>
                  <tr><td className="fw-bold">catkin_make</td><td>Commande de compilation principale pour les workspaces Catkin.<br />
                      Elle crée les exécutables et génère les fichiers de messages et services.</td></tr>
                  <tr><td className="fw-bold">rosdep install</td><td>Installe les dépendances logicielles et système (bibliothèques tierces) requises par les packages ROS.</td></tr>
                  <tr><td className="fw-bold">catkin_create_pkg</td><td>Commande pour créer la structure de base d'un nouveau package 
                      (avec son fichier package.xml et ses répertoires standard).</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-center small mt-1">Tableau 30 : Tableau répertoriant les commandes principales de compilation</p>
          </div>
        </div>
        {/* ============================================ */}
        {/* 2. SIMULATION : GAZEBO ET RVIZ */}
        {/* ============================================ */}
        <div id="simulation-gazebo-rviz" className="mt-5">
          <h3 className="text-dark fw-bold">2. Simulation : Gazebo et RViz</h3>
          <div id="generalites-simulation">
            <h4 className="fw-bold mt-3"> Généralités</h4>
            <p>Dans cette partie on va présenter les méthodes pour ouvrir les pages de simulation RViz et Gazebo et y énoncer les problèmes rencontrés pour obtenir une modélisation idéale du robot Niryo Ned2.</p>
            <p>Pour lancer la simulation Gazebo la documentation Ned ROS Stack nous dit d'exécuter la commande suivante :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>roslaunch niryo_robot_bringup desktop_gazebo_simulation.launch</code></pre>
            <p>Cependant la commande ne fonctionne pas et on obtient un message d'erreur commençant par :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>RLExecption: [desktop_gazebo_simulation.launch'] is neither a launch file in package [niryo_robot_bringup] nor is [niryo_robot_bringup] a launch file name{"\n"}
The traceback for the exception was written to the log file</code></pre>
            <p>Pour ce genre de problème, il est important de vérifier le chemin exact ainsi que le nom du fichier launch à lancer.</p>
            <p>Par exemple, si on reprend notre problème nous avons dû trouver le bon chemin avec les noms exacts :</p>
            <ul>
              <li>cd ~/niryo_ws/src/ned_ros</li>
              <li>ls</li>
              <li> on a obtenu les dossiers présents dans le package ned_ros</li>
              <li>celui qui nous intéresse est : cd niryo_robot_gazebo</li>
              <li>ls launch → pour afficher uniquement les packages launch</li>
              <li>puis on a trouvé notre document que l'on veut : gazebo.launch</li>
            </ul>
            <p>Donc après ces étapes, nous avons pu lancer notre fichier launch puis voir une page Gazebo s'ouvrir (<strong>Remarque</strong> : il faut sourcer les terminaux dès que l'on veut faire un roslaunch)</p>
            <pre className="bg-dark text-white p-3 rounded"><code>cd ~{"\n"}
source /opt/ROS/noetic/setup.bash{"\n"}
source ~/niryo_ws/devel/setup.bash{"\n"}
roslaunch niryo_robot_gazebo gazebo.launch</code></pre>
            <p>Une page Gazebo s'ouvre mais le robot représenté est le Niryo Ned1 or nous on veut le Niryo Ned2. 
              Pour corriger cela, il faut modifier le document gazebo.launch.<br />
              Il faut se rendre dans le répertoire niryo_robot_gazebo puis faire ‘gedit gazebo.launch' et cette page s'ouvre : </p>
            {/* FIGURE 113 */}
            <div id="figure113" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
              <img src="images/Figure113.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Code contenu dans le fichier gazebo.launch" />
            </div>
            <p className="text-center small mt-1">Figure 113 : Code contenu dans le fichier « gazebo.launch »</p>
            <p>On voit que le modèle du robot est défini dans la ligne de code :<br />
            </p><pre className="bg-dark text-white p-3 rounded"><code>&lt;arg name="hardware_version" default="ned"/&gt;</code></pre><p />
            <p>A présent, deux possibilités sont envisageables pour avoir le modèle que l'on souhaite :</p>
            <ul>
              <li>Soit on remplace « ned » par « ned2 » dans la ligne de code ci-dessus ;</li>
              <li>Soit on force le modèle souhaité lors de la commande roslaunch en écrivant :<br />
                <code className="text-dark">roslaunch niryo_robot_gazebo gazebo.launch hardware_version:=ned2</code></li>
            </ul>
            <p>Dans notre cas nous avons choisi la première méthode car c'est la plus pour éviter tout problème de version de robot.<br />
              <strong>Remarque :</strong>il faut bien évidemment sourcer le terminal avec les instructions énoncés plus haut.</p>
            <p>Après ces étapes effectué une page Gazebo s'ouvre et on voit ceci </p>
            {/* FIGURE 114 */}
            <div id="figure114" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300, marginBottom: '1rem'}}>
              <img src="images/Figure114.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Interface de Gazebo" />
            </div>
            <p className="text-center small mt-1">Figure 114 : Interface de Gazebo</p>
            <p>Pour lancer RViz la <a href="https://niryorobotics.github.io/ned_ros/index.html">documentation Ned ROS Stack</a> nous donne la commande suivante :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>roslaunch niryo_robot_bringup desktop_RViz_simulation.launch</code></pre>
            <p>Cependant, comme pour lancer Gazebo, le chemin et les noms des packages/documents sont pas les bons. Le chemin exact est le suivant :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>niryo_ws/src/ned_ros/niryo_robot_moveit_config/niryo_moveit_config_w_gripper1/launch</code></pre>
            <p>Et dans le répertoire launch on trouve le document à lancer : demo_gazebo.launch</p>
            <p>Si on suit la méthodologie précédente pour lancer ce document, la commande serait :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>roslaunch niryo_robot_moveit_config niryo_moveit_config_w_gripper1 /demo_gazebo.launch hardware_version:=ned2</code></pre>
            <p>Néanmoins, cette commande renvoie l'erreur suivante :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>RLExecption: [niryo_moveit_config_w_gripper1/demo_gazebo.launch] is neither a launch file in package [niryo_robot_moveit_config] nor is [niryo_robot_moveit_config] a launch file name{"\n"}
The traceback for the exception was written to the log file</code></pre>
            <p>Nous avons essayé de copier le document demo_gazebo.launch dans un répertoire launch
              (que nous avons créé) qui est lui-même dans le répertoire niryo_robot_moveit_config. Malgré
              ça, la même erreur revient quand on compile.</p>
            <pre className="bg-dark text-white p-3 rounded"><code>cp niryo_moveit_config_w_gripper1/demo_gazebo.launch launch/demo_gazebo.launch</code></pre>
            <p>La solution que nous avons trouvée est de faire la commande roslaunch demo_gazebo.launch depuis le répertoire où il est présent. C'est-à-dire :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>~/niryo_ws/src/ned_ros/niryo_robot_moveit_config/niryo_moveit_config_w_gripper1/launch</code></pre>
            <p><strong>Remarque :</strong> le document demo_gazebo.launch permet de lancer RViz mais également Gazebo.
              Donc pour pouvoir la compiler il ne faut pas que Gazebo soit déjà ouvert.</p>
            <p>Pour que la compilation se passe sans problème il nous a fallu faire une modification dans le document ros_controllers.launch selon ce que l'erreur de compilation nous disait.</p>
            <pre className="bg-dark text-white p-3 rounded"><code>... logging to /home/crestic/.ros/log/969be68e-ca9b-11f0-9b4b-e59671ab820d/roslaunch-crestic-Precision-7730-402438.log{"\n"}
Checking log directory for disk usage. This may take a while.{"\n"}
Press Ctrl-C to interrupt{"\n"}
Done checking log file disk usage. Usage is &lt;1GB.{"\n"}
{"\n"}
RLException: unused args [hardware_version] for include of [/home/crestic/niryo_ws/src/ned_ros/niryo_robot_moveit_config/niryo_moveit_config_w_gripper1/launch/ros_controllers.launch]{"\n"}
The traceback for the exception was written to the log file</code></pre>
            <p>Nous nous sommes rendus dans le document ros_controllers.launch dans lequel on y trouve le code suivant :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>&lt;?xml version="1.0" ?&gt;{"\n"}
&lt;launch xmlns:xs="http://www.w3.org/2001/XMLSchema"{"\n"}
{"    "}xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"{"\n"}
{"    "}xsi:noNamespaceSchemaLocation="https://gist.githubusercontent.com/nalt/dfa2abc9d2e3ae4feb82ca5608090387/raw/roslaunch.xsd"&gt;{"\n"}
{"    "}&lt;!-- Load joint controller configurations from YAML file to parameter server --&gt;{"\n"}
{"    "}(1){"\n"}
{"    "}&lt;rosparam file="${"{"}find niryo_moveit_config_w_gripper1{"}"}/config/${"{"}arg hardware_version{"}"}/ros_controllers.yaml" command="load"/&gt;{"\n"}
{"    "}&lt;!-- Load the controllers --&gt;{"\n"}
{"    "}&lt;node name="controller_spawner" pkg="controller_manager" type="spawner" respawn="false" output="log"{"\n"}
{"    "}args="niryo_robot_follow_joint_trajectory_controller gazebo_tool_commander "/&gt;{"\n"}
&lt;/launch&gt;</code></pre>
            <p>Nous avons donc rajouté la ligne <strong>&lt;arg name="hardware_version" default="ned2" /&gt;</strong> à l'emplacement (1) puis nous avons sourcé à nouveau puis compiler et nous n'avons pas eu d'autres problèmes pour lancer RViz et Gazebo à partir de la commande « roslaunch demo_gazebo.launch ».</p>
            <p>Une fois toutes ces modifications faites, nous obtenons :</p>
            {/* FIGURE 115 */}
            <div id="figure115" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300, marginBottom: '1rem'}}>
              <img src="images/Figure115.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Interfaces Gazebo et RViz avec le Niryo Ned2" />
            </div>
            <p className="text-center small mt-1">Figure 115 : Interfaces Gazebo et RViz avec le Niryo Ned2</p>
            <p>En zoomant sur la page de RViz, nous voyons :</p>
            {/* FIGURE 116 */}
            <div id="figure116" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300, marginBottom: '1rem'}}>
              <img src="images/Figure116.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Image montrant un défaut de la modélisation initiale sur RViz et Gazebo" />
            </div>
            <p className="text-center small mt-1">Figure 116 : Image montrant un "défault" de la modélisation initiale sur RViz (et Gazebo)</p>
            <p>Or, ce que l'on veut c'est que la pince soit alignée avec le reste du bras comme sur l'image suivant :</p>
            {/* FIGURE 117 */}
            <div id="figure117" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 200, marginBottom: '1rem'}}>
              <img src="images/Figure117.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Position de repos désirée de l'effecteur joint 6 par rapport au joint 5" />
            </div>
            <p className="text-center small mt-1">Figure 117 : Image montrant la position de repos désirée de l'effecteur/joint 6 (ici, la pince) par rapport au joint 5</p>
            <p>Pour faire cette modification du modèle, nous avons dû nous rendre dans le document « niryo_ned2_gripper1_n_camera.urdf.xacro » par le chemin suivant :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>~/niryo_ws/src/ned_ros/niryo_robot_description/urdf/ned2</code></pre>
            <p>Une fois dans ce chemin, la commande « <code className="text-dark">gedit niryo_ned2_gripper1_n_camera.urdf.xacro</code> »<br />
              permet d'ouvrir le contenu de ce document comme le montre l'image suivante :</p>
            {/* FIGURE 118 */}
            <div id="figure118" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 550, marginBottom: '1rem'}}>
              <img src="images/Figure118.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Code du fichier niryo_ned2_gripper1_n_camera.urdf.xacro" />
            </div>
            <p className="text-center small mt-1">Figure 118 : Code du fichier "niryo_ned2_gripper1_n_camera.urdf.xacro"</p>
            <p>La ligne qui a dû être modifiée est la ligne 23. Nous avons modifié la valeur du pitch en passant de 0 radians à PI/2 radians.</p>
            <p>Et à présent (après avoir sourcé et compiler à nouveau avec roslaunch) nous obtenons :</p>
            {/* FIGURE 119 et 120 */}
            <div id="figure119" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 450}}>
              <img src="images/Figure119.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Interface de RViz après modification de la position du joint 6" />
            </div>
            <p className="text-center small mt-1">Figure 119 : Interface de RViz après modification de la position du joint 6</p>
            <div id="figure120" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 450}}>
              <img src="images/Figure120.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Interface de Gazebo après modification de la position du joint 5" />
            </div>
            <p className="text-center small mt-1">Figure 120 : Interface de Gazebo après modification de la position du joint 5</p>
            <p>Remarque : il se peut qu'un message comme le suivant apparaisse :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>[WARN] [1764164355.420297073, 17.801000000]: New joint state for joint 'joint_1' is not newer than the previous state. Assuming your rosbag looped.</code></pre>
            <p>Dans ce cas, faites les instructions suivantes :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>ctrl + c # pour fermer Gazebo et RViz{"\n"}
killall -9 gzserver gzclient rosmaster{"\n"}
cd ~/niryo_ws{"\n"}
catkin_make{"\n"}
source devel/setup.bash{"\n"}
source /opt/ros/noetic/setup.bash{"\n"}
source ~/niryo_ws/devel/setup.bash{"\n"}
roslaunch demo_gazebo.launch hardware_version:=ned2</code></pre>
            <p>Dans RViz, activez le mode <strong>Interact</strong> pour faire apparaître une sphère sur la pince. 
              Déplacez-la pour définir une cible, puis cliquez sur <strong>Plan &amp; Execute</strong> dans le panneau MotionPlanning. 
              Le robot bleu (transparent) montre l'aperçu du mouvement, le robot jaune est le robot réel.</p>
            <p><strong>Remarque :</strong> si le robot bleu bouge en boucle, décochez <strong>Loop Animation</strong> dans l'onglet <strong>Planned Path</strong>.</p>
          </div>
          <div id="modeles-robot-rviz">
            <h4 className="fw-bold mt-3"> Les différents modèles de robot dans Rviz</h4>
            <p>Dans RViz, surtout lorsqu'on utilise des outils de planification comme MoveIt, 
              il est fréquent de voir plusieurs "versions" du robot se superposer.</p>
            <p><strong>MoveIt</strong> est un framework de planification de mouvements pour robots manipulateurs sous ROS. 
              Il transforme un objectif de haut niveau (ex : atteindre une position) en une trajectoire réalisable, 
              en respectant les contraintes mécaniques, les limites articulaires et les collisions. 
              Il agit comme une couche d'abstraction entre l'utilisateur et le robot, 
              permettant une programmation sûre et identique en simulation ou sur le robot réel. 
              Voir <a href="#exemple08">Exemple 08</a>.</p>
            <p><strong>Le robot réel (Current State / RobotModel) :</strong><br />
              C'est la représentation la plus importante : elle correspond à la réalité physique actuelle de
              votre robot (ou à sa simulation exacte dans Gazebo).</p>
            <ul>
              <li><strong>À quoi il sert :</strong> Il vous montre où se trouve le robot en ce moment même. Il est piloté
                par les données envoyées sur le topic « joint_states » (la position des moteurs)</li>
              <li><strong>Visuel :</strong> C'est généralement le modèle avec les textures pleines et les couleurs
                "normales" du robot.</li>
              <li><strong>Fonctionnement :</strong> Si vous bougez le vrai robot à la main, c'est ce modèle qui bougera dans RViz. 
                C'est votre retour visuel (feedback) pour confirmer que le logiciel sait où se trouve la machine dans l'espace.</li>
            </ul>
            <p><strong>L'état Objectif (Goal State).</strong><br />
              Ce modèle est un outil de commande. Il ne représente pas une réalité physique, mais une intention utilisateur</p>
            <ul>
              <li><strong>À quoi il sert :</strong> Il permet de définir la pose finale que vous souhaitez atteindre. Lorsque
                vous déplacez la "boule interactive" au bout du bras robotique, vous manipulez ce modèle "fantôme".</li>
              <li><strong>Visuel :</strong> Souvent représenté dans une couleur distincte (souvent orange ou vert, orange
                dans notre cas) ou parfois semi-transparent pour ne pas cacher le vrai robot.</li>
              <li><strong>Fonctionnement :</strong> Il est statique tant que vous ne le déplacez pas. Il sert de point
                d'arrivée pour le calcul de trajectoire. Une fois la planification lancée, le robot réel essaiera de se superposer à ce modèle.</li>
            </ul>
            <p><strong>La prévisualisation du chemin (Planned Path / Trajectory).</strong><br />
              C'est l'animation du futur. Une fois que l'algorithme a calculé comment aller du point A (Réel) au point B (Objectif), il génère ce modèle.</p>
            <ul>
              <li><strong>À quoi il sert :</strong>Il sert à valider la sécurité. Il vous montre le "film" du mouvement avant
                que le vrai robot ne bouge. C'est crucial pour vérifier que le robot ne va pas cogner un obstacle ou faire un mouvement bizarre.</li>
              <li><strong>Visuel :</strong>  C'est souvent un modèle "fantôme" translucide qui laisse une traînée derrière
                lui ou qui s'anime en boucle rapidement (dans notre cas : il est bleu et un peu transparent).</li>
              <li><strong>Fonctionnement :</strong>  Il n'apparaît qu'après avoir cliqué sur "Plan" et avant de cliquer sur
                "Execute". Il représente la solution mathématique trouvée par le planificateur de mouvement.</li>
            </ul>
            <p><strong>Résumé</strong><br />
              Si vous regardez dans le panneau de gauche ("Displays") de RViz, ces modèles correspondent généralement à :</p>
            <ul>
              <li><strong>RobotModel :</strong> L'état actuel (joint_states)</li>
              <li>MotionPlanning -&gt; Planning Request -&gt; Query Start/Goal State : La cible.</li>
              <li>MotionPlanning -&gt; Planned Path : L'animation de la trajectoire.</li>
            </ul>
            <p>Pour afficher ou non l'un de ces robots, il faut se rendre à des endroits spécifiques dans le panneau latéral de RViz.</p>
            <div id="tableau31" className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr><td className="fw-bold">Le robot "Réel"</td><td>Add → RobotModel → Add → aller dans ses paramètres → robot description : robotmodel</td></tr>
                  <tr><td className="fw-bold">L'état Objectif</td><td>MotionPlanning → PlanningRequests → Query Start State</td></tr>
                  <tr><td className="fw-bold">La Prévisualisation du Chemin</td><td>MotionPlanning → Planned Path → Show Robot Visual</td></tr>
                </tbody>
              </table>
            </div>
            {/* FIGURE 121 */}
            <div id="figure121" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 600, marginBottom: '1rem'}}>
              <img src="images/Figure121.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Panneau latéral de RViz" />
            </div>
            <p className="text-center small mt-1">Figure 121 : Panneau latéral de RViz</p>
          </div>
        </div>
        {/*                                */}
        {/* partie ROS du partie logiciels*/}
        {/*                                */}
        <div id="ros" className="mt-5">
          <h3 className="text-dark fw-bold">3. ROS</h3>
          <p>ROS (Robot Operating System) est un framework open-source qui facilite le développement de logiciels robotiques 
            en créant l'interface entre le matériel et les applications de haut niveau.</p>
          <p>Son apprentissage peut être complexe pour les débutants, 
            bien que l'utilisation de Blockly et Python masque partiellement cette difficulté. 
            Cependant, une bonne compréhension de ROS reste indispensable pour exploiter pleinement le robot.</p>
          <p>Le terme <strong>« stack »</strong> (pile en français) désigne un ensemble de packages ROS.</p>
          <p>La <strong>pile Niryo ROS</strong> = <strong>ensemble des packages ROS</strong> fournis par Niryo pour faire fonctionner le robot Ned2. Elle comprend les drivers, les nœuds, les API et outils nécessaires pour relier :<br />
            <strong>-&gt; le matériel (moteurs, capteurs) &lt;-&gt; logiciel (PC, scripts, NiryoStudio, vision).</strong></p>
          <p>La pile est divisée en deux parties :</p>
          <ul>
            <li><strong>High Level Package :</strong> forfaits de haut niveau (planificateur de mouvement, vision, etc.), développés en Python.</li>
            <li><strong>Low Level Package :</strong> forfaits de bas niveau (pilotes, gestion de matériel, etc.), développés en C++ pour assurer des capacités en temps réel.</li>
          </ul>
          <p>Pour configurer votre environnement et essayer la pile par vous-même :<br />
            La pile Niryo ROS peut être installée dans plusieurs systèmes d'exploitation cibles :<br /></p>
          <ul>
            <li><strong>Raspberry Pi 4</strong></li>
            <li><strong>Bureau</strong></li>
          </ul>
          <p>Comme la pile est basée sur ROS Noetic, vous devez être sur un système basé sur Ubuntu 20.04.<br />
            Vous pouvez soit l'installer directement sur un Ubuntu 20.04 (les autres versions de Ubuntu ne sont pas compatibles avec Ned2, c'est la version recommandée par Raspberry Pi 4), soit le déployer à l'aide de Docker.</p>
          <p>Pour télécharger Ubuntu : <a href="https://ubuntu.com/20-04" target="_blank">https://ubuntu.com/20-04</a></p>
          <p>Les robots Ned sont entièrement basés sur ROS.<br />
            ROS est le moyen le plus direct de contrôler le robot. Il permet de :</p>
          <ul>
            <li>Envoyer des commandes via le terminal afin d'appeler des services, de déclencher des actions, ...</li>
            <li>Écrire un nœud Python/C++ entier pour réaliser un processus complet.</li>
          </ul>
          <p>La version de Ubuntu 18.04 est compatible seulement avec le Niryo One. Comme le Ned2 repose sur ROS Noetic, seule la version Ubuntu 20.04 est compatible.</p>
          <div id="methodologie-ros">
            <h4 className="fw-bold mt-3"> Méthodologie</h4>
            <p>Les étapes qui suivent sont uniquement valables une fois que vous avez téléchargé Ubuntu 20.04.</p>
            <p><strong>• ROS Noetic Stack</strong></p>
            <p>Avant d'installer cette pile, plusieurs commandes sont à écrire.<br />
              Dans un premier temps, il faut s'assurer que le système soit à jour :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo apt-get update{"\n"}
sudo apt-get upgrade{"\n"}
sudo apt-get dist-upgrade</code></pre>
            <p>Puis on met à jour les différents dépôts :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo add-apt-repository universe{"\n"}
sudo add-apt-repository multiverse{"\n"}
sudo add-apt-repository restricted</code></pre>
            <p>Vous pouvez vous rendre sur ce <a href="https://help.ubuntu.com/community/Repositories/Ubuntu" target="_blank">lien</a> si vous souhaitez en savoir davantage sur ces dépôts.</p>
            <p>Pour la suite de la configuration, il faut suivre les instructions suivantes que l'on peut retrouver sur cette page <a href="https://wiki.ros.org/noetic/Installation/Ubuntu" target="_blank">wiki.ROS</a> fournie par la page <a href="https://niryorobotics.github.io/ned_ros/installation/install_for_ubuntu_20.html" target="_blank">Ned ROS Stack</a>.</p>
            <p><strong>• Configuration du fichier « sources.list » :</strong></p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" &gt; /etc/apt/sources.list.d/ros-latest.list'</code></pre>
            <p><strong>• Configuration des clés :</strong></p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo apt install curl # si vous n'avez pas déjà installé curl{"\n"}
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -</code></pre>
            <p>À présent, on peut installer la pile ROS Noetic. Il existe trois possibilités d'installation :</p>
            <ul>
              <li><strong>Installation complète :</strong> <code className="text-dark">sudo apt install ros-noetic-desktop-full</code></li>
              <li><strong>Installation qui contient le contenu de ROS-Base, plus des outils d'interface graphique comme rqt et RViz :</strong> <code className="text-dark">sudo apt install ros-noetic-desktop</code></li>
              <li><strong>Installation minimale contenant seulement ROS-Base mais sans outils d'interface graphique :</strong> <code className="text-dark">sudo apt install ros-noetic-ros-base</code></li>
            </ul>
            <p>Il est cependant possible de télécharger une des deux versions les moins complètes mais avec un package précis non disponible dans la version par la commande :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo apt install ros-noetic-&lt;NOM_DU_PACKAGE&gt;</code></pre>
            <p>Vous pouvez trouver les packages disponibles dans la version que vous venez de télécharger par la commande :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>apt search ros-noetic</code></pre>
            <p><strong>• Configuration de l'environnement :</strong></p>
            <p>Il est important de sourcer chaque terminal par la commande :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>source /opt/ros/noetic/setup.bash</code></pre>
            <p>Les deux commandes suivantes permettent de sourcer tous les terminaux directement dès leurs ouvertures :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>echo "source /opt/ros/noetic/setup.bash" &gt;&gt; ~/.bashrc{"\n"}
source ~/.bashrc</code></pre>
            <p><strong>• Installation des dépendances :</strong></p>
            <p>Les éléments installés jusqu'à présent sont les éléments nécessaires à l'exécution des packages ROS principaux. Pour créer et gérer vos propres workspace ROS, divers outils et dépendances sont disponibles séparément comme « ROSinstall » qui permet de télécharger de nombreux répertoires sources de package ROS en une seule commande.</p>
            <p>Dans notre cas, il est donc nécessaire de faire :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential</code></pre>
            <p>Avant de pouvoir utiliser de nombreux outils ROS, vous devrez initialiser « rosdep ». « rosdep » permet d'installer facilement les dépendances système pour le code source que vous souhaitez compiler et est nécessaire au fonctionnement de certains composants essentiels de ROS. Si vous n'avez pas encore installé rosdep, procédez comme suit :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo apt install python3-rosdep</code></pre>
            <p>« rosdep » s'initialise de la manière suivante :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo rosdep init{"\n"}
rosdep update</code></pre>
            <p>De retour sur le site de la <a href="https://niryorobotics.github.io/ned_ros/installation/install_for_ubuntu_20.html" target="_blank">pile ROS Ned</a>. Comme déjà évoqué, cette pile est un ensemble de packages ROS qui doivent être compilés dans un workspace catkin.</p>
            <pre className="bg-dark text-white p-3 rounded"><code>mkdir -p ~/niryo_ws/src</code></pre>
            <p>Ensuite on se rend ensuite dans le dossier « src » pour cloner le dépôt robot et initialisez ses modules.</p>
            <pre className="bg-dark text-white p-3 rounded"><code>cd ~/niryo_ws/src</code></pre>
            <div className="alert alert-warning mt-3">
              <i className="bi bi-exclamation-triangle-fill" /> <strong>ATTENTION :</strong> le tutoriel présent sur la page de cette pile nous donne le git à cloner utilisant « ros_babel_fish ». Néanmoins ce git ne dépend plus de « ros_babel_fish » depuis 2023. Il est donc obligatoire de cloner le bon git via la commande suivante :
            </div>
            <pre className="bg-dark text-white p-3 rounded"><code>git clone https://github.com/foxglove/ros-foxglove-bridge.git --branch main</code></pre>
            <p>Puis :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>sudo apt install ros-noetic-ros-babel-fish{"\n"}
git clone https://github.com/NiryoRobotics/ned_ros.git</code></pre>
            <p>Des dépendances (packages) supplémentaires sont à installer pour le bon fonctionnement de tous les packages Ned :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>cd ~{"\n"}
sudo apt install sqlite3 ffmpeg build-essential -y</code></pre>
            <p>Pour chaque paquet Ned ROS, nous avons référencé toutes les dépendances dans son fichier package.xml respectif, ce qui permet d'installer chaque dépendance via la commande rosdep. Nous fournissons également un fichier requirements.txt qui liste toutes les dépendances requises pour le code Python et qui peut être installé via pip.</p>
            <pre className="bg-dark text-white p-3 rounded"><code>cd ~/niryo_ws{"\n"}
pip install -r src/ned_ros/requirements.txt{"\n"}
rosdep update{"\n"}
rosdep install --from-paths src --ignore-src -r -y</code></pre>
            <p>L'installation est presque terminée, il faut maintenant compiler :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>cd ~/niryo_ws{"\n"}
catkin_make install</code></pre>
            <p>Et ne pas oublier de sourcer les terminaux que l'on utilise :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>source /opt/ros/noetic/setup.bash{"\n"}
source ~/niryo_ws/install/setup.bash</code></pre>
            <p>ROS2 : <a href="https://github.com/NiryoRobotics/ned-ros2-driver" target="_blank">https://github.com/NiryoRobotics/ned-ros2-driver</a></p>
          </div>
        </div>
        <div id="creation-programmes" className="mt-5">
          {/* ============================================ */}
          {/* 3. CRÉATION ET LANCEMENT DE PROGRAMME (SIMULATION) */}
          {/* ============================================ */}
          <div id="creation-programmes" className="mt-5">
            <h3 className="text-dark fw-bold">4. Création et Lancement de programme (Simulation)</h3>
            <p>Pour pouvoir écrire les actions que l'on veut faire dans nos simulations, il est important de savoir toutes les commandes disponibles et identifier celles que nous devons utiliser. Bien évidemment, plusieurs options sont possibles mais nous en évoquerons que 2 plus un listage des commandes « générales ».</p>
            <div id="commandes-utiles">
              <h4 className="fw-bold mt-3"> Où trouver les commandes nécessaires ?</h4>
              <p><strong>Via le terminal.</strong> C'est la méthode la plus fiable car elle montre exactement ce qui est installé sur l'ordinateur.</p>
              <p>La méthodologie est la suivante :</p>
              <ul>
                <li>Ouvrir un terminal et le sourcer :<br />
                  <code className="text-dark">source /opt/ros/noetic/setup.bash</code><br />
                  <code className="text-dark">source ~/niryo_ws/devel/setup.bash</code></li>
                <li>Taper la commande suivante : <strong>« python3 »</strong> (cela correspond à l'interpréteur Python)</li>
                <li>Lancer la simulation avec <strong>« roslaunch demo_gazebo.launch »</strong></li>
                <li>Taper les lignes suivantes :</li>
              </ul>
              <pre className="bg-dark text-white p-3 rounded"><code>import sys, moveit_commander{"\n"}
{"\n"}
moveit_commander.roscpp_initialize(sys.argv){"\n"}
{"\n"}
# Création d'un objet MoveGroupCommander{"\n"}
# Pas besoin que le robot soit connecté pour ça{"\n"}
group = moveit_commander.MoveGroupCommander("arm"){"\n"}
{"\n"}
# Liste toutes les méthodes disponibles :{"\n"}
dir(group)</code></pre>
              <p>Une liste va apparaître dans le terminal. C'est la liste de toutes les fonctions disponibles.</p>
              <ul>
                <li>Les fonctions commençant par « set_ » pour définir des objectifs (positions, orientations, etc.)</li>
                <li>Les fonctions commençant par « get_ » pour obtenir des informations (état du robot, pose courants, joints, etc.)</li>
              </ul>
              <p>Pour obtenir l'aide détaillée sur une commande précise, il faut utiliser la commande suivante :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>help(nom_de_la_fonction)</code></pre>
              <p>Cette commande expliquera la fonction et donnera les arguments qu'attend la fonction.</p>
              <p>Bien que cette méthode soit toujours utile et infaillible, il existe néanmoins des commandes à connaître car elles sont grandement utiles.</p>
              <p><strong>Via la documentation officielle (bibliothèque).</strong><br />
                Pour comprendre la philosophie ou voir des exemples complexes, c'est cette méthode qu'il faut utiliser.</p>
              <p>Le Guide Officiel MoveIt (Python Interface) : C'est la "Bible". 
                Regarde surtout la section sur MoveGroupCommander.<br />
                <a href="https://docs.ros.org/en/melodic/api/moveit_tutorials/html/doc/move_group_python_interface/move_group_python_interface_tutorial.html">Documentation MoveIt Commander</a>.<br />
                L'API Reference (plus fastidieux) : c'est la liste brute de toutes les classes.<a href="https://docs.ros.org/en/noetic/api/moveit_commander/html/classmoveit__commander_1_1move__group_1_1MoveGroupCommander.html">MoveIt Python API Doxygen</a>.</p>
            </div>
            <div id="commandes-utiles-liste">
              <h4 className="fw-bold mt-3"> Les commandes utiles</h4>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr><th>Description</th><th>Commandes</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold">Obtenir des informations</td>
                      <td>« group.get_current_pose().pose » : donne la position (x,y,z) et orientation (quaternion) actuelle de l'effecteur.<br />
                        « group.get_current_joint_values() » : donne les angles des 6 moteurs [ j1, j2, …].<br />
                        « group.get_planning_frame() » : dit par rapport à quoi on bouge (souvent "world" ou "base_link").</td>
                    </tr>
                    <tr><td className="fw-bold">Définir un objectif / une destination</td>
                      <td>« group.set_joint_value_target([j1, j2, …]) » : c'est la fonction la plus précise car on donne directement les angles des joints.<br />
                        « group.set_pose_target(pose_msg) » : On donne une coordonnée X,Y,Z + Orientation. Le robot calcule les angles (Inverse Kinematics).<br />
                        « group.set_named_target("home") » : Utilise une position pré-enregistrée dans le fichier SRDF.<br />
                        « group.set_position_target([x, y, z]) » : Si on veut juste changer la position sans se soucier de l'orientation de la pince.</td>
                    </tr>
                    <tr><td className="fw-bold">Lancer une action</td>
                      <td>« group.go(wait=True) » : Planifie et bouge le robot.<br />
                        « group.stop() » : Arrêt d'urgence du mouvement.<br />
                        « group.clear_pose_targets() » : Très important. À faire après chaque mouvement pour "oublier" l'ancien objectif.</td></tr>
                    <tr><td className="fw-bold">Développement de l'environnement (ajouter / supprimer un obstacle)</td>
                      <td>scene.add_box(...) : Ajoute un obstacle.<br />
                        scene.remove_world_object(...) : Supprime un obstacle.</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center small mt-1">Tableau 31 : Tableau répertoriant les commandes fréquentes pour la construction de programme ".py" via ROS</p>
              <p>La partie suivante va présenter les différents programmes de simulation que nous avons fait ainsi que leurs constructions.</p>
            </div>
            <div id="structure-programme">
              <h4 className="fw-bold mt-3"> Structure d'un programme</h4>
              <p><strong>Importation des bibliothèques.</strong></p>
              <p>Cette partie concerne la programmation du robot Niryo Ned2 avec MoveIt, 
                via son interface Python <code className="text-dark">moveit_commander</code>. 
                Les principes présentés sont communs à la simulation et au robot réel, 
                à l'exception des bibliothèques spécifiques à Gazebo (propres à la simulation). 
                La logique ROS (nœuds, messages, planification) reste identique dans les deux cas.</p>
              <p>Les bibliothèques à importer dépendent du type de données manipulées 
                (positions, orientations, trajectoires, messages, services). 
                Il est donc essentiel d'identifier correctement les objets utilisés 
                pour importer les modules appropriés.</p>
              <p><strong>• Bibliothèques indispensables</strong></p>
              <p>Quel que soit le script utilisant MoveIt, certaines bibliothèques sont 
                systématiquement nécessaires et constituent la base minimale d'un programme fonctionnel.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>import sys{"\n"}
import copy{"\n"}
import rospy{"\n"}
import moveit_commander</code></pre>
              <ul>
                <li><strong>sys :</strong> nécessaire à l'initialisation de l'interface C++ de MoveIt via moveit_commander.roscpp_initialize(sys.argv)</li>
                <li><strong>copy :</strong> permet de dupliquer des objets complexes (par exemple une `Pose`) sans modifier l'original par erreur</li>
                <li><strong>rospy :</strong> bibliothèque fondamentale de ROS en Python (création de nœuds, gestion du temps, temporisations)</li>
                <li><strong>moveit_commander :</strong> interface principale de MoveIt en Python, donnant accès notamment à «MoveGroupCommander» et «RobotCommander»</li>
              </ul>
              <p>Ces bibliothèques sont utilisées aussi bien en simulation que lors de l'exécution sur le robot réel.</p>
              <p><strong>• Manipulation des positions et orientations : geometry_msgs</strong></p>
              <p>Dès lors que l'on manipule des positions ou des orientations dans l'espace cartésien (axes X, Y, Z), l'utilisation des messages geometry_msgs devient indispensable.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>import geometry_msgs.msg</code></pre>
              <p>Ces messages sont utilisés notamment dans les cas suivants :</p>
              <ul>
                <li>Définition d'une cible cartésienne ('target_pose')</li>
                <li>Modification directe de coordonnées ('position.x = 0.2')</li>
                <li>Ajout d'obstacles dans la scène MoveIt (nécessitant une 'PoseStamped')</li>
              </ul>
              <p>L'oubli de cet import provoque typiquement l'erreur suivante : <code className="text-dark">NameError: name 'Pose' is not defined</code></p>
              <p><strong>• Calculs d'angles : bibliothèque math</strong></p>
              <p>Les robots manipulent des angles exprimés en radians, tandis que l'utilisateur raisonne généralement en degrés. La bibliothèque 'math' permet de gérer cette conversion de manière explicite et lisible.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>import math{"\n"}
# Ou si on veut importer juste un ou deux objets :{"\n"}
from math import pi, radians, degrees</code></pre>
              <p>Elle est utilisée notamment pour :</p>
              <ul>
                <li>Définir des positions articulaires de manière lisible (ex : pi/2 plutôt que 1.57)</li>
                <li>Convertir des angles exprimés en degrés vers des radians (ex : radians(90))</li>
              </ul>
              <p><strong>• Messages avancés MoveIt : moveit_msgs</strong></p>
              <p>La bibliothèque « moveit_msgs » permet de manipuler des messages avancés liés à la planification et à la visualisation dans MoveIt.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>import moveit_msgs.msg</code></pre>
              <p>Elle est principalement utilisée pour :</p>
              <ul>
                <li>La gestion avancée des objets de collision</li>
                <li>L'attachement d'objets au robot</li>
                <li>L'affichage explicite de trajectoires dans RViz via DisplayTrajectory</li>
              </ul>
              <p>Cette bibliothèque est utilisée aussi bien en simulation que sur le robot réel.</p>
              <p><strong>• Interaction avec Gazebo (spécifique à la simulation)</strong></p>
              <p>Certaines bibliothèques sont spécifiques à l'environnement de simulation <strong>Gazebo</strong> et ne sont pas utilisées lors de l'exploitation du robot réel.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>from gazebo_msgs.srv import SpawnModel, DeleteModel</code></pre>
              <p>Ces services permettent notamment :</p>
              <ul>
                <li>L'ajout dynamique de modèles dans la scène de simulation</li>
                <li>La suppression d'objets virtuels</li>
              </ul>
              <p>Ils sont utilisés exclusivement dans le cadre de la simulation.</p>
              <p><strong>• Mémo récapitulatif des imports</strong></p>
              <p>Le tableau suivant récapitule les principales bibliothèques à importer en fonction de l'action réalisée :</p>
              <div id="tableau32" className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr><th>Action</th><th>Commande / Objet utilisé</th><th>Import nécessaire</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold">Initialisation ROS</td><td>roscpp_initialize, init_node</td><td>import sys, import rospy, import moveit_commander</td></tr>
                    <tr><td className="fw-bold">Mouvement articulaire</td><td>group.go([...])</td><td>Aucun import supplémentaire</td></tr>
                    <tr><td className="fw-bold">Mouvement cartésien</td><td>set_pose_target(ma_pose)</td><td>geometry_msgs.msg (Pose)</td></tr>
                    <tr><td className="fw-bold">Calculs d'angles</td><td>pi, radians()</td><td>math</td></tr>
                    <tr><td className="fw-bold">Ajout d'obstacle</td><td>add_box(..., pose)</td><td>geometry_msgs.msg (PoseStamped)</td></tr>
                    <tr><td className="fw-bold">Ajout d'objet (Gazebo)</td><td>SpawnModel</td><td>gazebo_msgs.srv</td></tr>
                  </tbody>
                </table>
              </div>
              <p><strong>• Méthodologie pour identifier un import inconnu</strong></p>
              <p>Lorsqu'un objet ROS inconnu est rencontré dans un exemple de code (par exemple « Wrench »), la méthode suivante permet d'identifier rapidement son origine :</p>
              <ul>
                <li>Rechercher le nom de l'objet suivi de « ROS » Exemple : Wrench ROS msg</li>
                <li>Identifier le paquet ROS correspondant Exemple : geometry_msgs/Wrench</li>
              </ul>
              <p>En déduire l'import Python associé : <code className="text-dark">from geometry_msgs.msg import Wrench</code></p>
              <p>Cette méthodologie est universelle en programmation ROS et permet de gagner un temps considérable lors du développement.</p>
              <p><strong>Structure d'un programme</strong></p>
              <p>Dans plusieurs exemples de programme étudiés et utilisés, deux « blocs » revenaient à chaque fois :</p>
              <ul>
                <li>La définition de fonctions à l'aide du mot-clé « def »</li>
                <li>La présence d'un bloc conditionnel « if __name__ == "__main__" » en fin de script</li>
              </ul>
              <p>Ces deux éléments soulèvent naturellement plusieurs questions : </p>
              <ul>
                <li>À quoi servent-ils exactement ?</li>
                <li>Sont-ils réellement indispensables au bon fonctionnement du programme ?</li>
                <li> Etc.</li>
              </ul>
              <p>Ces structures (<code className="text-dark">def</code> et <code className="text-dark">if __name__ == "__main__"</code>) 
                ne sont pas obligatoires pour exécuter un programme Python ou piloter un robot. 
                Il est possible d'écrire un script sous forme d'une simple succession d'instructions, 
                comme c'est souvent le cas dans Niryo Studio.</p>
              <p>Cependant, pour des programmes plus complexes, modulaires ou réutilisables, 
                leur utilisation est fortement recommandée.</p>
              <p><strong>Remarque :</strong> Ces principes sont indépendants de la simulation ou du robot réel 
                et relèvent de la structuration logicielle en Python.</p>
              <p><strong>Définition de fonctions : <code className="text-dark">def</code></strong></p>
              <p>Le mot-clé <code className="text-dark">def</code> permet de regrouper un ensemble d'instructions au sein d'une fonction. 
                Une fonction agit comme une « boîte » contenant une séquence d'actions 
                qui ne sera exécutée que lorsqu'elle est explicitement appelée.</p>
              <p>Sans fonctions, le code est exécuté ligne par ligne dès le lancement du script. 
                Si une action doit être répétée, il faut dupliquer les lignes, 
                ce qui nuit à la lisibilité et à la maintenabilité.</p>
              <p>À l'inverse, l'utilisation de fonctions permet :</p>
              <ul>
                <li>De structurer clairement le programme</li>
                <li>D'éviter les répétitions inutiles</li>
                <li>De faciliter la modification ou l'évolution du code</li>
              </ul>
              <p>Par exemple, si le robot doit successivement effectuer des actions telles que : attraper, trier et ranger, il est pertinent de définir une fonction pour chacune de ces tâches :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>catch(){"\n"}
classify(){"\n"}
tidy()</code></pre>
              <p>Cette approche rend le programme plus lisible 
                et plus proche d'une description fonctionnelle du comportement du robot.</p>
              <p>Par ailleurs, les fonctions permettent de limiter la portée des variables : 
                celles définies à l'intérieur d'une fonction sont locales et détruites à la fin de son exécution, 
                ce qui réduit les risques d'interférences entre différentes parties du programme.</p>
              <p><strong>Bloc conditionnel if __name__ == "__main__"</strong></p>
              <p>Ce bloc conditionnel, généralement placé à la fin de chaque programme, est une construction Python utilisée pour contrôler le point d'entrée d'un programme.</p>
              <p>Concrètement, ce bloc permet de distinguer deux cas :</p>
              <ul>
                <li>Le fichier est exécuté directement depuis le terminal</li>
                <li>Le fichier est importé comme un module dans un autre programme</li>
              </ul>
              <p>Sans ce bloc, l'ensemble du code contenu dans le fichier serait exécuté automatiquement dès son importation. Dans un contexte robotique, cela peut provoquer des comportements indésirables, tels que le déclenchement immédiat de mouvements du robot.</p>
              <p>Prenons l'exemple d'un fichier nommé « mouvements_robot.py », contenant différentes
                fonctions de déplacement. Si ce fichier est importé dans un second programme, par exemple
                « assemblage.py », l'absence du bloc conditionnel entraînerait l'exécution immédiate du code.</p>
              <p>L'utilisation du bloc :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>if __name__ == "__main__":{"\n"}
{"    "}main()</code></pre>
              <p>permet de garantir que :</p>
              <ul>
                <li>Le code principal ne s'exécute que lorsque le fichier est lancé explicitement</li>
                <li>Les fonctions peuvent être importées et réutilisées en toute sécurité dans d'autres scripts</li>
              </ul>
              <p>Cette structure est essentielle pour concevoir des programmes modulaires, évolutifs et réutilisables, notamment dans des projets ROS impliquant plusieurs fichiers et plusieurs nœuds.</p>
            </div>
            <div id="simulation-programmes">
              <h4 className="fw-bold mt-3"> Simulation</h4>
              <p>Pour les exercices de cette partie, nous avons utilisé « moveit_commander » et « rospy ». C'est la méthode la plus fiable en simulation car le Wrapper Niryo (pyniryo) est conçu pour le robot réel et gère mal l'ajout d'obstacles virtuels dans RViz.</p>
              <strong>Remarques :</strong>
              <ul>
                <li>Ne pas oublier de lancer Gazebo et RViz avant et dans un autre terminal</li>
                <li>Ne pas oublier de sourcer ce terminal</li>
                <li>Pour lancer un programme Python, il faut taper la commande suivante : <code className="text-dark">python3 &lt;nom_fichier&gt;.py</code></li>
              </ul>
              <p><strong>Premier programme :</strong></p>
              <p>Le premier programme a comme chronologie de mouvement :</p>
              <ul>
                <li>Se mettre en position d'origine</li>
                <li>Ouvrir la pince</li>
                <li>Descendre saisir un objet imaginaire (non représenté)</li>
                <li>Fermer la pince</li>
                <li>Revenir une position d'origine</li>
                <li>Pivoter de 90° (π/2) le joint 1 (la base)</li>
                <li>Descendre pour poser l'objet</li>
                <li>Ouvrir la pince</li>
                <li>Remonter le long de z pour éviter des collisions latérales si présence d'obstacles</li>
                <li>Revenir à la position d'origine</li>
              </ul>
              <p>Pour cela on s'est rendu dans le répertoire src via la commande : <code className="text-dark">cd ~/niryo_ws/src</code>. Une fois dans ce répertoire, nous avons fait les instructions suivantes :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>mkdir -p scripts_python{"\n"}
cd scripts_python{"\n"}
touch test_1.py{"\n"}
chmod +x test_1.py{"\n"}
gedit test_1.py</code></pre>
              <p>Le document test_1.py est l'endroit où nous avons écrit notre code. L'extension « .py » indique que c'est un script python qui doit être écrit. Deux méthodes peuvent être utilisées :</p>
              <ul>
                <li>Utiliser le Wrapper ROS Python : une surcouche créée par Niryo qui masque la complexité de ROS. C'est beaucoup plus simple à lire pour un débutant. Bibliothèque utilisée : pyniryo.<br />
                  <strong>Remarque :</strong> cette méthode cache ce qui se passe "sous le capot". Si le wrapper plante, on ne sait pas pourquoi.</li>
                <li>Utiliser moveit_commander : c'est l'interface Python officielle de MoveIt. Ce code fonctionnerait presque à l'identique sur un bras robotique industriel KUKA, un Fanuc ou un Yaskawa. C'est la méthode "professionnelle" pour parler au planificateur de trajectoire.</li>
                <strong>Remarque :</strong> Le fichier demo_gazebo.launch permet de lancer simultanément la
                simulation Gazebo, RViz et MoveIt, garantissant la cohérence entre le modèle robot, lavplanification et la visualisation.
              </ul>
              <p>Quand on utilise <code className="text-dark">moveit_commander</code>, les programmes sont plus fastidieux mais permettent de tout contrôler. 
                La méthode Wrapper ROS Python est plus courte mais on n'a pas accès à tout, car c'est le wrapper qui convertit le code en messages ROS.</p>
              <p>Pour des programmes simples, le wrapper <code className="text-dark">pyniryo</code> peut suffire. 
                En revanche, pour des scénarios complexes (planification, collisions, obstacles virtuels), l'utilisation directe de <code className="text-dark">moveit_commander</code> est recommandée.</p>
              <p>Pour utiliser le wrapper, installez la bibliothèque <code className="text-dark">pyniryo</code> : <code className="text-dark">pip3 install pyniryo</code></p>
              <p>Notre code présent dans 'test_1.py' est présent en <strong><a href="#exemple09">Exemple 09</a></strong>.</p>
              <p>Pour lancer cette simulation, et avoir la meilleure visualisation, quelques prérequis doivent être faits :</p>
              <ul>
                <li>Lancer Gazebo et RViz : « demo_gazebo.launch » dans un terminal</li>
                <li>Décocher la case Loop Animation dans RViz</li>
                <li>Ouvrir et sourcer un deuxième terminal : « source ~/niryo_ws/devel/setup.bash »</li>
                <li>Lancer votre programme depuis le répertoire : « python3 « nom_du_fichier ».py »</li>
              </ul>
              <p><strong>Remarque :</strong> Nous avons remarqué qu'il était préférable de se mettre dans le répertoire où se trouve le document « .py » pour pouvoir le lancer. Néanmoins vous pouvez le lancer en étant dans « home (~) » avec la commande suivante :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>python3 &lt;nom_du_package&gt; &lt;nom_du_fichier&gt;.py</code></pre>
              <p><strong>Deuxième programme :</strong></p>
              <p>Dans ce nouveau programme, on place une boîte virtuelle dans la trajectoire du robot et le robot va devoir trouver une trajectoire alternative (généralement courbée) pour éviter l'obstacle.</p>
              <p>On utilise l'outil « PlanningSceneInterface » de MoveIt qui permet d'ajouter des objets de collision (cubes, murs, tables) dans l'environnement 3D de RViz.</p>
              <p>Voici les étapes effectuées pour la conception de cet exercice :</p>
              <ul>
                <li>Création du fichier « obstacle_demo.py » dans le répertoire « scripts_python »</li>
                <li>Le code du script Python est celui de l'<strong><a href="#exemple10">Exemple 10</a></strong></li>
              </ul>
              <p>L'obstacle ajouté est intégré dans la scène de planification de MoveIt et est pris en compte par l'algorithme de planification lors du calcul de la trajectoire.</p>
              <p>Dans RViz, un bloc va apparaître. Le robot, au lieu de faire une ligne droite (qui traverserait le bloc), va lever le bras ou passer par-dessus pour atteindre l'autre côté.</p>
              <p><strong>Troisième programme :</strong></p>
              <p>À présent, nous avons voulu faire apparaître un vrai cube dans Gazebo, aller le saisir avec la pince et le soulever.</p>
              <p>Dans ce programme, on prend en compte les problèmes qui peuvent apparaître dans une situation réelle (collision avec le cube, glissement du cube s'il est mal saisi, etc.)</p>
              <p>Pour faire apparaître le cube dans Gazebo, on utilise la fonction « spawn_model ».<br />
                Voici les étapes effectuées pour la conception de cet exercice :</p>
              <ul>
                <li>Création du fichier « pick_and_place.py » dans le répertoire « scripts_python »</li>
                <li>Le code du script Python est celui de l'<strong><a href="#exemple11">Exemple 11</a></strong></li>
              </ul>
              {/* FIGURE 122 */}
              <div id="figure122" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300, marginBottom: '1rem'}}>
                <img src="images/Figure122.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Image montrant la mauvaise saisie d'un cube dans l'environnement de Gazebo" />
              </div>
              <p className="text-center small mt-1">Figure 122 : Image montrant la mauvaise saisie d'un cube dans l'environnement de Gazebo</p>
              <p>Sur cette photo, la saisie du cube est mal réalisée. Malgré plusieurs ajustements (hauteur, vitesse, friction), 
                une prise stable n'a pas pu être obtenue.</p>
              <p>La simulation physique sous Gazebo présente des limites : le cube glisse des doigts. Ce comportement est cohérent 
                avec les approximations du moteur physique de Gazebo, notamment pour les contacts et la friction.</p>
              <p>La compilation du fichier <code className="text-dark">demo_gazebo.launch</code> renvoyait deux erreurs, 
                dont une apparaissait à chaque exercice après des modifications dans les fichiers <code className="text-dark">.py</code>, 
                même après avoir fermé les fichiers et exécuté les commandes <code className="text-dark">source</code>.</p>
              <p>La première erreur est apparue à l'exercice 3 : il s'agissait d'un défaut de trajectoire dans Gazebo pour saisir le cube. 
                Les deux prochaines parties expliquent la méthodologie pour résoudre ces erreurs.</p>
            </div>
            <div id="defaut-trajectoire">
              <h4 className="fw-bold mt-3">Défaut de trajectoire</h4>
              <p>Après compilation du fichier « launch » puis du script Python, on a observé que le robot adoptait une trajectoire anormale, qualité de « tordue », lors de la tentative de saisie de l'objet. Pour modifier cela, deux approches ont été envisagées :</p>
              <ul>
                <li>Amener la pince <strong>parallèle au sol</strong> avant la pièce puis avancer horizontalement pour la saisir</li>
                <li>Orienter la pince perpendiculairement au-dessus de l'objet, en modifiant l'orientation du joint 5 (rotation de -π/4), puis effectuer une descente verticale</li>
              </ul>
              <p>La première méthode (saisie d'objets plats) est efficace en contexte réel, mais inadaptée en simulation : 
                les moteurs physiques de Gazebo gèrent mal les inter-pénétrations entre objets.</p>
              <p>Demander à MoveIt de positionner la pince au sol (Z=0) déclenche une collision, 
                entraînant un refus de planification ou un comportement instable.</p>
              <p>Forcer cette contrainte côté Gazebo provoque des forces excessives, 
                générant des comportements irréalistes (sauts, instabilité).</p>
              <p>En simulation, il est préférable d'approcher la pince par le dessus, avec une orientation verticale. 
                Cela limite les collisions et contraint le planificateur à utiliser une solution cinématique plus stable, 
                notamment en pliant le joint 5 pour aligner la pince perpendiculairement à l'objet.</p>
              <p>Initialement, le code utilisait <code className="text-dark">set_rpy_target([0, 1.57, 0])</code>, 
                laissant MoveIt résoudre seul la cinématique inverse. 
                Mais en raison du montage de la pince (rotation de 90° sur le joint 6), 
                MoveIt pouvait sélectionner des solutions peu intuitives, conduisant à des trajectoires non souhaitées.</p>
              <p>Cette analyse montre l'importance de contraindre la configuration articulaire en simulation, 
                pour éviter des solutions mathématiquement valides mais physiquement peu réalistes.</p>
            </div>
            <div id="debug-warn">
              <h4 className="fw-bold mt-3">Méthodologie de débogage d'une erreur de type [WARN]</h4>
              <p>L'erreur suivante apparaissait régulièrement lors de l'exécution des simulations :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>[WARN] [1764164355.420297073, 17.801000000]: New joint state for joint 'joint_1' is not newer than the previous state. Assuming your rosbag looped.</code></pre>
              <p>Cet avertissement est fréquent dans les environnements combinant ROS et Gazebo. Il est généralement lié à un conflit de gestion du temps (d'horloge). Gazebo utilise une horloge simulée (qui démarre à 0 quand on lance la simulation), alors que ROS peut, par défaut, s'appuyer sur l'horloge de l'ordinateur.</p>
              <p>Lorsque ROS reçoit des messages avec l'heure 0 alors qu'il s'attendait à l'heure réelle (ou l'inverse), il interprète cela comme un retour en arrière temporel, d'où l'apparition de ce warning.</p>
              <p><strong>Méthode n°1 : Ignorer le warning</strong></p>
              <p>La première méthode est simple : elle consiste à ignorer ce warning. En effet, si le robot apparaît correctement dans RViz et qu'il est possible de le contrôler normalement alors on peut ignorer ce message. Il apparaît souvent au démarrage de la simulation, le temps que les différents nœuds se synchronisent.</p>
              <p><strong>Méthode n°2 : Nettoyage complet des processus ROS</strong></p>
              <p>Si le robot présente des mouvements saccadés ou ne répond plus correctement, il est probable que d'anciens processus ROS interfèrent avec la simulation en cours. Un nettoyage complet est alors nécessaire :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>killall -9 gzserver gzclient rosmaster roscore</code></pre>
              <p>Les lignes suivantes devraient apparaître :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>gzserver : aucun processus trouvé{"\n"}
gzclient : aucun processus trouvé{"\n"}
rosmaster : aucun processus trouvé{"\n"}
roscore : aucun processus trouvé</code></pre>
              <p>Et on peut à présent relancer notre simulation en effectuant la succession de ces commandes :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>source /opt/ros/noetic/setup.bash{"\n"}
source ~/catkin_ws/devel/setup.bash{"\n"}
catkin_make{"\n"}
roslaunch demo_gazebo.launch{"  "}# depuis le répertoire où se trouve ce script</code></pre>
              <p><strong>Méthode n°3 : Vérifier le paramètre de temps</strong></p>
              <p>Si l'erreur persiste en continu (spam dans le terminal), vérifiez que ROS sait qu'il doit utiliser l'heure simulée de Gazebo (et non l'heure de votre ordinateur) :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>rosparam set /use_sim_time true</code></pre>
              <p>Ce paramètre peut également être vérifié depuis RViz en activant l'option Use Sim Time. Si use_sim_time est correctement positionné à True et que le warning apparaît encore ponctuellement, il s'agit généralement d'un léger retard au démarrage de la simulation.</p>
              <p><strong>Attention :</strong> en faisant la commande « killall -9 gzserver gzclient rosmaster roscore », il se peut que l'erreur « ERROR: Unable to communicate with the master ! » apparaisse dans le terminal. Cette erreur est logique car la commande « killall … » a fermé le Master ROS.</p>
              <p><strong>Pour résoudre cette erreur, il suffit de :</strong></p>
              <ul>
                <li>Ouvrir deux nouveaux terminaux</li>
                <li>Faire : <code className="text-dark">killall -9 gzserver gzclient rosmaster roscore</code> dans le terminal de roslaunch</li>
                <li>Vérifier que cette commande renvoie les messages « … : aucun processus trouvé »</li>
                <li>Fermer ce terminal et celui où le fichier « .py » était lancé</li>
                <li>Dans un terminal : écrire <code className="text-dark">cd ~</code></li>
                <li>Puis écrire (l'une après l'autre) :</li>
              </ul>
              <pre className="bg-dark text-white p-3 rounded"><code>source ~/catkin_ws_niryo/devel/setup.bash{"\n"}
cd ~/catkin_ws_niryo/niryo_robot_moveit_config/niryo_moveit_config_w_gripper1{"\n"}
cd launch{"\n"}
roslaunch demo_gazebo.launch hardware_version:=ned2</code></pre>
              <ul>
                <li>Attendre que Gazebo s'ouvre. Le message d'erreur "loop" peut revenir mais il faut l'ignorer pour l'instant</li>
                <li>Ouvrir le deuxième terminal :</li>
              </ul>
              <pre className="bg-dark text-white p-3 rounded"><code>cd ~{"\n"}
source ~/catkin_ws_niryo/devel/setup.bash{"\n"}
rosparam get /use_sim_time</code></pre>
              <p>Deux cas sont possibles :</p>
              <ul>
                <li><strong>« true » :</strong> la configuration est bonne, le warning "looped" vient d'un léger lag au démarrage de Gazebo. Si le robot est fonctionnel, on peut travailler sans se soucier de ce message.</li>
                <li><strong>« false » :</strong> C'est un problème. Il faut le forcer à true → Dans le Terminal 2 : <code className="text-dark">rosparam set /use_sim_time true</code> ; puis retourner dans le Terminal 1, faire CTRL+C pour arrêter la simulation, et relancer-la (<code className="text-dark">roslaunch ...</code>). Cette fois, ROS saura dès le début qu'il doit utiliser l'heure de Gazebo. Mais ce n'est pas pour autant qu'elle n'apparaîtra pas à nouveau...</li>
              </ul>
              <p>Ce warning peut persister même avec un temps simulé correct, 
                notamment si plusieurs publishers publient l'état des joints simultanément. 
                C'est le cas avec le Niryo Ned2 simulé : Gazebo publie l'état physique des articulations 
                tandis que MoveIt peut également tenter de publier un état estimé.</p>
              <p>Tant que le robot s'affiche correctement dans RViz, 
                que la pince est bien orientée et que les scripts s'exécutent sans instabilité, 
                ce warning est non bloquant. 
                C'est un comportement connu sous Gazebo qui ne gêne pas le développement, 
                à condition que le robot reste stable.</p>
            </div>
            <div id="plateformes-simulation">
              <h4 className="fw-bold mt-3"> Ajouter des plateformes en simulations</h4>
              <p>Dans cette partie, l'objectif est de rapprocher l'environnement de simulation des conditions rencontrées sur une cellule robotisée réelle. Pour cela, nous avons étudié la création de plateformes (tables / workspaces) ainsi que de convoyeurs, éléments fréquemment utilisés dans les applications industrielles.</p>
              <p><strong>Plateformes</strong></p>
              <p>Il existe principalement deux méthodes pour créer une plateforme dans Gazebo, selon le niveau de réalisme recherché et la complexité de la scène.</p>
              <p><strong>Méthode 1 : Méthode rapide par script Python</strong></p>
              <p>Cette méthode consiste à créer un objet directement via un script Python, en utilisant le service ROS de type spawn_model, comme dans l'exercice précédent. Elle est simple à mettre en œuvre et suffisante pour des tests fonctionnels ou pédagogiques.</p>
              <p>Par exemple, pour créer une table de dimensions 1 m × 1 m × 0,7 m, on définit un modèle URDF minimal directement dans le script :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>table_xml = """{"\n"}
&lt;robot name="simple_table"&gt;{"\n"}
{"  "}&lt;link name="table_link"&gt;{"\n"}
{"    "}&lt;inertial&gt;{"\n"}
{"      "}&lt;origin xyz="0 0 0" /&gt;{"\n"}
{"      "}&lt;mass value="10.0" /&gt;{"\n"}
{"      "}&lt;inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0" /&gt;{"\n"}
{"    "}&lt;/inertial&gt;{"\n"}
{"    "}&lt;visual&gt;{"\n"}
{"      "}&lt;geometry&gt;&lt;box size="1.0 1.0 0.7" /&gt;&lt;/geometry&gt;{"\n"}
{"      "}&lt;material name="Gazebo/Grey"/&gt;{"\n"}
{"    "}&lt;/visual&gt;{"\n"}
{"    "}&lt;collision&gt;{"\n"}
{"      "}&lt;geometry&gt;&lt;box size="1.0 1.0 0.7" /&gt;&lt;/geometry&gt;{"\n"}
{"    "}&lt;/collision&gt;{"\n"}
{"  "}&lt;/link&gt;{"\n"}
{"  "}&lt;gazebo reference="table_link"&gt;{"\n"}
{"    "}&lt;material&gt;Gazebo/Grey&lt;/material&gt;{"\n"}
{"  "}&lt;/gazebo&gt;{"\n"}
&lt;/robot&gt;{"\n"}
"""</code></pre>
              <p>L'objet est ensuite inséré dans le monde Gazebo avec un décalage vertical approprié. L'origine d'une boîte étant située en son centre, la position en Z doit être ajustée de -0,35 m afin que la surface supérieure de la table soit alignée avec le sol :</p>
              <pre className="bg-dark text-white p-3 rounded"><code># Spawn de la table (décalée en Z pour que le dessus soit à 0){"\n"}
# Z = -0.35 car l'origine de la boite est son centre (0.7 / 2){"\n"}
spawn_urdf("work_table", table_xml, "", Pose(position=Point(0.5, 0, -0.35)), "world")</code></pre>
              <p>Cette méthode est rapide et flexible, mais elle reste limitée à des géométries simples et à un réalisme visuel réduit.</p>
              <p><strong>Méthode 2 : Méthode professionnelle via le fichier .world</strong></p>
              <p>La seconde méthode, plus proche des pratiques industrielles, 
                consiste à modifier directement le fichier <code className="text-dark">.world</code> chargé par Gazebo. 
                Cette approche permet d'intégrer des modèles 3D complexes 
                (tables industrielles réalistes, cellules complètes, environnements préconfigurés).</p>
              <p>Gazebo dispose d'une base de données de modèles intégrée. 
                Il est possible, via le fichier launch, d'inclure un monde existant contenant déjà des tables et des éléments d'environnement :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>&lt;include file="$(find gazebo_ros)/launch/empty_world.launch"&gt;</code></pre>
              <p>Cette méthode est plus robuste et recommandée pour des simulations complexes ou proches d'un environnement réel, notamment lorsque plusieurs objets fixes doivent être pris en compte dans la planification de trajectoires.</p>
              <p><strong>Convoyeurs</strong></p>
              <p>Comme pour les plateformes, il y a deux méthodes pour le faire. La seule différence est que la première méthode créée le convoyeur mais qui a la même utilité qu'une plateforme (i.e elle ne bouge pas). Et la deuxième est de faire un convoyeur fonctionnel.</p>
              <p><strong>Méthode 1 : Convoyeur statique (non fonctionnel)</strong></p>
              <p>La méthode la plus simple consiste à modéliser le convoyeur comme une table rectangulaire, sans mouvement. Dans ce cas, le robot peut déposer un objet dessus, mais celui-ci ne sera pas déplacé automatiquement.</p>
              <p>La mise en œuvre est identique à celle d'une plateforme, en modifiant simplement les dimensions de la boîte, par exemple :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>&lt;box size="0.3 1.5 0.7"/&gt;</code></pre>
              <p>Cette approche est suffisante pour tester des scénarios de prise et de dépôt, mais elle ne permet pas de simuler un flux de production.</p>
              <p><strong>Méthode 2 : Convoyeur fonctionnel avec plugin Gazebo</strong></p>
              <p>Pour créer un convoyeur fonctionnel dans Gazebo, 
                un plugin (généralement en C++) est nécessaire. 
                Il simule le mouvement du tapis roulant et applique des forces aux objets en contact.</p>
              <p>Le constructeur fournit souvent un package <code className="text-dark">niryo_robot_gazebo</code> 
                contenant un modèle officiel de convoyeur et ses plugins associés. 
                Vérifiez le dossier launch pour identifier un fichier de type 
                <code className="text-dark">niryo_ned_gazebo_conveyor.launch</code> 
                ou un argument permettant d'activer le convoyeur au lancement de la simulation.</p>
              <p>À défaut d'un modèle fourni, la logique générale de création d'un convoyeur fonctionnel est la suivante :</p>
              <ul>
                <li>Charger un modèle URDF de convoyeur</li>
                <li>Ajouter un plugin Gazebo dans ce modèle afin de simuler le mouvement du tapis :</li>
              </ul>
              <pre className="bg-dark text-white p-3 rounded"><code>```xml{"\n"}
&lt;plugin name="conveyor_belt_plugin" filename="libROSConveyorBeltPlugin.so"&gt;{"\n"}
&lt;robot_namespace&gt;/&lt;/robot_namespace&gt;{"\n"}
&lt;link&gt;belt_link&lt;/link&gt;{"\n"}
&lt;power&gt;20&lt;/power&gt;{"\n"}
&lt;/plugin&gt;{"\n"}
```</code></pre>
              <p>Piloter ensuite le convoyeur via un service ROS, permettant de l'activer ou de le désactiver depuis un script Python.</p>
              <p><strong>A modifier : A VERIFIER DANS NED_ROS</strong><br />
                Cette partie n'a pas été validée expérimentalement dans le cadre de ce projet et doit être considérée comme une piste théorique basée sur la documentation Gazebo et les pratiques courantes en simulation robotique.</p>
            </div>
            <div id="conclusion-simulation">
              <h4 className="fw-bold mt-3">Conclusion sur la simulation</h4>
              <p>La simulation du robot Niryo Ned2 avec ROS, MoveIt et Gazebo a permis d'appréhender la planification de trajectoires, la manipulation d'objets et la gestion d'obstacles dans un environnement 3D. L'usage de MoveIt a montré sa robustesse pour générer des trajectoires sûres, optimiser les mouvements et intégrer les contraintes physiques et géométriques.</p>
              <p>Les exercices réalisés ont mis en évidence <strong>les limites de la simulation</strong>, notamment dans la gestion des collisions et de la friction. Ils ont également illustré l'importance d'une méthodologie rigoureuse de débogage :</p>
              <ul>
                <li>synchronisation des horloges (`use\_sim\_time`)</li>
                <li>nettoyage des processus ROS</li>
                <li>vérification des états des joints pour garantir la cohérence entre simulation et planification</li>
              </ul>
              <p>En synthèse, ces différents exercices de simulation nous ont offert une expertise pratique sur la planification et le contrôle d'un bras robotisé, tout en consolidant la compréhension des contraintes physiques, logicielles et méthodologiques nécessaires à l'implémentation de systèmes robotiques fiables et industrialisables. La simulation reste un outil indispensable pour prototyper et valider les stratégies de manipulation avant expérimentation sur un robot réel.</p>
              <p>Après plusieurs jours à étudier et comprendre différents points de la simulation, nous sommes passés sur la programmation du robot réel.</p>
            </div>
          </div>
          {/* ============================================ */}
          {/* 4. PROGRAMMATION DU ROBOT RÉEL */}
          {/* ============================================ */}
          <div id="programmation-reel" className="mt-5">
            <h3 className="text-dark fw-bold">5. Programmation du robot réel</h3>
            <div id="commande-reel">
              <h4 className="fw-bold mt-3"> Commande du robot réel</h4>
              <p>Après validation en simulation (Gazebo et RViz), nous avons commandé le robot réel Niryo Ned2. 
                Pour rester cohérent avec la simulation et faciliter l'intégration de capteurs, 
                nous avons utilisé des scripts Python basés sur l'interface ROS (rospy), 
                plutôt qu'une communication client-serveur comme le wrapper Python.</p>
              <p>Avant de mouvoir le robot, il faut connaître les méthodes de commande disponibles : 
                le bras peut être déplacé via des positions cartésiennes ou articulaires calculées par le programme, 
                ou via des positions/trajectoires pré-enregistrées dans la mémoire interne du robot (via Niryo Studio).</p>
              <p>L'utilisation de positions enregistrées s'est avérée plus simple et robuste. 
                Contrairement à la simulation ROS où les positions sont dans des fichiers complexes (ex: fichiers .srdf de MoveIt), 
                le robot réel les stocke dans une base de données interne, accessible via Niryo Studio.</p>
              <p>Deux méthodes permettent d'accéder à ces positions :</p>
              <ul>
                <li>Par l'interface de Niryo Studio, dans l'onglet « Bibliothèques »</li>
                <li>Par un script Python utilisant le wrapper (le plus rapide)</li>
              </ul>
              <p>Pour la première, le wrapper Pyniryo possède une fonction dédiée pour "demander" au robot ce qu'il a en mémoire. Pour y accéder il suffit de :</p>
              <ul>
                <li>Créer un fichier « lister_positions.py » dans le répertoire « src » ou un sous-répertoire</li>
                <li>Donner l'autorisation avec « chmod +x lister_positions.py »</li>
                <li>Ecrire le code de l'<strong><a href="#exemple12">Exemple 12</a></strong> (avec la commande « gedit lister_positions.py »)</li>
              </ul>
              <p>L'utilisation du wrapper Python permet notamment d'interroger le robot afin de récupérer dynamiquement la liste des positions enregistrées. Cette approche s'avère particulièrement utile pour automatiser des séquences de mouvements ou vérifier l'existence de positions avant leur utilisation dans un programme.</p>
            </div>
            <div id="limites-connexion">
              <h4 className="fw-bold mt-3"> Limites rencontrées pour se connecter au robot par la méthode « rospy »</h4>
              <p>Lors de la commande du robot réel via ROS, un problème bloquant est apparu : 
                malgré une calibration correcte (LED verte), aucune communication ROS n'était possible depuis l'ordinateur. 
                Les commandes ROS standard échouaient avec une erreur indiquant l'impossibilité de se connecter au ROS Master.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>ERROR: Unable to communicate with master!</code></pre>
              <p>Des tests réseau ont révélé que le port ROS (11311) était actif sur le robot, mais uniquement sur l'interface locale. 
                Le ROS Master écoutait exclusivement sur <code className="text-dark">127.0.0.1</code>, 
                empêchant toute connexion depuis un autre ordinateur.</p>
              <p>Cette configuration rend impossible l'utilisation de ROS en mode distribué, 
                que ce soit avec des scripts Python (rospy), des bibliothèques comme roslibpy, ou des outils externes comme MATLAB.</p>
            </div>
            <div id="analyse-cause">
              <h4 className="fw-bold mt-3"> Analyse de la cause du dysfonctionnement</h4>
              <p>L'origine du problème : une modification manuelle du fichier <code className="text-dark">.bashrc</code> du robot. 
                Des variables d'environnement critiques ont été ajoutées ou modifiées, 
                alors que sur le Ned2, le ROS Master est géré automatiquement par le logiciel interne.</p>
              <p>Cette intervention a forcé le ROS Master à fonctionner uniquement en mode local. 
                Une fois ce comportement installé, il est impossible de le corriger depuis l'extérieur, 
                même en rétablissant les variables d'environnement côté PC.</p>
              <p>Le problème de communication peut être schématisé ainsi :</p>
              {/* TABLEAU 32 avec Figure 123 et Figure 124 */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div id="figure123" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
                    <img src="images/Figure123v2.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Schéma montrant la communication attendue entre le PC et le robot via le port 11311" />
                  </div>
                  <p className="text-center small mt-1">Figure 123 : Schéma montrant la communication attendue entre le PC et le robot via le port 11311</p>
                  <ul>
                    <li> Le ROS Master écoute sur l'interface réseau ;</li>
                    <li> Le PC peut l'atteindre via 169.254.200.200:11311 ;</li>
                    <li> Utilisation possible de rostopic, rospy, MATLAB, etc.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div id="figure124" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 400, marginBottom: '1rem'}}>
                    <img src="images/Figure124v2.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Schéma montrant la communication réelle rencontrée entre le PC et le robot via le port 11311" />
                  </div>
                  <p className="text-center small mt-1">Figure 124 : Schéma montrant la communication réelle rencontrée entre le PC et le robot via le port 11311</p>
                  <ul>
                    <li> Le ROS Master écoute sur l'interface réseau ;</li>
                    <li> Le PC peut l'atteindre via 169.254.200.200:11311 ;</li>
                    <li> Utilisation possible de rostopic, rospy, MATLAB, etc.</li>
                  </ul>
                </div>
              </div>
              <p className="text-center small mt-1">Tableau 32 : Tableau montrant la communication PC/Robot attendue versus la réalité</p>
              <p>Et on peut les expliquer de la façon suivante. Le fonctionnement de ROS repose sur un principe de communication distribuée, dans lequel un ROS Master centralise les informations sur les nœuds, les topics et les services. Pour permettre à plusieurs machines de communiquer entre elles, le ROS Master doit impérativement écouter sur une interface réseau accessible.</p>
              <p>Dans notre cas, le ROS Master du Niryo Ned2 était lancé en écoutant uniquement sur l'adresse « 127.0.0.1 », correspondant à l'interface locale du robot. Cette configuration signifie que seules les applications s'exécutant directement sur le robot peuvent accéder au ROS Master. Toute tentative de connexion depuis un ordinateur externe, même connecté par Ethernet, est alors refusée.</p>
              <p>Cette situation a été confirmée expérimentalement par la commande suivante :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>ss -lntp | grep 11311</code></pre>
              <p>Qui a retourné :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>LISTEN 0 128 127.0.0.1:11311</code></pre>
              <p>Cela explique pourquoi les commandes ROS exécutées depuis le PC, telles que `rostopic list`, échouaient systématiquement avec une erreur de communication, malgré une calibration correcte du robot et une LED indiquant un état opérationnel.</p>
            </div>
            <div id="solution-mise-oeuvre">
              <h4 className="fw-bold mt-3"> Solution mise en œuvre</h4>
              <p>Face à l'impossibilité de rétablir une configuration réseau ROS fonctionnelle, 
                nous avons reflashé la carte SD du robot avec le firmware 5.8.5, 
                restaurant ainsi un environnement logiciel stable.</p>
              <p>Cette expérience souligne l'importance de ne pas modifier les fichiers système d'un robot 
                sans connaissance précise de son mécanisme de démarrage. 
                Elle met aussi en évidence la différence entre une simulation (totalement maîtrisée) 
                et un robot réel (dont certaines couches sont abstraites pour des raisons de sécurité).</p>
              <p>Nous avons tenté d'utiliser la bibliothèque <code className="text-dark">rospy</code> pour programmer le robot, 
                mais le port 11311 est fermé aux communications externes. 
                Un scan (<code className="text-dark">nmap -p 11311 169.254.200.200</code>) renvoie "Closed". 
                Le robot est configuré par défaut en mode "autiste" : 
                le ROS Master n'écoute que sur <code className="text-dark">127.0.0.1</code> (localhost).</p>
              <p>Le support technique nous a indiqué que la communication par le port 11311 est possible 
                mais non documentée, et nous a renvoyé vers la documentation ROS : 
                <a href="https://wiki.ros.org/ROS/Technical%20Overview">https://wiki.ros.org/ROS/Technical%20Overview</a>.</p>
              <p>Nous en avons conclu que le port 11311 a été bridé par Niryo pour des raisons de sécurité, 
                car ROS est un système distribué nécessitant une visibilité totale sur les ports.</p>
              <p>Pour contourner ce blocage, nous avons mis en place un tunnel SSH 
                redirigeant le port 11311 du PC vers celui du robot, 
                permettant d'accéder au ROS Master sans exposer le port publiquement.</p>
              <p>Le principe du tunnel SSH est le suivant. Il permet de dire via le PC :</p>
              <ul>
                <li>Ecoute localement sur le port 11311</li>
                <li>Transfère tout vers le port 11311 du robot</li>
              </ul>
              <p>Ce qui nous donne le schéma suivant :</p>
              {/* FIGURE 125 */}
              <div id="figure125" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 300, marginBottom: '1rem'}}>
                <img src="images/Figure125v2.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} alt="Schéma montrant la communication entre le robot via le tunnel SSH" />
              </div>
              <p className="text-center small mt-1">Figure 125 : Schéma montrant la communication entre le robot via le tunnel SSH</p>
              <p>Ainsi, même si le robot n'écoute 11311 que sur localhost, le PC peut y accéder comme si ROS Master était local.</p>
              <p>Avant de poursuivre il faut connaître les données réseau de nos outils :</p>
              {/* TABLEAU 33 */}
              <div id="tableau33" className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr><th>Machine</th><th>IP</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold">Niryo Ned2</td><td>169.254.200.200</td></tr>
                    <tr><td className="fw-bold">PC (sous Ubuntu 20.04)</td><td>169.254.200.100</td></tr>
                    <tr><td className="fw-bold">Utilisateur SSH du robot</td><td>niryo</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center small mt-1">Tableau 33 : Tableau des données réseau du PC et du robot</p>
              <p>La méthodologie pour créer un tunnel SSH est décrite dans l'<strong><a href="#exemple13">Exemple 13</a></strong>.</p>
              <p>Après avoir créé le tunnel nous l'avons testé d'abord avec la commande rostopic list et nous avons obtenu la liste des topics dans le terminal. Pourtant, l'exécution de notre script MoveIt échouait et renvoyait le message d'erreur suivant :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>Error in XmlRpcClient: write error (Connection refused)</code></pre>
              <p>Le tunnel ne redirigeait que le port 11311 (l'annuaire). 
                MoveIt tente d'ouvrir des connexions sur d'autres ports pour les données, mais ceux-ci n'étaient pas redirigés. 
                Le PC essayait donc de se connecter sur lui-même et échouait.</p>
              <p>Exemple : le programme demande au Master de parler au groupe <code className="text-dark">arm</code>. 
                Le Master répond qu'il doit se connecter au nœud <code className="text-dark">/move_group</code> 
                sur l'IP <code className="text-dark">127.0.0.1</code> au port XXXX. Le PC essaie de se connecter à ce port sur lui-même, 
                mais comme le tunnel ne concerne que le port 11311, la connexion échoue.</p>
              <p>Le lien envoyé par le support nous a fait comprendre que pour faire du multi-machine (PC + Robot), 
                on ne peut pas utiliser un tunnel ou rester en localhost. 
                ROS a été conçu pour que chaque machine ait sa propre IP réelle.</p>
              <p>Nous n'avons donc pas poursuivi la piste du tunnel SSH. Pour contourner l'isolation réseau sans modifier la configuration du robot, 
                nous avons opté pour la méthode embarquée.</p>
            </div>
            <div id="methode-embarquee">
              <h4 className="fw-bold mt-3">La méthode embarquée : principe et protocole</h4>
              <p>Cette méthode est relativement simple à mettre en pratique. Dans celle-ci, on arrête de vouloir faire tourner le code sur l'ordinateur. On développe sur le PC, mais on exécute sur le robot. Dans ce cas, plus de problèmes de ports, le script est « à côté » du Master en localhost.</p>
              <p>Le principe est le suivant :</p>
              <ul>
                <li>On écrit le code de la même manière (sur le PC avec l'instruction gedit on rentre dans le script et on écrit)</li>
                <li>On envoie le fichier sur le robot avec la commande scp</li>
                <li>On l'exécute en SSH sur le robot</li>
                <li>Résultat : Le script est sur la même machine que le Master, plus besoin de tunnel, plus de port fermé, MoveIt fonctionne instantanément</li>
              </ul>
              <p>Pour la mettre en place, voici son protocole :</p>
              <ul>
                <li>Ouvrir un terminal du PC (crestic@...)</li>
                <li>Aller dans le répertoire où se situe votre script</li>
                <li>Taper la commande : <code className="text-dark">scp nom_du_script_a_exécuter.py niryo@169.254.200.200:~/</code></li>
                <li>Attendre que l'envoi soit à 100%</li>
                <li>Ouvrir un nouveau terminal</li>
                <li>Se connecter au ssh du robot : <code className="text-dark">ssh niryo@169.254.200.200</code> (mdp : robotics)</li>
                <li>Sourcer le terminal avec les commandes suivantes : <code className="text-dark">source /opt/ros/noetic/setup.bash</code> et <code className="text-dark">source setup.bash</code></li>
                <li>Lancer votre script : <code className="text-dark">python3 ~/test_moveit_commander.py</code></li>
              </ul>
              <p>Pour faire des modifications dans le script, il faut :</p>
              <ul>
                <li>se rendre sur le terminal du PC (crestic@...)</li>
                <li>Faire « gedit nom_du_script.py »</li>
                <li>Faire les modifications du script</li>
                <li>Enregistrer et envoyer à nouveau sur le robot</li>
                <li>Se rendre dans le terminal du robot et relancer le script</li>
              </ul>
              <strong>Remarques :</strong>
              <ul>
                <li>Ne pas fermer le terminal du robot ou couper la connexion SSH avec celui-ci est important car ça évite de sourcer de nouveau. 
                  La commande d'envoi de document (scp) est une commande indépendante. Elle "toque à la porte" du robot et dépose le fichier. Elle n'oblige de fermer la session SSH.</li>
                <li>Quand tu renvoies le script avec le même nom, <strong>Linux remplace automatiquement l'ancien fichier par le nouveau</strong>.
                  Il n'y a pas besoin de supprimer l'ancien ou de changer de version</li>
              </ul>
            </div>
            <div id="mise-place-embarquee">
              <h4 className="fw-bold mt-3">Mise en place de la méthode embarquée</h4>
              <p>Lors de la mise en place de la méthode embarquée, 
                notre premier programme (mouvement vers pos_cam puis home_position) a rencontré deux problèmes. 
                Nous avons d'abord vérifié que ces positions étaient bien enregistrées dans le robot. 
                Mais à la première compilation, ce message d'erreur est apparu :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>ERROR]: The requested named target 'pos_cam' does not exist{"\n"}
moveit_commander.exception.MoveItCommanderException: Unable to set target pos_cam</code></pre>
              <p>Les positions comme pos_cam et home_position n'étant pas définies dans le fichier de configuration SRDF du robot, MoveIt renvoyait cette erreur.</p>
              <p>Nous avons donc implémenté la ligne suivante pour savoir quelles positions MoveIt reconnaissait et nous avons observé qu'il n'y en avait seulement trois par défaut et qui ne provenaient pas de nos réalisations.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>rospy.loginfo("Positions nommées disponibles : %s", group.get_named_targets())</code></pre>
              <p>Ces trois positions sont :</p>
              <ul>
                <li>resting</li>
                <li>straight_up</li>
                <li>straight_forward</li>
              </ul>
              <p>Le robot possède plusieurs couches logicielles :</p>
              <ul>
                <li>Couche Niryo : gère ta base de données de positions (ce que tu vois dans Niryo Studio)</li>
                <li>Couche MoveIt : gère la trajectoire mathématique (évitement de collisions)</li>
              </ul>
              <p>Nous avons donc conclu que nos positions enregistrées (pos_cam, home_position) se trouvent dans la couche Niryo et qu'il faut les fournir à MoveIt car cette dernière ne lit pas cette base de données au démarrage. Nous avons donc dû implémenter un service-client pour extraire les coordonnées réelles de la base de données Niryo et les fournir dans un format compatible avec MoveIt.</p>
              <p>Mais avant de récupérer les positions créées, il faut d'abord vérifier que notre programme est correct et que le robot bouge vraiment. On a donc remplacé « pos_cam » par « straight_up » dans notre script (via le terminal du PC).</p>
              <p>Après cette modification, un nouvel envoi sur le robot puis un lancement du script, on voit le robot bouger à la position demandée. À présent, nous pouvons récupérer les positions via le service Niryo en passant par « Pose Handler (GetPose) » de Niryo puis les fournir à MoveIt.</p>
              <p><strong>Remarque</strong> : les positions auxquelles MoveIt a directement accès ne sont pas recommandées car elles font aller le robot dans une position hors de portée sur le joint 3 (le coude) ce qui le fait forcer lorsqu'il arrive à sa position maximale.</p>
              {/* TABLEAU 34 */}
              <div id="tableau34" className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr><th>Erreur</th><th>Explication</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code className="text-dark">Boost.Python.ArgumentError: Python argument types in MoveGroupInterface.set_pose_target(MoveGroupInterface, NiryoPose, str) did not match C++ signature</code></td><td>La bibliothèque C++ sous-jacente de MoveIt attend une liste Python, pas un objet complexe NiryoPose</td></tr>
                    <tr><td><code className="text-dark">'NiryoPose' object has no attribute 'x'</code></td><td>L'objet NiryoPose est structuré par composition. Les attributs ne sont pas au premier niveau. La structure correcte est pose.position.x et pose.rpy.roll</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center small mt-1">Tableau 34 : Tableau récapitulatif des erreurs obtenues lors de la récupération de position enregistrées sur le robot</p>
              <p>Le code (situé à <strong><a href="#exemple14">Exemple 14</a></strong>) qui sert à la récupération des positions ainsi que leurs données (positions, orientation, angles des joints) s'appelle « niryo_positions.py ».</p>
              <p>Une fois créé il faut l'envoyer sur le robot : <code className="text-dark">scp niryo_positions.py niryo@169.254.200.200:~/</code></p>
              <p>Pour pouvoir l'utiliser dans nos codes, on l'implémente de cette façon :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>from niryo_tools import get_niryo_joints # On importe la nouvelle fonction{"\n"}
{"\n"}
# ... dans le main() ...{"\n"}
{"\n"}
# --- Mouvement vers pos_cam via les JOINTS ---{"\n"}
joints_cam = get_niryo_joints("pos_cam"){"\n"}
{"\n"}
if joints_cam:{"\n"}
{"    "}rospy.loginfo(f"Déplacement articulaire vers pos_cam : {"{"}joints_cam{"}"}"){"\n"}
{"    "}# Commande MoveIt pour les joints{"\n"}
{"    "}group.go(joints_cam, wait=True){"\n"}
{"    "}group.stop(){"\n"}
else:{"\n"}
{"    "}rospy.logerr("Impossible de récupérer les joints de pos_cam"){"\n"}
```</code></pre>
              <p>Nous avons d'abord relevé les coordonnées x, y, z, roll, pitch, yaw pour les transmettre à MoveIt. 
                Avec <code className="text-dark">rospy.loginfo(...)</code>, nous avons vérifié que les valeurs correspondaient à celles de Niryo Studio. 
                Pourtant, le robot prenait une position totalement différente, 
                ce qui indiquait un conflit de référentiel ou de convention d'Euler.</p>
              <ul>
                <li><strong>Raison A : Référentiel de planification (Planning Frame).</strong><br />
                  Niryo Studio utilise le centre de la base comme référence, 
                  tandis que MoveIt peut utiliser <code className="text-dark">base_link</code> ou <code className="text-dark">world</code>. 
                  Un décalage vertical apparaît si les origines diffèrent.</li>
                <li><strong>Raison B : L'effecteur.</strong><br />
                  Niryo Studio affiche la position du TCP (bout de la pince), alors que MoveIt planifie ce TCP au Joint 6, ce qui décale la position réelle.</li>
                <li><strong>Raison C : Cinématique Inverse.</strong><br />
                  Une position cartésienne peut être atteinte de plusieurs manières (ex: coude haut ou bas). 
                  MoveIt choisit la solution mathématique la plus optimale, pas forcément celle de Niryo Studio.</li>
              </ul>
              <p>Pour obtenir une position identique à celle de Niryo Studio, nous avons utilisé les joints plutôt que les coordonnées. 
                Le passage par l'espace articulaire évite les calculs de cinématique inverse et les erreurs de référentiel (mètres vs millimètres).</p>
              <p>Après ces modifications, le premier code opérationnel (<strong><a href="#exemple15">Exemple 15</a></strong>) a été envoyé au robot. 
                Nommé <code className="text-dark">test_connexion_robot_rospy.py</code>, 
                il déplace le bras vers <code className="text-dark">pos_cam</code> puis <code className="text-dark">home_position</code> après 2 secondes.</p>
              <p>Suite à ce succès, nous avons contrôlé le convoyeur et le capteur IR 
                (<strong><a href="#exemple16">Exemple 16</a></strong>), puis réalisé un Pick &amp; Place complet 
                (<strong><a href="#exemple17">Exemple 17</a></strong>).</p>
              <p><strong>Déplacements des scripts dans un dossier sur le robot (et exécution)</strong></p>
              <p>Pour que tous soient facilement accessibles nous avons créé un dossier dans le robot pour y mettre tous nos scripts.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>mkdir ~/scripts{"           "}# On crée le dossier{"\n"}
mv ~/test_connexion_robot_rospy.py ~/niryo_tools.py ~/scripts/{"   "}# On déplace nos scripts</code></pre>
              <p><strong>Remarque</strong> : avant de lancer votre script il faut s'assurer que votre script a bien été envoyé au robot. (scp mon_script.py niryo@169.254.200.200:~/scripts/)</p>
              <p>Et pour pouvoir lancer les scripts (via le terminal du robot), deux possibilités sont possibles. Soit en étant dans le répertoire home (~) :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>python3 ~/scripts/mon_script.py</code></pre>
              <p>Soit en se rendant dans le dossier scripts puis le lancer :</p>
              <pre className="bg-dark text-white p-3 rounded"><code>cd ~/scripts{"\n"}
python3 mon_script.py</code></pre>
              <p><strong>ATTENTION</strong> : Si on lance le script depuis ~ (home) avec python3 ~/mes_scripts/mon_script.py, Python va chercher niryo_tools.py dans ~. Il ne le trouvera pas (car il est dans le sous-dossier) et renverra une ImportError. Pour éviter tout problème, on enchaîne les deux commandes sur une seule ligne avec un « &amp;&amp; » pour dire que si la première condition est correcte, on peut faire la deuxième.</p>
              <pre className="bg-dark text-white p-3 rounded"><code>cd ~/mes_scripts &amp;&amp; python3 mon_script.py</code></pre>
              <p>On peut voir dans le script de l'Exemple 16 une boucle de polling. La fonction « wait_for_ir_sensor » interroge le service « get_digital_io » en continu jusqu'à ce que la valeur passe à « 0 ».</p>
            </div>
            <div id="definitions">
              <h4 className="fw-bold mt-3"> Quelques définitions</h4>
              <p><strong>Localhost</strong></p>
              <p>Localhost = la machine elle-même.</p>
              <ul>
                <li>IP associée : 127.0.0.1</li>
                <li>Boucle locale</li>
                <li>Jamais accessible depuis une autre machine</li>
              </ul>
              <p>Donc :</p>
              <div id="tableau35" className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr><th>Depuis</th><th>Localhost désigne</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold">PC</td><td>Le PC</td></tr>
                    <tr><td className="fw-bold">Robot</td><td>Le robot</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Lorsqu'on dit que le robot écoute uniquement en local, cela veut dire :</p>
              <ul>
                <li>Le ROS Master (port 11311) est lié à l'adresse IP : 127.0.0.1:11311</li>
                <li>Il n'écoute pas sur : 169.254.200.200</li>
              </ul>
              <p>Ce qui donne comme résultat que « rostopic list » fonctionne sur le robot mais pas depuis le PC. Le port 11311 est fermé pour une question de sécurité.</p>
              <p>Le rôle du tunnel SSH est donc de faire croire que localhost:11311 (PC) = localhost:11311 (Robot).</p>
              <p><strong>ROS_MASTER_URI</strong></p>
              <p>Cette fonction est utilisée de la manière suivante : « ROS_MASTER_URI=http://localhost:11311 ». Tous les nœuds ROS doivent donc dire au Master où sont les autres nœuds à cette adresse.</p>
              <p>Mais attention, le Master ne transporte pas les données (topics), il ne fait que :</p>
              <ul>
                <li>Enregistrer les nœuds</li>
                <li>Donner leurs adresses IP</li>
              </ul>
              <p><strong>ROS_IP / ROS_HOSTNAME</strong></p>
              <p>Savoir faire la différence entre les deux est primordiale. En effet, mélanger les deux est la cause majoritaire des bugs en multi-machine ROS.</p>
              <strong>ROS_IP :</strong>
              <p>Lorsque nous faisons la commande « export ROS_IP=169.254.200.200 » cela signifie qu'on donne l'adresse sur laquelle les autres machines doivent me joindre pour communiquer.<br />Donc :</p>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr><th>Machine</th><th>ROS_IP</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold">PC</td><td>169.254.200.100</td></tr>
                    <tr><td className="fw-bold">Robot</td><td>169.254.200.200</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center small mt-1">Tableau 35 : Adresse IP du PC et Robot</p>
              <p>Quand un nœud ROS s'enregistre auprès du Master, il dit : « je suis joignable à cette IP + un port dynamique ».<br />
                La ROS_IP doit être une IP atteignable depuis l'autre machine.</p>
              <p><strong>ROS_HOSTNAME :</strong></p>
              <p>Lorsque nous faisons la commande « export ROS_HOSTNAME=169.254.200.200 » cela signifie qu'on donne le nom réseau que les autres machines doivent utiliser pour communiquer. ROS fera : hostname → résolution DNS → IP.</p>
              <p><strong>Remarque :</strong> Il est impératif de ne jamais définir ROS_IP et ROS_HOSTNAME en même temps. ROS privilégie par défaut ROS_HOSTNAME ce qui donnera un comportement imprévisible. Dans notre cas nous n'avons pas de DNS ni de nom de machine résolu, seulement des IP fixes. C'est pourquoi nous utilisons ROS_IP et (ROS_MASTER_URI).</p>
              <p>Le tableau qui suit est un tableau récapitulatif de cette sous-partie.</p>
              <div id="tableau36" className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr><th>Concept</th><th>Signification</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold">localhost</td><td>La machine elle-même</td></tr>
                    <tr><td className="fw-bold">« Le robot n'écoute qu'en local »</td><td>ROS Master visible uniquement depuis le robot</td></tr>
                    <tr><td className="fw-bold">ROS_MASTER_URI</td><td>Où se trouve l'annuaire ROS</td></tr>
                    <tr><td className="fw-bold">ROS_IP</td><td>Adresse à laquelle je suis joignable</td></tr>
                    <tr><td className="fw-bold">ROS_HOSTNAME</td><td>Nom du réseau à résoudre</td></tr>
                    <tr><td className="fw-bold">Tunnel SSH</td><td>Pont sécurisé entre deux localhost</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center small mt-1">Tableau 36 : Tableau récapitulatif des définitions</p>
            </div>
          </div>
        </div>
        <div id="Exemples" className="bg-white rounded-3 shadow-sm p-4 mb-4">
          <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-info" /> Exemples</h2>
          <div id="exemple1" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 01</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
classdef Ned2Sim &lt; handle{"\n"}
{"    "}properties (SetAccess = private){"\n"}
{"        "}RigidBodyTree{"\n"}
{"        "}IK{"\n"}
{"        "}Weight{"\n"}
{"        "}sampleRate = 20{"\n"}
{"        "}robotAxes = []{"\n"}
{"        "}HomeConfiguration{"\n"}
{"        "}NumJoints{"\n"}
{"        "}NumArmJoints{"\n"}
{"        "}NumGripperJoints{"\n"}
{"        "}end{"\n"}
{"        "}properties (SetAccess = public){"\n"}
{"        "}plotTraj = false{"\n"}
{"        "}recordTraj = false{"\n"}
{"        "}RecordedPoses = []{"\n"}
{"    "}end{"\n"}
{"\n"}
{"    "}properties (SetObservable = true){"\n"}
{"        "}CurrentConfiguration % 1 x NumArmJoints{"\n"}
{"        "}GripperConfiguration % 1 x NumGripperJoints{"\n"}
{"    "}end{"\n"}
{"\n"}
{"    "}methods{"\n"}
{"        "}function ned = Ned2Sim(args){"\n"}
{"            "}arguments{"\n"}
{"                "}args.Tool = 'Gripper'{"\n"}
{"            "}end{"\n"}
{"\n"}
{"            "}% === Charger le robot ==={"\n"}
{"            "}if ~exist('niryo_ned2_gripper1_n_camera.mat','file'){"\n"}
{"                "}rbt = importrobot("niryo_ned2_gripper1_n_camera.urdf.xacro");{"\n"}
{"                "}save('niryo_ned2_gripper1_n_camera.mat','rbt');{"\n"}
{"            "}else{"\n"}
{"                "}S = load('niryo_ned2_gripper1_n_camera.mat');{"\n"}
{"                "}rbt = S.rbt;{"\n"}
{"            "}end{"\n"}
{"            "}ned.RigidBodyTree = rbt;{"\n"}
{"            "}ned.RigidBodyTree.DataFormat = 'row';{"\n"}
{"\n"}
{"            "}% === Détection auto des joints ==={"\n"}
{"            "}ned.NumJoints = numel(ned.RigidBodyTree.homeConfiguration);{"\n"}
{"\n"}
{"            "}ned.NumArmJoints = 6; % Ned2 = 6 axes bras{"\n"}
{"            "}ned.NumGripperJoints = ned.NumJoints - ned.NumArmJoints;{"\n"}
{"\n"}
{"            "}% === Configurations ==={"\n"}
{"            "}ned.HomeConfiguration = zeros(1, ned.NumJoints);{"\n"}
{"            "}ned.CurrentConfiguration = zeros(1, ned.NumArmJoints);{"\n"}
{"            "}ned.GripperConfiguration = zeros(1, ned.NumGripperJoints);{"\n"}
{"\n"}
{"            "}% === IK ==={"\n"}
{"            "}ned.IK = inverseKinematics("RigidBodyTree", ned.RigidBodyTree);{"\n"}
{"            "}ned.IK.SolverParameters.AllowRandomRestart = false;{"\n"}
{"            "}ned.Weight = [1 1 1 1 1 1];{"\n"}
{"\n"}
{"            "}% === Listeners ==={"\n"}
{"            "}addlistener(ned,'CurrentConfiguration','PostSet',@ned.configurationChanged);{"\n"}
{"            "}addlistener(ned,'GripperConfiguration','PostSet',@ned.configurationChanged);{"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}% ========================{"\n"}
{"        "}function configurationChanged(ned,~,~){"\n"}
{"            "}if ned.recordTraj{"\n"}
{"                "}ned.RecordedPoses = [ned.RecordedPoses; ...{"\n"}
{"                    "}[ned.CurrentConfiguration ned.GripperConfiguration]];{"\n"}
{"            "}end{"\n"}
{"            "}if ned.isRobotShown(){"\n"}
{"                "}ned.show();{"\n"}
{"            "}end{"\n"}
{"        "}end{"\n"}
{"        "}% ========================{"\n"}
{"        "}function goHome(ned, duration){"\n"}
{"            "}arguments{"\n"}
{"                "}ned{"\n"}
{"                "}duration = 3{"\n"}
{"            "}end{"\n"}
{"            "}ned.PlanTrajectory([[ned.CurrentConfiguration ned.GripperConfiguration]; ...{"\n"}
{"                    "}ned.HomeConfiguration], duration);{"\n"}
{"        "}end{"\n"}
{"        "}% ========================{"\n"}
{"        "}function PlanTrajectory(ned, waypoints, duration, method){"\n"}
{"            "}arguments{"\n"}
{"                "}ned{"\n"}
{"                "}waypoints{"\n"}
{"                "}duration = 3{"\n"}
{"                "}method = 'trapveltraj'{"\n"}
{"            "}end{"\n"}
{"\n"}
{"            "}tvec = 0:1/ned.sampleRate:duration;{"\n"}
{"            "}numSamples = length(tvec);{"\n"}
{"            "}waypoints = waypoints';{"\n"}
{"\n"}
{"            "}switch method{"\n"}
{"                "}case 'trapveltraj'{"\n"}
{"                    "}[q, ~] = trapveltraj(waypoints,numSamples);{"\n"}
{"                "}case 'minjerkpolytraj'{"\n"}
{"                    "}[q, ~] = minjerkpolytraj(waypoints, ...{"\n"}
{"                        "}linspace(0,duration,size(waypoints,2)), numSamples);{"\n"}
{"                "}otherwise{"\n"}
{"                    "}[q, ~] = trapveltraj(waypoints,numSamples);{"\n"}
{"            "}end{"\n"}
{"\n"}
{"            "}rc = rateControl(ned.sampleRate);{"\n"}
{"            "}for idx = 1:numSamples{"\n"}
{"                "}qi = q(:,idx)';{"\n"}
{"                "}ned.CurrentConfiguration = qi(1:ned.NumArmJoints);{"\n"}
{"                "}ned.GripperConfiguration = qi(ned.NumArmJoints+1:end);{"\n"}
{"                "}waitfor(rc);{"\n"}
{"            "}end{"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}% ========================{"\n"}
{"        "}function Move(ned, Position, RPY, duration){"\n"}
{"            "}arguments{"\n"}
{"                "}ned{"\n"}
{"                "}Position (1,3) double{"\n"}
{"                "}RPY (1,3) double{"\n"}
{"                "}duration = 3{"\n"}
{"            "}end{"\n"}
{"\n"}
{"            "}se = se3(flip(RPY),"eul","ZYX", Position);{"\n"}
{"            "}curConf = [ned.CurrentConfiguration ned.GripperConfiguration];{"\n"}
{"            "}sol = ned.IK("tool_link", se.tform, ned.Weight, curConf);{"\n"}
{"            "}ned.PlanTrajectory([curConf; sol], duration);{"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}% ========================{"\n"}
{"        "}function SetPose(ned, Pose){"\n"}
{"            "}Pose = Pose(:)';{"\n"}
{"            "}ned.CurrentConfiguration = Pose(1:ned.NumArmJoints);{"\n"}
{"            "}ned.GripperConfiguration = Pose(ned.NumArmJoints+1:ned.NumJoints);{"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}% ========================{"\n"}
{"\n"}
{"        "}function show(ned){"\n"}
{"            "}config = ned.HomeConfiguration;{"\n"}
{"            "}config(1:ned.NumArmJoints) = ned.CurrentConfiguration;{"\n"}
{"            "}config(ned.NumArmJoints+1:end) = ned.GripperConfiguration;{"\n"}
{"\n"}
{"            "}if ~ned.isRobotShown(){"\n"}
{"                "}ned.clearFigure();{"\n"}
{"            "}else{"\n"}
{"                "}show(ned.RigidBodyTree, config, ...{"\n"}
{"                    "}'PreservePlot', false, ...{"\n"}
{"                    "}'FastUpdate', true, ...{"\n"}
{"                    "}'Frames','off', ...{"\n"}
{"                    "}'Parent',ned.robotAxes);{"\n"}
{"            "}end{"\n"}
{"            "}drawnow;{"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}% ========================{"\n"}
{"        "}function clearFigure(ned){"\n"}
{"            "}config = ned.HomeConfiguration;{"\n"}
{"            "}config(1:ned.NumArmJoints) = ned.CurrentConfiguration;{"\n"}
{"            "}config(ned.NumArmJoints+1:end) = ned.GripperConfiguration;{"\n"}
{"\n"}
{"            "}if ned.isRobotShown{"\n"}
{"                "}cla(ned.robotAxes);{"\n"}
{"                "}show(ned.RigidBodyTree, config, ...{"\n"}
{"                    "}'PreservePlot', false, ...{"\n"}
{"                    "}'FastUpdate', true, ...{"\n"}
{"                    "}'Frames','off', ...{"\n"}
{"                    "}'Parent',ned.robotAxes);{"\n"}
{"            "}else{"\n"}
{"                "}ned.robotAxes = show(ned.RigidBodyTree, config, ...{"\n"}
{"                    "}'PreservePlot', false, ...{"\n"}
{"                    "}'FastUpdate', true, ...{"\n"}
{"                    "}'Frames','off');{"\n"}
{"            "}end{"\n"}
{"            "}set(ned.robotAxes.Parent,'WindowStyle','docked');{"\n"}
{"            "}xlim(ned.robotAxes,[-0.5 0.5]){"\n"}
{"            "}ylim(ned.robotAxes,[-0.5 0.5]){"\n"}
{"            "}zlim(ned.robotAxes,[-0.1 0.8]){"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}% ========================{"\n"}
{"        "}function val = isRobotShown(ned){"\n"}
{"            "}val = ~isempty(ned.robotAxes) &amp;&amp; isvalid(ned.robotAxes);{"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}% ========================{"\n"}
{"        "}function openGripper(ned){"\n"}
{"            "}ned.GripperConfiguration = zeros(1,ned.NumGripperJoints);{"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}function closeGripper(ned){"\n"}
{"            "}ned.GripperConfiguration = -0.01*ones(1,ned.NumGripperJoints);{"\n"}
{"        "}end{"\n"}
{"\n"}
{"        "}% ========================{"\n"}
{"        "}function img = snapshot(ned){"\n"}
{"            "}img = [];{"\n"}
{"            "}if ned.isRobotShown(){"\n"}
{"                "}frame = getframe(ned.robotAxes.Parent);{"\n"}
{"                "}img = frame.cdata;{"\n"}
{"            "}else{"\n"}
{"                "}warning('Robot non affiché – snapshot impossible.');{"\n"}
{"            "}end{"\n"}
{"        "}end{"\n"}
{"    "}end{"\n"}
end{"\n"}
{"\n"}
{"                            "}</code></pre>
          </div>
          <div id="exemple2" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 02</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
function MoveLinear(ned, Pstart, Pend, RPY, duration, nPoints){"\n"}
{"    "}arguments{"\n"}
{"        "}ned{"\n"}
{"        "}Pstart (1,3) double{"\n"}
{"        "}Pend (1,3) double{"\n"}
{"        "}RPY (1,3) double{"\n"}
{"        "}duration = 3{"\n"}
{"        "}nPoints = 50{"\n"}
{"    "}end{"\n"}
{"\n"}
{"    "}% Interpolation linéaire en XYZ{"\n"}
{"    "}x = linspace(Pstart(1), Pend(1), nPoints);{"\n"}
{"    "}y = linspace(Pstart(2), Pend(2), nPoints);{"\n"}
{"    "}z = linspace(Pstart(3), Pend(3), nPoints);{"\n"}
{"\n"}
{"    "}curConf = [ned.CurrentConfiguration ned.GripperConfiguration];{"\n"}
{"    "}traj = zeros(nPoints, ned.NumJoints);{"\n"}
{"\n"}
{"    "}for i = 1:nPoints{"\n"}
{"        "}pos = [x(i) y(i) z(i)];{"\n"}
{"        "}se = se3(flip(RPY),"eul","ZYX", pos);{"\n"}
{"        "}sol = ned.IK("tool_link", se.tform, ned.Weight, curConf);{"\n"}
{"\n"}
{"        "}traj(i,:) = sol;{"\n"}
{"        "}curConf = sol; % warm start IK{"\n"}
{"    "}end{"\n"}
{"\n"}
{"    "}% Exécuter la trajectoire{"\n"}
{"    "}ned.PlanTrajectory(traj, duration);{"\n"}
end{"\n"}
{"\n"}
{"                            "}</code></pre>
          </div>
          <div id="exemple3" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 03</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
function MoveCircular(ned, Pstart, Pvia, Pend, RPY, duration, nPoints){"\n"}
{"    "}arguments{"\n"}
{"        "}ned{"\n"}
{"        "}Pstart (1,3) double{"\n"}
{"        "}Pvia (1,3) double{"\n"}
{"        "}Pend (1,3) double{"\n"}
{"        "}RPY (1,3) double{"\n"}
{"        "}duration = 3{"\n"}
{"        "}nPoints = 60{"\n"}
{"    "}end{"\n"}
{"\n"}
{"    "}% --- Calcul du cercle passant par 3 points ---{"\n"}
{"    "}A = Pstart(:); B = Pvia(:); C = Pend(:);{"\n"}
{"\n"}
{"    "}% Vecteurs du plan{"\n"}
{"    "}AB = B - A;{"\n"}
{"    "}AC = C - A;{"\n"}
{"    "}n = cross(AB, AC);{"\n"}
{"    "}n = n / norm(n);{"\n"}
{"\n"}
{"    "}% Base locale du cercle{"\n"}
{"    "}ex = AB / norm(AB);{"\n"}
{"    "}ey = cross(n, ex);{"\n"}
{"\n"}
{"    "}% Coordonnées locales{"\n"}
{"    "}xB = dot(AB, ex);{"\n"}
{"    "}yB = dot(AB, ey);{"\n"}
{"    "}xC = dot(AC, ex);{"\n"}
{"    "}yC = dot(AC, ey);{"\n"}
{"\n"}
{"    "}% Centre du cercle en 2D{"\n"}
{"    "}d = 2*(xB*yC - yB*xC);{"\n"}
{"    "}if abs(d) &lt; 1e-6{"\n"}
{"        "}error("Points presque alignés → cercle impossible");{"\n"}
{"    "}end{"\n"}
{"    "}ux = ( (xB^2 + yB^2)*yC - (xC^2 + yC^2)*yB ) / d;{"\n"}
{"    "}uy = ( (xC^2 + yC^2)*xB - (xB^2 + yB^2)*xC ) / d;{"\n"}
{"\n"}
{"    "}% Centre 3D{"\n"}
{"    "}O = A + ux*ex + uy*ey;{"\n"}
{"\n"}
{"    "}% Angles{"\n"}
{"    "}vA = A - O;{"\n"}
{"    "}vB = B - O;{"\n"}
{"    "}vC = C - O;{"\n"}
{"\n"}
{"    "}thetaA = 0;{"\n"}
{"    "}thetaB = atan2(dot(vB,ey), dot(vB,ex));{"\n"}
{"    "}thetaC = atan2(dot(vC,ey), dot(vC,ex));{"\n"}
{"\n"}
{"    "}% Choix du bon sens (A→B→C){"\n"}
{"    "}if ~(thetaA &lt; thetaB &amp;&amp; thetaB &lt; thetaC) &amp;&amp; ...{"\n"}
{"        "}~(thetaA &gt; thetaB &amp;&amp; thetaB &gt; thetaC){"\n"}
{"        "}if thetaC &gt; thetaA{"\n"}
{"            "}thetaC = thetaC - 2*pi;{"\n"}
{"        "}else{"\n"}
{"            "}thetaC = thetaC + 2*pi;{"\n"}
{"        "}end{"\n"}
{"    "}end{"\n"}
{"\n"}
{"    "}theta = linspace(thetaA, thetaC, nPoints);{"\n"}
{"\n"}
{"    "}% Générer trajectoire cartésienne{"\n"}
{"    "}traj = zeros(nPoints,3);{"\n"}
{"    "}for i = 1:nPoints{"\n"}
{"        "}traj(i,:) = (O + cos(theta(i))*ex*norm(vA) + sin(theta(i))*ey*norm(vA))';{"\n"}
{"    "}end{"\n"}
{"\n"}
{"    "}% IK point par point{"\n"}
{"    "}curConf = [ned.CurrentConfiguration ned.GripperConfiguration];{"\n"}
{"    "}jointTraj = zeros(nPoints, ned.NumJoints);{"\n"}
{"\n"}
{"    "}for i = 1:nPoints{"\n"}
{"        "}se = se3(flip(RPY),"eul","ZYX", traj(i,:));{"\n"}
{"        "}sol = ned.IK("tool_link", se.tform, ned.Weight, curConf);{"\n"}
{"        "}jointTraj(i,:) = sol;{"\n"}
{"        "}curConf = sol;{"\n"}
{"    "}end{"\n"}
{"\n"}
{"    "}% Exécuter{"\n"}
{"    "}ned.PlanTrajectory(jointTraj, duration);{"\n"}
end{"\n"}
{"\n"}
{"                            "}</code></pre>
          </div>
          <div id="exemple4" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 04</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
function T = getFK(ned){"\n"}
{"    "}% Renvoie la matrice homogène base_link -&gt; tool_link{"\n"}
{"    "}config = ned.HomeConfiguration;{"\n"}
{"    "}config(1:ned.NumArmJoints) = ned.CurrentConfiguration;{"\n"}
{"    "}config(ned.NumArmJoints+1:end) = ned.GripperConfiguration;{"\n"}
{"\n"}
{"    "}T = getTransform(ned.RigidBodyTree, config, "tool_link",{"\n"}
"base_link");{"\n"}
end{"\n"}
{"\n"}
{"                            "}</code></pre>
          </div>
          <div id="exemple5" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 05</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
function [pos, rpy] = getTCP(ned){"\n"}
{"    "}% Renvoie position + orientation (RPY) du TCP{"\n"}
{"    "}T = ned.getFK();{"\n"}
{"    "}pos = T(1:3,4)';{"\n"}
{"    "}rpy = rotm2eul(T(1:3,1:3),'ZYX');{"\n"}
end{"\n"}
{"\n"}
{"                            "}</code></pre>
          </div>
          <div id="exemple6" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 06</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
function drawTCP(ned){"\n"}
{"    "}% Dessine un repère TCP dans la figure{"\n"}
{"    "}if ~ned.isRobotShown(){"\n"}
{"        "}return{"\n"}
{"    "}end{"\n"}
{"    "}T = ned.getFK();{"\n"}
{"    "}p = T(1:3,4);{"\n"}
{"    "}R = T(1:3,1:3);{"\n"}
{"\n"}
{"    "}hold(ned.robotAxes,'on'){"\n"}
{"\n"}
quiver3(ned.robotAxes,p(1),p(2),p(3),R(1,1),R(2,1),R(3,1),0.05,'r','LineWidth',2{"\n"}
){"\n"}
{"\n"}
quiver3(ned.robotAxes,p(1),p(2),p(3),R(1,2),R(2,2),R(3,2),0.05,'g','LineWidth',2{"\n"}
){"\n"}
{"\n"}
quiver3(ned.robotAxes,p(1),p(2),p(3),R(1,3),R(2,3),R(3,3),0.05,'b','LineWidth',2{"\n"}
){"\n"}
{"    "}hold(ned.robotAxes,'off'){"\n"}
end{"\n"}
{"\n"}
{"                            "}</code></pre>
          </div>
          <div id="exemple7" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 07</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
classdef Ned2 &lt; handle{"\n"}
{"    "}properties (SetAccess = private){"\n"}
{"        "}RigidBodyTree;{"\n"}
{"        "}CmdAction;{"\n"}
{"        "}ArmCmdAction;{"\n"}
{"        "}GripAction;{"\n"}
{"        "}CamTopic;{"\n"}
{"        "}JointNames;{"\n"}
{"        "}IK;{"\n"}
{"        "}Weight;{"\n"}
{"        "}UseRos logical = true;{"\n"}
{"        "}JointStates;{"\n"}
{"\n"}
{"                            "}</code></pre>
          </div>
          {/* Exemple 08 */}
          <div id="exemple08" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 08</h4>
            <p><strong>Définition de MoveIt</strong></p>
            <p>MoveIt est un framework ROS dédié à la manipulation robotique, dont le rôle principal est de transformer une intention de mouvement (ex. aller à cette position) en une trajectoire réalisable, sûre et conforme aux contraintes du robot.</p>
            <strong>Autrement dit :</strong>
            <ul>
              <li>tu ne commandes pas directement les moteurs,</li>
              <li>tu décris un objectif,</li>
              <li> MoveIt se charge de tout le raisonnement complexe.</li>
            </ul>
            <h5>Ce que MoveIt N'EST PAS</h5>
            <p>C'est important pour bien le situer.<br />MoveIt n'est pas :</p>
            <ul>
              <li>Un simulateur (ce rôle revient à Gazebo)</li>
              <li>Un driver matériel</li>
              <li>Un remplacement de ROS</li>
            </ul>
            <h5>Le problème que MoveIt résout</h5>
            <p>Sans MoveIt, pour déplacer un robot manipulateur, il faudrait :</p>
            <ul>
              <li>résoudre la cinématique inverse</li>
              <li>Gérer les limites articulaires</li>
              <li>éviter les collisions</li>
              <li>interpoler une trajectoire continue</li>
              <li>respecter les contraintes mécaniques</li>
              <li>gérer les singularités</li>
              <li>vérifier que le mouvement est physiquement réalisable</li>
            </ul>
            <p>Tout cela est long, complexe, très sujet aux erreurs.</p>
            <p>Donc MoveIt existe précisément pour abstraire cette complexité</p>
            <h5>Ce que fait MoveIt concrètement</h5>
            <p>On peut résumer MoveIt comme un pipeline de planification. Quand on écrit par exemple :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>group.set_pose_target(pose){"\n"}
group.go()</code></pre>
            <p>MoveIt effectue en réalité les étapes suivantes :</p>
            <ul>
              <ol>1. Interprétation de l'objectif<br />
                • position cartésienne ou valeurs articulaires</ol>
              <ol>2. Calcul de la cinématique inverse<br />
                • trouver des angles de joints compatibles</ol>
              <ol>3. Vérification des limites<br />
                • positions, vitesses, accélérations</ol>
              <ol>4. Détection de collisions<br />
                • robot / environnement / lui-même</ol>
              <ol>5. Planification de trajectoire<br />
                • via des planificateurs (OMPL, RRT, PRM…)</ol>
              <ol>6. Génération d'une trajectoire temporelle</ol>
              <ol>7. Exécution ou simulation du mouvement</ol>
            </ul>
            <p>Tout cela est transparent pour l'utilisateur.</p>
            <h5>Les briques internes de MoveIt</h5>
            <p>MoveIt repose sur plusieurs composants clés :</p>
            <ul>
              <li><strong>URDF</strong> (modèle géométrique) : forme du robot, dimensions des liens, axes de rotation</li>
              <li><strong>SRDF</strong> (modèle sémantique) : groupes de joints ('arm'), end-effector, liens autorisés en collision</li>
              <li><strong>TF</strong> : gestion des repères ('base_link', 'tool_link', etc.)</li>
              <li><strong>Planning Scene</strong> : état courant du robot, obstacles, environnement</li>
              <li><strong>Planificateurs</strong> : OMPL (le plus courant), algorithmes probabilistes</li>
            </ul>
            <strong>Positionnement de MoveIt dans ROS</strong>
            <p>On peut résumer ainsi :</p>
            {/* IMAGE Exemple 08 */}
            <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 350, marginBottom: '1rem'}}>
              <img src="images/Exemple_img_8.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure : Schéma résumé de MoveIt</p>
            <p>MoveIt ne parle jamais directement aux moteurs. Il passe toujours par ROS</p>
          </div>
          {/* Exemple 09 */}
          <div id="exemple09" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 09</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
{"                                "}{"\n"}
#!/usr/bin/env python3{"\n"}
import sys{"\n"}
import rospy{"\n"}
import moveit_commander{"\n"}
import geometry_msgs.msg{"\n"}
from math import pi{"\n"}
def simple_move():{"\n"}
 # 1. INITIALISATION{"\n"}
 # -----------------{"\n"}
 # On initialise le "Commander" MoveIt{"\n"}
 moveit_commander.roscpp_initialize(sys.argv){"\n"}
 # On initialise le nœud ROS{"\n"}
 rospy.init_node('niryo_python_move', anonymous=True){"\n"}
{"\n"}
 # 2. DÉFINITION DES GROUPES{"\n"}
 # -------------------------{"\n"}
 # Le robot est divisé en deux groupes de contrôle :{"\n"}
 # - Le bras (pour bouger){"\n"}
 # - La pince (pour ouvrir/fermer){"\n"}
{"\n"}
 # Noms des groupes standards pour le Ned2 : 'arm' et 'tools'{"\n"}
 arm_group_name = "arm"{"\n"}
 gripper_group_name = "tools"{"\n"}
 move_group = moveit_commander.MoveGroupCommander(arm_group_name){"\n"}
 gripper_group = moveit_commander.MoveGroupCommander(gripper_group_name){"\n"}
 # Petit message pour dire qu'on est prêt{"\n"}
 print("=== Prêt à bouger le robot ! ==="){"\n"}
{"\n"}
 # 3. MOUVEMENT 1 : Position Home Personnalisée{"\n"}
 # --------------------------------------------{"\n"}
 print("1. Allons à la position Home (Définie manuellement)"){"\n"}
{"\n"}
 # On définit les angles en radians pour une belle position d'attente{"\n"}
 # [J1, J2, J3, J4, J5, J6]{"\n"}
 # J5 = 0.0 -&gt; Pour aligner la caméra avec le bras{"\n"}
 # J6 = 1.57 -&gt; Pour tourner la pince de 90° (si besoin selon votre montage){"\n"}
 home_joints = [0.0, 0.5, -1.2, 0.0, 0.0, 1.57]{"\n"}
 move_group.set_joint_value_target(home_joints){"\n"}
{"  "}success = move_group.go(wait=True){"\n"}
 move_group.stop() # Sécurité{"\n"}
 move_group.clear_pose_targets(){"\n"}
{"\n"}
 if success:{"\n"}
 print(" -&gt; Robot arrivé au Home !"){"\n"}
 else:{"\n"}
 print(" -&gt; Échec du mouvement."){"\n"}
{"\n"}
 rospy.sleep(1){"\n"}
{"\n"}
 # 4. MOUVEMENT 2 : Simuler une approche (Aller vers le bas){"\n"}
 # ---------------------------------------------------------{"\n"}
 print("2. Descente vers la zone de prise (Pick)"){"\n"}
{"\n"}
 # On récupère la position actuelle pour la modifier{"\n"}
 current_pose = move_group.get_current_pose().pose{"\n"}
{"\n"}
 # On définit une nouvelle cible (Target){"\n"}
 target_pose = geometry_msgs.msg.Pose(){"\n"}
 target_pose.orientation = current_pose.orientation # On garde la même orientation{"\n"}
 target_pose.position.x = 0.25 # 25cm devant le robot{"\n"}
 target_pose.position.y = 0.0 # Centré{"\n"}
 target_pose.position.z = 0.15 # 15cm de hauteur (Z){"\n"}
 move_group.set_pose_target(target_pose){"\n"}
{"\n"}
 # On bouge !{"\n"}
 success = move_group.go(wait=True){"\n"}
 move_group.stop(){"\n"}
 move_group.clear_pose_targets(){"\n"}
 print(" Mouvement réussi ?", success){"\n"}
 rospy.sleep(1){"\n"}
{"\n"}
 # 5. ACTION PINCE : Fermer la pince{"\n"}
 # ---------------------------------{"\n"}
 print("3. Fermeture de la pince"){"\n"}
 # Pour le gripper, on peut utiliser des positions nommées comme "close" ou "open"{"\n"}
 # Note : Sur certains modèles Niryo, il faut parfois définir les joints manuellement{"\n"}
 try:{"\n"}
 gripper_group.set_named_target("close"){"\n"}
 gripper_group.go(wait=True){"\n"}
 except:{"\n"}
 print(" (Pas de position 'close' trouvée, on continue sans pince)"){"\n"}
{"\n"}
 rospy.sleep(1){"\n"}
 {"\n"}
 # 6. MOUVEMENT 3 : Déposer ailleurs (Place){"\n"}
 # -----------------------------------------{"\n"}
 print("4. On déplace l'objet vers une autre zone"){"\n"}
{"\n"}
{"\n"}
 # ÉTAPE A : On lève l'objet (Sécurité){"\n"}
 # ------------------------------------{"\n"}
 # On récupère la position actuelle pour juste changer Z{"\n"}
 current_pose = move_group.get_current_pose().pose{"\n"}
 target_pose = current_pose{"\n"}
 target_pose.position.z = 0.30 # On monte à 30cm de haut{"\n"}
{"\n"}
 move_group.set_pose_target(target_pose){"\n"}
 move_group.go(wait=True){"\n"}
 move_group.stop(){"\n"}
 move_group.clear_pose_targets(){"\n"}
 rospy.sleep(0.5){"\n"}
{"\n"}
 # ÉTAPE B : Rotation de la base (Joint 1){"\n"}
 # -------------------------------------{"\n"}
 print(" -&gt; Rotation de la base à 90 degrés..."){"\n"}
{"\n"}
 # On récupère les angles actuels des moteurs{"\n"}
 current_joints = move_group.get_current_joint_values(){"\n"}
{"\n"}
 # On modifie juste le premier angle (Base / Joint 1){"\n"}
 # 1.57 radians = environ 90 degrés vers la gauche{"\n"}
 # -1.57 radians = environ 90 degrés vers la droite{"\n"}
 current_joints[0] = 1.57{"\n"}
{"\n"}
 move_group.set_joint_value_target(current_joints){"\n"}
 move_group.go(wait=True){"\n"}
 move_group.stop(){"\n"}
 rospy.sleep(0.5){"\n"}
 # ÉTAPE C : On pose (On redescend){"\n"}
 # --------------------------------{"\n"}
 print(" -&gt; On pose l'objet"){"\n"}
 # On reprend la position actuelle (qui est maintenant tournée){"\n"}
 target_pose = move_group.get_current_pose().pose{"\n"}
 target_pose.position.z = 0.15 # On redescend à la hauteur de la table{"\n"}
{"\n"}
 move_group.set_pose_target(target_pose){"\n"}
 move_group.go(wait=True){"\n"}
 move_group.stop(){"\n"}
 move_group.clear_pose_targets(){"\n"}
 rospy.sleep(1){"\n"}
{"\n"}
 # 7. RETOUR HOME{"\n"}
{"  "}# --------------{"\n"}
 print("5. Retour à la maison et ouverture pince"){"\n"}
{"\n"}
 # 1. Ouvrir la pince{"\n"}
 # (Si "open" ne marche pas, on peut l'ignorer pour l'instant ou utiliser des joints){"\n"}
 try:{"\n"}
 gripper_group.set_named_target("open"){"\n"}
 gripper_group.go(wait=True){"\n"}
 except:{"\n"}
 print(" (La commande 'open' n'est pas connue, on continue)"){"\n"}
{"\n"}
 # 2. Retourner à la position Home (MANUELLE){"\n"}
 # On réutilise les mêmes valeurs que tout à l'heure{"\n"}
 # [Base, Épaule, Coude, Avant-bras, Poignet, Main]{"\n"}
 home_joints = [0.0, 0.5, -1.2, 0.0, 0.0, 1.57]{"\n"}
{"\n"}
 move_group.set_joint_value_target(home_joints){"\n"}
 success = move_group.go(wait=True){"\n"}
{"\n"}
 print("=== Terminé avec succès ! ==="){"\n"}
{"\n"}
 # Arrêt propre de MoveIt{"\n"}
 moveit_commander.roscpp_shutdown(){"\n"}
{"\n"}
{"                        "}</code></pre>
          </div>
          {/* Exemple 10 */}
          <div id="exemple10" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 10</h4>
            <p>Code du programme avec obstacle virtuel (obstacle_demo.py)</p>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
#!/usr/bin/env python3{"\n"}
import sys{"\n"}
import rospy{"\n"}
import moveit_commander{"\n"}
import geometry_msgs.msg{"\n"}
def obstacle_avoidance():{"\n"}
{"    "}# 1. INITIALISATION{"\n"}
{"    "}moveit_commander.roscpp_initialize(sys.argv){"\n"}
{"    "}rospy.init_node('niryo_obstacle_mode', anonymous=True){"\n"}
{"    "}# Initialisation de la scène (pour les obstacles) et du robot{"\n"}
{"    "}scene = moveit_commander.PlanningSceneInterface(){"\n"}
{"    "}# robot = moveit_commander.RobotCommander(){"\n"}
{"    "}# Vos groupes (vérifiés précédemment){"\n"}
{"    "}arm_group = moveit_commander.MoveGroupCommander("arm"){"\n"}
{"    "}# Petit délai pour que la scène s'initialise{"\n"}
{"    "}rospy.sleep(2){"\n"}
{"    "}# 2. SE METTRE EN POSITION DE DÉPART{"\n"}
{"    "}print("--- 1. Position Départ ---"){"\n"}
{"    "}# Une position à gauche{"\n"}
{"    "}start_joints = [0.5, 0.5, -1.2, 0.0, 0.0, 0.0]{"\n"}
{"    "}arm_group.set_joint_value_target(start_joints){"\n"}
{"    "}arm_group.go(wait=True){"\n"}
{"    "}arm_group.stop(){"\n"}
{"    "}# 3. CRÉATION DE L'OBSTACLE (LE MUR){"\n"}
{"    "}print("--- 2. Ajout de l'obstacle ---"){"\n"}
{"    "}# Définition de la pose de la boite{"\n"}
{"    "}box_pose = geometry_msgs.msg.PoseStamped(){"\n"}
{"    "}box_pose.header.frame_id = "world" # Référence au sol{"\n"}
{"    "}# On place la boite entre la gauche (0.5 rad) et la droite (-0.5 rad){"\n"}
{"    "}box_pose.pose.position.x = 0.25{"\n"}
{"    "}box_pose.pose.position.y = 0.0{"\n"}
{"    "}box_pose.pose.position.z = 0.15 # Hauteur{"\n"}
{"    "}box_pose.pose.orientation.w = 1.0{"\n"}
{"    "}# On supprime l'obstacle qui peut être déjà présent{"\n"}
{"    "}scene.remove_world_object(box_name){"\n"}
{"    "}rospy.sleep(1){"\n"}
{"    "}box_name = "boite_obstacle"{"\n"}
{"    "}# Ajout d'une boite de 10cm x 40cm x 30cm{"\n"}
{"    "}scene.add_box(box_name, box_pose, size=(0.1, 0.4, 0.3)){"\n"}
{"    "}# IMPORTANT : Attendre que l'obstacle soit bien pris en compte{"\n"}
{"    "}rospy.sleep(2){"\n"}
{"    "}print(" -&gt; Obstacle ajouté ! Regarde dans RViz (bloc vert/violet)"){"\n"}
{"    "}# 4. DÉPLACEMENT VERS L'ARRIVÉE{"\n"}
{"    "}print("--- 3. Déplacement vers l'objectif ---"){"\n"}
{"    "}# Une position à droite (symétrique au départ){"\n"}
{"    "}target_joints = [-0.5, 0.5, -1.2, 0.0, 0.0, 0.0]{"\n"}
{"    "}arm_group.set_joint_value_target(target_joints){"\n"}
{"    "}# C'est ici que la magie opère : MoveIt va calculer le contournement{"\n"}
{"    "}print(" -&gt; Calcul de la trajectoire d'évitement..."){"\n"}
{"    "}success = arm_group.go(wait=True){"\n"}
{"    "}if success:{"\n"}
{"    "}print(" -&gt; Mouvement réussi avec évitement !"){"\n"}
{"    "}else:{"\n"}
{"    "}print(" -&gt; Échec (Obstacle trop gros ou inatteignable)"){"\n"}
{"    "}arm_group.stop(){"\n"}
{"    "}# 5. NETTOYAGE{"\n"}
{"    "}print("--- 4. Suppression de l'obstacle ---"){"\n"}
{"    "}scene.remove_world_object(box_name){"\n"}
{"    "}moveit_commander.roscpp_shutdown(){"\n"}
{"\n"}
if __name__ == '__main__':{"\n"}
obstacle_avoidance(){"\n"}
{"                    "}</code></pre>
          </div>
          {/* Exemple 11 */}
          <div id="exemple11" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 11</h4>
            <p>Code du programme avec spawn de cube dans Gazebo (pick_and_place.py)</p>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
import sys{"\n"}
import rospy{"\n"}
import moveit_commander{"\n"}
import geometry_msgs.msg{"\n"}
from gazebo_msgs.srv import SpawnModel, DeleteModel{"\n"}
from geometry_msgs.msg import Pose{"\n"}
def spawn_cube():{"\n"}
# Cube de 3cm{"\n"}
# Afin de limiter le glissement du cube, une valeur de friction ‘mu' volontairement élevée a{"\n"}
été définie, bien que celle-ci reste éloignée d'un comportement physique réaliste{"\n"}
cube_xml = """&lt;robot name="simple_box"&gt;&lt;link name="my_box"&gt;&lt;inertial&gt;&lt;origin xyz="0{"\n"}
0 0"/&gt;&lt;mass value="0.05"/&gt;&lt;inertia ixx="0.0001" ixy="0" ixz="0" iyy="0.0001" iyz="0"{"\n"}
izz="0.0001"/&gt;&lt;/inertial&gt;&lt;visual&gt;&lt;origin xyz="0 0 0"/&gt;&lt;geometry&gt;&lt;box size="0.03 0.03{"\n"}
0.03"/&gt;&lt;/geometry&gt;&lt;/visual&gt;&lt;collision&gt;&lt;origin xyz="0 0 0"/&gt;&lt;geometry&gt;&lt;box size="0.03{"\n"}
0.03{"\n"}
0.03"/&gt;&lt;/geometry&gt;&lt;surface&gt;&lt;friction&gt;&lt;ode&gt;&lt;mu&gt;1000.0&lt;/mu&gt;&lt;mu2&gt;1000.0&lt;/mu2&gt;&lt;/o{"\n"}
de&gt;&lt;/friction&gt;&lt;/surface&gt;&lt;/collision&gt;&lt;/link&gt;&lt;gazebo{"\n"}
reference="my_box"&gt;&lt;material&gt;Gazebo/Blue&lt;/material&gt;&lt;/gazebo&gt;&lt;/robot&gt;"""{"\n"}
rospy.wait_for_service("gazebo/spawn_urdf_model"){"\n"}
try:{"\n"}
spawn = rospy.ServiceProxy("gazebo/spawn_urdf_model", SpawnModel){"\n"}
pose = Pose(){"\n"}
pose.position.x = 0.30{"\n"}
pose.position.y = 0.0{"\n"}
pose.position.z = 0.02{"\n"}
spawn("blue_cube", cube_xml, "", pose, "world"){"\n"}
except rospy.ServiceException as e:{"\n"}
print("Erreur Spawn: ", e){"\n"}
def real_pick_and_place():{"\n"}
moveit_commander.roscpp_initialize(sys.argv){"\n"}
rospy.init_node('niryo_robust_pick', anonymous=True){"\n"}
# SETUP{"\n"}
arm_group = moveit_commander.MoveGroupCommander("arm",{"\n"}
robot_description="robot_description", ns="/"){"\n"}
arm_group.set_planning_time(10.0) # Plus de temps pour calculer{"\n"}
arm_group.set_max_velocity_scaling_factor(0.6) # Plus lent = Plus précis{"\n"}
try:{"\n"}
gripper_group = moveit_commander.MoveGroupCommander("tool",{"\n"}
robot_description="robot_description", ns="/"){"\n"}
except:{"\n"}
gripper_group = None{"\n"}
# NETTOYAGE{"\n"}
try:{"\n"}
delete_model = rospy.ServiceProxy("gazebo/delete_model", DeleteModel){"\n"}
delete_model("blue_cube"){"\n"}
rospy.sleep(0.5){"\n"}
except: pass{"\n"}
spawn_cube(){"\n"}
rospy.sleep(1.0){"\n"}
{"\n"}
# 1. APPROCHE (JOINTS) - Pince verticale{"\n"}
print("--- Approche ---"){"\n"}
# J5 = -1.57 (Pince vers le bas){"\n"}
approach_joints = [0.0, 0.0, -0.5, 0.0, -0.8, 0.0]{"\n"}
arm_group.set_joint_value_target(approach_joints){"\n"}
success = arm_group.go(wait=True){"\n"}
if not success:{"\n"}
print("Echec approche."){"\n"}
return{"\n"}
{"\n"}
# 2. OUVERTURE{"\n"}
if gripper_group:{"\n"}
gripper_group.set_named_target("open"){"\n"}
gripper_group.go(wait=True){"\n"}
{"\n"}
# 3. DESCENTE (CARTESIEN){"\n"}
print("--- Descente ---"){"\n"}
current_pose = arm_group.get_current_pose().pose{"\n"}
grasp_pose = current_pose{"\n"}
grasp_pose.position.z = 0.055 # Hauteur de saisie{"\n"}
(plan, fraction) = arm_group.compute_cartesian_path([grasp_pose], 0.01){"\n"}
if fraction &gt; 0.9:{"\n"}
arm_group.execute(plan, wait=True){"\n"}
else:{"\n"}
print("Plan cartésien échoué, utilisation standard"){"\n"}
arm_group.set_pose_target(grasp_pose){"\n"}
arm_group.go(wait=True){"\n"}
{"\n"}
# 4. FERMETURE (AVEC GESTION D'ERREUR){"\n"}
print("--- Fermeture ---"){"\n"}
if gripper_group:{"\n"}
try:{"\n"}
# On lance la fermeture.{"\n"}
# MoveIt va peut-être crier "TOLERANCE VIOLATED" car le cube bloque.{"\n"}
# On s'en fiche, tant que c'est fermé.{"\n"}
gripper_group.set_named_target("close"){"\n"}
gripper_group.go(wait=True){"\n"}
except:{"\n"}
print("&gt;&gt;&gt; Pince bloquée par le cube (Succès !)"){"\n"}
# Important : On force l'arrêt du moteur de la pince pour ne pas surchauffer (virtuellement){"\n"}
gripper_group.stop(){"\n"}
rospy.sleep(1.0){"\n"}
{"\n"}
# 5. LEVAGE{"\n"}
print("--- Levage ---"){"\n"}
# On remonte à la position d'approche{"\n"}
arm_group.set_joint_value_target(approach_joints){"\n"}
success = arm_group.go(wait=True){"\n"}
if success:{"\n"}
print("VICTOIRE : Cube soulevé !"){"\n"}
else:{"\n"}
print("Echec du levage"){"\n"}
moveit_commander.roscpp_shutdown(){"\n"}
if __name__ == '__main__':{"\n"}
real_pick_and_place(){"\n"}
{"                            "}</code></pre>
          </div>
          {/* Exemple 12 */}
          <div id="exemple12" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 12</h4>
            <p>Code pour lister les positions enregistrées (lister_positions.py)</p>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
from pyniryo import *{"\n"}
robot_ip = "169.254.200.200"{"\n"}
print(f"--- Connexion au robot {"{"}robot_ip{"}"} ---"){"\n"}
{"\n"}
try:{"\n"}
{"    "}robot = NiryoRobot(robot_ip){"\n"}
except Exception as e:{"\n"}
{"    "}print(f"Erreur : {"{"}e{"}"}"){"\n"}
{"    "}exit(){"\n"}
{"\n"}
{"    "}liste_noms = robot.get_pose_saved_names(){"\n"}
{"\n"}
print("\n=== LISTE DES POSITIONS ENREGISTRÉES ==="){"\n"}
{"\n"}
if not liste_noms:{"\n"}
{"    "}print("Aucune position enregistrée dans la mémoire du robot."){"\n"}
{"\n"}
{"    "}else:{"\n"}
{"    "}for nom in liste_noms:{"\n"}
{"        "}# 2. (Optionnel) Récupérer les détails de chaque position{"\n"}
{"        "}details = robot.get_pose_saved(nom){"\n"}
{"        "}print(f" - Nom : '{"{"}nom{"}"}'"){"\n"}
{"        "}print(f" Coords : {"{"}details{"}"}") # Affiche [x, y, z, roll, pitch, yaw]{"\n"}
{"        "}print("-------------------------------"){"\n"}
robot.close_connection(){"\n"}
{"                            "}</code></pre>
          </div>
          {/* Exemple 13 */}
          <div id="exemple13" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 13</h4>
            <p>Méthodologie de mise en place d'un tunnel SSH</p>
            <h5>Prérequis</h5>
            <p>• SSH accessible sur robot :<br />
              On branche le câble Ethernet entre le robot et le PC. Puis on vérifie la connexion :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>ping 169.254.200.200{"\n"}
# Ctrl+C pour arrêter</code></pre>
            <p>• Si la connexion est bien faite, on peut se connecter au terminal SSH au robot :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>ssh niryo@169.254.200.200{"\n"}
# Password : robotics</code></pre>
            <p>Si la connexion est réussie, vous devriez voir ceci en début de ligne :</p>
            {/* FIGURE 126 */}
            <div id="figure126" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 80, marginBottom: '1rem'}}>
              <img src="images/Figure126.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 126 : Début de ligne du terminal SSH (robot)</p>
            <h5>Créer le tunnel SSH</h5>
            <p>• Nouveau terminal mais pas SSH, ici c'est celui de l'environnement Ubuntu qu'on veut :</p>
            {/* FIGURE 127 */}
            <div id="figure127" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 80, marginBottom: '1rem'}}>
              <img src="images/Figure127.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 127 : Début de ligne du terminal du PC</p>
            <p>• Saisir la commande :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>ssh -f -N -L 11311:localhost:11311 niryo@169.254.200.200</code></pre>
            <p>Les explications de cette commande sont les suivantes :</p>
            <div id="tableau37" className="table-responsive">
              <table className="table table-bordered w-75">
                <thead className="table-primary"><tr><th>Argument</th><th>Rôle</th></tr></thead>
                <tbody>
                  <tr><td className="fw-bold">-f</td><td>Permet de laisser le tunnel actif en arrière-plan</td></tr>
                  <tr><td className="fw-bold">-N</td><td>"No Shell" – pas de session interactive, juste un tunnel</td></tr>
                  <tr><td className="fw-bold">-L 11311:localhost:11311</td><td>Redirige local 11311 → robot:11311</td></tr>
                  <tr><td className="fw-bold">niryo@169.254.200.200</td><td>Identifiants de connexion au robot</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-center small mt-1">Tableau 37 : Tableau explicatif de la commande de construction d'un tunnel SSH</p>
            <p>Il ne faut pas fermer ce tunnel ou le relancer après un arrêt de l’ordinateur ou de terminal.
              Tant que le terminal est ouvert, le tunnel est actif.</p>
            <h5>Configuration ROS sur le PC</h5>
            <p>• Sur un nouveau terminal du PC (crestic@...) :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>ss -tuln | grep 11311</code></pre>
            <p>Cette commande doit renvoyer :</p>
            {/* FIGURE 128 */}
            <div id="figure128" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style={{height: 80, marginBottom: '1rem'}}>
              <img src="images/Figure128.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
            </div>
            <p className="text-center small mt-1">Figure 128 : Vérification du port 11311</p>
            <p>Puis :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>export ROS_MASTER_URI=http://localhost:11311{"\n"}
export ROS_IP=127.0.0.1</code></pre>
            <p>• On vérifie si ces commandes ont bien été prises en compte (optionnel) :</p>
            <div id="tableau38" className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-primary"><tr><th>Commande à taper</th><th>Ce qu'elle doit renvoyer</th></tr></thead>
                <tbody>
                  <tr><td className="fw-bold">echo $ROS_MASTER_URI</td><td>http://localhost:11311</td></tr>
                  <tr><td className="fw-bold">echo $ROS_IP</td><td>127.0.0.1</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-center small mt-1">Tableau 38 : Tableau de vérification de la prise en compte de ROS_MASTER_URI et ROS_IP sur le terminal du PC</p>
            <h5>Configurer ROS sur le robot (à ne pas faire avec le Ned2)</h5>
            <p>Dans un ROS multi-machine classique :</p>
            <ul>
              <li>chaque machine est un nœud ROS</li>
              <li>chacune doit connaître : le ROS Master et son IP réseau</li>
            </ul>
            <p>Mais dans notre cas :</p>
            <ul>
              <li>le Ned2 refuse le multi-machine</li>
              <li>il fonctionne en ROS localhost-only</li>
              <li>le tunnel SSH est un trucage réseau, pas une vraie connexion ROS</li>
            </ul>
            <p>On ferait des exports sur le robot uniquement si :</p>
            <ul>
              <li>le robot acceptait ROS multi-machine</li>
              <li>le port 11311 était ouvert sur le réseau</li>
              <li>le PC était un vrai nœud ROS distant</li>
            </ul>
            <p>Sur le terminal SSH du robot :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>export ROS_MASTER_URI=http://localhost:11311{"\n"}
export ROS_IP=169.254.200.200{"\n"}
export ROS_HOSTNAME=169.254.200.200</code></pre>
            <p>On vérifie si ces commandes ont bien été prises en compte (optionnel) :</p>
            <div id="tableau39" className="table-responsive">
              <table className="table table-bordered w-75">
                <thead className="table-primary"><tr><th>Commande à taper</th><th>Ce qu'elle doit renvoyer</th></tr></thead>
                <tbody>
                  <tr><td className="fw-bold">echo $ROS_MASTER_URI</td><td>http://localhost:11311</td></tr>
                  <tr><td className="fw-bold">echo $ROS_IP</td><td>169.254.200.200</td></tr>
                  <tr><td className="fw-bold">echo $ROS_HOSTNAME</td><td>169.254.200.200</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-center small mt-1">Tableau 39 : Tableau de vérification de la prise en compte de ROS_MASTER_URI et ROS_IP sur le terminal du robot</p>
            <p>Si les nœuds ROS du robot s'exécutent via roslaunch / systemd / scripts, il faudra peut-être ajouter ces exports dans le fichier « .bashrc » ou dans le fichier de service.</p>
            <h5>Tester la connexion</h5>
            <p>Tester le tunnel SSH (depuis le terminal du PC « crestic@... ») :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>telnet localhost 11311</code></pre>
            <p>Si une connexion ouverte apparaît → tunnel Ok.</p>
            <p>Tester ROS :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>rostopic list</code></pre>
            <h5>Points d'attention</h5>
            <p>Le tunnel SSH doit rester ouvert. C'est pourquoi il est recommandé d'utiliser la commande :</p>
            <pre className="bg-dark text-white p-3 rounded"><code>ssh -f -N -L 11311:localhost:11311 niryo@169.254.200.200</code></pre>
            <p>Pour pouvoir le mettre en tâche de fond, il est recommandé de mettre « -f ».</p>
            <h5>Méthodologie récapitulative pour le tunnel SSH :</h5>
            <ol>
              <li>ouvrir un terminal</li>
              <li>taper la commande : <code className="text-dark">ssh niryo@169.254.200.200</code> (mdp : robotics)</li>
              <li>ouvrir un nouveau terminal PC (crestic@...)</li>
              <li>taper la commande : <code className="text-dark">ssh -f -N -L 11311:localhost:11311 niryo@169.254.200.200</code></li>
              <li>ouvrir un nouveau terminal PC (crestic@...)</li>
              <li>taper les commandes :</li>
              <pre className="bg-dark text-white p-3 rounded"><code>export ROS_MASTER_URI=http://localhost:11311{"\n"}
export ROS_HOSTNAME=127.0.0.1{"\n"}
source /opt/ros/noetic/setup.bash{"\n"}
source ~/niryo_ws/devel/setup.bash</code></pre>
              <li>on peut essayer d'ouvrir RViz avec la commande suivante pour voir s'il n'y a pas de<br />problème avec MoveIt :
                <code className="text-dark">roslaunch niryo_robot_description display.launch</code></li>
              <li>taper : <code className="text-dark">rostopic list</code> <br />
                si une liste apparaît → le tunnel SSH fonctionne)</li>
              <li>lancer notre script<br />
                soit depuis « ~ » en donnant le chemin complet : ex
                soit depuis le répertoire dans lequel se situe le script et faire : python3
                <code className="text-dark">nom_du_script.py</code></li>
            </ol>
          </div>
          {/* Exemple 14 */}
          <div id="exemple14" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 14</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
#!/usr/bin/env python3{"\n"}
# -*- coding: utf-8 -*-{"\n"}
{"\n"}
import rospy{"\n"}
from niryo_robot_poses_handlers.srv import GetPose{"\n"}
{"\n"}
def get_niryo_pose_as_list(pose_name):{"\n"}
{"    "}""" Récupère la position cartésienne [x, y, z, r, p, y] """{"\n"}
{"    "}service_name = '/niryo_robot_poses_handlers/get_pose'{"\n"}
{"    "}rospy.wait_for_service(service_name, timeout=5){"\n"}
{"    "}try:{"\n"}
{"        "}get_pose_srv = rospy.ServiceProxy(service_name, GetPose){"\n"}
{"        "}response = get_pose_srv(pose_name){"\n"}
{"        "}p = response.pose{"\n"}
{"        "}return [p.position.x, p.position.y, p.position.z,{"\n"}
{"            "}p.rpy.roll, p.rpy.pitch, p.rpy.yaw]{"\n"}
{"    "}except Exception as e:{"\n"}
{"        "}rospy.logerr(f"Erreur cartésienne '{"{"}pose_name{"}"}' : {"{"}e{"}"}"){"\n"}
{"        "}return None{"\n"}
{"\n"}
def get_niryo_joints(pose_name):{"\n"}
{"    "}"""{"\n"}
{"    "}Récupère les angles articulaires (J1 à J6) d'une pose.{"\n"}
{"    "}"""{"\n"}
{"    "}service_name = '/niryo_robot_poses_handlers/get_pose'{"\n"}
{"    "}rospy.wait_for_service(service_name, timeout=5){"\n"}
{"    "}try:{"\n"}
{"        "}get_pose_srv = rospy.ServiceProxy(service_name, GetPose){"\n"}
{"        "}response = get_pose_srv(pose_name){"\n"}
{"\n"}
{"        "}return response.pose.joints{"\n"}
{"\n"}
{"    "}except Exception as e:{"\n"}
{"        "}rospy.logerr(f"Erreur joints '{"{"}pose_name{"}"}' : {"{"}e{"}"}"){"\n"}
{"        "}return None{"\n"}
{"                            "}</code></pre>
          </div>
          {/* Exemple 15 */}
          <div id="exemple15" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 15</h4>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
#!/usr/bin/env python3{"\n"}
import sys{"\n"}
import rospy{"\n"}
import moveit_commander{"\n"}
from niryo_tools import get_niryo_joints{"\n"}
def main():{"\n"}
{"    "}# 1. Initialisation de l'interface MoveIt et du nœud ROS{"\n"}
{"    "}moveit_commander.roscpp_initialize(sys.argv){"\n"}
{"    "}rospy.init_node("ned2_moveit_joint_control", anonymous=True){"\n"}
{"    "}{"\n"}
{"    "}# 2. Instanciation des interfaces de contrôle{"\n"}
{"    "}robot = moveit_commander.RobotCommander(){"\n"}
{"    "}scene = moveit_commander.PlanningSceneInterface(){"\n"}
{"\n"}
{"    "}# Définition du groupe de planification pour le bras{"\n"}
{"    "}group_name = "arm"{"\n"}
{"    "}group = moveit_commander.MoveGroupCommander(group_name){"\n"}
{"    "}{"\n"}
{"    "}# 3. Paramétrage de la vitesse (30% de la vitesse max){"\n"}
{"    "}group.set_max_velocity_scaling_factor(0.3){"\n"}
{"    "}group.set_max_acceleration_scaling_factor(0.3){"\n"}
{"    "}{"\n"}
{"    "}rospy.loginfo("Connexion à MoveIt réussie. Début de la séquence articulaire."){"\n"}
{"\n"}
{"    "}# ÉTAPE 1 : Déplacement vers 'pos_cam'{"\n"}
{"    "}rospy.loginfo("Récupération des joints pour 'pos_cam'..."){"\n"}
{"    "}joints_cam = get_niryo_joints("pos_cam"){"\n"}
{"    "}{"\n"}
{"    "}if joints_cam:{"\n"}
{"        "}rospy.loginfo(f"Mouvement articulaire vers pos_cam : {"{"}joints_cam{"}"}"){"\n"}
{"        "}# Commande de mouvement vers les angles cibles{"\n"}
{"        "}success = group.go(joints_cam, wait=True){"\n"}
{"        "}group.stop() # Assure l'arrêt des moteurs{"\n"}
{"\n"}
{"        "}if success:{"\n"}
{"            "}rospy.loginfo("Position 'pos_cam' atteinte avec succès."){"\n"}
{"        "}else:{"\n"}
{"            "}rospy.logerr("Échec de la planification vers 'pos_cam'."){"\n"}
{"    "}else:{"\n"}
{"        "}rospy.logerr("Impossible de récupérer les joints de 'pos_cam'. Vérifiez le nom dans{"\n"}
Niryo Studio."){"\n"}
 {"\n"}
{"    "}rospy.sleep(2.0) # Temporisation entre les mouvements{"\n"}
{"\n"}
{"    "}# ÉTAPE 2 : Retour vers 'home_position'{"\n"}
{"    "}rospy.loginfo("Récupération des joints pour 'home_position'..."){"\n"}
{"    "}joints_home = get_niryo_joints("home_position"){"\n"}
{"    "}{"\n"}
{"    "}if joints_home:{"\n"}
{"        "}rospy.loginfo(f"Mouvement articulaire vers home_position : {"{"}joints_home{"}"}"){"\n"}
{"        "}success = group.go(joints_home, wait=True){"\n"}
{"        "}group.stop(){"\n"}
{"\n"}
{"        "}if success:{"\n"}
{"            "}rospy.loginfo("Retour en 'home_position' terminé."){"\n"}
{"        "}else:{"\n"}
{"            "}rospy.logerr("Échec du retour en 'home_position'."){"\n"}
{"    "}else:{"\n"}
{"        "}rospy.logerr("Position 'home_position' introuvable."){"\n"}
{"    "}{"\n"}
{"    "}# 4. Fermeture MoveIt{"\n"}
{"    "}moveit_commander.roscpp_shutdown(){"\n"}
{"    "}rospy.loginfo("Séquence terminée."){"\n"}
{"\n"}
 if __name__ == "__main__":{"\n"}
{"    "}try:{"\n"}
{"        "}main(){"\n"}
{"    "}except rospy.ROSInterruptException:{"\n"}
{"    "}pass{"\n"}
{"                            "}</code></pre>
          </div>
          {/* Exemple 16 */}
          <div id="exemple16" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 16</h4>
            <p>« stop_conv_w_ir_rospy.py » : On arrête le convoyeur quand le capteur IR détecte un objet.</p>
            <pre className="bg-dark text-white p-3 rounded"><code>{"\n"}
#!/usr/bin/env python3{"\n"}
{"\n"}
import sys{"\n"}
import rospy{"\n"}
import moveit_commander{"\n"}
from niryo_tools import get_niryo_joints{"\n"}
from niryo_robot_rpi.srv import GetDigitalIO{"\n"}
from niryo_robot_programs_manager.srv import SetConveyor{"\n"}
{"\n"}
def control_conveyor(conveyor_id, action, speed=50):{"\n"}
{"    "}""" Active ou arrête le convoyeur """{"\n"}
{"    "}service_name = '/niryo_robot_programs_manager/control_conveyor'{"\n"}
{"    "}rospy.wait_for_service(service_name){"\n"}
{"    "}try:{"\n"}
{"        "}stop_conveyor = rospy.ServiceProxy(service_name, SetConveyor){"\n"}
{"        "}# action : True pour lancer, False pour arrêter{"\n"}
{"        "}stop_conveyor(conveyor_id, action, speed, 1) # 1 = direction par défaut{"\n"}
{"    "}except rospy.ServiceException as e:{"\n"}
{"        "}rospy.logerr(f"Erreur convoyeur : {"{"}e{"}"}"){"\n"}
{"\n"}
def wait_for_ir_sensor(pin_id):{"\n"}
{"    "}""" Boucle d'attente jusqu'à détection (passage à 0) """{"\n"}
{"    "}service_name = '/niryo_robot_rpi/get_digital_io'{"\n"}
{"    "}rospy.wait_for_service(service_name){"\n"}
{"    "}get_io = rospy.ServiceProxy(service_name, GetDigitalIO){"\n"}
{"\n"}
{"    "}rospy.loginfo(f"Attente détection sur le port {"{"}pin_id{"}"}..."){"\n"}
{"    "}while not rospy.is_shutdown():{"\n"}
{"        "}res = get_io(pin_id){"\n"}
{"        "}if res.value == 0: # Détection (logique inverse){"\n"}
{"            "}rospy.loginfo("Objet détecté !"){"\n"}
{"            "}break{"\n"}
{"        "}rospy.sleep(0.1) # Évite de surcharger le processeur{"\n"}
{"\n"}
def main():{"\n"}
{"    "}moveit_commander.roscpp_initialize(sys.argv){"\n"}
{"    "}rospy.init_node("conveyor_ir_control", anonymous=True){"\n"}
{"    "}group = moveit_commander.MoveGroupCommander("arm"){"\n"}
{"\n"}
{"    "}# ID du convoyeur (souvent 1 ou 2) et Port du capteur (DI5){"\n"}
{"    "}CONVEYOR_ID = 9{"\n"}
{"    "}SENSOR_PIN = "DI5"{"\n"}
{"\n"}
{"    "}# 1. Lancer le convoyeur{"\n"}
{"    "}rospy.loginfo("Lancement du convoyeur..."){"\n"}
{"    "}control_conveyor(CONVEYOR_ID, True, speed=30){"\n"}
{"\n"}
{"    "}# 2. Attendre que le capteur détecte l'objet{"\n"}
{"    "}wait_for_ir_sensor(SENSOR_PIN){"\n"}
{"\n"}
{"    "}# 3. Arrêter le convoyeur immédiatement{"\n"}
{"    "}control_conveyor(CONVEYOR_ID, False){"\n"}
{"    "}rospy.loginfo("Convoyeur arrêté."){"\n"}
{"    "}{"\n"}
{"    "}# 4. Déplacement du robot vers pos_cam pour la saisie ou l'inspection{"\n"}
{"    "}joints_cam = get_niryo_joints("pos_cam"){"\n"}
{"    "}if joints_cam:{"\n"}
{"        "}rospy.loginfo("Déplacement vers pos_cam..."){"\n"}
{"        "}group.go(joints_cam, wait=True){"\n"}
{"        "}group.stop(){"\n"}
{"        "}rospy.loginfo("Robot en position."){"\n"}
{"\n"}
{"    "}moveit_commander.roscpp_shutdown(){"\n"}
{"\n"}
if __name__ == "__main__":{"\n"}
{"    "}main(){"\n"}
{"\n"}
{"                            "}</code></pre>
          </div>
          {/* Exemple 17 */}
          <div id="exemple17" className="mt-4">
            <h4 className="text-primary fw-bold">Exemple 17</h4>
            <p>Pick_&amp;_Place_rospy.py » : on fait un pick &amp; place avec le convoyeur et le capteur IR.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Programmation