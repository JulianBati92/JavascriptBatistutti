
class Producto {
  constructor(mate, modelo, precio, stock) {
    this.mate = mate;
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
  }

mostrarProducto() {
  console.log(
    `Este ${this.modelo} ${this.mate} y el precio es $${this.precio}`
  );
}

let listaDeProductos = [
     {id:1, mate: "completo", modelo: "set", precio: 1000, stock:3}, 
     {id:2, mate: "crem", modelo: "imperial plata", precio: 2850, stock: 8}, 
     {id:3, mate: "blanco", modelo: "imperial plata", precio: 2600, stock: 15}, 
     {id:4, mate: "rosalia", modelo: "imperial", precio: 2500, stock:10}, 
     {id:5, mate: "beige", modelo: "torpedo", precio: 2200, stock: 22}, 
     {id:6, mate: "blanco", modelo: "imperial", precio: 2500, stock: 7}, 
     {id:7, mate: "cream", modelo: "camionero", precio: 2300, stock:18}, 
     {id:8, mate: "negro", modelo: "imperial", precio: 2500, stock: 1}, 
     {id:9, mate: "alpaca", modelo: "bombilla", precio: 1900, stock: 23}, 
     {id:10, mate: "acero", modelo: "bombilla", precio: 1500, stock: 40},
];

listaDeProductos.forEach((producto) => {
  producto.mostrarProducto();
});

let busquedaUsuario = prompt("¿Qué modelo queres buscar?");
const busqueda = listaDeProductos.find(
  (producto) => producto.modelo == busquedaUsuario
);
console.log(busqueda);

let filtraPorPrecio = prompt("¿A partir de qué precio?");
const filtra = listaDeProductos.filter((producto) => producto.precio >= filtraPorPrecio);
console.log(filtra);

filtra.forEach((producto) => {
  console.log(
    `Este ${producto.modelo} ${producto.mate} y el precio es $${producto.precio}`
  );
});

let productosAgregados = [];

document.addEventListener("DOMContentLoaded", () => {
  productosAgregados = JSON.parse(localStorage.getItem('productos')) || [];

  let crearProductoBoton = document.getElementById("formulario");
  crearProductoBoton.addEventListener("click", (event) => {
    event.preventDefault();
    crearProducto();
  });

  let mostrarProductosBoton = document.getElementById("mostrarProductosBoton");
  mostrarProductosBoton.addEventListener("click", mostrarProductos);

  let eliminarProductosBoton = document.getElementById("eliminarProductosBoton");
  eliminarProductosBoton.addEventListener("click", eliminarProductos);
});

function crearProducto() {
  let mateInput = document.getElementById("mate");
  let modeloInput = document.getElementById("modelo");
  let precioInput = document.getElementById("precio");
  let stockInput = document.getElementById("stock");

  let nuevoProducto = new Producto(mateInput.value, modeloInput.value, precioInput.value);
  productosAgregados.push(nuevoProducto);

  localStorage.setItem('productos', JSON.stringify(productosAgregados));

  console.log(productosAgregados);
}

function mostrarProductos() {
  console.log(productosAgregados);
}

function eliminarProductos() {
  productosAgregados = [];
  console.log("Se han eliminado todos los productos");
}

let pintarHTML = () => { 
     productosAgregados.forEach(producto => { 
         if (producto.stock > 0) { 
             let contenedor = document.createElement("div"); 
             contenedor.setAttribute("id", producto.id); 
             contenedor.innerHTML = `<h3> ${producto.mate}</h3> 
                               <p> ${producto.modelo}</p> 
                               <b> $${producto.precio}</b> 
                             `; 
             document.getElementById("div").appendChild(contenedor); 
         } else { 
             document.getElementById("div").innerHTML += `<p>Huy, justo ese no queda ${producto.mate}</p>` 
         } 
     }) 
 }
