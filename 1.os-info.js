/*Aca lo que sacamos es toda la info del OS (Operative System), donde podremso acceder a toda la info del PC */

const os = require('node:os');

console.log('Informacion del sistema operativo: ')
console.log('-------------------------------------')
// con el OS sacamos toda la informacion acerca del sistema o del pc que necesitemos saber, y sea para evaluar, accecder, o lo que nosotros queramos
console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria libre', os.freemem()/1024 /1024)
console.log('Memoria total', os.totalmem()/1024 /1024)
console.log('uptime', os.uptime() /60/60)