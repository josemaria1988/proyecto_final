const btnAumentar = document.querySelector('.btn-primary');
const span = document.getElementById('span1');
let contador=0;

btnAumentar.addEventListener('click', () => {
    console.log("me diste click aumentar")
    contador++
    span.textContent = contador;
});

const btnDisminuir = document.querySelector('.btn-danger');

btnDisminuir.addEventListener('click', () => {
    console.log("diste click en disminuir")
    contador--
    span.textContent = contador;
})