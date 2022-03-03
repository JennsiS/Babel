import './fracaso.css'
import fin from './asteroide.gif'
import 'animate.css'

function newDiv(id,width,height,bckgColor) {
    let nDiv = document.createElement("div");
    nDiv.id = id;
    nDiv.style.width = width;
    nDiv.style.height = height;
    nDiv.style.backgroundColor = bckgColor;
    return nDiv;
}

    let bodyDiv = newDiv("bodyDivFracaso",100,100,"transparent");
    document.body.appendChild(bodyDiv);

    let label1 = document.createElement("label");
    label1.innerHTML = "Progreso de la misión: <br>";
    bodyDiv.appendChild(label1);

    let progress = document.createElement("div");
    progress.className="progress";
    bodyDiv.appendChild(progress);

    let progressbar = document.createElement("div");
    progressbar.className = "progress-bar progress-bar-striped progress-bar-animated";
    progressbar.role = "progressbar";
    progressbar.ariaValueNow="100";
    progressbar.ariaValueMin="0";
    progressbar.ariaValueMax="100";
    progressbar.style.width ="100%";
    progress.appendChild(progressbar);

    let title1 = document.createElement("h1");
    title1.innerHTML ="Misión Fallida";
    title1.className = "animate__animated animate__hinge";
    bodyDiv.appendChild(title1);

    let p1 = document.createElement("p");
    p1.innerHTML = "Has tomado una mala decisión, tus acciones no han cambiado en nada el curso del futuro. Ahora solo nos queda esperar que otro viajero pueda arreglar tus acciones y tú debes vivir con las consecuencias de lo que hiciste.";
    bodyDiv.appendChild(p1);

    let final = document.createElement('img');
    final.src=fin;
    final.width ="600";
    final.height="400";
    bodyDiv.appendChild(final);

    let divButton = document.createElement("div");
    divButton.className = "divButton";
    bodyDiv.appendChild(divButton);

    let button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-danger";
    button.innerHTML = "Regresar al inicio"
    button.onclick = function relocate_home()
    {
         location.href = "index.html";
    } 
    divButton.append(button);

