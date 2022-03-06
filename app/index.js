import mostrarProductos from "./app.js";
import { dormitorio } from "./data/products.js"

document.addEventListener("DOMContentLoaded", (e) => {
  mostrarProductos(dormitorio);
})