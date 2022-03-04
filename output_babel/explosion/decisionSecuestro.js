"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decisionSecuestro = void 0;

const decisionSecuestro = () => {
  let bodyDiv = document.getElementById("bodyDivExplosion");
  let divSecuestro = document.createElement("div");
  divSecuestro.id = "decision-secuestro";
  divSecuestro.className = "divSecuestro";
  bodyDiv.appendChild(divSecuestro);
  let decision2 = document.createElement("h3");
  decision2.innerHTML = "Secuestro<br>";
  divSecuestro.appendChild(decision2);
  let label3 = document.createElement("label");
  label3.innerHTML = "Progreso de la misión: <br>";
  divSecuestro.appendChild(label3);
  let progress3 = document.createElement("div");
  progress3.className = "progress";
  divSecuestro.appendChild(progress3);
  let progressbar3 = document.createElement("div");
  progressbar3.className = "progress-bar progress-bar-striped progress-bar-animated";
  progressbar3.role = "progressbar";
  progressbar3.ariaValueNow = "75";
  progressbar3.ariaValueMin = "0";
  progressbar3.ariaValueMax = "100";
  progressbar3.style.width = "75%";
  progress3.appendChild(progressbar3);
  let p4 = document.createElement("p");
  p4.innerHTML = " Secuestras al director de la planta nuclear y planeas obligarlo a renunciar o cambiar la forma en la que maneja la planta, sin embargo, no todo va como esperas. El director tiene un gran grupo de seguridad, las cosas se ponen difíciles y por accidente le disparan al director y muere. <br> ¿Crees que esto logró prevenir la catástrofe?";
  divSecuestro.appendChild(p4);
  let result2 = document.createElement("a");
  result2.href = "exito.html";
  result2.innerHTML = "CONOCE TU RESULTADO";
  divSecuestro.appendChild(result2);
};

exports.decisionSecuestro = decisionSecuestro;