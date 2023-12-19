/* ===== IMPORTS ===== */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"


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
  const auth = getAuth(app)

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

/* ===== FUNCTIONS ===== */
/* ===== FUNCTIONS - FIREBASE - AUTHENTICATION */
function authSignInWithEmail() {
    const email = emailInputEL.value
    const password = passwordInputEl.value
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            displayLoggedInView()
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(`${errorCode}: ${errorMessage}`)
        });
}

function authCreateAcctWithEmail() {
    const email = emailInputEL.value
    const password = passwordInputEl.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            displayLoggedInView()
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(`${errorCode}: ${errorMessage}`)
        });
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