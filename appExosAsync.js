//?-----------------------------------------------------------------------------------------------
//? Créer un programme permettant de Calculer l’IMC d’une personne                              --
//?-----------------------------------------------------------------------------------------------

//TODO : - Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille
class Imc {
    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }
    //TODO : - Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul (à 2 nombre après
    //TODO :   la virgule si possible) IMC = Poids (kg) / (Taille(m) x Taille(m))
    getImc() {
        let calculIMC = this.poids/((this.taille)*(this.taille));
        return calculIMC.toFixed(2);
    }
    //TODO : - Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console :
    //TODO :   Le nom de la personne, son poids, sa taille et son imc dans une phrase
    display() {
        console.log(`${this.nom} (${this.poids}kg, ${this.taille}m) a un IMC de : ${this.getImc()}.`)
    }
}
//TODO : - En dehors de la class (donc dans le programme principal), récupérer la variable list (un
//TODO :   tableau de nouvelle instances de la class) (voir discord ou " )
const list = [
    new Imc('Nicolas', 70, 1.80),
    new Imc('Bob l\'Eponge', 0.02, 0.13),
    new Imc('Passe-Partout', 27, 1.20),
    new Imc('Michael Jordan', 98, 1.98),
    new Imc('Emmanuel Yarborough', 363, 2.03)
];
//TODO : - Trouver un moyen de parcourir les éléments dans la variable list, sur chaque element
//TODO :   utiliser la fonction display
const lesImc = function(listeImc) {
    for (personne of listeImc) {
        personne.display();
    }
}

lesImc(list);



//?-----------------------------------------------------------------------------------------------
//? Exo Class PME                                                                               --
//?-----------------------------------------------------------------------------------------------

//? Gérer une PME
//? CDC
//? Un Salarié a un nom, prénom, âge, salaire mensuel
//? Il est payé sur N mois.
//? En plus il y a XXX de charges
//? Une Pme c’est un nom, une équipe de plusieurs salariés
//? Grace à ses ventes elle a des revenus R
//? Mais aussi … :
//? - des frais fixes FF (impôts etc…)
//? - Des frais d’achats de matériel et de logiciels FA

//TODO : - Créer une classe Pme et une classe Employe
class Employe {
    constructor(nom, prenom, age, salaireMensuel, nbMoisPaye, tauxCharges) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
        this.nbMoisPaye = nbMoisPaye;
        this.tauxCharges = tauxCharges;
    }
}

class Pme {
    constructor(nom, equipe, revenus, fraisFixes, fraisAchats) {
        this.nom = nom;
        this.equipe = equipe;
        this.revenus = revenus;
        this.fraisFixes = fraisFixes;
        this.fraisAchats = fraisAchats;
    }
    bilan () {
        console.log(`------------------Bilan de la PME------------------`)
        // Cout Initial
        let coutInitial = this.fraisFixes + this.fraisAchats;
        console.log(`${this.nom} - : Cout Initial : ${coutInitial} $`);
        // Cout total équipe
        let CoutTotalEquipe = 0;
        for (let esclave of this.equipe) {
            CoutTotalEquipe += (esclave[`salaireMensuel`]*esclave[`nbMoisPaye`]*(1+esclave[`tauxCharges`]));
        }
        console.log(`${this.nom} - : Cout Total Equipe : ${CoutTotalEquipe} $`);
        // Ventes
        console.log(`${this.nom} - : Ventes : ${this.revenus} $`);
        // Bilan
        let bilan = this.revenus - coutInitial - CoutTotalEquipe;
        console.log(`${this.nom} - : Bilan : ${bilan} $`);
    };
}

//TODO : - Utiliser des fonctions
//TODO : - Faire le bilan annuel de l’entreprise et l’afficher en console.
//TODO : Détails :
//TODO : - 3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
const equipeEmployes = [
    new Employe(`Duck`,`Riri`,20,2000,12,0.9),
    new Employe(`Duck`,`Fifi`,20,3000,12,0.9),
    new Employe(`Duck`,`Loulou`,20,4000,12,0.9)
];
// console.log(equipeEmployes);
//TODO : - revenus R = 300000 (trois cent mille)
//TODO : - fraisFixes FF = 20000 (vingt mille)
//TODO : - fraisAchats FA = 50000 (cinquante mille)
//TODO : - nbMoisPaye N = 12
//TODO : - tauxCharges XXX = 90%
const bandeAPicsou = new Pme(`DuckTales`,equipeEmployes,300_000,20_000,50_000);
// console.log(bandeAPicsou);

bandeAPicsou.bilan();



//?-----------------------------------------------------------------------------------------------
//? Exo Class COMPTES BANCAIRES                                                                 --
//?-----------------------------------------------------------------------------------------------

//? Gérer des compte en banque
//TODO : Consignes
//TODO : - Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de
//TODO : l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à
//TODO : un autre.
//TODO : - Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui
//TODO : dépassent le solde du compte bancaire)
//? Détails
//? Faire une scénario avec gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
//? Puis Alex retire 100
//? Puis Marco fait un virement de 300 à Clovis
//? Enfin Alex tente un retrait de 1200
//? Afficher tous les soldes finaux.
//? Ces compte sont placés dans un tableau associatif de clients

// Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de
// l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à
// un autre.
class CompteBancaire {
    constructor (nom, solde) {
        this.nom = nom;
        this.solde = solde;
    }
    // Credit
    credit(somme) {
        this.solde += somme;
        console.log(`Ajout de ${somme}€ pour: ${this.nom}`);
    };
    // Retrait
    retrait(somme) {
        if (this.solde >= somme){
            this.solde -= somme;
            console.log(`Retrait de ${somme}€ pour: ${this.nom}`);
        } else {
            console.log(`Retrait de ${somme}€ refusé pour: ${this.nom}, solde de: ${this.solde}€ insuffisant`);
        }
    };
    // Voir solde
    voirSolde() {
        console.log(`Titulaire: ${this.nom}, solde: ${this.solde}€`);
    };
    // Virement
    virement(destinataire, somme) {
        if (this.solde >= somme){
            this.solde -= somme;
            destinataire.solde += somme;
            console.log(`Virement de : ${somme}€ de : ${this.nom} vers ${destinataire.nom}`);
        } else {
            console.log(`Virement de ${somme}€ en faveur de ${destinataire.nom} refusé pour: ${this.nom}, solde de: ${this.solde}€ insuffisant`);
        }
    }
};
// Faire une scénario avec gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
const clients = {
    Alex: new CompteBancaire(`Alex`, 0),
    Clovis: new CompteBancaire(`Clovis`, 0),
    Marco: new CompteBancaire(`Marco`, 0)
};
console.log(clients);
clients[`Alex`].credit(1000);
clients[`Clovis`].credit(1000);
clients[`Marco`].credit(1000);

// Puis Alex retire 100
clients[`Alex`].retrait(100);

// Puis Marco fait un virement de 300 à Clovis
clients[`Marco`].virement(clients[`Clovis`], 300);

// Enfin Alex tente un retrait de 1200
clients[`Alex`].retrait(1200);

// Afficher tous les soldes finaux.
for (let client in clients) {
    clients[client].voirSolde();
};



//?-----------------------------------------------------------------------------------------------
//? Exo Class réagir au SCROLL                                                                  --
//?-----------------------------------------------------------------------------------------------

//TODO Sur toute la page écouter l’évènement scroll, faire un console log de l’évènement ainsi que des
//TODO console log pour ces variables
const eventScroll = window.addEventListener('scroll', () => {
    // console.log(document.body.scrollHeight);
    // console.log(scrollY);
    //TODO Mettez en place une variable scrollMax, dans laquelle on soustrait à document.body.scrollHeight,
    //TODO la variable innerHeight,
    let scrollMax = document.body.scrollHeight - innerHeight;
    //TODO Faire une variable onEstOu dans laquelle on stock un pourcentage à partir de scrollY et
    //TODO scrollMax
    let onEstOu = scrollY / scrollMax * 100;
    //TODO Puis faire en sorte d’assigner la variable onEstOu à la largeur de la div qui a la class « bar »
    let bar = document.body.querySelector(".bar");
    console.log(bar);
    bar.style.position = "fixed";
    bar.style.height = "30px";
    bar.style.backgroundColor = "blue";
    bar.style.width = onEstOu+"%";
});
