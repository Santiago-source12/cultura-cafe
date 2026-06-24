document
.getElementById("formReserva")
.addEventListener("submit",function(e){

e.preventDefault();

let datos={

nombre:
document.querySelector("input[type='text']").value,

correo:
document.querySelector("input[type='email']").value,

celular:
document.querySelector("input[type='tel']").value,

ubicacion:
document.querySelectorAll("select")[0].value,

fecha:
document.querySelector("input[type='date']").value,

hora:
document.querySelector("input[type='time']").value,

personas:
document.getElementById("personas").value=="mas"
?
document.getElementById("cantidad").value
:
document.getElementById("personas").value
};

fetch(

"https://script.google.com/macros/s/AKfycbxAn6NPury74AbGkUpOFYpZyPHS2GV4JEWfcJEgxrQ7BqSY3oRoKrbr99tXGeCSl4vZ/exec",
{

method:"POST",

body:JSON.stringify(datos)

}

)

.then(res=>res.text())

.then(data=>{

document.getElementById("mensaje").innerHTML=

"✅ Reserva confirmada.<br><br>"+

"Revisa tu correo para la confirmación ☕🌿";

})

.catch(error=>{

alert("Error al enviar reserva");

});

});

function mostrarCantidad(){

let personas = document.getElementById("personas").value;

let extra = document.getElementById("cantidadExtra");

if(personas=="mas"){

extra.style.display="block";

}else{

extra.style.display="none";

}

}