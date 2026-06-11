const fs = require('fs');
const path = require('path');

// Chemin vers votre fichier Robot.jsx
const filePath = path.join(__dirname, 'src', 'pages', 'Robot.jsx');

// Lire le fichier
let content = fs.readFileSync(filePath, 'utf8');

// Compter le nombre de styles avant correction
const beforeCount = (content.match(/style=\{\{/g) || []).length;
console.log(`📝 ${beforeCount} styles trouvés à corriger...`);

// Corriger les styles
content = content.replace(/style=\{\{([^}]+)\}\}/g, (match, styles) => {
    // Remplacer les ; par des ,
    styles = styles.replace(/;\s*/g, ', ');
    // Convertir kebab-case en camelCase
    styles = styles.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    // Ajouter des guillemets autour des valeurs numériques
    styles = styles.replace(/: (\d+)(,|})/g, (_, num, suffix) => `: '${num}px'${suffix}`);
    return `style={{${styles}}}`;
});

// Sauvegarder
fs.writeFileSync(filePath, content);
console.log('✅ Styles corrigés avec succès !');
console.log('🔄 Vérifiez votre fichier Robot.jsx maintenant');