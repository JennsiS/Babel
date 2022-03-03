import asteroide from './asteroide.jpg'
import aphelion from './Aphelion.mp3'
import 'animate.css'

export const inicioHistoria = () => {
    let title = document.createElement("h2");
    title.id ="historia";
    title.className ="animate__animated animate__bounce";
    title.innerHTML ="Programa de viajeros 2022";
    bodyDiv.appendChild(title);

    let asteroideImg = document.createElement('img');
    asteroideImg.src= asteroide;
    asteroideImg.className ="asteroideImg";
    asteroideImg.width ="900";
    asteroideImg.height="600";
    bodyDiv.appendChild(asteroideImg);

    let divAudio = document.createElement("div");
    bodyDiv.appendChild(divAudio);

    let music = document.createElement("audio");
    music.src = aphelion;
    music.controls = "True";
    music.autoplay = "True";
    music.loop = "True";
    divAudio.appendChild(music);

    let p1 = document.createElement("p");
    p1.innerHTML = "Es el año 2072, hace meses que se vive una constante crisis en el mundo muchas personas han muerto a causa de pandemias, guerras y desastres naturales nunca antes vistos.<br> Todo esto es malo pero, está apunto de ocurrir lo peor, de esto no hay vuelta atrás. La NASA descubrió que está apunto de chocar un asteroide contra la tierra, sin embargo, reconocen que es muy tarde para hacer algo ya que este se encuentra muy cerca. Todo el mundo cree que vamos a morir en meses y eso únicamente ha aumentado el pánico, las peleas y alborotos.";
    bodyDiv.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML ='Una organización poco conocida tiene información que no ha compartido con todo el mundo, porque tienen una herramienta en sus manos que puede llegar a ser revolucionaria pero, peligrosa. <br>  <b><span style="color: crimson;">Una maquina del tiempo. </span></b><br>No quieren compartir esta información con todo el mundo porque saben que se generarían aún más conflictos y podría ser usado con malas intenciones. La intensión de la organización es enviar a personas capacitadas al pasado para prevenir algunos de los eventos más catastroficos que nos han llevado hasta este momento. Tú eres uno de ellos ¿Aceptas el reto?';
    bodyDiv.appendChild(p2);

    let divButtons = document.createElement("div");
    divButtons.className = "divButtons";
    bodyDiv.appendChild(divButtons);


    let button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-info";
    button.innerHTML = "Mision"
    button.onclick = function relocate_home()
    {
         location.href = "mision.html";
    } 
    divButtons.append(button);

    let button2 = document.createElement("button");
    button2.type = "button";
    button2.className = "btn btn-dark";
    button2.innerHTML = "Estoy fuera"
    button2.onclick = function relocate_home()
    {
         location.href = "fuera.html";
    } 
    divButtons.append(button2);


    let label1 = document.createElement("label");
    label1.innerHTML = "Progreso de la misión: ";
    bodyDiv.appendChild(label1);


    let progress = document.createElement("div");
    progress.className="progress";
    bodyDiv.appendChild(progress);

    let progressbar = document.createElement("div");
    progressbar.className = "progress-bar progress-bar-striped progress-bar-animated";
    progressbar.role = "progressbar";
    progressbar.ariaValueNow="0";
    progressbar.ariaValueMin="0";
    progressbar.ariaValueMax="100";
    progressbar.style.width ="0%";
    progress.appendChild(progressbar);
};