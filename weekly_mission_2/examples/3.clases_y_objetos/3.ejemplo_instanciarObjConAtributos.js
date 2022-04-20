// Ejemplo 3: Instanciar un objeto con atributos 
    /* instancia significa todo objeto que derive de otro (POO)
    para instanciar se usa new
    Instanciar es una referencia de una clase a otra lo que les permite interactuar entre ambas 
    */
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos. 
    // this nos aydua a realizar a hacerlo 
    constructor (name, age, subjects){
        this.name = name 
        this.age = age 
        this.subjects = subjects 
    }
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const jossStudent = new Student ("Joss", 23, ["NodeJS, Python"])

const SanStudent = new Student ("Santy", 13, ["Maths, Pac-Man"])

console.log ("Ejemplo 3: Instanciar un objeto con atributos")
console.log (jossStudent)
console.log (SanStudent)