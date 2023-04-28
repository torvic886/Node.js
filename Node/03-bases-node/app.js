//  const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

console.log(process.argv);

const[,,arg3 = 'base=5'] = process.argv;
const [,base] = arg3.split('=')

console.log(base);

//const base = 5;

crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));
;