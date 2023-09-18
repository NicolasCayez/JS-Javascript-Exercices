//La variable de config pour firebase
const firebaseConfig = {

    apiKey: "AIzaSyAaG9Aa4jOjGCfP_QhOKzSp5emsPU02tBE",

    authDomain: "super-cool-26d04.firebaseapp.com",

    databaseURL: "https://super-cool-26d04-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "super-cool-26d04",

    storageBucket: "super-cool-26d04.appspot.com",

    messagingSenderId: "754497126114",

    appId: "1:754497126114:web:0e99e63d3ff601788628bb"

    };


    firebase.initializeApp(firebaseConfig);
    //On va créer une référence à notre BDD
    const dbRef = firebase.database().ref();
    // On va également faire une ref directement dans le noeud / """"table""""" users
    const usersRef = dbRef.child("users");


    const addUserBtnUI = document.getElementById("add-user-btn");
    addUserBtnUI.addEventListener("click", addUserBtnClicked);

    const formUserUI = document.getElementById("add-user-form");
    formUserUI.addEventListener("submit", (event) => event.preventDefault());

    const formUserEditUI = document.getElementById("edit-user-module");
    formUserEditUI.addEventListener("submit", (event) => event.preventDefault());

    const userListUI = document.getElementById("user-list");
    const userDetailUI = document.getElementById("user-detail");

    readUserData();

    function addUserBtnClicked() {
        //TODO  dans la f° addUserBtnClicked, Récupérer TOUS LES INPUTS avec la classe user-input 1 variable addUserInputsUI (getElementByClassName)
        let addUserInputsUI = document.getElementsByClassName('user-input');
        //TODO  dans la f° addUserBtnClicked, créer une variable newUser (qui est un objet vide)
        const newUser = {};
        //TODO  dans la f° addUserBtnClicked, faire une boucle for pour parcourir les input dans addUserInputsUI
        for (let i=0; i<addUserInputsUI.length; i++) {
            //TODO      dans la boucle, pour chaque élément parcouru on récupère une variable key = addUserInputsUI[i].getAttribute('data-key')
            let key = addUserInputsUI[i].getAttribute('data-key');
            //TODO      dans la boucle, une variable value = addUserInputsUI[i].value
            let value = addUserInputsUI[i].value;
            //TODO      dans la boucle, pour chaque clé (âge, name, email) on l'associe à notre nouvel utilisateur : newUser[key] = value
            newUser[key] = value;
        }
        //TODO  après le parcours des inputs, sur userRef on va faire un push de newUser
        usersRef.push(newUser);
        //TODO  dans la f° addUserBtnClicked, on console log un msg type nouvel utilisateur enregistré
        console.log("Nouvel utilisateur enregistré");
        //TODO  dans la f° addUserBtnClicked, on console log le nom et l'âge du nouvel utilisateur
        console.log(`Nom: ${newUser.name}, âge: ${newUser.age}`);
        //TODO  dans la f° addUserBtnClicked, on réinitialise le formulaire avec l'id add-user-form
        document.getElementById('add-user-form').reset();
    };

    function readUserData() {
        usersRef.on("value", (snap) => {
            userListUI.innerHTML = "";
            snap.forEach((childSnap) => {
                //* Key va stocker les ID
                let key = childSnap.key;
                let value = childSnap.val();
                let $li = document.createElement("li");
                //*Phase 4 on fait les icones pour UPDATE
                let editIconUI=document.createElement('button');
                editIconUI.innerText = 'Update'
                editIconUI.setAttribute('class','btn btn-outline-primary mx-3');
                //*Phase 5 on fait les icones pour DELETE
                let deleteIconUI=document.createElement('button');
                deleteIconUI.innerText = 'Delete'
                deleteIconUI.setAttribute('class','btn btn-outline-danger mx-3');
                //* Sur les icone en face du nom du user on rajoute un attribut qui contient la key
                //* on veut savoir qui on supprime au click
                deleteIconUI.setAttribute("userid", key);
                deleteIconUI.addEventListener("click", deleteButtonClicked);
                //* Sur les icone en face du nom du user on rajoute un attribut qui contient la key
                editIconUI.setAttribute("userid", key);
                editIconUI.addEventListener("click", editButtonClicked);
                $li.innerText = value.name;
                $li.append(editIconUI);
                $li.append(deleteIconUI);
                $li.setAttribute("user-key", key);
                $li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
                //* À la lecture de chaque utilisateur on le rend clickable pour afficher les détails
                $li.addEventListener("click", userClicked);
                userListUI.append($li);
            });
        }
    )};

    function userClicked(event) {
        let userID = event.target.getAttribute("user-key");

    };

    function editButtonClicked(event) {

    };

    function saveUserBtnClicked() {

    };

    function deleteButtonClicked(event) {

    }