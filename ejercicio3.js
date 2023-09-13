/*
Ejercicio 3: Promesas Paralelas
Crea una función que realice las siguientes tareas:

Recibe un array de funciones que devuelven promesas como argumento.
Ejecuta todas las funciones en paralelo y espera a que todas las promesas se resuelvan.
Devuelve una promesa que se resuelva con un array de los resultados de todas las promesas.
*/

function parallelPromisesHandler(funcs) {
  const promises = funcs.map((func) => func());
  return Promise.all(promises);
}

const promise1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promesa 1 resolve");
    }, 2000);
  });
};

const promise2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promesa 2 resolve");
    }, 3000);
  });
};

parallelPromisesHandler([promise1, promise2])
  .then((result) => {
    console.log("Final:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
