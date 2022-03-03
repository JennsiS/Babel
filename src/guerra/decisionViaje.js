export const decisionViaje = () => {
    let bodyDiv = document.getElementById("bodyDivGuerra");
    let divViaje = document.createElement("div");
    divViaje.id = "decision-viajar";
    divViaje.className ="divViaje";
    bodyDiv.appendChild(divViaje);

    let decision1 = document.createElement("h3");
    decision1.innerHTML ="Viaje a la estación internacional espacial<br>";
    divViaje.appendChild(decision1);

    let label2 = document.createElement("label");
    label2.innerHTML = "Progreso de la misión: <br>";
    divViaje.appendChild(label2);

    let progress2 = document.createElement("div");
    progress2.className="progress";
    divViaje.appendChild(progress2);

    let progressbar2 = document.createElement("div");
    progressbar2.className = "progress-bar progress-bar-striped progress-bar-animated";
    progressbar2.role = "progressbar";
    progressbar2.ariaValueNow="75";
    progressbar2.ariaValueMin="0";
    progressbar2.ariaValueMax="100";
    progressbar2.style.width ="75%";
    progress2.appendChild(progressbar2);

    let p3 = document.createElement("p");
    p3.innerHTML = "Viajas a la estación internacional espacial y tratas de estar al tanto acerca de lo que pasa dentro e intervienes como mediador entre cualquier discusión que hay entre todos los representantes de los países presentes, por el momento no parece haber ningun problema pero, ¿Crees que tus acciones han sido suficientes para detener la catástrofe?";
    divViaje.appendChild(p3);

    let result = document.createElement("a");
    result.href = "fracaso.html";
    result.innerHTML = "CONOCE TU RESULTADO";
    divViaje.appendChild(result);

};