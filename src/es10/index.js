// Devolver una matriz con cualquier submatriz aplanada 
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

// flat map - Permite mapear cada elemento despues pasarle una funcion y aplanarlo segun el resultado
 let array = [1,2,3,4,5];
 console.log(array.flatMap( value => [value, value*2]));

 let hello = '       hello world'
 console.log(hello);
 console.log(hello.trimStart());

 let hello = 'hello World       ';
 console.log(hello.trimEnd());


// OPtional catch binding - Pasar de forma opcional el error al catch

try{

} catch {
    error 
}

// From entries - transformar clave valor en un objeto (es una opcion si trabajas con arreglos y quieres pasar a obj)

let entries = [["name", "oscar"],["age", 32]];
console.log(Object.fromEntries(entries));

// Objeto de tipo simbolo - permite acceder a una descripcion
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);