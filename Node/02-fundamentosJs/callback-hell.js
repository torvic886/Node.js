const empleados = [
    {
        id: 1,
        nombre: 'Victor'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Amalia'
    }
];


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    }
];


const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e =>  e.id === id)

    if (empleado) {
         callback(null,empleado);
    } else {
        callback( `Empleado con id ${ id } no existe`); 
    }

    return empleado;
}
//null = false en javaScript

//console.log(getEmpleado(2));

getEmpleado(1, (err, empleado) => {

    if (err) {
        console.log('Error!');       
        return console.log(err);       
    }
    console.log('Empleado Existe');   
    console.log(empleado);
})










