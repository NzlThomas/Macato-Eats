import resto from "./resto.js";
import createCard from "./createCard.js";

const CARDS = document.querySelector(".cards");
const SELECT = document.querySelector(".select");

function displayHTML(restos) {
    let html = "";
	for (let i = 0; i < restos.length; i++) {
		html += createCard(restos[i]);
	}
	return html;
};

function cardFlip() {
    const rectos = document.querySelectorAll(".recto");
    const versos = document.querySelectorAll(".verso");
    const buttons = document.querySelectorAll("button");

    /**
     * Logique pour flip la carte
     * Recto
     */
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {      
            rectos[i].classList.toggle("recto-flip");
            versos[i].classList.toggle("verso-flip");
        });
    }

    /**
     * Verso
    */
    for (let i = 0; i < versos.length;i++)
        versos[i].addEventListener("click", function () {
        rectos[i].classList.toggle("recto-flip");
        versos[i].classList.toggle("verso-flip");
    });
}

// Génération des cards
CARDS.innerHTML = displayHTML(resto);
cardFlip();

/**
 * Toutes la logique concernant le filter
 */
SELECT.addEventListener("change", () => {    
    let restoFilter = resto.filter(
        (el) => el.value.includes(SELECT.value)
    );  
    CARDS.innerHTML = displayHTML(restoFilter);
    cardFlip();
});
