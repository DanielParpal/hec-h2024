// 2. Modéliser un tableau avec 3 titres de recette.
var titres = [
	"GÂTEAU-POUDING AU CHOCOLAT",
	"POCHETTES DÉJEUNERS BANANES, FRAISES ET CHOCOLAT",
	"FUDGE AUX FRAMBOISES"
];

// console.log(titres);

// 3. Mettez en place une boucle permettant de parcourir chacun des éléments.
// Note : gardez en tête les sous-concepts requis pour y arriver.
for (var i = 0; i < titres.length; i = i + 1) {
	console.log('Ce soir, je mangerai: ' + titres[i]);
}