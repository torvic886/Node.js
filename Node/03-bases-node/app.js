const fs = require('fs');

console.clear();
const base = 7;

console.log('==============');
console.log(`tabla-${ base }.txt`);
console.log('==============');


let salida='';

for (let i = 1; i <= 10; i++) 
{
    salida+=(`  ${base} X ${i} = ${base*i}\n`);
    
} 

console.log(salida);

fs.writeFile( `tabla-${ base }.txt`,salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${ base }.txt creada`);
});