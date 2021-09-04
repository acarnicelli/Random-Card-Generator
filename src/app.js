/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function cambiarColor(palo) {
  if (palo == "♦" || palo == "♥") {
    document.querySelector(".carta").classList.add("rojo");
  } else {
    document.querySelector(".carta").classList.remove("rojo");
  }
}

let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let palos = ["♠", "♣", "♦", "♥"];

let button = document.querySelector("button");
button.addEventListener("click", () => {
  // Elijo el numero y el palo de forma aleatoria usando el index
  let num = cartas[randNumber(12)];
  let palo = palos[randNumber(3)];

  cambiarColor(palo);

  // Formo una NodeList con los divs donde van los iconos
  // y le inserto el palo con un loop
  let iconos = document.querySelectorAll(".icono");
  iconos.forEach(item => {
    item.innerHTML = palo;
  });

  // Inserto el numero
  let numero = document.querySelector(".mid");
  numero.innerHTML = num;

  // Historial
  console.log(`You drew a ${num} of ${palo}`);
});
