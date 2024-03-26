<?php 

// Définition d'un tableau en PHP
$produits = [
	"Jeans",
	"Chapeau",
	"T-shirt"
];
var_dump($produits);
echo "<br>";

// Pour accéder à un élément, on utilise la même syntaxe qu'en JS
echo $produits[1];
echo "<br>";

echo $produits[0];
echo "<br>";

// Même chose pour la modification d'éléments
$produits[2] = "Chandail";
var_dump($produits);
echo "<br>";

// Ajout d'un élément
$produits[] = "Souliers";
var_dump($produits);
echo "<br>";

// Pour déterminer la quantité d'éléments
echo count($produits);
echo "<br>";

?>