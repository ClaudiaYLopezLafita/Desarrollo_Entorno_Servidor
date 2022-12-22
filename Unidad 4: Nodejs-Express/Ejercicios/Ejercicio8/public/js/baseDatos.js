const baseDeDatos = [
    {
        id: 1,
        nombre: 'Aletas',
        precio: 9.99,
        stock: 0,
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

let objetoExplorarAlFinal = {};

objetoExplorarAlFinal.validarListaProductos = function (products){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (isValidProducts(products)) {
                resolve('OK: Snvoice made ');
            }else{
                reject('ERROR: Products without Stock');
            }
        },2000)
    });
}

function isValidProducts(products){

    let array = [];
            
    products.forEach((item)=>{
        array.push(item.split(' '));
    })
    
    return array.forEach((arrayItem) => {
        let long =arrayItem.length;
        let precioItem = parseFloat(arrayItem[long-1]);
        let cantidad = parseInt(arrayItem[0]);
        let stockProduct = baseDeDatos.filter(p =>p.precio===precioItem)[0].stock;

        if (cantidad>stockProduct){
            return false;
        }else{
            return true;
        }
    });

}


// la function 'Timeout' nos sirve pas simular que la 
// bd ha tardado dos segundos en deolver el resultado

module.exports = objetoExplorarAlFinal;

