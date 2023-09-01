

// 1 - Créer une fonction simple
// Intitulé: Créer une fonction qui affiche "Bonjour, monde !"
function coucou() {
    return `Bonjour, Monde`;
}
coucou();

// 2 - Créer une fonction avec des arguments
// Intitulé: Créer une fonction qui prend un nom en argument et affiche "Bonjour, [nom] !"
function coucouToi(nom) {
    return `Bonjour, ${nom}`;
}
coucouToi("Nicolas");


// 3 - Créer une fonction avec une valeur de retour
// Intitulé: Créer une fonction qui prend un nombre en argument et renvoie son carré
function carre(n) {
    return `le carré de ${n} est : ${n*n}`;
}
carre(2);


// 4 - Créer une fonction anonyme
// Intitulé: Créer une fonction qui prend un nombre en argument et affiche le double de ce nombre
function foisDeux() {
    return `le double de ${this} est : ${this*2}`;
}
foisDeux.call(6);


// 5 - Créer une fonction imbriquée
// Intitulé: Créer une fonction qui prend un tableau en argument et renvoie un nouveau tableau
// contenant les éléments du tableau d'origine, dans l'ordre inverse
function tabInverse(tab1) {
    let tab2 = [];
    for (let i=(tab1.length -1); i>=0; i--) {
        tab2.push(tab1[i]);
    }
    return tab2;
}
tabInverse([1,2,3,4]);


// 6 - Créer une fonction récursive
// Intitulé: Créer une fonction qui prend un nombre entier en argument et renvoie la somme de
// tous les entiers inférieurs ou égaux à ce nombre

function ajoutMoins(n) {
    if (n>=1) {
        return n + ajoutMoins(n-1);
    } else {
        return n;
    }
}
ajoutMoins(4);



// 7 - Créer une fonction avec des paramètres par défaut
// Intitulé: Créer une fonction qui prend un nombre entier en argument et renvoie le carré de
// ce nombre. Si aucun argument n'est passé, la fonction renvoie 1
function carreBis(n) {
    if (n === undefined) {
        return 1;
    } else {
        return `le carré de ${n} est : ${n*n}`;
    }
}
carreBis(2);


// 8 - Créer une fonction avec des paramètres optionnels
// Intitulé: Créer une fonction qui prend un nombre entier en argument et renvoie le carré de
// ce nombre. Si l'argument n'est pas passé, la fonction renvoie le carré de 5
function optionnel(n) {
    if (n === undefined) {
        return 5*5;
    } else {
        return `le carré de ${n} est : ${n*n}`;
    }
}
optionnel(2);


// 9 - Créer une fonction avec des paramètres nommés
// Intitulé: Créer une fonction qui prend un nombre entier en argument et renvoie le carré de
// ce nombre. Le nom de l'argument est "number".
function carreTer({number}) {
    return `le carré de ${number} est : ${number*number}`;
}
carreTer({number: 3});