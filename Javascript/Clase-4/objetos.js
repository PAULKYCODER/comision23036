class Persona {
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    //Getter 
    //Getter para obtener el nombre
    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    get edad(){
        return this._edad;
    }
    
    get nombreCompleto(){
        return `Apellido: ${this.apellido} Nombre: ${this.nombre} `
        //console.log("Apellido:", this.apellido + ' ' + "Nombre: " + this.nombre);
    }

    //Setter
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    set edad(nuevaEdad){
        if(nuevaEdad > 0)
            this._edad = nuevaEdad;
        else
            console.log("Ingreso una edad erronea");
    }
    set apellido(nuevoApellido){
        this._apellido = nuevoApellido;
    }

    saludar = () =>{
        console.log(`Hola Soy ${this.nombreCompleto}`)
    }
}

//Crear una instancia de Persona

let persona1 = new Persona("Mario","Cano",33);
let persona2 = new Persona("Pedro", "Chavez", 25);
//obtener info de la persona
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);
console.log(persona1.nombreCompleto);

console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.edad);
console.log(persona2.nombreCompleto);
persona1.saludar();

// let nombreTeclado = prompt("Ingrese su nombre");
// let apellidoTeclado = prompt("Ingrese su apellido");
// let edadTeclado = prompt("Ingrese su edad");
// let persona3 = new Persona(nombreTeclado,apellidoTeclado,edadTeclado)

// console.log(persona3.nombre);
// console.log(persona3.apellido);
// console.log(persona3.edad);
// document.write(persona3.nombreCompleto);


// //Actualizar la edad
// persona3.edad = -12;
// console.log(persona3.edad);


let cadena = "    Esto es un objeto string    ";
console.log("Length de la cadena de caracteres",cadena.length);
console.log(cadena.indexOf("o"));
console.log(cadena.toUpperCase());
console.log(cadena.split(' '));

let num = Math.random();
console.log(num*10);
console.log(Math.PI);