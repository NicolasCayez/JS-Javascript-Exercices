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
// Nombre de cases des tableaux
console.log(tabUser.length);
console.log(tabUser[2].length);

//EXO PUSH
//TODO: Créer deux variables leNom et lePrenom
let lePrenom = `Bill`;
let leNom = `Boquet`;
//TODO: Créer un tableau laPhrase et on y ajoute via push le nom, le prénom, les initiales
let laPhrase = [];
laPhrase.push(leNom);
laPhrase.push(lePrenom);
laPhrase.push(lePrenom[0]+leNom[0]);
//TODO: afficher le tableau dans la console le nom le prénom les initiales
console.log(laPhrase);

/**
* **************************************
* EXERCICE FONCTIONS
* **************************************
*/

//TODO: Créer une fontcion qui prend un nombre en paramètre
//TODO: la donction doit afficher en console 33+ le nombre
function plus33(n) {
    console.log(n+33);
}
plus33(3);
//TODO: créer une autre fonction qui prend 2 nombres en paramètres
//TODO: addition des 2 nombres
function plusPlus(x,y) {
    console.log(x+y);
}
plusPlus(3,4);

//TODO: Créer une fonction qui calcule la moyenne des 2 notes
function moyenne(a=0,b=0) {
    return (a+b)/2;
}
//TODO: Afficher le résultat de la console
console.log(moyenne(2,13));

//! EXO 5.1.2 : Quizz Function
    //TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
    let something = 44;
    function functionBugParent() {
        let something = 9;
        console.log(something);
        // console.log(lesNews);


        function functionBugEnfant() {
            let lesNews = `il est 99h67`;
        }
    };
    functionBugParent();
    console.log(something);
//! EXO 5.2 : La moyenne de 2 notes 
//TODO: Créer une fonction qui calcule la moyenne de 2 notes
//TODO: Afficher le résultat en console
let noteSport = 8;
let notePhilo = 2;
let resultatMoy = moyenne2notes(notePhilo,noteSport);
// On peut executer la ƒ° AVANT de la définir (pas d'ordre pour décrire les fonctions)
function moyenne2notes(a,b){
    return (a+b)/2;
};
console.log('La moyenne des 2 notes : ',resultatMoy);

//? Fonction Anonyme ? (pas besoin de nom ?)
//! Syntaxe ES6 Fonction fléchée (c'est beaucoup utilisé nottament dans des framework - librairies)
let somme = function(a, b) {
    return a + b;
};
//! Avant la => on a les paramètres, Après la => on a ce que ca return
let leCalcul = (a, b) => a + b;
console.log(leCalcul(1, 2));

document.addEventListener('click',(clickEvent)=>{
    console.log(clickEvent);
    console.log(`Tu as clické ici : 
    X : ${clickEvent.x} - Y : ${clickEvent.y}
    à ce moment : ${clickEvent.timeStamp}`);
});

/**
 * **************************************
 * 7- Les opérateurs
 * **************************************
 */
//! Les booléens : 2 états possibles TRUE ou FALSE (vrai ou faux)
let a = 11;
let b = 99;
console.log("variable a:",a);
console.log("variable b:",b);
//! avec == on demande si a est égal à b
console.log("c'est égal ? :",a == b);
//!pour vérifier si a est différent de b on utilise !=
console.log("C'est inégal ? :",a != b);
//! Ensuite on retrouve les même opérateurs qu'en Mathématique
//! ici on demande si a est strictement suppérieur à b
console.log("Strictement suppérieur ? :",a > b);
//! ici on demande si a est strictement inférieur à b
console.log("Strictement inférieur ? :",a < b);
//! ici on demande si a est inférieur ou égal à b
console.log("Inférieur ou égal ? :",a <= b);
//! ici on demande si a est suppérieur ou égal à b
console.log("suppérieur ou égal ?:",a >= b);
//? Attention : de base JS ne prend pas en compte le typage des variables : 
//? ci dessous le nombre 2 est égal au caractère "2" 🤔
console.log("le chiffre 2 = \"2\"?:",2 == "2");
//! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
//! c'est l'égalité stricte
console.log("égalité stricte ?:",2 === "2");
//! il y a aussi l'inégalité stricte avec l'opérateur !==
console.log("inégalité stricte ?:",2 !== "2");
//? il existe aussi des opérateurs Logiques qui nous permet de combiner des conditions
//? && pour dire ET
//? || pour dire OU
//? ! pour dire Différent de
console.log(3==3 && 3<4);
console.log(3==3 || 3<4);

//!-------CONDITIONS / Operateur TERNAIRES-------
// ? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition qui return une chose ou une autre chose
// ? cela permet de faire une condition if (simple) avec une syntaxe racourcie
let whatIsYourAge = 6;
console.log(whatIsYourAge >18 ? '🍹':'👮‍♂️');
// Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)
let userPremium;
// On check si une variable est définie la condition c'est juste uneVariable ?
console.log(userPremium?'OK 🤙':'Not OK 👺');
// ↑ c'est l'équivalent de ↓
console.log(userPremium ==true?'OK 🤙':'Not OK 👺');
// on doit lui assigner QQCHOSE
userPremium = 'YES';
console.log(userPremium?'OK 🤙':'Not OK 👺');

/**
 * **************************************
 * LE DOM
 * **************************************
 */

// ? On peut utiliser des operateur aussi pour combiner des conditions && (pour ET) || (pour OU)
console.log(3==3&&3<4);
let typeUtilisateur = 'Extra';
console.log(typeUtilisateur == 'Extra' || typeUtilisateur == 'Premium');

//? Une fonction type getElement pour récupérer UN élément par son ID 
let specialP = document.getElementById('special');
console.log(specialP);

//? Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
let tousLesP = document.getElementsByTagName('p');
console.log('La HTMLCollection',tousLesP);
//? Quand on a une HTMLCollection on peut accèder à un certain élément 
console.log('le 3e <p> dans la HTMLCollection : ',tousLesP[2]);

//? Une fonction type getElement pour récupérer tous les élément selon une certaine class dans une HTMLCollection
let tousLesSuper = document.getElementsByClassName('super');
console.log(tousLesSuper);
console.log(tousLesSuper[1]);

let tousLesSuperMaisLePremmierEnFait = document.getElementsByClassName('super')[0];
console.log('tousLesSuperMaisLePremmierEnFait',tousLesSuperMaisLePremmierEnFait);

//? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé)
let lePremierP = document.querySelector('p');
console.log('lePremierP via querySelector : ',lePremierP);

//? Une fonction type querySelector pour récupérer UN élément par son ID
let pSpecial = document.querySelector('#special');
console.log('pSpecial querySelector + ID',pSpecial);

//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par sa classe
let pSuper = document.querySelector('.super');
console.log('pSuper querySelector + class',pSpecial);

//? Une fonction type querySelector pour récupérer TOUS les élément dans une NodeList
// let allParagraphes = document.querySelectorAll('p');
// console.log('allParagraphes querySelector + balise',allParagraphes);
// let allSuper = document.querySelectorAll('.super');
// console.log('allSuper querySelector + class',allSuper);
// console.log('allParagraphes mais on prend le 2e',allParagraphes[1]);

//! Placer des elements dans une page web
//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let allParagraphes = document.querySelectorAll('p');
let laDiv = document.querySelector('.vide');
let premierH1 = document.querySelector('h1');
//! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
// document.body.insertBefore(allParagraphes[9],premierH1);

laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
laDiv.append(allParagraphes[4]);
// // Mais on a aussi la fonction appendChild;
laDiv.appendChild(allParagraphes[0]);

// //! On peut aussi supprimer un élément du DOM
document.body.removeChild(allParagraphes[9]);

//! Créer des elements de texte
const newTxt = document.createTextNode('DU texte Youhouuuuu');
document.body.append(newTxt); //!Créer c'est bien mais il faut placer

//!Créer n'importe quel element HTML
const newH1 = document.createElement('h1');//phase 1 creation
// <h1></h1>
newH1.innerText = "AZERTYUIOP";//phase2 remplissage
// <h1>AZERTYUIOP</h1>
newH1.style.backgroundColor = 'red';
document.body.append(newH1);//phase 3 on place dans la page

const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

// let fiche = document.querySelector('.userProfile');
// let codeHtml = (`<img src=${userData.img}>
//                 <br><p>${userData.name}</p>
//                 <br><p>${userData.email}</p>
//                 <br><p>${userData.age}</p>
//                 <br><p>${userData.dob}</p>
//                 <br><p>${userData.active}</p>
//                 `);
// fiche.innerHTML = codeHtml;
// fiche.style.backgroundColor = 'pink';

// const ficheDiv1 = fiche.createElement('div');
// ficheDiv1.innerHTML = codeHtml;
// document.fiche.append(ficheDiv1);

// JS qui va customiser la div du profile utilisateur
let divUser = document.querySelector('.userProfile');
divUser.style.backgroundColor = `background-color: #4158D0`;
divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
divUser.style.color = `white`;
divUser.style.width = '500px';
divUser.style.margin = 'auto';
divUser.style.padding = '2rem';
//JS crée une image, renseigne la src , modif taille
const imgTemplate = document.createElement('img');
imgTemplate.src = userData.img;
imgTemplate.style.height = '500px';
imgTemplate.style.width = '500px';
divUser.append(imgTemplate);
// JS crée le titre du name
const nameTemplate = document.createElement('h1');//phase 1 creation
nameTemplate.innerText = userData['name'];
divUser.append(nameTemplate);
// JS crée le titre du email
const emailTemplate = document.createElement('h2');//phase 1 creation
emailTemplate.innerText = userData.email;
divUser.append(emailTemplate);
// JS crée le titre du age
const ageTemplate = document.createElement('h2');//phase 1 creation
ageTemplate.innerText = userData.age;
divUser.append(ageTemplate);
// JS crée le titre du dob
const dobTemplate = document.createElement('h2');//phase 1 creation
dobTemplate.innerText = userData.dob;
divUser.append(dobTemplate);
// JS crée le titre du active
const activeTemplate = document.createElement('h2');//phase 1 creation
activeTemplate.innerText = userData.active;
divUser.append(activeTemplate);