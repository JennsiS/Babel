export const decision2 = () => {
    let bodyDiv = document.getElementById("bodyDivMutacion");
    
    let divHackeo = document.createElement("div");
    divHackeo.id = "decision-hackeo";
    divHackeo.className ="divHackeo";
    bodyDiv.appendChild(divHackeo);

    let decision2 = document.createElement("h3");
    decision2.innerHTML ="Hackeo<br>";
    divHackeo.appendChild(decision2);

    let label3 = document.createElement("label");
    label3.innerHTML = "Progreso de la misión: <br>";
    divHackeo.appendChild(label3);

    let progress3 = document.createElement("div");
    progress3.className="progress";
    divHackeo.appendChild(progress3);

    let progressbar3 = document.createElement("div");
    progressbar3.className = "progress-bar progress-bar-striped progress-bar-animated";
    progressbar3.role = "progressbar";
    progressbar3.ariaValueNow="75";
    progressbar3.ariaValueMin="0";
    progressbar3.ariaValueMax="100";
    progressbar3.style.width ="75%";
    progress3.appendChild(progressbar3);

    let p4 = document.createElement("p");
    p4.innerHTML = "Logras Hackear la computadora personal del embajador y cancelas el compromiso que lo obliga a viajar a Estados Unidos. Sin embargo, el embajador aún no se encuentra vacunado por lo que corres el riesgo de que aunque no viaje en este momento, algún día se infecte y pueda ocurrir lo esperado.";
    divHackeo.appendChild(p4);

    let result2 = document.createElement("a");
    result2.href = "fracaso.html";
    result2.innerHTML = "CONOCE TU RESULTADO";
    divHackeo.appendChild(result2);
    
};