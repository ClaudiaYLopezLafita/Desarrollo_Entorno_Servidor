// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Aletas',
        precio: 9.99,
        stock: 10,
        imagen: 'images/aletas.jpg'
    },
    {
        id: 2,
        nombre: 'Chaleco Salvavida',
        precio: 12.2,
        stock: 30,
        imagen: 'images/chaleco.jpeg'
    },
    {
        id: 3,
        nombre: 'Prismatico Marino',
        precio: 40.65,
        stock: 15,
        imagen: 'images/prismaticos.jpeg'
    },
    {
        id: 4,
        nombre: 'Achicador Balde',
        precio: 2.59,
        stock: 2,
        imagen: 'images/achicador.jpg'
    },
    {
        id: 5,
        nombre: 'Reflector Radar Barco',
        precio: 18.60,
        stock: 30,
        imagen: 'images/reflector.jpg'
    },
    {
        id: 6,
        nombre: 'Aletas Estabilizadoras ',
        precio: 21.75,
        stock: 16,
        imagen: 'images/aletaEstabilizadora.jpeg'
    },
    {
        id: 7,
        nombre: 'Tubo + Gafas',
        precio: 8.30,
        stock: 5,
        imagen: 'images/tubo.jpg'
    },
    {
        id: 8,
        nombre: 'Cuerda Esqui',
        precio: 36.21,
        stock: 80,
        imagen: 'images/cuerda.jpg'
    },
    {
        id: 9,
        nombre: 'Paddle Surf 365 IMN',
        precio: 605.92,
        stock: 0,
        imagen: 'images/paddle-surf.jpg'
    },
    {
        id: 10,
        nombre: 'Caja Estanca Amarilla',
        precio: 63.56,
        stock: 10,
        imagen: 'images/caja.png'
    }

];

let carrito = [];
const moneda = '€';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonPagar = document.querySelector('#boton-pagar');


// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h6');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        miNodoImagen.setAttribute('alt', info.nombre);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${moneda}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-outline-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.setAttribute('name', `${miItem[0].nombre}`);
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        const miProducto = document.createElement('p');
        miProducto.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-outline-danger', 'p-1');
        miBoton.textContent = 'x';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miProducto);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // generamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();