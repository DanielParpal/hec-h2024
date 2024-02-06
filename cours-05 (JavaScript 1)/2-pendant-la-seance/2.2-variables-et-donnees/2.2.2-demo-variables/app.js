// Définir une variable et assigner une valeur
var prix;
prix = 100; // mécanisme d'assignation d'une valeur à une variable

// var prix = 100; // ceci est l'équivalent des deux lignes combinées

console.log(prix);

// on assigne une nouvelle valeur à notre variable prix
prix = 90;

console.log(prix);

prix = 100 + 10;

console.log(prix);

// syntaxe très commune
var nouveauPrix = 100;
nouveauPrix = nouveauPrix + 10;
console.log(nouveauPrix);

// piège à éviter
var unAutrePrix = 100;
unAutrePrix + 10;
console.log(unAutrePrix);
