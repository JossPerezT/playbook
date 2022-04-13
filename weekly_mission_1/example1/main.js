// !. Creación de un objeto con propiedades


let myCar = new Object (); //Crear un objeto 
myCar.make = 'Ford'; //Agregar el valor dentro del objeto
myCar.model = 'Mustang';
myCar.year = 1969;

console.log (myCar); //Imprimiendo el objeto 




//2. Declaración de un objeto con variables locales y públicas 

const myModule = (() => {

    //Variables de contexto local 

    const provateFoo = "Soy un valor privado, solo me usan dentro de este objeto ";
    const priveteBar = [1,2,3,4];
    const baz = "Soy un valor que va a ser expuesto";


    //Variables para guardar las variables locales

    const exported = {
        publcFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
            publicbaz: baz
    }


    // Exposición de variables locales 

    return exported
}) ()

console.log (myModule);
