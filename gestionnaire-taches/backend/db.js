const mysql = require('mysql2');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Créer une connexion MySQL avec les variables d'environnement
const db = mysql.createConnection({
  host: process.env.DB_HOST, // L'hôte de la base de données
  user: process.env.DB_USER, // L'utilisateur de la base de données
  password: process.env.DB_PASSWORD, // Le mot de passe de l'utilisateur
  database: process.env.DB_NAME // Le nom de la base de données
});

// Vérifier si la connexion à la base de données réussit
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// Exporter l'objet de connexion pour pouvoir l'utiliser ailleurs dans le projet
module.exports = db;
