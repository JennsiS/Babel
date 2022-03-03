import './comentario.css'
import 'animate.css'

function newDiv(id,width,height,bckgColor) {
    let nDiv = document.createElement("div");
    nDiv.id = id;
    nDiv.style.width = width;
    nDiv.style.height = height;
    nDiv.style.backgroundColor = bckgColor;
    return nDiv;
}

    let bodyDiv = newDiv("bodyDivComentario",100,100,"transparent");
    document.body.appendChild(bodyDiv);

    let title1 = document.createElement("h1");
    title1.innerHTML ="Benefits of Learning UX Design<br><hr>";
    title1.className ="animate__animated animate__rubberBand"
    bodyDiv.appendChild(title1);

    let title2 = document.createElement("h2");
    title2.innerHTML ='Comentario';
    bodyDiv.appendChild(title2);

    let p1 = document.createElement("p");
    p1.innerHTML = "Considero que como el artículo menciona, ultimamente existe la necesidad de utilizar la tecnología en todas nuestras actividades diarias tanto personales, sociales y de trabajo. Esto provoca que exista una mayor atención o interés en los recursos digitales como se pueden considerar las páginas web y así mismo, esto permite que crezca la competitividad y las expectativas de los usuarios que utilizan estos recursos. Actualmente existen bastantes recursos y avances en cuanto a las herramientas de desarrollo de tecnologías y por esta misma razón se espera de parte de los usuarios que los recursos que utilicen principalmente cumplan con la función a la que son destinados pero, también es sumamente importante la presentación de los mismos y la facilidad de uso.";
    bodyDiv.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = "Un error bastante común que los programadores cometen es únicamente desarrollar soluciones que los desarrolladores consideran que son las óptimas y a pesar de que pueden estar en lo correcto, es importante tomar en cuenta la opinión de los usuarios porque cuál es el sentido de desarrollar una solución que ningún usuario utilizaría, ni siquiera los usuarios objetivos. Por esta razón es importante tomar en cuenta inicialmente el diseño de un producto ya que el diseño involucra investigación, prototipado, pruebas, mejoras, etc. Y esto permite tener una mayor probabilidad de éxito ya que el proyecto se encuentra bien enfocado y probado.";
    bodyDiv.appendChild(p2);

    let title3 = document.createElement("h2");
    title3.innerHTML ='¿Cómo afecta el UX Design en la interacción con los usuarios?';
    bodyDiv.appendChild(title3);

    let p3 = document.createElement("p");
    p3.innerHTML = "Como mencionaba anteriormente la industria de la tecnología se encuentra cada vez en mayor crecimiento y por esta misma razón existe una competitividad en cuanto a los productos desarrollados ya que no únicamente se busca estos cumplan con una función sino que además sean atractivos y faciles de usar. El UX Design en su desarrollo está tomando en cuenta directamente a los usuarios de la aplicación y esto permite al desarrollador tener una idea más clara de cuales son las necesidades, requerimientos y gustos de los usuarios asegurando así un mejor resultado. Por ejemplo, la facilidad de uso de una aplicación es fundamental dado que si esta no es eficiente y entendible, los usuarios simplemente no la utilizarán. Entonces es muy necesario tomar en cuenta el diseño UX en el proceso de desarrollo de una aplicación o servicio tecnológico para que los usuarios tengan una mejor experiencia y como consecuencia el proyecto sea exitoso.";
    bodyDiv.appendChild(p3);

    let divButton = document.createElement("div");
    divButton.className = "divButton";
    bodyDiv.appendChild(divButton);

    let button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-light";
    button.innerHTML = "Regresar al inicio"
    button.onclick = function relocate_home()
    {
         location.href = "index.html";
    } 
    divButton.append(button);
    
    let footer = document.createElement("footer");
    let p4 = document.createElement("p");
    p4.innerHTML = "Autor: Jennifer Sandoval";
    footer.appendChild(p4);

    let p5 = document.createElement("p");
    p5.innerHTML = 'Referencia: <a href="https://xd.adobe.com/ideas/career-tips/many-benefits-learning-ux-design-2/">The Many Benefits of Learning UX Design</a>';
    footer.appendChild(p5);
    bodyDiv.appendChild(footer);

