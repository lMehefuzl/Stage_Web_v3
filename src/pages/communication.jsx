import React from 'react'

const Communication = () => {
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
          <a className="nav-link px-0 py-1 text-dark" href="#modbus-tcp"><i className="bi bi-diagram-3 text-primary me-2" />Communication Modbus/TCP</a>
          <a className="nav-link px-0 py-1 text-dark mt-2" href="#bobines"><i className="bi bi-circle-square text-primary me-2" />1. Les bobines (coils)</a>
          <a className="nav-link px-0 py-1 text-dark mt-2" href="#entrees-discretes"><i className="bi bi-toggle2-on text-primary me-2" />2. Entrées discrètes</a>
          <a className="nav-link px-0 py-1 text-dark mt-2" href="#registres-holding"><i className="bi bi-database text-primary me-2" />3. Registres de holding</a>
          <a className="nav-link px-0 py-1 text-dark mt-2" href="#registres-entrees"><i className="bi bi-database-fill text-primary me-2" />4. Registres d'entrées</a>
          {/* =
          <div className="border-top mt-3 pt-2">
            <p className="text-primary fw-semibold small mb-1"><i className="bi bi-image text-primary me-1" /> Figures :</p>
            <div className="ps-3">
              <a className="nav-link px-0 py-1 text-secondary small" href="#figure68">Figure 68</a>
            </div>
          </div>
          */}
        </nav>
      </div>
    </div>
    {/* contenu principal */}
    <div className="col-md-9 ps-0 ps-md-2 pe-0">
      <div id="communication" className="bg-white rounded-3 shadow-sm p-4 mb-4">
        <h2 className="text-primary border-bottom pb-2 mb-4"><i className="bi bi-wifi" /> COMMUNICATION LOGICIELLE</h2>
        <p>Le schéma ci-dessous représente, de façon très simple, la communication logicielle avec NiryoStudio, le robot et ses communications.</p>
        {/* FIGURE 68 */}
        <div id="figure68" className="border rounded bg-light p-2 d-flex align-items-center justify-content-center mb-1" style={{height: 300}}>
          <img src="images/Figure68v2.png" className="img-fluid" style={{maxHeight: '100%', objectFit: 'contain'}} />
        </div>
        <p className="text-center small mt-1">Figure 68 : Schéma répertoriant les méthodes de communication</p>
        <p>Dans ce chapitre, on va se concentrer sur le mode <strong>« Modbus/TCP »</strong>.</p>
        <p>Ned2 fonctionne en permanence sur <strong>Modbus TCP Server</strong> qui permet à Ned2 de communiquer avec un PLC ou un autre ordinateur du même réseau.</p>
        <p>Le Ned2 peut être configuré comme esclave Modbus TCP.<br />
          Depuis un automate (PLC) ou un SCADA, tu envoies des registres Modbus → le robot les interprète (ex. "aller en position 1", "ouvrir gripper").<br />
          Tu peux aussi lire des états (capteur actif, position atteinte, etc.).</p>
        <h5 className="mt-3">Comment ça marche :</h5>
        <ul>
          <li>Configurer le robot en mode Modbus TCP (via NiryoStudio)</li>
          <li>Un maître Modbus (PLC, PC avec logiciel SCADA, ou Python/MATLAB avec une lib Modbus) se connecte à l'IP du robot sur le port TCP 502</li>
          <li>Le maître écrit/lit dans les registres du Ned2 pour commander ou récupérer des infos</li>
        </ul>
        <p>Le serveur Modbus/TCP fonctionne sur le port <strong>5020</strong> par défaut. Il a été construit sur la bibliothèque <a href="https://pymodbus.readthedocs.io/en/latest/index.html">pymodbus</a>. Cela vous permet de faire communiquer Ned2 avec un automate informatique ou un autre ordinateur sur le même réseau.</p>
        <h5 className="mt-3"><a href="https://docs.niryo.com/api/modbus/use-the-modbus-tcp-server/#section-header-two-38g3s">Utilisation du serveur Modbus TCP</a></h5>
        <p>Le Ned2 exécute <strong>en permanence un serveur Modbus TCP.</strong><br />
          Ce serveur permet à un <strong>PLC</strong> ou à un autre ordinateur (client Modbus TCP) de communiquer avec le robot.</p>
        <p>Le serveur Modbus TCP du Ned2 utilise quatre types de <strong>« datastores »</strong> (zones de registres) standard de Modbus :</p>
        <ul>
          <li><strong>Coils (bobines)</strong> — lecture / écriture (READ/WRITE)</li>
          <li><strong>Entrées discrètes</strong> — lecture seule (READ-ONLY)</li>
          <li><strong>Registres de holding</strong> — lecture / écriture (READ/WRITE)</li>
          <li><strong>Registres d'entrée</strong> — lecture seule (READ-ONLY)</li>
        </ul>
        <p>Les entrées discrètes et les registres d'entrées sont des tables <strong>READ-ONLY</strong>. Ceux-ci ont été utilisés pour conserver l'état des robots.</p>
        <p>Le registre des bobines et des registres des holdings sont des tableaux de <strong>LECTURE/ÉCRITURE</strong>. Ceux-ci ont été utilisés pour donner des commandes utilisateur au robot. Par conséquent, ces 2 tables ne contiennent pas l'état du robot, mais la dernière commande donnée.</p>
        
        {/* 1. LES BOBINES (COILS) */}
        
        <div id="bobines" className="mt-5">
          <h3 className="text-dark fw-bold">1. Les bobines (coils)</h3>
          <p>Chaque adresse contient une valeur de <strong>1 bit</strong>.</p>
          <p><strong>LIRE/ECRIRE</strong> (les valeurs stockées correspondent à la dernière commande donnée).</p>
          <p>Les fonctions modbus acceptées :</p>
          <ul>
            <li><strong>0x01 :</strong> LIRE_COILS</li>
            <li><strong>0x05 :</strong> WRITE_SINGLE_COIL</li>
          </ul>
          <p>Ce datastore peut être utilisé pour définir et lire différents états.</p>
        </div>
        
        {/* 2. ENTRÉES DISCRÈTES */}
        
        <div id="entrees-discretes" className="mt-5">
          <h3 className="text-dark fw-bold">2. Entrées discrètes</h3>
          <p>Chaque adresse contient une valeur de <strong>1 bit</strong>.</p>
          <p><strong>LECTURE-SEULEMENT</strong>.</p>
          <p>Les fonctions Modbus acceptées :</p>
          <ul>
            <li><strong>0x02 :</strong> READ_DISCRETE_INPUTS</li>
          </ul>
          <p>Ce datastore peut être utilisé pour lire différents états.</p>
        </div>
        
        {/* 3. REGISTRES DE HOLDING */}
        
        <div id="registres-holding" className="mt-5">
          <h3 className="text-dark fw-bold">3. Registres de holding</h3>
          <p>Chaque adresse contient une valeur de <strong>16 bits</strong>.</p>
          <p><strong>LIRE/ÉCRIRE</strong> (les valeurs stockées correspondent à la dernière commande donnée).</p>
          <p>Les fonctions Modbus acceptées :</p>
          <ul>
            <li><strong>0x03 :</strong> READ_HOLDING_REGISTRES</li>
            <li><strong>0x06 :</strong> ÉCRIRE_SINGLE_REGISTRE</li>
          </ul>
          <p>Ce datastore peut être utilisé pour définir et lire différents états.</p>
        </div>
        
        {/* 4. REGISTRES D'ENTRÉES */}
        
        <div id="registres-entrees" className="mt-5">
          <h3 className="text-dark fw-bold">4. Registres d'entrées</h3>
          <p>Chaque adresse contient une valeur de <strong>16 bits</strong>.</p>
          <p><strong>LECTURE-SEULEMENT</strong>.</p>
          <p>Les fonctions Modbus acceptées :</p>
          <ul>
            <li><strong>0x04 :</strong> READ_INPUT_REGISTERS</li>
          </ul>
          <p>Ce datastore peut être utilisé pour lire différents états.</p>
        </div>
        <p>Pour connaître les registres Modbus TCP du Ned2 ainsi que des exemples, se référer aux sections correspondantes sur le lien suivant :<br />
          <a href="https://docs.niryo.com/api/modbus/use-the-modbus-tcp-server/#section-header-two-g2hq">https://docs.niryo.com/api/modbus/use-the-modbus-tcp-server/#section-header-two-g2hq/</a></p>
        
        {/* PACKAGE PYMODBUS */}
        
        <h3 className="text-dark fw-bold mt-5"><a href="https://pymodbus.readthedocs.io/en/latest/index.html">Package PyModbus</a></h3>
        <p>PyModbus est une implémentation complète du protocole Modbus offrant un client et un serveur avec des API et des simulateurs synchrones/asynchrones.</p>
        <p>Les différentes versions suivent le modèle X.Y.Z :</p>
        <ul>
          <li><strong>Z :</strong> aucun changement d'API (corrections de bogues et améliorations mineures)</li>
          <li><strong>Y :</strong> changement d'API (corrections de bogues et améliorations importantes)</li>
          <li><strong>X :</strong> changements majeurs dans l'API et/ou la méthode pour utiliser pymodbus</li>
        </ul>
        <p>Elle permet de simuler des appareils Modbus (serveur/esclave).</p>
        <p>PyModbus se compose en 5 parties :</p>
        <ul>
          <li><strong>Client :</strong> connectez-vous à votre ou vos appareils. Envoyer des requêtes Modbus (lecture/écriture de bobines, registres, etc.)</li>
          <li><strong>Serveur :</strong> simulez votre ou vos appareils</li>
          <li><strong>REPL :</strong> un simulateur client/serveur basé sur du texte de ligne de commande</li>
          <li><strong>Simulateur :</strong> un simulateur de serveur basé sur HTML</li>
          <li><strong>Exemples :</strong> montre à la fois une utilisation simple et avancée</li>
        </ul>
        <p>Pour en savoir plus sur ces parties, cliquez sur ce lien :
          <a href="https://pymodbus.readthedocs.io/en/latest/index.html">https://pymodbus.readthedocs.io/en/latest/index.html</a></p>
        <h5 className="mt-3">Caractéristiques communes :</h5>
        <ul>
          <li>Implémentation complète du protocole standard modbus</li>
          <li>Prise en charge des codes de fonction personnalisés</li>
          <li>Prise en charge de la communication série (rs-485), TCP, TLS, UDP</li>
          <li>Prise en charge de toutes les trames standard : socket, RTU, RTU-over-TCP, TCP, ASCII</li>
          <li>N'a pas de dépendances de tiers, à part la pysérie (facultatif)</li>
          <li>Projet très léger</li>
          <li>Nécessite Python &gt;= 3.10</li>
          <li>Suite de tests complète, qui teste tous les coins de la bibliothèque</li>
          <li>Testé automatiquement sur Windows, Linux et MacOS combinés avec python 3.10 - 3.14</li>
          <li>API fortement typée (py.typed present)</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default Communication