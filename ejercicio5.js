/*
Ejercicio 5: Promesa con Cancelación
Crea una función que realice las siguientes tareas:

Inicia una promesa que se resuelva después de 5 segundos con un mensaje.
Si se llama a una función cancel antes de que se cumplan los 5 segundos, la promesa debe rechazarse con el mensaje "Promesa cancelada".
*/

function cancelFunction() {
  let flag = false;

  function cancel() {
    flag = true;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!flag) {
        resolve("Promesa resuelta");
      } else {
        reject("Promesa cancelada");
      }
    }, 5000);

    cancel();
  });

  return promise;
}

const promise = cancelFunction();

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
