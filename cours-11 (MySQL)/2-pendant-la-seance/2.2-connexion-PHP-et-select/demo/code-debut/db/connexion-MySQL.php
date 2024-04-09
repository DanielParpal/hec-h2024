<?php 

/**
 * Initialisation de la connexion à la base de données
 */
try {
    // ceux qui sont sur Windows devront utiliser une chaîne
    // de caractères vide comme mot de passe
    $db = new PDO('mysql:host=localhost;dbname=hec', 'root', 'root');
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
$db->exec("set names utf8");

?>