// Simulador de compra web

//Variables Globales:
let id = 0;
let nombre = "";
let producto = "";
let modelo = "";
let precio = 0;
let stock = 0;
let total = 0;
let mostrarProductos = "";
let otroProducto = false;
//array UNO
let arrayConjuntoBalaDeMenta = [{
    id: 961,
    nombre: "Ropero Bala de Menta",
    modelo: "Bala de Menta",
    precio: 762,
    stock: 10,
}, {
    id: 962,
    nombre: "Comoda Bala de Menta",
    modelo: "Bala de Menta",
    precio: 558,
    stock: 10,
}, {
    id: 963,
    nombre: "Cuna Bala de Menta",
    modelo: "Bala de Menta",
    precio: 619,
    stock: 10,
}
];

//Array DOS
let arrayConjuntoAlvin = [{
    id: 1001,
    nombre: "Ropero Alvin",
    modelo: "Alvin",
    precio: 983,
    stock: 15,
}, {
    id: 1002,
    nombre: "Cuna Alvin",
    modelo: "Alvin",
    precio: 852,
    stock: 15,
}, {
    id: 1003,
    nombre: "Comoda Alvin",
    modelo: "Alvin",
    precio: 636,
    stock: 15,
}
]


// arrayConjuntoBalaDeMenta.forEach(verArray);
// console.log(arrayConjuntoBalaDeMenta);
// document.getElementById("mostrarUno").innerHTML = mostrarProductos;

// mostrarProductos = "";
// arrayConjuntoAlvin.forEach(verArray);
// console.log(arrayConjuntoAlvin);
// document.getElementById("diferente").innerHTML = mostrarProductos;

// function verArray(item, index) {
//     mostrarProductos += "<li>" + JSON.stringify(item) + JSON.stringify(index) + "</li>";
// }



function verArray(item, index) {
    mostrarProductos += index + ": " + JSON.stringify(item) + "<br>";
}

agregarCompra();
calcularEnvio(aplicarDescuento(total));
cambiarProducto();

function agregarCompra() {
    do {
        producto = prompt("¿Querés comprar ropero, cuna o comoda?", "Ej: Ropero (1), Cuna (2), Comoda (3)");
        modelo = parseInt(prompt("¿De que modelo? \n\n1- Bala de Menta \n 2- Alvin"));
        let cantidad = parseInt(prompt("¿Cuantos querés comprar?"));

        if(modelo == 1) {
        switch ("1") {
            case "1":
                precio = 762;
                break;
            case "2":
                precio = 619;
                break;
            case "3":
                precio = 558;
                break;

            default:
                alert("Alguno de los datos ingresados es incorrecto");
                precio = 0;
                cantidad = 0;
        }
    }
    if (modelo == 2){
        switch ("2") {
            case "1":
                precio = 983;
                break;
            case "2":
                precio = 852;
                break;
            case "3":
                precio = 636;
                break;
            default:
                alert("Alguno de los datos ingresados es incorrecto");
                precio = 0;
                cantidad = 0;
        }
    }
        total = total + precio * cantidad;
        otroProducto = confirm("¿Querés agregar otro producto?");
    } while (otroProducto);
}

function aplicarDescuento(total) {
    if (total >= 2000) {
        total = total * 0.85;
        alert("Tu compra supera el mínimo para mayoristas, por lo que tenés un 15% de descuento.")
    }
    return total;
}

function calcularEnvio(total) {
    let confirmacion = confirm("¿Querés envío a domicilio?")
    if (confirmacion & total >= 1500) {
        alert("Tenés envío gratis. El total de tu compra es: " + total);
    } else if (confirmacion && total < 1000 && total != 0) {
        total = total + 700;
        alert("El costo de envío es $700. El total de tu compra es: " + total);
    } else {
        alert("El total de tu compra es: " + total);
    }
    return total;
}

function cambiarProducto() {
    let preguntar = true;
    let respuesta = "";
    let cambiarProducto = "";
    let productoEncontrado = "";

    respuesta = parseInt(prompt("Desea cambiar un producto? \n\n1- Sí \n2- No."));

    while (preguntar) {
        if (respuesta == 1) {
            cambiarProducto = prompt("Introduzca el nombre del producto que desea cambiar");
            productoEncontrado = arrayConjuntoAlvin.find(producto => producto.nombre === cambiarProducto);

            if (productoEncontrado) {
                alert("Producto a cambiar encontrado");
                arrayConjuntoAlvin = arrayConjuntoAlvin.filter(producto => producto.nombre !== cambiarProducto);
                preguntar = false;
            } else {
                alert("No se encontró el producto indicado");
            }

        }else if (respuesta == 2) {
            alert("Ha seleccionado no cambiar ningún producto.");
            preguntar = false;
        } else {
            alert("Ha seleccionado una opción no válida. Introduzca (1) si desea cambiar un producto, o introduzca (2) en caso contrario.");
            respuesta = parseInt(prompt("Desea cambiar un producto? \n\n1- Si \n2- No."));
        }
    }
}