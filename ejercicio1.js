/*
Ejercicio 1: Promesas Encadenadas
Crea una función que realice las siguientes tareas:

Inicia una promesa que se resuelva después de 2 segundos con un número aleatorio entre 1 y 100.
Luego, toma ese número y crea una segunda promesa que se resuelva después de 3 segundos con el resultado de elevar ese número al cuadrado.
Finalmente, toma el resultado de la segunda promesa y crea una tercera promesa que se resuelva después de 1 segundo con la raíz cuadrada del número resultante.
*/

function chainedPromises() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        resolve(randomNumber);
      }, 2000);
    } catch (error) {
      reject(error);
    }
  })
    .then((randomNumber) => {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() => {
            const squaredNumber = Math.pow(randomNumber, 2);
            resolve(squaredNumber);
          }, 3000);
        } catch (error) {
          reject(error);
        }
      });
    })
    .then((squaredNumber) => {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() => {
            const squareRoot = Math.sqrt(squaredNumber);
            resolve(squareRoot);
          }, 1000);
        } catch (error) {
          reject(error);
        }
      });
    });
}

chainedPromises()
  .then((result) => {
    console.log("Final:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
