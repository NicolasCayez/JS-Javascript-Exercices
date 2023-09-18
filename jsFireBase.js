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
        // document.getElementById('add-user-form').reset();
        let formulaire = document.getElementById('add-user-form');
        formulaire[0].value = "";
        formulaire[1].value = "";
        formulaire[2].value = "";
    };
    
    //TODO EXERCICE READ (Lecture de la BDD : Tous Les Utilisateurs) SOLUTION DONNEE PAR JEFF
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
                //TODO READ (Lecture d’un élément de la BDD : Afficher 1 utilisateur)
                //TODO Dans readUserData avant le append(), on va placer un addEventListener sur $li qui écoute "click" et lance la fonction userClicked
                $li.addEventListener("click", userClicked);
                userListUI.append($li);
            });
        }
    )};
    
    function userClicked(event) {
        //? Ensuite dans la f° userClicked on capte l'évènement (on s'en sert pour savoir qui on sélectionne)
        //TODO Dans la f° userClicked, dans une variable userID, on va récupérer userID via event.target.getAttribute("user-key");
        let userID = event.target.getAttribute("user-key");
        //TODO Dans la f° userClicked, 1 variable userRef va faire référence à 1 utilisateur en particulier, on lui assigne dbRef,
        //? On utilise la f° child() pour viser le noeud "users/" concaténé avec userID
        let userRef = dbRef.child(`users/${userID}`);
        //TODO Dans la f° userClicked, 1 variable userDetailUI récupère ma div avec user-detail
        let userDetailUI = document.getElementById('user-detail');
        //TODO Dans la f° userClicked, Ensuite sur userRef on utilise la f° on("value", snap =>{})
        userRef.on("value", snap => {
            //TODO Dans la f° userClicked, dans la f° =>, on va vider l'innerHTML de userDetailUI
            userDetailUI.innerHTML = "";
            //TODO Dans la f° userClicked, Ensuite sur snap on va utiliser un forEach pour parcourir le cliché (snap) de notre BDD.
            snap.forEach(childSnap => {
                //TODO Dans la f° userClicked, dans le forEach, 1 variable $p crée un élément <p>
                let $p = document.createElement('p');
                //TODO Dans la f° userClicked, dans le forEach, On rempli le innerHTML de $p avec childSnap.key et childSnap.val()
                $p.innerHTML = `${childSnap.key} ${childSnap.val()}`;
                //TODO Dans la f° userClicked, dans le forEach, On rajoute $p dans notre userDetailUI
                userDetailUI.append($p);
            });
        });
    };

    function editButtonClicked(event) {
        //TODO On va modifier le display du formUserEditUI à "block"
        formUserEditUI.style.display = "block";
        //TODO On va modifier le display du formUserUI à "none"
        formUserUI.style.display = "none";
        //TODO Ensuite on va faire ceci
        //TODO Une variable inputId qui récupère (querySelector) l'élément avec la classe .edit-userid
        let inputId = document.querySelector('.edit-userid');
        //TODO A la value de inputId on assigne event.target.getAttribute("userid");
        inputId.value = event.target.getAttribute("userid");
        //TODO Dans une variable editUserInputUI, on récupère tous les éléments de classe edit-user-input (querySelectorAll ou autre)
        let editUserInputUI = document.querySelectorAll('.edit-user-input');
        //TODO On va parcourir notre BDD avec userRef.on("value", snap => {
        let userRef = dbRef.child(`users/${inputId}`);
        userRef.on("value", snap => {
        // inputId.on("value", snap => {
            //TODO Dans la f° fléchée, faire une boucle for qui parcourt les inputs editUsetInputUI,
            for (let i=0; i<editUserInputUI.length; i++) {
                //TODO Dans la f° fléchée dans la boucle, dans une variable key, on stock editUserInputsUI[i].getAttribute("data-key");
                let key = editUserInputUI[i].getAttribute("data-key");
                //TODO Dans la f° fléchée dans la boucle, ensuite à chaque valeur de nos editUserInputsUI[i] on assigne snap.val()[key];
                editUserInputUI[i] = snap.val()[key];
            }
        });
        //TODO en dehors de la fonction on(), dans une variable saveBtn, on récupère notre bouton avec l'id edit-user-btn
        let saveBtn = document.querySelector('#edit-user-btn');
        //TODO en dehors de la fonction on(), sur ce bouton on place un eventlistener au click qui lance saveUserBtnClicked
        saveBtn.addEventListener('click', saveUserBtnClicked());
    };

    function saveUserBtnClicked() {
        //TODO Dans la f° saveUserBtnClicked()
        //TODO Dans une variable userID on récupère la value de l'input avec l'id "edit-userid"
        let userID = document.querySelector('#edit-userid').value;
        //TODO Dans une variable userRef on fait référence à l'utilisateur dans la BDD
        let userRef = dbRef.child(`users/${userID}`);
        //TODO Une variable editUserObject qui est un objet vide
        let editUserObject = {};
        //TODO Dans une variable editUserInputUI, on récupère tous les éléments html qui ont la classe edit-user-input (querySelectorAll ou autre)
        let editUserInputUI = document.querySelectorAll('.edit-user-input');
        //TODO ensuite on va faire une boucle forEach pour parcourir les editUserInputUI
        //TODO      Dans les param du forEach(), on lui laisse une f° qui a une variable textField en paramètre
        editUserInputUI.forEach(textField =>{
            //TODO Dans cette f°, dans leforEach on aura une variable key qui va stocker les attributs data-key de textField (getAttribute())
            let key = editUserInputUI.textfield.getAttribute("data-key");
            //TODO Pour chaque clé (âge, name, email) on l'associe à notre nouvel utilisateur : editUserObject[key] = textField.value
            editUserObject[key] = textField.value;
        });
        //TODO ensuite en dehors de la boucle, sur notre variable userRef on utilise la f° update en lui passant editUserObject en paramètre
        userRef.update(editUserObject);
        //TODO Enfin on peut remettre le display à "none" de formUserEditUI et à "block" de forUserUI
        formUserEditUI.style.display = "none";
        formUserUI.style.display = "block";
    };

    function deleteButtonClicked(event) {

    }
    
    //* SUPPRIMER part 1
    //TODO Dans la f° readUserData, dans le forEach, Juste avant $li.innerHtml = ...
    //TODO Dans la f° readUserData, dans le forEach, On va déclarer une variable deleteIconUI dans laquelle on va créer un élément span
    //TODO Dans la f° readUserData, dans le forEach, On va ensuite modifier la class de deleteIconUI en "delete-user"
    //TODO Dans la f° readUserData, dans le forEach, On va remplir le innerHTML de deleteIconUI evec un "X"
    //TODO Dans la f° readUserData, dans le forEach, deleteIconUI on lui rajoute un attribut "userid" qui prendra la valeur de key(viasetAttribute)
    //TODO Dans la f° readUserData, dans le forEach, Enfin sur deleteIconUI on place un AddEventListener qui écoute le click et lance la fonction deleteButtonClicked
    //* SUPPRIMER part 2
    //TODO Créer une f° deleteButtonClicked qui prend event en paramètre
    //TODO dans la f°, récupérer le userID via event.target.getAttribute(userid")
    //TODO dans la f°, faire une référence userRef à notre BDD directement sur le noeud de l'utilisateur qu'on a cliqué (référence à la table users + userID)
    //TODO Dans la f°, utiliser ka f° remove sur userRef