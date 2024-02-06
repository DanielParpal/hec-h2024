var panier;
panier = [
	"jeans",
	"t-shirt",
	"chapeau"
];
console.log(panier);

// La valeur numérique débutant à 0 est appelée l'index
// Pour accéder aux éléments et les modifier, on se sert en index
console.log(panier[1]);
console.log(panier[0]);

panier[2] = "casquette";
console.log(panier);

// Ajouter un élément au tableau après sa définition initiale
panier.push("paire de bas"); // 3

// Pour connaître la quantité d'éléments dans un tableau: .length
console.log(panier.length);

// Pour déterminer si un élément est présent dans le tableau
console.log(panier.includes("t-shirt")); // true