const Logger = require (`./logger`)


// Ya se puede usar directamente el objeto instanciado en el módulo logger 
Logger.log (`This is an informational message `)


/*
También se puede instanciar uno nuevo de esta manera: 

    const customLogger = new logger.contructor (`CUSTOM`)
    customLogger.log (`This is an informational message)
*/