const path = require('node:path')


console.log(path.sep) // para saber con que barra separadora de tareas trabaja el OS ya sea " " o "\" (En mi caso serpia con \)

const filePath = path.join('contenedor', 'eldeadentro', 'paver.txt')
console.log(filePath)   // para la ruta completa

const base = path.basename('/tpm/jd_secret_files/password.txt')  // para el nombre del fichero
console.log(base)

const filename = path.basename('/tpm/jd_secret_files/password.txt', '.txt')  // para el nombre del fichero sin la extrención
console.log(filename)

const extesion = path.extname('iamge.jpg')  // para saber el tipo de extesion que tenga el archivo
console.log(extesion)
