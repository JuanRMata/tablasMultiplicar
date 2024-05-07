/**
 * Genera una tabla de multiplicar en base a un número y un límite dado.
 */
function generarTabla() {
    let num = parseInt(document.getElementById("numero").value);
    let limit = parseInt(document.getElementById("limite").value);
    let tablaHTML = "<h3>Tabla de Multiplicar del " + num + "</h3><table border='1'><tr><th>Multiplicando</th><th>Producto</th></tr>";

    for (let i = 1; i <= limit; i++) {
        let producto = num * i;
        tablaHTML += "<tr><td>" + num + " x " + i + "</td><td>" + producto + "</td></tr>";
    }

    tablaHTML += "</table>";
    document.getElementById("tablaMultiplicar").innerHTML = tablaHTML;
}

/**
 * Verifica si un número es primo.
 */
function verificarPrimo() {
    let numPrimo = parseInt(document.getElementById("numeroPrimo").value);
    let esPrimo = true;

    if (numPrimo === 2) {
        esPrimo = true;
    } else if (numPrimo <= 1 || numPrimo % 2 === 0) {
        esPrimo = false;
    } else {
        for (let i = 3; i <= Math.sqrt(numPrimo); i += 2) {
            if (numPrimo % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    document.getElementById("resultadoPrimo").innerHTML = esPrimo ? numPrimo + " es primo" : numPrimo + " no es primo";
}

/**
 * Calcula el factorial de un número.
 */
function calcularFactorial() {
    let numFactorial = parseInt(document.getElementById("numeroFactorial").value);
    let factorial = 1;

    for (let i = 2; i <= numFactorial; i++) {
        factorial *= i;
    }

    document.getElementById("resultadoFactorial").innerHTML = "Factorial de " + numFactorial + " es " + factorial;
}
