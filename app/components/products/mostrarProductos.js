import agregarAlCarrito from "../cart/agregarAlCarrito.js";

const contenedorProductos = document.getElementById('cardDormitorio');

export default function mostrarProductos(array) {

    array.forEach (producto => {
        let div = document.createElement('div');
        div.innerHTML += `
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
                                <ul>
                                    <li>${producto.descrip}</li>
                        </ul>
                        <strong>Precio Contado Gs. ${producto.precio}</strong></p>
                         </div>
                         <div class="modal-footer">
                             <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Cerrar</button>
                        <a type="button" class="btn btn-primary" id="boton${producto.id}">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img src=${producto.img}
        class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal${producto.id}">
    <div class="card-body">
        <h5 class="card-title">Contado Gs. ${producto.precio}</h5>

        <a id="boton${producto.id}" class="btn btn-primary">Comprar</a>

        <!--FORMULARIO CONSULTA DE PRODUCTO-->
        <button data-bs-toggle="modal" data-bs-target="#consultaModal18"
            class="btn btn-secondary">Realizar consulta</button>

        <div class="modal fade" id="consultaModal${producto.id}" tabindex="-1"
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
                            <form class="form-contacto">
                                <h6>Su consulta sobre este producto</h6>
                                <input type="text" name="Nombre" placeholder="Nombre">
                                <input type="text" name="email" placeholder="Correo">
                                <input type="text" name="telefono" placeholder="Teléfono">
                                <textarea name="mensaje"
                                    placeholder="Escriba aquí su mensaje"></textarea>
                                <input type="button" value="ENVIAR">
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger"
                                data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

        contenedorProductos.appendChild(div);

        let boton = document.getElementById(`boton${producto.id}`);

        boton.addEventListener('click', () => {
            console.log(producto.id)
            agregarAlCarrito(producto.id);
        });

    });
}