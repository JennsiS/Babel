"use strict";

require("./explosion.css");

var _tension = _interopRequireDefault(require("../tension.mp3"));

var _explosion2 = _interopRequireDefault(require("./explosion.jpg"));

var _decisionEmpleo = require("./decisionEmpleo");

var _decisionSecuestro = require("./decisionSecuestro");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newDiv(id, width, height, bckgColor) {
  let nDiv = document.createElement("div");
  nDiv.id = id;
  nDiv.style.width = width;
  nDiv.style.height = height;
  nDiv.style.backgroundColor = bckgColor;
  return nDiv;
}

let bodyDiv = newDiv("bodyDivExplosion", 100, 100, "transparent");
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
title1.innerHTML = '<span style="color: darkred;">Explosión nuclear en China</span>';
header.appendChild(title1);
let paragraph = document.createElement("p");
paragraph.innerHTML = "Posted by BBC<br>5 de marzo del 2022<br>La mayor catástrofe de este tipo acaba de suceder";
header.appendChild(paragraph);
let covidImg = document.createElement('img');
covidImg.src = _explosion2.default;
covidImg.width = "900";
covidImg.height = "500";
bodyDiv.appendChild(covidImg);
let p1 = document.createElement("p");
p1.innerHTML = 'En este día se vive una de las peores catástrofes que el mundo ha presenciado. Miles y miles de muertes se reportan hasta el momento y aún no se tiene un dato exacto dado que los científicos estiman que la explosión provoca como consecuencia un radio contaminado de 2000 km. Aún no se conoce la causa exacta de la explosión pero se supone que todo se debe a un mal manejo de los residuos. Algunos expertos aseguran que esta catástrofe pudo haber sido evitada y culpan completamente a la empresa de energía y al gobierno de China por permitir dicho suceso.<br> Por el momento se estima que este suceso tendrá un gran impacto ambiental a nivel mundial, además del impacto económico dado que muchos otros países mantienen relaciones con China quien tardará muchísimos años en recuperarse.<hr>';
header.appendChild(p1);
let details = document.createElement("details");
bodyDiv.appendChild(details);
let summary = document.createElement("summary");
summary.innerHTML = "Localización exacta";
details.appendChild(summary);
let moreInfo = document.createElement("p");
moreInfo.innerHTML = "27°02′42″N 120°17′00″E";
details.appendChild(moreInfo);
let p2 = document.createElement("p");
p2.innerHTML = 'Ahora que tienes una idea de lo que pasó en este día, estas listo para tu misión. Has regresado al 2022 unos meses antes de que sucediera. Tu misión es infiltrarte en la planta nuclear y lograr solucionar el problema inminente que la empresa de energía trata de ocultar. En esta explosión China se ve bastante afectada económicamente y varias fabricas que trabajan en el desarrollo de piezas para la NASA se ven afectadas consideramos que estas fabricas serán fundamentales para la fabricación de un artefacto que sea capaz de direccionar al Asteroide Delta458. Lo que hagas para lograrlo depende de tí. Elige a continuación:';
header.appendChild(p2);
let contenedorLista = document.createElement("ul");
bodyDiv.appendChild(contenedorLista);
let item1 = document.createElement("li");
item1.innerHTML = '<a href="#decision-empleo">Solicitar un empleo en la empresa de energía y trabajar desde adentro</a>';
contenedorLista.appendChild(item1);
let item2 = document.createElement("li");
item2.innerHTML = '<a href="#decision-secuestro">Secuestrar al director de la empresa</a>';
contenedorLista.appendChild(item2);
(0, _decisionEmpleo.decisionEmpleo)();
(0, _decisionSecuestro.decisionSecuestro)();