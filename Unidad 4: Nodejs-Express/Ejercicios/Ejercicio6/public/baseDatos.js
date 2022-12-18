let objetoExplorarAlFinal = {};

objetoExplorarAlFinal.validarUsuario = function (userDni){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (userDni !== '12.345.678-A'){
                resolve('OK: Usuario no existente');
            }else{
                reject('ERROR: Usuario ya existente');
            }
        },2000)
    });
}
// la function 'Timeout' nos sirve pas simular que la 
// bd ha tardado dos segundos en deolver el resultado

module.exports = objetoExplorarAlFinal;
