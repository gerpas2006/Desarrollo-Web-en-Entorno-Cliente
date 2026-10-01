var precio = Number(prompt('Dame el precio del pantalón'))
var descuento = Number(prompt('Quiero que me des el descuento del pantalon'))
var cantAhorrada
var precioFinal

function calcularDineroAhorrado(precio,descuento){
    return (precio * descuento)/100
}
function calcularPrecioFinal(precio,descuento){
    return precio-((precio * descuento)/100)
}
document.write('La cantidad que te has ahorrado es de '+ calcularDineroAhorrado(precio,descuento)+ "€")
document.write("<br>" + 'El pantalón te sale por '+calcularPrecioFinal(precio,descuento)+ "€")