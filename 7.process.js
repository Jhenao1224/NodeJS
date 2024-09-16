// proccess sirve para interactuar con el entorno de ejecución de node.js

//console.log(process.argv)

// para controlar cuando quiero que se salga del proceso si es exit(0) es porque quiero que se termine de ejecutar, y saber que todo va de manera correcat
// por el contrario si pongo 1 es porque ha habido un error o alguna excepcion que quiera controlar 
//process.exit(0)

// para controlar eventos del proceso se una .on
// process.on('exit', () => {
//     // pa limpar recursos
// })

// Current working directory (en el directorio que estoy ps)
console.log(process.cwd())



// plataforma
console.log(process.env.AUGUSTO)