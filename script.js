// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtvoeT0FraMIy6fEifhlVieJ8xoUpri3k",
  authDomain: "get-started-93f2a.firebaseapp.com",
  projectId: "get-started-93f2a",
  storageBucket: "get-started-93f2a.firebasestorage.app",
  messagingSenderId: "497617892354",
  appId: "1:497617892354:web:678acea94e5ecc7e26e31b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtvoeT0FraMIy6fEifhlVieJ8xoUpri3k",
  authDomain: "get-started-93f2a.firebaseapp.com",
  projectId: "get-started-93f2a",
  storageBucket: "get-started-93f2a.firebasestorage.app",
  messagingSenderId: "497617892354",
  appId: "1:497617892354:web:678acea94e5ecc7e26e31b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);// Signup function
function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        db.collection("students").doc(user.uid).set({
            name: name,
            email: email
        });
        alert("Signup successful!");
        window.location = "dashboard.html";
    })
    .catch((error) => {
        alert(error.message);
    });
}

// Login function
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location = "dashboard.html";
    })
    .catch((error) => {
        alert(error.message);
    });
}
