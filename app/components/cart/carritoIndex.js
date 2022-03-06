import actualizarCarrito from "./actualizarCarrito.js";
import { dormitorio } from "../../data/products.js";

let carritoDeCompras = [];
export {carritoDeCompras};

export default function carritoIndex(productoId) {

  const carritoContenedor = document.getElementById('carrito-contenedor');
  let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);

  const contarProductosRepetidos = (productoRepetido) => {
    if (repetido) {
      productoRepetido.cantidad++
      document.getElementById(`cantidad${productoRepetido.id}`).innerHTML = `<p id=cantidad${productoRepetido.id}>Cantidad:${productoRepetido.cantidad}</p> `;
      actualizarCarrito(carritoDeCompras);
    }else{
      mostrarCarrito(productoId);
    }
  }

  const mostrarCarrito = (productoId) => {
    let producto = dormitorio.find(producto => producto.id == productoId);
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
                      <button id="eliminar${productoId}" class="btn-danger">Quitar</button>
                      </li>`;

    carritoContenedor.appendChild(article);
    actualizarCarrito(carritoDeCompras);
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
  }
  
  const eliminarProductoCarrito = (productoId) => {
    let botonEliminar = document.getElementById(`eliminar${productoId}`);
    botonEliminar.addEventListener('click', () => {
      Toastify({
        text: "Producto Eliminado",
        className: "info",
        style: {
          background: "red",
        }
      }).showToast();
        botonEliminar.parentElement.remove();
        carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
        actualizarCarrito(carritoDeCompras);
      });
  }
  contarProductosRepetidos(productoRepetido);
  eliminarProductoCarrito(productoId);
}