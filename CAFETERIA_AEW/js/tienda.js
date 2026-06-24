let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



function agregar(nombre,precio){


carrito.push({

nombre:nombre,

precio:precio

});



localStorage.setItem(

"carrito",

JSON.stringify(carrito)

);



alert("Producto agregado al carrito ☕");



}