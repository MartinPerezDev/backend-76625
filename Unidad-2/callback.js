function saludar(nombre, callback){
  console.log("Hola "+nombre);

  callback();
}

function despedir(){
  console.log("Adios, que tengas un buen dia!");
}

saludar("Benicio", despedir);


//
let arrayNumeros = [1, 2, 3, 4, 5];

function funcionCallback(numero){
  return numero + 1
}

let nuevoArray = arrayNumeros.map( funcionCallback );
//let nuevoArray = arrayNumeros.map( numero => numero + 1 );

console.log(nuevoArray);