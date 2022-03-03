export const decisionAviso = () => {
    let bodyDiv = document.getElementById("bodyDivGuerra");
    let divAviso = document.createElement("div");
    divAviso.id = "decision-aviso";
    divAviso.className ="divAviso";
    bodyDiv.appendChild(divAviso);

    let decision2 = document.createElement("h3");
    decision2.innerHTML ="Avisar del Asteroide<br>";
    divAviso.appendChild(decision2);

    let label3 = document.createElement("label");
    label3.innerHTML = "Progreso de la misión: <br>";
    divAviso.appendChild(label3);

    let progress3 = document.createElement("div");
    progress3.className="progress";
    divAviso.appendChild(progress3);

    let progressbar3 = document.createElement("div");
    progressbar3.className = "progress-bar progress-bar-striped progress-bar-animated";
    progressbar3.role = "progressbar";
    progressbar3.ariaValueNow="75";
    progressbar3.ariaValueMin="0";
    progressbar3.ariaValueMax="100";
    progressbar3.style.width ="75%";
    progress3.appendChild(progressbar3);

    let p4 = document.createElement("p");
    p4.innerHTML = " Intentas convencer a la NASA de que eres un astrónomo y que según algunos estudios que has hecho por tu cuenta has descubierto que un Asteroide se aproxima a la tierra. Inicialmente, por obvias razones, no te creen y te prohiben el acceso. Sin embargo, esperas que esto haya levantado alguna alerta y que hayan investigado tu advertencia.";
    divAviso.appendChild(p4);

    let result2 = document.createElement("a");
    result2.href = "exito.html";
    result2.innerHTML = "CONOCE TU RESULTADO";
    divAviso.appendChild(result2);
};