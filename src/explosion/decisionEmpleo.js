export const decisionEmpleo = () => {
    let bodyDiv = document.getElementById("bodyDivExplosion");
    let divEmpleo = document.createElement("div");
    divEmpleo.id = "decision-empleo";
    divEmpleo.className = "divEmpleo";
    bodyDiv.appendChild(divEmpleo);

    let decision1 = document.createElement("h3");
    decision1.innerHTML ="Empleo<br>";
    divEmpleo.appendChild(decision1);

    let label2 = document.createElement("label");
    label2.innerHTML = "Progreso de la misión: <br>";
    divEmpleo.appendChild(label2);

    let progress2 = document.createElement("div");
    progress2.className="progress";
    divEmpleo.appendChild(progress2);

    let progressbar2 = document.createElement("div");
    progressbar2.className = "progress-bar progress-bar-striped progress-bar-animated";
    progressbar2.role = "progressbar";
    progressbar2.ariaValueNow="75";
    progressbar2.ariaValueMin="0";
    progressbar2.ariaValueMax="100";
    progressbar2.style.width ="75%";
    progress2.appendChild(progressbar2);

    let p3 = document.createElement("p");
    p3.innerHTML = "Lograste conseguir un empleo como ingeniero en la planta de energía nuclear, intentaste cambiar la logística de los manejos de residuos y lograste hacerlo sin que nadie lo supiera por unos cuantos meses, sin embargo, tu jefe inmediato te descubrió y te reportó con el director de la planta y como consecuencia te despidieron y te prohibieron la entrada para siempre.";
    divEmpleo.appendChild(p3);

    let p5 = document.createElement("p");
    p5.innerHTML = "No lograste terminar tu trabajo pero, consideras que avanzaste mucho ¿Crees que fue suficiente para prevenir la catástrofe?";
    divEmpleo.appendChild(p5);

    let result = document.createElement("a");
    result.href = "fracaso.html";
    result.innerHTML = "CONOCE TU RESULTADO";
    divEmpleo.appendChild(result);

};