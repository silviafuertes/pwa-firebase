if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtZ0s6EUfigXyGrJVjXBNM4N090ovZn78",
    authDomain: "ejemplo-84bcb.firebaseapp.com",
    databaseURL: "https://usuarios-bf872.firebaseio.com",
    projectId: "ejemplo-84bcb.appspot.com",
    storageBucket: "usuarios-7fd76.appspot.com",
    messagingSenderId: "1057614073125",
    appId: "1:1057614073125:web:90d716c0a733ef1835decc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        document.getElementById('login').innerHTML = "Logueado " + user.email;
        console.log(user);
    } else {
        document.getElementById('login').innerHTML = "No Logueado ";
    }
});

function enviar() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

function acceso() {
    var emailA = document.getElementById('emailA').value;
    var passA = document.getElementById('passA').value;
    firebase.auth().signInWithEmailAndPassword(emailA, passA)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}