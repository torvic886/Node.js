//  const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

const base = 5;

crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));
;