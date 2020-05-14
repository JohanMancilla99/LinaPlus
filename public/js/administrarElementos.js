const opciones = document.querySelectorAll('.opcion p');
const elementos = document.querySelectorAll('.elementos-container section');
const botones = document.querySelectorAll('.opciones-traseras button');
const mensaje = document.querySelector(".imkindagetoutofhere");

function esconder() {

    elementos.forEach(elemento => {

        if (!(elemento.classList.contains('esconder-partial'))) {
            elemento.classList.toggle("esconder-partial");
        }

    });

}

function esconderOpciones() {
    for (let x = 0; x < opciones.length; x++) {
        if (opciones[x].classList.contains('esconder')) {
            opciones[x].classList.toggle('esconder');
        }
    }
}

esconder();

// animacion de las opciones 

opciones.forEach(opcion => {

    opcion.addEventListener("click", () => {

        esconderOpciones();

        if (!(opcion.classList.contains('esconder'))) {
            opcion.classList.toggle('esconder');
        }
    })

});

//cambiar de partial de acuerdo a lo que se seleccione

for (let j = 0; j < botones.length; j++) {

    botones[j].addEventListener("click", () => {

        mensaje.classList.add('esconder-partial');
        esconder();
        esconderOpciones();
        elementos[j].classList.toggle('esconder-partial');

    });

}


