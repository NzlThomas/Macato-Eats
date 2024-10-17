import resto from "./resto.js";
import createCard from "./createCard.js";

const CARDS = document.querySelector(".cards");

function displayHTML(restos) {
    let html = "";

	for (let i = 0; i < restos.length; i++) {
		html += createCard(resto[i]);
	}

	return html;
};

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


const SELECT = document.querySelector(".select");




SELECT.addEventListener("change", () => {
    let restoFilter = resto.filter(
        (resto) => resto.value === SELECT.value
    );
    
    if (SELECT.value === "all") {
        restoFilter = resto;

    } else if (SELECT.value === "french") {
        
        restoFilter = resto.filter; //restoFilter = SELECT.value affiche plusieurs restaurants dont 2 qui ne possèdent pas "french" en tant que valeur de clé
    }
    CARDS.innerHTML = displayHTML(restoFilter);
});


