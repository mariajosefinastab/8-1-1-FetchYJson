// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(studentsArray) {
 
  if (!Array.isArray(studentsArray)) {
    console.error(`Re trucho el array`, dataArray); //Me devuelve error en students array
    return;
  }
 // El for itera sobre los elementos del array
  for (const students of studentsArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${students.name} ${students.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  } 
}

// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData


  fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error (`Tengo un error en la response ${response.status}`);
    }
    return response.json(); //Sino pongo los datos en este json
  })

  .then(data => {
    showData(data.students);
  })
  .catch(error => {
    console.error('Tengo un error en la data', error); //Me devuelve un error acá porque el Array no es un array
  }); 




/* async function fetchAndShowData(showData) { //Creo función que le hace el fetch a la función showData
  try {
    const response = await fetch(DATA_URL); //Le pido que pruebe en hacer la solicitud de datos a la URL y guarde la respuesta
  
    if (!response.ok) { //Si la respuesta es !Diferente a Ok(es decir, que me de bien)
      throw new Error (`Tengo un error en la response ${response.status}`); //throw new error a diferencia de console.log me para la ejecución si encuentra un error
    }

    //Si me da todo bien
    const data = await response.json();

    showData(data); //Traigo a data con los datos que obtuve en el fetch
  } catch (error) {

    console.error('Acá tengo un error en este dato:', error);
  }
}

fetchAndShowData(showData); //LLamo a fetchShowData y le paso showData  */