// Operador de reposo - extrae las propiedades de un objeto que aun no se a construido

const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX'
};

let { country, ...all } = obj;
console.log(all);

// <utilizando las propiedades de propagacion unir varios objetos  en un nuevo objeto
const obj = {
    name : 'Oscar',
    age: 32
}
const obj1 = {
    ...obj,
    country: 'MX'
}
console.log(obj1); 

// Saber cuando ha terminado  el llamado y poder ejecutar una funcion o logica de codigo
const helloWorld = ()=>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout( () => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(reject => console.log(error))
    .finally(() => console.log('Finalizo'));

// Ayuda a entender cuando estas trabajando con regex, agrupar bloques de regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20'); 
const year = match[1];
const month = match[2];
const day = match[3];// Caracteristica que nos permite trabajar con los regex hacia un grupo
console.log (year, month, day);