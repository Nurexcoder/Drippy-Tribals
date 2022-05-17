const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeposhvX5DT1uci_5eUehr7Wd1DvJaf7Q",
    authDomain: "fruitfreshbackend.firebaseapp.com",
    projectId: "fruitfreshbackend",
    storageBucket: "fruitfreshbackend.appspot.com",
    messagingSenderId: "185009733474",
    appId: "1:185009733474:web:4f55ab62686ccf0cd1b63b",
    measurementId: "G-KCJ3E6J2P0"
  };
const app = initializeApp(firebaseConfig)

module.exports = app;
