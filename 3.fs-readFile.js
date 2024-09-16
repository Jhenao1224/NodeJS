/*Aqui lo que hacemos es leer la info que tiene el archivo, dado que es un .txt contiene solo texto */


const fs = require('node:fs')

console.log('Leyendo el primer archivo')
/*Con esta función de .readFile lo que hacemos el leerlo de manera asincrona, lo que he leeido es lo mpas recomendado, haciendo una fincion de callback
donde al terminar de leer el archivo lo imprimira en la consola*/
fs.readFile('./archivo.txt', 'utf-8', (err,text) => {   
    console.log('Primer texto:',text)
})


/*Lo de asincrona siginifca que puede ir haciendo otras funciones mientras algunas se terminan de ejecutar*/
console.log('-->Hacer cosas mientras lee el archivo')


/*Con esta función de .readFile lo que hacemos el leerlo de manera asincrona, lo que he leeido es lo mpas recomendado, haciendo una fincion de callback
donde al terminar de leer el archivo lo imprimira en la consola*/
console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err,text) => {
    console.log('Segundo texto:',text)
})
