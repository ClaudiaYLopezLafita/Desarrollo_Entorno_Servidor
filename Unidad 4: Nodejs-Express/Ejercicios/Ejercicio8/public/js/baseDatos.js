
let objetoExplorarAlFinal = {};

objetoExplorarAlFinal.validarListaProductos = function (products){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (isValidProducts(products) === products.length) {
                resolve('OK: Invoice made ');
            }else{
                reject('ERROR: Products without Stock');
            }
        },2000)
    });
}

function isValidProducts(products){

    let listProduct = document.getElementById('carrito');
    debugger
    listProduct = listProduct.querySelectorAll('li');
    listProduct.forEach((product)=>{
        let texto = product.getElementsByTagName('p')[0].innerText
        products.push(texto);
    })

    let array = [];
            
    products.forEach((item)=>{
        array.push(item.split(' '));
    })

    let resultado =0;

    array.forEach((arrayItem) => {
        let long =arrayItem.length;
        let precioItem = parseFloat(arrayItem[long-1]);
        let cantidad = parseInt(arrayItem[0]);
        let stockProduct = baseDeDatos.filter(p =>p.precio===precioItem)[0].stock;

        if (cantidad<stockProduct){
            resultado+=1;
        }
    });
    
    return resultado;
}


// la function 'Timeout' nos sirve pas simular que la 
// bd ha tardado dos segundos en deolver el resultado

module.exports = objetoExplorarAlFinal;

