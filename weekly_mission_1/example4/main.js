const Logger = require (`./logger`) //Invoa el módulo que contiene la clase

// Creación de un objeto 

const dbLogger = new Logger ('DB') //Creas un objeto nuevo, esto llama por default el constructor de la clase
//Invocación del método 
dbLogger.info (`This is an informational message`) 

//Creación de otro objeto 

const accessLogger = new Logger (ACCESS)
accessLogger.verbose (`This is a verbose message`)