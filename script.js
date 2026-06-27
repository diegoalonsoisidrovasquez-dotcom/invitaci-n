const boton = document.getElementById("abrir");
const sobre = document.querySelector(".envelope");

const mensaje = document.getElementById("mensaje");
const pregunta = document.getElementById("pregunta");

const opciones = document.getElementById("opciones");

boton.addEventListener("click", () => {

    sobre.classList.add("abierto");

    boton.style.display="none";

    setTimeout(escribirMensaje,1200);

});

const texto="Hay algo que quería preguntarte desde hace unos días.\n\nMe encanta pasar tiempo contigo.";

let i=0;

function escribirMensaje(){

    if(i<texto.length){

        mensaje.innerHTML+=texto.charAt(i);

        i++;

        setTimeout(escribirMensaje,40);

    }

    else{

        setTimeout(mostrarPregunta,700);

    }

}

function mostrarPregunta(){

    pregunta.innerHTML="¿Te gustaría tener una cita conmigo la próxima semana? ❤️";

    pregunta.style.opacity=1;

    opciones.style.opacity=1;

}
const botonSi=document.getElementById("si");
const botonNo=document.getElementById("no");
const final=document.getElementById("final");

let frases=[
"No 🙈",
"¿Segura? 😂",
"Casi 😅",
"No tan rápido 🤭",
"Mejor el Sí ❤️"
];

let indice=0;

botonNo.addEventListener("mouseover",()=>{

    const ancho=window.innerWidth-150;
    const alto=window.innerHeight-80;

    botonNo.style.left=Math.random()*ancho+"px";
    botonNo.style.top=Math.random()*alto+"px";

    if(indice<frases.length){

        botonNo.innerHTML=frases[indice];
        indice++;

    }

});

botonSi.addEventListener("click",()=>{

    document.getElementById("pregunta").style.display="none";

    opciones.style.display="none";

    final.style.display="block";

    for(let i=0;i<60;i++){

        setTimeout(crearCorazon,i*120);

    }

});

function crearCorazon(){

    const corazon=document.createElement("div");

    corazon.className="corazon";

    corazon.innerHTML="❤️";

    corazon.style.left=Math.random()*100+"vw";

    corazon.style.fontSize=(20+Math.random()*30)+"px";

    document.body.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },4000);

}