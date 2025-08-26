class Persona{

  //sirve para inicializar propiedades de la clase
  constructor(nombre, edad, humor){
    this.nombre = nombre
    this.edad = edad
    this.humor = humor
  }

  //metodos
  saludar(cansancio){
    const mensaje = "Hola, me llamo " + this.nombre + " y tengo " + this.edad
    return mensaje
  }

  trabajar(){
    this.humor = this.humor - 5
    return "El humor disminuyo -5"
  }

  dormir(){
    this.humor = this.humor + 50
    return this.nombre + " durmio correctamente y su humor aumento +50"
  }

  verHumor(){
    return this.humor
  }
}

const persona1 = new Persona( "Javier", 25, 10 )
const persona2 = new Persona( "Alessandro", 35, 100 )

console.log( persona1.saludar( { cansancio: 10 } ) )
console.log( persona2.saludar() )

console.log( persona1.trabajar() )
console.log( persona1.trabajar() )
console.log( persona1.dormir() )
console.log( persona1.verHumor() )