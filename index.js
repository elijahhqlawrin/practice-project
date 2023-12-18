/* ===== IMPORTS ===== */

/* ===== FIREBASE SETUP ===== */

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