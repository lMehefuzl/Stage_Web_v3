export default function Robot() {
  return (
    <div className="container-fluid px-0 px-md-3 mb-5">
        <div className="row g-0 g-md-4 mx-0">
            
            {/* side bar */}
            <div className="col-md-3 ps-0 pe-0 pe-md-2">
                <div className="bg-white rounded-3 shadow-sm p-3 me-0 me-md-2" style="position: sticky; top: 20px; max-height: calc(100vh - 40px); overflow-y: auto;">
                    <h5 className="text-primary mb-3 pb-2 border-bottom">
                        <i className="bi bi-list-ul"></i> Sommaire
                    </h5>
                    <nav className="nav flex-column">
                        <a className="nav-link px-0 py-1 text-dark" href="#raspberry"><i className="bi bi-cpu text-primary me-2"></i>1. Raspberry Pi 4</a>
                        <a className="nav-link px-0 py-1 text-dark mt-2" href="#servomoteur"><i className="bi bi-gear-fill text-primary me-2"></i>2. Servomoteur XL330</a>
                        <a className="nav-link px-0 py-1 text-dark mt-2" href="#camera"><i className="bi bi-camera-fill text-primary me-2"></i>3. Caméra IMX322</a>
                        <a className="nav-link px-0 py-1 text-dark mt-2" href="#capteur-ir"><i className="bi bi-eye-fill text-primary me-2"></i>4. Capteur IR E18 D80NK</a>
                        <a className="nav-link px-0 py-1 text-dark mt-2" href="#convoyeur"><i className="bi bi-arrow-left-right text-primary me-2"></i>5. Convoyeur v2</a>
                        <a className="nav-link px-0 py-1 text-dark mt-2" href="#set-vision"><i className="bi bi-images text-primary me-2"></i>6. Set Vision</a>
                    </nav>
                </div>
            </div>

            {/* contenu principal */}
            <div className="col-md-9 ps-0 ps-md-2 pe-0">
                
                <div id="capteurs" className="bg-white rounded-3 shadow-sm p-4 mb-4">
                    <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-motherboard-fill"></i> CAPTEURS ET INSTRUMENTATION</h2>
                    
                    <p>Le Niryo Ned2 dispose du micro-ordinateur Raspberry Pi 4 et peut être utilisé avec différents capteurs et dispositifs. Parmi eux, on y retrouve principalement le Set Vision et un convoyeur. Le Set Vision est composé de :</p>
                    <ul>
                        <li>Une caméra IMX322</li>
                        <li>Un Workspace conçu pour être repositionnable</li>
                        <li>6 objets (3 ronds, 3 carrés) de différentes couleurs afin d'utiliser notre système de reconnaissance intégré basé sur les couleurs et les formes. Les carrés sont conçus pour pouvoir servir de conteneurs pour les ronds</li>
                        <li>Une pointe de calibration</li>
                    </ul>
                    <p>Ce set confère à Ned2 la possibilité de détecter des objets et de sélectionner ceux avec lesquels il veut interagir. Celui-ci permet d'étudier des sujets comme le traitement d'image, le Machine Learning ou encore l'intelligence artificielle.</p>
  
                    {/* ============================================ */}
                    {/* 1. RASPBERRY PI 4 */}
                    {/* ============================================ */}
                    <div id="raspberry" className="mt-5">
                        <h3 className="text-dark">1. Raspberry Pi 4</h3>
                        <p>Le Raspberry Pi 4 est un micro-ordinateur. Dans notre cas, Robot Ned2, il est directement intégré dans la base du robot. Il exécute ROS Noetic et le package logicielle Niryo. C'est lui qui reçoit les commandes (depuis un PC, via Python, Modbus, NiryoStudio, etc.) et qui pilote les moteurs et capteurs.</p>
                        
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="table-primary"><tr><th>Paramètre</th><th>Donnée</th></tr></thead>
                                <tbody>
                                    <tr><td className="fw-bold">Processeur</td><td>Broadcom BCM 2711, quad-core ARM Cortex-A72 (ARM v8) SoC 64 bits – 1.5GHz</td></tr>
                                    <tr><td className="fw-bold">Mémoire RAM</td><td>4 Go</td></tr>
                                    <tr><td className="fw-bold">Connectique</td><td>2.4GHz et 5GHz IEEE, 2 ports USB 3.0, 2 ports USB 2.0, Port Ethernet (Gigabit), Wifi, Bluetooth 5.0, BLE</td></tr>
                                    <tr><td className="fw-bold">Vidéo & Son</td><td>2 ports micro-HDMI (jusqu'à 4K pris en charge), Port d'affichage MIPI DSI 2 voies, Port d'appareil photo MIPI CSI 2 voies, Port audio stéréo 4 pôles et port vidéo composite</td></tr>
                                    <tr><td className="fw-bold">GPIO</td><td>Embase GPIO 40 broches standard (branchement des capteurs, moteurs, etc.)</td></tr>
                                    <tr><td className="fw-bold">Stockage</td><td>Carte microSD (pour le stockage et le chargement du système d'exploitation)</td></tr>
                                    <tr><td className="fw-bold">Alimentation</td><td>5V (3A minimum)</td></tr>
                                    <tr><td className="fw-bold">Température de fonctionnement</td><td>0 – 50°C</td></tr>
                                    <tr><td className="fw-bold">Logiciel</td><td>Généralement avec Linux (Ubuntu, Raspberry Pi OS), Ubuntu 20.04 pour ROS avec le Niryo Ned2</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center small mt-1">Tableau 15 : Tableau descriptif de la carte Raspberry Pi 4 du robot</p>
                    </div>

                    {/* FIGURE 30 */}
                    <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style="height: 400px; margin-bottom: 1rem;">
                        <img src="/images/Figure30.png" className="img-fluid" style="max-height: 100%; object-fit: contain;" />
                    </div>
                    <p className="text-center small mt-1">Figure 30 : Schéma fonctionnel simplifié montrant le rôle du Raspberry Pi 4 dans le robot Ned2</p>
                    
                    {/* ============================================ */}
                    {/* 2. SERVOMOTEUR XL330 */}
                    {/* ============================================ */}
                    <div id="servomoteur" className="mt-5">
                        <h3 className="text-dark">2. Servomoteur XL330</h3>
                        
                        <div className="table-responsive">
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
                                    <tr><td className="fw-bold">Couple de décrochage</td><td>0.42 N.m (à 3.7V, 1.11A, 0.378 Nm/A)<br /> 0.52 N.m (à 5.0V, 1.47A, 0.354 Nm/A)<br /> 0.60 N.m (à 6.0V, 1.74A, 0.345 Nm/A)</td></tr>
                                    <tr><td className="fw-bold">Pas de vitesse de chargement</td><td>76 tr/min (à 3,7V)<br /> 103 tr/min (à 5,0V)<br /> 123 tr/min (à 6,0V)</td></tr>
                                    <tr><td className="fw-bold">Température de fonctionnement</td><td>-5°C ~ +70°C</td></tr>
                                    <tr><td className="fw-bold">Tension d'entrée</td><td>3.7 - 6.0V (Recommandé : 5.0V)</td></tr>
                                    <tr><td className="fw-bold">Courant de veille</td><td>17 mA</td></tr>
                                    <tr><td className="fw-bold">Mode de fonctionnement</td><td>Mode de contrôle actuel<br /> Mode de contrôle de la vitesse<br />
                                    Mode de contrôle de position (0 ~ 360 [°])<br /> Mode de contrôle de position étendu (multi-tours) <br /> 
                                    Mode de contrôle de position basé sur le courant<br /> Mode de contrôle PWM (mode de contrôle de la tension)</t></tr>
                                    <tr><td className="fw-bold">Connexion physique</td><td>Bus multidrop TTL (logique 3.3V, compatible 5V),<br /> Communication série asynchrone half-duplex TTL (8 bits, 1 arrêt, pas de parité)</td></tr>
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
                    
                    {/* ============================================ */}
                    {/* 3. CAMÉRA IMX322 */}
                    {/* ============================================ */}
                    <div id="camera" className="mt-5">
                        <h3 className="text-dark">3. Caméra IMX322</h3>
                        
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="table-primary"><tr><th>Paramètre</th><th>Donnée</th></tr></thead>
                                <tbody>
                                    <tr><td className="fw-bold">Taille des pixels</td><td>2.8 µm</td></tr>
                                    <tr><td className="fw-bold">Taille de l'objectif</td><td>2.1 mm</td></tr>
                                    <tr><td className="fw-bold">Zone d'image</td><td>≈ 2.24Mpixels (2000 horizontal x 1121 vertical)</td></tr>
                                    <tr><td className="fw-bold">Résolution maximale</td><td>1080p (1920x1080)</td></td></td>tr>
                                    <tr><td className="fw-bold">Résolution et fréquence d'image disponible</td><td>Compressé et format : 320x240@30fps / 352x288@30fps / 640x360@30fps / 640x480@30fps / <br />
                                    Format seulement : 800x600@15fps<br />
                                    Compressé seulement : 800x600@30fps / 1280x720@30fps / 1920x1080@30fps</th></tr>
                                    <tr><td className="fw-bold">Type d'obturateur</td><td>Obturateur électronique / Exposition par trame</td></tr>
                                    <tr><td className="fw-bold">Paramètre ajustable</td><td>Luminosité, contraste, saturation, teinte, balance des blancs, exposition, gain, gamma, netteté, contraste du rétroéclairage</td></tr>
                                    <tr><td className="fw-bold">Format brut</td><td>YUV</td></tr>
                                    <tr><td className="fw-bold">Sensibilité</td><td>5.0V / lux-seconde</td></tr>
                                    <tr><td className="fw-bold">Éclairage minimale</td><td>0.01 lux</td><tr>
                                    <tr><td className="fw-bold">Température de fonctionnement</td><td>-20 ~ 85 °C</td></tr>
                                    <tr><td className="fw-bold">Formats compressés</td><td>H264 & MJPEG</td></tr>
                                    <tr><td className="fw-bold">Plage dynamique</td><td>86 dB</td></tr>
                                    <tr><td className="fw-bold">Rapport Signal/Bruit</td><td>42 dB</td></tr>
                                    <tr><td className="fw-bold">Configuration requise pour les systèmes d'exploitation</td><td>Windows 7 ou supérieur<br /> Linux 2 ou supérieur<br /> Android 4.0 ou supérieur</td></tr>
                                    <tr><td className="fw-bold">Méthodes de contrôle</td><td>NiryoStudio, API Python, TCP/IP</td></tr>
                                    <tr><td className="fw-bold">Type de connexion</td><td>USB 2.0 High Speed - Plug & Play</td></tr>
                                    <tr><td className="fw-bold">Capteur d'image</td><td>CMOS rétroéclairé</td></tr>
                                    <tr><td className="fw-bold">Limites</td><td>Bruit de lecture, Rolling shutter (distorsion si objet rapide)</td></tr>
                                    <tr><td className="fw-bold">Données envoyées au PC</td><td>Envoie un flux numérique (USB ou Ethernet selon module) et le logiciel (ex: NiryoStudio, ou ROS, ...) reçoit une image matricielle</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center small mt-1">Tableau 17 : Description de la caméra IMX322 implémenter sur le robot</p>
                        
                        <p>Plage dynamique (Dynamic Range) : différence entre les niveaux de luminosité de la zone la plus sombre et la zone plus la brillante d'une image. Sa valeur est en décibel et est calculée de la façon suivante : <strong>DR(dB) = 20 · log₁₀(Vsat / Vnoise)</strong></p>
                        <p>Avec V_sat le signal de saturation et V_noise le bruit de fond. Le DR peut aussi être mesuré en stops. Ici 86dB correspond à 14,3 stops. La valeur ici est amplement suffisante pour notre utilisation car pour des capteurs industriels, le DR est d'environ 80dB.</p>
                        <p><a href="https://www.baslerweb.com/fr-fr/learning/yuv-color-coding/">Format brut YUV</a> : correspond au codage des couleurs. Le codage couleur YUV sépare les informations de luminosité (Y) des informations de couleur (U et V) et permet de réduire la quantité de données.</p>
                    </div>
                    
                    {/* ============================================ */}
                    {/* 4. CAPTEUR IR E18 D80NK */}
                    {/* ============================================ */}
                    <div id="capteur-ir" className="mt-5">
                        <h3 className="text-dark">4. Capteur IR E18 D80NK</h3>
                        
                        <div className="table-responsive">
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
                                    <tr><td className="fw-bold">Technologie</td><td>Capteur TOR<br /> Sortie : numérique 0V ou 5V<br /> Temps de réponse : ~2ms</td></tr>
                                    <tr><td className="fw-bold">Précision/incertitude</td><td>Mesure uniquement s'il y a la présence d'un objet ou pas.<br />
                                    Dépend de la couleur, texture et orientation de l'objet :<br /> - Blanc mat : détecté plus loin<br /> - Noir brillant : détecté plus près.<br />
                                    Incertitude typique sur la distance de seuil : ±5-10mm</th></tr>
                                    <tr><td className="fw-bold">Données envoyées au PC</td><td>Sortie : signal logique (0 ou 1)<br /> 0 : rien de détecté<br /> 1 : objet détecté</td></tr>
                                </tbody>
                            <table>
                        </div>
                        <p className="text-center small mt-1">Tableau 18 : Description du capteur IR E18 utilisé avec le robot (et le convoyeur)</p>
                        
                        <h5 className="mt-3">Principe :</h5>
                        <p>Émetteur LED infrarouge + photodiode réceptrice. Mesure basée sur la réflexion de la lumière IR sur un objet (surface de l'objet). Si la lumière réfléchie dépasse un seuil → détection activée (sortie logique).</p>
                        
                        <p>La figure suivante montre comment câbler le capteur au robot.</p>
                        
                        {/* FIGURE 31 */}
                        <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style="height: 200px; margin-bottom: 1rem;">
                            <img src="/images/Figure31.png" className="img-fluid" style="max-height: 100%; object-fit: contain;" />
                        </div>
                        <p className="text-center small mt-1">Figure 31 : Schéma de câblage du capteur IR</p>
                    </div>
                    
                    {/* ============================================ */}
                    {/* 5. CONVOYEUR v2 */}
                    {/* ============================================ */}
                    <div id="convoyeur" className="mt-5">
                        <h3 className="text-dark">5. Convoyeur v2</h3>
                        
                        {/* FIGURE 32 */}
                        <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style="height: 150px; margin-bottom: 1rem;">
                            <img src="/images/Figure32.png" className="img-fluid" style="max-height: 100%; object-fit: contain;" />
                        </div>
                        <p className="text-center small mt-1">Figure 32 : Illustration du convoyeur</p>
                        
                        <div className="table-responsive">
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
                                    <tr><td className="fw-bold">Méthode de contrôle</td><td>Robot : Niryo One, Ned, Ned2<br /> Niryo Studio<br />
                                    PyNiryo, Niryo Modbus, boîtier de commande de convoyeur</th></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center small mt-1">Tableau 19 : Description du convoyeur fournit avec le kit du robot Niryo Ned2</p>
                    </div>
                    

                    /*{ 6. SET VISION }

                    <div id="set-vision" className="mt-5">
                        <h3 className="text-dark">6. Set Vision</h3>
                        
                        {/* FIGURE 33 */}
                        <div className="border rounded bg-light p-2 d-flex align-items-center justify-content-center" style="height: 200px; margin-bottom: 1rem;">
                            <img src="/images/Figure33.png" className="img-fluid" style="max-height: 100%; object-fit: contain;" />
                        </div>
                        <p className="text-center small mt-1">Figure 33 : Set Vision</p>
                        
                        <p>Ce module peut être utilisé avec :</p>
                        <ul>
                            <li>Blockly</li>
                            <li>Python</li>
                        </ul>
                        <p>Et ils seront présentés dans la partie suivante.</p>
                        
                        <p className="fw-bold mt-3">Ce kit est composé de :</p>
                        <div className="table-responsive">
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
            </div>
        </div>
    </div>
  );
}