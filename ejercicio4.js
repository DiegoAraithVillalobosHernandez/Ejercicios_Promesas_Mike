/*
Ejercicio 4: Promesas en Cadena con Retraso
Crea una función que realice las siguientes tareas:

Recibe un número n como argumento.
Utiliza un bucle para crear una cadena de promesas, donde cada promesa se resuelve después de N segundos con el número actual en el bucle.
Cada promesa debe imprimir el número en la consola antes de resolverse.
Finalmente, devuelve una promesa que se resuelva después de N segundos con el mensaje "Todas las promesas se resolvieron".
*/

function promises(n) {
  const promisesArr = [];

  for (let i = 1; i <= n; i++) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("promesa:", i);
        resolve(i);
      }, i * 1000);
    });

    promisesArr.push(promise);
  }

  return Promise.all(promisesArr).then(() => "Promesas resueltas");
}

promises(10)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error("error:", error);
  });
