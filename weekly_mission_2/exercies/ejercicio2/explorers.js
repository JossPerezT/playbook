const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "JS",
            "C#"
        ], 
        missions: {
            onboarding: {
                isFinisged: true,
                exercisesFinished: true
            },
            frontend: {
                isFinisged: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
       city: "Veracruz",
       rate: 50,
        stack: [
            "JS"
        ],
        missions: {
            onboarding: {
                isFinisged: false,
                exercisesFinished: false
            },  
            frontend: {
                isFinisged: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinisged: true,
                exercisesFinished: true 
            },
            frontend: {
                isFinisged: false,
                exercisesFinished: false
            }
        }
    }
]

// Ejercicio 1
console.log ("1. Imprimiendo el nombre de cada explorer con forEach")
explorers.forEach(nombre => console.log(nombre.name));


// Ejercicio 2
console.log ("2. Imprimiendo el stack de cada explorer con forEach")
explorers.forEach(stacks => console.log (stacks.stack))


// Ejercicio 3
console.log ("3. Imprimiendo una nueva lista de stack de cada explorer usando Map")
const nueva_lista_map = explorers.map((stackMap) => {return stackMap.stack})
console.log (nueva_lista_map)


// Ejercicio 4
console.log ("4. Imprimiendo una lista de explorer que tengan en su stack JS usando filter") // para validar un elemento usar includes
const stack_JS = explorers.filter((JS) => 
    JS.stack.includes ("JS")
)
console.log (stack_JS)


// Ejercicio 5
console.log ("5. Imprimiendo al primer explorer de la CDMX usando find")
const cityFindIndex = explorers.findIndex (ciudad => 
    ciudad.city == "CDMX")

console.log (cityFindIndex)
console.log (explorers[cityFindIndex])


// Ejercicio 6
console.log ("6. Imprimiendo la suma de todos los exercises_completed usando reduce")
const result_exercises_completed = explorers.reduce ((acc, completed) =>
    acc + completed.exercises_completed, 0
)
console.log (result_exercises_completed)


// Ejercicio 7
console.log ("7. Imprimiendo la validación si al menos uno de los explorers tienen la propiedad exercisesFinished en frontend como true usando Some")

const areSomeTrue = explorers.some ((finished) => 
    finished.missions.frontend.exercisesFinished === true
)
console.log (areSomeTrue)


// Ejercicio 8
console.log ("8. Imprimiendo la validación si todos los explorers tienen la propiedad isFinished del onboarding como true usando every")
const onboarding_every = explorers.every ((onboarding_finished) => 
    onboarding_finished.missions.onboarding.isFinisged === true
)
console.log (onboarding_every)