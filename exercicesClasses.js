// 1 - Créez une classe Personne
// Intitulé: Créez une classe Personne avec les propriétés nom et âge. Ajoutez une
// méthode sePresenter qui affiche "Je m'appelle [nom] et j'ai [âge] ans."

class Personne {
    constructor (nom, age) {
        this.nom = nom;
        this.age = age;
    }

    get sePresenter () {
        return `Je m'appelle ${this.nom} et j'ai ${this.age} ans`;
    }
}

const Nico = new Personne ("Nicolas", 42);
Nico.sePresenter;

// 2 - Créez un prototype pour les objets Chien
// Intitulé: Créez un prototype Chien avec les propriétés nom et race. Ajoutez une
// méthode aboyer qui affiche "Woof ! Je suis [nom], un [race]."
class Chien {
    constructor (nom, race) {
        this.nom = nom;
        this.race = race;
    }

    aboyer () {
        return `Woof ! Je suis ${this.nom}, un ${this.race}`;
    }
}

const Medor = new Chien ("Medor", "Labrador");
Medor.aboyer();

// 3 - Créez une classe Rectangle et une classe Cercle
// Intitulé: Créez une classe Rectangle avec les propriétés largeur et hauteur.
// Ajoutez des méthodes pour calculer la superficie et le périmètre du rectangle.
// Intitulé: Créer une classe Cercle avec les attributs rayon et couleur et les
// méthodes calculerPerimetre() et calculerAire()
class Rectangle {
    constructor (largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    superficie () {
        return `La superficie d'un rectangle de ${this.largeur}cm par ${this.hauteur}cm est de ${this.largeur*this.hauteur}cm²`;
    }

    perimetre () {
        return `Le périmètre d'un rectangle de ${this.largeur}cm par ${this.hauteur}cm est de ${(this.largeur+this.hauteur)*2}cm`;
    }
}

const rect1 = new Rectangle (2, 3);
rect1.superficie();
rect1.perimetre();



class Cercle {
    constructor (rayon, couleur) {
        this.rayon = rayon;
        this.couleur = couleur;
    }

    calculerPerimetre() {
        return `Le périmètre d'un cercle de rayon ${this.rayon} est de ${(2*this.rayon*Math.PI).toFixed(2)}cm`;
    }

    calculerAire() {
        return `L'aire d'un cercle de rayon ${this.rayon} est de ${((this.rayon*this.rayon)*Math.PI).toFixed(2)}cm²`;
    }
}

const cerc1 = new Cercle (2, "rouge");
cerc1.calculerPerimetre();
cerc1.calculerAire();



// 4 - Créer une classe Voiture
// Intitulé: Créer une classe Voiture qui hérite de la classe Véhicule et qui
// ajoute l'attribut marque

class Vehicule {

}


class Voiture extends Vehicule {
    constructor (marque) {
        super();
        this.marque = marque;
    }
}

