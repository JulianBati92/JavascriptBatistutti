function saludar() {
  let nombre = prompt('¿Cuál es tu nombre?');
  let apellido = prompt('¿Cuál es tu apellido?');

  alert(`Hola ${nombre} ${apellido}, ¿tomamos unos mates?`);

  let entrada = prompt('Ingresar tus redes sociales');

       while (true) {
         if (!entrada) {
         break;
      }

    switch (entrada) {
      case "instagram.com/":
        alert("Gracias por ingresar tu instagram, tienes un 20% de descuento ingresando el código MATTEOLIIG en la tienda online");
        return;
      case "facebook.com/":
        alert("Gracias por ingresar tu facebook, tienes un 20% de descuento ingresando el código MATTEOLIFB en la tienda online");
        return;
      default:
        if (entrada.includes(".")) {
          alert("Gracias por ingresar tu red social, tienes un 10% de descuento ingresando el código MATTEOLI en la tienda online");
        } else {
          alert("Gracias por tu tiempo!!!")
        }
        return;
    }

    entrada = prompt("Ingresar tus redes sociales");
  }
}

saludar();


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
}

let listaDeProductos = [
  new Producto("set completo", "set", 1000, 3),
  new Producto("plata 925 crem", "imperial", 2850, 8),
  new Producto("plata 925 blanco", "imperial", 2600, 15),
  new Producto("plata 925 blanco", "imperial", 2600, 15),
  new Producto("rosalia", "imperial", 2500, 10),
  new Producto("beige", "torpedo", 2200, 22),
  new Producto("blanco", "imperial", 2500, 7),
  new Producto("cream", "camionero", 2300, 18),
  new Producto("negro", "imperial", 2500, 1),
  new Producto("alpaca", "bombilla", 1900, 23),
  new Producto("acero", "bombilla", 1500, 40),
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

  let crearProductoBoton = document.getElementById("crearProductoBoton");
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
