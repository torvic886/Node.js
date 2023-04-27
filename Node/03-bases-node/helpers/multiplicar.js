const fs = require('fs');

const crearArchivo = ( base = 5) => {

    return new Promise((resolve, reject) => {

        console.log('=====================');
    
        console.log('   tabla del: ', base);
        
        console.log('=====================');
        
        let salida = "";
        
        for (let index = 1; index <= 10; index++) {
          salida += `${base} X ${index}  = ${base * index}\n`;
        }
    
        console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        resolve(`tabla-${base}.txt creado`);
        
    })

}

module.exports = {
    crearArchivo
}




