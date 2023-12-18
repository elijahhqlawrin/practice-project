/* ===== IMPORTS ===== */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"

/* ===== FIREBASE SETUP ===== */
const firebaseConfig = {
    apiKey: "AIzaSyAkrkwktEMIBoIVT0TDfLm7eF8gOlPb1VY",
    authDomain: "vocab-app-de707.firebaseapp.com",
    projectId: "vocab-app-de707",
    storageBucket: "vocab-app-de707.appspot.com",
    messagingSenderId: "163033970383",
    appId: "1:163033970383:web:24b7e3e92823b5973e69ba"
  }

  const app = initializeApp(firebaseConfig)

  console.log(app)
/* ===== UI ===== */
/* ===== UI - ELEMENTS ===== */
const loggedOutView = document.getElementById("logged-out-view")
const loggedInView = document.getElementById("logged-in-view")

const emailInputEL = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInBtnEl = document.getElementById("sign-in-btn")
const createAcctBtnEl = document.getElementById("create-acct-btn")

/* ===== UI - EVENT LISTENERS ===== */
signInBtnEl.addEventListener("click", authSignInWithEmail)
createAcctBtnEl.addEventListener("click", authCreateAcctWithEmail)

/* ===== MAIN JAVASCRIPT ===== */
displayLoggedOutView()
// displayLoggedInView()


/* ===== FUNCTIONS ===== */
/* ===== FUNCTIONS - FIREBASE - AUTHENTICATION */
function authSignInWithEmail() {
    alert("Sign in with email and password")
}

function authCreateAcctWithEmail() {
    alert("Sign in with email and password")
}

/* ===== FUNCTIONS - UI FUNCTIONS ===== */
function displayLoggedOutView() {
    hideElement(loggedInView)
    displayElement(loggedOutView)
}

function displayLoggedInView() {
    hideElement(loggedOutView)
    displayElement(loggedInView)
}

function displayElement(element) {
    element.style.display = "unset"
}

function hideElement(element) {
    element.style.display = "none"
}