// EXEMPLE COURS
// const apiDiv = document.querySelector('.apiContact');
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =  async () => {
//     //Data va récup Toutes les données de l'api
//     const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(data);
//     //Plutot que de Travailler sur la réponse, on va la transformé pour 
//     //qu'elle deviennt un OBJET JS (+ pratique)
//     const dataTransformed = await  data.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.latitude;
// };
// contactApi();



// !------------- CONTACTER DES API ------------------
// TODO 1: récupérer la div dans une variable apiDiv
const apiDiv = document.querySelector('.apiContact');
// TODO 2-1: créer une variable contactAPI à laquelle on assigne une fonction fléchée
const contactApi =  async () => {
    // TODO 2-2: dans la F =>, créer une variable data à laquelle on assigne la fonction fetch()
    // TODO 2-3: fetch(), prend en param l'Url de l'API
    const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    // TODO 2-4: Faire un console.log de data
    console.log(data);
    // TODO 3-1: Tjrs dans la F =>,créer une variable dataTransformed à laquelle on assigne data
    // TODO 3-2: sur la variable data on utilise la fonction .json()
    const dataTransformed = await  data.json();
    // TODO 3-3: Faire un console log de dataTransformed
    console.log(dataTransformed);
    // TODO 4-1: Tjrs dans la F =>,au InnerHTML de apiDiv, assigner la latitude dans dataTransformed
    apiDiv.innerText = dataTransformed.latitude;
};
// TODO 5: on éxecute notre fonction contactAPI quelquepart dans notre programme
//contactApi();

//? EXO  : 
//TODO Afficher les 20 premier pokemon dans une page web 
// https://pokeapi.co/api/v2/pokemon

const pokeDiv = document.querySelector('#pokeListe');
const contactPokeApi =  async () => {
    const dataPoke = await fetch('https://pokeapi.co/api/v2/pokemon');
    const dataTransformedPoke = await  dataPoke.json();

    let liste = document.createElement(`ol`);
    pokeDiv.append(liste);
    const pokeList = document.querySelector('ol');

    for (let unPokemon of dataTransformedPoke[`results`]){
        let pokeLigne = document.createElement('li');
        pokeLigne.innerText = unPokemon[`name`];
        pokeList.append(pokeLigne);
    }
};

contactPokeApi();