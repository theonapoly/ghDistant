import { HELLO_WORLD_TITLE, HELLO_WORLD_TEXT } from "./constantes.js";

document.title = HELLO_WORLD_TITLE;
document.getElementById("texte").textContent = HELLO_WORLD_TEXT;

const dateEl = document.getElementById("date");
dateEl.textContent = new Date().toLocaleDateString();
