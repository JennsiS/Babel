"use strict";

import './exito.css';
import celebracionGif from './celebracion.gif';
import { agregarBoton } from './boton.js';
import 'animate.css';

function newDiv(id, width, height, bckgColor) {
  let nDiv = document.createElement("div");
  nDiv.id = id;
  nDiv.style.width = width;
  nDiv.style.height = height;
  nDiv.style.backgroundColor = bckgColor;
  return nDiv;
}

let bodyDiv = newDiv("bodyDivExito", 100, 100, "transparent");
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
progressbar.ariaValueNow = "100";
progressbar.ariaValueMin = "0";
progressbar.ariaValueMax = "100";
progressbar.style.width = "100%";
progress.appendChild(progressbar);
let title1 = document.createElement("h1");
title1.innerHTML = "Misión cumplida";
title1.className = "animate__animated animate__tada";
bodyDiv.appendChild(title1);
let p1 = document.createElement("p");
p1.innerHTML = "Tu esfuerzo ha valido la pena y has tomado la decisión correcta ¡Enhorabuena!";
bodyDiv.appendChild(p1);
let celebracion = document.createElement('img');
celebracion.src = celebracionGif;
celebracion.className = "gif";
celebracion.width = "900";
celebracion.height = "500";
bodyDiv.appendChild(celebracion);
agregarBoton();