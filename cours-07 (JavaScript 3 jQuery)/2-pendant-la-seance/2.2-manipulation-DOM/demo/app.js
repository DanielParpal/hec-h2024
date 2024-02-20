// Sélection de la bannière rouge
// On masque la bannière rouge
$("#alerte-sans-rabais-20").hide();

// Sélection de la bannière verte
// On affiche la bannière verte
$("#alerte-avec-rabais-20").show();

// Un autre modificateur important
// .append() -> complémentaire au .html()
// Précision: HTML valide
// Suggestion: si vous avez une longue chaîne de caractères, construisez-la
// dans un premier temps avec une variable et la concaténation
// Très utile pour le TP2
$("#alerte-avec-rabais-20").append("<div><span>ABC</span></div>");


