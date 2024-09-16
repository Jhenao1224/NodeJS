/*En este caso tambien se trata de leer archivos pero está vez con promesas, donde permite ejecutar un trozo de codigo, y cuando este listo ese trozo
se devuelva un resulado, sin atrasar o parar las demas partes del codigo*/

/* Sincrono siempre va a ser el que problemas porque esta bloqueando y esperando a que se termina una tarea ejecutada para poder hacer a siguiente,
por lo que siempre hay qeu usa asincrono*/


//! Para los modulos que no tienen promesas nativas se usa:
//! const { promisify } = require('node:util')
//! const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')
const { default: test } = require('node:test')


console.log('Leyendo el primer archi madafeckas')
fs.readFile('./archivo.txt', 'utf-8')
// Aqui con este .then es donde vemos que se ejecuta el print de lo que leyo del archivo. De igual manera es asincrona
    .then(text => {
        console.log('primer texto:', text)
    })

console.log('--> Haciendo maricadas de mientras')

console.log('Leyendo el segundo archivo sapa')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('segundo texto:', text)
    })
