<?php 

// objet javascript
// var magasin = {
// 	adresse: "123 sesame street",
// 	gerant: "Paul",
// };

// équivalent PHP: tableau associatif
// différence #1 vs JS: crochets carrés au lieu d'accolades
// différence #2 vs JS: les clés sont spécifiées en chaînes de caractères
// différence #3 vs JS: le délimiteur entre les clés et les valeurs
// est une flèche et non pas un :
$magasin = [
	"adresse" => "123 sesame street",
	"gerant" => "Paul"
];

$cours_1 = [
	"date" => "15 avril 2024",
	"instructeur" => "Martha",
	"titre" => "X-fit (klub)"
];

$cours_2 = [
	"date" => "18 avril 2024",
	"instructeur" => "William",
	"titre" => "Boxe cardio"
];

$cours = [$cours_1, $cours_2];

include 'app.html.php';

// var_dump($magasin);
// echo "<br>";

// // Accéder à un élément dans un tableau associatif
// echo $magasin["adresse"];
// echo "<br>";
// echo $magasin["gerant"];
// echo "<br>";

// // Modifier la valeur d'une propriété dans le tableau associatif
// $magasin["gerant"] = "Lucie";
// echo $magasin["gerant"];
// echo "<br>";

// // Ajouter une nouvelle propriété
// $magasin["heures_ouverture"] = "9h a 17h, tous les jours";
// var_dump($magasin);
// echo "<br>";


?>





