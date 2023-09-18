/*C'est là que vous allez mettre votre code JS*/

// TODO Installer la librairie Animate on Scroll (https://github.com/michalsnik/aos)
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    // TODO Animer la div cardMeteo avec une durée de 1 seconde (soit 1000ms)
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// TODO Créer une div que vous stockerez dans une variable info
const info = document.createElement('div');

// TODO Donner à cette div les propriétés CSS suivantes
// - une hauteur de 300px
info.style.height = '300px';
// - une largeur de 200px
info.style.width = '200px';
// - un margin en haut et en bas de 16px
info.style.marginTop = '16px';
info.style.marginBottom = '16px';
// - un border de 3px, solid, en gris
info.style.border = '3px solid grey';
// - un padding en haut de 16px, à droite et à gauche de 12px, et en bas de 24px
info.style.padding = '16px 12px 24px 12px';

// TODO Insérer cette div dans la div cardMeteo, avant le bouton
info.className = 'monCadre';
let maDiv = document.querySelector('.cardMeteo');
maDiv.append(info);
// placement du cadre avant le bouton
let monBouton = document.querySelector('button');
let monCadre = document.querySelector('.monCadre');
monBouton.before(monCadre);

// TODO Créer une fonction addInfo() qui va ajouter du texte à la div précédement créée
function addInfo(texte) {
    monCadre.innerText = texte;
}

// TODO Créer une fonction bouton() qui ajoute la class "button__cardMeteo" à notre bouton html
function bouton() {
    monBouton.className = "button__cardMeteo";
}

// TODO Faire en sorte que lorsqu'on maintien le click de la souris (event mousedown) sur le bouton charger, sa couleur de fond devient orange
monBouton.addEventListener ('mousedown', () => {
    monBouton.style.backgroundColor = 'red';
});

// TODO Faire en sorte que lorsqu'on relâche le click de la souris (event mouseup) n'importe où, cela annule la couleur précedente
document.addEventListener ('mouseup', () => {
    monBouton.style.backgroundColor = '';
});

// TODO Faire en sorte que lorsqu'on clique (event click) sur le bouton charger, cela interroge l'API météo ("https://prevision-meteo.ch/services/json/toulouse") et nous affiche les informations météos suivantes :
// - La condition actuelle
// - La température actuelle
// - La température maximum du jour 0
// - La température minimum du jour 0

// fonction de chargement de l'API
const contactApi = async () => {
    const data = await fetch('https://prevision-meteo.ch/services/json/toulouse');
    // console.log(data);
    const dataTransformed = await data.json();
    // console.log(dataTransformed);
    return(dataTransformed.current_condition);
};

//? EN COURS - Api appelée, infos récupérées mais non affichées en innerText
monBouton.addEventListener('click', () => {
    let meteo = contactApi();
    console.log(meteo);
})
