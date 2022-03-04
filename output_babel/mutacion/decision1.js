"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decision1 = void 0;

const decision1 = () => {
  let bodyDiv = document.getElementById("bodyDivMutacion");
  let divAsesinato = document.createElement("div");
  divAsesinato.id = "decision-muerte";
  divAsesinato.className = "divAsesinato";
  bodyDiv.appendChild(divAsesinato);
  let decision1 = document.createElement("h3");
  decision1.innerHTML = "Asesinato<br>";
  divAsesinato.appendChild(decision1);
  let label2 = document.createElement("label");
  label2.innerHTML = "Progreso de la misión: <br>";
  divAsesinato.appendChild(label2);
  let progress2 = document.createElement("div");
  progress2.className = "progress";
  divAsesinato.appendChild(progress2);
  let progressbar2 = document.createElement("div");
  progressbar2.className = "progress-bar progress-bar-striped progress-bar-animated";
  progressbar2.role = "progressbar";
  progressbar2.ariaValueNow = "75";
  progressbar2.ariaValueMin = "0";
  progressbar2.ariaValueMax = "100";
  progressbar2.style.width = "75%";
  progress2.appendChild(progressbar2);
  let p3 = document.createElement("p");
  p3.innerHTML = "Logras interceptar al embajador en su vehículo y lo asesinas. Todo el país está de luto y se encuentran confundidos. Por suerte nadie te reconoció y su muerte fue clasificada como un accidente de automóvil. ¿Crees que esta acción fue suficiente para detener la mutación?";
  divAsesinato.appendChild(p3);
  let result = document.createElement("a");
  result.href = "exito.html";
  result.innerHTML = "CONOCE TU RESULTADO";
  divAsesinato.appendChild(result);
};

exports.decision1 = decision1;