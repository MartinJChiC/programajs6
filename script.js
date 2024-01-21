while (true) {
    // Pedir al usuario que ingrese un número usando prompt
    var numero = prompt("Ingrese un número:");

    // Verificar si el usuario ha ingresado un número válido
    if (isNaN(numero)) {
        // Mostrar una alerta si no es un número válido
        alert("Por favor, ingrese un número válido.");
    } else {
        // Convertir el input a un número entero
        numero = parseInt(numero);

        // Verificar si el número es par o impar
        if (numero % 2 === 0) {
            alert("El número ingresado es par.");
        } else {
            alert("El número ingresado es impar.");
        }

        // Salir del bucle while después de procesar la entrada
        break;
    }
}