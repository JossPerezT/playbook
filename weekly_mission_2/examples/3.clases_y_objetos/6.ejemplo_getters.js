// Ejemplo 6: Getters para acceder a los atributos del objeto 

class Ajolonauta {
    constructor (name, age, stack) {
        this.name = name
        this.age = age 
        this.stack = stack 
        this.exercises_completed = 0
        this.exercises_todo = 99
    }

    // Podemos acceder a los atributos de esta clase 
    get getExercisesCompleted(){
        return this.exercises_completed
    }
    get getTodo (){
        return this.exercises_todo
    }
}

console.log ("Ejemplo 6: Getters para acceder a los atributos del objeto")

const woopa = new Ajolonauta ("Woopa", 1, [])
console.log (`Los ejercicios completados son ${woopa.getExercisesCompleted} de los ${woopa.getTodo} en total`)