module.exports.resultado = (cadena) => {
        
    let array, ultima, primera, numPalabras;
    
    // obtencion array
    array = cadena.split(' ');

    // resultado primer punto
    numPalabras = array.length;
    primera= array[0];
    ultima = array[numPalabras-1];

    let result = ("Nº de palabras: " + numPalabras + "\n" +
    "Primera palabra: " + primera + "\n" +
    "Ultima palabra: " + ultima + "\n");

    return result;

}