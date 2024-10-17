import resto from "./resto.js";
import createCard from "./createCard.js";

const CARDS = document.querySelector(".cards");

function displayHTML() {
    let html = "";

	for (let i = 0; i < resto.length; i++) {
		html += createCard(resto[i]);
	}

	return html;
}

CARDS.innerHTML = displayHTML(resto);

const rectos = document.querySelectorAll(".recto");
const versos = document.querySelectorAll(".verso");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        rectos[i].classList.toggle("recto-flip");
        versos[i].classList.toggle("verso-flip");
    });
}
for (let i = 0; i < versos.length;i++)
versos[i].addEventListener("click", function () {
    rectos[i].classList.toggle("recto-flip");
    versos[i].classList.toggle("verso-flip");
});


// const SELECT = document.querySelector(".select");

// SELECT.addEventListener("change", () => {
//     let restoFilter = resto.filter(
//         (resto) => resto.type === SELECT.value
//     );
    
//     if (SELECT.value === "All" ) {
//             restoFilter = resto;
//     }
//     CARDS.restoHTML = displayHTML(restoFilter);

// });





