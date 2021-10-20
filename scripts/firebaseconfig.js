(function (window) {
    'use strict';
    //   var App = window.App || {};

    /*window.FirebaseConfig = {
        apiKey: "a string from Firestore",
        authDomain: "a string from Firestore",
        projectId: "a string from Firestore",
        storageBucket: "a string from Firestore",
        messagingSenderId: "a string from Firestore",
        appId: "a string from Firestore",
        measurementId: "a string from Firestore"
    };*/
    //   App.FirebaseConfig = FirebaseConfig;
    //   window.App = App;
    const FirebaseConfig = {
        apiKey: "AIzaSyCcFODmYG-9xseBoOurZn9y-jFscRLZ-Yg",
        authDomain: "coffeerun-6d43b.firebaseapp.com",
        projectId: "coffeerun-6d43b",
        storageBucket: "coffeerun-6d43b.appspot.com",
        messagingSenderId: "112978934632",
        appId: "1:112978934632:web:ecdb37a2e4bbd13222f4dd",
        measurementId: "G-5ZPG797Q6R"
      };
      
      // Initialize Firebase
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(FirebaseConfig);

    window.App = App;

})(window);