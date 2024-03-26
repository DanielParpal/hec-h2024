<?php 

// Guillemets simples
echo 'Daniel';
echo '<br>';

// Guillemets doubles
echo "Parpal";
echo "<br>";

$prenom = 'Daniel';
$nom_de_famille = 'Parpal';
echo 'Mon prénom est $prenom';
echo "<br>";

// Démonstration de l'interpolation
echo "Mon prénom est $prenom, mon nom de famille est $nom_de_famille";
echo "<br>";

// Démonstration de la concaténation (le point au lieu du plus)
echo 'Mon prénom est ' . $prenom . ', mon nom de famille est ' . $nom_de_famille;
echo "<br>";

?>