var gastosGasolina = Number(prompt('¿Cúanto dinero has gastado en el hotel'))
var gastosHotel = Number(prompt('¿Cúanto dinero te has gastado en gasolina?'))
var gastosRestaurante = Number(prompt('¿Cúanto dinero te has gastado en los restaurantes?'))

var sumaTodo = gastosGasolina + gastosHotel + gastosRestaurante

function porcentajeGasolina(sumaTodo,gastosGasolina){
    return (gastosGasolina * sumaTodo)/100
}

document.write('Has gastado en gasolina el '+ porcentajeGasolina(sumaTodo,gastosGasolina)+ '% de todo el dinero del viaje')