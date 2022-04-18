/*
Contexto global: variables disponibles en el script 
Importante: 
    - Declarar una función
    - Ver como modificar variables globales (contexto global y local)
*/

let a = `JavaScript`
let b = 10 


// Esto es una función 

function my_function_to_show_scopes () {
    console.log (a, b) // a= `JvasCript`, b= 10
    if (true) {
        //Estas variables estará disponibles solo en este bloque 
        let a = `Elixir`
        let b = 999 
        console.log (a, b) //Debe mostrar Elixir, 999
    }
    console.log ( a, b) // Aqui se debe volver  a mostrar JavaScript, 10, porque ya salió del bloque
}


// Así se ejecuta la función 
my_function_to_show_scopes()

console.log (a, b)