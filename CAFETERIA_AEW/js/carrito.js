function agregar(nombre, precio){
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
carrito.push({
nombre:nombre,
precio:precio
});

localStorage.setItem(
"carrito",
JSON.stringify(carrito)
);

alert(nombre + " agregado al carrito ☕");
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let contenedor = document.getElementById("productosCarrito");

let total = 0;

carrito.forEach(producto => {

let div=document.createElement("div");

div.className="producto";

div.innerHTML=`

<span>

${producto.nombre}

</span>

<span>

S/ ${producto.precio}

</span>

`;

contenedor.appendChild(div);

total += producto.precio;

});

document.getElementById("total").innerHTML=

"Total: S/ "+total.toFixed(2);

function finalizar(){

alert(
"Compra realizada correctamente ☕🌿 Gracias por elegir Cultura Café"
);

}

function abrirPago(){

document.getElementById("ventanaPago")
.style.display="flex";

}

function confirmarPago(){

alert(
"✅ Pago realizado correctamente. Gracias por comprar en Cultura Café ☕🌿"
);

localStorage.removeItem("carrito");

document.getElementById("ventanaPago")
.style.display="none";

document.getElementById("productosCarrito")
.innerHTML="";

document.getElementById("total").innerHTML =
"Total: S/ 0.00";

}