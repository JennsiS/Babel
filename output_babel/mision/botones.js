"use strict";

export const agregarBotones = () => {
  let bodyDiv = document.getElementById("bodyDivMision");
  let divButtons = document.createElement("div");
  divButtons.className = "divButtons";
  bodyDiv.appendChild(divButtons);
  let button = document.createElement("button");
  button.type = "button";
  button.className = "btn-grad";
  button.innerHTML = "Estoy de acuerdo";

  button.onclick = function () {
    function relocate_home() {
      location.href = "localizacion.html";
    }

    return relocate_home;
  }();

  divButtons.append(button);
  let button2 = document.createElement("button");
  button2.type = "button";
  button2.className = "btn-grad2";
  button2.innerHTML = "No estoy de acuerdo";

  button2.onclick = function () {
    function relocate_home() {
      location.href = "fuera.html";
    }

    return relocate_home;
  }();

  divButtons.append(button2);
};