"use strict";

var _tension = _interopRequireDefault(require("../tension.mp3"));

var _imagenGuerra = _interopRequireDefault(require("./imagen-guerra.jpg"));

require("./guerra.css");

var _decisionViaje = require("./decisionViaje");

var _decisionAviso = require("./decisionAviso");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newDiv(id, width, height, bckgColor) {
  let nDiv = document.createElement("div");
  nDiv.id = id;
  nDiv.style.width = width;
  nDiv.style.height = height;
  nDiv.style.backgroundColor = bckgColor;
  return nDiv;
}

let bodyDiv = newDiv("bodyDivGuerra", 100, 100, "transparent");
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
progressbar.ariaValueNow = "45";
progressbar.ariaValueMin = "0";
progressbar.ariaValueMax = "100";
progressbar.style.width = "45%";
progress.appendChild(progressbar);
let music = document.createElement("audio");
music.src = _tension.default;
music.controls = "False";
music.autoplay = "true";
music.loop = "True";
bodyDiv.appendChild(music);
let article = document.createElement("article");
bodyDiv.appendChild(article);
let header = document.createElement("header");
article.appendChild(header);
let title1 = document.createElement("h1");
title1.innerHTML = '<span style="color: darkred;">Guerra entre Rusia y USA</span>';
header.appendChild(title1);
let paragraph = document.createElement("p");
paragraph.innerHTML = "Posted by ABC<br>23 de Septiembre del 2022<br><i>La llaman la tercera guerra mundial</i>";
header.appendChild(paragraph);
let guerraImg = document.createElement('img');
guerraImg.src = _imagenGuerra.default;
guerraImg.width = "1000";
guerraImg.height = "600";
bodyDiv.appendChild(guerraImg);
let p1 = document.createElement("p");
p1.innerHTML = 'Desde hace años ha habido tensión entre estas potencias, pero hasta este momento no se había concretado nada tan serio como una guerra. La incomodidad entre ambos países ha surgido a partir de diferencias que aún no han sido aclaradas pero, parece ser que tienen que ver con la estación internacional espacial y por el momento se han parado las actividades en la estación de forma indefinida. En estos momentos tanto Rusia como USA han declarado que están preparando a sus ejercitos y que están listos para una tercera guerra mundial, cada país se encuentra realizando acuerdos con otros países <i>"formando bandos"</i> y solo hace falta que uno de los dos países dé un paso al frente. <hr>';
header.appendChild(p1);
let details = document.createElement("details");
bodyDiv.appendChild(details);
let summary = document.createElement("summary");
summary.innerHTML = "Detalles de la guerra";
details.appendChild(summary);
let moreInfo = document.createElement("p");
moreInfo.innerHTML = "En este momento los aliados de Rusia son Armenia, Bielorrusia, Kazajistán, Kiguistán y Tayikistán. Por otro lado los aliados de USA son Gran Bretaña, Ucrania y algunos países de la OTAN.";
details.appendChild(moreInfo);
let p2 = document.createElement("p");
p2.innerHTML = ' En este día comenzó la disputa que llevó a la tercera guerra mundial, comenzando por Rusia y USA. Esta misión es la más importante dado que como pudiste observar en la noticia, las actividades de la estación internacional espacial fueron detenedias por varios meses. Creemos que este suceso fue decisivo en cuanto a pasar desapercibido el  Asteroide Delta458 y si esto no hubiera ocurrido tendríamos más tiempo para desarrollar una solución. Has regresado al 2022 unos meses antes de que la guerra iniciara. Tu misión principal es evitar que las actividades en la estación internacional espacial se detengan, lo que hagas para lograrlo depende de tí. Elige a continuación:';
header.appendChild(p2);
let contenedorLista = document.createElement("ul");
bodyDiv.appendChild(contenedorLista);
let item1 = document.createElement("li");
item1.innerHTML = '<a href="#decision-viajar">Viajar a la estación internacional espacial</a>';
contenedorLista.appendChild(item1);
let item2 = document.createElement("li");
item2.innerHTML = '<a href="#decision-aviso">Avisar acerca del inminente Asteroide</a>';
contenedorLista.appendChild(item2);
(0, _decisionViaje.decisionViaje)();
(0, _decisionAviso.decisionAviso)();