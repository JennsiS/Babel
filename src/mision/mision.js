import { agregarBotones } from './botones';
import './mision.css'

function newDiv(id,width,height,bckgColor) {
    let nDiv = document.createElement("div");
    nDiv.id = id;
    nDiv.style.width = width;
    nDiv.style.height = height;
    nDiv.style.backgroundColor = bckgColor;
    return nDiv;
}

    let bodyDiv = newDiv("bodyDivMision",100,100,"transparent");
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
    progressbar.ariaValueNow="5";
    progressbar.ariaValueMin="0";
    progressbar.ariaValueMax="100";
    progressbar.style.width ="5%";
    progress.appendChild(progressbar);

    let title1 = document.createElement("h1");
    title1.innerHTML ="Primera misión";
    bodyDiv.appendChild(title1);

    let p1 = document.createElement("p");
    p1.innerHTML = "Has tomado la elección correcta. Antes de empezar tu primera misión debemos dejar unas reglas claras:";
    bodyDiv.appendChild(p1);

    let contenedorLista = document.createElement("ol");
    bodyDiv.appendChild(contenedorLista);

    let item1 = document.createElement("li");
    item1.innerHTML="Antes de ir a tu misión no puedes comentar nada de lo que harás con nadie, tampoco en el pasado. Te tenemos vigilado.";
    contenedorLista.appendChild(item1);

    let item2 = document.createElement("li");
    item2.innerHTML="Una vez aceptes la misión no hay vuelta atrás.";
    contenedorLista.appendChild(item2);

    let item3 = document.createElement("li");
    item3.innerHTML="Después de cada decisión que tomes podrás saber tu resultado, si no es lo que esperabamos no puedes regresar al futuro. Tienes que vivir en el pasado.";
    contenedorLista.appendChild(item3);

    let item4 = document.createElement("li");
    item4.innerHTML="No te distraigas, tu misión es lo más importante.";
    contenedorLista.appendChild(item4);

    agregarBotones();
    

