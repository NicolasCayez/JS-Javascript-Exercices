console.log('Bienvenue dans Javascript');

/**
* **************************************
* 1-CONDITION IF ELSE
* **************************************
**/
// TODO: Créer une fonction qui reçoit un tableau de 3 notes et qui calcule une moyenne entre ces 3 notes
// TODO: Dans cette ƒ°, SI la moyenne est supérieure ou égale à 15 on renvoi une string (très Bien)
// TODO: Dans cette ƒ°, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une string (assez Bien)
// TODO: Dans cette ƒ°, SINON renvoi une string (refus)
function exo1IfElse([a,b,c]) {
    let moyenne = (a+b+c)/3;
    if (moyenne>=15) {
        return `Ta moyenne: ${moyenne} très bien mon petit chouchou`;
    } else if (moyenne>=10) {
        return `Ta moyenne: ${moyenne} ce qui est bien mais pas top`;
    } else {
        return `Ta moyenne: ${moyenne} gros naze`;
    }
}
console.log(exo1IfElse([15,19,8]));

/**
* **************************************
* 2-OBJETS
* **************************************
**/
// ! EXO 8 OBJECTS
// TODO : Faire l'exo avec le User et les passions en mode objet
// (un objet user avec des propriétés pour le nom age et passions qui est lui aussi un objet avec 2 propriétés
let user = {
    nom: "Nico",
    age: 42,
    passions: {
        passion1: "Jouer au Kamoulox",
        passion2: "Photographier les réverbères en slip léopard"
    }
}
console.log(user);

/**
* **************************************
* 3-BOUCLES
* **************************************
**/
// TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt
let lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

//TODO JS map Phase 2
//TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
let textesTab = Array.from(lesTxt);
console.log(textesTab);

//TODO JS Map Phase 3 (on peut travailler sur un Array)
//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (nom de la variable au choix)
//TODO cette fonction fléchée elle va modifier le innerHTML ou
textesTab.map((hack) => hack.innerHTML = "<h1>Haha Hihi Hoho</h1>");

/**
* **************************************
* 5-VAR LET CONST
* **************************************
**/

//TODO Quizz var
// la variable est redéclarée et réaffectée. On enlève le second var
var voiture = "Renault";
console.log(voiture);
voiture = "BMW";
console.log(voiture);



//TODO Quizz let
// mettre le console.log après le let
let bolide = 'Jaguar'
console.log(bolide);

//TODO Quizz function-var
// le scope de la variable n'est pas bon il faut déclarer avant ou retourner la valeur.
var uneVoiture
function choixVoiture(){
    uneVoiture = "Harley Davidson"
}
choixVoiture();
console.log(uneVoiture);
// OU

function choixVoiture(){
    uneVoiture = "Harley Davidson"
    return uneVoiture;
}
console.log(choixVoiture());

//TODO Quizz if-var
// le scope de vitesse n'est pas bon
var car = "Nissan";
if(car==="Nissan"){
    var vitesse = 800;
}
console.log(vitesse);

//TODO Quizz if-let
// le scope du second supercar est limité à la boucle if
let superCar = 'BMW';
const superModel = 'Sport';
if(superCar =='BMW'){
    const superVitesse = 900;
    let superCar = "Citroen";
    console.log(superCar);
}
console.log(superCar);