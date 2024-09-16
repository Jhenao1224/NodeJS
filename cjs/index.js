/* Es como un import desde otro lado, pero en esta solo llamo lo que yo vaya a utilizar, con el nombre desde los corchetes
y con la ubicacion del otro aarchivo dentro del require y el nombre dentro de comillas
*/
const {sum, sub} = require('./operaciones')

console.log(sum(1,2))
console.log(sub(1,2))