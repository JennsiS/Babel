"use strict";

import borrando from './borrando-memoria.jpg';
import './fuera.css';
import 'animate.css';

function newDiv(id, width, height, bckgColor) {
  let nDiv = document.createElement("div");
  nDiv.id = id;
  nDiv.style.width = width;
  nDiv.style.height = height;
  nDiv.style.backgroundColor = bckgColor;
  return nDiv;
}

let col12 = document.getElementById("col12");
let col22 = document.getElementById("col22");
let col32 = document.getElementById("col32");
/*
  let bodyDiv = newDiv("bodyDivFuera",100,100,"transparent");
document.body.appendChild(bodyDiv);
*/

let title1 = document.createElement("h1");
title1.innerHTML = "¡Adiós!";
title1.className = "animate__animated animate__lightSpeedOutRight";
col12.appendChild(title1);
let memoryImg = document.createElement('img');
memoryImg.src = borrando;
memoryImg.className = "borrandoImg";
memoryImg.width = "1000";
memoryImg.height = "500";
memoryImg.className = "animate__animated animate__rotateOut";
col22.appendChild(memoryImg);
let bye = document.createElement("p");
bye.innerHTML = "<i>Después de ver el siguiente código olvidaras que existe un programa de viajeros. Buscaremos a otra persona que ocupe tu lugar ahora solo te queda esperar como todos los demás sin la posibilidad de saber que hay una esperanza.</i>";
bye.className = "animate__animated animate__zoomOut";
col22.appendChild(bye);
let symbols = document.createElement('h4');
symbols.innerHTML = "⏃⏚☊⎅⟒⎎☌ ⊑⟟⟊☍⌰⋔⋏⍜⌿⍾⍀⌇⏁⎍⎐⍙⊬⋉⋔⋏⍜⌿⍾⍾⍀⌇⏁⟊☍⌰⋔⋏⌇⏁⎍⎐⍙⊬⊑⟟⟊☍⌰⋔⋏⍜⌿⍾⏁⎍⎐⍙⊬ ⊑⟟⟊☍⌰⋔⋏⌿⍾⍀⌇⏁⎍⎐⍙⊬⋉⋔⋏⌿⍾⍾⍀⌇⏁⟊☍";
symbols.className = "animate__animated animate__lightSpeedOutRight";
col22.appendChild(symbols);
let divButton = document.createElement("div");
divButton.className = "divButton";
col32.appendChild(divButton);
let button = document.createElement("button");
button.type = "button";
button.className = "btn btn-info";
button.innerHTML = "Regresar al inicio";

button.onclick = function () {
  function relocate_home() {
    location.href = "index.html";
  }

  return relocate_home;
}();

divButton.append(button);