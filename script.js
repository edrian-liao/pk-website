// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE-YxLoNfDEw_NPJhEeFq--VhkBs5FRI4",
  authDomain: "kayamanan-d3a22.firebaseapp.com",
  databaseURL: "https://kayamanan-d3a22-default-rtdb.firebaseio.com",
  projectId: "kayamanan-d3a22",
  storageBucket: "kayamanan-d3a22.appspot.com",
  messagingSenderId: "401799279273",
  appId: "1:401799279273:web:f1d5244e233ae51bf5afb8",
  measurementId: "G-QVPNXY134T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

document.getElementById('signupForm').addEventListener('submit', function(e) {
e.preventDefault();
set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
  fullname: document.getElementById('fullname').value,
  phone: document.getElementById('phone').value, 
  email: document.getElementById('email').value,
  donator: document.getElementById('donator').checked,
  student: document.getElementById('student').checked, 
  additional: document.getElementById('additional').value, 
  // message: document.getElementById('message').value
});

alert('Your form is submitted');
document.getElementById('signupForm').reset();
});

document.addEventListener("DOMContentLoaded", function () {
    var hamburgerIcon = document.getElementById("hamburgerIcon");
    var headerLinks = document.querySelector(".headerLinks");

    hamburgerIcon.addEventListener("click", function () {
        headerLinks.classList.toggle("active");
    });
});