"use strict";

require("./localizacion.css");

var _guerra = _interopRequireDefault(require("./guerra.jpg"));

var _enfermedad = _interopRequireDefault(require("./enfermedad.jpg"));

var _mundo = _interopRequireDefault(require("./mundo.jpg"));

var _plantaNuclear = _interopRequireDefault(require("./planta-nuclear.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newDiv(id, width, height, bckgColor) {
  let nDiv = document.createElement("div");
  nDiv.id = id;
  nDiv.style.width = width;
  nDiv.style.height = height;
  nDiv.style.backgroundColor = bckgColor;
  return nDiv;
}

let bodyDiv = newDiv("bodyDivLocalizacion", 100, 100, "transparent");
document.body.appendChild(bodyDiv);
let label1 = document.createElement("label");
label1.innerHTML = "Progreso de la misión: <br>";
bodyDiv.appendChild(label1);
let progress = document.createElement("div");
progress.className = "progress";
bodyDiv.appendChild(progress);
let progressbar = document.createElement("div");
progressbar.className = "progress-bar progress-bar-striped progress-bar-animated";
progressbar.role = "progressbar";
progressbar.ariaValueNow = "20";
progressbar.ariaValueMin = "0";
progressbar.ariaValueMax = "100";
progressbar.style.width = "20%";
progress.appendChild(progressbar);
let title1 = document.createElement("h1");
title1.innerHTML = "Elige tu localización";
bodyDiv.appendChild(title1);
let mapa = document.createElement('img');
mapa.src = _mundo.default;
mapa.className = "mapa";
mapa.width = "1200";
mapa.height = "600";
bodyDiv.appendChild(mapa);
let p1 = document.createElement("p");
p1.className = "p1";
p1.innerHTML = "Te damos la oportunidad de que puedas elegir a que localización quieres ser transportado en el año 2022. Cada locaclización es una misión diferente a momentos que pensamos que son cruciales para evitar parte de las grandes catastrofes actuales. Recuerda tomar las elecciones correctas, puedes hacer un gran cambio en la historia o de lo contrario tendrás que vivir las consecuencias de tus decisiones y alguien intentará tomar tu lugar en la misión.";
bodyDiv.appendChild(p1);
let title2 = document.createElement("h3");
title2.innerHTML = "Elige: ";
bodyDiv.appendChild(title2);
let divCardGroup = document.createElement("div");
divCardGroup.className = "card-group";
bodyDiv.appendChild(divCardGroup);
let divCard = document.createElement("div");
divCard.className = "card";
divCardGroup.appendChild(divCard);
let cardImg = document.createElement("img");
cardImg.src = _plantaNuclear.default;
cardImg.className = "card-img-top";
divCard.appendChild(cardImg);
let cardBody = document.createElement("div");
cardBody.className = "card-body";
divCard.appendChild(cardBody);
let cardTitle = document.createElement("h5");
cardTitle.className = "card-title";
cardTitle.innerHTML = "China";
cardBody.appendChild(cardTitle);
let cardText = document.createElement("p");
cardText.innerHTML = "Explosión nuclear en China";
cardText.className = "card-text";
cardBody.appendChild(cardText);
let link = document.createElement("a");
link.className = "btn btn-primary";
link.innerHTML = "Ir ahora";
link.href = "explosion.html";
cardBody.appendChild(link);
let divCard2 = document.createElement("div");
divCard2.className = "card";
divCardGroup.appendChild(divCard2);
let cardImg2 = document.createElement("img");
cardImg2.src = _enfermedad.default;
cardImg2.className = "card-img-top";
divCard2.appendChild(cardImg2);
let cardBody2 = document.createElement("div");
cardBody2.className = "card-body";
divCard2.appendChild(cardBody2);
let cardTitle2 = document.createElement("h5");
cardTitle2.className = "card-title";
cardTitle2.innerHTML = "Senegal";
cardBody2.appendChild(cardTitle2);
let cardText2 = document.createElement("p");
cardText2.innerHTML = "Mutación enfermedad letal";
cardText2.className = "card-text";
cardBody2.appendChild(cardText2);
let link2 = document.createElement("a");
link2.className = "btn btn-primary";
link2.innerHTML = "Ir ahora";
link2.href = "mutacion.html";
cardBody2.appendChild(link2);
let divCard3 = document.createElement("div");
divCard3.className = "card";
divCardGroup.appendChild(divCard3);
let cardImg3 = document.createElement("img");
cardImg3.src = _guerra.default;
cardImg3.className = "card-img-top";
divCard3.appendChild(cardImg3);
let cardBody3 = document.createElement("div");
cardBody3.className = "card-body";
divCard3.appendChild(cardBody3);
let cardTitle3 = document.createElement("h5");
cardTitle3.className = "card-title";
cardTitle3.innerHTML = "Rusia <i>MISIÓN ALFA</i>";
cardBody3.appendChild(cardTitle3);
let cardText3 = document.createElement("p");
cardText3.innerHTML = "Mutación enfermedad letal";
cardText3.className = "card-text";
cardBody3.appendChild(cardText3);
let link3 = document.createElement("a");
link3.className = "btn btn-primary";
link3.innerHTML = "Ir ahora";
link3.href = "guerra.html";
cardBody3.appendChild(link3);
let button = document.createElement("button");
button.type = "button";
button.className = "btn btn-secondary btn-sm";
button.innerHTML = "Regresar al inicio";

button.onclick = function relocate_home() {
  location.href = "index.html";
};

bodyDiv.append(button);