/*
● Se debe elegir un plato (Nº1, Nº2, Nº3, Nº4 y Nº5).
● Los complementos o extras opcionales (puede elegirse más de 1): entrante, bebida,
postre.
● Marcar si el cliente es VIP.

*/

const $FORM = document.getElementById('formulario');
const $PLATO = document.getElementById('plato')
const $COMPLEMENTO = document.getElementById('complemento');
const $VIP = document.getElementById('vip');

function handleSubmit(e) {

    e.preventDefault();

    const plato = $PLATO.value;
    const complemento = $COMPLEMENTO.value;
    const vip = $VIP.value;
    let total= 0;
    debugger
    if(plato==false || isValidPlato(plato)==false){
        alert('Debes de elegir un plato.'+
            'Solo puedes elegir entre: Nº1-Nº2-Nº3-Nº4-Nº5.');
    } else{
        total += (6+(6*0.1));
        if(isValidComp(complemento)==false){
            alert('Solo puedes elegir: entrante, bebida, postre');
        } else {

            total += numComple(complemento);

            if(vip=='si'){
                total = total - (total*0.05);
                total = total + (total*0.21)

                var regUsuario = {
                    'plato':plato,
                    'complementos': complemento,
                    'vip': vip
                };
                console.log(regUsuario);
                var newUser = JSON.stringify(regUsuario);
                document.getElementById('total').innerHTML=total +'€';
                document.getElementById('user').innerHTML= newUser;
                document.getElementById('vipmessage').innerHTML= 'tienes descuento'

            } else{
                
                total = total + (total*0.21)

                var regUsuario = {
                    'plato':plato,
                    'complementos': complemento,
                    'vip': vip
                };
                console.log(regUsuario);
                var newUser = JSON.stringify(regUsuario);
                document.getElementById('total').innerHTML=total +'€';
                document.getElementById('user').innerHTML= newUser;
                document.getElementById('vipmessage').innerHTML= 'NO tienes descuento'
            }
        }
    }
}

function isValidPlato(plato){
    
   if(plato=="Nº1" || plato=="Nº2" || plato=="Nº3" || plato=="Nº4"|| plato=="Nº5"){
    return true;
   } 
   
   return false;
}

function isValidComp(complemento){
debugger
    array = complemento.split(',');

    for (let x = 0; x < array.length; x++) {
        
        if(array[x]=="entrante" || array[x]=="bebida" || array[x]=="postre"){
            return true;
        }
        
    }
     
       return false;
}

function numComple(complemento){

    array = complemento.split(',');
    let totalcomp =0;
    let total =0;

    for (let x = 0; x < array.length; x++) {
        if(array[x]=='bebida'){
            totalcomp = (1+(1*0.21));
            total += totalcomp;
        } else {
            totalcomp = (1+(1*0.1))
            total += totalcomp;
        }        
    }

    return total;
}

$FORM.addEventListener('submit', handleSubmit);