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
function exo1IfElse(notes) {
    let moyenne = (notes[0]+notes[1]+notes[2])/notes.length;
    if (moyenne>=15) {
        return `Ta moyenne: ${moyenne} très bien mon petit chouchou`;
    } else if (moyenne>=10) {
        return `Ta moyenne: ${moyenne} ce qui est bien mais pas top`;
    } else {
        return `Ta moyenne: ${moyenne} gros naze`;
    }
}
console.log(exo1IfElse([15,19,8]));

//------------------------------
// ! CORRECTION
function msgMentionBacOfficiel(tabNotes) {
    let moyenneCalc = (tabNotes[0]+tabNotes[1]+tabNotes[2])/tabNotes.length;
    console.log('la Moyenne au Bac : ',moyenneCalc);
    if (moyenneCalc >=16) {
        return "Tu as Gagné !"
    } else if (moyenneCalc >=10 && moyenneCalc<16) {
        return 'Assez Bien'
    } else {
        return 'YO T NUL GRO'
    }
};
console.log(msgMentionBacOfficiel([13,6,3]));


/**
* **************************************
* 2-OBJETS
* **************************************
**/
// ? syntaxe  { uneProprieté:uneValeur } 
// ? dans un objet on assigne avec : plutot qu'avec = 
let user2 = {
    id:3657826,
    'name':'Seagal',
    name2:'STEVEN SISI',
    firstname:'Steven',
    badges:['🎥','👮‍♂️','🎸','🥋','🎤']
};
user2.newProp = 'Test Ajouter Prop';
console.log(user2);

console.log(user2.name);
console.log(user2.id);
console.log(user2.name2);
//*Syntaxe en mode tableau associatif
console.log(user2['id']);
console.log(user2['name2']);

// ? On peut ajouter simplement des propriétés dans un objet avec une assignation de valeur
// ? Si on assigne à une propriété déjà existante cela écrase la valeur
// ? Mais Si on assigne à une propriété non existante cela créee la propriété
user2.dps = 9999;

// ? On peut supprimer une propriété 
delete user2.badges;

// ? une ƒ° native de JS poour connaitre les propriétés d'un objet, hasOwnProperty()
let menuDuJour={
    entree:"Bassine d'Aioli",
    plat:"Rat Adulte",
    dessert:'île Fidji'
};
console.log(menuDuJour);
console.log(menuDuJour.hasOwnProperty('entree'));

//------------------------------
// New ES8 des fonction pour vous aider à manip des Objects
//? Parcourir les Objet  (Depuis javaScript ES8)
//? La Method .keys() qui convertit les clés d'un objet en tableau
//? La Method .values() qui convertit les valeurs d'un objet en tableau
//? La Method .entries() qui renvoit un tableau dans un tableau pour combiner clé - valeur
// const keyUser = Object.keys(userData);
// console.log("les clé de l'objet converties en array : ",keyUser);

// const valuesUser = Object.values(userData);
// console.log("les valeur de l'objet converties en array : ",valuesUser);

// const convertedDataUser = Object.entries(userData);
// console.log("les entrées de l'objet converties en array : ",convertedDataUser);

//------------------------------
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

//------------------------------
// ! CORRECTION
let nameUser = 'Dong Rodrigue';
let ageUser = 65;
let objetUser = {
    'nom' : nameUser,
    'age' : ageUser,
    'passions': {
        passion1:'Le Drift',
        passion2:'Jonquilles'
    }
};
console.log('objet de utilisateur : ',objetUser);
console.log(objetUser.nom);
console.log(objetUser['passions']);// c le taleau passions
console.log(objetUser.passions.passion2);

objetUser.name = 111;
objetUser.age = 'DonDiegoDelavega';
objetUser.passions.passion2 = 'Le Cinéma';

/**
* **************************************
* 3-BOUCLES
* **************************************
**/
// BOUCLE **WHILE**
let unIndex = 0;
while (unIndex < 10) {
    console.log("Le Nombre : " + unIndex);
    unIndex++;
};

//------------------------------
// BOUCLE **FOR**
let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//? Boucle for, on définit un index (ici c'est i), 
//? puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera éxecuter
//? puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le numero de la case que l'on console.log)
for(i=0;i<listeFilm.length;i++){
    console.log('boucle FOR : ',listeFilm[i]);
};

//------------------------------
// BOUCLE **FOREACH**
// let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//? La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// ? On va choisir une variable temporaire pour parcourir les elements du tableau
listeFilm.forEach(unFilm => console.log('boucle forEach Tableau : ',unFilm));

//------------------------------
// BOUCLE **FOR IN** pour les objets
const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};
// on définit une variable temporaire pour parcourir le objet :)
for(let cleObjet in userData){
    console.log(`boucle FOR...IN (objet) : clé:${cleObjet} - valeur :  ${userData[cleObjet]} `);
};

//------------------------------
// TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt
const lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

//------------------------------
//TODO JS map Phase 2
//TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
const textesTab = Array.from(lesTxt);
console.log(textesTab);

//------------------------------
//TODO JS Map Phase 3 (on peut travailler sur un Array)
//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (nom de la variable au choix)
//TODO cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire
textesTab.map((hack) => hack.innerHTML = "<h2>Haha Hihi Hoho</h2>");
// la variable temporaire sert à identifier chaque case les unes après les autres

//------------------------------
// ! CORRECTION
// TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt 
//* On récupère TOUS les <p>
// const lesTxt = document.body.getElementsByTagName("p");
// const lesTxt = document.getElementsByTagName("p");
// console.log(lesTxt);
//HTMLCollection a un système d'indice aussi comme les tableau
// console.log(lesTxt[0]);
// lesTxt[0].innerText = 'SUPER';
//TODO JS map Phase 2 
//TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab 
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
// const textesTab = Array.from(lesTxt);
// console.log(textesTab);
//TODO JS Map Phase 3 (on peut travailler sur un Array)
//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (auChoix)
//TODO cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire
//* On utilise une variable temporaire uneCase pour que map stock chaque <P> dans
//* Cette variable uneCase, on peut s'en servir pour modifier le innerHtml
// textesTab.map(uneCase => uneCase.innerText = "<h1>LOL JE SUIS HACKERMAN</h1>" );
// textesTab.map(uneCase => uneCase.innerHTML = "<h1>LOL JE SUIS HACKERMAN</h1>" );

//? bonus syntaxe en ƒ° fléchée
textesTab.map((x,i) => { // le second paramètre devient le système d'index
    x.style.color = "red";
    console.log(i)
});
console.log(textesTab);
textesTab.map(toto => toto.addEventListener('click',function(){
    console.log("SUPER CA CLICK")
}));

/**
 * **************************************
 * SPREAD OPERATOR
 * **************************************
 */

//! Exemple pour faire une copie 
const tableauOriginal = [1, 2, 3];
const copieTableau = [...tableauOriginal];

console.log(tableauOriginal);
console.log(copieTableau);

//! Exemple pour faire une fusion 
const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, 6];
const tableauFusionne = [...tableau1, ...tableau2]; // [1,2,3,4,5,6,]

//! Test avec des objets
const objetSource = { a: 1, b: 2 };
console.log(objetSource);
const nouvelObjet = { ...objetSource };
console.log(nouvelObjet);

// const tableauOriginal = [1, 2, 3];
const tableauModifie = [...tableauOriginal, 4]; // Ajouter un nouvel élément à la fin du tableau
console.log(tableauModifie);
const tableauOriginal2 = [1, 2, 3];
const tableauModifie2 = [0, ...tableauOriginal2.slice(1)]; // Modifier le premier élément du tableau [0,2,3]
console.log(tableauModifie2);

const tableauOriginal3 = [1, 2, 3];
const tableauModifie3 = [...tableauOriginal3.slice(0, 2), 10, ...tableauOriginal.slice(2)]; // Remplacer un élément spécifique par un autre
console.log(tableauOriginal3);

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

//------------------------------
//TODO Quizz let
// mettre le console.log après le let
let bolide = 'Jaguar'
console.log(bolide);

//------------------------------
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

//------------------------------
//TODO Quizz if-var
// le scope de vitesse n'est pas bon
var car = "Nissan";
if(car==="Nissan"){
    var vitesse = 800;
}
console.log(vitesse);

//------------------------------
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

/**
* **************************************
* 8-DOM Event Click
* **************************************
**/
//TODO react clic 1
let newH1 = document.querySelector('h1');

newH1.addEventListener('click',function(){
    this.innerHTML = ("--🥳--");
});

//------------------------------
//TODO react clic 2
// On pointe vers la balise a modifier
let leH3 = document.querySelector('h3');

//lien ajouter
let add = document.querySelector('.add');
add.addEventListener('click', function(){
    leH3.classList.add('maClasse');
});

//lien supprimer
let del = document.querySelector('.del');
del.addEventListener('click', function(){
    leH3.classList.remove('maClasse');
});

//lien toggle
let tog = document.querySelector('.tog');
tog.addEventListener('click', function(){
    leH3.classList.toggle('maClasse');
});

document.body.addEventListener('click', function(event){
    //on récupère les coordonnées
    let x = event.clientX;
    let y = event.clientY;
    // on crée l'objet image
    let image = document.createElement('img');
    // on définit ses attributs, ici la source
    image.src = 'https://picsum.photos/id/237/536/354';
    //on définit les propriétés de style pour la position
    image.style.position = 'absolute';
    image.style.left = x+'px';
    image.style.top = y+'px';
    //on insère l'image
    document.body.append(image);
});

// ! ---------------------------
// ! CORRECTION et autres
// * addEventListener - click
//? Mode ƒ° => (anonyme + fléchée) 
let leH1 = document.querySelector('#mainTitle');
let selectTitle = false;    //! Un booléen pour savoir si le titre a été cliqué ou non
leH1.addEventListener('click',()=>{
    console.log('ok ca click');
    leH1.innerText = selectTitle ? '-- 🥳 --':'D.O.M Events'; //? condition ternaire si selectTitle est vrai alors smiley sinon dom Events
    selectTitle = !selectTitle; // ? à chaque click le booleen passe à son inverse (pour faire le re click)
});