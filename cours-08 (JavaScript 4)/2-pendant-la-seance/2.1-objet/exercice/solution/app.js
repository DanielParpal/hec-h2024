// 2. Modélisez une recette sous la forme d'objet, et assignez-la à une nouvelle variable nommée recette_A.
// Note : vous aurez besoin des clés titre, description et url pour construire votre objet.
var recette_A = {
	titre: "MUFFINS DOUBLE CHOCOLAT AUX BANANES",
	description: "Et oui! Double chocolat!",
	url: "https://www.chocolatsfavoris.com/recettes/muffins-double-chocolat-aux-bananes",
};

// 3. Affichez votre objet dans la console.
console.log(recette_A);

// 4. Affichez le titre de votre recette dans la console.
console.log(recette_A["titre"]);

// 5. Affichez sa description.
var maCle = "description";
console.log(recette_A[maCle]);

// 6. Modélisez une autre recette sous la forme d'objet, et assignez-là à une nouvelle variable nommée recette_B.
var recette_B = {
	titre: "BISCUITS THUMBPRINT VANILLE ET CHOCOLAT",
	description: "Petits biscuits chocolatés!",
	url: "https://www.chocolatsfavoris.com/recettes/biscuits-thumbprint-vanille-et-chocolat",
};

// 7. Affichez votre objet dans la console.
console.log(recette_B);

// 8. Mettez en place une condition : 
// - si le url de la recette B est une chaîne de caractères vide, affichez dans la console : le lien est brisé pour la recette B
// - sinon, affichez dans la console le lien url vers la recette B
// Assurez-vous de tester votre condition avec différentes valeurs de url.
if (recette_B["url"] == "") {
	console.log("Le lien est brisé pour la recette B");
} else {
	console.log(recette_B["url"]);
}






