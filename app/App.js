const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

function actualizarCarrito(carritoDeCompras) {
  console.log(carritoDeCompras)
  contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
  precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
}

//actualizar Carrito

let carritoDeCompras = []
const contenedorCarrito = document.getElementById('carrito-contenedor');

function agregarAlCarrito(id) {

  let repetido = carritoDeCompras.find(productoR => productoR.id == id);
  if (repetido) {
    repetido.cantidad = repetido.cantidad + 1;
    document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id=cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`;
    actualizarCarrito(carritoDeCompras);
  } else {
    let producto = DORMITORIO.find(prod => prod.id == id);
    carritoDeCompras.push(producto);
    console.log(carritoDeCompras);

    producto.cantidad = 1;
    let div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio:${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                    <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;

    contenedorCarrito.appendChild(div);

    actualizarCarrito(carritoDeCompras);

    let botonEliminar = document.getElementById(`eliminar${producto.id}`);

    botonEliminar.addEventListener('click', () => {
      botonEliminar.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(el => el.id != producto.id);
      actualizarCarrito(carritoDeCompras);
    });
  }
}

const contenedorProductos = document.getElementById('contenedor-productos');

function mostrarProductos(array) {

    array.forEach(producto => {
        let div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML += `<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example"
                          tabindex="0">
                           <h4 id="list-item-1">${producto.tipo}</h4>
                           <article class="row">
                              <div class="col shadow-lg p-3 mb-5 bg-body rounded">
                                  <div class="card producto" style="width: 18rem;">
                              <div class="modal fade" id="exampleModal${producto.id}" tabindex="-1"
                                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                      <div class="modal-dialog modal-dialog-centered">
                                          <div class="modal-content">
                                              <div class="modal-header">
                                                  <h6 class="modal-title" id="exampleModalLabel">${producto.nombre}</h6>
                                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                      aria-label="Close"></button>
                                              </div>
                                              <div class="modal-body">
                                                  <img class="img-fluid"
                                                      src=${producto.img}>
                                                  <p class="card-text">
                                                  <p>${producto.descrip}</p>
                                                  <strong>Precio Contado Gs. ${producto.precio}</strong></p>
                                              </div>
                                              <div class="modal-footer">
                                                  <button type="button" class="btn btn-secondary"
                                                      data-bs-dismiss="modal">Cerrar</button>
                                                  <a type="button" class="btn btn-primary" id="boton1">Comprar</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <img src=${producto.img}
                                  class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal52">
                              <div class="card-body">
                                  <h5 class="card-title">Contado Gs. ${producto.precio}</h5>

                                  <a id='boton'${producto.id} class="btn btn-primary">Comprar</a>`;

        contenedorProductos.appendChild(div);

        let boton = document.getElementById(`boton${producto.id}`);

        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id);
        });

    });
}
