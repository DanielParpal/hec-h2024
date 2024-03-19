// 1. Modélisation des données
var tailles = [5, 6, 7, 8, 9, 10, 11];

var botteA = {
	marque: 'Sorel',
	nom: 'CLASSIC MINI PLATFORM Women',
	imageSrc: 'images/ugg-classic-mini-platform.jpeg',
	imageAlt: 'Ugg classic mini platform',
	taillesDispo: [5, 8]
};

var botteB = {
	marque: 'Sorel',
	nom: 'NEUMEL PLATFORM Women ABCDE',
	imageSrc: 'images/ugg-neumel-platform.jpeg',
	imageAlt: 'Ugg neumel platform',
	taillesDispo: [5, 6, 8, 10]
};

var botteC = {
	marque: 'Sorel ABC',
	nom: 'CLASSIC MINI II Women',
	imageSrc: 'images/ugg-classic-mini-ii.jpeg',
	imageAlt: 'Ugg classic mini ii',
	taillesDispo: [7, 8, 9, 10, 11]
};

var botteD = {
	marque: 'Sorel',
	nom: 'CLASSIC ULTRA MINI Women',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [6, 9]
};

var botteE = {
	marque: 'Sorel 12345',
	nom: 'Test Test',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [7]
};

var bottes = [
botteA, botteB, botteC, botteD, botteE,
];

// Génération dynamique de l'état initial
// On débute par la génération des boutons de taille
for (var i = 0; i < tailles.length; i = i + 1) {
	var htmlButton = '<button type="button"';
	htmlButton = htmlButton + 'class="btn btn-outline-dark btn-selection-taille mr-2"';
	htmlButton = htmlButton + 'data-taille="' + tailles[i] + '">' + tailles[i] + '</button>';

	$("#boutonsFiltreTaille").append(htmlButton);
}

// On continue avec la génération des cartes pour les bottes
for (var j = 0; j < bottes.length; j = j + 1) {
	var htmlBotte = '<div class="col-3">';
	htmlBotte = htmlBotte + '<div class="card" style="width: 100%;">';
	htmlBotte = htmlBotte + '<img src="' + bottes[j]['imageSrc'] + '" class="card-img-top" alt="' + bottes[j]['imageAlt'] + '" />';
	htmlBotte = htmlBotte + '<div class="card-body">';
	htmlBotte = htmlBotte + '<h5 class="card-title">' + bottes[j]['marque'] + '</h5>';
	htmlBotte = htmlBotte + '<p class="card-text">' + bottes[j]['nom'] + '</p>';
	htmlBotte = htmlBotte + '<button type="button" class="btn btn-dark">Ajouter</button>';
	htmlBotte = htmlBotte + '</div></div></div>';

	$("#produits").append(htmlBotte);
}


// Définition de la variable qui stock la taille sélectionnée
var tailleSelectionnee = -1;

$("#ajoutPanier").on('click', function() {
	if (tailleSelectionnee == -1) {
		console.log('Vous devez sélectionner une taille');
	} else {
		console.log("La taille sélectionnée est: " + tailleSelectionnee);
	}
	
});

// Votre code viendra ci-dessous
$(".btn-selection-taille").on('click', function() {
	// On remet l'apparence initiale des boutons
	$('.btn-selection-taille').removeClass('btn-dark');
	$('.btn-selection-taille').addClass('btn-outline-dark');

	// On donne l'apparence de sélection au bouton venant d'être cliqué
	$(this).removeClass('btn-outline-dark');
	$(this).addClass('btn-dark');

	// On récupère la valeur la stockée dans data-taille
	tailleSelectionnee = $(this).data("taille");

	// On vide la division contenant les bottes
	$("#produits").html('');

	// On ajoute les bottes pour lesquelles la taille 
	// sélectionnée est disponible
	for (var i = 0; i < bottes.length; i = i + 1) {
		if (bottes[i]["taillesDispo"].includes(tailleSelectionnee)) {
			// on ajoute une carte Bootstrap pour cette botte
			var html = '<div class="col-3">';
			html = html + '<div class="card" style="width: 100%;">';
			html = html + '<img src="' + bottes[i]['imageSrc'] + '" class="card-img-top" alt="' + bottes[i]['imageAlt'] + '" />';
			html = html + '<div class="card-body">';
			html = html + '<h5 class="card-title">' + bottes[i]['marque'] + '</h5>';
			html = html + '<p class="card-text">' + bottes[i]['nom'] + '</p>';
			html = html + '<button type="button" class="btn btn-dark">Ajouter</button>';
			html = html + '</div></div></div>';

			$("#produits").append(html);
		}
	}
});













