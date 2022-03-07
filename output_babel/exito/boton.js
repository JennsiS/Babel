"use strict";

export const agregarBoton = () => {
  let bodyDiv = document.getElementById("bodyDivExito");
  let divButton = document.createElement("div");
  divButton.className = "divButton";
  bodyDiv.appendChild(divButton);
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
};