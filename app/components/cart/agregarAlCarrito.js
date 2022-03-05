import actualizarCarrito from "./actualizarCarrito.js";
import { dormitorio } from "../../data/products.js";

let carritoDeCompras = [];
export {carritoDeCompras};
const carritoContenedor = document.getElementById('carrito-contenedor');

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("carrito")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carrito"))
    actualizarCarrito(carritoDeCompras);
  }
})

export default function agregarAlCarrito(id) {

    let producto = dormitorio.find(producto => producto.id == id);
    carritoDeCompras.push(producto);

    producto.cantidad = 1;
    let article = document.createElement('article');
    article.classList.add('container')
    article.innerHTML += `
                    <ul class="list-group mb-3">
                      <li class="list-group-item d-flex justify-content-between lh-sm">
                                  <div class="row rounded">
                                  <img src=${producto.img} class="rounded float-start w-50">
                                    <p class="my-0">${producto.nombre}</p>
                                    <small class="text-muted">${producto.descrip}</small>
                                  </div>
                                <span class="text-bold">${producto.precio}</span>
                      <button id="eliminar${producto.id}" class="btn-danger">Quitar</button>
                      </li>`;

    carritoContenedor.appendChild(article);
    actualizarCarrito(carritoDeCompras);
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

    let botonEliminar = document.getElementById(`eliminar${producto.id}`);
    botonEliminar.addEventListener('click', () => {
      Toastify({
        text: "Producto Eliminado",
        className: "info",
        style: {
          background: "red",
        }
      }).showToast();
        botonEliminar.parentElement.remove();
        carritoDeCompras = carritoDeCompras.filter(el => el.id != producto.id);
        actualizarCarrito(carritoDeCompras);
      });
    }