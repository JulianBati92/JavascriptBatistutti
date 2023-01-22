const storage = window.localStorage;

class Producto {
  constructor(id, nombre, precio, cantidad, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
  }
}

function getProductosFromAPI() {
  fetch("http://localhost:3000/productos")
    .then((response) => {
      return response.json();
    })
    .then((productos) => {
      productos.forEach((producto) => {
        let productoDiv = document.createElement("div");
        productoDiv.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <p>${producto.nombre}</p>
          <p>$${producto.precio}</p>
          <button class="btn btn-primary" id="agregarAlCarrito">Agregar al carrito</button>
        `;
        document.getElementById("contenedorProductos").appendChild(productoDiv);
      });
    });
}

getProductosFromAPI();


document.getElementById("agregarAlCarrito").addEventListener("click", agregarAlCarrito);
document.getElementById("verCarrito").addEventListener("click", verCarrito);
document.getElementById("vaciarCarrito").addEventListener("click", vaciarCarrito);
document.getElementById("finalizarCompra").addEventListener("click", finalizarCompra);

let carrito = [];
let totalCompra = 0;

function crearDivProductos(productos) {
  return productos.map((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    divProducto.innerHTML = `
    <div>
        <img src="img/${producto.id}.jpg" class="card-img-top img-fluid py-3">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        </div>
    </div>`;
    return divProducto;
  });
}

function agregarAlCarrito(id) {
  const producto = productosRecuperados.find(p => p.id === id);
  if (producto.cantidad > 0) {
    producto.cantidad -= 1;
    carrito.push(producto);
    total += producto.precio;
    totalCompra.textContent = total;
  } else {
    alert("No hay mas stock de este Matteoli");
  }


function mostrarCarrito() {
contenedorCarrito.innerHTML = "";
carrito.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    divProducto.innerHTML = `
    <div>
        <img src="img/${producto.id}.jpg" class="card-img-top img-fluid py-3">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <button class="btn btn-danger" onclick="quitarDelCarrito(${producto.id})">Quitar del Carrito</button>
        </div>
    </div>`;
    contenedorCarrito.appendChild(divProducto);
});
}

function vaciarCarrito() {
carrito = [];
total = 0;
totalCompra.innerHTML = total;
mostrarCarrito();
}

function finalizarCompra() {
  const carrito = JSON.parse(localStorage.getItem('carrito'));
  localStorage.setItem('comprasRealizadas', JSON.stringify(carrito));
  window.location.href = "compraRealizada.html";
}
