
// En mjs si tienen el soporte de poder usar el await en el cuerpo del archivo por el top level await, y no se puede hacer en common .js
import { readFile } from "node:fs/promises"

console.log('Leyendo el primer archi madafeckas')
const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('--> Haciendo maricadas de mientras')

console.log('Leyendo el segundo archivo sapa')
fs.readFile('./archivo2.txt', 'utf-8')
 console.log('segundo texto:', text)

