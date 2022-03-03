import './inicio.css'
import { inicioHistoria } from './historia.js'


function newDiv(id,width,height,bckgColor) {
    let nDiv = document.createElement("div");
    nDiv.id = id;
    nDiv.style.width = width;
    nDiv.style.height = height;
    nDiv.style.backgroundColor = bckgColor;
    return nDiv;
}

export const startApp = () => {

    let bodyDiv = newDiv("bodyDiv",100,100,"transparent");
    document.body.appendChild(bodyDiv);

    let jumbotron = document.createElement("div");
    jumbotron.className ="jumbotron jumbotron-fluid";
    bodyDiv.appendChild(jumbotron);

    let container = document.createElement("div");
    container.className ="container";
    jumbotron.appendChild(container);

    let title1 = document.createElement("h1");
    title1.innerHTML ="Laboratorio 6";
    title1.className = "display-4";
    container.appendChild(title1);

    let paragraph = document.createElement("p");
    paragraph.innerHTML ="Sistemas y tecnologías web <br>Jennifer Sandoval<br>";
    paragraph.className = "lead";
    container.appendChild(paragraph);

    let github = document.createElement("a");
    github.href = "https://github.com/JennsiS/Lab-6-Webpack";
    github.innerHTML = "Link del repositorio";
    container.appendChild(github);

    inicioHistoria();

};