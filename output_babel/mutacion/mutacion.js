"use strict";

var _coronavirus = _interopRequireDefault(require("./coronavirus.jpg"));

var _tension = _interopRequireDefault(require("../tension.mp3"));

require("./mutacion.css");

var _decision = require("./decision1");

var _decision2 = require("./decision2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newDiv(id, width, height, bckgColor) {
  let nDiv = document.createElement("div");
  nDiv.id = id;
  nDiv.style.width = width;
  nDiv.style.height = height;
  nDiv.style.backgroundColor = bckgColor;
  return nDiv;
}

let bodyDiv = newDiv("bodyDivMutacion", 100, 100, "transparent");
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
title1.innerHTML = '<span style="color: darkred;">Mutación fatal COVID-19</span>';
header.appendChild(title1);
let paragraph = document.createElement("p");
paragraph.innerHTML = "Posted by CNN<br>10 de julio del 2022<br>La peor mutación registrada del coronavirus hasta ahora";
header.appendChild(paragraph);
let covidImg = document.createElement('img');
covidImg.src = _coronavirus.default;
covidImg.width = "1200";
covidImg.height = "600";
bodyDiv.appendChild(covidImg);
let p1 = document.createElement("p");
p1.innerHTML = 'Desde el año 2019 la pandemia COVID-19 ha sido un tema recurrente y todo el mundo se ha visto afectado por ella. A inicios de este año se pensaba que la pandemia estaba llegando a su fin, hasta que en este día el embajador de Senegal viajó desde su país hacia Estados Unidos y fue contagiado de COVID-19, sin embargo, el mayor problema fue que el embajador no se encontraba vacunado y esto provocó que el virus tuviera una mutación mucho más letal que las variantes anteriores. Esta variante actúa en un tiempo menor y los síntomas son bastantes severos. Además, se sabe que es bastante contagioso dado que por el momento a 5 días del primer reporte se han registrado por lo menos 82,000 muertes,con una tasa de mortalidad del 100%, es decir, quién se infecta presenta una probabilidad completa de morir. <hr>';
header.appendChild(p1);
let details = document.createElement("details");
bodyDiv.appendChild(details);
let summary = document.createElement("summary");
summary.innerHTML = "Detalles del virus";
details.appendChild(summary);
let moreInfo = document.createElement("p");
moreInfo.innerHTML = "Tiene una mutacion en el gen de la proteína Spike que no permite ser reconocido por la vacuna, por lo que la vacunación no es una garantía de no infectarse por esta variante.";
details.appendChild(moreInfo);
let p2 = document.createElement("p");
p2.innerHTML = 'Ahora que tienes una idea de lo que pasó en este día, estas listo para tu misión. Has regresado al 2022 unos meses antes de que la infección sucediera. Tu misión principal es evitar que el embajador de Senegal viaje a Estados Unidos ya que es el paciente 0 de esta variante. En la pandemia de esta variante mueren varios científicos y astrónomos, creemos que estas personas serán fundamentales para detener al Asteroide Delta458. Lo que hagas para lograrlo depende de tí. Elige a continuación:';
header.appendChild(p2);
let contenedorLista = document.createElement("ul");
bodyDiv.appendChild(contenedorLista);
let item1 = document.createElement("li");
item1.innerHTML = '<a href="#decision-muerte">Matar al embajador de Senegal</a>';
contenedorLista.appendChild(item1);
let item2 = document.createElement("li");
item2.innerHTML = '<a href="#decision-hackeo">Hackear al embajador</a>';
contenedorLista.appendChild(item2);
(0, _decision.decision1)();
(0, _decision2.decision2)();