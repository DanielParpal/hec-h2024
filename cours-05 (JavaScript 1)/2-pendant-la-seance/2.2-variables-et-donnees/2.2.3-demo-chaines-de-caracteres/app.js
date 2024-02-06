var prenom;
// prenom = "Daniel"; // délimiteur ""
prenom = 'Daniel'; // délimiteur ''
console.log(prenom);

// on utilise un certain type de guillemet lorsque
// l'autre type est à l'intérieur de la chaîne
console.log("J'ai faim"); 
console.log('Il a dit: "Bonjour"');

// Échappement
console.log('Il a dit: "J\'ai faim"');

// Concaténation
var nomDeFamille = "Parpal";
// Bienvenue, Daniel Parpal
console.log("Bienvenue, " + prenom + " " + nomDeFamille);