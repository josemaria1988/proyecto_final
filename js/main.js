//Variables Globales:
let id = 0;
let nombre = "";
let precio = 0;
let stock = 0;
let total = 0;
let otroProducto = false;

//array de productos
let arrayConjuntoInfantil = [
    {
        id = 961,
        nombre = "Ropero Bala de Menta",
        precio = 762,
        stock = "10",
    }, {
        id = 962,
        nombre = "Comoda Bala de Menta",
        precio = 558,
        stock = 10,
    }, {
        id = 963,
        nombre = "Cuna Bala de Menta",
        precio = 619,
        stock = 10,
    }
];


console.log(arrayConjuntoInfantil);

// function agregarCompra() {
//     do {
//         let producto = prompt("¿Querés comprar el conjunto de bebe completo o solo la cuna o comoda?", "Ej: completo, cuna, comoda, ropero");
//         let cantidad = parseInt(prompt("¿Cuantos querés comprar?"));

//         switch (producto) {
//             case "cuna":
//                 precio = 500;
//                 break;
//             case "comoda":
//                 precio = 700;
//                 break;
//             case "ropero":
//                 precio = 900
//                 break;
//             case "completo":
//                 precio = 2100;
//                 break;

//             default:
//                 alert("Alguno de los datos ingresados es incorrecto");
//                 precio = 0;
//                 cantidad = 0;
//         }
//         total = total + precio * cantidad;
//         otroProducto = confirm("¿Querés agregar otro producto?");
//     } while (otroProducto);
// }

// function aplicarDescuento(total) {
//     if (total >= 2000) {
//         total = total * 0.85;
//     }
//     return total;
// }

// function calcularEnvio(total) {
//     let confirmacion = confirm("¿Querés envío a domicilio?")
//     if (confirmacion & total >= 1500) {
//         alert("Tenés envío gratis. El total de tu compra es: " + total);
//     } else if (confirmacion && total < 1000 && total != 0) {
//         total = total + 700;
//         alert("El costo de envío es $700. El total de tu compra es: " + total);
//     } else {
//         alert("El total de tu compra es: " + total);
//     }
//     return total;
// }
// agregarCompra();
// calcularEnvio(aplicarDescuento(total));


//Funcion constructora Productos:

// class Producto {
//     constructor(codigo, nombre, marca, modelo, precio) {
//         this.codigo = codigo;
//         this.nombre = nombre;
//         this.marca = marca;
//         this.modelo = modelo;
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaComision() {
//         this.precio = this.precio / 0.85;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }

// const producto961 = new Producto(961, "Ropero", "Henn", "Bala de Menta", 762);
// const producto962 = new Producto(962, "Comoda", "Henn", "Bala de Menta", 558);
// const producto963 = new Producto(963, "Cuna", "Henn", "Bala de Menta", 619);