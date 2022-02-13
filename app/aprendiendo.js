const btnAumentar = document.querySelector('.btn-primary');
const span = document.getElementById('span1');
const mensaje = document.getElementById('span2');
const mensajeBorron = document.getElementById('span3')
const btnBorrar = document.querySelector('.btn-success');

let contador=0;
let contadorAumentar=0;
let contadorDisminuir=0;

btnAumentar.addEventListener('click', () => {
    console.log("Aumenta")
    contador++
    contadorAumentar++
    span.textContent = contador;
    mensaje.textContent = `Aumentaste ${contadorAumentar} veces el contador y aumentaste el contador a ${contador}.`
    mensajeBorron.textContent = "";
});

const btnDisminuir = document.querySelector('.btn-danger');

mensaje.textContent = "";
btnDisminuir.addEventListener('click', () => {
    console.log("Disminuye")
    contador--
    contadorDisminuir++
    span.textContent = contador;
    mensaje.textContent = `Disminuíste ${contadorDisminuir} veces el contador y redujiste el contador a ${contador}`;
    mensajeBorron.textContent = "";
});

mensaje.textContent = "";
btnBorrar.addEventListener('click', () => {
    contador = 0;
    contadorAumentar = 0;
    contadorDisminuir = 0;
    console.log(contador)
    mensajeBorron.textContent = "Borron y cuenta nueva!"
    actualizarNumeros(contador, contadorAumentar, contadorDisminuir);
});

function actualizarNumeros () {
    document.getElementById("span1").innerHTML = contador;
    document.getElementById("span2").innerHTML = `Empezamos de nuevo ${contador}`;
}