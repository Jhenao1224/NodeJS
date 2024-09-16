
const { readFile } = require("node:fs/promises")
// Esto de aca es una funcion que estamos definiendo dentro de unos parentesis, que al mismo tiempo que la estamos definiendo la estamos
// invocando al final. Se llama IIFE (Inmediatly Invoked Function Expression)

;(
    async () => { 
    
        console.log('Leyendo el primer archi madafeckas')
        const text = await fs.readFile('./archivo.txt', 'utf-8')
        console.log('primer texto:', text)
        
        console.log('--> Haciendo maricadas de mientras')
        
        console.log('Leyendo el segundo archivo sapa')
        fs.readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto:', text)
    }
)()


