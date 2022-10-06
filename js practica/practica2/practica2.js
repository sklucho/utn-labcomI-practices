const numero = parseFloat(prompt("Ingrese un numero"));
if (numero > 0) {
    alert(numero + " es un numero positivo")
} else {
    if(numero == 0){
        alert("Este numero es 0")
    } else{
        alert(numero + " es un numero negativo")
    }
}
