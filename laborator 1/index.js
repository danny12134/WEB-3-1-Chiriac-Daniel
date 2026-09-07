// =============================
// ADĂUGAREA UNUI ELEMENT ÎN LISTĂ
// =============================

const lista = document.getElementById("lista");
const addButton = document.getElementById("addButton");

let numarElemente = 3;

addButton.addEventListener("click", function() {

    numarElemente++;

    const elementNou = document.createElement("li");

    elementNou.textContent =
        "Elementul numărul " + numarElemente;

    lista.appendChild(elementNou);
});


// =============================
// SCHIMBAREA CULORII PAGINII
// =============================

const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});


// =============================
// COUNTER
// =============================

const counter = document.getElementById("counter");

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");

let numar = 0;


// Butonul +

plusButton.addEventListener("click", function() {

    numar++;

    counter.textContent = numar;

});


// Butonul -

minusButton.addEventListener("click", function() {

    numar--;

    counter.textContent = numar;

});


// Butonul Reset

resetButton.addEventListener("click", function() {

    numar = 0;

    counter.textContent = numar;

});
