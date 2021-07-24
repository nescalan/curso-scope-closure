const papaDeMarco = (nombre) => {
    var nombreDePapa = '';
    nombreDePapa = nombre;
    console.log(`El nombre del papa de Marco es: ${nombreDePapa}`);
}

papaDeMarco('nelson');


const papaDeMarco = () => {
    var nombreDePapa = '';

    const marcosDad = (nombre) => {
        nombreDePapa = nombre;
        console.log(`El nombre del papa de Marco es: ${nombre}`);
    }
    return marcosDad;
}
papaDeMarco('Nelson Gonzalez');

function dragon(a, b) {
    var numero1 = a;
    var numero2 = b;
    var suma = a +b;
    
    return suma;
}

dragon(5, 18)