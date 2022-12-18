let objetoExplorarAlFinal = {};

objetoExplorarAlFinal.validarUsuario = function (username){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (username !== 'clodo0094'){
                resolve('OK: Usuario no existente');
            }else{
                reject('EROR: Usuario ya existente');
            }
        },2000)
    });
}
// la function 'Timeout' nos sirve pas simular que la 
// bd ha tardado dos segundos en deolver el resultado

module.exports = objetoExplorarAlFinal;