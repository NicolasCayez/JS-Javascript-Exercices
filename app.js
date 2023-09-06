console.log('Bienvenue dans Javascript');

/**
 * **************************************
 * 1-SETUP : DEFER
 * **************************************
 ** Antérieur à la vague HTML5, l'attribut defer existait déjà dans les "anciennes" versions
 ** d'Internet Explorer. Il signifie que le navigateur 
 *! peut charger le(s) script(s) en parallèle, sans stopper le rendu de la page HTML.
 *! Contrairement à async, l'ordre d'exécution des scripts est préservé,
 *! en fonction de leur apparition dans le code source HTML. 
 *? Il est par ailleurs reporté à la fin du parsing du DOM (avant l'événement DOMContentLoaded).
 * De nos jours, cet attribut présente moins d'intérêt car les navigateurs
 * disposent par défaut de techniques internes pour télécharger les 
 * ressources en parallèle sans nécessairement attendre les autres.
 */

/**
 * **************************************
 * SETUP : ASYNC
 * **************************************
 * *Nouveau venu dans HTML5, async signifie que le script pourra être exécuté de façon asynchrone,
 ** dès qu'il sera disponible (téléchargé). Cela signifie aussi que le navigateur 
 ** n'attendra pas de suivre un ordre particulier si plusieurs balises <script> sont présentes,
 ** et ne bloquera pas le chargement du reste des ressources, notamment la page HTML. 
 *? L'exécution aura lieu avant l'événement load lancé sur window 
 *? et ne sera valable que pour les scripts externes au document, 
 *? c'est-à-dire ceux dont l'attribut src mentionne l'adresse.
 *? Ce comportement est bien pratique pour gagner en temps de chargement,
 *! il faut cependant l'utiliser avec prudence : si l'ordre n'est pas respecté,
 *! un fichier exécuté de façon asynchrone ne pourra attendre le chargement d'un précédent,
 *! par exemple s'il en utilise des fonctions voire un framework.
 *! Il ne faudra pas non plus compter appeler document.write() pour écrire dans le document HTML
 *! puisqu'il sera impossible de savoir à quel moment les actions seront déclenchées.
 */ 


//  EXERCICE VARIABLES
let nombre = 42;
let ilsFlottentTousEnBas = 1.25;
let tableau = [1,2,4,12];
let phrase = `Coucou les loulous`;
let objet = {
    prenom: `Bob`,
    nom: `L'éponge`
}
let bouboule = true;

console.log(nombre);
console.log(ilsFlottentTousEnBas);
console.log(tableau[1]);
console.log(phrase);
console.log(`Salut c'est ${objet.prenom} ${objet.nom}`);
console.log(bouboule);


let hello = function (texte) { console.log(texte)};
hello(`hello world`);
/**
 * **************************************
 * ! CORRECTION
 * 2-VARIABLES
 * **************************************
 */
//! On déclare une variable avec let ou const (ou var dans les anciennes versions de JS)
let maVariable;
//! On assigne une valeur à une variable avec le signe =
maVariable = 'Hello World';
console.log(maVariable);

//? Les types de variables (JS utilise un typage dynamique)
let uneString = 'MDR';
let unNombre1 = 11;
let unBooleen = true;
let unTableau = [1,2,3,'Hello'];
let unObjet = { 
    propriete1 :  22,
    propriete2:'LOL'
};
//! Spoiler : on déclare une fonction comme ceci 👇
function testFunction (){
    console.log('Fonction de Test ?');
}
//? Bonus 💡: on peut placer une fonction dans une variable
let uneFonction = function maFonction (){
    console.log('Fonction qui affiche HelloWorld');
}
console.log(uneString);
console.log(unNombre1);
console.log(unBooleen);
console.log(unTableau);
console.log(unObjet);
console.log(unObjet.propriete2);

/**
 * **************************************
 * 3-CALCULS
 * **************************************
 */
console.log(42*675);
let unChiffre = 9;
let unNombre = 33;
console.log(unChiffre*unNombre);
//! Ne pas se faire troll par les nombre à ,
console.log(2,9+1,3);
//? La notation en point : 
console.log(2.9+1.3);
console.log((1+1)-(2*3)/2);
console.log(10%2);
let unCompteur = 0;
console.log(unCompteur+1);
unCompteur = 0;
unCompteur = unCompteur+1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur = unCompteur + 1
unCompteur +=1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur + 1
unCompteur ++;
console.log(unCompteur);
//* unCompteur - 1
unCompteur --;
console.log(unCompteur);
//* unCompteur = unCompteur + 10
unCompteur +=10;
console.log(unCompteur);
//* unCompteur = unCompteur x 10
unCompteur *=10;
console.log(unCompteur);
//* unCompteur = unCompteur / 10
unCompteur /=10;
console.log(unCompteur);
//* unChiffre puissance 9
console.log(unChiffre**9);

/**
 * **************************************
 * EXERCICE PHRASE
 * **************************************
 */

let nom = `Donatello`;
let date = `05 Septembre`;
let contenuCommande = `Pizza Calzone`;
let dadJoke = `Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils ?\n"Suis ta pâte et tout ira bien !"`;

let sumUpOrderPhrase1 = `Le `+date+`\nBonjour `+ nom+`\nMerci d'avoir commandé une `+ contenuCommande+` Chez "La Pizzeria Raffinata"\nElle arrivera chez vous d'ici 35 minutes\n`+ dadJoke;
console.log(sumUpOrderPhrase1);

let sumUpOrderPhrase2 = `Le ${date}\nBonjour ${nom}\nMerci d'avoir commandé une ${contenuCommande} Chez "La Pizzeria Raffinata"\nElle arrivera chez vous d'ici 35 minutes\n${dadJoke}`;
console.log(sumUpOrderPhrase2);

let sumUpOrderPhrase3 = "Le "+date+"\nBonjour "+ nom+"\nMerci d'avoir commandé une "+ contenuCommande+" Chez \"La Pizzeria Raffinata\"\nElle arrivera chez vous d\'ici 35 minutes\n"+ dadJoke;
console.log(sumUpOrderPhrase3);

/**
 * **************************************
 * EXERCICE ARRAYS
 * **************************************
 */
//TODO: Créer une variable pour un nom
let nom1 = `John`;
//TODO: Créer une variable pour un âge
let age = 42;
//TODO: Créer une variable passions qui est un tableau qui contient 2 chaines de caractères (au choix)
let passions = [`Le Bilboquet`, `Le Beach-Curling`];
//TODO: Puis créer une variable tabUser qui est un tableau qui contient les variables du nom, de l'âge est des passions
let tabUser = [nom1, age, passions];
//TODO: En console on affiche le tabUser
console.log(tabUser);
//TODO: En passant par tabUser on veut afficher en console uniquement les passions
console.log(tabUser[2]);
//TODO: En passant par tabUser on veut afficher en console uniquement la 2ème passion
console.log(tabUser[2][1]);