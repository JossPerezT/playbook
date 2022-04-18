// CALLBACKS 

// Esto es una función que suma 100 a un número 

const sum_one_hundred = function (n) {
    return n+100
}


// Esto va a imprimir la definición de la función pero no la ejecuta 

console.log(sum_one_hundred)

// Esto ejecuta la función 
console.log(sum_one_hundred(5)) // 105




// Esta es otra función que recibe parámetros: callbacks y n 
// Podemos debuggear y entender cuál es ek orden en que se ejecutan 

const multiplie_function = function (function_to_apply, number){
    return function_to_apply (number) * number 
}

console.log (multiplie_function(sum_one_hundred, 5)) // Esto debo dar (5+100) * 5 = 525


// Definiciones de funciones con Fat Arrow 
//const sum_one_hundred = (n) => {
//	return n + 100
//}
//
//const multiplier_function = (function_to_apply, number) => {
//  return function_to_apply(number) * number
//}




// 2. Regresando funciones 
const numbers = [1,2,3,4]

const sumArray = (arr) => { // Funcion que toma una lista 
    let total = 0 // se declara que una variable sum = 0

    const sumElementTotal = (element) => { // aquí hay una función dentro de una función 
        total += element // va a tomar la variable sum y suma el valor del argumento element 
    } // Así se define una función 

    arr.forEach(sumElementTotal) // Una lista iene por defecto ciertos métodos, uno de ellos es forEach 
    // forEach aplica una función a cada elemento de la lista 

    return total
}

console.log(sumArray(numbers))



// 3. Declarar funciones 
const numbers_list = [1,2,3,4]
const sumArray2 = (numbers_list) => {
    let total = 0
    numbers_list.forEach(function (element){  // declaramos explícitamente la función aqui
        total += element 
    })
    return total
}
console.log (sumArray2(numbers))
