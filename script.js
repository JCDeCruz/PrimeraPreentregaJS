let edad
do {
    edad = Number(prompt("Ingrese la edad de la persona que desea ingresar"))
    alert(calcularPrecioEntrada(edad))
} while (isNaN(edad))

function calcularPrecioEntrada(edad) {
    let precio = 0

    if (isNaN(edad)){
        return "Debe ingresar un número"
    } else if (edad < 4){
        precio = 0
    } else if (edad >= 4 && edad <= 12){
        precio = 5
    } else if (edad > 12 && edad <= 17){
        precio = 8
    } else if (edad >= 18){
        precio = 10
    }

    return "El precio es de " + precio + " Euros"
}
