function mostrarMapa(){

let ubicacion = document.getElementById("ubicacion").value;

let mapa = document.getElementById("mapa");

if(ubicacion=="central"){

mapa.innerHTML = `

<iframe

src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62418.942301742!2d-77.0785138513672!3d-12.099560000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7db9866cdf3%3A0xf5500bbbc4dee1e1!2sCaf%C3%A9%20La%20Culture!5e0!3m2!1ses-419!2spe!4v1782336851220!5m2!1ses-419!2spe"

width="100%"

height="350"

style="border:0; border-radius:15px;"

allowfullscreen=""

loading="lazy">

</iframe>

`;

}

else if(ubicacion=="norte"){

mapa.innerHTML = `

<iframe

src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.512419977751!2d-76.70301912372464!3d-11.938982309682581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105efe40bee607d%3A0x8e421fbbe5a361c!2sCAFE%20CULTURA%20CHOSICA!5e0!3m2!1ses-419!2spe!4v1782337065427!5m2!1ses-419!2spe"

width="100%"

height="350"

style="border:0; border-radius:15px;"

allowfullscreen=""

loading="lazy">

</iframe>

`;

}

else{

mapa.innerHTML="";

}

}