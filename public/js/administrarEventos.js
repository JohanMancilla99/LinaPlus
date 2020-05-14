const botones = document.querySelectorAll(".botones-administrar-eventos button");
const mensaje = document.querySelector(".mensaje-administrar-eventos");
const partials = document.querySelectorAll('.eventos-cont section');

function limpiar() {
    partials.forEach(partial => {
        if (!(partial.classList.contains("esconder-partial-eventos"))) {
            partial.classList.toggle("esconder-partial-eventos");
        }
    });
};

for (let j = 0; j < botones.length; j++) {

    botones[j].addEventListener("click", () => {

        limpiar();
        mensaje.classList.add('esconder-partial-eventos');
        partials[j].classList.toggle('esconder-partial-eventos');

    })

}

limpiar();

// ! Selectoes de crear eventos

const ignorarTrimestre = document.getElementById("ignorarTrimestre");
const ambienteEspecifico = document.getElementById("ambienteEspecifico");
const agregarActividad = document.getElementById("agregarActividad");

//valores por defecto
const actividadDiv = document.querySelector(".ce-5-1")
actividadDiv.classList.toggle("opacidadActividades");



// ignorar trimestre
ignorarTrimestre.addEventListener("click", () => {
    // color verde
    ignorarTrimestre.classList.toggle("colorSelect");
})

// ambiente especifico
ambienteEspecifico.addEventListener("click", () => {
    // color verde
    ambienteEspecifico.classList.toggle("colorSelect");
})

// agregar actividad
agregarActividad.addEventListener("click", () => {

    actividadDiv.classList.toggle("opacidadActividades");
    agregarActividad.classList.toggle("colorSelect");

})

// parametrizacion de la jornada (en construccion)

/*const opciones = document.querySelectorAll("#jornada option")
const horaInicio = document.getElementById("horaInicio");
const horaFin = document.getElementById("horaFin");

opciones[1].addEventListener("click", () => {
    horaInicio.innerHTML = "";
    horaFin.innerHTML = "";

    horaInicio.min = "6:00";
    horaInicio.max = "8:00";

})*/




