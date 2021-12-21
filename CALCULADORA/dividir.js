// Autor: Cicerelli, Fabio Andrés 
// Comisión 7 Fundación Formar

function dividir(numerador, denominador){
    if(Number(numerador === 0) || Number(denominador === 0)){
        return 'No se puede dividir por cero.'
    } else {
        return numerador / denominador;
    }

}
module.exports = dividir;
