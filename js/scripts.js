//querySelector

const heading = document.querySelector('.header__texto h2')
console.log(heading)
// heading.textContent = "nuevo heading"


//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)
console.log(enlaces[0])
console.log(enlaces[0].textContent)
console.log(enlaces[0].href)

// enlaces[0].textContent = 'Nuevo Texto enlace';
// enlaces[0].href = 'google.com';

// console.log(enlaces[0].textContent)
// console.log(enlaces[0].href)

// Agregar una clase...
enlaces[0].classList.add('nueva-clase');

// Eliminar una clase...
 enlaces[0].classList.remove('nueva-clase');



 // Generar HTML desde JavaScript...
const nuevoEnlace = document.createElement('A');

// console.log(nuevoEnlace);

// Un enlace tiene una clase...
nuevoEnlace.classList.add('navegacion__enlace');
// Tiene un href
nuevoEnlace.href = 'nuevo-enlace.html';
// Tiene un Texto...
nuevoEnlace.textContent = 'Un Nuevo Enlace';

 console.log(nuevoEnlace);

 // Finalmente se agrega donde lo deseamos colocar...
// Tienes que seleccionar el elemento padre
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);


// Eventos en JavaScript...

console.log('1');
// Cuando el Archivo JS y los archivos dependientes han cargado como es el HTML y las imagenes...
window.addEventListener('load', function() { 
    console.log('2');
});

window.onload = function() {
    console.log('3')
};

// Este se ejecuta cuando el HTML ha sido descargado pero no espera por CSS o imagenes...
document.addEventListener('DOMContentLoaded', function() { 
    console.log('4');
});

console.log('5');

// // Eventos Scroll...

// window.onscroll = function(e) {
//     console.log('scrolling...');

//     console.log(this.scrollY);
// }



// Eventos con Click y submit...

 //const btnEnviar = document.querySelector('.formulario input[type=submit]');
 //console.log(btnEnviar);

//  btnEnviar.addEventListener('click', function(e) { // callback o closure 
//      e.preventDefault();
//     console.log('click');
//  });


// Eventos de los Inputs....

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log(e);
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos);
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log('Di click y la página ya no recarga');

    console.log(datos);

    // Validar el Formulario...

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...')

    mostrarMensaje('Mensaje enviado correctamente');
});


function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
