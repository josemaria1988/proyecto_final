import actualizarCarrito from "./actualizarCarrito.js";
import { dormitorio } from "../../data/products.js";

let carritoDeCompras = []
const carritoContenedor = document.getElementById('carrito-contenedor');

export default function agregarAlCarrito(id) {

  let repetido = carritoDeCompras.find(productoR => productoR.id == id);
  if (repetido) {
    repetido.cantidad = repetido.cantidad + 1;
    document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id="cantidad${repetido.id}">Cantidad:${repetido.cantidad}</p>`;
    actualizarCarrito(carritoDeCompras);
  } else {
    let producto = dormitorio.find(producto => producto.id == id);
    carritoDeCompras.push(producto);
    console.log(carritoDeCompras);

    producto.cantidad = 1;
    let article = document.createElement('article');
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

    let botonEliminar = document.getElementById(`eliminar${producto.id}`);

    botonEliminar.addEventListener('click', () => {
      botonEliminar.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(el => el.id != producto.id);
      actualizarCarrito(carritoDeCompras);
    });
  }
}