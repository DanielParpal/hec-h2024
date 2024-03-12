// Modélisation d'un tableau
var titres = [
	"Manteau à Capuchon Down Sweater de Patagonia - Femmes",
	"Down Sweater de Patagonia - Femmes"
];

console.log(titres);

console.log(titres[1]);


// Modélisation d'un objet
// question: modélisation du prix?
var manteau = {
	titre: "Manteau à Capuchon Down Sweater de Patagonia - Femmes",
	prix: 409,
	evaluation: 5,
	variantesCouleur: ["bleu", "noir", "rouge"],
};

console.log(manteau);

// Comment accéder à une propriété
console.log(manteau["titre"]);
var maCle = "titre";
console.log(manteau[maCle]);
console.log(manteau.titre);

console.log(manteau["variantesCouleur"][0]);

// Comment modifier la valeur d'une propriété
manteau["evaluation"] = 4.5;
console.log(manteau);

manteau["prix"] = manteau["prix"] + 20;
console.log(manteau["prix"]);

manteau.variantesCouleur.push("gris");
console.log(manteau);

// Si on veut ajouter une nouvelle propriété à l'objet
manteau["imageSrc"] = "https://cdn.images/image.jpg";
console.log(manteau);





