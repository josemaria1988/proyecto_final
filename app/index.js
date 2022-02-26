import mostrarProductos from "./components/products/mostrarProductos.js";
import { dormitorio } from "./data/products.js"

document.addEventListener("DOMContentLoaded", (e) => {
  mostrarProductos(dormitorio);
})