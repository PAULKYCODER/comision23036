// // //Array o vector
// // //Array vacio
// // const array = [];
// // // Arrancas desde la posicion 0
// // // arrayNumeros[0] --> 1
// // const arrayNumeros = [1,2,3,4,5,11,99];

// // let arrayMixto = ["a",1,"b",2,"auto",2,true,false,"fin"];

// // // //Recorrer un array
// // // for(let i = 0; i < arrayMixto.length; i++)
// // //     console.log(arrayMixto[i]);



// // // //push agrega al final del array
// // // arrayMixto.push(5);
// // // arrayMixto.push("chevrolet");
// // // arrayMixto.push("azul");
// // // console.log(arrayMixto);
// // // for(let i = 0; i < arrayMixto.length; i++)
// // //     console.log(arrayMixto[i]);

// // // //elimina del final del array
// // // arrayMixto.pop();
// // // for(let i = 0; i < arrayMixto.length; i++)
// // //     console.log(arrayMixto[i]);


// // // unshif --> agregar al principio del array
// // arrayMixto.unshift("River");
// // arrayMixto.unshift("Boca");
// // arrayMixto.unshift("Amarillo");
// // arrayMixto.unshift("ZZZZ");
// // for(let i = 0; i < arrayMixto.length; i++)
// //     console.log(arrayMixto[i]);

// // //arrayMixto[3] --> Posicion especifica 
// // // console.log(arrayMixto[3]);
// // // //Elimina la primer posicion
// // // arrayMixto.shift();
// // // for(let i = 0; i < arrayMixto.length; i++)
// // //     console.log(arrayMixto[i]);

// // // indexOf --> buscar la posicion de un elemento dentro del array
// // console.log("Posicion del indexOf", arrayMixto.indexOf("auto"));
// // console.log("Posicion del indexOf", arrayMixto.indexOf("ZZZZ"));
// // console.log("Posicion del indexOf", arrayMixto.indexOf(1));

// // // console.log(arrayMixto); 
// // // .splice() Agrega o elimina elementos a un array. Regresa los elementos eliminados.
// // // console.log(arrayMixto.splice());
// // //Elimina las primeras dos posiciones
// // // console.log(arrayMixto.splice(2));
// // // //Nos quedamos desde la pos 2 hasta la 5 
// // // console.log(arrayMixto.splice(2,5));

// // // console.log(arrayMixto); 
// // // // .slice() Devuelve los elementos seleccionados en un array como un array nuevo.
// // // let newArray = arrayMixto.slice(2,4);
// // // console.log(newArray); 


// // arrayMixto.forEach(element => {
// //     console.log(element);
// // });
// // for(item in arrayMixto){
// //     console.log(item);
// //     if(item == 1)
// //         console.log("Se encontro!")
// // }

// const array = [1,2,3];
// const newArray = array.map((elemento) => elemento *2);
// console.log(newArray);

// let arrayFilter = array.filter((pos) => pos >=3);
// console.log(arrayFilter);

//Como almacenamos en la localStorage
localStorage.setItem('nombre','Pedro');

const nom = localStorage.getItem('nombre');
console.log(nom);

const fecha = localStorage.getItem('_uetsid_exp');
console.log(fecha);

localStorage.removeItem('nvgpersona58918');

{"previousVisit":1681943217,"currentVisitStarted":1683588061,"sessionId":"5beebd48-cc00-4809-bcda-66eb510f63fd","sessionVars":[],"visitedInThisSession":true,"pagesViewed":4,"landingPage":"https://www.infobae.com/","referrer":""}

// {"previousVisit":1681943217,"currentVisitStarted":1683588061,"sessionId":"5beebd48-cc00-4809-bcda-66eb510f63fd","sessionVars":[],"visitedInThisSession":true,"pagesViewed":5,"landingPage":"https://www.infobae.com/","referrer":""}
