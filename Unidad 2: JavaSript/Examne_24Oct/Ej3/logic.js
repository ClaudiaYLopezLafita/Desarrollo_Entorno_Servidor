function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(50);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const numMag = getRandomIntInclusive();

let numero, intentos=0;

debugger
do{
    numero = parseInt(prompt('Inserta un numero (1-50): '+'\n numero magico:'+numMag));
    debugger
    if(isNaN(numero)){
    alert('Tienes que escrubir un numero');
    intentos++;
    } else if(numero == numMag){
        alert('HAS GANADO EL JUEGO');
        break
    } else{
        if(numero>numMag){
            alert('Tu numero es mayor.');
            intentos++;
        } else{
            alert('Tu numero es menor');
            intentos++;
        }
    }

} while (intentos<5)

if(intentos==5){
    numero = parseInt(prompt('Inserta un numero: '));
}

confirm('¿Quieres volver a jugar?') ? location.reload() : alert('Has decidido no jugar mas');



