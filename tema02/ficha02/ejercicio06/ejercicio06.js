var listaDiasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"] 
var numeroPedido = Number(prompt("Dime un numero y te digo a que dia de la semana pertenece"))


if (numero >= 1 && numero <= 7) {
    var dia = diasSemana[numero - 1];
    alert("El día correspondiente es: " + dia);
    document.write("El día correspondiente es: " + dia);
} else {
    alert("Por favor, introduce un número válido entre 1 y 7.");
}