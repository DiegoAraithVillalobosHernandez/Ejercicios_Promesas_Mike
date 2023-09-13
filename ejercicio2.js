/*
Ejercicio 2: Promesa de Múltiples Solicitudes
Crea una función que realice las siguientes tareas:

Recibe un array de URLs como argumento.
Utiliza fetch y promesas para realizar una solicitud GET a cada URL en el array.
Devuelve una promesa que se resuelva con un array de los resultados de todas las solicitudes.
*/
const urls = [
  "https://swapi.dev/api/people/1/",
  "https://swapi.dev/api/planets/3/",
  "https://swapi.dev/api/starships/9/",
];

function fetchUrs(urls) {
  let requests = urls.map((url) => fetch(url));
  return Promise.all(requests);
}

fetchUrs(urls)
  .then((responses) => {
    console.log(responses);
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
