<?php 

// Initialisation de la connexion à la base de données
include 'db/connexion-MySQL.php';

// Sélection des données
include 'db/select-publications.php';

// Affichage des données sélectionnées
include 'views/app.html.php';

?>


