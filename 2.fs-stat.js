/* fs means File System, donde se accede a los Archivos del sistema (Que es lo que literalmente significa fs), donde tambien podremos acceder a toda
la info de ese mismo dato */
const fs = require('node:fs');


const stats = fs.statSync('./archivo.txt')


console.log(
    stats.isFile(), //* En ese comprobamos si es archivo
    stats.isDirectory(), // Con este comprobamos si es un directorio o creo que carpeta
    stats.isSymbolicLink(), // ? Y en este si no tengo ni idea 
    stats.size, //* Y por ultimo con este accedemos al tamaño del archivo
)