import React from 'react'

const ressources = () => {
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
          {/* LEXIQUE */}
          <a className="nav-link px-0 py-1 text-dark" href="#lexique"><i className="bi bi-book-half text-primary me-2" />Lexique</a>
          {/* LIENS UTILES */}
          <a className="nav-link px-0 py-1 text-dark mt-2" href="#liens"><i className="bi bi-link-45deg text-primary me-2" />Liens utiles</a>
        </nav>
      </div>
    </div>
    {/* contenu principal */}
    <div className="col-md-9 ps-0 ps-md-2 pe-0">
      <div id="lexique" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-book-half" /> LEXIQUE</h2>
        <div id="modbus" className="mt-3">
          <h3 className="text-dark fw-bold">Modbus</h3>
          <p>Protocole de communication industriel client/serveur (créé en 1979 par Modicon). Sert à échanger des données entre automates, capteurs, actionneurs et superviseurs.</p>
          <p><a href="https://fr.wikipedia.org/wiki/Modbus" target="_blank" rel="noopener noreferrer">https://fr.wikipedia.org/wiki/Modbus</a></p>
        </div>
        <div id="tcp" className="mt-5">
          <h3 className="text-dark fw-bold">TCP</h3>
          <p>Transmission Control Protocol entre un serveur et un client. Protocole de communication via le réseau internet. Il est conçu pour s'assurer que les paquets de données arrivent correctement (dans le bon ordre et sans pertes de données). Utilisé par Modbus TCP.</p>
          <p><a href="https://www.fortinet.com/fr/resources/cyberglossary/tcp-ip#:~:text=Le%20protocole%20TCP%20(Transmission%20Control,des%20messages%20sur%20les%20r%C3%A9seaux" target="_blank" rel="noopener noreferrer">https://www.fortinet.com/fr/resources/cyberglossary/tcp-ip</a></p>
        </div>
        <div id="ip" className="mt-5">
          <h3 className="text-dark fw-bold">IP</h3>
          <p>Internet Protocol. Protocole d'adressage des machines dans un réseau.</p>
          <p><a href="https://dictionnaire.lerobert.com/definition/ip" target="_blank" rel="noopener noreferrer">https://dictionnaire.lerobert.com/definition/ip</a></p>
        </div>
        <div id="tcp-ip" className="mt-5">
          <h3 className="text-dark fw-bold">TCP/IP</h3>
          <p>Un ensemble de règles normalisées permettant aux ordinateurs de communiquer sur un réseau tel qu'Internet.</p>
          <p><a href="https://www.avast.com/fr-fr/c-what-is-tcp-ip#:~:text=TCP%2FIP%20signifie%20Transmission%20Control,un%20r%C3%A9seau%20tel%20qu'Internet" target="_blank" rel="noopener noreferrer">https://www.avast.com/fr-fr/c-what-is-tcp-ip</a></p>
        </div>
        <div id="plc" className="mt-5">
          <h3 className="text-dark fw-bold">PLC / API</h3>
          <p>Programmable Logic Controller (en) / Automate Programmable Industriel (FR). Ordinateur robuste dédié au contrôle de processus industriels (machines, lignes de production). Il exécute des programmes logiques (ladder, grafcet, etc.) en temps réel. Exemple : le Ned2 possède une API Python (pyniryo) pour envoyer des commandes au robot.</p>
          <p><a href="https://fr.wikipedia.org/wiki/Automate_programmable_industriel" target="_blank" rel="noopener noreferrer">https://fr.wikipedia.org/wiki/Automate_programmable_industriel</a></p>
        </div>
        <div id="soc" className="mt-5">
          <h3 className="text-dark fw-bold">SoC</h3>
          <p>System on a Chip ou Système sur une Puce en français. Circuit intégré qui regroupe plusieurs composants d'un ordinateur : processeur, mémoire, GPU, etc.</p>
          <p><a href="https://fr.wikipedia.org/wiki/Syst%C3%A8me_sur_une_puce" target="_blank" rel="noopener noreferrer">https://fr.wikipedia.org/wiki/Système_sur_une_puce</a></p>
        </div>
        <div id="scada" className="mt-5">
          <h3 className="text-dark fw-bold">SCADA</h3>
          <p>Supervisory Control And Data Acquisition. Logiciel de supervision industrielle. Sert à visualiser, contrôler et enregistrer l'état des machines ou de procédés industriels. Communique souvent via Modbus TCP avec des API ou des robots.</p>
          <p><a href="https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_contr%C3%B4le_et_d%27acquisition_de_donn%C3%A9es" target="_blank" rel="noopener noreferrer">https://fr.wikipedia.org/wiki/Système_de_contrôle_et_d'acquisition_de_données</a></p>
        </div>
        <div id="ssh" className="mt-5">
          <h3 className="text-dark fw-bold">SSH</h3>
          <p>Secure Shell. C'est un protocole de communication sécurisé qui permet de se connecter à distance à un système Linux (ici, le Raspberry Pi 4).</p>
          <p><a href="https://fr.wikipedia.org/wiki/Secure_Shell" target="_blank" rel="noopener noreferrer">https://fr.wikipedia.org/wiki/Secure_Shell</a></p>
        </div>
        <div id="terminal-ssh" className="mt-5">
          <h3 className="text-dark fw-bold">Terminal SSH</h3>
          <p>Porte d'accès Linux/ROS directement à l'intérieur du Ned2, via le réseau.</p>
          <p><a href="https://docs.niryo.com/niryostudio/interface/terminal/" target="_blank" rel="noopener noreferrer">https://docs.niryo.com/niryostudio/interface/terminal/</a></p>
        </div>
      </div>
      <div id="liens" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-link-45deg" /> LIENS UTILES</h2>
        <div className="list-group list-group-flush">
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-camera-fill text-primary me-2" />Caméra : <a href="https://assets.rs-online.com/image/upload/v1678366719/Datasheets/74f80c52e6e10f4bf9381f9dbe4fe1be.pdf" target="_blank">https://assets.rs-online.com/image/upload/v1678366719/Datasheets/74f80c52e6e10f4bf9381f9dbe4fe1be.pdf</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-palette-fill text-primary me-2" />Format brut YUV : <a href="https://www.baslerweb.com/fr-fr/learning/yuv-color-coding/" target="_blank">https://www.baslerweb.com/fr-fr/learning/yuv-color-coding/</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-gear-fill text-primary me-2" />Convoyeur : <a href="https://docs.niryo.com/accessories/conveyor/" target="_blank">https://docs.niryo.com/accessories/conveyor/</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-eye-fill text-primary me-2" />Capteur IR E18 D80NK : <a href="https://www.alldatasheet.fr/datasheet-pdf/view/1221863/ETC1/E18-D80NK.html" target="_blank">https://www.alldatasheet.fr/datasheet-pdf/view/1221863/ETC1/E18-D80NK.html</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-gear-wide-connected text-primary me-2" />Servomoteur XL330 : <a href="https://emanual.robotis.com/docs/en/dxl/x/xl330-m288/" target="_blank" rel="noopener noreferrer">https://emanual.robotis.com/docs/en/dxl/x/xl330-m288/</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-info-circle-fill text-primary me-2" />Pour en savoir plus sur ROS : <a href="https://wiki.ros.org" target="_blank" rel="noopener noreferrer">https://wiki.ros.org</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-book text-primary me-2" />Programmation de robot : <a href="https://niryorobotics.github.io/ned_ros/introduction/quick_start.html" target="_blank" rel="noopener noreferrer">https://niryorobotics.github.io/ned_ros/introduction/quick_start.html</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-eye-fill text-primary me-2" />API de vision (traitement d'image) : <a href="https://niryorobotics.github.io/pyniryo/v1.2.1-1/api/vision.html" target="_blank" rel="noopener noreferrer">https://niryorobotics.github.io/pyniryo/v1.2.1-1/api/vision.html</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-wifi text-primary me-2" />Utilisation du serveur Modbus TCP : <a href="https://docs.niryo.com/api/modbus/use-the-modbus-tcp-server/#section-header-two-38g3s" target="_blank" rel="noopener noreferrer">https://docs.niryo.com/api/modbus/use-the-modbus-tcp-server/#section-header-two-38g3s</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-filetype-py text-primary me-2" />Pyniryo : <a href="https://niryorobotics.github.io/pyniryo/v1.2.1-1/index.html" target="_blank" rel="noopener noreferrer">https://niryorobotics.github.io/pyniryo/v1.2.1-1/index.html</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-book text-primary me-2" />Documentation PyModbus : <a href="https://pymodbus.readthedocs.io/en/latest/index.html" target="_blank" rel="noopener noreferrer">https://pymodbus.readthedocs.io/en/latest/index.html</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-file-code text-primary me-2" />API Ned-ROS : <a href="https://niryorobotics.github.io/ned_ros/packages/high_level/niryo_robot_bringup.html" target="_blank" rel="noopener noreferrer">https://niryorobotics.github.io/ned_ros/packages/high_level/niryo_robot_bringup.html</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-download text-primary me-2" />Tutoriel pour l'installation de ROS Noetic : <br />
            <a href="https://niryorobotics.github.io/ned_ros/installation/install_for_ubuntu_20.html" target="_blank" rel="noopener noreferrer" className="ms-4">https://niryorobotics.github.io/ned_ros/installation/install_for_ubuntu_20.html</a><br />
            <a href="https://wiki.ros.org/noetic/Installation/Ubuntu" target="_blank" rel="noopener noreferrer" className="ms-4">https://wiki.ros.org/noetic/Installation/Ubuntu</a>
          </div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-journal-bookmark-fill text-primary me-2" />Tutoriel ROS : <a href="https://wiki.ros.org/ROS/Tutorials" target="_blank" rel="noopener noreferrer">https://wiki.ros.org/ROS/Tutorials</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-github text-primary me-2" />Github Ned ROS : <a href="https://github.com/NiryoRobotics/ned_ros" target="_blank" rel="noopener noreferrer">https://github.com/NiryoRobotics/ned_ros</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-display text-primary me-2" />RViz : <a href="https://wiki.ros.org/rviz" target="_blank" rel="noopener noreferrer">https://wiki.ros.org/rviz</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-github text-primary me-2" />Github MATLAB : <a href="https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots/tree/main?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">https://github.com/NiryoRobotics/matlab-support-for-niryo-ned2-robots/tree/main?tab=readme-ov-file</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-plug-fill text-primary me-2" />Connexion à ROS via MATLAB : <a href="https://fr.mathworks.com/help/ros/gs/ros1-nodes.html" target="_blank" rel="noopener noreferrer">https://fr.mathworks.com/help/ros/gs/ros1-nodes.html</a></div>
          <div className="list-group-item bg-transparent px-0"><i className="bi bi-journal-bookmark-fill text-primary me-2" />Tutoriels ROS MATLAB &amp; Simulink : <a href="https://fr.mathworks.com/matlabcentral/fileexchange/118630-matlab-and-simulink-ros-tutorials" target="_blank" rel="noopener noreferrer">https://fr.mathworks.com/matlabcentral/fileexchange/118630-matlab-and-simulink-ros-tutorials</a></div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ressources